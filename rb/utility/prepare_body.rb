# EmailValidation SDK utility: prepare_body
require_relative 'media'
module EmailValidationUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return EmailValidationUtilities.raw_body(ctx.reqdata) if EmailValidationUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
