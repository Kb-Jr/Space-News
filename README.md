# Space-News
A web app which displays 10 space related news built with React JS.


# Methodology
- The fetch method was used to aquire the news object from the News API. The result was stored in a useEffect hook. This ensures that whenever the page is re-rendered or reloades, the data is being fetched again.
- A state was created for the article variable using the useState hook and the initial value was set to an empty array.
- The result from the fetch method was data converted to JSON format. This data was used tom populate the empty array created. Now the article variable contains an array of 10 objects fetched from the News API
- The array containing the articles was looped through and for each article, an image element, title, text and time published was created. The details for the created elements was populated by accessing the properties for each article in the array.
- The container div encompassing each article was attached an onClick event listener which launches the url of the article clicked on a separate tab when the conatiner is clicked.

# New Lessons
- Using 'fetch' and promises to retreieve data from API endpoints
- Using the 'useEffect' hook

# Technology used
- Custom CSS properties
- React JS

# Links
## API Endpoint
- (SpaceNews API endpoint)[https://api.spaceflightnewsapi.net/v3/articles/]
