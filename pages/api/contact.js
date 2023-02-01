import { getNamedMiddlewareRegex } from "next/dist/shared/lib/router/utils/route-regex";

// Next.js API route support: https://nextjs.org/docs/api-routes/
require("dotenv").config();
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const { name, email, phone, service, message } = req.body;

  const msg = {
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL,
    subject: "Business Enquiry - Data Megathos",
    html: `<p><strong>Name: </strong>${name}</P>
  <p><strong>Email: </strong>${email}</P>
  <p><strong>Phone Number: </strong>${phone}</P>
  <p><strong>Service: </strong>${service}</P>
  <p><strong>Message: </strong>${message}</P>`,
  };

  await sgMail.send(msg);

  res.status(200).json({ success: true });
}
