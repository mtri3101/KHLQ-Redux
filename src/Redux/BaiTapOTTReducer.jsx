const initialState = {
    mangDatCuoc: [
        { ma: 'bua', hinhAnh: './img/BaiTapOTT/bua.png', datCuoc: true },
        { ma: 'keo', hinhAnh: './img/BaiTapOTT/keo.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/BaiTapOTT/bao.png', datCuoc: false }
    ],
    ketQua: "i'm iron man, i love you 3000 !!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'bua', hinhAnh: './img/BaiTapOTT/bua.png' },
}

export default (state = initialState, { type, payload }) => {
    let stateMangDatCuoc = [...state.mangDatCuoc];
    let stateComputer = { ...state.computer };
    let stateKetQua = state.ketQua;
    let stateSoBanChoi = state.soBanChoi;
    let stateSoBanThang = state.soBanThang
    switch (type) {

        case 'CHON_KEO_BUA_BAO': {
            stateMangDatCuoc = stateMangDatCuoc.map((item, index) => {
                //Nếu có mã bằng với payload thì set true, còn lại đều là false
                if (item.ma === payload) {
                    return { ...item, datCuoc: true }
                }
                // Trả về toàn bộ mảng, set lại datCuoc bằng false
                return { ...item, datCuoc: false }
            })
            return { ...state, mangDatCuoc: stateMangDatCuoc }
        };
        case 'RANDOM_COMP': {
            let randomNumb = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = stateMangDatCuoc[randomNumb];

            stateComputer = quanCuocNgauNhien;

            return { ...state, computer: stateComputer }
        };
        case 'END_GAME': {
            stateSoBanChoi ++;
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer
            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        stateKetQua = 'hòa nhau !!!'
                    } else if (computer.ma === 'bua') {
                        stateKetQua = 'thua sml !!!'
                    } else {
                        stateKetQua = "i'm iron man, i love you 3000 !!!"
                        stateSoBanThang ++
                    }
                    break;
                case 'bua':
                    if (computer.ma === 'bua') {
                        stateKetQua = 'hòa nhau !!!'
                    } else if (computer.ma === 'bao') {
                        stateKetQua = 'thua sml !!!'
                    } else {
                        stateKetQua = "i'm iron man, i love you 3000 !!!"
                        stateSoBanThang ++
                    }
                    break;
                case 'bao':
                    if (computer.ma === 'bao') {
                        stateKetQua = 'hòa nhau !!!'
                    } else if (computer.ma === 'keo') {
                        stateKetQua = 'thua sml !!!'
                    } else {
                        stateKetQua = "i'm iron man, i love you 3000 !!!"
                        stateSoBanThang ++
                    }
                    break;
                default: stateKetQua =  "i'm iron man, i love you 3000 !!!"
            }

            return { ...state,ketQua:stateKetQua,soBanChoi:stateSoBanChoi,soBanThang:stateSoBanThang }
        }



        default:
            return { ...state }
    }
}
