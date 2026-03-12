import React, { useState } from 'react';
import MacLeninRoadmap from './Roadmap.jsx';
import AIDeclaration from './AIDeclaration.jsx';
import './AIDeclaration.css';

function App() {
  const [activePage, setActivePage] = useState('roadmap');

  // Đưa ảnh nền Tòa nhà Quốc hội ra bao phủ toàn bộ App
  const appStyle = {
    width: '100vw',
    minHeight: '100vh',
    backgroundImage: "linear-gradient(rgba(10, 15, 26, 0.85), rgba(10, 15, 26, 0.95)), url('https://namphucons.vn/wp-content/uploads/2021/12/203336435_4227455387324097_6645653143114508172_n.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };

  return (
    <div style={appStyle}>
      {/* THANH MENU ĐƯỢC GHIM (FIXED) TRÊN CÙNG */}
      <nav className="top-navigation" style={{ position: 'fixed', width: '100%', top: 0, left: 0, boxSizing: 'border-box' }}>
        <button 
          className={`nav-button ${activePage === 'roadmap' ? 'active' : ''}`}
          onClick={() => setActivePage('roadmap')}
        >
          🗺️ Bản đồ học tập
        </button>
        <button 
          className={`nav-button ${activePage === 'ai' ? 'active' : ''}`}
          onClick={() => setActivePage('ai')}
        >
          🤖 Cam kết sử dụng AI
        </button>
      </nav>

      {/* VÙNG CHỨA NỘI DUNG (Đẩy xuống 90px để không bị menu che mất tiêu đề) */}
      <div style={{ paddingTop: '90px' }}>
        {activePage === 'roadmap' ? <MacLeninRoadmap /> : <AIDeclaration />}
      </div>
    </div>
  );
}

export default App;