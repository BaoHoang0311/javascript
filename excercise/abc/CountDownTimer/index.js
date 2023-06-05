function timekhuyenmai(tgkm){
    const z1 = setInterval(() => {

        let now =  Date.now();

        let someMillisecondValue = (tgkm - now) / 1000;
        //! tính giay //
        let ngay = someMillisecondValue / (24 * 3600);
        kq = `${Math.trunc(ngay)} ngay `;
        let gio =  someMillisecondValue % (24 * 3600) / 3600;
        kq += `${Math.trunc(gio)} gio `;
        let phut =  someMillisecondValue % (24 * 3600) % 3600 / 60;
        kq += `${Math.trunc(phut)} phut `;
        let giay =  someMillisecondValue % (24 * 3600) % 3600 % 60;
        kq += `${Math.trunc(giay)} giay `;
        console.log(kq);
    },1000)
}

timekhuyenmai(new Date(2023,5,7,0,0,0));