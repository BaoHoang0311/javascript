
const YOUR_API_KEY = 'ELza5cbhUi0XeZ7AsbzS5oEM1wFPn2EtMJm6oQ3Q'
const link = `https://rsapi.goong.io/staticmap/route?origin=20.981971,105.864323&destination=21.03876,105.79810&vehicle=car&api_key=${YOUR_API_KEY}`

const link2 =`https://rsapi.goong.io/Direction?origin=21.046623224000029,105.790168203000060&destination=21.046666732000062,105.790169569000060&vehicle=car&api_key=${YOUR_API_KEY}`

async function getUsers() {
    fetch(link)
    .then(response=>  response.blob())
    .then(response=> {
        var dd = URL.createObjectURL(response);
        $('img').attr('src', dd);
    })
}
getUsers();