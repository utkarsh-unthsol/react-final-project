export function getUsername() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) { return ''; }

  return user.email.split('@')[0];
}

export function getPhoneNo() {
  const user = JSON.parse(localStorage.getItem('user'));
  return String(parseInt(user?.email, 36) % 10000000000).padEnd(10, 0);
}

export function getLoggedInUser() {
  return JSON.parse(localStorage.getItem('user')) || null;
}

export function logout() {
  localStorage.removeItem('user');
}

export function login(user) {
  localStorage.setItem('user', JSON.stringify(user));
}
