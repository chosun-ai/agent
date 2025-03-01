//@delete:file
import type { NextApiRequest, NextApiResponse } from 'next'

import axios from 'axios'

export default async function search(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { q } = req.query

  const params = {
    q: q,
  }

  const { data } = await axios({
    method: 'GET',
    url: `https://search-api-smoky.vercel.app/v1/search`,
    // url: `http://127.0.0.1:8000/v1/search`,
    headers: {
      'CHOSUN-API-KEY': `${process.env.CHOSUN_API_KEY}`,
    },
    params,
  })
  res.status(200).json(data)
}
