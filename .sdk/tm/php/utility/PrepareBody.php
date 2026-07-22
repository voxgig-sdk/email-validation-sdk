<?php
declare(strict_types=1);

// EmailValidation SDK utility: prepare_body

class EmailValidationPrepareBody
{
    public static function call(EmailValidationContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
