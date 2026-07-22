-- EmailValidation SDK exists test

local sdk = require("email-validation_sdk")

describe("EmailValidationSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
