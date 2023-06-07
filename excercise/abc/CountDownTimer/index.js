function timekhuyenmai(tgkm) {
    const z1 = setInterval(() => {

        let now = Date.now();

        let someMillisecondValue = (tgkm - now) / 1000;
        //! tính giay //
        let ngay = someMillisecondValue / (24 * 3600);

        kq = `${Math.trunc(ngay)} ngay `;
        let gio = someMillisecondValue % (24 * 3600) / 3600;
        kq += `${Math.trunc(gio)} gio `;
        let phut = someMillisecondValue % (24 * 3600) % 3600 / 60;
        kq += `${Math.trunc(phut)} phut `;
        let giay = someMillisecondValue % (24 * 3600) % 3600 % 60;
        kq += `${Math.trunc(giay)} giay `;
        console.log(kq);
    }, 1000)
}
window.addEventListener('load', handlefunction);
function handlefunction() {
    const days = document.querySelector(".days");
    const hours = document.querySelector(".hours");
    const minutes = document.querySelector(".minutes");
    const seconds = document.querySelector(".seconds");
    let tgkm = new Date(2023, 5, 7, 0, 0, 0);
    const z1 = setInterval(() => {

        let now = Date.now();

        let someMillisecondValue = (tgkm - now) / 1000;
        //! tính giay //
        let ngay = someMillisecondValue / (24 * 3600);
        days.innerHTML = Math.trunc(ngay);
        let gio = someMillisecondValue % (24 * 3600) / 3600;
        hours.innerHTML = Math.trunc(gio);
        gio.innerHTML = Math.trunc(gio);
        let phut = someMillisecondValue % (24 * 3600) % 3600 / 60;
        minutes.innerHTML = Math.trunc(phut);

        let giay = someMillisecondValue % (24 * 3600) % 3600 % 60;
        seconds.innerHTML = Math.trunc(giay);
    }, 1000)
}
