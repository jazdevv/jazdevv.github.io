function renderFooter (){
    fetch('../components/footer.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('footer').innerHTML = html;
            })
            .catch(error => console.error('Error:', error));
}

function renderHeader(){
    fetch('../components/header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header').innerHTML = html;
        })
        .catch(error => console.error('Error:', error));
}

renderFooter()
renderHeader()