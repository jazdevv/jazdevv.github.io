async function getCampaigns() {
    const campaignsJsonUnparsed = await fetch('../data/campaigns.json')
    const campaignsJson = await campaignsJsonUnparsed.json()
    
    return campaignsJson;
}

async function loadMap() {
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

    //render campaigns
    const campaigns = await getCampaigns()

    campaigns.campaigns.map( (campaign ) => {
        const marker = L.marker(campaign.geoCoordinates, {
            title: campaign.name
        }).addTo(map); 

        //redirect to campaign page on marker click
        marker.on('click',()=>{
            window.open(`/campaign.html?id=${campaign.id}`)
        })
    })
    
}

loadMap()

