import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from 'react-helmet';
import NewPostForm from "./NewPostForm";

function NewPost(props) {
    const params = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <Helmet>
                {props.helmetStyle}
            </Helmet>
            <NewPostForm 
                id={params.id}
                navigate={navigate} />
        </div>
    );
  }

  export default NewPost;