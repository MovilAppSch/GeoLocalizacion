// Si quiere una introducción sobre la plantilla En blanco, vea la siguiente documentación:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar código al cargar la página en cordova-simulate o en dispositivos o emuladores Android: inicie la aplicación, establezca puntos de interrupción 
// y ejecute "window.location.reload()" en la Consola de JavaScript.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Controlar la pausa de Cordova y reanudar eventos
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        $('#btnMostrarMapa').click(getDatos);
        // TODO: Cordova se ha cargado. Haga aquí las inicializaciones que necesiten Cordova.
    };

    function onPause() {
        // TODO: esta aplicación se ha suspendido. Guarde el estado de la aplicación aquí.
    };

    function onResume() {
        // TODO: esta aplicación se ha reactivado. Restaure el estado de la aplicación aquí.
    };

    var onSuccess = function (position) {
        alert("llego a onSucces");
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

    var onError = function (err) {
        alert.log("codigo de err:" + err.code + "msj = " + err.message);
    }

    function getDatos() {
        alert("llego a getDatos");
        navigator.geolocation.getCurrentPosition(onSuccess, onError, {
            maximumAge: 300000,
            timeout: 10000,
            enableHighAccuracy: true
        });
    }
})();