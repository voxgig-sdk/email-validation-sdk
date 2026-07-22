# EmailValidation SDK exists test

require "minitest/autorun"
require_relative "../EmailValidation_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = EmailValidationSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
