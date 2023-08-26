export const Player =({fn,song})=>{
    console.log('Song Obj Rec',song); 
    return(
        <div>
            
            <button onClick={()=>{
                fn(false,null);
            }} className="btn btn-success p-2">Back To Songs</button>
            <br/>
            <br/>
            <img src={song.artworkUrl100}/>
            <br/>
            <p>{song?.artistName}{song?.trackName}</p>
        <audio controls>
            <source src={song?.previewUrl} type="audio/mp4"/>
            Your Browser does not support audio element
        </audio>
        </div>
    )
}