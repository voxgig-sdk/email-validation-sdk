# EmailValidation SDK utility: make_context
require_relative '../core/context'
module EmailValidationUtilities
  MakeContext = ->(ctxmap, basectx) {
    EmailValidationContext.new(ctxmap, basectx)
  }
end
