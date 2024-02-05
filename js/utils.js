class CampaignsUtilsClass {


    async getCampaigns() {
        const campaignsJsonUnparsed = await fetch('../data/campaigns.json')
        const campaignsJson = await campaignsJsonUnparsed.json()

        return campaignsJson.campaigns;
    }

    async getContinentCampaigns(continent) {
        if (continent == 'ALL') {
            const campaigns = await this.getCampaigns();
            return campaigns;
        } else {
            const campaigns = await this.getCampaigns();
            const continentCampaigns = [];
            campaigns.map((campaign) => {
                if (campaign.continent == continent) {
                    continentCampaigns.push(campaign)
                }
            })

            return continentCampaigns
        }

    }

    async convertCampaignsToCard(campaigns) {
        const cardTemplate = await (await fetch("../components/templates/campaignCard.html")).text()
        let renderedTemplates = "";
        for (let campaign of campaigns) {

        
            // Parse the HTML string into a DOM element
            const parser = new DOMParser();
            const doc = parser.parseFromString(cardTemplate, 'text/html');

            // Modify content
            doc.querySelector('.campaign-card-title h1').textContent = campaign.name;
            doc.querySelector('.campaign-card-title h3').textContent = campaign.continent;
            doc.querySelector('.campaign-card-desc').textContent = campaign.description
            doc.querySelector('.campaign-card img').setAttribute('img', campaign.image)
            

            // Extract the modified HTML
            const modifiedTemplate = doc.body.innerHTML;

            renderedTemplates = renderedTemplates + modifiedTemplate;
        }

        return renderedTemplates;
    }

}

//define global classes
const CampaignsUtils = new CampaignsUtilsClass()
