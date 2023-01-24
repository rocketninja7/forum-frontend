import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

class NewPostForm extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
        post: null,
    }
  }

  componentDidMount() {
    if(this.props.id) {
      fetch("http://localhost:8080/post/"+this.props.id+"/")
      .then(res => res.json())
      .then(
        res => {
            console.log(res);
            this.setState({
                post: res,
            });
        }
      )
    }
    return;
}

  render() {
    const fetchTarget = this.props.id ? "/post/"+this.props.id+"/" : "/newpost/";
    const fetchMethod = this.props.id ? 'PUT' : 'POST';
    const title = this.state.post ? this.state.post.title : '';
    const content = this.state.post ? this.state.post.content : '';
    const submitButton = this.props.id ? 'Save Post' : 'Create Post' ;
    return (
      <div>
        <Formik 
          enableReinitialize
          initialValues={{
            title: title,
            content: content,
          }}
          validationSchema={Yup.object({
            title: Yup.string().required('Required'),
            content: Yup.string().required('Required'),
          })}
          onSubmit={values => {
            fetch("http://localhost:8080"+fetchTarget, {
              method: fetchMethod,
              body: JSON.stringify({
                id: parseInt(this.props.id, 10),
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
              this.props.navigate('/');
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
    
            <button type="submit">{submitButton}</button>
          </Form>
        </Formik>
      </div>
    );
  }
}

  export default NewPostForm;