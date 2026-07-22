# EmailValidation SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module EmailValidationFeatures
  def self.make_feature(name)
    case name
    when "base"
      EmailValidationBaseFeature.new
    when "test"
      EmailValidationTestFeature.new
    else
      EmailValidationBaseFeature.new
    end
  end
end
