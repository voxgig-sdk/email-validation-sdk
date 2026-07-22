<?php
declare(strict_types=1);

// EmailValidation SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class EmailValidationFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new EmailValidationBaseFeature();
            case "test":
                return new EmailValidationTestFeature();
            default:
                return new EmailValidationBaseFeature();
        }
    }
}
