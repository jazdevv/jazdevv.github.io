async function renderMap(geoCoordinates) {
    var map = L.map('map', {
        center: geoCoordinates,
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
    document.querySelector('.campaign-header-block h1').textContent = campaign.name;
    document.querySelector('.campaign-header-block p').textContent = campaign.description;
    const imageUrl = '../images/campaigns/' + campaign.image;
    document.querySelector('.campaign-header-block img').setAttribute('src', imageUrl);
    document.querySelector('#planted-trees').textContent = campaign.stadistics.amountPlantedTrees;
    document.querySelector('#contributors').textContent = campaign.stadistics.personsContributted;
    document.querySelector('#duration').textContent = campaign.stadistics.monthsDuration;


    renderMap(campaign.geoCoordinates)
}

renderContent();