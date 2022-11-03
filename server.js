// app.post('/mail', (req, res) => {
//     const { name, email, msg } = req.body;

//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.EMAIL,
//             pass: process.env.PASSWORD
//         }
//     })

//     const mailOptions = {
//         from: 'sender email',
//         to: 'receiver email',
//         subject: 'Postfolio',
//         text: `Name: ${name}, \nEmail: ${email}, \nMessage: ${msg}`
//     }

//     transporter.sendMail(mailOptions, (err, result) => {
//         if (err){
//             console.log(err);
//             res.json('opps! it seems like some error occured plz. try again.')
//         } else{
//             res.json('thanks for e-mailing me. I will reply to you within 2 working days');
//         }
//     })
// })