import React from 'react';
import axios from "axios";
import {useState, useEffect} from 'react';


function Aboute() {
  const [data, setData]= useState([]);

  useEffect(()=>{
    async function fetchData() {
        try {
          const result = await axios.get("https://www.simplyhosteasy.com/api/get_slider")
          console.log("result----------------",result.data.Data.banner,"resultend-------------");
          setData(result.data);
        } catch (error) {
          console.error(error);
        }
      }
    fetchData(); 
  }, []);
    
console.log("titlssse",data.Data?.banner,"aaaaaaaaaa")
  return (
    <div className="test">

        <table>
            <tr>
                <td>SR NO.</td>
                <td>Image</td>
            </tr>        
        {data.Data?.banner?.map((d,i)=>(       
     <tr>
        <td>{i} </td>         
       <td>{d.image }</td>
</tr>
        ))}


        </table>
    </div>
  );
}

export default Aboute;