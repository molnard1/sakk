import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function DeletePizzaPage() {
  const [navigateAway, setNavigateAway] = useState(false);
  const [sakkozo, setSakkozo] = useState({});

  useEffect(() => {
    let id = window.location.pathname.split("/")[1];
    axios.get(`https://chess.sulla.hu/chess/${id}`).then((res) => {
      setSakkozo(res.data);
    }).catch((error) => {
      setNavigateAway(true);
    });
  }, []);

  return (
    <div>
      {navigateAway ? <Navigate to="/" replace={true} /> :
      <div>
        <h1>Törlés</h1>
        <p>
          Biztosan törölni szeretné a "<b>{sakkozo.name}</b>" nevű sakkozót?
        </p>
        <button className="btn btn-danger" onClick={async () => {
          try {
            await axios.delete(`https://chess.sulla.hu/chess/${sakkozo.id}`);
            setNavigateAway(true);
          } catch (error) {
            console.log(error);
            setNavigateAway(true);
          }
        }} style={{ marginRight: '10px' }}>Törlés</button>
        <button className="btn btn-secondary" onClick={() => window.history.back()}>Mégse</button>
      </div>
      }
    </div>
  );
}
