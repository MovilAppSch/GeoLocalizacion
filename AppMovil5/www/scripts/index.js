
document.addEventListener('deviceready', onDeviceReady.bind(this), false);

function onDeviceReady() {
    // Controlar la pausa de Cordova y reanudar eventos
    $('#btnMostrarMapa').click(getDatos);
    // TODO: Cordova se ha cargado. Haga aquí las inicializaciones que necesiten Cordova.
}

function getDatos() {
    navigator.geolocation.getCurrentPosition(onSucces, onError, {
        maximumAge: 300000,
        timeout: 10000,
        enableHighAccuracy: true
    });
}


function onSucces(position) {
    var cusLat = position.coords.latitude;
    var cusLon = position.coords.longitude;

    document.getElementById("txtLat").value = cusLat;
    document.getElementById("txtLon").value = cusLon;

    try {
        var coords = new google.maps.LatLng(cusLat, cusLon);

        var opciones = {
            center: coords, zoom: 15
        };

        var mapa = new google.maps.Map(document.getElementById("map"), opciones);
        var marcador = new google.maps.Marker({
            position: coords,
            map: mapa,
            title: "Mi ubicacion",
            animation: google.maps.Animation.DROP
        });
    }
    catch (err) {
        console.log(err.message);
        alert(err.message);
    }
}

function onError(err) {
    console.log("codigo de err:" + err.code + "msj = " + err.message);
}

