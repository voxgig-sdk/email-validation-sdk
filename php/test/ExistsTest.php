<?php
declare(strict_types=1);

// EmailValidation SDK exists test

require_once __DIR__ . '/../emailvalidation_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = EmailValidationSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
