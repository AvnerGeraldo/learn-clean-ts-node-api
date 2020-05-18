import { EmailValidatorAdapter } from '../email-validator'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

describe('EmailValidator Adapter', () => {
  test('Should return false if validator retuns false', () => {
    const sut = new EmailValidatorAdapter()

    // Mock isEmail
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)

    const isValid = sut.isValid('invalid_email@mail.com')

    expect(isValid).toBe(false)
  })

  test('Should return true if validator retuns true', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('valid_email@mail.com')

    expect(isValid).toBe(true)
  })

  test('Should call validator with correct email', () => {
    const sut = new EmailValidatorAdapter()
    const anyEmail = 'any_email@mail.com'

    // Spy isEmail
    const isEmailSpy = jest.spyOn(validator, 'isEmail')

    sut.isValid(anyEmail)

    expect(isEmailSpy).toHaveBeenCalledWith(anyEmail)
  })
})
