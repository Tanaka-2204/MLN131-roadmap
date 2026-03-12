import React from 'react';
import './AIDeclaration.css';

export default function AIDeclaration() {
  return (
    <div className="ai-container">
      <div className="ai-card">
        <div className="ai-header">
          <span className="ai-icon">🤖</span>
          <h1 className="ai-title">Cam kết Liêm chính & Sử dụng AI</h1>
        </div>
        
        <div className="ai-content">
          <div className="ai-section">
            <h3 className="ai-heading">1. Hỗ trợ Lập trình & Giao diện (Code & UI)</h3>
            <p>Nhóm đã sử dụng AI như một "trợ lý kỹ thuật" để hỗ trợ viết cấu trúc mã nguồn ReactJS/Vite, tìm và sửa lỗi (debug) trong quá trình triển khai, cũng như tối ưu hóa mã CSS để tạo ra hiệu ứng tương tác cho "Tấm khiên phát sáng" và các popup.</p>
          </div>

          <div className="ai-section">
            <h3 className="ai-heading">2. Thiết kế Hình ảnh minh họa (Image Generation)</h3>
            <p>Để tăng tính trực quan cho bài báo cáo, nhóm đã sử dụng công cụ tạo ảnh AI để thiết kế đồng bộ bộ 8 hình ảnh đồ họa (isometric vector) tương ứng với nội dung của 8 trạm kiểm soát trên bản đồ.</p>
          </div>

          <div className="ai-section">
            <h3 className="ai-heading">3. Quyền sở hữu Ý tưởng & Nội dung Học thuật</h3>
            <p>Toàn bộ ý tưởng chủ đạo (sử dụng background Tòa nhà Quốc hội, concept Tấm khiên bảo vệ) và nội dung kiến thức chuyên môn về "Phòng, chống tham nhũng" và "Cơ chế 4 Không" đều do nhóm tự nghiên cứu, chắt lọc từ tài liệu chính thống và trực tiếp biên soạn. AI không can thiệp vào tư duy phản biện và nội dung học thuật của dự án.</p>
          </div>
        </div>
      </div>
    </div>
  );
}