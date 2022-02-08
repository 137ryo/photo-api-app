import { PhotoType } from "../type/photo";
import { Img } from "./Img";

export const Photo = (props: PhotoType) => {
  const { albumId, id, title, url, thumbnailUrl } = props;
  return (
    <>
      <p>{`Photo No : ${albumId} - ${id}`}</p>
      <p>{`Title : ${title}`}</p>
      <img src={thumbnailUrl} />
      <hr />
    </>
  );
};
