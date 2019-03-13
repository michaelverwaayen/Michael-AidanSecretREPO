var fs = require('fs');
var path = require('path');
var config = JSON.parse(fs.readFileSync("config.json"));

var nodemailer = require('nodemailer');
let transporter= nodemailer.createTransport({
    service: 'gmail',
    secure:false,
    port: 25,
    auth: {
        user:'trfm0007@gmail.com',
        pass:'&(&!(#))@'
    },
    tls: {
        rejectUnathorized: false
    }
});
let HelperOptions = {
    from: 'Michael ' <'trfm007@SpeechGrammarList.com',
    to: 'trfm007@gmail.com',
    subject: 'Invite ',
    text: 'put link here'
};
transporter.sendMail(HelperOptions,(error,info) => {
    if(error){
        console.log(error)
    }
    console.log("Message sent");
    console.log(info);

});