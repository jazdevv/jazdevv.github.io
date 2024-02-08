function renderFooter (){
    fetch('../components/footer.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('footer').innerHTML = html;
            })
            .catch(error => console.error('Error:', error));
}

function renderNavbar(){
    fetch('../components/navbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navbar').innerHTML = html;
        })
        .catch(error => console.error('Error:', error));
}

renderFooter()
renderNavbar()