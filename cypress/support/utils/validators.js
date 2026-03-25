export function validateUser(user) {
  expect(user.firstName, 'First name is required').to.exist
  expect(user.lastName, 'Last name is required').to.exist
  expect(user.zipCode, 'Zip code is required').to.exist
}