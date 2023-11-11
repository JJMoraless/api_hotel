import nodemailer from 'nodemailer'

export let transporter

try {
  transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'softwaredreamfive@gmail.com',
      pass: 'zday kgsf tpos wqns',
    },
  })
  transporter.verify().then(() => {
    console.log('ready to send emails')
  })
} catch (error) {
  console.log(error)
}
