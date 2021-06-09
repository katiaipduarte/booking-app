# Getting Started with Booking App

Welcome to my Booking App, where you can see select a day and schedule a 1 hour slot

Demo at: https://katiaipduarte.github.io/booking-app/

The app was created with create-react-app, redux and typescript. See the [full create-react-app guide](https://github.com/facebook/create-react-app), [redux](https://redux.js.org/) and [redux toolkit](https://redux-toolkit.js.org/). 


To create the calendars visible, two libraries were used. The month calendar uses [react-calendar](https://www.npmjs.com/package/react-calendar) and the day calendar [React Scheduler](https://devexpress.github.io/devextreme-reactive/react/scheduler/docs/guides/getting-started/). This decision was taken, so the development time would be cut down.

For styling it was used styled-components and [material-ui](https://material-ui.com/). Styled components here are only used as small way to organize the style and in the future, in case of developing more the app be easier to do. Material UI framework, was once more used as a tool to help cut down the development time, since it already gives a lot of components out of the box.

Thank you for using my app.

## Table of Contents

- [Installation](#installation)
  - [API Keys](#api-keys)
- [Future Work](#future-work)
- [Contributing](#contributing)
- [License](#license)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [yarn start or npm start](#yarn-start-or-npm-start)
  - [yarn test or npm test](#yarn-test-or-npm-test)
  - [yarn build or npm run build](#yarn-build-or-npm-run-build)
  - [yarn eject or npm run eject](#yarn-eject-or-npm-run-eject)
  - [npm run lint](#npm-run-lint)
  - [npm run format](#npm-run-format)
  - [npm run predeploy](#npm-run-predeploy)
  - [npm run deploy](#npm-run-deploy)
- [Learn More](#learn-more)

## Installation

To use this app, first clone from GitHub via 'git clone https://github.com/katiaipduarte/booking-app.git' at your terminal, `cd` to the new directory, then run `npm install`. Before running this project, you will need to create a `.env.local` file, with the same env as the ones in the `.env.example`. At last, run `npm run start` to launch your http server.

### API Keys

This project is connect to an external private API. Before starting the project either create your own (should follow the same API pattern described in the `appointments.ts` interface file) or you could start the project without it.

## Future Work

[ ] Add unit testing <br>
[ ] Add option to change selected calendar<br>
[ ] Add calendar/mentor owner view<br>
[ ] Add accessibility rules<br>
[ ] Block user from scheduling in the past<br>
[ ] Add database connection to save (instead of only been saved temporarily in redux store)<br>
[ ] Add light mode (instead of only dark)<br>
[ ] Add possibility to update or delete the booking<br>


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/katiaipduarte/cra-boilerplate. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License

The code is available as open source under the terms of the MIT License.

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    assets/
    components/
    interfaces/
    store/
    styles/
      index.ts
    utils/
    App.tsx
    index.css
    index.tsx
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.tsx` is the TypeScript entry point.
- `src/components` is the folder that houses all the components used.
- `src/interfaces` is the folder with all the interfaces/type files used in the components.
- `src/store` is the folder with the redux logic.
- `src/style` is the folder with typography, reset and any other style rules shared by all React components.
- `src/utils` is the folder with helper functions.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any TypeScript and styles files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>

## Available Scripts

In the project directory, you can run:

### `yarn start` or `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test` or `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build` or `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject` or `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run lint`

Automatic linting, with rules to work with TypeScript and React. The `src/serviceWorker.ts` file and the `node_modules`m folder are not included.

This is runned each time you do a commit and a push it to your branch.

For more information see the [ESLint documentation](https://eslint.org/).

### `npm run format`

Command to format the code according to the rules that can be found in `.prettierrc`. The `node_modules` folder is not included.

This will be automatically run each time you do a commit.

For more information see the [Prettier documentation](https://prettier.io/).

### `npm run predeploy`

This commands basically, runs the `npm run build` command. To read more just check [yarn build or npm run build](#yarn-build-or-npm-run-build).

### `npm run deploy`

Command to deploy the current application using Github Pages. If you forked this project onto a repository of your own, do not forget to create a `gh-pages` branch, before running this command.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn more about how to deploy a CRA app using Github Pages, go to this [link](https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom).
