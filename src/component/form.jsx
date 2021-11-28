import { computeHeadingLevel } from "@testing-library/react";
import { useState } from "react";

const Form=({data,setData})=>{
    const[nameValue ,setnameValue]=useState("");
    const[familyValue ,setfamilyValue]=useState("");
    const[emailValue ,setemailValue]=useState("");
    const[phoneValue ,setphoneValue]=useState("");

    // console.log(nameValue ," ",familyValue," ",emailValue,"",phoneValue);

function submit(e) {
    e.preventDefault();
    

const newUser={
    name:nameValue,
    family:familyValue,
    email:emailValue,
    phone:phoneValue,
}

let newData=[...data];
 newData.push(newUser);
 setData(newData);
}
    return(
        <form onSubmit={submit} id="form" className="form">
        <div className="form-controls">
            <label htmlfor="name">نام</label>
            <input onChange={(e)=>setnameValue(e.target.value)} type="text" id="name" style={{direction:"rtl"}}/>
            <small></small>
        </div>

        <div className="form-controls">
            <label htmlfor="family"> نام خانوادگی</label>
            <input  onChange={(e)=>setfamilyValue(e.target.value)} type="text" id="family" style={{direction:"rtl"}}/>
            <small></small>
        </div>


        <div className="form-controls">
            <label htmlfor="email">ایمیل</label>
            <input onChange={(e)=>setemailValue(e.target.value)} type="text" id="email"/>
            <small></small>
        </div>

        <div className="form-controls">
            <label htmlfor="phone">شماره تلفن</label>
            <input onChange={(e)=>setphoneValue(e.target.value)} type="text" id="phone"/>
            <small></small>
        </div>
        <button type="submit">عضویت</button>
    </form>
    )
}
export default Form;