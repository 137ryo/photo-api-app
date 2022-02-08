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

  const onClickFeachData = () => {
    axios
      .get<Array<PhotoType>>("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setPhoto(res.data);
      });
  };

  const onClickFeachDataAlbum = () => {
    axios
      .get<Array<AlbumType>>(
        "https://pixabay.com/api/?key=25609556-1b7bd31363d6a0d9c2a010f12"
      )
      .then((res) => {
        console.log(res.data.hits);
        setAlbum(res.data.hits);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickFeachData}>データ取得</button>
      {photo.map((photo) => (
        <Photo
          key={photo.id}
          albumId={photo.albumId}
          id={photo.id}
          title={photo.title}
          url={photo.url}
          thumbnailUrl={photo.thumbnailUrl}
        />
      ))}

      <button onClick={onClickFeachDataAlbum}>データ取得2</button>
      {album.map((photos) => (
        <Album key={photos.id} userImageURL={photos.userImageURL} />
      ))}
    </div>
  );
}
