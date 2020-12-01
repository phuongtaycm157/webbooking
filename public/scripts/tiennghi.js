let room_tieuchuan = [["Máy điều hòa",0],["Bàn",0],["Tủ áo",0],["Máy sấy",0],["Quạt",0],["Máy sưởi",0],["Bàn ủi",0],["Bộ ga giường",0],["Tiệm giặt gần",0],["Máy giặt",0]];
let room_loivao = [["Chuông",0],["Nhân viên trực cửa",0],["Thanh máy",0],["Chìa khóa thông minh",0],["Đậu xe miễn phí",0],["Bãi đổ xe trả phí",0],["Lối vào riêng",0],["Xe lăn vào được",0]];
let room_bep = [["máy pha cà phê",0],["Cà phê",0],["Ăn sáng miễn phí",0],["Bát đĩa và dụng cụ ăn uống",0],["Máy rửa bát",0],["Đồ dùng nhà bếp",0],["Tủ đông",0],["Nhà bếp",0],["Lò vi sóng",0],["Lò nướng",0],["Tủ lạnh",0],["Bếp",0],["Trà",0]];
let room_phongtam = [["Máy sấy tóc",0],["Dầu gội",0],["Khăn các loại",0],["Sữa tắm",0],["Bồn tắm",0]];
let room_ngoaitroi = [["Ban công",0],["Bếp nướng",0],["Xe đạp",0],["Khu đối diện bãi biển",0],["Vườn hoặc sân sau",0],["Lối vào hồ",0],["Trượt tuyết",0],["Khu bờ sông",0]];
let room_giaitri = [["Trò chơi bàn cờ",0],["Truyền hình cáp",0],["Internet tính phí",0],["Wifi tính phí",0],["Wifi miễn phí",0],["Internet miễn phí",0],["Tivi",0],["Hệ thống âm thanh",0],["Thiết bị chơi điện tử",0],["Dịch vụ truyền hình trực tuyến",0]];
let room_giadinh = [["Bồn tắm trẻ em",0],["Thiết bị giám sát trẻ",0],["Bàn thay tã",0],["Sách và đổ chơi cho trẻ em",0],["Bát đĩa cho trẻ",0],["Cũi em bé",0],["Ghế cao cho trẻ con ngồi ăn",0],["Cũi vải",0],["Cửa chặn cầu thang",0]];
let room_doantoanvasachse = [["Cảm biến báo khí CO",0],["Được làm sạch bởi công ty làm sạch chuyên nghiệp",0],["Sản phẩm làm sạch được sử dụng dựa trên hướng dẫn về y tế",0],["Vật dụng làm vệ sinh được cung cấp cho khách",0],["Nhận phòng/trả phòng không tiếp xúc",0],["Khẩu trang được cung cấp cho khách",0],["Bình chữa cháy",0],["Bộ sơ cấp cứu",0],["Nước rửa tay và xà phòng được cung cấp",0],["Được khử trùng theo nguyên tắc về y tế hoặc của Agoda",0],["Cảm biến báo khói",0]];
let room_khac = [["phòng tập gym",0],["bồn tắm nước nóng",0],["lò sưởi trong nhà",0],["hồ bơi trong nhà",0],["cho phép vật nuôi",0],["hồ bơi ngoài trời",0],["hồ bơi riêng",0],["được hút thuốc",0]];


let checks = document.querySelectorAll('div.check');

function swapState() {
    let state = parseInt(this.dataset.state);
    if (state == 1) {
        this.dataset.state = "0";
        this.children[0].style.display = "none";
        this.children[1].style.display = "inline";
    } else {
        this.dataset.state = "1";
        this.children[0].style.display = "inline";
        this.children[1].style.display = "none";
    }
}
for(let i=0; i<checks.length; ++i)
  checks[i].addEventListener('click', swapState.bind(checks[i]));

function updateState(arr) {
  for (let i = 0; i < this.length; i++) {
    arr[i][1] = parseInt(this[i].dataset.state);
  }
  return arr;
}

document.getElementById('luu').addEventListener('click', function() {
  let tieuchuan = document.querySelectorAll('#tieuchuan .check');
  let loivao = document.querySelectorAll('#loivao .check');
  let bep = document.querySelectorAll('#bep .check');
  let phongtam = document.querySelectorAll('#phongtam .check');
  let ngoaitroi = document.querySelectorAll('#ngoaitroi .check');
  let giaitri = document.querySelectorAll('#giaitri .check');
  let giadinh = document.querySelectorAll('#giadinh .check');
  let doantoanvasachse = document.querySelectorAll('#doantoanvasachse .check');
  let khac = document.querySelectorAll('#khac .check');

  console.log({
    room_tieuchuan: updateState.call(tieuchuan, room_tieuchuan),
    room_loivao: updateState.call(loivao, room_loivao),
    room_bep: updateState.call(bep, room_bep),
    room_phongtam: updateState.call(phongtam, room_phongtam),
    room_ngoaitroi: updateState.call(ngoaitroi, room_ngoaitroi),
    room_giaitri: updateState.call(giaitri, room_giaitri),
    room_giadinh: updateState.call(giadinh, room_giadinh),
    room_doantoanvasachse: updateState.call(doantoanvasachse, room_doantoanvasachse),
    room_khac: updateState.call(khac, room_khac),
  })
})