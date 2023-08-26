import { useState } from "react";

export const Song = ({fn,song})=>{
        console.log(song);
        const [PlayerFlag, setPlayerFlag]= useState(false)
        const showPlayer=()=>{
                fn(true,song);                        //setPlayerFlag(!PlayerFlag);


        }
        
        return(

            <div className="row">
            <div className="col-4">
            <img src={song.artworkUrl100}/>
             </div>
        <div className="col-4">
            {song.artistName}-{song.trackName}
            </div>
            <div className="col-4">
            <div className="a" >
            <button className=" btn btn-success "onClick={showPlayer}>PLAY SONG</button>
            </div>
        </div>
        </div>

        )

}