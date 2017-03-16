# drapdebug #
A simple tool for [Nodejs](https://nodejs.org/en/) to help you debug your API Application. Created by Matt Drapchaty

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

### Create Log Folder ###

Create a folder named `logs` in your root directory. This is where the log file will be created. Create a file named `.gitkeep` inside the logs folder you have just made in your root directory.( This will let Github know to add the logs file to your repo even though the folder is 'empty')



### Usage ###

In order to turn on the debug feature you must include the following Environmental Variable to your local project. You can do this by using your npm to install [dotenv](https://www.npmjs.com/package/dotenv):

`npm install dotenv`

..Then create a file named `.env` in your root directory and declare Environmental variable of DEBUG=true

`DEBUG=true`

Make sure you are requiring `dotenv` in your project 

`require('dotenv').config();` 

Make sure you require `drapdebug` in your script:

`var util = require('drapdebug');`

drapdebug will allow you to insert a message you would like logged 
You can then insert the debugger inside your API routes with a robust detailed message indicating success/fail, or whatever message you would like to be appended to your log file:

`util.debug('Insert message you would like to log here.')`

A log file will be created in your logs folder. Your detailed message will be added to your log file along with a timestamp .

## Unit Testing ##

drapdebug has been unit tested with [chai](https://www.npmjs.com/package/chai) and [mocha](https://www.npmjs.com/package/mocha) and comes with built in testing. Make sure these packages are installed locally to the project folder. To run tests on this package, download the [drapdebug](https://github.com/MDrapchaty/drapdebug) project folder from GitHub.Direct to the drapdebug project folder in your CLI. Make sure [chai](https://www.npmjs.com/package/chai) and [mocha](https://www.npmjs.com/package/mocha) are installed to drapdebug project in your dependencies.   

To run tests use the follwing command in your CLI:
`DEBUG=true mocha`

