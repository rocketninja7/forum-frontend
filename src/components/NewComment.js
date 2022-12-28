import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function NewComment(props) {
    return (
        <Formik
            initialValues={{
                content: '',
            }}
            validationSchema={Yup.object({
                content: Yup.string().required('Required'),
            })}
            onSubmit={(values, { resetForm }) => {
                fetch("http://localhost:8080/newcomment/", {
                  method: 'POST',
                  body: JSON.stringify({
                    post: props.post.id,
                    commenter: {
                        id: 1,
                        username: 'firstguy',
                    },
                    content: values.content,
                  }),
                  headers: {
                    'Content-type': 'application/json',
                  },
                })
                .then(response => response.json())
                .then(data => console.log(data))
                .then(_ => props.updateComponent())
                .then(_ => resetForm())
                .catch(err => console.log(err));
              }}
        >
            <Form style={{display: 'flex', width: '100%'}}>
                <Field name="content" as="textarea" rows="3" style={{flexGrow: '1'}}/>
                <button type="submit">Comment</button>
                <ErrorMessage name="content" />
            </Form>
        </Formik>
    );
}

export default NewComment;