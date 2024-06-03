document.addEventListener("DOMContentLoaded", () => {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quoteText').innerText = data.content;
            document.getElementById('quoteAuthor').innerText = data.author ? `— ${data.author}` : '';
        })
        .catch(error => console.error('Error fetching quote:', error));
});
