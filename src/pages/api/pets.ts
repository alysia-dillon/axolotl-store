import type { NextApiRequest, NextApiResponse } from 'next';
import pets from '../../../public/pets.json'; // Path to your JSON file

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(pets);
}
