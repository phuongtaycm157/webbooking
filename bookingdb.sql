-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 30, 2020 lúc 11:39 AM
-- Phiên bản máy phục vụ: 10.4.14-MariaDB
-- Phiên bản PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `bookingdb`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hotels`
--

CREATE TABLE `hotels` (
  `hotel_id` int(11) NOT NULL,
  `hotel_name` varchar(255) NOT NULL,
  `hotel_country` varchar(255) NOT NULL,
  `hotel_province` varchar(255) NOT NULL,
  `hotel_city` varchar(255) NOT NULL,
  `hotel_address` text NOT NULL,
  `hotel_sdt` varchar(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `hotels`
--

INSERT INTO `hotels` (`hotel_id`, `hotel_name`, `hotel_country`, `hotel_province`, `hotel_city`, `hotel_address`, `hotel_sdt`, `user_id`) VALUES
(1, 'Hoa Phat', 'Việt Nam', 'Cà Mau', 'Cà Mau', '123, Lê Trung Hưng', '0123789432', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `room`
--

CREATE TABLE `room` (
  `room_id` int(11) NOT NULL,
  `room_tenphong` varchar(225) NOT NULL,
  `room_loai` longtext NOT NULL CHECK (json_valid(`room_loai`)),
  `room_quymo` int(11) NOT NULL,
  `room_succhua` int(11) NOT NULL,
  `room_hasphongtam` int(11) DEFAULT NULL,
  `room_giuong` int(11) DEFAULT NULL,
  `room_tieuchuan` longtext DEFAULT NULL CHECK (json_valid(`room_tieuchuan`)),
  `room_loivao` longtext DEFAULT NULL CHECK (json_valid(`room_loivao`)),
  `room_bep` longtext DEFAULT NULL CHECK (json_valid(`room_bep`)),
  `room_phongtam` longtext DEFAULT NULL CHECK (json_valid(`room_phongtam`)),
  `room_ngoaitroi` longtext DEFAULT NULL CHECK (json_valid(`room_ngoaitroi`)),
  `room_giaitri` longtext DEFAULT NULL CHECK (json_valid(`room_giaitri`)),
  `room_giadinh` longtext DEFAULT NULL CHECK (json_valid(`room_giadinh`)),
  `room_doantoanvasachse` longtext DEFAULT NULL CHECK (json_valid(`room_doantoanvasachse`)),
  `room_khac` longtext DEFAULT NULL CHECK (json_valid(`room_khac`)),
  `room_anh` longtext DEFAULT NULL CHECK (json_valid(`room_anh`)),
  `hotel_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `room`
--

INSERT INTO `room` (`room_id`, `room_tenphong`, `room_loai`, `room_quymo`, `room_succhua`, `room_hasphongtam`, `room_giuong`, `room_tieuchuan`, `room_loivao`, `room_bep`, `room_phongtam`, `room_ngoaitroi`, `room_giaitri`, `room_giadinh`, `room_doantoanvasachse`, `room_khac`, `room_anh`, `hotel_id`) VALUES
(1, 'perfect for honeymooners', '[[\"Toàn bộ căn hộ\",1],[\"Toàn bộ nhà trệt\",0],[\"Toàn bộ nhà riêng\",0],[\"Biệt thự\",0]]', 20, 2, 1, 1, '[[\"Máy điều hòa\",1],[\"Bàn\",0],[\"Tủ áo\",1],[\"Máy sấy\",0],[\"Quạt\",0],[\"Máy sưởi\",0],[\"Bàn ủi\",0],[\"Bộ ga giường\",1],[\"Tiệm giặt gần\",1],[\"Máy giặt\",0]]', '[[\"Chuông\",1],[\"Nhân viên trực cửa\",0],[\"Thanh máy\",1],[\"Chìa khóa thông minh\",1],[\"Đậu xe miễn phí\",1],[\"Bãi đổ xe trả phí\",0],[\"Lối vào riêng\",0],[\"Xe lăn vào được\",0]]', '[[\"máy pha cà phê\",0],[\"Cà phê\",1],[\"Ăn sáng miễn phí\",0],[\"Bát đĩa và dụng cụ ăn uống\",1],[\"Máy rửa bát\",0],[\"Đồ dùng nhà bếp\",0],[\"Tủ đông\",0],[\"Nhà bếp\",0],[\"Lò vi sóng\",1],[\"Lò nướng\",1],[\"Tủ lạnh\",1],[\"Bếp\",0],[\"Trà\",1]]', '[[\"Máy sấy tóc\",1],[\"Dầu gội\",1],[\"Khăn các loại\",0],[\"Sữa tắm\",0],[\"Bồn tắm\",0]]', '[[\"Ban công\",1],[\"Bếp nướng\",0],[\"Xe đạp\",1],[\"Khu đối diện bãi biển\",0],[\"Vườn hoặc sân sau\",1],[\"Lối vào hồ\",0],[\"Trượt tuyết\",0],[\"Khu bờ sông\",0]]', '[[\"Trò chơi bàn cờ\",0],[\"Truyền hình cáp\",1],[\"Internet tính phí\",0],[\"Wifi tính phí\",0],[\"Wifi miễn phí\",1],[\"Internet miễn phí\",1],[\"Tivi\",1],[\"Hệ thống âm thanh\",0],[\"Thiết bị chơi điện tử\",0],[\"Dịch vụ truyền hình trực tuyến\",0]]', '[[\"Bồn tắm trẻ em\",0],[\"Thiết bị giám sát trẻ\",0],[\"Bàn thay tã\",0],[\"Sách và đổ chơi cho trẻ em\",1],[\"Bát đĩa cho trẻ\",1],[\"Cũi em bé\",0],[\"Ghế cao cho trẻ con ngồi ăn\",1],[\"Cũi vải\",0],[\"Cửa chặn cầu thang\",1]]', '[[\"Cảm biến báo khí CO\",0],[\"Được làm sạch bởi công ty làm sạch chuyên nghiệp\",1],[\"Sản phẩm làm sạch được sử dụng dựa trên hướng dẫn về y tế\",1],[\"Vật dụng làm vệ sinh được cung cấp cho khách\",1],[\"Nhận phòng/trả phòng không tiếp xúc\",0],[\"Khẩu trang được cung cấp cho khách\",1],[\"Bình chữa cháy\",1],[\"Bộ sơ cấp cứu\",1],[\"Nước rửa tay và xà phòng được cung cấp\",1],[\"Được khử trùng theo nguyên tắc về y tế hoặc của Agoda\",0],[\"Cảm biến báo khói\",1]]', '[[\"phòng tập gym\",0],[\"bồn tắm nước nóng\",0],[\"lò sưởi trong nhà\",0],[\"hồ bơi trong nhà\",0],[\"cho phép vật nuôi\",0],[\"hồ bơi ngoài trời\",0],[\"hồ bơi riêng\",0],[\"được hút thuốc\",0]]', '[\"http://localhost:3000/static/images/hotel-1.jpg\",\"http://localhost:3000/static/images/hotel-2.jpg\"]', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_type` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `user_type`) VALUES
(1, 'root', 'root@email.com', 'e10adc3949ba59abbe56e057f20f883e', 0),
(2, 'phuongtay', 'phuongtay@email.com', 'e10adc3949ba59abbe56e057f20f883e', 0),
(3, 'manhan', 'manhan@email.com', 'e10adc3949ba59abbe56e057f20f883e', 1),
(4, 'thanhtinh', 'thanhtinh@email.com', 'e10adc3949ba59abbe56e057f20f883e', 1),
(5, 'phuonganh', 'phuonganh@email.com', 'e10adc3949ba59abbe56e057f20f883e', 0),
(6, 'thanhphat', 'thanhphat@email.com', '42dae262b8531b3df48cde9cc018c512', 0);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`hotel_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`room_id`),
  ADD KEY `hotel_id` (`hotel_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `hotels`
--
ALTER TABLE `hotels`
  MODIFY `hotel_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `room`
--
ALTER TABLE `room`
  MODIFY `room_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `hotels`
--
ALTER TABLE `hotels`
  ADD CONSTRAINT `hotels_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `room`
--
ALTER TABLE `room`
  ADD CONSTRAINT `room_ibfk_1` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`hotel_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
