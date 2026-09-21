import Assi from "./assi3"
import { useState } from "react";
import "./form.css"
export default function Render(){
    let[info,setinfo]=useState([])
    let newinfo=(data)=>{
        setinfo((currdata)=>[...currdata,data])
    }
    return<>
    <h1>Workshop Registration</h1>
    <div className="container">
        <div className="left">
            <Assi addnewinfo={newinfo}/>
        </div>
        <div className="right">
            {info.map((infos,idx)=>(
                <div key={idx} className="card">
                <h3><span className="label">Name :</span> <span className="value">{infos.username}</span></h3>
                <h3><span className="label">Email :</span> <span className="value">{infos.email}</span></h3>
                <h3><span className="label">Mob.NO :</span> <span className="value">{infos.mob}</span></h3>
                <h3><span className="label">Tech Stack :</span> <span className="value">{infos.tech}</span></h3>
                <h3><span className="label">Reason To Join :</span> <span className="value">{infos.text}</span></h3>
                </div>
            ))}
        </div>
    </div>   
    </>
}