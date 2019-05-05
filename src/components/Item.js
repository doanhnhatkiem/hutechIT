import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            xembaocao: false,
            bangbaocao: false
        }
    }
    GuiMaSoSinhVien = () => {
        this.props.pGuiMaSoSinhVien(this.props.psinhvien)
    }
    BaoCao = () => {
        this.props.pMaSinhVienBaoCao(this.props.psinhvien.masosinhvien)
    }
    XemBaoCao = () => {
        this.setState({
            xembaocao: true
        })
    }
    TatBaoCao = () => {
        this.setState({
            xembaocao: false
        })
    }
    MoBangBaoCao = () => {
        this.setState({
            bangbaocao: !this.state.bangbaocao
        })
    }
    render() {
        var stt = this.props.pstt + 1
        var sinhvien = this.props.psinhvien
        var bangbaocao = this.state.bangbaocao ? <div>
            <table className="table" cellSpacing="0">
                <thead className="thead">
                    <tr className="tr">
                        <th className="th">Tuan 1</th>
                        <th className="th">Tuan 2</th>
                        <th className="th">Tuan 3</th>
                        <th className="th">Tuan 4</th>
                        <th className="th">Tuan 5</th>
                        <th className="th">Tuan 6</th>
                        <th className="th">Tuan 7</th>
                        <th className="th">Tuan 8</th>
                        <th className="th">Tuan 9</th>
                        <th className="th">Tuan 10</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    <tr className="tr">
                        <td className="td">{sinhvien.tuan1}</td>
                        <td className="td">{sinhvien.tuan2}</td>
                        <td className="td">{sinhvien.tuan3}</td>
                        <td className="td">{sinhvien.tuan4}</td>
                        <td className="td">{sinhvien.tuan5}</td>
                        <td className="td">{sinhvien.tuan6}</td>
                        <td className="td">{sinhvien.tuan7}</td>
                        <td className="td">{sinhvien.tuan8}</td>
                        <td className="td">{sinhvien.tuan9}</td>
                        <td className="td">{sinhvien.tuan10}</td>
                    </tr>
                </tbody>
            </table>
        </div> : ""
        return (
            <div className="margin-top-20px contentwrap">
                <div className="p">
                    <table className="table" cellSpacing="0">
                        <thead className="thead">
                            <tr className="tr">
                                <th className="th">Mã số sinh viên</th>
                                <th className="th">Họ và tên</th>
                                <th className="th">Lớp</th>
                                <th className="th">Số điện thoại</th>
                                <th className="th">Thư điện tử</th>
                                <th className="th">Tên công ty</th>
                                <th className="th">Người chịu trách nhiệm</th>
                            </tr>
                        </thead>
                        <tbody className="tbody">
                            <tr className="tr">
                                <td className="td">{sinhvien.masosinhvien}</td>
                                <td className="td">{sinhvien.tensinhvien}</td>
                                <td className="td">{sinhvien.lopsinhvien}</td>
                                <td className="td">{sinhvien.sodienthoai}</td>
                                <td className="td">{sinhvien.email}</td>
                                <td className="td">{sinhvien.congty}</td>
                                <td className="td">{sinhvien.nguoigiamsat}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={this.MoBangBaoCao} className="buttonreport margin-top-8px"><i className="icon sm fas fa-vote-yea"></i> Xem báo cáo</button>
                    {bangbaocao}
                </div>

            </div>
        );
    }
}

export default Item;
