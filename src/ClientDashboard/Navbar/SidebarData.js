import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";
import * as TiIcons from "react-icons/ti";
import * as BiIcons from "react-icons/bi";
import * as FcIcons from "react-icons/fc";

export const SidebarData=[
    {
        title:"Home",
        path:"/dashboard",
        icon:<AiIcons.AiFillHome/>,
        cName:"nav-text"
    },
    {
        title:"Mart",
        path:"/dashboard/mart",
        icon:<GiIcons.GiBuyCard/>,
        cName:"nav-text"
    },
    {
        title:"Prices",
        path:"/dashboard/prices",
        icon:<MdIcons.MdNature/>,
        cName:"nav-text"
    },
    {
        title:"Weather",
        path:"/dashboard/weather",
        icon:<TiIcons.TiWeatherPartlySunny/>,
        cName:"nav-text"
    },
    {
        title:"Support",
        path:"/dashboard/support",
        icon:<BiIcons.BiSupport/>,
        cName:"nav-text"
    },
    {
        title:"About",
        path:"/dashboard/about",
        icon:<FcIcons.FcAbout/>,
        cName:"nav-text"
    }
];