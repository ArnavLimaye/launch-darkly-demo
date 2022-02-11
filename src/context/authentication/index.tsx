const users = [
  {
    id: 'user-1',
    name: 'user 1',
    email: 'user1@gmail.com',
  },
  {
    id: 'user-2',
    name: 'user 2',
    email: 'user2@gmail.com',
  },
  {
    id: 'user-3',
    name: 'user 3',
    email: 'user3@gmail.com',
  },
  {
    id: 'user-4',
    name: 'user 4',
    email: 'user4@gmail.com',
  },
];

export default function getUserData() {
  return users[Math.floor(Math.random() * users.length)];
}
