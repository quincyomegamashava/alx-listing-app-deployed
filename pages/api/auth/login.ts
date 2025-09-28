import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // Very basic stub: accept any email/password and set a dummy token cookie
  const { email } = req.body || {};
  const token = Buffer.from(`${email || "guest"}:dev`).toString("base64");

  res.setHeader(
    "Set-Cookie",
    `token=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`
  );
  return res.status(200).json({ ok: true });
}
