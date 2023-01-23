import React from "react";
import { Formik, Form, useField } from 'formik'
import { useNavigate } from "react-router-dom";

// Taken from Formik documentation
const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };

function Login(props) {
    const navigate = useNavigate();
    return (
        <div>
            <Formik
                initialValues={{
                    username: '',
                }} 
                onSubmit={values => fetch("http://localhost:8080/token/", {
                    method: 'POST',
                    body: JSON.stringify({
                        username: values.username,
                    }),
                    headers: { 
                        'Content-Type': 'application/json',
                    },
                })}
            >
                <Form>
                    <MyTextInput
                        label="Username"
                        name="username"
                        type="text"
                        placeholder="Username"
                    />
                    <button type="submit">Login</button>
                </Form>
            </Formik>
            <button onClick={e => navigate('/register/')}>Register</button>
        </div>
    );
}

export default Login;