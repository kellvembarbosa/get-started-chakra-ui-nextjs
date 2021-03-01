import { NextApiRequest, NextApiResponse } from 'next';
import React from 'react'

export default function (req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({
        error: false,
        status: res.statusCode,
        message: res.statusMessage
    })
}
