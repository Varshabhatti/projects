import { Song } from "./Song"
export const Songs =({fn,allsongs})=>{
    console.log('*********All Songs', allsongs);
    //map (js fn)
    //all songs data --->convert jsx
    return(<>
    {allsongs.map((currentSong,index)=><Song fn ={fn}key={index} song={currentSong} />)}
    </>
    )
}