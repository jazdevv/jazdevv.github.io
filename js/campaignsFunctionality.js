// add event listener to the parent and detect the closest container then
// get the atribute for filter it
document.getElementById('filter-continent-container').addEventListener('click', async function(event) {
    const continentContainer = event.target.closest('.continent-container');

     if (continentContainer) {
        const continent = continentContainer.getAttribute('data-continent');
        const campaignsHtml = await filterByContinent(continent);
        document.getElementById('campaigns').innerHTML = ""; 
        document.getElementById('campaigns').innerHTML = campaignsHtml;        
    }
});

async function filterByContinent(continent) {
    console.log(continent)
    const campaigns = await CampaignsUtils.getContinentCampaigns(continent);
    console.log("continent campaign", campaigns)
    const campaignsHtml = await CampaignsUtils.convertCampaignsToCard(campaigns);
    
    return campaignsHtml;
}

async function initialRenderOfAllCampaigns(){
    document.querySelector('.continent-container[data-continent="ALL"]').click();
}

initialRenderOfAllCampaigns()
