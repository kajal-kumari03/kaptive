import React from 'react';
import './Navbar.css'

interface MyComponentProps {
  onClickSummary: () => void;
  onClickBalanceSheet: () => void;
  // You can add more props here if needed
}

const MyComponent: React.FC<MyComponentProps> = ({ onClickSummary, onClickBalanceSheet }) => {
  const handleIncomeStatementClick = () => {
    console.log('Income Statement button clicked');
  };

  const handleCashflowClick = () => {
    console.log('Cashflow button clicked');
  };



  return (
    <div className="container">
      <div className='imgdiv' >
        <div>
        <img className='image' src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color/700/06_menu_stack-1024.png" alt="" />
        </div>
        <div>
        <img className='image' src="https://icon-library.com/images/android-settings-icon-png/android-settings-icon-png-21.jpg" alt="" />
        </div>
        </div>
    <div className="buttons1">
      <button className="button">Summary</button>
      <button className="button">Balance </button>
      <button className="button">Income </button>
      <button className="button" style={{background:'rgb(159, 156, 251)'}}>Cashflow</button>
      
    </div>
    <div className="buttons2">
      <button className="button" style={{background:'rgb(159, 156, 251)'}}>Normal View</button>
      <button className="button">Growth View</button>
      
      <button className="button2">Setting</button>
    </div>
  </div>
  );
};

const Navbar: React.FC = () => {
  const handleSummaryClick = () => {
    console.log('Summary button clicked');
  };

  const handleBalanceSheetClick = () => {
    console.log('Balance Sheet button clicked');
  };



  return (
    <MyComponent
      onClickSummary={handleSummaryClick}
      onClickBalanceSheet={handleBalanceSheetClick}
      // Add other props as needed
    
    />
  );
};

export default Navbar;



