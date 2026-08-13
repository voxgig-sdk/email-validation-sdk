# EmailValidation SDK feature factory

from emailvalidation_sdk.feature.base_feature import EmailValidationBaseFeature
from emailvalidation_sdk.feature.test_feature import EmailValidationTestFeature


def _make_feature(name):
    features = {
        "base": lambda: EmailValidationBaseFeature(),
        "test": lambda: EmailValidationTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
