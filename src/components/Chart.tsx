
// import './chart.css';
// import React, { useState } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// interface ChartProps {
//   data: any[];
// }

// const Chart: React.FC<ChartProps> = ({ data }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 8; 

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

//   const chartData = {
//     labels: currentData.map((item: any) => item.Overhead),
//     datasets: [
//       {
//         label: 'Revenue',
//         data: currentData.map((item: any) => item.Jan),
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//       },
//       {
//         label: 'COGS',
//         data: currentData.map((item: any) => item.Feb),
//         backgroundColor: 'rgba(153, 102, 255, 0.6)',
//       },
//       {
//         label: 'Gross Profit',
//         data: currentData.map((item: any) => item.March),
//         backgroundColor: 'rgba(255, 159, 64, 0.6)',
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 1000000000,
//         ticks: {
//           stepSize: 200000000, 
//           maxTicksLimit: 6, 
//         },
//       },
//     },
//   };

//   const handleNextPage = () => {
//     if (currentPage < Math.ceil(data.length / itemsPerPage)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
    // <div className='chart'>
      
    //   <div className="paginations">
    //     <button onClick={handlePrevPage} disabled={currentPage === 1}>
    //       Previous
    //     </button>
    //     <span>{` ${currentPage} of ${Math.ceil(data.length / itemsPerPage)}`}</span>
    //     <button onClick={handleNextPage} disabled={currentPage === Math.ceil(data.length / itemsPerPage)}>
    //       Next
    //     </button>
    //   </div>
    //   <div  className='bar'>
    //     <Bar  className='mainbar' data={chartData} options={options} />
    //   </div>
    // </div>
//   );
// };

// export default Chart;





import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './chart.css';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// interface ChartProps {
//   data: any[];
// }

// const Chart: React.FC<ChartProps> = ({ data }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth <= 600 ? 3 : 8);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);


//   useEffect(() => {
//     const handleResize = () => {
//       const isMobileView = window.innerWidth <= 600;
//       setItemsPerPage(isMobileView ? 3 : 8);
//       setCurrentPage(1); // Reset to first page on resize
//       setIsMobile(isMobileView);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ChartProps {
  data: any[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    if (window.innerWidth <= 600) return 3;
    if (window.innerWidth <= 900) return 5;
    return 8;
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 600 && window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 600;
      const isTabletView = window.innerWidth > 600 && window.innerWidth <= 900;
      setItemsPerPage(isMobileView ? 3 : isTabletView ? 5 : 8);
      setCurrentPage(1); // Reset to first page on resize
      setIsMobile(isMobileView);
      setIsTablet(isTabletView);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const chartData = {
    labels: currentData.map((item: any) => item.Overhead),
    datasets: [
      {
        label: 'Revenue',
        data: currentData.map((item: any) => item.Jan),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'COGS',
        data: currentData.map((item: any) => item.Feb),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
      {
        label: 'Gross Profit',
        data: currentData.map((item: any) => item.March),
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 1000000000,
        ticks: {
          stepSize: 200000000,
          maxTicksLimit: 6,
            
        },
      },
    },
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='chart'>
      
    <div className="paginations">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>{`Page  ${currentPage} of ${Math.ceil(data.length / itemsPerPage)}`}</span>
      <button onClick={handleNextPage} disabled={currentPage === Math.ceil(data.length / itemsPerPage)}>
        Next
      </button>
    </div>
    <div  className='bar'>
      <Bar  className='mainbar' data={chartData} options={options} />
    </div>
  </div>
  );
};

export default Chart;


