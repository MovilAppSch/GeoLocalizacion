$(function () {
    $('#btnMostrarMapa').click(localizate);

    function localizate() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(onSuccess);
            } else {
                alert("Geolocation is not supported by this browser.");
            }
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
})


