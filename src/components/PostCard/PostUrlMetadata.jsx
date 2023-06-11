import {
  PostUrlMetadataContainer,
  PostUrlMetadataH1,
  PostUrlMetadataH2,
  PostUrlMetadataH3,
  PostUrlMetadataImg,
} from "./styled";

function PostUrlMetadata({ image, url, title, description }) {
  return (
    <PostUrlMetadataContainer href={url} target="_blank">
      <div>
        <PostUrlMetadataH1>{title}</PostUrlMetadataH1>
        <PostUrlMetadataH2>{description}</PostUrlMetadataH2>
        <PostUrlMetadataH3>{url}</PostUrlMetadataH3>
      </div>
      <PostUrlMetadataImg src={image} />
    </PostUrlMetadataContainer>
  );
}

export default PostUrlMetadata;