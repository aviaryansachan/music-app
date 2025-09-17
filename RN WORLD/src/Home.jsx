import { NavLink } from "react-router"
import NewSong from "./NewSong"

export default function Home({ homename }) {
  return (
    <>
      <div className="name">
        {
          homename ? <span> Welcome : {homename}</span> : null
        }
      </div>
      <div className="flex">
        <div className="left-box">
          <NewSong />
        </div>
        <div className="right-box">
             <NavLink className="link" to='/g'> <h2>Guru Randhawa Playlist Songs</h2> </NavLink>
             <NavLink className="link" to='/d'> <h2>Diljit Dosanjh Playlist Songs </h2></NavLink>
             <NavLink className="link" to='/k'> <h2>Karan Aujla Playlist Songs </h2> </NavLink>
            <NavLink className="link" to='/h'> <h2> Yo Yo Honey Singh Playlist Songs </h2> </NavLink>
        </div>
      </div>

    </>
  )
}
