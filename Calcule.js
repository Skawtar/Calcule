import React, { useState } from "react";
import CalculateStyle from "./ClaculeStyle.module.css";

function Calcule(){
    const [res, setRse]=useState("")
    function clickNum(e){
        setRse(res.concat(e.target.value))
    }
    function Calculate(){
        setRse(eval(res).toString())
    }
    function dell(){
        setRse("")
    }
    return(
 
            
        <div className={CalculateStyle.div}>
            <div>
            <input  type="text" placeholder="0" value={res} className={CalculateStyle.inputTxt}/>
            </div>
            <input type="button" value={"1"}onClick={clickNum} className={CalculateStyle.input} />
            <input type="button" value={"2"} onClick={clickNum}className={CalculateStyle.input}/>
            <input type="button" value={"3"} onClick={clickNum}className={CalculateStyle.input}/>
            <input type="button" value={"4"} onClick={clickNum}className={CalculateStyle.input}/>
            <input type="button" value={"5"} onClick={clickNum}className={CalculateStyle.input}/>
            <input type="button" value={"6"} onClick={clickNum}className={CalculateStyle.input}/>
            <input type="button" value={"7"}onClick={clickNum}className={CalculateStyle.input}/>
            <input type="button" value={"8"}onClick={clickNum}className={CalculateStyle.input}/>
            <input type="button" value={"9"}onClick={clickNum}className={CalculateStyle.input}/>
            <input type="button" value={"0"}onClick={clickNum}className={CalculateStyle.input}/>
            <input type="button" value={"+"}onClick={clickNum}className={CalculateStyle.input}/>
            <input type="button" value={"-"}onClick={clickNum}className={CalculateStyle.input}/>
            <input type="button" value={"/"}onClick={clickNum}className={CalculateStyle.input}/>
            <input type="button" value={"*"}onClick={clickNum}className={CalculateStyle.input}/>
            <input type="button" value={"="} onClick={Calculate} className={CalculateStyle.input}/>
            <input type="button" value={"Dell"}onClick={dell}className={CalculateStyle.input}/>
        </div>
        
    )
}
export default Calcule;