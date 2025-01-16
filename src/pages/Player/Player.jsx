import React, { useEffect, useMemo, useState } from "react";
import './Player.css';
import back_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [apiData, setApiData] = useState({
        name: "Unknown",
        key: "",
        published_at: "Unknown",
        type: "Unknown"
    });

    const apiKey = process.env.REACT_APP_AUTH_KEY;
    const options = useMemo(() => ({
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
        }
    }), [apiKey]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(res => res.json())
            .then(res => {
                if (res.results && res.results.length > 0) {
                    setApiData(res.results[0]);
                } else {
                    console.error("No video data found.");
                }
            })
            .catch(err => console.error(err));
    }, [id, options]);

    return (
        <div className="player">
            <img src={back_icon} alt="Back" onClick={() => navigate(-1)} />
            {apiData.key ? (
                <iframe
                    width="90%"
                    height="90%"
                    src={`https://www.youtube.com/embed/${apiData.key}`}
                    title="Trailer"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            ) : (
                <p>Trailer not available.</p>
            )}
            <div className="player-info">
                <p>{apiData.published_at ? apiData.published_at.slice(0, 10) : "Unknown Date"}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    );
};

export default Player;
