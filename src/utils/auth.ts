export async function signin({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const users: any[] = get('users');

  const check = users.find(user => user.username?.toLowerCase() === username.toLowerCase());

  if (!check) {
    return {
      status: 404,
      statusText: 'Invalid Credentials'
    }
  }

  set('auth', [
    {
      username,
      password,
    }
  ])

  return {
    status: 200,
    statusText: 'login successfully'
  }

}

export async function signUp({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const users: any[] = get('users');

  const check = users.find(user => user.username?.toLowerCase() === username.toLowerCase());

  if (check) {
    return {
      status: 401,
      statusText: 'User already exists'
    }
  }
  users.push({
    username,
    password,
  })

  set('users', users);

  return {
    status: 200,
    statusText: 'created user successfully'
  }
}

export function set(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function get(key: string) {
  const users = localStorage.getItem(key);
  return users ? JSON.parse(users) : [];
}
