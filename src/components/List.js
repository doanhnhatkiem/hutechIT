import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            massv: '',
            sl:0,
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
    TroVe = () => {
        this.props.pTroVe()
    }
    ThayDoiDuLieu = (event) => {
        var target = event.target
        var name = target.name
        var value = target.value
        this.setState({
            [name]: value
        })
    }
    Tim = () => {
        this.props.pTim(this.state.massv)
    }
    BC1 = () => {
        this.props.pBC1()
        this.setState({
            week1: !this.state.week1
        })
    }
    BC2 = () => {
        this.props.pBC2()
        this.setState({
            week2: !this.state.week2
        })
    }
    BC3 = () => {
        this.props.pBC3()
        this.setState({
            week3: !this.state.week3
        })
    }
    BC4 = () => {
        this.props.pBC4()
        this.setState({
            week4: !this.state.week4
        })
    }
    BC5 = () => {
        this.props.pBC5()
        this.setState({
            week5: !this.state.week5
        })
    }
    BC6 = () => {
        this.props.pBC6()
        this.setState({
            week6: !this.state.week6
        })
    }
    BC7 = () => {
        this.props.pBC7()
        this.setState({
            week7: !this.state.week7
        })
    }
    BC8 = () => {
        this.props.pBC8()
        this.setState({
            week8: !this.state.week8
        })
    }
    BC9 = () => {
        this.props.pBC9()
        this.setState({
            week9: !this.state.week9
        })
    }
    BC10 = () => {
        this.props.pBC10()
        this.setState({
            week10: !this.state.week10
        })
    }
    render() {
        var danhsach = this.props.pdanhsachsinhvien
        var sl = this.state.sl
        var hienthi = danhsach.map((sinhvien, triso) => {
            sl = sl + 1
            return (
                <Item pMaSinhVienBaoCao={this.props.pMaSinhVienBaoCao} pBaoCao={this.props.pBaoCao} pGuiMaSoSinhVien={this.props.pGuiMaSoSinhVien} key={triso} psinhvien={sinhvien} pstt={triso} />
            )
        })
        var btnrp1 = this.props.pweek1 ? <button className="week active" onClick={this.BC1}>1</button>
            : <button className="week" onClick={this.BC1}>1</button>
        var btnrp2 = this.props.pweek2 ? <button className="week active" onClick={this.BC2}>2</button>
            : <button className="week" onClick={this.BC2}>2</button>
        var btnrp3 = this.props.pweek3 ? <button className="week active" onClick={this.BC3}>3</button>
            : <button className="week" onClick={this.BC3}>3</button>
        var btnrp4 = this.props.pweek4 ? <button className="week active" onClick={this.BC4}>4</button>
            : <button className="week" onClick={this.BC4}>4</button>
        var btnrp5 = this.props.pweek5 ? <button className="week active" onClick={this.BC5}>5</button>
            : <button className="week" onClick={this.BC5}>5</button>
        var btnrp6 = this.props.pweek6 ? <button className="week active" onClick={this.BC6}>6</button>
            : <button className="week" onClick={this.BC6}>6</button>
        var btnrp7 = this.props.pweek7 ? <button className="week active" onClick={this.BC7}>7</button>
            : <button className="week" onClick={this.BC7}>7</button>
        var btnrp8 = this.props.pweek8 ? <button className="week active" onClick={this.BC8}>8</button>
            : <button className="week" onClick={this.BC8}>8</button>
        var btnrp9 = this.props.pweek9 ? <button className="week active" onClick={this.BC9}>9</button>
            : <button className="week" onClick={this.BC9}>9</button>
        var btnrp10 = this.props.pweek10 ? <button className="week active" onClick={this.BC10}>10</button>
            : <button className="week" onClick={this.BC10}>10</button>

        return (
            <div>
                <button className="buttonreport giaovien" type="button" onClick={this.TroVe}><i className="icon sm fas fa-arrow-circle-left"></i> Trở về</button>
                <h1 className="ds">Danh sách sinh viên</h1>
                <div>
                    <div className="marginbottom">
                        <input name="massv" className="input sm" value={this.state.massv} onChange={this.ThayDoiDuLieu} placeholder="Nhập mã số cần tìm" type="t" />
                        <button onClick={this.Tim} className="search">
                            <i className="icon sm2 fas fa-search"></i>
                        </button>
                    </div>
                    <h2 className="ml1 cltxt">Số lượng sinh viên: <span>{sl}</span></h2>
                    <h1 className="ml1 cltxt">Báo cáo tuần: </h1>
                    <div className="flex ml1">
                        {btnrp1}
                        {btnrp2}
                        {btnrp3}
                        {btnrp4}
                        {btnrp5}
                        {btnrp6}
                        {btnrp7}
                        {btnrp8}
                        {btnrp9}
                        {btnrp10}
                    </div>
                    {hienthi}
                </div>
            </div>
        );
    }
}

export default List;
