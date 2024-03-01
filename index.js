//định nghĩa sự  kiện click cho nút xác nhận
var xuLiXacNhan = function () {

    // lay thong nhap vao tu input
    var maSinhVien = document.querySelector('#maSinhVien').value;
    var tenSinhVien = document.querySelector('#tenSinhVien').value;
    var loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    var diemToan = document.querySelector('#diemToan').value;
    var diemLy = document.querySelector('#diemLy').value;
    var diemHoa = document.querySelector('#diemHoa').value;
    var diemRenLuyen=document.querySelector('#diemRenLuyen').value;
    var diemTrungBinh = tinhDiemTrungBinh(diemToan, diemLy, diemHoa);
    var xepLoaiSinhVien=xeploai(diemTrungBinh,diemRenLuyen);
    // console.log('diemTrungBinh :',diemTrungBinh);
    document.querySelector('#txtTenSinhVien').innerHTML=tenSinhVien;
    document.querySelector('#txtMaSinhVien').innerHTML=maSinhVien;
    document.querySelector('#txtLoaiSinhVien').innerHTML=loaiSinhVien;
    document.querySelector('#txtDiemTrungBinh').innerHTML=diemTrungBinh.toFixed(2) ;
    document.querySelector('#txtXepLoai').innerHTML=xepLoaiSinhVien;
    

}
// ham tinh diem trung binh
var tinhDiemTrungBinh = function (diemToan, diemLy, diemHoa) {
    var dtb = (Number(diemToan) + Number(diemLy) + Number(diemHoa)  )/3;
    return dtb;

}
//xep loai
var xeploai = function (diemTrungBinh, diemRenLuyen) {
    if (diemRenLuyen < 5) {
        return 'Yeu';
    } else {
        if (diemTrungBinh < 5) {
            return 'Yeu';
        }
        else if (diemTrungBinh >= 5 && diemTrungBinh < 6.5) {
            return 'Trung Binh';
        }
        else if (diemTrungBinh >= 6.5 && diemTrungBinh < 8) {
            return 'Kha';

        }
        else if (diemTrungBinh >= 8 && diemTrungBinh < 9) {
            return 'Gioi';
        }
        else if (diemTrungBinh >= 9 && diemTrungBinh <= 10) {
            return 'Xuat sac';
        }
        else {
            return 'Khong Hop Le';
        }

    }
}


document.querySelector('#btnXacNhan').onclick = xuLiXacNhan;