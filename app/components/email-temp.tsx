import { Html, Heading, Text} from '@react-email/components';

type EmailTemplateProps = {
    firstname: string,
    lastname: string,
    email: string,
    message: string
}

const EmailTemplate = ({firstname, lastname, email, message}: EmailTemplateProps) => {

    return (
        <Html lang='en'>
            <Heading>Message from {firstname} {lastname}</Heading>
            <Text>Here&#39;s there email {email}</Text>
            <Text>Message: {message}</Text>
        </Html>
    )

}

export default EmailTemplate;