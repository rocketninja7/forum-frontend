import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function NewComment(props) {
    const fetchTarget = props.comment ? "/comment/"+props.comment.id+"/" : "/newcomment/";
    const fetchMethod = props.comment ? 'PUT' : 'POST';
    const content = props.comment ? props.comment.content : '';
    const submitButton = props.comment ? 'Save Comment' : 'Create Comment' ;
    const commentId = props.comment ? props.comment.id : props.comment;
    return (
        <Formik
            initialValues={{
                content: content,
            }}
            validationSchema={Yup.object({
                content: Yup.string().required('Required'),
            })}
            onSubmit={(values, { resetForm }) => {
                fetch("https://rocketninja7-forum-backend.onrender.com"+fetchTarget, {
                  method: fetchMethod,
                  body: JSON.stringify({
                    id: parseInt(commentId, 10),
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
                .then(_ => props.setEditing ? props.setEditing() : (() => {}) )
                .then(_ => props.updateComponent())
                .then(_ => resetForm())
                .catch(err => console.log(err));
              }}
        >
            <Form>
                <div style={{display: 'flex', width: '100%'}}>
                    <Field name="content" as="textarea" rows="3" style={{flexGrow: '1'}}/>
                    <button type="submit">{submitButton}</button>
                </div>
                <ErrorMessage name="content" />
            </Form>
        </Formik>
    );
}

export default NewComment;