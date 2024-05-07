import React,{useState,useEffect} from "react";
import  Chart  from "react-apexcharts";

function Charts()
{
   const [getDatayear, setGetDatayear]= useState([]);
   const [getDatacommit, setGetDatacommit]= useState([]);
   
   useEffect( ()=>{
    const getCommitdata= async()=>{
        const getYear=[];
        const getCommit=[];
        const reqData= await fetch("http://localhost/reactgraphtutorial/Areachartgitgub");
        const resData= await reqData.json();
          for(let i=0; i<resData.length;i++)
          {
            getYear.push(resData[i].year); 
            getCommit.push(resData[i].commits);  
          }
         setGetDatayear(getYear);
         setGetDatacommit(getCommit); 
         }
      getCommitdata();
   },[]);


    return(
    <React.Fragment>
        <div className="container-fluid">    
       <Chart 
       type="area"
       width={650}
       height={550}

       series={[
              {   name:"Commits",
                  data:[345,27,121,676,98,321]
              }
       ]}
     
       options={ {
        colors:['#1e96fc'],
        stroke: {width:3, curve:'smooth'},
      
      
      xaxis:{
          
           categories:getDatayear
         },
      yaxis:{
       
      }
       }}          
       >
       </Chart>
        </div>
    </React.Fragment>
    );
}
export default Charts;