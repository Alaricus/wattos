# Watto's Spaceship Emporium

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Live version is at [www.alaric.us/wattos/](https://www.alaric.us/wattos/)

## Starting the app
To run the app locally, first you need to install dependencies with `npm install` or `yarn`.

When finished, run a development server with `npm start` or `yarn start`.

Alternatively you can change the "homepage" property in package.json to read "/" and then create a build by running `npm run build` or `yarn run build`. Once finished, start a local server by running `node server.js` from within the project dorectory. The app will be available at [http://localhost:3001/](http://localhost:3001/). (This requires Express.)

## Technical decisions

The app uses React hooks because hooks are awesome and classes are not.

The app doesn't use Redux, because it offers no benefit to such a tiny project.

It also doesn't use Next.js, because I've never used it and felt that I should probably do the best I can with what I already know.

The site is responsive, and _should_ be accessible.

## Design decisions

The most difficult design decision was to continue working after seeing your site and knowing full well that I would never posess the artistic ability of that magnitude.

I thought that adding several languages (well, fonts really) for Aurebesh, Mandalorian, and that one language from Dark Forces, in addition to English, would make the site enticing to more customers.

The 'Purchase' button will display a congratulations modal and redirect to the front page, where the purchased ship will be grayed out and moved to the bottom of the list. The page will remain accessible, but the button will now be grayed out with its text changed to 'Sold out.' In order to get the ships back in stock, just reload the page: all these changes are per session.

There are "Loading," "Failed to Load," and "404" screens.

All of the assets (images, favicon, 3D models, and fonts) are stolen from the Internet because I don't know how to create art.
