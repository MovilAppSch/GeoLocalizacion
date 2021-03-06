﻿// Si quiere una introducción sobre la plantilla En blanco, vea la siguiente documentación:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Para depurar código al cargar la página en cordova-simulate o en dispositivos o emuladores Android: inicie la aplicación, establezca puntos de interrupción 
// y ejecute "window.location.reload()" en la Consola de JavaScript.
//github porqueria
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
})();