import { AlbumType } from "../type/album";

export const Album = (props: AlbumType) => {
  const { id, userImageURL } = props;
  return (
    <>
      <img src={userImageURL} />
    </>
  );
};
