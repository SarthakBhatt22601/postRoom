import React, { useEffect, useState } from 'react';
import './AddGif.css';

export default function AddGif(props) {
    const  handleClick = () => {
        props.toggleGif();
    };

    const [search, setSearch] = useState("");
    const [gifList, setGifList] = useState([]);

    let APIKEY = "9MC53RUU3ymtpTQ4CSxqTp4MrovvsesQ";

    const FetchGif = async (query) =>{
        const api = 'https://api.giphy.com/v1/gifs/search?api_key='+APIKEY+'&q='+query+'&limit=20';
        const temp = await fetch(api).then(res => res.json()).then(data => data.data);
        //console.log(temp);
        setGifList(temp);
    }

    const HandleInputChange = (e) => {
        setSearch(e.target.value);
        FetchGif(search);
    }
    //console.log(props.ig);
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        let APIKEY = "9MC53RUU3ymtpTQ4CSxqTp4MrovvsesQ";
        fetch('https://api.giphy.com/v1/gifs/trending?api_key='+APIKEY+'&limit=20', {signal : signal} )
        .then(res => res.json())
        .then(data => {setGifList(data.data)});

        return function cleanup() {
            abortController.abort();
        }

    },[]);

    return (
        <div className="box">
            <span className="close" onClick={handleClick}> &times; </span>
            <input type="search" placeholder="Search for gif..." value={search} onChange={HandleInputChange} />
            <div className="display-area">
                <div className="grids">
                    {gifList.map((gif) => {
                        return (
                            <React.Fragment key={gif.id}>
                                <div className="item">
                                    <img src={gif.images.fixed_width_downsampled.url} alt="gif" onClick={()=>{props.setIg(gif.images.fixed_width_downsampled.url); props.toggleGif();}} />
                                </div>
                            </React.Fragment>
                        )    
                    })}
                </div>
            </div>
        </div>
    )
}

