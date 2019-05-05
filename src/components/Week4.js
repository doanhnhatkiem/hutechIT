import React, { Component } from 'react';

class Week4 extends Component {
    constructor(props){
        super(props)
        this.state={
            noidung:''
        }
    }
    GuiDuLieu = (event) => {
        event.preventDefault()
        this.props.pBaoCao4(this.state)
        this.Tat()
    }
    DoiDuLieu=(event)=>{
        var target = event.target
        var name = target.name
        var value = target.value
        this.setState({
            [name]:value
        })
    }
    Tat = () => {
        this.props.pTat4()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.GuiDuLieu}>
                    <div className="marginbottom">
                    <label className="weektext">Nội dung báo cáo 4:</label><br />
                        <textarea className="textarea" name="noidung" value={this.state.noidung} onChange={this.DoiDuLieu}></textarea>
                    </div>
                    <div className="marginbottom buttonwrap-1">
                        <button className="buttonedit" type="submit">Lưu lại <i className="icon sm fas fa-save"></i></button>
                        <button className="buttonreport" type="button" onClick={this.Tat}>Hủy bỏ <i className="icon sm fas fa-sync-alt"></i></button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Week4;
