import { useState } from "react";

import { PhotoType } from "./type/photo";
import { Photo } from "./components/Photo";
import { AlbumType } from "./type/album";
import { Album } from "./components/Album";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [photo, setPhoto] = useState<Array<PhotoType>>([]);
  const [album, setAlbum] = useState<Array<AlbumType>>([]);
  const [albumIsSelect, setAlbumIsSelect] = useState(false);
  const albumNo = Math.floor(Math.random() * (10 - 1)) + 1;

  const onClickFeachData = () => {
    axios
      .get<Array<PhotoType>>("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setPhoto(res.data);
        setAlbumIsSelect(false);
      });
  };

  const onClickFeachDataAlbum = () => {
    axios
      .get("https://pixabay.com/api/?key=25609556-1b7bd31363d6a0d9c2a010f12")
      .then((res) => {
        setAlbum(res.data.hits);
        setAlbumIsSelect(true);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickFeachData}>データ取得</button>
      <button onClick={onClickFeachDataAlbum}>データ取得2</button>

      {albumIsSelect
        ? album.map((photo) => (
            <Album
              key={photo.id}
              id={photo.id}
              userImageURL={photo.userImageURL}
            />
          ))
        : photo.map(
            (photo) =>
              photo.albumId === albumNo && (
                <Photo
                  key={photo.id}
                  albumId={photo.albumId}
                  id={photo.id}
                  title={photo.title}
                  url={photo.url}
                  thumbnailUrl={photo.thumbnailUrl}
                />
              )
          )}
    </div>
  );
}
