import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListContext } from "../store/post_list_store";
import WelcomeMessage from "./WelcoeMessage";
import LoadingPost from "./LoadingPost";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListContext);
  // console.log(postList);

  // const [dataFetched,setDataFetched]=useState(false);
  const [Fetched, setFetched] = useState(false);

  // if(!dataFetched){
  //   fetch("https://dummyjson.com/posts")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     // console.log(data.posts);
  //     addInitialPost(data.posts);
  //   });
  //   setDataFetched(true);
  // }

  useEffect(() => {
    setFetched(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.posts);
        addInitialPost(data.posts);
        setFetched(false);
      });
      return ()=>{
        console.log("Component is Dying.");
        controller.abort();
      }
  }, []);

  // const handleOnGetPostClick = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data.posts);
  //       addInitialPost(data.posts);
  //     });
  // };

  return (
    <>
      <div className="postList">
        {Fetched && <LoadingPost />}
        { !Fetched && postList.length === 0 && (
          // <WelcomeMessage onGetPostClick={handleOnGetPostClick} />
          <WelcomeMessage />
        )}
        {postList.map((postItem) => (
          <Post key={postItem.id} postData={postItem} />
        ))}
      </div>
    </>
  );
};

export default PostList;
