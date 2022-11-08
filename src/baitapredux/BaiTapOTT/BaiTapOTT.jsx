import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../BaiTapOTT/BaiTapOTT.css'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'


class BaiTapOTT extends Component {



    render() {
        return (
            <div className='gameOTT'>
                <div className="row text-center mt-5">
                    <div className="col-4">
                        <Player />
                    </div>
                    <div className="col-4">
                        <KetQuaTroChoi />
                        <button className='btn btn-danger mt-5 p-3 fs-4' onClick={() => {
                            this.props.playGame()
                        }}>Play game</button>
                    </div>
                    <div className="col-4">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {

            let count = 0;

            //Khai báo hàm lặp đi lặp lại
            let randomComputerItem = setInterval(() => {
                dispatch({
                    type: 'RANDOM_COMP'
                })
                count++;
                if (count > 10) {
                    //Dừng hàm setInterval
                    clearInterval(randomComputerItem)
                    dispatch({
                        type:'END_GAME',
                        
                    })
                }
            }, 100)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapOTT)