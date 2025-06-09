
import type { NextApiRequest, NextApiResponse } from 'next';
import { spawn } from 'child_process';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { opportunity, stake } = req.body;
    if (!opportunity || !stake) {
      return res.status(400).json({ error: "Invalid payload" });
    }
    const result = {
      status: "MOCKED_SUCCESS",
      bookmaker: "Pinnacle",
      odds: opportunity.odds["Pinnacle"] || 2.10,
      stake
    };
    return res.status(200).json(result);
  } else {
    return res.status(405).end();
  }
}
