# SMF English Center - Hệ thống Tạo Hóa Đơn

Hệ thống tạo hóa đơn tự động cho SMF English Center, tích hợp với Google Sheets.

## Tính năng

- Giao diện form nhập liệu thân thiện với người dùng
- Tự động lưu dữ liệu vào Google Sheets
- Thiết kế responsive, tương thích với mọi thiết bị
- Tông màu hồng trắng tươi sáng, chuyên nghiệp

## Cài đặt

1. Clone repository này về máy local của bạn
2. Tạo một Google Sheet mới và copy Sheet ID
3. Tạo một Google Apps Script project và copy code từ file `Code.gs`
4. Deploy Google Apps Script như một Web App
5. Cập nhật URL trong file `script.js` với Web App URL của bạn
6. Mở file `index.html` trong trình duyệt

## Cấu trúc dự án

- `index.html`: Giao diện người dùng
- `script.js`: Xử lý form và gửi dữ liệu
- `Code.gs`: Google Apps Script code để xử lý dữ liệu và lưu vào Google Sheets

## Công nghệ sử dụng

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Google Apps Script
- Google Sheets API 