import React, { useState } from "react";
import { CardList } from "./CardList";

const RawData = [
  {
    "timestamp": "2025-04-20T00:00:00Z",
    "location": "New York, USA",
    "moon_angle": 179.3,
    "visibility": 0.92
  },
  {
    "timestamp": "2025-04-20T00:15:00Z",
    "location": "Tokyo, Japan",
    "moon_angle": 182.1,
    "visibility": 0.89
  },
  {
    "timestamp": "2025-04-20T00:30:00Z",
    "location": "Cairo, Egypt",
    "moon_angle": 177.6,
    "visibility": 0.85
  },
  {
    "timestamp": "2025-04-20T00:45:00Z",
    "location": "Sydney, Australia",
    "moon_angle": 180.4,
    "visibility": 0.94
  },
  {
    "timestamp": "2025-04-20T01:00:00Z",
    "location": "Paris, France",
    "moon_angle": 176.9,
    "visibility": 0.81
  }
];

export const Body = () => {
    const [data, setData] = useState(RawData);
    const [searchTerm, setSearchTerm] = useState("");
    const [theme, setTheme] = useState("light");
  
    const handleSearch = () => {
      if (searchTerm.trim() === "") {
        setData(RawData);
      } else {
        setData(
          RawData.filter(card =>
            card.location.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }
    };
  
    const handleKeyDown = (e) => {
      if (e.key === "Enter") handleSearch();
    };
  
    const toggleTheme = () => {
      setTheme(prev => (prev === "light" ? "dark" : "light"));
    };
  

    return (


        
      <div className={`main-card-div ${theme}`}>
        <div className="search-bar-container">
          <input
          
            type="text"placeholder="Search location…"value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-btn">Search</button>
          <button onClick={toggleTheme} className="theme-btn">
            Switch to {theme === "light" ? "Dark" : "Light"} Mode

          </button>

        </div>

        {data.length === 0 && <p>No results found.</p>}
        {data.map((cards, idx) => (
          <CardList key={cards.timestamp + idx} listObj={cards} />
        ))}
      </div>
    );
  };
  