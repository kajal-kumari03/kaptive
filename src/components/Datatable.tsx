



// import React, { useState } from 'react';
// import './Datatable.css'; 

// interface DataTableProps {
//   data: any;
// }

// const DataTable: React.FC<DataTableProps> = ({ data }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 4; 

//   const totalMonths = 12;
//   const totalPages = Math.ceil(totalMonths / itemsPerPage);

//   const indexOfFirstMonth = (currentPage - 1) * itemsPerPage;
//   const indexOfLastMonth = indexOfFirstMonth + itemsPerPage;

//   const monthNames = [
//     'Jan', 'Feb', 'March', 'April',
//     'May', 'June', 'July', 'August',
//     'September', 'October', 'November', 'December'
//   ];

//   const monthsToShow = monthNames.slice(indexOfFirstMonth, indexOfLastMonth);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="data-table-container">
//       <div className="pagination">
//         <button onClick={handlePrevPage} disabled={currentPage === 1}>
//           Previous
//         </button>
//         <span>{`Page ${currentPage} of ${totalPages}`}</span>
//         <button onClick={handleNextPage} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>
//       <table className="data-table">
//         <thead>
//           <tr className='tr'>
//             <th className="header-cashflow">Cashflow</th>
//             {monthsToShow.map(month => (
//               <th className="header-month" key={month}>{month}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.slice(0, 177).map((row: any, index: number) => (
//             <tr key={index}>
//               <td className="cell-cashflow">{row.Overhead}</td>
//               {monthsToShow.map(month => (
//                 <td className="cell-data" key={month}>{row[month]}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
      
//     </div>
//   );
// };

// export default DataTable;






// import React, { useState, useEffect } from 'react';
// import './Datatable.css'; 

// interface DataTableProps {
//   data: any;
// }

// const DataTable: React.FC<DataTableProps> = ({ data }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(4); // Default to 4 items per page

//   // Update itemsPerPage based on screen width
//   useEffect(() => {
//     const updateItemsPerPage = () => {
//       if (window.innerWidth <= 600) {
//         setItemsPerPage(2);
//       } else {
//         setItemsPerPage(4);
//       }
//     };

//     updateItemsPerPage();
//     window.addEventListener('resize', updateItemsPerPage);

//     return () => {
//       window.removeEventListener('resize', updateItemsPerPage);
//     };
//   }, []);

//   const totalMonths = 12;
//   const totalPages = Math.ceil(totalMonths / itemsPerPage);

//   const indexOfFirstMonth = (currentPage - 1) * itemsPerPage;
//   const indexOfLastMonth = indexOfFirstMonth + itemsPerPage;

//   const monthNames = [
//     'Jan', 'Feb', 'March', 'April',
//     'May', 'June', 'July', 'August',
//     'September', 'October', 'November', 'December'
//   ];

//   const monthsToShow = monthNames.slice(indexOfFirstMonth, indexOfLastMonth);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const formatNumber = (number: any) => {
//     // Ensure the number is an integer
//     const parsedNumber = parseInt(number, 10);
//     // Return the parsed number, or the original if parsing failed
//     return isNaN(parsedNumber) ? number : parsedNumber;
//   };

//   return (
//     <div className="data-table-container">
//       <div className="pagination">
//         <button onClick={handlePrevPage} disabled={currentPage === 1}>
//           Previous
//         </button>
//         <span>{`Page ${currentPage} of ${totalPages}`}</span>
//         <button onClick={handleNextPage} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>
//       <table className="data-table">
//         <thead>
//           <tr className='tr'>
//             <th className="header-cashflow">Cashflow</th>
//             {monthsToShow.map(month => (
//               <th className="header-month" key={month}>{month}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.slice(0, 177).map((row: any, index: number) => (
//             <tr key={index}>
//               <td className="cell-cashflow">{row.Overhead}</td>
//               {monthsToShow.map(month => (
//                 <td className="cell-data" key={month}>{formatNumber(row[month])}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataTable;



import React, { useState, useEffect } from 'react';
import './Datatable.css'; 

interface DataTableProps {
  data: any;
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4); // Default to 4 items per page

  // Update itemsPerPage based on screen width
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 600) {
        setItemsPerPage(2);
      } else if(window.innerWidth <= 900)  {
        setItemsPerPage(3);
      }
      else{
        setItemsPerPage(4);

      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  const totalMonths = 12;
  const totalPages = Math.ceil(totalMonths / itemsPerPage);

  const indexOfFirstMonth = (currentPage - 1) * itemsPerPage;
  const indexOfLastMonth = indexOfFirstMonth + itemsPerPage;

  const monthNames = [
    'Jan', 'Feb', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const monthsToShow = monthNames.slice(indexOfFirstMonth, indexOfLastMonth);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const formatNumber = (number: any) => {
    // Ensure the number is a float and format to two decimal places
    const parsedNumber = parseFloat(number);
    // Return the formatted number, or the original if parsing failed
    return isNaN(parsedNumber) ? number : parsedNumber.toFixed(2);
  };

  return (
    <div className="data-table-container">
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <table className="data-table">
        <thead>
          <tr className='tr'>
            <th className="header-cashflow">Cashflow</th>
            {monthsToShow.map(month => (
              <th className="header-month" key={month}>{month}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 177).map((row: any, index: number) => (
            <tr key={index}>
              <td className="cell-cashflow">{row.Overhead}</td>
              {monthsToShow.map(month => (
                <td className="cell-data" key={month}>{formatNumber(row[month])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
