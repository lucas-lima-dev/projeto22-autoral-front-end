import PostMessage from "./PostMessage";
import PostUrlMetadata from "./PostUrlMetadata";
import {
  PostContentContainer,
  PostIterractonsWrapper,
  PostUserImg,
  PostTextWrapper,
  PostUserName,
  PostHeader,
} from "./styled";



function PostContent({post}) {
    const {id, user_id, description, url, title, image, brief} = post
  return (
    <PostContentContainer>
      <PostIterractonsWrapper>
        <PostUserImg src="https://picsum.photos/200/300" alt="" />
      </PostIterractonsWrapper>
      <PostTextWrapper>
        <PostHeader>
            <PostUserName>Lucas</PostUserName>
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