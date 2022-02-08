import { PixabayType } from "../type/pixabayTypes";

export const Pixabay = (props: PixabayType) => {
  const { id, userImageURL } = props;
  return (
    <>
      <img src={userImageURL} />
    </>
  );
};
