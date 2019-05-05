import React, { Component } from 'react';

class Item extends Component {
    GuiMaSoSinhVien = () => {
        this.props.pGuiMaSoSinhVien(this.props.psinhvien)
    }
    BaoCao=()=>{
        this.props.pMaSinhVienBaoCao(this.props.psinhvien.masosinhvien)
    }
    render() {
        var stt = this.props.pstt + 1
        var sinhvien = this.props.psinhvien
        return (
            <tr>
                <td>{stt}</td>
                <td>{sinhvien.masosinhvien}</td>
                <td>{sinhvien.tensinhvien}</td>
                <td>{sinhvien.lopsinhvien}</td>
                <td>{sinhvien.sodienthoai}</td>
                <td>{sinhvien.email}</td>
                <td>{sinhvien.congty}</td>
                <td>{sinhvien.nguoigiamsat}</td>
                <td>
                    <button className="buttonedit margin-y" type="button" onClick={this.GuiMaSoSinhVien}><i className="icon sm fas fa-edit"></i> cập nhật</button>
                    <button className="buttonreport" type="button" onClick={this.BaoCao}><i className="icon sm fas fa-file-signature"></i> báo cáo</button>
                </td>
            </tr>
        );
    }
}

export default Item;
