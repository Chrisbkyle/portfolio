import React, {useState, useEffect, useRef} from "react";
import emailjs from '@emailjs/browser'
import SendEmail from "./SendEmail";

export default function Links({clicked}) {

    const [formRender, setFormRender] = useState(                
    <table className={`form-table ${clicked ? '' : 'hidden'}`}>
        <tr className={`${clicked ? '' : 'hidden'}`}>
            <td className='form-text' ><label className={`${clicked ? '' : 'hidden'}`}>Name: </label></td>
            <td style={{width: '85%'}} ><input type="text" name="from_name" className='form-input' placeholder='Name' required/></td>
        </tr>
        <tr className={`${clicked ? '' : 'hidden'}`}>
            <td className='form-text' ><label>Email: </label></td>
            <td style={{width: '85%'}}><input type="email" name="user_email" className='form-input' placeholder='Email' required/></td>
        </tr>
        <tr className={`${clicked ? '' : 'hidden'}`}>
            <td className='form-text' style={{verticalAlign: 'top'}}><label>Message: </label></td>
            <td colSpan='3' style={{width: '85%', height: '160px'}}><textarea name="message" className='form-input' placeholder='Message' style={{height: '155px'}} required/></td>
        </tr>
        <tr className={`${clicked ? '' : 'hidden'}`}>
            <td colSpan='4' style={{textAlign: 'center'}}><input type="submit" value="Send" className='form-button button'/></td>
        </tr>
    </table>
    )

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kmcgxy9', 'template_74hhmjy', form.current, {
            publicKey: 'Rp8Mr9QaGldBamGXH',
            // publicKey: 'TEST,'
        })
        .then(() => {
            console.log('Email Sent');
            setFormRender(<div className='email-confirmation'>Thank you, email has been sent to christopher.b.kyle@gmail.com</div>)
        })
        .catch((err) => {
            console.log('Email not send', err.text);
            // setFormRender(<div className='email-confirmation'>Thank you, email has been sent to christopher.b.kyle@gmail.com</div>)
        })
    }

    // console.log(clicked)
    return(
        <div className={`contact ${clicked ? '' : 'hidden'}`}>
            <h2 style={{margin: '10px'}}>Contact</h2>
            <form ref={form} onSubmit={sendEmail} className='email-form'>
                <table className={`form-table ${clicked ? '' : 'hidden'}`}>
                        <tr className={`${clicked ? '' : 'hidden'}`}>
                            <td  className={`form-text ${clicked ? '' : 'hidden'}`}><label>Name: </label></td>
                            <td style={{width: '85%'}} ><input type="text" name="from_name" className={`form-input ${clicked ? '' : 'display-none'}`} placeholder='Name' required/></td>
                        </tr>
                        <tr className={`${clicked ? '' : 'hidden'}`}>
                            <td className='form-text' ><label>Email: </label></td>
                            <td style={{width: '85%'}}><input type="email" name="user_email" className={`form-input ${clicked ? '' : 'display-none'}`} placeholder='Email' required/></td>
                        </tr>
                        <tr className={`${clicked ? '' : 'hidden'}`}>
                            <td className='form-text' style={{verticalAlign: 'top'}}><label>Message: </label></td>
                            <td colSpan='3' style={{width: '85%', height: '160px'}}><textarea name="message" className={`form-input ${clicked ? '' : 'display-none'}`} placeholder='Message' style={{height: '155px'}} required/></td>
                        </tr>
                        <tr className={`${clicked ? '' : 'hidden'}`}>
                            <td colSpan='4' style={{textAlign: 'center'}}><input type="submit" value="Send" className={`form-button button ${clicked ? '' : 'display-none'}`} /></td>
                        </tr>
                    </table>
                {/* {formRender} */}
            </form>
        </div>
    )
}