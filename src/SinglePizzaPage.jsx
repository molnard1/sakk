import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function SinglePizzaPage() {
    const [item, setItem] = useState({
        name: "",
        birth_date: "",
        world_ch_won: 0,
        profile_url: "",
        image_url: ""
    });

    const [navigateAway, setNavigateAway] = useState(false);

    useEffect(() => {
        let id = window.location.pathname.split("/")[1];
        axios.get(`https://chess.sulla.hu/chess/${id}`)
            .then((res) => {
                setItem(res.data);
            })
            .catch((error) => {
                setNavigateAway(true);
            });
    }, []);

    return (
        <div>
            {navigateAway ? (
                <Navigate to="/" replace={true} />
            ) : (
                <div className="text-center mt-5">
                    <h1>{item.name}</h1>
                    <img src={item.image_url} alt={item.name} />
                    <br />
                    Link: <a href={item.profile_url} target="_blank" rel="noreferrer">{item.profile_url}</a>
                    <br />
                    Megnyert világbajnokságok száma: {item.world_ch_won}
                    <br />
                    Születési dátum: {item.birth_date}
                    <br />
                    <br />
                    <Link to={`/${item.id}/edit`}>
                        <button className="btn btn-primary" style={{ marginRight: '10px' }}>
                            Szerkesztés
                        </button>
                    </Link>
                    <Link to={`/${item.id}/delete`}>
                        <button className="btn btn-danger">Törlés</button>
                    </Link>
                </div>
            )}
        </div>
    )
}