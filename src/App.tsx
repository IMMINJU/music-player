/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { PlayBar, Playlist } from "./components";
import data from "./constant/data.json";

const container = css`
  width: 100%;
  height: 100vh;
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ::before {
    content: "";
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("/backgroundd.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  color: white;
`;
const wrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 90%;
`;
const title = css`
  font-size: 52px;
  margin-bottom: 24px;
  font-family: "Gemunu Libre";
  font-weight: 500;
`;
const content = css`
  background-color: #2a262394;
  border-radius: 24px;
  display: flex;
  align-items: flex-end;
  flex: 1;
  padding: 40px 24px 40px 0;
  font-family: "Inter Tight";
  box-shadow: 2px 2px 10px #0000004b;
`;

export type Track = { name: string; duration: number; artist: string };

function App() {
  const [currentTrack, selectTrack] = useState<Track>(data[0]);

  return (
    <div css={container}>
      <div css={wrapper}>
        <h2 css={title}>Death Stranding Music Player</h2>
        <div css={content}>
          <Playlist
            currentTrack={currentTrack}
            onClickTrack={(item: Track) => selectTrack(item)}
          />
          <PlayBar currentTrack={currentTrack} />
        </div>
      </div>
    </div>
  );
}

export default App;
