const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
const { GOOGLE_USER, GOOGLE_ID, GOOGLE_SECRET, GOOGLE_REFRESH, GOOGLE_URL } = process.env


const sendMail = async (mail, code, name, photo) => {

    const client = new OAuth2(
        GOOGLE_ID,
        GOOGLE_SECRET,
        GOOGLE_URL

    )


    client.setCredentials({
        refresh_token: GOOGLE_REFRESH
    })

    const accessToken = client.getAccessToken()



    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: GOOGLE_USER,
            type: 'OAuth2',
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            refreshToken: GOOGLE_REFRESH,
            accessToken: accessToken
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        from: GOOGLE_USER,
        to: mail,
        subject: 'Verify your Pulp Fiction Account',
        html: `
            <h1 style="text-align: center; color: #20d8ed;"><strong>
            <img src="https://cdn.discordapp.com/attachments/1009863859537989682/1018971999898451989/verifyEmail.png" style="display: block; margin-left: auto; margin-right: auto; " width="450"  ></strong></h1>
            <p style="text-align: center;"><strong>Pulp Fiction Travel email confirmation<br />  ${name}!  Thank you for your joining us!, we hope you find the trip of your DREAMS</strong></p>
            <p style="text-align: center;">&nbsp;</p>
            <p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.pinimg.com/originals/ba/4e/51/ba4e51dbabcc361e9393d32f2514624d.gif" width="543" height="330" /></strong></p>
            <p>&nbsp;</p>
            <p style="text-align: center;">Please click the link to verify your email.  <br/> <br/>  <a style="background: #04BF9D; color: #ffffff; padding: 10px 50px; border-radius: 3px; text-align: center;" href="https://localhost:4000/${code}">confirm</a></p>
        `
    }


    await transport.sendMail(mailOptions, (error, response) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Receive ok")
        }
    })




}


module.exports = sendMail