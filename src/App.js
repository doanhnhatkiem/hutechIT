import React, { Component } from 'react';
import List from './components/List'
import List_1 from './components/List_1'
import Form from './components/Form'
import Report from './components/Report';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      danhsach_sv: [],
      taikhoan: '',
      matkhau: '',
      sinhviencancapnhat: null,
      batmo: false,
      masinhvientam: '',
      baocao: false,
      doitrang: true,
      dangnhap: false,
      dangnhap1: false,
      trang: 0,
      mssv: '',
      chonlua: true,
      week1: false,
      week2: false,
      week3: false,
      week4: false,
      week5: false,
      week6: false,
      week7: false,
      week8: false,
      week9: false,
      week10: false
    }
  }
  componentWillMount() {
    this.DanhSachSinhVien()
  }
  SinhSoNgauNhien = () => {
    return Math.floor(10 * Math.random()).toString(16)
  }
  MaSoSinhVien = () => {
    return '1411' + this.SinhSoNgauNhien() + this.SinhSoNgauNhien() + this.SinhSoNgauNhien() + this.SinhSoNgauNhien() + this.SinhSoNgauNhien() + this.SinhSoNgauNhien()
  }
  DanhSachSinhVien = () => {
    var danhsachsinhvien = [
      {
        masosinhvien: '1411060123',
        tensinhvien: 'Nguyen Van A',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '1411060345',
        tensinhvien: 'Tran Thi B',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '1411060567',
        tensinhvien: 'Luong Van C',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '1411060789',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      ,
      {
        masosinhvien: '1511060123',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '111060789',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '1511061789',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '1911060789',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '1711160789',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '11111',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '22222',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '33333',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '44444',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '55555',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '66666',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '1212',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '2323',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '1313',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '4545',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '5656',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '4466',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '7878',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '8989',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '7979',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '145145',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '321456',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '789123',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '147852',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '48621397',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '82597',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      },
      {
        masosinhvien: '46985213',
        tensinhvien: 'Vuong Van D',
        lopsinhvien: '14DTHC01',
        sodienthoai: '0901234567',
        email: 'diachiemail@gmail.com.vn',
        congty: 'Fsoft',
        nguoigiamsat: 'anh Trung beo',
        tuan1: '',
        tuan2: '',
        tuan3: '',
        tuan4: '',
        tuan5: '',
        tuan6: '',
        tuan7: '',
        tuan8: '',
        tuan9: '',
        tuan10: ''
      }
    ]
    this.setState({
      danhsach_sv: danhsachsinhvien
    })
  }
  GuiMaSoSinhVien = (sinhvien) => {
    var triso = this.TimTriSoCanCapNhat(sinhvien.masosinhvien)
    var danhsach = this.state.danhsach_sv
    this.state.sinhviencancapnhat = danhsach[triso]
    this.MoForm()
  }
  TimTriSoCanCapNhat = (masosinhvien) => {
    var danhsachsinhvien = this.state.danhsach_sv
    var Triso = ''
    danhsachsinhvien.forEach((sinhvien, triso) => {
      if (sinhvien.masosinhvien === masosinhvien) {
        Triso = triso
      }
    })
    return Triso
  }
  KichHoat = () => {
    var trangthai = this.state.batmo
    this.setState({
      batmo: !trangthai
    })
  }
  MoForm = () => {
    this.setState({
      batmo: true
    })
  }
  MoBaoCao = () => {
    this.setState({
      baocao: true
    })
  }
  Tat = () => {
    this.setState({
      batmo: false
    })
  }
  CapNhatSinhVien = (sinhvien) => {
    var triso = this.TimTriSoCanCapNhat(sinhvien.masosinhvien)
    var danhsach = this.state.danhsach_sv
    var capnhatsinhvien = danhsach[triso]
    capnhatsinhvien.tensinhvien = sinhvien.tensinhvien
    capnhatsinhvien.lopsinhvien = sinhvien.lopsinhvien
    capnhatsinhvien.sodienthoai = sinhvien.sodienthoai
    capnhatsinhvien.email = sinhvien.email
    capnhatsinhvien.congty = sinhvien.congty
    capnhatsinhvien.nguoigiamsat = sinhvien.nguoigiamsat
    this.setState({
      danhsach_sv: danhsach
    })
  }

  MaSinhVienBaoCao = (masinhvien) => {
    this.setState({
      masinhvientam: masinhvien
    })
    this.MoBaoCao()
  }
  CapNhatBaoCao1 = (baocao) => {
    var triso = this.TimTriSoCanCapNhat(this.state.masinhvientam)
    var danhsach = this.state.danhsach_sv
    var sinhvien = danhsach[triso]
    sinhvien.tuan1 = baocao.noidung
    this.setState({
      danhsach_sv: danhsach
    })
  }
  CapNhatBaoCao2 = (baocao) => {
    var triso = this.TimTriSoCanCapNhat(this.state.masinhvientam)
    var danhsach = this.state.danhsach_sv
    var sinhvien = danhsach[triso]
    sinhvien.tuan2 = baocao.noidung
    this.setState({
      danhsach_sv: danhsach
    })
  }
  CapNhatBaoCao3 = (baocao) => {
    var triso = this.TimTriSoCanCapNhat(this.state.masinhvientam)
    var danhsach = this.state.danhsach_sv
    var sinhvien = danhsach[triso]
    sinhvien.tuan3 = baocao.noidung
    this.setState({
      danhsach_sv: danhsach
    })
  }
  CapNhatBaoCao4 = (baocao) => {
    var triso = this.TimTriSoCanCapNhat(this.state.masinhvientam)
    var danhsach = this.state.danhsach_sv
    var sinhvien = danhsach[triso]
    sinhvien.tuan4 = baocao.noidung
    this.setState({
      danhsach_sv: danhsach
    })
  }
  CapNhatBaoCao5 = (baocao) => {
    var triso = this.TimTriSoCanCapNhat(this.state.masinhvientam)
    var danhsach = this.state.danhsach_sv
    var sinhvien = danhsach[triso]
    sinhvien.tuan5 = baocao.noidung
    this.setState({
      danhsach_sv: danhsach
    })
  }
  CapNhatBaoCao6 = (baocao) => {
    var triso = this.TimTriSoCanCapNhat(this.state.masinhvientam)
    var danhsach = this.state.danhsach_sv
    var sinhvien = danhsach[triso]
    sinhvien.tuan6 = baocao.noidung
    this.setState({
      danhsach_sv: danhsach
    })
  }
  CapNhatBaoCao7 = (baocao) => {
    var triso = this.TimTriSoCanCapNhat(this.state.masinhvientam)
    var danhsach = this.state.danhsach_sv
    var sinhvien = danhsach[triso]
    sinhvien.tuan7 = baocao.noidung
    this.setState({
      danhsach_sv: danhsach
    })
  }
  CapNhatBaoCao8 = (baocao) => {
    var triso = this.TimTriSoCanCapNhat(this.state.masinhvientam)
    var danhsach = this.state.danhsach_sv
    var sinhvien = danhsach[triso]
    sinhvien.tuan8 = baocao.noidung
    this.setState({
      danhsach_sv: danhsach
    })
  }
  CapNhatBaoCao9 = (baocao) => {
    var triso = this.TimTriSoCanCapNhat(this.state.masinhvientam)
    var danhsach = this.state.danhsach_sv
    var sinhvien = danhsach[triso]
    sinhvien.tuan9 = baocao.noidung
    this.setState({
      danhsach_sv: danhsach
    })
  }
  CapNhatBaoCao10 = (baocao) => {
    var triso = this.TimTriSoCanCapNhat(this.state.masinhvientam)
    var danhsach = this.state.danhsach_sv
    var sinhvien = danhsach[triso]
    sinhvien.tuan10 = baocao.noidung
    this.setState({
      danhsach_sv: danhsach
    })
  }
  DangNhap = (e) => {
    e.preventDefault()
    var tk = this.state.taikhoan
    var mk = this.state.matkhau
    console.log(tk + ' ' + mk)

    if (tk === "giaovien" && mk === "giaovien") {
      this.setState({
        dangnhap: false,
        trang: 1
      })
    }
    else if (tk === "sinhvien" && mk === "sinhvien") {
      this.setState({
        dangnhap1: false,
        trang: 2
      })
    }
    else {
      this.setState({
        trang: 0
      })
    }
  }
  DangNhap1 = (event) => {
    var target = event.target
    var name = target.name
    var value = target.value
    this.setState({
      [name]: value
    })
  }
  LayDuLieu = (e) => {
    var target = e.target
    var name = target.name
    var value = target.value
    this.setState({
      [name]: value
    })
  }
  TroVe = () => {
    this.setState({
      taikhoan: '',
      matkhau: '',
      chonlua: true,
      dangnhap: false,
      dangnhap1: false,
      baocao: false,
      dangnhap: true,
      trang: 0,
      mssv: ''
    })
  }
  TatBangBaoCao = () => {
    this.setState({
      baocao: false
    })
  }
  Tim = (massv) => {
    this.setState({
      mssv: massv
    })
  }
  GiaoVien = () => {
    this.setState({
      dangnhap: true,
      dangnhap1: false,
      chonlua: false
    })
  }
  SinhVien = () => {
    this.setState({
      dangnhap: false,
      dangnhap1: true,
      chonlua: false
    })
  }
  TroVeLuaChon = () => {
    this.setState({
      chonlua: true,
      taikhoan: '',
      matkhau: '',
      mssv:''
    })
  }
  LocDuLieu = (e) => {
    e.preventDefault()

    this.setState({
      dangnhap1: false,
      chonlua: false,
      trang: 2,
      mssv: this.state.mssv
    })
  }
  BC1 = () => {
    this.setState({
      week1: !this.state.week1
    })
  }
  BC2 = () => {
    this.setState({
      week2: !this.state.week2
    })
  }
  BC3 = () => {
    this.setState({
      week3: !this.state.week3
    })
  }
  BC4 = () => {
    this.setState({
      week4: !this.state.week4
    })
  }
  BC5 = () => {
    this.setState({
      week5: !this.state.week5
    })
  }
  BC6 = () => {
    this.setState({
      week6: !this.state.week6
    })
  }
  BC7 = () => {
    this.setState({
      week7: !this.state.week7
    })
  }
  BC8 = () => {
    this.setState({
      week8: !this.state.week8
    })
  }
  BC9 = () => {
    this.setState({
      week9: !this.state.week9
    })
  }
  BC10 = () => {
    this.setState({
      week10: !this.state.week10
    })
    console.log(this.state.week1)
  }
  render() {
    var ds = this.state.danhsach_sv
    var mssv = this.state.mssv
    if (mssv !== '') {
      console.log('xm:' + mssv)
      ds = ds.filter((sv) => {
        console.log('xm:' + mssv)
        return sv.masosinhvien.toLowerCase().indexOf(mssv) !== -1
      })
    }
    var hienthiform = this.state.batmo ? <Form pCapNhat={this.CapNhatSinhVien} pTat={this.Tat} pSinhVien={this.state.sinhviencancapnhat} /> : ""
    var baocao = this.state.baocao ? <Report
      pweek1={this.state.week1}
      pweek2={this.state.week2}
      pweek3={this.state.week3}
      pweek4={this.state.week4}
      pweek5={this.state.week5}
      pweek6={this.state.week6}
      pweek7={this.state.week7}
      pweek8={this.state.week8}
      pweek9={this.state.week9}
      pweek10={this.state.week10}
      pTatBangBaoCao={this.TatBangBaoCao}
      pCapNhatBaoCao1={this.CapNhatBaoCao1}
      pCapNhatBaoCao2={this.CapNhatBaoCao2}
      pCapNhatBaoCao3={this.CapNhatBaoCao3}
      pCapNhatBaoCao4={this.CapNhatBaoCao4}
      pCapNhatBaoCao5={this.CapNhatBaoCao5}
      pCapNhatBaoCao6={this.CapNhatBaoCao6}
      pCapNhatBaoCao7={this.CapNhatBaoCao7}
      pCapNhatBaoCao8={this.CapNhatBaoCao8}
      pCapNhatBaoCao9={this.CapNhatBaoCao9}
      pCapNhatBaoCao10={this.CapNhatBaoCao10}
      pMaSinhVien={this.state.masinhvientam} /> : ''

    var chonlua = this.state.chonlua ?
      < div className="popup-update" >
        <form className="choose">
          <p className="ptitle">hutech</p>
          <div className="choosebtn">
            <button onClick={this.GiaoVien} className="buttonedit" type="button">
              Giáo viên<i className="icon sm fas fa-chalkboard-teacher"></i>
            </button>
            <button onClick={this.SinhVien} className="buttonreport" type="button">
              Sinh viên<i className="icon sm fas fa-user-graduate"></i>
            </button>
          </div>
          <div className="logo">
            <img src="https://www.hutech.edu.vn/imgnews/homepage/stories/hinh34/logo%20CMYK-01.png"></img>
          </div>
        </form>
      </div > : ""
    var dangnhap = this.state.dangnhap ?
      <div className="popup-update">
        <form onSubmit={this.DangNhap}>
          <p className="ptitle">giáo viên</p>
          <div className="marginbottom">
            <i className="icon fas fa-user"></i>
            <input className="input" placeholder="Nhập tài khoản" name="taikhoan" value={this.state.taikhoan} onChange={this.LayDuLieu} type="text" />
          </div>
          <div className="marginbottom">
            <i className="icon fas fa-lock"></i>
            <input className="input" placeholder="Nhập mật khẩu" name="matkhau" value={this.state.matkhau} onChange={this.LayDuLieu} type="password" />
          </div>
          <div className="buttonwrap marginbottom">
            <button className="buttonedit" type="submit">
              Xác nhận<i className="icon sm fas fa-sign-in-alt"></i>
            </button>
            <button onClick={this.TroVeLuaChon} className="buttonreport" type="button">
              Trở về<i className="icon sm fas fa-undo-alt"></i>
            </button>
          </div>
        </form>
      </div>
      : ""
    var dangnhap1 = this.state.dangnhap1 ?
      <div className="popup-update">
        <form onSubmit={this.LocDuLieu}>
          <p className="ptitle">sinh viên</p>
          <div className="marginbottom">
            <i className="icon fas fa-user-graduate"></i>
            <input className="input" placeholder="Nhập mã số sinh viên" name="mssv" value={this.state.mssv} onChange={this.DangNhap1} type="text" />
          </div>
          <div className="buttonwrap marginbottom">
            <button className="buttonedit" type="submit">
              Xác nhận<i className="icon sm fas fa-sign-in-alt"></i>
            </button>
            <button onClick={this.TroVeLuaChon} className="buttonreport" type="button">
              Trở về<i className="icon sm fas fa-undo-alt"></i>
            </button>
          </div>
        </form>
      </div>
      : ""

    var hienthidanhsach = this.state.trang === 1 ? <List
      pBC1={this.BC1}
      pBC2={this.BC2}
      pBC3={this.BC3}
      pBC4={this.BC4}
      pBC5={this.BC5}
      pBC6={this.BC6}
      pBC7={this.BC7}
      pBC8={this.BC8}
      pBC9={this.BC9}
      pBC10={this.BC10}
      pweek1={this.state.week1}
      pweek2={this.state.week2}
      pweek3={this.state.week3}
      pweek4={this.state.week4}
      pweek5={this.state.week5}
      pweek6={this.state.week6}
      pweek7={this.state.week7}
      pweek8={this.state.week8}
      pweek9={this.state.week9}
      pweek10={this.state.week10}
      pTim={this.Tim} pTroVe={this.TroVe} pMaSinhVienBaoCao={this.MaSinhVienBaoCao} pBaoCao={this.BaoCao} pdanhsachsinhvien={ds} pGuiMaSoSinhVien={this.GuiMaSoSinhVien} /> :
      this.state.trang === 2 ? <List_1 pTroVe={this.TroVe} pMaSinhVienBaoCao={this.MaSinhVienBaoCao} pBaoCao={this.BaoCao} pdanhsachsinhvien={ds} pGuiMaSoSinhVien={this.GuiMaSoSinhVien} /> : ""


    return (
      <div>
        {hienthidanhsach}
        {dangnhap}
        {dangnhap1}
        {hienthiform}
        {chonlua}
        {baocao}
      </div >
    );
  }
}

export default App;
