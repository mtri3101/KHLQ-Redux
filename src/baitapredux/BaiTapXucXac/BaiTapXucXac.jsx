import React, { Component } from 'react'
import '../BaiTapXucXac/BaiTapXucXac.css'
import ThongTinGame from './ThongTinGame'
import XucXac from './XucXac'
import { connect } from 'react-redux'

class BaiTapXucXac extends Component {
    render() {
        return (
            <div className='container-fluid game'>
                <h2 className='text-center mt-5 display-4'>Bài tập game xúc xắc</h2>
                <div className="row text-center mt-5">
                    <div className="col-5">
                        <button className='btnGame' onClick={() => {
                            this.props.datCuoc(true)
                        }}>TÀI</button>
                    </div>
                    <div className="col-2">
                        <XucXac />

                    </div>
                    <div className="col-5">
                        <button className='btnGame' onClick={() => {
                            this.props.datCuoc(false)
                        }}>XỈU</button>
                    </div>
                </div>
                <div className='thongTinGame text-center mt-2'>
                    <ThongTinGame />
                    <button className='btn btn-danger mt-5 p-4' onClick={()=>{
                        this.props.playGame()
                    }}>PLAY GAME</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
    return {
        //Tạo ra action taiXiu
        datCuoc: (taiXiu) => {
            const action = {
                type: 'DAT_CUOC',
                payload: taiXiu
            }
            //Gửi lên reducer
            dispatch(action)
        },
        playGame: () =>{
            const action ={
                type: 'PLAY_GAME',
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapXucXac)
