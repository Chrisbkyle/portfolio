import React, {useState, useEffect, useRef} from "react";
import emailjs from '@emailjs/browser'
import SendEmail from "./SendEmail";

export default function Links({clicked}) {

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

    // console.log(clicked)
    return(
        <div className={`contact ${clicked ? '' : 'hidden'}`}>
            <h2>Contact</h2>
            <form ref={form} onSubmit={sendEmail} className='email-form'>
            <table style={{width: '100%'}}>
                <tr>
                    <td className='form-text' style={{width: '10%'}}><label>Name: </label></td>
                    <td style={{width: '40%'}}><input type="text" name="user_name" className='form-input border' placeholder='Name'/></td>
                    <td className='form-text' style={{width: '10%'}}><label>Email: </label></td>
                    <td style={{width: '40%'}}><input type="email" name="user_email" className='form-input border' placeholder='Email'/></td>
                </tr>
                <tr>
                    <td className='form-text' style={{width: '20%'}}><label>Message: </label></td>
                    <td colSpan='3'><textarea name="message" className='form-input border' placeholder='Message'/></td>
                </tr>
                <tr>
                    <td colSpan='4' style={{textAlign: 'center'}}><input type="submit" value="Send" className='form-button button'/></td>
                </tr>
            </table>
        </form>
        </div>
    )
}