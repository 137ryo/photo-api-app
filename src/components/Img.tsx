import { VFC } from "react";

type Props = {
  id: number;
};

export const Img: VFC<Props> = (props) => {
  const { id } = props;
  return (
    <img width="150" height="150" src="https://source.unsplash.com/random" />
  );
};
