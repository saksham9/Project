import React,{useState,useEffect} from 'react';
import Navbar from './Navbar/Navbar';
import Box from '@material-ui/core/Box';
import {Card,CardContent} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import WeatherCard from './Navbar/NavbarCards/WeatherCard';
import PricesCard from './Navbar/NavbarCards/PricesCard';
import MartCard from './Navbar/NavbarCards/MartCard';
import "./Dashboard.css";
const queryString = require("query-string");
const Dashboard = (props) => {
    const [isLoading,setLoading]=useState(true);
    const [city,setCity]=useState("Bharatpur");
    const [cityInfo,setCityInfo]=useState({});
    useEffect(()=>{
        const getWeatherData=async()=>{
            await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=36c9551c6942ca3b5949bda30b152cf4`)
                .then((response)=>response.json())
                .then((data)=>{
                    setCityInfo(data);
                    setLoading(false);
                })
                .catch(err=>console.log(err));
        };
        getWeatherData();
    },[]);
    if(isLoading){
        return (<h1>Loading...</h1>);
    }
    const parsed = queryString.parse(props.location.search);
    console.log(parsed.fname+""+parsed.lname);
    return (
        <>
            <Navbar fname={parsed.fname} lname={parsed.lname}/>
            <MartCard/>
            <Card className="Card">
            <CardContent>
            <h3>Prices in your state</h3>
            <PricesCard/>
            </CardContent>
            <CardContent>
            <h3>Weather in your City</h3>
            <WeatherCard cityInfo={cityInfo}/>
            </CardContent>
            
            </Card>
            
            
        </>
    )
}

export default Dashboard
