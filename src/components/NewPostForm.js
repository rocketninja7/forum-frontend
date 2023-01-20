import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';

function NewPostForm(props) {
    const navigate = useNavigate();
    return (
      <div>
        <Helmet>
          {props.helmetStyle}
        </Helmet>
        <Formik 
          initialValues={{
            title: '',
            content: '',
          }}
          validationSchema={Yup.object({
            title: Yup.string().required('Required'),
            content: Yup.string().required('Required'),
          })}
          onSubmit={values => {
            fetch("http://localhost:8080/newpost/", {
              method: 'POST',
              body: JSON.stringify({
                poster: {
                  id: 1,
                  username: 'firstguy',
                },
                title: values.title,
                content: values.content,
              }),
              headers: {
                'Content-type': 'application/json',
              },
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .then(_ => {
              navigate('/');
            })
            .catch(err => console.log(err));
          }}
        >
          <Form>
            <div>
              <label id="new-post-title-label" htmlFor="title">Title</label>
              <Field id="new-post-title" name="title" />
              <ErrorMessage name="title" />
            </div>
    
            <div>
              <label id="new-post-content-label" htmlFor="content">Content</label>
              <Field id="new-post-content" name="content" as="textarea" rows="10" />
              <ErrorMessage name="content" />
            </div>
    
            <button type="submit">Create Post</button>
          </Form>
        </Formik>
      </div>
    );
  }

  export default NewPostForm;