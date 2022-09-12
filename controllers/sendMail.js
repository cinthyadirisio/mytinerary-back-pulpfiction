const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const OAuth2 = google.auth.OAuth2
const {GOOGLE_USER, GOOGLE_ID,GOOGLE_SECRET,GOOGLE_REFRESH,GOOGLE_URL} = process.env


const sendMail = async (mail, code) => {

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
        auth:{
            user: GOOGLE_USER,
            type: 'OAuth2',
            clientId : GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            refreshToken: GOOGLE_REFRESH,
            accessToken: accessToken
        },
        tls:{
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        from: GOOGLE_USER,
        to: mail,
        subject: 'Verify your Pulp Fiction Account',
        html: `
        <div>
            <p>Mensaje de bienvenida</p>
            <p>Hola cin</p>
            <p>${code}</p>
        </div>
        ` //html puro 
    }


    await transport.sendMail(mailOptions, (error,response)=>{
        if (error){
            console.log(error)
        } else {
            console.log("Receive ok")
        }
    })




}


module.exports = sendMail