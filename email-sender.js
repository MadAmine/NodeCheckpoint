var nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 4, 
    auth:{
        user :'PlaceholderUser',
        pass : 'PLaceholderPswd'
    }, 
})

var mailOptions = {
    from : 'PLaceholderSender',
    to : 'PlaceholderReceiver',
    subject : 'sending email using Node.js',
    text : 'That was easy tau'
}

transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error)
    }
    else {
        console.log('Email sent:' + info.response)
    }
})