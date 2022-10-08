/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";
import { Track } from "../../App";
import { msToTime } from "../../utils/time";
import wave from "../lottie/wave.json";

const container = css`
  flex: 1;
  color: white;
  display: flex;
  justify-content: flex-end;
`;
const wrapper = css`
  width: 100%;
  max-width: 400px;
  aspect-ratio: 4/1;
  display: flex;
  flex-direction: column;
  background-color: #977b63;
  padding: 12px;
  border-radius: 6px;
  position: relative;
`;
const title = css`
  font-size: 24px;
  margin-bottom: 8px;
`;
const artist = css`
  font-size: 14px;
  margin-bottom: 6px;
`;
const process = css`
  width: 100%;
  height: 2px;
  border-radius: 4px;
  background-color: #00000040;
  margin-bottom: 8px;
`;
const controls = css`
  display: flex;
  align-items: center;
  font-family: "Gemunu Libre";
  position: relative;
  justify-content: space-between;
  padding-right: 26px;
  > div {
    display: flex;
    align-items: center;

    > button {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid white;
      margin-right: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      :hover {
        border-color: #00000040;
        .pause {
          background-color: #00000040;
        }
        .play {
          border-left-color: #00000040;
        }
      }
    }
  }
`;
const stick = css`
  width: 3px;
  height: 8px;
  background-color: white;
  margin: 0 1px;
`;
const triangle = css`
  margin-left: 2px;
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-left: 10px solid white;
  border-bottom: 5px solid transparent;
`;
const waveStyle = css`
  position: absolute;
  top: -54px;
  left: 98px;
  height: 130px;
`;
const tooltip = css`
  width: 144px;
  font-family: "Gemunu Libre";
  background-color: #00000053;
  color: #fff;
  border-radius: 6px;
  padding: 5px 10px;
  position: absolute;
  z-index: 1;
  top: -46px;
  right: 0;
  font-size: 13px;
  ::after {
    content: "";
    position: absolute;
    top: 100%;
    right: 10%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #00000053 transparent transparent transparent;
  }
`;

type Props = { currentTrack: Track };

function PlayBar({ currentTrack }: Props) {
  const lottieRef = useRef<any>();
  const [isPlay, setPlay] = useState(false);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.1);
      lottieRef.current.pause();
    }
  }, []);

  return (
    <section css={container}>
      <div css={wrapper}>
        <div css={tooltip}>Audio output is not supported current version.</div>
        <p css={title}>{currentTrack.name}</p>
        <p css={artist}>{currentTrack.artist}</p>
        <div css={process} />
        <div css={controls}>
          <div>
            <button
              onClick={() => {
                setPlay((prev) => !prev);
                isPlay ? lottieRef.current.pause() : lottieRef.current.play();
              }}
            >
              {isPlay ? (
                <>
                  <div className="pause" css={stick} />
                  <div className="pause" css={stick} />
                </>
              ) : (
                <div className="play" css={triangle} />
              )}
            </button>
            <p>00:00</p>
            <Lottie
              lottieRef={lottieRef}
              animationData={wave}
              css={waveStyle}
            />
          </div>
          <p>{msToTime(currentTrack.duration)}</p>
        </div>
      </div>
    </section>
  );
}

export default PlayBar;
