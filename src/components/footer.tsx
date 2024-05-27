import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ width:'82vw',backgroundColor: '#8ac8fa', color: '#fff', height: '4vh', display: 'flex', justifyContent: 'space-between', marginLeft: '32vh',alignItems: 'center', padding: '5px 10px' }}>
      <span>© 2023</span>
      <span>Copyright all rights reserved by PLSE</span>
      <div style={{ display: 'flex', gap: '10px' }}>
        <a href="https://www.facebook.com/login.php/"><img style={{width:'1.5vw',height:'3vh'}} src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png" alt="Facebook" /></a>
        <a href="hthttps://www.google.co.in/"><img style={{width:'1.5vw',height:'3vh'}} src="https://tse2.mm.bing.net/th?id=OIP.HG6XtzIxf4Nbo_vZt8T3EAHaHa&pid=Api&P=0&h=180" alt="Google" /></a>
        <a href="https://www.instagram.com/accounts/login/"><img style={{width:'1.5vw',height:'3vh'}} src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Twitter" /></a>
      </div>
    </header>
  );
};

export default Header;
