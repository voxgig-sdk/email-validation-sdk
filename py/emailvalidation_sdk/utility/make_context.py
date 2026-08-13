# EmailValidation SDK utility: make_context

from emailvalidation_sdk.core.context import EmailValidationContext


def make_context_util(ctxmap, basectx):
    return EmailValidationContext(ctxmap, basectx)
