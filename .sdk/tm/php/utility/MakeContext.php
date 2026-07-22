<?php
declare(strict_types=1);

// EmailValidation SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class EmailValidationMakeContext
{
    public static function call(array $ctxmap, ?EmailValidationContext $basectx): EmailValidationContext
    {
        return new EmailValidationContext($ctxmap, $basectx);
    }
}
