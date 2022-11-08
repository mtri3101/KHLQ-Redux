import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
    render() {
        return (
            <div className='playerGame'>
                <div className='think'>
                    <img className='mt-4' width={100} height={100} src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} alt={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} style={{ transform: 'rotate(120deg)' }} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./img/BaiTapOTT/player.png" alt="player" />
                <div className="row">
                    {this.props.mangDatCuoc.map((item, index) => {

                        //Xét giá trị đặt cược thêm viền cho item được chọn 
                        let border = {};
                        if (item.datCuoc) {
                            border = { border: '3px solid orange' }
                        }


                        return <div className="col-4" key={index}>
                            <button style={border} className='btnItem' onClick={() => {
                                this.props.datCuoc(item.ma);
                            }} >
                                <img width={50} height={50} src={item.hinhAnh} alt={`${item.ma}`} />
                            </button>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangDatCuoc: state.BaiTapOTTReducer.mangDatCuoc
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                payload: maCuoc
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)