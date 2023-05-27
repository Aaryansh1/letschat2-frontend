import { NextApiRequest, NextApiResponse } from 'next';
import { fetchAPI } from '../utils/Api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const data = await fetchAPI<{ responseData: any }>(
        '/api/endpoint',
        'GET',
        {}
      );
      res.status(200).json(data);
    } catch (error: any) {
      res.status(500).json({ message: (error as Error).message });
    }
  }
  else if (req.method === 'POST') {
    // Here you can handle the POST request and perform any necessary operations
    // For example, create a new user based on the request body
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      // Additional user properties
    };

    // Return a response with the newly created user
    res.status(201).json(newUser);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
