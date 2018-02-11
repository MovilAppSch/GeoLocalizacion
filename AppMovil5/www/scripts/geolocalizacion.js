$(function () {
    $('#btnMostrarMapa').click(getDatos);

    function getDatos() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError
            , {
                maximumAge: 300000,
                timeout: 15000,
                enableHighAccuracy: true
            });
    }
        function onSuccess(position) {

            var cusLat = position.coords.latitude;
            var cusLon = position.coords.longitude;
            document.getElementById("txtLat").value = cusLat;
            document.getElementById("txtLon").value = cusLon;
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
            })
        }

        function onError(err) {
            alert.log("codigo de err:" + err.code + "msj = " + err.message);
        }
})


