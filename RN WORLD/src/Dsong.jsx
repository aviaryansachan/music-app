import { NavLink } from "react-router";
import { useState,useRef } from "react";

export default function Dsong() {

const songs = [
    { title: "Born To Shine Song", src: "/D song/Born To Shine.mp3" },
    { title: "CASE Song", src: "/D song/CASE.mp3" },
    { title: "Do You Know Song", src: "/D song/Do You Know.mp3" },
    { title: "G.O.A.T Song", src: "/D song/G.O.A.T.mp3" },
    { title: "Lemonade Song", src: "/D song/Lemonade.mp3" },
    { title: "Love Ya Song", src: "/D song/Love Ya.mp3" },
    { title: "Tension Song", src: "/D song/Tension.mp3" }
  ];
  const [currentSong, setCurrentSong] = useState(songs[0].src);
  const audioRef = useRef(null);
  const playSong = (src) => {
    setCurrentSong(src)
    setTimeout(() => {
      audioRef.current.play()
    }, 1000)
  }

  return (
  <div className="bg">
  <NavLink style={{textDecoration:"none",position:"absolute", top:"1.5rem",left:"1rem",fontWeight:"900", fontSize:"large",color:"red"}}  to='/'>Back Home Page</NavLink>
   <div style={{ padding: "1.2rem" }}>
        <h1 style={{textAlign:"center",margin:"3rem"}}>Diljit Dosanjh Playlist Songs</h1>
        <audio  ref={audioRef} src={currentSong} controls loop></audio>
          {
            songs.map((song, index) => (
              <h3 key={index} style={{padding:"1rem",cursor:"pointer",
                background:"currentSong === song.src ? #ddd : #f5f5f5", textAlign:"center"}}>
                <hr />
               Title - {song.title}
               <button className="btn" onClick={()=>{playSong(song.src) }}>Play</button>
              </h3>
            ))
          }
      </div>
    </div>
  )
}
