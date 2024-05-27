import React from 'react';
import './App.css';
import data from './data.json';
import  DataTable  from './components/Datatable';
import Chart from './components/Chart';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Header from './components/footer';




const App: React.FC = () => {
  return (
    

    <div className="app">
      
      <div className="side">
        <div >
      <Sidebar />
      </div>
      <div className="main-content">
    <Navbar />
       <div className="chart-section">
         <Chart data={data.Sheet1} />
        </div>
        
        <div className="table-section">
          <div style={{display:'flex', justifyContent:'space-between'}}>
          <h2 className='h4'>CashFlow Summary - 1</h2>
        <div style={{gap:'10px',marginTop:'20px', marginRight:'20px'}}>
          <button className="button">Summary</button>
         <button className="button">Balance </button>
         </div>
          </div>
          <div className='kkkk'>
          <DataTable  data={data.Sheet1} />
          </div>
        </div>
        
      </div>
    </div>
    <div className='footer'>
    <Header />
    </div>
    </div>
  );
};

export default App;
