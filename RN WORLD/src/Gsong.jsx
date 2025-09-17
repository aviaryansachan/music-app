import { useState,useRef } from "react";
import { NavLink } from "react-router"

export default function Gsong() {

const songs = [
    { title: "AZUL Song", src: "/G song/AZUL.mp3" },
    { title: "Ban Ja Rani Song", src: "/G song/Ban Ja Rani.mp3" },
    { title: "High Rated Gabru Song", src: "/G song/High Rated Gabru.mp3" },
    { title: "ISHARE TERE Song", src: "/G song/ISHARE TERE Song.mp3" },
    { title: "MADE IN INDIA Song", src: "/G song/MADE IN INDIA.mp3" },
    { title: "Ptola Song", src: "/G song/Patola.mp3" },
    { title: "QATAL Song", src: "/G song/QATAL.mp3" },
    { title: "Suit Suit Video Song", src: "/G song/Suit Suit Video.mp3" }
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
        <h1 style={{textAlign:"center",margin:"3rem"}}>Guru Randhawa Playlist Song</h1>
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
