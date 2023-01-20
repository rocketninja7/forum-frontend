import React from 'react';
import { Formik, Form, Field } from 'formik'

function SearchBar(props) {
  return (
    <div style={{flexGrow: '1'}}>
      <Formik 
        initialValues={{
          search: '',
        }} 
        onSubmit={values => props.updateSearch(values.search)}
      >
        <Form style={{display:'flex', width: '100%'}}>
          <Field name="search" style={{flexGrow: '1', fontSize: '20px'}}></Field>
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
}

export default SearchBar;