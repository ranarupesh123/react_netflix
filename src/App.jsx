import React from 'react';
import Card from  './Cards';
import './index.css';
import Sdata from './sdata';



const App = ()=>(
<>
  <h1 className="heading_style">Netflix series</h1>
  {Sdata.map((val)=>{
      return (
        <Card
        key = {val.id}
        imgsrc = {val.imgsrc}
        title={val.title}
        sname = {val.sname}
        link = {val.link}
        />
      );
  })}
</>
);

export default App;
