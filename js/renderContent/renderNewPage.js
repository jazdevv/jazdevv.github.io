async function renderContent() {
    const newsId = PageUtils.getQueryParamId();
    const news = await NewsUtils.getNew(newsId)
    
    console.log(news)
    // document.querySelector('.news-header-block div h1').textContent = news.name;
    // document.querySelector('.news-header-block div p').textContent = news.description;
    // const imageUrl = '../images/newss/' + news.image;
    // document.querySelector('.news-header-block img').setAttribute('src', imageUrl);
    // document.querySelector('#planted-trees').textContent = news.stadistics.amountPlantedTrees;
    // document.querySelector('#contributors').textContent = news.stadistics.personsContributted+"+";
    // document.querySelector('#duration').textContent = news.stadistics.monthsDuration;
}

renderContent();