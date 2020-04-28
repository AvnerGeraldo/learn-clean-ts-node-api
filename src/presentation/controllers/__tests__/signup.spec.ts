import { SignupController } from '../signup'

describe('Signup Controller', () => {
  // Test if fields are sent by the route
  test('Should return 400 if no name is provided', () => {
    const sut = new SignupController() // sut = System under test
    const httpRequest = { // Post Request
      body: {
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
