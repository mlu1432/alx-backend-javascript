// __tests__/test.js
import { uploadPhoto, createUser } from '../utils';

test('uploadPhoto returns correct response', () => {
  return uploadPhoto().then(response => {
    expect(response).toEqual({
      status: 200,
      body: 'photo-profile-1',
    });
  });
});

test('createUser returns correct response', () => {
  return createUser().then(user => {
    expect(user).toEqual({
      firstName: 'Guillaume',
      lastName: 'Salva',
    });
  });
});
