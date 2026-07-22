# ProjectName SDK exists test

import pytest
from emailvalidation_sdk import EmailValidationSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = EmailValidationSDK.test(None, None)
        assert testsdk is not None
