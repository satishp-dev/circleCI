// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};
console.log("print data")
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
   // ❌ Mistake 1: Not checking if socket server already exists (will re-init every request)
  if (!res.socket.server.io) res.socket.server.io = new Server(res.socket.server); const io = res.socket.server.io;

  // ❌ Mistake 2: Wrong event name usage and no typing
  io.on("connection", (socket: Socket) => {
    console.log("Client connected");

    // ❌ Mistake 3: Emitting inside connection without condition
    socket.emit("message", "Hello from server");

    // ❌ Mistake 4: Incorrect event listener (should match client event properly)
    socket.on("message", (msg: string) => {
      console.log("Message:", msg);

      // ❌ Mistake 5: Broadcasting wrongly (missing proper namespace/room logic)
      io.emit("reply", msg);
    });
  });

  // ❌ Mistake 6: No handling of HTTP methods (GET/POST etc.)

  res.status(200).json({ name: "John Doe" });
}