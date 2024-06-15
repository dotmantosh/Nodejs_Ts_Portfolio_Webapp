import { Request, Response, NextFunction } from "express";
import emailService from "../services/email.service"
class PublicController {
  static async SendContactUsEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, message } = req.body

      const Message = `
        <p>
          <strong>Name: </strong> ${name}
        </p>
        <br/>

        <p>
          <strong>Email: </strong> ${email}
        </p>

        <br/>

        <p>
          <strong>Message: </strong> ${message}
        </p>
      `

      await emailService.sendEmail({
        to: process.env.NODEMAILER_EMAIL as string,
        subject: 'Devfolio contact us',
        html: Message
      })
      res.status(200).send({ message: "Message sent successfully" })
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
}

export default PublicController