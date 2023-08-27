## How to run the app

In the project directory, you should run:

### `npm install`
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Additional information

Please note that CORS (maybe another backend problem) in iTunes API works strangely. For example, if I develop locally (localhost), I get an error in the request "https://itunes.apple.com/search?term=radiohead", but if I add one letter "d" at the end, everything works fine - "https://itunes.apple.com/search?term=radioheadd".

I also added debounce-hook to avoid sending requests too often.

I hope I have completed the task exactly as you expected.
