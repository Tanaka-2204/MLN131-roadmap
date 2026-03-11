import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './Roadmap.css';

// KÉO ẢNH TỪ THƯ MỤC ASSETS (Đã sửa đuôi .png và tên viết liền)
import img1 from './assets/tram1.png';
import img2 from './assets/tram2.png';
import img3 from './assets/tram3.png';
import img4 from './assets/tram4.png';
import img5 from './assets/tram5.png';
import img6 from './assets/tram6.png';
import img7 from './assets/tram7.png';
import img8 from './assets/tram8.png';

const roadmapNodes = [
  // 4 TRẠM BÊN TRÁI 
  { id: 1, x: 10, y: 25, labelPos: 'left', title: 'Nhận diện "Giặc nội xâm"', icon: '⚠️', 
    imageUrl: img1, 
    content: (<ul className="popup-list"><li><strong>Định nghĩa:</strong> Là hành vi lợi dụng chức vụ, quyền hạn để tư lợi cá nhân, bòn rút của công.</li><li><strong>Bản chất:</strong> Là "khuyết tật bẩm sinh" của quyền lực, gắn liền với chế độ tư hữu và sự ra đời của nhà nước.</li><li><strong>Mối đe dọa:</strong> Được Đảng ta xác định là một trong những nguy cơ lớn nhất đe dọa sự tồn vong của chế độ XHCN.</li></ul>) },
  { id: 2, x: 10, y: 50, labelPos: 'left', title: 'Bảo vệ Nhà nước', icon: '🛡️',
    imageUrl: img2, 
    content: (<ul className="popup-list"><li><strong>Bảo vệ bản chất cốt lõi:</strong> Giữ vững bản chất nhà nước "của nhân dân, do nhân dân, vì nhân dân".</li><li><strong>Trả lại công bằng:</strong> Chống tham nhũng chính là lấy lại lợi ích chính đáng cho tập thể và người dân.</li><li><strong>Củng cố niềm tin:</strong> Làm trong sạch bộ máy giúp củng cố vững chắc khối đại đoàn kết toàn dân tộc.</li></ul>) },
  { id: 3, x: 20, y: 75, labelPos: 'left', title: 'Thượng tôn pháp luật', icon: '⚖️',
    imageUrl: img3, 
    content: (<ul className="popup-list"><li><strong>Tính tối thượng:</strong> Đảm bảo pháp luật là thước đo cao nhất, mọi cá nhân, tổ chức đều bình đẳng.</li><li><strong>Không có vùng cấm:</strong> Xử lý vi phạm với tinh thần kiên quyết, "không có ngoại lệ", bất kể người đó là ai.</li><li><strong>Kỷ luật Đảng đi trước:</strong> Kết hợp chặt chẽ giữa kỷ luật của Đảng, hành chính và xử lý hình sự.</li></ul>) },
  { id: 4, x: 35, y: 92, labelPos: 'left', title: 'Cơ chế "4 Không"', icon: '⚙️',
    imageUrl: img4, 
    content: (<ul className="popup-list"><li><strong>Không thể:</strong> Xây dựng cơ chế, chính sách pháp lý chặt chẽ, bịt kín các lỗ hổng quản lý.</li><li><strong>Không dám:</strong> Trừng trị nghiêm minh, tăng tính răn đe để triệt tiêu ý định vi phạm.</li><li><strong>Không muốn:</strong> Giáo dục đạo đức cách mạng, xây dựng văn hóa liêm chính, trọng danh dự.</li><li><strong>Không cần:</strong> Cải cách tiền lương, đảm bảo đời sống vật chất xứng đáng cho cán bộ.</li></ul>) },
  
  // 4 TRẠM BÊN PHẢI 
  { id: 5, x: 65, y: 92, labelPos: 'right', title: 'Nhận thức công dân', icon: '🧠',
    imageUrl: img5, 
    content: (<ul className="popup-list"><li><strong>Hiểu biết pháp lý:</strong> Chủ động tìm hiểu và nắm vững Luật Phòng, chống tham nhũng hiện hành.</li><li><strong>Xác định trách nhiệm:</strong> Nhận thức rõ chống tham nhũng là sự nghiệp của toàn dân.</li><li><strong>Thái độ kiên quyết:</strong> Tuyệt đối không khoan nhượng, lên án mạnh mẽ các hành vi tiêu cực.</li></ul>) },
  { id: 6, x: 80, y: 75, labelPos: 'right', title: 'Thực hành liêm chính', icon: '🌱',
    imageUrl: img6, 
    content: (<ul className="popup-list"><li><strong>Thượng tôn pháp luật:</strong> Tự giác, gương mẫu chấp hành các quy định của pháp luật.</li><li><strong>Nói không với hối lộ:</strong> Tuyệt đối không dùng tiền, lợi ích vật chất để chạy chọt công việc cá nhân.</li><li><strong>Xây dựng văn hóa:</strong> Góp phần hình thành văn hóa tẩy chay tham nhũng, lãng phí ngay từ cơ sở.</li></ul>) },
  { id: 7, x: 90, y: 50, labelPos: 'right', title: 'Giám sát & Tố giác', icon: '👁️',
    imageUrl: img7, 
    content: (<ul className="popup-list"><li><strong>Phát huy dân chủ:</strong> Tích cực tham gia quản lý nhà nước thông qua việc giám sát cán bộ.</li><li><strong>Dũng cảm tố giác:</strong> Kịp thời phản ánh, làm đơn tố cáo khi phát hiện hành vi nhũng nhiễu.</li><li><strong>Hợp tác điều tra:</strong> Cung cấp thông tin, bằng chứng xác thực hỗ trợ các cơ quan chức năng.</li></ul>) },
  { id: 8, x: 90, y: 25, labelPos: 'right', title: 'Trách nhiệm Sinh viên', icon: '🎓',
    imageUrl: img8, 
    content: (<ul className="popup-list"><li><strong>Liêm chính học thuật:</strong> Trung thực trong học cử, thi cử; tuyệt đối không gian lận, không đạo văn.</li><li><strong>Bài trừ tiêu cực:</strong> Lên án mạnh mẽ "bệnh thành tích" và sự thiếu minh bạch trong các phong trào Đoàn - Hội.</li><li><strong>Lan tỏa giá trị:</strong> Sử dụng mạng xã hội để tuyên truyền pháp luật và lan tỏa những tấm gương sống đẹp.</li></ul>) }
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
        {/* TẤM KHIÊN CHUẨN: KÍNH MỜ CYAN */}
        <svg className="s-line-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 195, 255, 0.4)" />
              <stop offset="100%" stopColor="rgba(0, 85, 255, 0.1)" />
            </linearGradient>
          </defs>
          <path 
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

      {/* POPUP HIỂN THỊ CHI TIẾT */}
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