'use server';

import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);



export const actionForm = async (formData: FormData) => {
    const firstname = formData.get('firstname');
    console.log(firstname)

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'abejevilla55@gmail.com',
        subject: 'Message',
        text: `${firstname}`
    })

}