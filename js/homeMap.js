var map = L.map('map',{
    center: [51.505, -0.09],
    zoom: 3,
    minZoom: 3,
    maxZoom: 6,
    zoomControl: false
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);