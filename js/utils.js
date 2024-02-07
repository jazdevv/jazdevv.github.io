class CampaignsUtilsClass {


    async getCampaigns() {
        const campaignsJsonUnparsed = await fetch('../data/campaigns.json')
        const campaignsJson = await campaignsJsonUnparsed.json()

        return campaignsJson.campaigns;
    }

    async getCampaign(campaignId) {
        const campaigns = await this.getCampaigns()
        for (let campaign of campaigns) {
            if (campaign.id == campaignId) {
                return campaign
            }
        }
        return undefined;
    }

    async getContinentCampaigns(continent) {
        if (continent == 'ALL') {
            const campaigns = await this.getCampaigns();
            return campaigns;
        } else {
            const campaigns = await this.getCampaigns();
            const continentCampaigns = [];

            // filter by continent
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


            // parse the HTML string into a DOM element
            const parser = new DOMParser();
            const doc = parser.parseFromString(cardTemplate, 'text/html');

            // modify content
            doc.querySelector('.campaign-card-title h1').textContent = campaign.name;
            doc.querySelector('.campaign-card-title h3').textContent = campaign.continent;
            doc.querySelector('.campaign-card-desc').textContent = campaign.description
            const imageUrl = '../images/campaigns/' + campaign.image;
            doc.querySelector('.campaign-card img').setAttribute('src', imageUrl);
            const detailsUrl = '/campaign.html?id=' + campaign.id;
            doc.querySelector('.campaign-detail').setAttribute('href', detailsUrl);

            // extract the modified HTML
            const modifiedTemplate = doc.body.innerHTML;

            renderedTemplates = renderedTemplates + modifiedTemplate;
        }

        return renderedTemplates;
    }

}

class NewsUtilsClass {
    async getNews() {
        const newsJsonUnparsed = await fetch('../data/news.json')
        const newsJson = await newsJsonUnparsed.json()

        return newsJson.news;
    }

    async getNew(newId) {
        const news = await this.getNews()
        for (let newNotice of news) {
            if (newNotice.id == newId) {
                return newNotice
            }
        }
        return undefined;
    }

    async getAmountOfNews(amount) {
        const news = await this.getNews();

        const resultArray = [];
        for (let i = 0; i <= amount - 1; i++) {
            resultArray.push(news[i]);
        }

        return resultArray;
    }

    async convertNewsToCard(news) {
        const cardTemplate = await (await fetch("../components/templates/newCard.html")).text()
        let renderedTemplates = "";
        for (let newNotice of news) {
            // parse the HTML string into a DOM element
            const parser = new DOMParser();
            const doc = parser.parseFromString(cardTemplate, 'text/html');

            // modify content
            const customPageUrl = "/new.html?id=" + newNotice.id;
            doc.querySelector('.new-card').setAttribute('href', customPageUrl);
            doc.querySelector('.new-card h3').textContent = newNotice.title;
            doc.querySelector('.new-card p').textContent = newNotice.miniDescription;
            const imageUrl = '../images/news/' + newNotice.image;
            doc.querySelector('.new-card img').setAttribute('src', imageUrl);
            doc.querySelector('.new-card span').textContent = newNotice.date;

            // extract the modified HTML
            const modifiedTemplate = doc.body.innerHTML;

            renderedTemplates = renderedTemplates + modifiedTemplate;
        }

        return renderedTemplates;
    }


    async loadNews(amountNews, idRenderIn) {
        const news = await this.getAmountOfNews(amountNews);
        const renderedNews = await this.convertNewsToCard(news);
        document.getElementById(idRenderIn).innerHTML = renderedNews;
    }

}

// define global classes
const CampaignsUtils = new CampaignsUtilsClass();
const NewsUtils = new NewsUtilsClass();
