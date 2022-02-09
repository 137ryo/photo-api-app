import { useState } from "react";

import { JsonPhotosType } from "./type/jsonPhotosTypes";
import { PixabayType } from "./type/pixabayTypes";
import { JsonPhotos } from "./components/JsonPhotos";
import { Pixabay } from "./components/Pixabay";
import { Button } from "./components/button/Button";
import "./styles.css";
import axios from "axios";
import styled from "styled-components";

const SButtonArea = styled.div`
  align-items: center;
  padding: 10px;
  padding-bottom: 20px;
  margin: 50px;
  background-color: #fff;
  box-shadow: #ddd 0px 0px 2px 2px;
  border-radius: 5px;
`;

const STitle = styled.h1`
  font-family: "Zilla Slab", serif;
`;

export default function App() {
  const [albumJsonPhotos, setAlbumJsonPhotos] = useState<Array<JsonPhotosType>>(
    []
  );
  const [albumPixabay, setAlbumPixabay] = useState<Array<PixabayType>>([]);

  // Pixabay選択状態(falseならJsonPlaceHolder)
  const [isPixabaySelect, setIsPixabaySelect] = useState(false);

  // JsonPlaceHolderのAPIを取得
  const onClickFeachDataJsonPhotos = () => {
    axios
      .get<Array<JsonPhotosType>>("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setAlbumJsonPhotos(res.data);
        setIsPixabaySelect(false);
      });
  };

  // PixabayのAPIを取得
  const onClickFeachDataPixabay = () => {
    axios
      .get("https://pixabay.com/api/?key=25609556-1b7bd31363d6a0d9c2a010f12")
      .then((res) => {
        setAlbumPixabay(res.data.hits);
        setIsPixabaySelect(true);
      });
  };

  // JsonPlaceHolderのアルバムNoをランダムに一つ取得
  const albumNo = Math.floor(Math.random() * (10 - 1)) + 1;

  return (
    <div className="App">
      <SButtonArea>
        <STitle>Album View</STitle>
        <Button onClick={onClickFeachDataJsonPhotos}>JsonPlaceHolder</Button>
        <Button onClick={onClickFeachDataPixabay}>pixabay</Button>
      </SButtonArea>

      {isPixabaySelect
        ? albumPixabay.map((photo) => (
            <Pixabay
              key={photo.id}
              id={photo.id}
              userImageURL={photo.userImageURL}
            />
          ))
        : albumJsonPhotos.map(
            (photo) =>
              photo.albumId === albumNo && (
                <JsonPhotos
                  key={photo.id}
                  albumId={photo.albumId}
                  id={photo.id}
                  title={photo.title}
                  thumbnailUrl={photo.thumbnailUrl}
                />
              )
          )}
    </div>
  );
}
