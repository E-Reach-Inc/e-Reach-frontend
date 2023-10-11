import React, {useState, useEffect}from "react";
import notification from "../../assets/pharmacistimage/notification.svg";
import '../../styles/pharmacistFolder/pharmacistSearchBar.css'
import message from "../../assets/pharmacistimage/message.svg";
import shedoctor from "../../assets/pharmacistimage/shedocto.jpg";


export const PharmacistSearchBar =()=>{
    const [currentDateTime, setCurrentDateTime] = useState("");

    useEffect(() => {
        const fetchCurrentTimeAndDate = async () => {
            try {
                const response = await fetch("http://worldtimeapi.org/api/timezone/Africa/Lagos");
                if (response.ok) {
                    const data = await response.json();
                    const dateTimeString = new Date(data.utc_datetime).toLocaleString();
                    setCurrentDateTime(dateTimeString);
                } else {
                    throw new Error("Failed to fetch time and date");
                }
            } catch (error) {
                console.error("Error fetching time and date:", error);
            }
        };
        fetchCurrentTimeAndDate();

    }, []);


        return (
            <div className="flex-container">
                <div className="input-con">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="search..."
                        aria-label= "Search"
                        // value={searchQuery}
                        // onChange={(e)=> setSearchQuery(e.target.value)}
                    />
                    <button type="button" className="search-button">
                        Search
                    </button>
                </div>
                <div className="date-time">
                    <p>{currentDateTime}</p>
                </div>
                <div className="notifications">
                    <img className="not" src={notification} alt="notification"/>
                    <img className="message" src={message} alt="message"/>
                </div>
                <div className="doctor">
                    <img src={shedoctor} alt="doctor"/>
                </div>
            </div>
        )
}