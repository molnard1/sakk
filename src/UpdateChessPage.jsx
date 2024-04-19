import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Navigate } from "react-router-dom";

export default function UpdateChessPage() {
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { id, ...rest } = item;

            await axios.put(`https://chess.sulla.hu/chess/${item.id}`, rest, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            setNavigateAway(true);
        } catch (error) {
            console.log(error);
            setNavigateAway(true);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? (checked ? 1 : 0) : value;

        const updateditem = {
            ...item,
            [name]: newValue,
        };

        setItem(updateditem);
    };

    return (
        <div>
            {navigateAway ? <Navigate to="/" replace={true} /> :
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="formName" className="form-label">Név</label>
                        <input
                            required
                            type="text"
                            name="name"
                            placeholder="Név"
                            value={item.name}
                            onChange={handleChange}
                            className="form-control"
                            id="formName"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formProfileUrl" className="form-label">Link</label>
                        <input
                            required
                            type="text"
                            name="profile_url"
                            placeholder="https://example.com"
                            value={item.profile_url}
                            onChange={handleChange}
                            className="form-control"
                            id="formProfileUrl"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formWorldChWon" className="form-label">Megnyert világbajnokságok száma</label>
                        <input
                            required
                            type="text"
                            name="world_ch_won"
                            placeholder="0"
                            value={item.world_ch_won}
                            onChange={handleChange}
                            className="form-control"
                            id="formWorldChWon"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formBirthDate" className="form-label">Születési dátum</label>
                        <input
                            required
                            type="text"
                            name="birth_date"
                            placeholder="1990-01-01"
                            value={item.birth_date}
                            onChange={handleChange}
                            className="form-control"
                            id="formBirthDate"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formImageURL" className="form-label">Kép URL</label>
                        <input
                            required
                            type="text"
                            name="image_url"
                            placeholder="https://example.com/image.jpg"
                            value={item.image_url}
                            onChange={handleChange}
                            className="form-control"
                            id="formImageURL"
                        />
                    </div>
                    <button type="submit" className="btn btn-success" style={{ marginRight: '10px' }}>
                        Szerkesztés
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>
                        Mégse
                    </button>
                </form>
            }
        </div>
    );
}