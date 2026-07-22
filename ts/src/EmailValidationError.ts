
import { Context } from './Context'


class EmailValidationError extends Error {

  isEmailValidationError = true

  sdk = 'EmailValidation'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  EmailValidationError
}

