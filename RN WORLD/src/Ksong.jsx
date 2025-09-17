import { NavLink } from "react-router"
import { useState, useRef } from "react"

export default function Ksong() {

  const songs = [
    { title: "Chithiyaan Song", src: "/K song/Chithiyaan.mp3" },
    { title: "For A Reason Song", src: "/K song/For A Reason.mp3" },
    { title: "Guilty Song", src: "/K song/Guilty.mp3" },
    { title: "MF GABHRU! Song", src: "/K song/MF GABHRU!.mp3" },
    { title: "Red Eyes Song", src: "/K song/Red Eyes.mp3" },
    { title: "WAVY Song", src: "/K song/WAVY.mp3" }
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
      <NavLink style={{ textDecoration: "none", position: "absolute", top: "1.5rem", left: "1rem", fontWeight: "900", fontSize: "large", color: "red" }} to='/'>Back Home Page</NavLink>
      <div style={{ padding: "1.2rem" }}>
        <h1 style={{ textAlign: "center", margin: "3rem" }}>Karan Aujla Playlist Songs </h1>
        <audio ref={audioRef} src={currentSong} controls loop></audio>
        {
          songs.map((song, index) => (
            <h3 key={index} style={{
              padding: "1rem", cursor: "pointer",
              background: "currentSong === song.src ? #ddd : #f5f5f5", textAlign: "center"
            }}>
              <hr />
              Title - {song.title}
              <button className="btn" onClick={() => { playSong(song.src) }}>Play</button>
            </h3>
          ))
        }
      </div>
    </div>
  )
}
