import { NavLink } from "react-router"
import { useState, useRef } from "react"

export default function Hsong() {

  const songs = [
    { title: "Blue Eyes Song", src: "/H song/Blue Eyes.mp3" },
    { title: "Brown Rang Song", src: "/H song/Brown Rang.mp3" },
    { title: "Desi Kalakaar Song", src: "/H song/Desi Kalakaar.mp3" },
    { title: "JATT MEHKMA Song", src: "/H song/JATT MEHKMA.mp3" },
    { title: "LOCA Song", src: "/H song/LOCA.mp3" },
    { title: "MAKHNA Song", src: "/H song/MAKHNA.mp3" },
    { title: "MILLIONAIRE Song", src: "/H song/MILLIONAIRE.mp3" },
    { title: "PAYAL SONG Song", src: "/H song/PAYAL SONG.mp3" },
    { title: "Saiyaan ji Song", src: "/H song/Saiyaan ji.mp3" }
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
        <h1 style={{ textAlign: "center", margin: "3rem" }}>Yo Yo Honey Singh Playlist Songs</h1>
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
