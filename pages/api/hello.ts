// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};
console.log("print data")
console.log("print data")
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
   // ❌ Mistake 1: Not checking if socket server already exists (will re-init every request)
 res.status(200).json({ name: "John Doe" });
}
