import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    taiXiu: true, //false: xỉu (3-11), true = tài 
    mangXucXac: [
        { ma: 1, hinhAnh: '/img/BaiTapXucXac/1.png' },
        { ma: 1, hinhAnh: '/img/BaiTapXucXac/1.png' },
        { ma: 1, hinhAnh: '/img/BaiTapXucXac/1.png' }
    ],
    soBanThang: 0,
    soBanChoi: 0
}

export default (state = initialState, { type, payload }) => {
    let stateTaiXiu = state.taiXiu
    let stateMangXucXac = state.mangXucXac
    let stateSoBanChoi = state.soBanChoi
    let stateSoBanThang = state.soBanThang
    switch (type) {

        case 'DAT_CUOC': {
            stateTaiXiu = payload
            return { ...state, taiXiu: stateTaiXiu }
        }

        case 'PLAY_GAME': {
            //B1 Xử lý random xúc xắc
            let mangXucXacRandom = [];
            for (let i = 0; i < 3; i++) {
                //Mỗi lần lặp random từ 1 đến 6
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                //Tạo ra xúc xắc từ số ngẫu nhiên
                let xucXacNgauNhien = { ma: soNgauNhien, hinhAnh: `/img/BaiTapXucXac/${soNgauNhien}.png` };
                //Push vào mảng xucXacRandom
                mangXucXacRandom.push(xucXacNgauNhien)
            }
            //Gán state mangXucXac = mangXucXacRandom
            stateMangXucXac = mangXucXacRandom;
            stateSoBanChoi++
            //Xử lý số bàn thắng
            let tongSoDiem = mangXucXacRandom.reduce((tongDiem, xucXac, index) => {
                return tongDiem += xucXac.ma;
            }, 0)
            if ((tongSoDiem > 11 && stateTaiXiu === true) || (tongSoDiem <= 11 && stateTaiXiu === false)) {
                stateSoBanThang ++
            }

            //Cập nhật state
            return { ...state, mangXucXac: stateMangXucXac, soBanChoi: stateSoBanChoi, soBanThang:stateSoBanThang }
        }

        default:
            return { ...state }
    }
}

