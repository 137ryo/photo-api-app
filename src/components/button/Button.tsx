import { VFC } from "react";
import styled from "styled-components";

type Props = {
  children: string;
  onClick: () => void;
};

const SButton = styled.button`
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  background-color: #008cb4;
  margin: 5px;
`;

export const Button: VFC<Props> = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};
