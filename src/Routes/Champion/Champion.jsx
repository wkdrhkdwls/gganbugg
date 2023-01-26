import React, { useState, useEffect } from "react";
import { getChampion, getLeaderBoard } from "../../api/API_Profile";
import Navbar from "../../Components/Navbar/Navbar";

export default function Champion() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await getChampion();
        console.log(result);
        setInfo(result);
      } catch (e) {
        console.error(e.message);
      }
    })();
  }, []);

  return (
    <div>
      <Navbar />

      <section>
        {info.length === 0
          ? "Loading..!!"
          : info["data"].map((data) => (
              <div>
                <h2>{data.name}</h2>
                <h2>{data.how_many}</h2>
              </div>
            ))}
      </section>
    </div>
  );
}