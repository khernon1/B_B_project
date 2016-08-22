var rootURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
const store = {
  articles: []
}


class Articles {

  constructor(headline, snippet, web_url) {
    this.headline = headline
    this.snippet = snippet
    this.web_url = web_url
    // this.multimedia = multimedia.url
    store.articles.push(this)
  }
}
