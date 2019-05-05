import React, { Component } from 'react';
import Item_1 from './Item_1';

class List extends Component {
    TroVe = () => {
        this.props.pTroVe()
    }
    render() {
        var danhsach = this.props.pdanhsachsinhvien
        var hienthi = danhsach.map((sinhvien, triso) => {
            return (
                <Item_1 pMaSinhVienBaoCao={this.props.pMaSinhVienBaoCao} pBaoCao={this.props.pBaoCao} pGuiMaSoSinhVien={this.props.pGuiMaSoSinhVien} key={triso} psinhvien={sinhvien} pstt={triso} />
            )
        })
        return (
            <div>
                <button className="buttonreport margin-chung" type="button" onClick={this.TroVe}><i className="icon sm fas fa-arrow-circle-left"></i> Trở về</button>
                <h1 className="ds">Thông tin sinh viên</h1>
                <div className="table-warp">
                    <table cellSpacing="0">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>MSSV</th>
                                <th>Tên sinh viên</th>
                                <th>Lớp học</th>
                                <th>Số điện thoại</th>
                                <th>Thư điện tử</th>
                                <th>Công ty</th>
                                <th>Người chịu trách nhiệm</th>
                                <th>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hienthi}
                        </tbody>
                    </table>
                </div >
            </div>

        );
    }
}

export default List;
