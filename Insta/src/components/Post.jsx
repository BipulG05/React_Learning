import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList as PostListContext } from "../store/post_list_store";


const Post = ({ postData }) => {
  const {deletePost}=useContext(PostListContext);
  // console.log(postData.id);
  return (
    <>
      <div className="card post-card" >
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">
            {postData.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"onClick={()=>{deletePost(postData.id)}}>
              <MdDelete />
            </span>
          </h5>
          <p className="card-text">{postData.body}</p>
          {postData.tags.map((tag) => (
            <span className="badge text-bg-primary hashtags">{tag}</span>
          ))}
          <div className="alert alert-success post-reaction" role="alert">
            This post has been liked by {postData.reactions } people
          </div>

          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
    </>
  );
};

export default Post;
