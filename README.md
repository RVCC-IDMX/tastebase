# tastebase
This is a repository for the IDMX 297 Capstone class' first project of Spring 2022.

## Installation
First, download or clone the latest version of this repository. Once you have the repository downloaded in a suitable location, run the following commands to check to make sure you have Node.js and npm installed.
```
node --version
npm --version
```
Then, run the following command to install the necessary npm packages.
```
npm install
```

## Usage
There are three commands that you should use during project development

- **`npm run dev`** will automatically start up Parcel and host a local development server. This has hot reloading enabled, so don't worry about refreshing!

- **`npm run redev`** will clear out cache before running the `dev` command. This is useful for when Parce's hot reloading feature breaks, or SCSS styles aren't being updated properly.

- **`npm run build`** builds the website in its entirety, minifying the source code to its theoretical limit. This will become useful during later stages of development.

## Source Folder Structure
*Subject to change.*

```
/src                    Main location of Pug files
├───/fonts              Font files
├───/img                Image and vector files
├───/includes           Pug file includes/templates
├───/js                 JavaScript/React files
└───/scss               SCSS/style files, location of main.scss
    ├───/components     Universal components (e.g., header, footer, cards, etc.)
    ├───/core           Core elements (e.g., resets, colors, mixins, etc.)
    └───/pages          Page-specific elements (e.g., layouts, containers, etc.)
```

## Plugins and Installations
### React and React DOM
This app utilizes the React library via the following installation:
- ```npm install react react-dom```

### Pug - JSX
In order to transpile Pug templates to JSX and vice versa, the following plugins are needed:
- ```npm install babel-plugin-transform-react-jsx```
- ```npm install babel-plugin-transform-react-pug```

## Resources
- [Pug - JSX Plugin](https://github.com/pugjs/babel-plugin-transform-react-pug)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
-  Allergen Icons: https://www.vecteezy.com/vector-art/343354-allergen-icons-set