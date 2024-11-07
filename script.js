// Function to filter articles based on selected topic
function filterArticles(topic) {
    // Select all articles
    const articles = document.querySelectorAll('article');

    articles.forEach(article => {
        // Get the topic of the article from data-topic attribute
        const articleTopic = article.getAttribute('data-topic');

        // Show or hide articles based on the selected topic
        if (topic === 'all' || articleTopic === topic) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}