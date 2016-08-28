**Contributors:**

**Emanuel Aharonoff** - https://github.com/eaharonoff

**Gina Yeon** - https://github.com/gyeon

**Kevin Hernon** - https://github.com/khernon1

**Purpose:** Search for an artist name and find their latest albums, news, and concerts

**Technologies used:** Javascript, jQuery, Handlebars

**Access:** Fork/clone the repo and open the index.html file in your browser.

**Information Sources:**

ALl of the information gathering is coded in the relevant file under the controllers.
 
Spotify
The Spotify API is used to capture artist, album, song, and related artist information. Multiple AJAX requests are required due to the construction of the API, with a description below.

    |___Artist table - artist ID is needed
        |___Album table - use the artist ID to gather the relevant albums and their IDs
            |___Tracks table - album IDs used to populate tracks

Google Charts is used to highlight related artists by Spotify followers.

New York Times
The NY Times Article Search API provides the recent news on the selected artist.

BandsInTown
The BandsInTown API allows the user to search for any upcoming concert events by location.

The respective models are used to create new instances for each search.


