<?php
declare(strict_types=1);

// EmailValidation SDK utility: result_body

class EmailValidationResultBody
{
    public static function call(EmailValidationContext $ctx): ?EmailValidationResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
