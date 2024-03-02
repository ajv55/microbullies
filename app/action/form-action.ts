'use server';

import {Resend} from 'resend';
import EmailTemplate from '../components/email-temp';
import {render} from '@react-email/render'

type State = {
    error: string | null,
    success: boolean
}





export const actionForm = async (prevState: State, formData: FormData) => {
    const firstname = formData.get('firstname') as string;
    const lastname = formData.get('lastname') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
        
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'abejevilla55@gmail.com',
            subject: 'Message',
            html: render(EmailTemplate({firstname, lastname, email, message}))
        })

        return {
            error: null,
            success: true
        }
        
    } catch (error) {
        console.error
        return {
            error: (error as Error).message,
            success: false
        }
    }

}