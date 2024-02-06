async function renderMap(geoCoordinates) {
    console.log("rendering map", geoCoordinates)
    var map = L.map('map', {
        center: [51.505, -0.09],
        zoom: 2,
        minZoom: 2,
        maxZoom: 6,
        zoomControl: false
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.marker(geoCoordinates).addTo(map);
}

function getQueryParamId() {
    const currentURL = window.location.href;

    const url = new URL(currentURL);

    const id = url.searchParams.get("id");

    return id;
}

async function renderContent() {
    const campaignId = getQueryParamId();
    const campaign = await CampaignsUtils.getCampaign(campaignId)
    
    renderMap(campaign.geoCoordinates)
    console.log(campaign)
}

renderContent();