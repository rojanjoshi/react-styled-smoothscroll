import React from 'react'
import { Container, Form, Formwrap, Formlabel,
Formh1,Formcontent,Icon,Forminput,Formbutton,Text } from './signinelements'

const SignIn = () => {
    return (
        <>
            <Container>
                <Formwrap>
                    <Icon to='/'>dolla</Icon>
                    <Formcontent>
                        <Form action='#'>
                            <Formh1>Sign in to your account</Formh1>
                            <Formlabel htmlFor='for'>Email</Formlabel>
                            <Forminput type='email' required />
                            <Formlabel htmlFor='for'>Password</Formlabel>
                            <Forminput type='password' required />
                            <Formbutton type='submit'>Continue</Formbutton>
                            <Text>Forgot password ?</Text>

                        </Form>
                    </Formcontent>
                </Formwrap>
            </Container>
        </>
    )
}

export default SignIn
