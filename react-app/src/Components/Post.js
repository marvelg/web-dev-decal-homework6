import Comment from "./Comment";

const Post = ({ title, body, keyid }) => {
  return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    <h3>
      {title}
    </h3>
    <p>{body}</p>
    <Comment id = {keyid}/>
    
  </div>
}

export default Post;
