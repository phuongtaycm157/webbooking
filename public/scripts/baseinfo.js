let quymo = document.getElementById('quymo');
let luu = document.getElementById('luu');
let loaihinh = document.querySelectorAll('div.loaihinh');
let succhua = document.getElementById('succhua');
let phongtam = document.getElementById('phongtam');
let giuong = document.getElementById('giuong');

// khai bao ban dau
let room_loai = [["Toàn bộ căn hộ",0],["Toàn bộ nhà trệt",0],["Toàn bộ nhà riêng",0],["Biệt thự",0]];
let room_quymo = quymo.value;
let room_succhua = succhua.value;
let room_hasphongtam = phongtam.value;
let room_giuong = giuong.value;



luu.addEventListener('click', function() {
  room_loai = room_loai.map((x, i) => {
    x[1] = loaihinh[i].dataset.state;
    return x;
  });
  console.log({
    room_quymo: room_quymo, 
    room_loai: room_loai,
    room_succhua: room_succhua,
    room_hasphongtam: room_hasphongtam,
    room_giuong: room_giuong
  });
})

// Loai hinh script
function activeState(stt, fn) {
  return function() {
    for(let i = 0; i<loaihinh.length; ++i) {
      loaihinh[i].dataset.state = "0";
    }
    loaihinh[stt].dataset.state = "1";
    fn(stt);
  }
}
function renderLoaiHinh(stt) {
  let loaihinh = document.querySelectorAll('div.loaihinh');
  for (let i = 0; i<loaihinh.length; ++i) {
    if(loaihinh[i].dataset.state == "1") {
      loaihinh[i].className = "loaihinh text-center mr-2 py-3 border lh-active";
    } else {
      loaihinh[i].className = "loaihinh text-center mr-2 py-3 border";
    }
  }
  console.log("Render"+stt);
}
for (let i = 0; i<loaihinh.length; ++i) {
  loaihinh[i].addEventListener('click', activeState(i, renderLoaiHinh));
}

// Quy Mo script
quymo.addEventListener('change', function() {
  room_quymo = quymo.value;
})

// Suc chua script
const updateSucChua = function() {
  room_succhua = succhua.value;
};
succhua.addEventListener('change', updateSucChua);
document.getElementById('scMinus').addEventListener('click', function() {
  succhua.value = (parseInt(succhua.value) - 1).toString();
  if (parseInt(succhua.value) <= 0) {
    succhua.value = "0";
  }
  updateSucChua();
})
document.getElementById('scPlus').addEventListener('click', function() {
  succhua.value = (parseInt(succhua.value) + 1).toString();
  updateSucChua();
})

// Phong tam script
const updatePhongtam = function() {
  room_hasphongtam = phongtam.value;
};
phongtam.addEventListener('change', updatePhongtam);
document.getElementById('ptMinus').addEventListener('click', function() {
  phongtam.value = (parseInt(phongtam.value) - 1).toString();
  if (parseInt(phongtam.value) <= 0) {
    phongtam.value = "0";
  }
  updatePhongtam();
})
document.getElementById('ptPlus').addEventListener('click', function() {
  phongtam.value = (parseInt(phongtam.value) + 1).toString();
  updatePhongtam();
})

// Giuong script
const updateGiuong = function() {
  room_giuong = giuong.value;
};
giuong.addEventListener('change', updateGiuong);
document.getElementById('gMinus').addEventListener('click', function() {
  giuong.value = (parseInt(giuong.value) - 1).toString();
  if (parseInt(giuong.value) <= 0) {
    giuong.value = "0";
  }
  updateGiuong();
})
document.getElementById('gPlus').addEventListener('click', function() {
  giuong.value = (parseInt(giuong.value) + 1).toString();
  updateGiuong();
})