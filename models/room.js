const con = require('../DB');

class Room {
  constructor() {
    this.room_id = 0;
    this.room_tenphong = ' ';
    this.room_loai = '[["Toàn bộ căn hộ",0],["Toàn bộ nhà trệt",0],["Toàn bộ nhà riêng",0],["Biệt thự",0]]';
    this.room_quymo = 0;
    this.room_succhua = 1;
    this.room_hasphongtam = 1;
    this.room_giuong = 1;
    this.room_tieuchuan = '[["Máy điều hòa",0],["Bàn",0],["Tủ áo",0],["Máy sấy",0],["Quạt",0],["Máy sưởi",0],["Bàn ủi",0],["Bộ ga giường",0],["Tiệm giặt gần",0],["Máy giặt",0]]';
    this.room_loivao = '[["Chuông",0],["Nhân viên trực cửa",0],["Thanh máy",0],["Chìa khóa thông minh",0],["Đậu xe miễn phí",0],["Bãi đổ xe trả phí",0],["Lối vào riêng",0],["Xe lăn vào được",0]]';
    this.room_bep = '[["máy pha cà phê",0],["Cà phê",0],["Ăn sáng miễn phí",0],["Bát đĩa và dụng cụ ăn uống",0],["Máy rửa bát",0],["Đồ dùng nhà bếp",0],["Tủ đông",0],["Nhà bếp",0],["Lò vi sóng",0],["Lò nướng",0],["Tủ lạnh",0],["Bếp",0],["Trà",0]]';
    this.room_phongtam = '[["Máy sấy tóc",0],["Dầu gội",0],["Khăn các loại",0],["Sữa tắm",0],["Bồn tắm",0]]';
    this.room_ngoaitroi = '[["Ban công",0],["Bếp nướng",0],["Xe đạp",0],["Khu đối diện bãi biển",0],["Vườn hoặc sân sau",0],["Lối vào hồ",0],["Trượt tuyết",0],["Khu bờ sông",0]]';
    this.room_giaitri = '[["Trò chơi bàn cờ",0],["Truyền hình cáp",0],["Internet tính phí",0],["Wifi tính phí",0],["Wifi miễn phí",0],["Internet miễn phí",0],["Tivi",0],["Hệ thống âm thanh",0],["Thiết bị chơi điện tử",0],["Dịch vụ truyền hình trực tuyến",0]]';
    this.room_giadinh = '[["Bồn tắm trẻ em",0],["Thiết bị giám sát trẻ",0],["Bàn thay tã",0],["Sách và đổ chơi cho trẻ em",0],["Bát đĩa cho trẻ",0],["Cũi em bé",0],["Ghế cao cho trẻ con ngồi ăn",0],["Cũi vải",0],["Cửa chặn cầu thang",0]]';
    this.room_doantoanvasachse = '[["Cảm biến báo khí CO",0],["Được làm sạch bởi công ty làm sạch chuyên nghiệp",0],["Sản phẩm làm sạch được sử dụng dựa trên hướng dẫn về y tế",0],["Vật dụng làm vệ sinh được cung cấp cho khách",0],["Nhận phòng/trả phòng không tiếp xúc",0],["Khẩu trang được cung cấp cho khách",0],["Bình chữa cháy",0],["Bộ sơ cấp cứu",0],["Nước rửa tay và xà phòng được cung cấp",0],["Được khử trùng theo nguyên tắc về y tế hoặc của Agoda",0],["Cảm biến báo khói",0]]';
    this.room_khac = '[["phòng tập gym",0],["bồn tắm nước nóng",0],["lò sưởi trong nhà",0],["hồ bơi trong nhà",0],["cho phép vật nuôi",0],["hồ bơi ngoài trời",0],["hồ bơi riêng",0],["được hút thuốc",0]]';
    this.room_anh = '[]';
    this.hotel_id = 1;
  }
  // Một số phương thức Static
  static parseToArray(json) {
    const jsonParsed = JSON.parse(json);
    return jsonParsed.map(x=>x[1]);
  }
  // Room Id
  set roomId (id = 0) {
    this.room_id = id;
  }
  get roomId() {
    return this.room_id;
  }
  // Tên phòng
  set tenPhong(name) {
    if (typeof name === 'string') {
        this.room_tenphong = name;
    }
  }
  get tenPhong() {
    return this.room_tenphong;
  }
  // Loại phòng
  set loaiPhong(arr = [0, 0, 0, 0]) {
    let loaiPhong = JSON.parse(this.room_loai);
    for (let i = 0; i < arr.length; i++) {
        loaiPhong[i][1] = arr[i];
    }
    this.room_loai = JSON.stringify(loaiPhong);
  }
  get loaiPhong() {
    let loaiPhong = JSON.parse(this.room_loai);
    loaiPhong = loaiPhong.map(x => x[1]);
    return loaiPhong;
  }
  // Quy mô khác sạn được bao nhiêu mét vuông
  set quyMo(inter) {
    this.room_quymo = parseInt(inter);
  }
  get quyMo() {
    return this.room_quymo;
  }
  // Chứa được bao nhiêu người
  set sucChua(inter) {
    this.room_succhua = parseInt(inter);
  }
  get sucChua() {
    return this.room_succhua;
  }
  // Có bao nhiêu phòng tắm
  set hasPhongTam(inter) {
    this.room_hasphongtam = parseInt(inter);
  }
  get hasPhongTam() {
    return this.room_hasphongtam;
  }
  // Số lượng Giường
  set giuong(inter) {
    this.room_giuong = parseInt(inter);
  }
  get giuong() {
    return this.room_giuong;
  }
  // Tiêu chuẩn
  set tieuChuan(arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) {
    let tieuChuan = JSON.parse(this.room_tieuchuan);
    for (let i = 0; i < arr.length; i++) {
        tieuChuan[i][1] = arr[i];
    }
    this.room_tieuchuan = JSON.stringify(tieuChuan);
  }
  get tieuChuan() {
    let tieuChuan = JSON.parse(this.room_tieuchuan);
    tieuChuan = tieuChuan.map(x => x[1]);
    return tieuChuan;
  }
  // Lối vào
  set loiVao(arr = [0, 0, 0, 0, 0, 0, 0, 0]) {
    let loiVao = JSON.parse(this.room_loivao);
    for (let i = 0; i < arr.length; i++) {
        loiVao[i][1] = arr[i];
    }
    this.room_loivao = JSON.stringify(loiVao);
  }
  get loiVao() {
    let loiVao = JSON.parse(this.room_loivao);
    loiVao = loiVao.map(x => x[1]);
    return loiVao;
  }
  // Tiện nghi của bếp
  set bep(arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) {
    let bep = JSON.parse(this.room_bep);
    for (let i = 0; i < arr.length; i++) {
        bep[i][1] = arr[i];
    }
    this.room_bep = JSON.stringify(bep);
  }
  get bep() {
    let bep = JSON.parse(this.room_bep);
    bep = bep.map(x => x[1]);
    return bep;
  }
  // Tiện nghi phòng tắm
  set phongTam(arr = [0, 0, 0, 0, 0]) {
    let phongTam = JSON.parse(this.room_phongtam);
    for (let i = 0; i < arr.length; i++) {
        phongTam[i][1] = arr[i];
    }
    this.room_phongtam = JSON.stringify(phongTam);
  }
  get phongTam() {
    let phongTam = JSON.parse(this.room_phongtam);
    phongTam = phongTam.map(x => x[1]);
    return phongTam;
  }
  // Ngoài trời
  set ngoaiTroi(arr = [0, 0, 0, 0, 0, 0, 0, 0]) {
    let ngoaiTroi = JSON.parse(this.room_ngoaitroi);
    for (let i = 0; i < arr.length; i++) {
        ngoaiTroi[i][1] = arr[i];
    }
    this.room_ngoaitroi = JSON.stringify(ngoaiTroi);
  }
  get ngoaiTroi() {
    let ngoaiTroi = JSON.parse(this.room_ngoaitroi);
    ngoaiTroi = ngoaiTroi.map(x => x[1]);
    return ngoaiTroi;
  }
  // Giải trí
  set giaiTri(arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) {
    let giaiTri = JSON.parse(this.room_giaitri);
    for (let i = 0; i < arr.length; i++) {
        giaiTri[i][1] = arr[i];
    }
    this.room_giaitri = JSON.stringify(giaiTri);
  }
  get giaiTri() {
    let giaiTri = JSON.parse(this.room_giaitri);
    giaiTri = giaiTri.map(x => x[1]);
    return giaiTri;
  }
  // Gia đình
  set giaDinh(arr = [0, 0, 0, 0, 0, 0, 0, 0, 0]) {
    let giaDinh = JSON.parse(this.room_giadinh);
    for (let i = 0; i < arr.length; i++) {
        giaDinh[i][1] = arr[i];
    }
    this.room_giadinh = JSON.stringify(giaDinh);
  }
  get giaDinh() {
    let giaDinh = JSON.parse(this.room_giadinh);
    giaDinh = giaDinh.map(x => x[1]);
    return giaDinh;
  }
  // Độ an toàn và sạch sẻ
  set doAnToanVaSachSe(arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) {
    let doAnToanVaSachSe = JSON.parse(this.room_doantoanvasachse);
    for (let i = 0; i < arr.length; i++) {
        doAnToanVaSachSe[i][1] = arr[i];
    }
    this.room_doantoanvasachse = JSON.stringify(doAnToanVaSachSe);
  }
  get doAnToanVaSachSe() {
    let doAnToanVaSachSe = JSON.parse(this.room_doantoanvasachse);
    doAnToanVaSachSe = doAnToanVaSachSe.map(x => x[1]);
    return doAnToanVaSachSe;
  }
  // Những tiện ích khác
  set khac(arr = [0, 0, 0, 0, 0, 0, 0, 0]) {
    let khac = JSON.parse(this.room_khac);
    for (let i = 0; i < arr.length; i++) {
        khac[i][1] = arr[i];
    }
    this.room_khac = JSON.stringify(khac);
  }
  get khac() {
    let khac = JSON.parse(this.room_khac);
    khac = khac.map(x => x[1]);
    return khac;
  }
  // List link ảnh
  set anh(link) {
    let anh = JSON.parse(this.room_anh);
    anh.push(link);
    this.room_anh = JSON.stringify(anh);
  }
  get anh() {
    return JSON.parse(this.room_anh);
  }
  // Mã khác sạn
  set hotelId(id) {
    this.hotel_id = parseInt(id);
  }
  get hotelId() {
    return this.hotel_id;
  }

  // Khởi tạo dữ liệu trên database.
  createRecord() {
    const sql = `INSERT INTO room SET ?`;
    const values = {
        room_tenphong: this.room_tenphong,
        room_loai: this.room_loai,
        room_quymo: this.room_quymo,
        room_succhua: this.room_succhua,
        room_hasphongtam: this.room_hasphongtam,
        room_giuong: this.room_giuong,
        room_tieuchuan: this.room_tieuchuan,
        room_loivao: this.room_loivao,
        room_bep: this.room_bep,
        room_phongtam: this.room_phongtam,
        room_ngoaitroi: this.room_ngoaitroi,
        room_giaitri: this.room_giaitri,
        room_giadinh: this.room_giadinh,
        room_doantoanvasachse: this.room_doantoanvasachse,
        room_khac: this.room_khac,
        room_anh: this.room_anh,
        hotel_id: this.hotel_id,
    }
    con.query(sql, values, (err, result, flieds) => {
        if (err) throw err;
        this.roomId = result.insertId;
        console.log('id of room inserted: ' + this.roomId);
    })
  }
  
  // Xóa record khỏi database.
  deleteRecord() {
    const sql = `DELETE FROM room WHERE room_id = ${this.roomId}`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
  }

  // Cập nhận dữ liệu từ một record trong database.
  pullRecord(roomId) {
    const sql = `SELECT * FROM room WHERE room_id = ${roomId}`;
    con.query(sql, (err, result, flieds) => {
        if (err) throw err;
        this.room_id = roomId;
        this.room_tenphong = result[0].room_tenphong;
        this.room_loai = result[0].room_loai;
        this.room_quymo = result[0].room_quymo;
        this.room_succhua = result[0].room_succhua;
        this.room_hasphongtam = result[0].room_hasphongtam;
        this.room_giuong = result[0].room_giuong;
        this.room_tieuchuan = result[0].room_tieuchuan;
        this.room_loivao = result[0].room_loivao;
        this.room_bep = result[0].room_bep;
        this.room_phongtam = result[0].room_phongtam;
        this.room_ngoaitroi = result[0].room_ngoaitroi;
        this.room_giaitri = result[0].room_giaitri;
        this.room_giadinh = result[0].room_giadinh;
        this.room_doantoanvasachse = result[0].room_doantoanvasachse;
        this.room_khac = result[0].room_khac;
        this.room_anh = result[0].room_anh;
        this.hotel_id = result[0].hotel_id;
    }) 
  }

  commitRecord() {
    const sql = `UPDATE room SET ? WHERE room_id = ?`;
    const values = {
        room_tenphong: this.room_tenphong,
        room_loai: this.room_loai,
        room_quymo: this.room_quymo,
        room_succhua: this.room_succhua,
        room_hasphongtam: this.room_hasphongtam,
        room_giuong: this.room_giuong,
        room_tieuchuan: this.room_tieuchuan,
        room_loivao: this.room_loivao,
        room_bep: this.room_bep,
        room_phongtam: this.room_phongtam,
        room_ngoaitroi: this.room_ngoaitroi,
        room_giaitri: this.room_giaitri,
        room_giadinh: this.room_giadinh,
        room_doantoanvasachse: this.room_doantoanvasachse,
        room_khac: this.room_khac,
        room_anh: this.room_anh,
        hotel_id: this.hotel_id,
    }
    con.query(sql, [values, this.roomId], function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
  }
}


const room1 = new Room();
// room1.createRecord();
room1.pullRecord(5);
setTimeout(() => {
    // room1.quyMo = 20;
    // room1.sucChua = 3;
    // room1.commitRecord();
    room1.deleteRecord();
}, 1000);

// setTimeout(room1.deleteRecord.bind(room1), 1000);
// room1.deleteRecord();