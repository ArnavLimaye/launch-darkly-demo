const users = [
  {
    id: 'user-1',
    name: 'user 1',
    email: 'user1@gmail.com',
    country: 'India',
  },
  {
    id: 'user-2',
    name: 'user 2',
    email: 'user2@gmail.com',
    country: 'Australia',
  },
  {
    id: 'user-3',
    name: 'user 3',
    email: 'user3@gmail.com',
    country: 'Australia',
  },
  {
    id: 'user-4',
    name: 'user 4',
    email: 'user4@gmail.com',
    country: 'India',
  },
];

export default function getUserData() {
  const user = users[Math.floor(Math.random() * users.length)];
  console.log('User :', user);
  return user;
}
