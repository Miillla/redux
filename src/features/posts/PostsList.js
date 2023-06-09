import { useSelector } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const orderedPostIds = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  console.log(orderedPostIds);

  let content;
  if (postStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postStatus === "succeeded") {
    content = orderedPostIds.map((post) => (
      <PostsExcerpt key={post.id} postId={post.id} />
    ));
  } else if (postStatus === "failed") {
    content = <div>{error}</div>;
  }

  return <section>{content}</section>;
};

export default PostsList;
