import React, { useState } from 'react';
import './Converter.css';

export default function Converter() {
    const [feetValue,setFeetValue]=useState();
    const [metersValue,setMetersValue]=useState();
    const [inchesValue,setInchesValue]=useState();
    const [cmValue,setCmValue]=useState();
    const [yardsValue,setYardsValue]=useState();
    const [kilometersValue,setKilometersValue]=useState();
    const [milesValue,setMilesValue]=useState();
    

const convertFromFeetToOtherMeasurements=(value)=>{
    setMetersValue(Math.round(value/3.2808 * 100) / 100);
    setInchesValue(Math.round(value*12 * 100) / 100);
    setCmValue(Math.round(value/0.032808 * 100) / 100);
    setYardsValue(Math.round(value*0.33333 * 100) / 100);
   setKilometersValue(Math.round(value/3280.8 * 100000) / 100000);
   setMilesValue(Math.round(value*0.00018939 * 100000) / 100000);

}

const convertFromMetersToOtherMeasurements=(value)=>{
    setFeetValue(Math.round(value*3.2808 * 100) / 100);
    setInchesValue(Math.round(value*39.370* 100) / 100);
    setCmValue(Math.round(value/0.01 * 100) / 100);
    setYardsValue(Math.round(value*1.0936 * 100) / 100);
   setKilometersValue(Math.round(value/1000 * 100000) / 100000);
   setMilesValue(Math.round(value*0.00062137 * 100000) / 100000);

}


const convertFromInchesToOtherMeasurements=(value)=>{
  setFeetValue(Math.round(value*0.083333 * 1000) / 1000);
    setMetersValue(Math.round(value/39.370 * 1000) / 1000);
    setCmValue(Math.round(value/0.039370 * 100) / 100);
    setYardsValue(Math.round(value*0.02777 * 1000) / 1000);
   setKilometersValue(Math.round(value/39370 * 1000000) / 1000000);
    setMilesValue(Math.round(value*0.000015783 * 1000000) / 1000000);

}

const convertFromCmToOtherMeasurements=(value)=>{
   setFeetValue (Math.round(value*0.032808 * 1000) / 1000);
    setInchesValue(Math.round(value*0.39370 * 100) / 100);
    setMetersValue(Math.round(value/100 * 1000) / 1000);
    setYardsValue(Math.round(value*0.01093 * 1000) / 1000);
   setKilometersValue(Math.round(value/100000 * 1000000) / 1000000);
    setMilesValue(Math.round(value*0.0000062137 * 1000000) / 1000000);

}

const convertFromYardsToOtherMeasurements=(value)=>{
   setFeetValue(Math.round(value*3 * 100) / 100);
    setMetersValue(Math.round(value/1.0936 * 100) / 100);
    setInchesValue(Math.round(value*36 * 100) / 100);
    setCmValue(Math.round(value/0.010936 * 100) / 100);
   setKilometersValue(Math.round(value/1093.6* 100000) / 100000);
    setMilesValue(Math.round(value*0.00056818 * 100000) / 100000);

}

const convertFromKilometersToOtherMeasurements=(value)=>{
    setFeetValue(Math.round(value*3280.8* 100) / 100);
    setMetersValue(Math.round(value*1000* 100) / 100);
    setInchesValue(Math.round(value*36370* 100) / 100);
    setCmValue(Math.round(value*100000* 100) / 100);
    setYardsValue(Math.round(value*1093.6* 100) / 100);
    setMilesValue(Math.round(value*0.62137 * 100) / 100);

}

const convertFromMilesToOtherMeasurements=(value)=>{
    setFeetValue( Math.round(value*5280 * 100) / 100);
    setMetersValue(Math.round(value/0.00062137* 100) / 100);
    setInchesValue(Math.round(value*63360 * 100) / 100);
    setCmValue(Math.round(value/0.0000062137* 100) / 100);
    setYardsValue(Math.round(value*1760* 100) / 100);
    setKilometersValue(Math.round(value/0.62137 * 100) / 100);

}








    
  return (
    <>
    
    <div className="converter-container">
        <h2>Type Number To Convert it</h2>
        
        <div className='Feet'>
            <label>Feet</label>
            <input type="number" placeholder='Feet' 
            value={feetValue} onChange={(e)=>setFeetValue(e.target.value)} 
            onKeyUp={()=>convertFromFeetToOtherMeasurements(feetValue)} />
       </div>

        <div className='Meters'>
            <label>Meters</label>
            <input type="number" placeholder='Meters' 
            value={metersValue} onChange={(e)=>setMetersValue(e.target.value)}
            onKeyUp={()=>convertFromMetersToOtherMeasurements(metersValue)} />
        </div>

        <div className='Inches'>
            <label>Inches</label>
            <input type="number" placeholder='Inches' 
            value={inchesValue} onChange={(e)=>setInchesValue(e.target.value)}
            onKeyUp={()=>convertFromInchesToOtherMeasurements(inchesValue)}/>
        </div>

        <div className='Cm'>
            <label>Cm</label>
            <input type="number" placeholder='Cm' 
            value={cmValue} onChange={(e)=>setCmValue(e.target.value)}
            onKeyUp={()=>convertFromCmToOtherMeasurements(cmValue)}/>
        </div>

        <div className='Yards'>
            <label>Yards</label>
            <input type="number" placeholder='Yards' 
            value={yardsValue} onChange={(e)=>setYardsValue(e.target.value)}
            onKeyUp={()=>convertFromYardsToOtherMeasurements(yardsValue)}/>
        </div>

        <div className='Kilometers'>
            <label>Kilometers</label>
            <input type="number" placeholder='Kilometers' 
            value={kilometersValue} onChange={(e)=>setKilometersValue(e.target.value)}
            onKeyUp={()=>convertFromKilometersToOtherMeasurements(kilometersValue)}/>
        </div>

        <div className='Miles'>
            <label>Miles</label>
            <input type="number" placeholder='Miles' 
            value={milesValue} onChange={(e)=>setMilesValue(e.target.value)} 
            onKeyUp={()=>convertFromMilesToOtherMeasurements(milesValue)}/>
        </div>
    </div>
    
    </>
  )
}
