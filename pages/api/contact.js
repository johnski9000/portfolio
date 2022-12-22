import { mailOptions, transporter } from "../../config/NodeMailer";

const handler = (req, res) => {
  console.log(req.body);
  if (req.method === "POST") {
    const data = req.body;
    if (!data.Name || !data.Email || !data.Message) {
      return res.status(400).json({ message: "Bad request" });
    }
    try {
      transporter.sendMail({
        ...mailOptions,
        subject: "New Customer Email",
        text: "This is a test string",
        html: `<h1>New Customer Email</h1><p>${data.Email}</p><p>${data.Message}</p>`,
      });
      return res.status(200).json({ message: "Successfully sent" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};

export default handler

