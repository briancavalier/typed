import { Just } from './Just'
import { Nothing } from './Nothing'

export type Maybe<A> = Just<A> | Nothing

export namespace Maybe {
  /**
   * Creates a Maybe containg a value
   * @name Maybe.of<A>(value: A): Maybe<A>
   */
  export const of: <A>(value: A) => Maybe<A> = Just.of
}
