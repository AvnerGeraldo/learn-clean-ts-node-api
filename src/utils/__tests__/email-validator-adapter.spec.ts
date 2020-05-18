import { EmailValidatorAdapter } from '../email-validator-adapter'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

// Factory
const makeSut = (): EmailValidatorAdapter => new EmailValidatorAdapter()

describe('EmailValidator Adapter', () => {
  test('Should return false if validator retuns false', () => {
    const sut = makeSut()

    // Mock isEmail
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)

    const isValid = sut.isValid('invalid_email@mail.com')

    expect(isValid).toBe(false)
  })

  test('Should return true if validator retuns true', () => {
    const sut = makeSut()
    const isValid = sut.isValid('valid_email@mail.com')

    expect(isValid).toBe(true)
  })

  test('Should call validator with correct email', () => {
    const sut = makeSut()
    const anyEmail = 'any_email@mail.com'

    // Spy isEmail
    const isEmailSpy = jest.spyOn(validator, 'isEmail')

    sut.isValid(anyEmail)

    expect(isEmailSpy).toHaveBeenCalledWith(anyEmail)
  })
})
