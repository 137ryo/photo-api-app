import { PhotoType } from "../type/photo";
import { Img } from "./Img";

export const Photo = (props: PhotoType) => {
  const { albumId, id, title, url, thumbnailUrl } = props;
  return (
    <>
      <p>{`${albumId} _ ${id} [${title}] ${url}`}</p>
      <Img id={id} />
    </>
  );
};
