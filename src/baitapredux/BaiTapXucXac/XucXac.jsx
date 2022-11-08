import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {
    //Lấy state từ redux về, nếu có nhiều component thì lấy tại component đó

    renderXucXac= () =>{
        //Lấy props từ reducers về
        return this.props.mangXucXac.map((xucXac,index)=>{
            return <img key={index} src={xucXac.hinhAnh} alt="..." style={{ width: 35, height: 35 }}  className='mx-1'/>
        })
    }



    render() {
        return (
           <div>
                {this.renderXucXac()}
           </div>
        )
    }
}

//Hàm lấy state từ redux => thành props của component
const mapStateToProps = (state) => {
    return{
        mangXucXac: state.BaiTapXucXacReducer.mangXucXac
    }
};

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(XucXac)