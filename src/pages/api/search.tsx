//@delete:file
import type { NextApiRequest, NextApiResponse } from 'next'

import SearchAction from '@/agent/search'

export default async function search(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { query, category, startDate, endDate } = req.query

  const result = await SearchAction(
    query ? String(query) : '',
    category ? String(category) : '',
    startDate ? String(startDate) : '',
    endDate ? String(endDate) : '',
  )
  res.status(200).json({ result })
}
