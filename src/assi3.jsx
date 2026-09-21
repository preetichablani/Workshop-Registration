import { useState } from "react";
import "./form.css"
export default function Assi({addnewinfo}){
    let[formdata,setFormData]=useState({username:"",email:"",mob:"",tech:"",text:""})
    let handle=(event)=>{
        setFormData((data)=>{
            return{...data,[event.target.name]:event.target.value}
        })
    }
     let [isvalid, setvalid] = useState(true);
     let [mobvalid, setmobvalid] = useState(true);
     let [mobmsg, setmobmsg] = useState("");
     let [textvalid, settextvalid] = useState(true);
     let def = (event) => {
    event.preventDefault();
    if (!formdata.username) {
        setvalid(false);
    } else {
        setvalid(true);
    }
   if (!formdata.mob.trim()) {
    setmobvalid(false);
    setmobmsg("Mobile Number Cannot Be Empty");
    } else if (formdata.mob.length !== 10) {
    setmobvalid(false);
    setmobmsg("Mobile Number Must Be 10 Digits");
    } else {
    setmobvalid(true);
    setmobmsg("");
}
    if (!formdata.text.trim()) {
        settextvalid(false);
    } else {
        settextvalid(true);
    }
   if (
    !formdata.username ||
    !formdata.mob.trim() ||
    formdata.mob.length !== 10 ||
    !formdata.text.trim()
) {
        return;
    }
    addnewinfo(formdata);
    setFormData({ username: "", email: "",mob: "",tech: "",text: ""});
    setvalid(true);
    setmobvalid(true);
    settextvalid(true);
}
    return<>
    <form onSubmit={def}>
        <input type="text"placeholder="Enter Your Full Name" name="username"value={formdata.username}onChange={handle}></input>
        {!isvalid && <p style={{color:"red"}}>This Field Cannot Be Empty</p>}
        <input type="email"placeholder="Enter Your Email" name="email"value={formdata.email}onChange={handle}></input>
        <input type="tel"placeholder="Enter Your Mob No." name="mob"value={formdata.mob}onChange={handle}></input>
       {!mobvalid && (<p style={{ color: "red" }}>{mobmsg}</p>)}  
        <input id="mern" type="radio" value="MERN Stack" name="tech" checked={formdata.tech==="MERN Stack"}onChange={handle}></input>
        <label htmlFor="mern">MERN Stack</label>
        <input id="data" type="radio" value="Data Analytics" name="tech" checked={formdata.tech==="Data Analytics"}onChange={handle}></input>
        <label htmlFor="data">Data Analytics</label>
        <input id="aiml" type="radio" value="AI/ML" name="tech" checked={formdata.tech==="AI/ML"}onChange={handle}></input>
        <label htmlFor="aiml">AI/ML</label>
        <textarea type="text" placeholder="Enter Your Text" name="text" value={formdata.text}onChange={handle}></textarea>
         {!textvalid && <p style={{color: "red"}}>Reason To Join Cannot Be Empty</p>}
        <button type="submit">Register</button>
        </form>
        </>
}