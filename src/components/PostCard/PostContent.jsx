import PostMessage from "./PostMessage";
import PostUrlMetadata from "./PostUrlMetadata";
import {
  PostContentContainer,
  PostIterractionsWrapper,
  PostUserImg,
  PostTextWrapper,
  PostUserName,
  PostHeader,
} from "./styled";



function PostContent({post}) {
  console.log(post)
    const {id,users,username, description, url, title, image, brief} = post

  return (
    <PostContentContainer>
      <PostIterractionsWrapper>
        <PostUserImg src={users.user_url} alt="post-user-img" />
      </PostIterractionsWrapper>
      <PostTextWrapper>
        <PostHeader>
            <PostUserName>{users.username}</PostUserName>
            <PostMessage description={description}/>
        </PostHeader>
        <PostUrlMetadata
        title={title}
        url={url}
        description={brief}
        image={image}
        />
      </PostTextWrapper>
    </PostContentContainer>
  );
}

export default PostContent;
