-- EmailValidation SDK error

local EmailValidationError = {}
EmailValidationError.__index = EmailValidationError


function EmailValidationError.new(code, msg, ctx)
  local self = setmetatable({}, EmailValidationError)
  self.is_sdk_error = true
  self.sdk = "EmailValidation"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function EmailValidationError:error()
  return self.msg
end


function EmailValidationError:__tostring()
  return self.msg
end


return EmailValidationError
