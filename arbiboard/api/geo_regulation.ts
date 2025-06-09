
import type { NextApiRequest, NextApiResponse } from 'next';

const licenseMap = {
  US: ['NJ DGE', 'CO DOR', 'MI MGCB'],
  SEA: ['PAGCOR', 'CAMBOSIX', 'MALAYSIA MYGOV'],
  LATAM: ['ColJuegos', 'Loteria SP', 'BetBrasil Lic.']
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { region } = req.query;
  if (!region || typeof region !== 'string') {
    return res.status(400).json({ error: 'Region not specified' });
  }

  const licenses = licenseMap[region.toUpperCase()];
  if (!licenses) {
    return res.status(404).json({ error: 'Region not supported' });
  }

  res.status(200).json({ region, licenses });
}
