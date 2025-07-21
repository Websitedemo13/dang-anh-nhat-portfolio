# 🚀 Đặng Anh Nhật - Marketing Portfolio Website (Supercharged Edition)

Chào mừng bạn đến với trang portfolio cá nhân của Đặng Anh Nhật, một chuyên gia Marketing và Truyền thông đầy nhiệt huyết và sáng tạo! Website này được thiết kế để giới thiệu các kỹ năng, kinh nghiệm, dự án và thành tựu của anh Nhật một cách chuyên nghiệp và ấn tượng, với một loạt các hiệu ứng và tương tác đột phá, đưa trải nghiệm người dùng lên một tầm cao mới.

## ✨ Tính năng nổi bật - WOW Factor!

*   **Thiết kế hiện đại & Đột phá**: Giao diện người dùng đẹp mắt, tối ưu hóa trải nghiệm với theme màu sáng tạo (Electric Blue, Deep Purple, Neon Green) và hiệu ứng gradient động phức tạp cho background, tạo cảm giác chiều sâu và chuyển động liên tục.
*   **Đa ngôn ngữ**: Hỗ trợ cả tiếng Việt và tiếng Anh, dễ dàng chuyển đổi chỉ với một nút bấm.
*   **Chế độ tối (Dark Mode)**: Tùy chọn chuyển đổi giữa chế độ sáng và tối được điều chỉnh hài hòa với bảng màu mới, mang lại trải nghiệm thị giác tuyệt vời trong mọi điều kiện ánh sáng.
*   **Header "Siêu Ngầu"**: Header cố định với hiệu ứng `backdrop-blur` và shadow tinh tế. Các liên kết điều hướng sẽ tự động highlight (active state) khi bạn cuộn đến phần tương ứng trên trang, giúp người dùng dễ dàng biết mình đang ở đâu.
*   **Hiệu ứng tương tác siêu cấp**: Sử dụng `Framer Motion` để tạo ra các hiệu ứng cuộn, chạm, hover và chuyển động tinh tế, làm cho trang web trở nên sống động và thu hút. Bao gồm hiệu ứng glow cho chữ, ảnh đại diện với viền xoay động, và các card với hiệu ứng 3D tilt và border glow khi hover.
*   **Tải CV trực tiếp**: Nút "Tải CV" cho phép người xem tải về CV của Đặng Anh Nhật ngay lập tức, mượt mà và tiện lợi.
*   **Phần Liên hệ chuyên nghiệp**: Bao gồm một biểu mẫu liên hệ tiện lợi ở một bên và thông tin liên hệ chi tiết ở bên còn lại, giúp kết nối dễ dàng với các icon trực quan.
*   **Chatbot AI thông minh & thân thiện**: Một chatbot nổi bật, được thiết kế lại siêu gọn gàng, đẹp và chuyên nghiệp với hiệu ứng `backdrop-blur`. Chatbot vui vẻ, chủ động gợi ý câu hỏi, có khả năng trả lời mọi thắc mắc về Đặng Anh Nhật dựa trên dữ liệu cá nhân của anh ấy.
*   **Popup chi tiết dự án**: Mỗi dự án hoặc kinh nghiệm có thể được nhấp vào để hiển thị thông tin chi tiết trong một cửa sổ popup mượt mà.
*   **Icon sáng tạo & động**: Tích hợp nhiều icon từ `lucide-react` vào các tiêu đề section và các card để tăng tính trực quan và thẩm mỹ, đồng thời thêm hiệu ứng hover cho icon.
*   **Ảnh đại diện cá nhân hóa**: Ảnh của Đặng Anh Nhật được hiển thị nổi bật ở phần Hero với hiệu ứng đặc biệt, tạo ấn tượng mạnh mẽ ngay từ cái nhìn đầu tiên.
*   **Footer "Siêu Xịn Đẹp"**: Footer được thiết kế lại gọn gàng, chỉ bao gồm thông tin bản quyền và các liên kết mạng xã hội quan trọng, với hiệu ứng hover tinh tế.
*   **Tối ưu hóa di động**: Thiết kế responsive, đảm bảo trải nghiệm tuyệt vời trên mọi thiết bị.

## 🛠️ Công nghệ sử dụng

*   **Next.js 14 (App Router)**: Framework React mạnh mẽ cho các ứng dụng web hiện đại.
*   **Tailwind CSS**: Framework CSS tiện ích để xây dựng giao diện nhanh chóng và linh hoạt, với các tùy chỉnh màu sắc và animation độc đáo, phức tạp.
*   **shadcn/ui**: Bộ sưu tập các thành phần UI có thể tùy chỉnh, được xây dựng trên Tailwind CSS và Radix UI, mang lại sự nhất quán và chuyên nghiệp.
*   **Framer Motion**: Thư viện hoạt ảnh mạnh mẽ cho React để tạo ra các hiệu ứng mượt mà và tương tác cao cấp, nâng tầm trải nghiệm người dùng.
*   **AI SDK (@ai-sdk/openai)**: Bộ công cụ TypeScript để tích hợp các mô hình AI, được sử dụng cho chatbot thông minh.
*   **Lucide React**: Thư viện icon đẹp mắt và dễ sử dụng, được tích hợp xuyên suốt website.

## 🚀 Cách chạy dự án

Để chạy dự án này trên máy cục bộ của bạn:

1.  **Clone repository**:
    \`\`\`bash
    git clone https://github.com/StephenSouth13/dang-anh-nhat-portfolio.git
    cd dang-anh-nhat-portfolio
    \`\`\`
   

2.  **Cài đặt dependencies**:
    \`\`\`bash
    npm install
    # hoặc
    yarn install
    \`\`\`

3.  **Cấu hình biến môi trường (cho Chatbot AI)**:
    Tạo một file `.env.local` trong thư mục gốc của dự án và thêm khóa API OpenAI của bạn:
    \`\`\`
    OPENAI_API_KEY=your_openai_api_key_here
    \`\`\`
    *(Bạn có thể lấy khóa API từ [OpenAI Platform](https://platform.openai.com/))*

4.  **Chạy ứng dụng**:
    \`\`\`bash
    npm run dev
    # hoặc
    yarn dev
    \`\`\`
    Mở trình duyệt và truy cập `http://localhost:3000` để xem trang portfolio.

## ✍️ Người xây dựng Website này

Website portfolio "super đỉnh" này được xây dựng bởi **StephenSouth13**, một lập trình viên đam mê công nghệ và thiết kế web. Anh ấy đã dành nhiều tâm huyết để tạo ra một trang web không chỉ đẹp mắt mà còn mang lại trải nghiệm người dùng tuyệt vời.

*   **Email**: 📧 stephensouth1307@gmail.com
*   **Điện thoại**: 📱 0979 137 018
*   **Địa chỉ**: 📍 Ho Chi Minh City, Vietnam
*   **GitHub**: [StephenSouth13](https://github.com/StephenSouth13)
*   **Website**: [quachthanhlong.com](https://quachthanhlong.com)

Nếu bạn có bất kỳ câu hỏi hoặc muốn bắt đầu một dự án mới, đừng ngần ngại liên hệ!
