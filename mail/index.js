/**==========================================================
 * THIS MODULE USES SENDGRID API TO HANDLE ALL MAILING LOGIC
 * ==========================================================*/


const sendGrid = require('@sendgrid/mail');
const dateFormat = require('dateformat');

sendGrid.setApiKey(process.env.SENDGRID_APIKEY);

module.exports = {

  /* code for Sign Up mail here */
  sendSignupMail : (emailAddr) => {

    const mailData = {
      to: emailAddr,
      from: process.env.SENDER_EMAIL, // optional
      subject: 'SIGN UP COMPLETED',
      text: "Welcome to Avengers App\n\nWe are glad to have you on board.\nDo well to explore all our services.\n\nBest Regards."

    }

    return new Promise((resolve, reject) => {
      sendGrid.send(mailData).then(resolve).catch(reject);
    })

    
  },

  /* code for Sign In mail here */
  sendSigninMail : (emailAddr) => {
    let time = dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");
    const msg = {
      to: emailAddr,
      from: process.env.SENDER_EMAIL,
      subject: 'USER SIGNED IN TO AVENGERS APP',
      text: 'Hello, \nYou just signed into your account at ' + time + '\n Best Regards! ',
     
    };
    return new Promise((resolve, reject) => {
      sendGrid.send(msg).then(resolve).catch(reject);
    
    })
    

  },

  /* code for Forgot Password mail here */
  sendForgotpasswordMail : (emailAddr) => {
    const mailData = {
      to: emailAddr,
      cc: '', // optional
      subject: 'Successful Signup to Avengers App',
      html: ``

    }

    return new Promise((resolve, reject) => {
      sendGrid.send(mailData).then(resolve).catch(reject);
    })
  }

} //end module