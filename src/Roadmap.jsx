import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './Roadmap.css';

const roadmapNodes = [
  // 4 TRẠM BÊN TRÁI (Bám dọc theo cạnh thẳng và đường cong trái)
  { id: 1, x: 10, y: 25, labelPos: 'left', title: 'Nhận diện "Giặc nội xâm"', icon: '⚠️', 
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600&h=300', content: (<ul className="popup-list"><li><strong>Định nghĩa:</strong> Là hành vi lợi dụng chức vụ, quyền hạn để tư lợi cá nhân.</li></ul>) },
  { id: 2, x: 10, y: 50, labelPos: 'left', title: 'Bảo vệ Nhà nước', icon: '🛡️',
    imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600&h=300', content: (<ul className="popup-list"><li><strong>Bảo vệ bản chất cốt lõi:</strong> Giữ vững bản chất nhà nước của nhân dân.</li></ul>) },
  { id: 3, x: 20, y: 75, labelPos: 'left', title: 'Thượng tôn pháp luật', icon: '⚖️',
    imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=600&h=300', content: (<ul className="popup-list"><li><strong>Tính tối thượng:</strong> Đảm bảo pháp luật là thước đo cao nhất.</li></ul>) },
  { id: 4, x: 35, y: 92, labelPos: 'left', title: 'Cơ chế "4 Không"', icon: '⚙️',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=300', content: (<ul className="popup-list"><li><strong>Không thể, Không dám, Không muốn, Không cần.</strong></li></ul>) },
  
  // 4 TRẠM BÊN PHẢI (Đối xứng tuyệt đối sang)
  { id: 5, x: 65, y: 92, labelPos: 'right', title: 'Nhận thức công dân', icon: '🧠',
    imageUrl: 'https://images.unsplash.com/photo-1505664159854-23261827d040?auto=format&fit=crop&q=80&w=600&h=300', content: (<ul className="popup-list"><li><strong>Hiểu biết pháp lý:</strong> Nắm vững Luật Phòng chống tham nhũng.</li></ul>) },
  { id: 6, x: 80, y: 75, labelPos: 'right', title: 'Thực hành liêm chính', icon: '🌱',
    imageUrl: 'https://images.unsplash.com/photo-1603969409481-2a11b0bb75df?auto=format&fit=crop&q=80&w=600&h=300', content: (<ul className="popup-list"><li><strong>Thượng tôn pháp luật:</strong> Tự giác chấp hành các quy định.</li></ul>) },
  { id: 7, x: 90, y: 50, labelPos: 'right', title: 'Giám sát & Tố giác', icon: '👁️',
    imageUrl: 'https://images.unsplash.com/photo-1531206715517-5c5610e28081?auto=format&fit=crop&q=80&w=600&h=300', content: (<ul className="popup-list"><li><strong>Phát huy dân chủ:</strong> Tích cực tham gia quản lý nhà nước.</li></ul>) },
  { id: 8, x: 90, y: 25, labelPos: 'right', title: 'Trách nhiệm Sinh viên', icon: '🎓',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600&h=300', content: (<ul className="popup-list"><li><strong>Liêm chính học thuật:</strong> Trung thực, tuyệt đối không gian lận.</li></ul>) }
];

export default function MacLeninRoadmap() {
  const [activePopup, setActivePopup] = useState(null);
  const activeNodeData = roadmapNodes.find(node => node.id === activePopup);

  return (
    <div className="roadmap-container">
      <div className="roadmap-header">
        <h2 className="subject-title">Học phần: Chủ nghĩa Xã hội Khoa học</h2>
        <h1 className="roadmap-title">Dân chủ XHCN & Nhà nước Pháp quyền ở Việt Nam</h1>
        <p className="roadmap-subtitle">Chuyên đề: Phòng, chống tham nhũng và Trách nhiệm công dân</p>
      </div>
      
      <div className="s-shape-timeline">
        {/* TẤM KHIÊN CHUẨN: RỘNG NGANG, THẲNG TRÊN, BO TRÒN DƯỚI */}
        <svg className="s-line-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 195, 255, 0.4)" />
              <stop offset="100%" stopColor="rgba(0, 85, 255, 0.1)" />
            </linearGradient>
          </defs>
          <path 
            /* Đây là công thức hình khiên chuẩn mực nhất */
            d="M 10,10 L 90,10 L 90,50 Q 90,85 50,98 Q 10,85 10,50 Z" 
            fill="url(#shieldGrad)" 
            stroke="rgba(0, 195, 255, 0.8)" 
            strokeWidth="1.5" 
            vectorEffect="non-scaling-stroke"
            style={{ filter: 'drop-shadow(0px 0px 15px rgba(0, 195, 255, 0.5))' }}
          />
        </svg>

        {roadmapNodes.map((node) => (
          <div key={node.id} className={`checkpoint-absolute ${node.labelPos}`} style={{ left: `${node.x}%`, top: `${node.y}%` }}>
            <div className={`checkpoint-node ${activePopup === node.id ? 'active' : ''}`} onClick={() => setActivePopup(node.id)}>
              <span className="checkpoint-icon">{node.icon}</span>
            </div>
            <div className="checkpoint-label">
              <span className="label-number">Trạm {node.id}</span>
              <span className="label-text">{node.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* POPUP GIỮ NGUYÊN */}
      {activeNodeData && createPortal(
        <div className="popup-overlay" onClick={() => setActivePopup(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn" onClick={() => setActivePopup(null)}>&times;</button>
            <div className="popup-header">
              <h3 className="popup-title">{activeNodeData.icon} {activeNodeData.title}</h3>
            </div>
            <div className="popup-body">
              <img src={activeNodeData.imageUrl} alt={activeNodeData.title} className="popup-image" />
              <div className="popup-text">{activeNodeData.content}</div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}