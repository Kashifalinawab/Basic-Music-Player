import React, { useState, useRef } from "react";
import { useEffect } from "react";
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlinePlayCircle,
} from "react-icons/ai";

import { BsMusicPlayer } from "react-icons/bs";

import "./AudioPlayer.css";

function AudioCarosel(props) {
  const playlist = [
    {
      image: "./Images/1.jpg",
      song: "./Audio/A1.mp3",
    },
    {
      image: "./Images/2.jpg",
      song: "./Audio/A2.mp3",
    },
    {
      image: "./Images/3.jpg",
      song: "./Audio/A3.mp3",
    },
    {
      image: "./Images/4.jpg",
      song: "./Audio/A4.mp3",
    },
    {
      image: "./Images/5.jpg",
      song: "./Audio/A5.mp3",
    },
    {
      image: "./Images/6.jpg",
      song: "./Audio/A6.mp3",
    },
    {
      image: "./Images/7.jpg",
      song: "./Audio/A7.mp3",
    },
    {
      image: "./Images/8.jpg",
      song: "./Audio/A8.mp3",
    },
    {
      image: "./Images/9.jpg",
      song: "./Audio/A9.mp3",
    },
  ];

  const refEl = useRef(null);

  const [currIndex, setCurrIndex] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      refEl.current.play();
    } else if (!isPlaying) {
      refEl.current.pause();
    }
  }, [isPlaying]);

  const rightEvent = () => {
    if (currIndex + 1 === playlist.length - 1) {
      return setCurrIndex(0);
    }
    setCurrIndex(currIndex + 1);
  };

  const leftEvent = () => {
    if (currIndex === 0) {
      console.log(currIndex);
      return setCurrIndex(playlist.length - 1);
    }
    setCurrIndex(currIndex - 1);
  };

  return (
    <div id="maindiv">
      <div id="Audio">
        {<audio autoPlay src={playlist[currIndex].song} ref={refEl} />}

        <div id="pic">
          {" "}
          <h2 id="h2El">
            {" "}
            <span id="spanEl">
              <BsMusicPlayer />
            </span>
            Fledge Music Player
          </h2>
          {<img src={playlist[currIndex].image} id="image" alt="music pic" />}
        </div>
      </div>
      <div id="btn">
        <button onClick={leftEvent} className="b1">
          <AiOutlineDoubleLeft />
        </button>{" "}
        <button onClick={() => setIsPlaying(!isPlaying)} className="b2">
          <AiOutlinePlayCircle />
        </button>{" "}
        <button onClick={() => rightEvent()} className="b4">
          {" "}
          <AiOutlineDoubleRight />
        </button>
      </div>
    </div>
  );
}

export default AudioCarosel;
