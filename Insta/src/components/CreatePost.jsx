import { useContext, useRef } from "react";
import { PostList as PostListContext } from "../store/post_list_store";

const CreatePost = () => {
  const {addPost} = useContext(PostListContext);
  const userIDElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const postReactionsElement = useRef();
  const PostTagsElement = useRef();

  const handleSubmit = (event) =>{
    event.preventDefault();
    const userID = userIDElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const postReactions = postReactionsElement.current.value;
    const PostTags = PostTagsElement.current.value.split(",");
    addPost(userID,postTitle,postBody,postReactions,PostTags);

    userIDElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    postReactionsElement.current.value = 0;
    PostTagsElement.current.value = "";
  };

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="userID" className="form-label">
            Enter your user id
          </label>
          <input
            type="text"
            ref={userIDElement}
            className="form-control"
            id="userID"
            placeholder="your user id "
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
          ref={postTitleElement}
            type="text"
            className="form-control"
            id="title"
            placeholder="how are feeling right now ... "
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
          ref={postBodyElement}
            type="text"
            className="form-control"
            id="body"
            rows={3}
            placeholder="write something about post ... "
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reactions
          </label>
          <input
            type="number"
            min={0}
            defaultValue={0}
            ref={postReactionsElement}
            className="form-control"
            id="reactions"
            placeholder="how many reactions ... "
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            ref={PostTagsElement}
            className="form-control"
            id="tags"
            placeholder="enter your tags using ' , ' saperated "
            required
          />
        </div>
        
        
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
