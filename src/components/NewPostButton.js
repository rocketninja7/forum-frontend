import { useNavigate } from "react-router-dom";

function NewPostButton(props) {
  const navigate = useNavigate();
  return <button onClick={e => navigate('/newpost/')}>New post</button>
}

export default NewPostButton;