import { TransactionAttributes } from '@repositories/attributes'
import { IRepository } from '@repositories/ports'

export type TransactionList = Pick<
  TransactionAttributes,
  '_id' | 'title' | 'timestamp' | 'amount' | 'related'
>[]

export type ItemsAndPayersList = Pick<
  TransactionAttributes,
  'items' | 'payers'
>[]

export interface ITransactionsRepository extends IRepository {
  save(transaction: TransactionAttributes): Promise<void>

  list(skipLimit?: { skip: number; limit: number }): Promise<TransactionList>
  listByMonth(
    month: string,
    skipLimit?: { skip: number; limit: number }
  ): Promise<TransactionList>

  count(): Promise<number>
  countByMonth(month: string): Promise<number>

  listItemsAndPayersByMonth(month: string): Promise<ItemsAndPayersList>

  findById(id: string): Promise<TransactionAttributes | null | undefined>

  getNotRegisteredMonths(lastMonth: string): Promise<string[]>
}
