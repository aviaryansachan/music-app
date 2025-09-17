import { useState, useRef } from "react";


export default function NewSong() {

  const songs = [
    { title: "DEEWANIYAT Song", src: "/new songs/DEEWANIYAT.mp3" },
    { title: "Dekhne walo ne Song", src: "/new songs/Dekhne walo ne.mp3" },
    { title: "Naam Chale Song", src: "/new songs/Naam Chale.mp3" },
    { title: "Shubh Supreme Song", src: "/new songs/Shubh Supreme.mp3" },
    { title: "Tu Meri Pasandida Aurat Hai Song", src: "/new songs/Tu Meri Pasandida Aurat Hai.mp3" },
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
    <>
      <div style={{ padding: "1.2rem" }}>
        <h1 style={{textAlign:"center"}}>New Song Playlist</h1>
        <audio  ref={audioRef} src={currentSong} controls loop></audio>
          <div style={{}}>
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
    </>
  )
}
