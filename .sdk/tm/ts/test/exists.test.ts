
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { EmailValidationSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await EmailValidationSDK.test()
    equal(null !== testsdk, true)
  })

})
