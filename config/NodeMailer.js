import nodemailer from "nodemailer"
const email = process.env.EMAIL
const pass = process.env.EMAIL_TEST_APP_PSW
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  }
});
export const mailOptions = {
from: email,
to: email
}
