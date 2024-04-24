import { useMemo } from "react";
import { useCallback } from "react";
import { createContext, useReducer } from "react";

// const DEFAULLT_CONTEX = {
//     postList:[],
//     addPost:()=>{},
//     deletePost:()=>{},
// };

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  // console.log(action.type)
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postID
    );
  } else if (action.type === "ADD_POST") {
    console.log("yhjgvbnjgf");
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "ADD_Initial_POST") {
    // console.log(action.payload);
    newPostList = action.payload;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userID, postTitle, postBody, postReactions, PostTags) => {
    // console.log(userID,postTitle,postBody,postReactions,PostTags);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: postReactions,
        userID: userID,
        tags: PostTags,
      },
    });
  };

  const addInitialPost = (posts) => {
    // console.log(posts);
    dispatchPostList({
      type: "ADD_Initial_POST",
      payload: posts,
    });
  };

    // ** useCallback **

  const deletePost = useCallback(
    (postID) => {
      // console.log(`delete item no : ${postID}`);
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postID,
        },
      });
    },
    [dispatchPostList]
  );

  // ** useMemo **
  const arr = [3,5,6,7,8];
  const sortArr = useMemo(()=>arr.sort(),[arr]);

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        addInitialPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     ID: "1",
//     title: "I am Live",
//     body: "Hi friends this is my first live session please like and comments while learning",
//     reactions: 2,
//     userID: "user-1",
//     tags: ["Live Session", "Learning"],
//   },
//   {
//     ID: "2",
//     title: "React Class 12",
//     body: "Hi friends this is my first live session please like and comments while learning React",
//     reactions: 12,
//     userID: "user-4",
//     tags: ["Live Session", "Learning", "React"],
//   },
// ];

export default PostListProvider;
