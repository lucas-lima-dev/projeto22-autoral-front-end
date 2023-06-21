import { useState } from "react";
import PostMessage from "./PostMessage";
import PostUrlMetadata from "./PostUrlMetadata";
import UpdatePost from "./UpdatePost/UpdatePost";
import { IoPencil } from "react-icons/io5";

import {
  PostContentContainer,
  PostIterractionsWrapper,
  PostUserImg,
  PostTextWrapper,
  PostUserName,
  PostHeader,
  UpdateAndDeletePostContainer,
} from "./styled";

function PostContent({
  post,
  timelineContent,
  setIsResponseEdited,
  setIsPostDeleted,
}) {

  const { id, users, username, description, url, title, image, brief } = post;
  const [editingPostId, setEditingPostId] = useState(null);
  const [editedMessage, setEditedMessage] = useState("");

  function handleEditClick(CurrentPostId) {
    if (CurrentPostId === editingPostId) {
      setEditingPostId(null);
      setEditedMessage("");
    } else {
      setEditingPostId(CurrentPostId);
      setEditedMessage(
        timelineContent.find((post) => post.id === CurrentPostId).description
      );
    }
  }

  return (
    <PostContentContainer>
      <PostIterractionsWrapper>
        <PostUserImg src={users.user_url} alt="post-user-img" />
      </PostIterractionsWrapper>
      <PostTextWrapper>
        <PostHeader>
          <PostUserName>{users.username}</PostUserName>
          {editingPostId === id ? (
            <UpdatePost
              editingPostId={editingPostId}
              setEditingPostId={setEditingPostId}
              editedMessage={editedMessage}
              setEditedMessage={setEditedMessage}
              setIsResponseEdited={setIsResponseEdited}
              id={id}
            />
          ) : (
            <PostMessage description={description} />
          )}
        </PostHeader>
        <UpdateAndDeletePostContainer>
          <IoPencil 
          className="text-[#FFFFFF] cursor-pointer"
          onClick={() => handleEditClick(id)}
          />
        </UpdateAndDeletePostContainer>
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
