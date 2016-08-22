// hits api and grabs data
function articleAdapter(artist) {
  var uri = rootURL += '?' + $.param({
    'api-key': "d16a974a6cd841c183bcce7d8cb34816",
    'q': artist
  })
  return $.ajax({
    method: "GET",
    url: uri
  }).done(function(result) {
    var articleResults = result.response.docs
    articleResults.forEach((article) => new Articles(article.headline.main, article.snippet, article.web_url) )
  })
}
