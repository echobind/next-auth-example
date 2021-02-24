import { getSession } from 'next-auth/client'

const data = [
  {value: 'My Things', colorScheme: null},
  {value: 'Stuff', colorScheme: 'green'},
  {value: 'Foo', colorScheme: 'red'},
  {value: 'Bar', colorScheme: 'purple'},
  {value: 'Baz', colorScheme: 'blue'},
];

export default async (req, res) => {
  const session = await getSession({req});
  if (!session) {
    return res.redirect('/')
  }
  res.status(200).json(data)
}


