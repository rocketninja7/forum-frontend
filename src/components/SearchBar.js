import React from 'react';
import { Formik, Form, Field } from 'formik'

function SearchBar(props) {
  return (
    <Formik 
      initialValues={{
        search: '',
      }} 
      onSubmit={values => props.updateSearch(values.search)}
    >
      <Form>
        <Field name="search"></Field>
        <button type="submit">Search</button>
      </Form>
    </Formik>  
  );
}

export default SearchBar;