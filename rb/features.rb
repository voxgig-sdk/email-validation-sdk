# EmailValidation SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module EmailValidationFeatures
  def self.make_feature(name)
    case name
    when "base"
      EmailValidationBaseFeature.new
    when "ratelimit"
      EmailValidationRatelimitFeature.new
    when "retry"
      EmailValidationRetryFeature.new
    when "test"
      EmailValidationTestFeature.new
    when "timeout"
      EmailValidationTimeoutFeature.new
    else
      EmailValidationBaseFeature.new
    end
  end
end
