import React, { useEffect, useState } from 'react';
import {FaStreetView,FaSun} from "react-icons/fa";
import './Weather.css';

const WeatherCard = (props) => {
    const [currDate,setCurrDate]=useState("");
    const [weathercon,setWeatherCon]=useState({});
    const cityInfo=props.cityInfo;
    console.log(cityInfo);
    useEffect(()=>{

        const cityInfo_main=[...cityInfo.weather];
        console.log(cityInfo_main[0].main);
        if(cityInfo_main.length>0){
            if(cityInfo_main[0].main=="Sunny"){
                setWeatherCon({
                    condition:"sun",
                    color:"#eccc68"
                });
            }else if(cityInfo_main[0].main=="Clouds"){
                setWeatherCon({
                    condition:"cloud",
                    color:"#f1f2f6"
                });
            }
            else if(cityInfo_main[0].main=="Rainy"){
                setWeatherCon({
                    condition:"rain",
                    color:"#a4b0be"
                });
            }
            else{
                //console.log("sdni");
                setWeatherCon({
                    condition:"cloud",
                    color:"#44c3de"
                });
            }
            
        }
        
    },[]);
    useEffect(()=>{
        const getCurrentDay=()=>{
            let currtime=new Date();
            var weekday = new Array(7);
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";
            return weekday[currtime.getDay()];
        }
        let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        let dateObj = new Date();
        let month = dateObj.getUTCMonth(); //months from 1-12
        let day = dateObj.getUTCDate();
        let hours=dateObj.getHours();
        let min=dateObj.getMinutes();
        let time="";
        if(hours>11){
            time="PM";
            if(hours>12){
                hours-=12;
            }
        }
        else{
            time="AM";
        }
        if(min<10){
            min='0'+min;
        }
        //console.log(`${getCurrentDay()} | ${day} ${months[month]} | ${hours}:${min}${time}`);
        setCurrDate(`${getCurrentDay()} | ${day} ${months[month]} | ${hours}:${min}${time}`);
        //console.log(currDate);
    },[]);
    
    
    

    
    return (
       <>
           <div class="box">
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
                <div id="weathercon">
                    <FaSun className="fas fa-sun" style={{color:"#eccc68"}}/>
                </div>
                <div className="info">
                    <h2 className="location"><FaStreetView className="fas fa-street-view"/>{cityInfo.name},{cityInfo.sys.country}</h2>
                    <p id="date">{currDate}</p>
                    <h1 className="temp">{cityInfo.main.temp}&deg;C</h1>
                    <h3 className="tempmin_max">min:{cityInfo.main.temp_min}&deg;C | max:{cityInfo.main.temp_max}&deg;C</h3>
                </div>
            </div>
       </>
    )
}

export default WeatherCard;
