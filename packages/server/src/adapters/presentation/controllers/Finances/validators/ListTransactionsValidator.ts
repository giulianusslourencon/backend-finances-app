import { HttpRequest, IValidator } from '@presentation/contracts'
import { InvalidInputError } from '@presentation/controllers/errors'
import { ListQueryViewModel } from '@presentation/viewModels/Finances'
import * as Yup from 'yup'

import { Either, left, right } from '@shared/types'

export class ListTransactionsValidator implements IValidator {
  private format(data: ListQueryViewModel): ListQueryViewModel {
    return {
      month: data.month && data.month.toString().trim(),
      nItems: data.nItems && parseInt(data.nItems.toString()),
      page: data.page && parseInt(data.page.toString())
    }
  }

  validate(
    request: HttpRequest<Record<string, never>, ListQueryViewModel>
  ): Either<
    InvalidInputError,
    HttpRequest<Record<string, never>, ListQueryViewModel>
  > {
    const schema = Yup.object().shape({
      page: Yup.number().integer().positive().optional(),
      nItems: Yup.number().integer().positive().optional(),
      month: Yup.string()
        .trim()
        .matches(/^\d{6}$/, 'month must be a number of exactly 6 positions')
        .optional()
    })

    try {
      schema.validateSync(request.query)
      request.query = this.format(request.query)
      return right(request)
    } catch (error) {
      const yupError = error as Yup.ValidationError
      return left(new InvalidInputError(yupError.errors))
    }
  }
}
