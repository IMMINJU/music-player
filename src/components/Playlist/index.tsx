/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { msToTime } from "../../utils/time";
import data from "../../constant/data.json";
import { Track } from "../../App";
import YouTube from "react-youtube";
import { MutableRefObject } from "react";

const wrapper = css`
  background-color: #00000040;
  border-radius: 4px;
  margin: 0 10vw 0 20px;
  aspect-ratio: 1/1;
  flex: 1;
  overflow: hidden;
`;
const trackWrap = css`
  display: flex;
  align-items: center;
  padding: 12px 12px 12px 28px;
  font-size: 14px;
  cursor: pointer;
  background-image: linear-gradient(transparent 0 0);
  background-size: 100% 20px;
  background-position: 100% 50%;
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0.3s 0.3s,
    background-image 0.3s;
  :hover {
    background-image: linear-gradient(#2b2825b0 0 0);
    background-size: 200% 100%;
    background-position: 100% 50%;
  }
  > p {
    padding-left: 4px;
    :first-of-type {
      flex: 3;
    }
    :nth-of-type(2) {
      flex: 2;
    }
    :last-of-type {
      font-family: "Gemunu Libre";
      font-size: 16px;
    }
  }
`;
const selectedTrack = css`
  background-color: #977b63;
`;
const tabWrap = css`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  gap: 2px;
  font-size: 12px;
  > div {
    background-color: #b1afb0b9;
    padding: 5px 0;
    :first-of-type {
      flex: 3;
      padding-left: 28px;
    }
    :nth-of-type(2) {
      flex: 2;
      padding-left: 4px;
    }
    :last-of-type {
      min-width: 48px;
      padding-left: 4px;
    }
  }
`;

const opts = { height: "0", width: "0", playerVars: { autoplay: 1 } };

type Props = {
  currentTrack: Track;
  onClickTrack: (track: Track) => void;
  playMusic: () => void;
  player: MutableRefObject<YouTube>;
};

const Playlist = ({ currentTrack, onClickTrack, playMusic, player }: Props) => {
  return (
    <section css={wrapper}>
      <div css={tabWrap}>
        <div>MUSIC</div>
        <div>ARTIST</div>
        <div>TIME</div>
      </div>
      {data.map((track, idx) => (
        <div
          key={idx}
          css={[
            trackWrap,
            track.videoId === currentTrack.videoId && selectedTrack,
          ]}
          onClick={() => {
            onClickTrack(track);
            playMusic();
          }}
        >
          <p>{track.name}</p>
          <p>{track.artist}</p>
          <p>{msToTime(track.duration)}</p>
          {track.videoId === currentTrack.videoId ? (
            <YouTube
              ref={player}
              videoId={track.videoId}
              opts={opts}
              onEnd={() => player.current.resetPlayer()}
              css={css`
                display: none;
              `}
            />
          ) : (
            <></>
          )}
        </div>
      ))}
    </section>
  );
};

export default Playlist;
