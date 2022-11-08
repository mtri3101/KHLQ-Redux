import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
    render() {

        let keyframe = `@keyframes randomItem${Date.now()}{
            0% {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top:100px;}
            100%{top:0;}
        }`

        return (
            <div className='playerGame'>
                <style>
                    {keyframe}
                </style>
                <div className='think' style={{ position: 'relative' }}>
                    <img style={{ transform: 'rotate(120deg)', position: 'absolute', left: '30%', animation: `randomItem${Date.now()} 0.5s ` }} className='mt-4' width={100} height={100} src={this.props.computer.hinhAnh} alt={this.props.computer.hinhAnh} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 250, height: 250 }} src="./img/BaiTapOTT/playerComputer.png" alt="computer" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computer: state.BaiTapOTTReducer.computer
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Computer)