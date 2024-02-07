document.getElementById('share-btn').addEventListener('click', async (e) => {
    e.currentTarget.innerText = "URL COPIED TO CLIPBOARD!";

    const url = PageUtils.getUrl();

    try {
        await navigator.clipboard.writeText(url);
        console.log('Text copied to clipboard');
      } catch (err) {
        console.error('Error in copying text: ', err);
      }
})


