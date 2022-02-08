import styled from "styled-components";
import { JsonPhotosType } from "../type/jsonPhotosTypes";

const SNo = styled.h3`
  font-family: "Rajdhani", sans-serif;
`;

const STitle = styled.p`
  font-family: "Rajdhani", sans-serif;
`;

export const JsonPhotos = (props: JsonPhotosType) => {
  const { albumId, id, title, thumbnailUrl } = props;
  return (
    <>
      <SNo>{`Photo No : ${albumId} - ${id}`}</SNo>
      <STitle>{`Title : ${title}`}</STitle>
      <img src={thumbnailUrl} />
      <hr />
    </>
  );
};
