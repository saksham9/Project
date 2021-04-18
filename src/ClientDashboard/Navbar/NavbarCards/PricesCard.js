import React, { useState,useEffect } from 'react';
import "./PricesCard.css";

const PricesCard = () => {
    const [isLoading,setLoading]=useState(true);
    const [tableData,setTableData]=useState([]);
    useEffect(()=>{
        const getTableData=async()=>{
            await fetch(`https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd00000145084de3bf2548d549da5c1f764f7f50&format=json&offset=0&limit=10&filters[state]=Maharashtra`)
                .then((response)=>response.json())
                .then((data)=>{
                    const arrayData=[];
                    data.records.map((item)=>{
                        arrayData.push({
                            district:item.district,
                            commodity:item.commodity,
                            arrival_date:item.arrival_date,
                            min_price:item.min_price,
                            max_price:item.max_price,
                            modal_price:item.modal_price
                        });
                    });
                    setTableData(arrayData);
                    setLoading(false);
                })
                .catch(err=>console.log(err));
        };
        getTableData();
    },[]);
    console.log(tableData);
    if(isLoading){
        return (<h1>Loading...</h1>);
    }
    return (
        <div className="table">
            <tr>
                <td>District</td>
                <td>Commodity</td>
                <td>Arrival date</td>
                <td>Min price</td>
                <td>Max price</td>
            </tr>
            {tableData.map((item)=>(
                <tr>
                    <td>{item.district}</td>
                    <td>{item.commodity}</td>
                    <td>{item.arrival_date}</td>
                    <td>{item.min_price}</td>
                    <td>{item.max_price}</td>
                </tr>
            ))}
        </div>
    )
}

export default PricesCard
