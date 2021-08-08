import { InvalidError, InvalidFields, IErrorHandler } from '@errors/contracts'

export class EntityErrorHandler implements IErrorHandler {
  private errorList: InvalidFields

  constructor() {
    this.errorList = []
  }

  public addError(error: InvalidError, field: string): void {
    this.errorList.push({ error, field })
  }

  get hasErrors(): boolean {
    return this.errorList.length > 0
  }

  get errors(): InvalidFields {
    return [...this.errorList]
  }

  get firstError(): InvalidError | null {
    return this.hasErrors ? this.errorList[0].error : null
  }
}
