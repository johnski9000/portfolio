import nodemailer from "nodemailer"
const email = process.env.EMAIL
const password = process.env.EMAIL_TEST_APP_PSW
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jwdigitalltd@gmail.com",
    pass: "fidvjwawgbyssidd",
  }
});
export const mailOptions = {
from: "jwdigitalltd@gmail.com",
to: "jwdigitalltd@gmail.com"
}
