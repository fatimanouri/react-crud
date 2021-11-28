
import { useState } from 'react';
import './App.css';
import Form from './component/form';
import Header from './component/header';
import Table from './component/table';
import Data from './Data';


function App() {

     const[data,setData]= useState(Data);
     console.log(data);
     return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-12 col-xs-12 col-sm-12 col-md-6">

          <div className="main text-right">
            <Header/>
<Form data={data} setData={setData}/>

          </div>

      </div>
      <div className="col-12 col-xs-12 col-sm-12 col-md-6 mx-auto mb-5">
          <div style={{marginTop: "2rem", backgroundColor: "white" , fontSize:"1.3rem", padding: "4rem 2rem", borderRadius: "0.5rem"}}>
             <Table data={data} setData={setData}/>
          </div>
      </div>
  </div>
</div>
    
  );
}

export default App;
