import nodemailer from "nodemailer";
//email configuration

//email template
//send email template#


const emailProcessor = async (emailBody) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SMTP,
            port: process.env.EMAIL_PORT,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER, // generated ethereal user
                pass: process.env.EMAIL_PASSWORD, // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail(emailBody);
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));


    } catch (error) {
        console.log(error)

    }
}


//make sure the email has fname, email anf url
export const userVerifiedNotification = (emailData) => {
    const emailBody = {
        from: '"Dented Store 👻" <myemail@dentedstore.com>', // sender address
        to: emailData.email, // list of receivers
        subject: "email verification", // Subject line
        text: `Hi ${emailData.fName}, Please follow the link to verify email`, // plain text body
        html:
            `<p>Hi, ${emailData.fName}</p>
        <br/>
        <br/>
        <br/>
        <p> Please follow the link to verify email</p>
        <br/>
        <br/>
        <p><a style="color:red" href="${emailData.url}">Verify Email</a></p>
        `// html body
    }


    emailProcessor(emailBody);
}


//user verification mail
export const verificationEmail = (emailData) => {
    const emailBody = {
        from: '"Dented Store 👻" <myemail@dentedstore.com>', // sender address
        to: emailData.email, // list of receivers
        subject: "Email verified", // Subject line
        text: `Hi ${emailData.fName}, you are verified, you can login here ${process.env.ROOT_DOMAIN}`, // plain text body
        html:
            `<p>Hi, ${emailData.fName}</p>
        <br/>
        <br/>
        <br/>
        <p>  you are verified, you can login here 
        <a href="${process.env.ROOT_DOMAIN}">${process.env.ROOT_DOMAIN}</a></p>
        <p><a style="color:red" href="${emailData.url}">Verify Email</a></p>
        <br/>
        <br/>
        `// html body
    }


    emailProcessor(emailBody);
}


//send otp to the user email

export const otpNotification = (emailData) => {
    const emailBody = {
        from: '"Dented Store 👻" <myemail@dentedstore.com>', // sender address
        to: emailData.email, // list of receivers
        subject: "OTP for passwprd reset", // Subject line
        text: `Hi ${emailData.fName}, Please follow the link to reset password: ${emailData.otp} `, // plain text body
        html:
            `<p>Hi, ${emailData.fName}</p>
            <p> your otp is ${emailData.otp}</p>
        <br/>
        <br/>
        <br/>
        <p> Please follow the link to reset your password</p>
        <br/>
        <br/>
        <p><a style="color:red" href="${emailData.otp}">Reset Password</a></p>
        `// html body
    }


    emailProcessor(emailBody);
}