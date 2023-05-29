import { Form, Field } from "react-final-form"
import React from 'react'
import { render } from 'react-dom'
import { styled } from "styled-components"

import { FORM_ERROR } from 'final-form'

const LoginStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
    .loginForm{
        
    }
`

const sleep = (ms) => {
    new Promise((resolve) => setTimeout(resolve, ms))

}
const onSubmit = async (values) => {
    await sleep(300)
    if (values.username !== "erikras") {
        return { username: "unknown username" };
    }
    if (values.password !== "finalformrocks") {
        return { [FORM_ERROR]: "login failed" }
    }
    window.alert("login success")
}
const LoginForm = () => {
    return (
        <LoginStyled className="containerLogin">
           <div className="">

           </div>
            <div className="loginForm">

            

            <Form
                onSubmit={onSubmit}
                validate={values => {
                    const error = {};
                    if (!values.username) {
                        error.username = "required"
                    }
                    if (!values.password) {
                        error.password = "required"
                    }
                    return error;
                }}
                render={({
                    submitError,
                    handleSubmit,
                    form,
                    submitting,
                    pristine,
                    values
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="username">
                            {({ input, meta }) => (
                                <div>
                                    <label>Username</label>
                                    <input {...input} type="text" placeholder="Username" value="erikras" />
                                    {(meta.error || meta.submitError) && meta.touched && (
                                        <span>{meta.error || meta.submitError}</span>
                                    )}
                                </div>
                            )}
                        </Field>
                        <Field name="password">
                            {({ input, meta }) => (
                                <div>
                                    <label>Password</label>
                                    <input {...input} type="password" placeholder="Password" value="finalformrocks" />
                                    {meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        {submitError && <div className="error">{submitError}</div>}
                        <div className="buttons">
                            <button type="submit" disabled={submitting}>
                                Log In
                            </button>
                            <button
                                type="button"
                                onClick={form.reset}
                            // disabled={submitting || pristine}
                            >
                                Reset
                            </button>
                        </div>
                        <pre>{JSON.stringify(values, 0, 2)}</pre>
                    </form>
                )}
            />
            </div>
        </LoginStyled>

    )
}
export { LoginForm }