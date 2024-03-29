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


async function renderContent() {
    const campaignId = PageUtils.getQueryParamId();
    const campaign = await CampaignsUtils.getCampaign(campaignId)
    
    renderMap(campaign.geoCoordinates)
    document.querySelector('.campaign-header-block div h1').textContent = campaign.name;
    document.querySelector('.campaign-header-block div p').textContent = campaign.description;
    const imageUrl = '../images/campaigns/' + campaign.image;
    document.querySelector('.campaign-header-block img').setAttribute('src', imageUrl);
    document.querySelector('#planted-trees').textContent = campaign.stadistics.amountPlantedTrees;
    document.querySelector('#contributors').textContent = campaign.stadistics.personsContributted+"+";
    document.querySelector('#duration').textContent = campaign.stadistics.monthsDuration;


    renderMap(campaign.geoCoordinates)
}

renderContent();