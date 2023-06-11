import PostContent from "./PostContent";

const mockPost = [{
    id: 1,
    user_id: 1,
    description: "Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material",
    url: "https://medium.com/@pshrmn/a-simple-react-router",
    title: "Como aplicar o Material UI em um projeto React",
    image:"https://picsum.photos/200/300",
    brief:"Hey! I have moved this tutorial to my personal blog. Same content, new location. Sorry about making you click through to another page."
},
{
    id: 2,
    user_id: 2,
    description: "Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material",
    url: "https://medium.com/@pshrmn/a-simple-react-router",
    title: "Como aplicar o Material UI em um projeto React",
    image:"https://picsum.photos/200/300",
    brief:"Hey! I have moved this tutorial to my personal blog. Same content, new location. Sorry about making you click through to another page."
}]

function PostCard() {
  const token = localStorage.getItem("token");
  const timelineContent = [mockPost];
  //   const timelineContent = useTimeLine(
  //     token,
  //     isResponseEdited,
  //     isPostDeleted,
  //     isPostCreated
  //   );

  return (
    <>
    {timelineContent.length === 0 ? 
    (<p >Ainda não existem posts</p>) : 
    timelineContent.map((post) => <PostContent key={post.id} post={post}/>)}
      
    </>
  );
}

export default PostCard;
