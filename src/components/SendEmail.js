import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'


export default function SendEmail() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kmcgxy9', 'template_74hhmjy', form.current, {
            publicKey: 'Rp8Mr9QaGldBamGXH',
        })
        .then(() => {
            console.log('Email Sent');
        })
        .catch((err) => {
            console.log('Email not send', err.text);
        })
    }

    return (
        <form ref={form} onSubmit={sendEmail} className='email-form'>
            <label>Name: 
                <input type="text" name="user_name" className='form-input'/>
            </label>
            <label>Email: 
                <input type="email" name="user_email" className='form-input'/>
            </label>
            <label>Message: 
                <textarea name="message" className='form-input'/>
            </label>
            <input type="submit" value="Send" className='form-button'/>
        </form>
      );
}