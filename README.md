## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Additional information

Please note that CORS (maybe another backend problem) in iTunes API works strangely. For example, if I develop locally (localhost), I get an error in the request "https://itunes.apple.com/search?term=radiohead", but if I add one letter "d" at the end, everything works fine - "https://itunes.apple.com/search?term=radioheadd".

I also added debounce-hook to avoid sending requests too often.

I hope I have completed the task exactly as you expected.
