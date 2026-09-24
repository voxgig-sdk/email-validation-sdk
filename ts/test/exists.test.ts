
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { EmailValidationSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = EmailValidationSDK.test()
    equal(testsdk instanceof EmailValidationSDK, true,
      'EmailValidationSDK.test() must return a client synchronously')
  })

})
