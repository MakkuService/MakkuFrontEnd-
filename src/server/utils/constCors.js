const WHITE_LIST = [
  'http://localhost:1234',
  'http://localhost:3000',
  'https://localhost:3000',
];

const METHODS = [
  'GET',
  'HEAD',
  'PUT',
  'PATCH',
  'POST',
  'DELETE',
];

const ALLOWED_HEADERS = [
  'Content-Type',
  'origin',
  'x-access-token',
  'X-Requested-With',
  'Accept',
];

export { METHODS, ALLOWED_HEADERS, WHITE_LIST };
