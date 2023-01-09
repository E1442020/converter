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
    

    const convertAllMeasurementsToMeter=(value)=>{
        if(value==metersValue){value=value}
        else if(value==feetValue){value=value/3.2808}
        else if(value==inchesValue){value=value/39.370 }
        else if(value==cmValue){value=value/100 }
        else if(value==yardsValue){value=value/1.0936 }
        else if(value==kilometersValue){value=value*1000 }
        else if(value==milesValue){value=value/0.00062137 }
        
        convertFromMetersToOtherMeasurements(value)
    }
       
    
    const convertFromMetersToOtherMeasurements=(value)=>{
        setFeetValue(Math.round(value*3.2808 * 100) / 100);
        setMetersValue(Math.round(value*100) / 100);
        setInchesValue(Math.round(value*39.370* 100) / 100);
        setCmValue(Math.round(value/0.01 * 100) / 100);
        setYardsValue(Math.round(value*1.0936 * 100) / 100);
       setKilometersValue(Math.round(value/1000 * 100000) / 100000);
       setMilesValue(Math.round(value*0.00062137 * 100000) / 100000);

    
    }









    
  return (
    <>
    
   <div className='converter-container'>
   <div className="converter-content">
        <h2>Type Number To Convert it</h2>
        
        <div className='Feet'>
            <label>Feet</label>
            <input type="number" placeholder='Feet' 
            value={feetValue} onChange={(e)=>setFeetValue(e.target.value)} 
            onKeyUp={()=>convertAllMeasurementsToMeter(feetValue)} />
       </div>

        <div className='Meters '>
            <label>Meters</label>
            <input type="number" placeholder='Meters' 
            value={metersValue} onChange={(e)=>setMetersValue(e.target.value)}
            onKeyUp={()=>convertAllMeasurementsToMeter(metersValue)} />
        </div>

        <div className='Inches'>
            <label>Inches</label>
            <input type="number" placeholder='Inches' 
            value={inchesValue} onChange={(e)=>setInchesValue(e.target.value)}
            onKeyUp={()=>convertAllMeasurementsToMeter(inchesValue)}/>
        </div>

        <div className='Cm'>
            <label>Cm</label>
            <input type="number" placeholder='Cm' 
            value={cmValue} onChange={(e)=>setCmValue(e.target.value)}
            onKeyUp={()=>convertAllMeasurementsToMeter(cmValue)}/>
        </div>

        <div className='Yards'>
            <label>Yards</label>
            <input type="number" placeholder='Yards' 
            value={yardsValue} onChange={(e)=>setYardsValue(e.target.value)}
            onKeyUp={()=>convertAllMeasurementsToMeter(yardsValue)}/>
        </div>

        <div className='Kilometers'>
            <label>Kilometers</label>
            <input type="number" placeholder='Kilometers' 
            value={kilometersValue} onChange={(e)=>setKilometersValue(e.target.value)}
            onKeyUp={()=>convertAllMeasurementsToMeter(kilometersValue)}/>
        </div>

        <div className='Miles'>
            <label>Miles</label>
            <input type="number" placeholder='Miles' 
            value={milesValue} onChange={(e)=>setMilesValue(e.target.value)} 
            onKeyUp={()=>convertAllMeasurementsToMeter(milesValue)}/>
        </div>
    </div>
    
   </div>
    </>
  )
  }