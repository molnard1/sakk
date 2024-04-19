import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListChessPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://chess.sulla.hu/chess").then((res) => {
            setData(res.data);
        });
    }, []);

    const items = data.map((item) => (
        <div key={item.id} className="col-sm-4" style={{ marginTop: '10px', marginBottom: '20px' }}>
            <div className="card">
                <img className="card-img-top" src={item.image_url} alt={item.name} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                        Link: <a href={item.profile_url} target="_blank" rel="noreferrer">{item.profile_url}</a><br />
                        Megnyert világbajnokságok száma: {item.world_ch_won}<br />
                        Születési dátum: {item.birth_date}<br />
                        <Link to={`/${item.id}`} style={{ cursor: 'pointer' }} className="btn btn-primary">Megtekintés</Link>
                    </p>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="container">
            <div className="row">{items}</div>
        </div>
    );
}