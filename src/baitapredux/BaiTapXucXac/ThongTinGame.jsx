import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThongTinGame extends Component {



    render() {
        return (
            <div>
                <div className='display-4'>BẠN CHỌN: <span className='text-danger'>{this.props.taiXiu ? 'TÀI' : 'XỈU'}</span></div>
                <div className='display-4'>BÀN THẮNG: <span className='text-success'>{this.props.soBanThang}</span></div>
                <div className='display-4'>TỔNG SỐ BÀN CHƠI: <span className='text-warning'>{this.props.soBanChoi}</span></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        soBanThang: state.BaiTapXucXacReducer.soBanThang,
        soBanChoi: state.BaiTapXucXacReducer.soBanChoi,
        taiXiu: state.BaiTapXucXacReducer.taiXiu
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinGame)
