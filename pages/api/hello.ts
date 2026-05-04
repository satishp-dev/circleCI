// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

for (let i = 0; i < 3; i++) {
   console.log("print data", Data);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
 res.status(200).json({ name: "John Doe" });
}