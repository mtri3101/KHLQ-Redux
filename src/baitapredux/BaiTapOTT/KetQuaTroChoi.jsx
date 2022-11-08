import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {
  render() {
    return (
      <div>
            <div className="display-4 text-warning mb-3">
                {this.props.ketQua}
            </div>
            <div className="display-4 text-success">
                Số bàn thắng: <span>{this.props.soBanThang}</span>
            </div>
            <div className="display-4 text-primary">
                Tổng số bàn chơi: <span>{this.props.soBanChoi}</span>
            </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        ketQua: state.BaiTapOTTReducer.ketQua,
        soBanThang: state.BaiTapOTTReducer.soBanThang,
        soBanChoi: state.BaiTapOTTReducer.soBanChoi
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi)