# drapdebug #
A simple tool for [Nodejs](https://nodejs.org/en/) to help you debug your API Application, by receiving detailed debug messages in your console. Created by Matt Drapchaty

## Install ##

Using [drapdebug](https://www.npmjs.com/package/drapdebug) your npm in your CLI type:

`npm install drapdebug`

### Dependenices ###

The dependencies required can be found in the `package.json` folder, if you would like to edit the package or use the built in testing please use your `npm install` to install the following:

```"chai": "^3.5.0",
    "eslint": "^3.17.1",
    "eslint-config-airbnb": "^14.1.0",
    "eslint-plugin-import": "^2.2.0",
    "eslint-plugin-jsx-a11y": "^4.0.0",
    "eslint-plugin-react": "^6.10.0",
    "mocha-sinon": "^1.1.6",
    "sinon": "^1.17.7"
```

## Usage ##

In order to turn on the debug feature you must include the following Environmental Variable to your local project. You can do this by using your npm to install [dotenv](https://www.npmjs.com/package/dotenv):

`npm install dotenv`

..Then create a file named `.env` in your root directory and declare Environmental variable of DEBUG=true

`DEBUG=true`

Make sure you are requiring `dotenv` in your project

`require('dotenv').config();`

Make sure you require `drapdebug` in your script:

`var util = require('drapdebug');`

drapdebug will allow you to insert a message you would like to log when a particular method/function/conditional is running. You can then insert the debugger inside your API routes with a robust detailed message indicating success/fail/etc in console:

`util.debug('Insert message you would like to log here.', `type`)`

The first argument is the message you would like to log when this is called.The second parameter which says `type` can be used to color code these messages based on the type and should be either ``'log'``,``'warn'``, or ``'error'`` if you want the messages to be in corresponding colors. will be displayed in your console.

### Version Bumper ###

There is also a built in Version Bumper, that will update your package with semantic versioning based on your input of the current version and `'patch'`, `'minor'`, or `'major'` based upon the changes made. It works just like the `debug` feature, but you will use it with `util.verBump` . This will automatically update your version and make a commit and push to Github. 

```const util = require('drapdebug');

// Bump versions (patch, minor, major)

util.verBump('2.0.1', 'patch');
util.verBump('2.0.1', 'minor');
util.verBump('2.0.1', 'major');
```

## Unit Testing ##

drapdebug has been unit tested with [chai](https://www.npmjs.com/package/chai) and [mocha](https://www.npmjs.com/package/mocha) and comes with built in testing. Make sure these packages are installed locally to the project folder. To run tests on this package, download the [drapdebug](https://github.com/MDrapchaty/drapdebug) project folder from GitHub.Direct to the drapdebug project folder in your CLI. Make sure [chai](https://www.npmjs.com/package/chai) and [mocha](https://www.npmjs.com/package/mocha) are installed to drapdebug project in your dependencies.

To run tests use the following command in your CLI:
`DEBUG=true mocha`

This will test the debugger as well as the give you a console log of how the version bumper feature will update from current version 2.0.0, by 'patch', 'minor', or 'major' update.
