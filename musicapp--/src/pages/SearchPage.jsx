import { useEffect, useState } from "react";
import { Search } from "../Components/Search"
import { Songs } from "../Components/Songs"
import { getSongs } from "../services/api-client";
import { Player } from "../Components/Player";
export const SearchPage =()=>{

    
   const [allSongs , setSongs] =  useState([]);
//component life cycle
   const [flag,setFlag]=useState(false);
   const[song,setPlayersong]= useState(null);
   const loadSongs= async ()  =>{
    setSongs(await getSongs('Latest Songs'));
   }
   useEffect( ()=>{
    loadSongs();
   },[])
   const togglePlayer =(flag,songarg)=>{
    console.log('Flag',flag, 'Song Object',songarg);
    setPlayersong(songarg);
    setFlag(flag);
   }

    const getArtistName = async(artistName)=>{
        console.log('Rec Artist Name', artistName);
        setSongs(await getSongs(artistName));
    
    }
    const jsx = <> <Search fn={getArtistName}/>
    <Songs  fn={togglePlayer }allsongs= {allSongs}/> </>;
    return(
        <div>
        <p class="fs-5"></p>
        
        <div className="container"  >

            <h1 className="text-bg-success p-4 " >MUSIC HUB</h1>
            {flag?<Player fn={togglePlayer} song ={song} />:jsx}
        </div>
        </div>
    
    )
}