import { useContext, useState } from "react";
import { NoPostMessage } from "../../pages/Home/styled";
import PostContent from "./PostContent";
import TimelineContext from "../../contexts/TimelineContext";
import useFetchTimeline from "../../hooks/api/useFetchTimeline";

function PostCard() {
  const token = localStorage.getItem("token");
  const [editingPostId, setEditingPostId] = useState(null);
  const [editedMessage, setEditedMessage] = useState("");
  
  const {
    isResponseEdited,
    setIsResponseEdited,
    isPostDeleted,
    setIsPostDeleted,
    isPostCreated,
  } = useContext(TimelineContext);

  const timelineContent = useFetchTimeline(
      token,
      isResponseEdited,
      isPostDeleted,
      isPostCreated
    );

  return (
    <>
    {timelineContent.length === 0 ? 
    (<NoPostMessage>Ainda não existem posts</NoPostMessage>) : 
    timelineContent.map((post) => <PostContent key={post.id} post={post}/>)}
    </>
  );
}

export default PostCard;
