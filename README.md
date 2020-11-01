# Blog Read

## Introduction

Frontend built to acess and read the blogs, using [Blog-API](https://clumsy-blog.herokuapp.com/).

- Refer Blog-Read Live Page [here](https://clumsynite.github.io/blog-read/)
- Refer the API repository, [here](https://github.com/Clumsynite/blog-api)

Blog-Read is where you can read the BlogPosts. If you want to post something yourself, you'll have to go to `Blog-Write`.
Both sites need user accounts, in order to be accessed.

If you are new and don't have an account, you can go to the [Signup](https://clumsynite.github.io/blog-read/#/signup) page and create a new account over there.

> Be sure to remember you password, you can't reset it and there's nothing I can do if you forget it.

After your authentication is successful, you can view all blog posts and Comment on those posts if you want to.

## Contents

### Home

> Needs Authentication: `false`

A simple landing page which some text to give a basic understanding of this project.

`User can access it with or without authentication`

### Login

> Needs Authentication: `false`

User can log into their account with the correct **username** and **password**.

`This page can't be accessed after authentication is successful.`

### Signup

> Needs Authentication: `false`

A new user can create their account here.

Details needed:
**Firstname**, **Lastname**, **Username**, **Password**

Password is encrypted on the server before creating the account. So, if you forget your password, the account can't be recovered easily.

`This page can't be accessed after authentication is successful.`

### Blogs

> Needs Authentication: `true`

This page displays all Blog posts made on `Blog-Write`, ordered as Recent first.

User can access those posts by clicking on the card. Author's name and created time can be seen below each card.

### BlogPost

> Needs Authentication: `true`

_This section represents each blog post (which appears after clicking the card)._

You can see the Post in full here.
There's an editor below the post for users to post comments.
Under which can you see comments made by other people.

### Profile

> Needs Authentication: `true`

This page displays the user's profile.

Renders a Profile card, which contains the user's details.
The card has two buttons, which shows the user's post and comment count.

After clicking those buttons you can see posts/comments you have made.

### Logout

> A Link which runs the logout function, rendered in navbar after authenticaion is successful.

## Extra Packages used

- [`@agney/react-loading`](https://github.com/agneym/react-loading) for loading animations
- [`@tinymce/tinymce-react`](https://github.com/tinymce/tinymce-react) for TinyMCE Editor (used to post comments)
- [`interweave`](https://github.com/milesj/interweave) to render string as HTML
- [`moment`](https://github.com/moment/moment) to get relative time
- [`react-particles-js`](https://github.com/Wufe/react-particles-js) for using Particles.js as background
- [`react-router-dom`](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) for handling routes.
- [`gh-pages`](https://github.com/tschaub/gh-pages) to deploy react-app on Github Pages

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
