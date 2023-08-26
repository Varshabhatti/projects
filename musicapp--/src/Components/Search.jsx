import { useRef } from "react";

export const Search =({fn})=> { 
    const artist = useRef();     
    return(
    <>
    <div className="text">
    <label className="songname">Artist Name</label>
    <input ref={artist} type='text' className="form-control" placeholder="Search Artist Wise Song"/>
    </div>
    <br/>
    <div className="button2">
    <button className="btn btn-success" onClick ={()=>{
     fn(artist.current.value);
     }}>SEARCH IT</button>
     </div>
     <br/>
     </>
     );
}