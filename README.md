# Quote of the Day Website

A simple website that displays a "Quote of the Day" fetched from the Quotable API.

## Project Structure
```bash
/project-directory
└── public
    ├── index.html
    ├── styles.css
    ├── script.js
    └── favicon.ico
```

## Usage

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/quote-of-the-day.git
   cd quote-of-the-day
      ```
2. **Open index.html in a Web Browser:**

3. **Open the index.html file in your preferred web browser.**


##How It Works

**index.html**: Basic structure of the website.
**styles.css**: CSS for styling the website.
**script.js**: Fetches a quote from the Quotable API and displays it.
**favicon.ico**: The website's favicon.

**Example Code:**
   ```bash
JavaScript (script.js)
document.addEventListener("DOMContentLoaded", () => {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quoteText').innerText = data.content;
            document.getElementById('quoteAuthor').innerText = data.author ? `— ${data.author}` : '';
        })
        .catch(error => console.error('Error fetching quote:', error));
});
   ```
## License
This project is licensed under the MIT License.
