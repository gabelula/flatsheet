# Welcome to FlatSheet

Flatsheet is a realtime editor for curating spreadsheets as a team. You can read about it at http://flatsheet.io

## Why to use flatsheet?

## How to use it?


## Demo

You can try it at [Public shared sheets](https://app.flatsheet.io/sheet/bbn6_tq9_qcqcfb6yi1w-g)

## Project layout

    app.js        #
    package.js    # Dependencies and running scripts
    handlers/
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.
    lib/
    models/
    public/
    routes/
    tests/
    views/

## Installing Locally

Cloning the repo is best for testing things out & developing flatsheet, but works fine for other purposes. You just have to be prepared to manually pull & merge changes to your server.

### Clone and install

- clone this repo: `git clone git@github.com:flatsheet/flatsheet.git`
- change directory: `cd flatsheet`
- run `npm install`

### Create an admin user
- create an admin account by running `npm run flatsheet accounts create-admin`. You'll be prompted for email, username, & password.
- You can run `npm run flatsheet accounts list` to see that your admin account was created.

### Start the server
- Now run `npm start` to start the server.
- In development you can watch the css & js using `npm run watch`.
- In development you can debug running `npm run-script debug`. You add breakpoints in the code with `debugger`
- Go to `http://127.0.0.1:3333` and log in with the admin account credentials.


## Deployment and Customization

This is a good option for when you're using flatsheet in production, because you can make use of npm to install and update flatsheet.

### Steps:

- Create a directory name `flatsheet` for your project (or whatever you like)
- Change directory `cd flatsheet`
- Create a package.json file with `npm init`
- Install flatsheet with npm: `npm install flatsheet --save`
- Install the response module: `npm install response --save`

### File/folder setup
- Create a folder named `data`: `mkdir data`
- Create a app.js file with this code:

```javascript
var server = require('flatsheet')({
  site: {
    title: 'flatsheet',
    email: 'hi@example.com',
    url: 'http://127.0.0.1:3333',
    contact: 'your full name'
  },
  db: __dirname + '/data'
});

server.listen();
```

- Create a .env file for secret config like sendgrid username/password:

```
SENDGRID_USER=yourusername
SENDGRID_PASS=yourpassword
```

- Add a `flatsheet` script and a `start` script to the `scripts` field in your package.json file:

```json
"scripts": {
  "flatsheet": "flatsheet",
  "start": "node app.js"
},
```

- So your full package.json file should look something like this:

```
{
  "name": "flatsheet-example",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "flatsheet": "flatsheet",
    "start": "node app.js"
    },
    "author": "",
    "license": "ISC"
  }
  ```

### Create an admin user
  - Create an admin account by running `npm run flatsheet accounts create-admin`. You'll be prompted for email, username, & password.
  - You can run `npm run flatsheet accounts list` to see that your admin account was created.


### Customize

### Configure web server

### Invite users
  - Navigate to `http://127.0.0.1:3333/accounts/invite`
  - Enter email addresses, one address per line
  - Click "Send invitation"
  - Users will receive an email with a link they can click to create accounts


## Roadmap

http://flatsheet.io/roadmap

## Contributing

Please contribute to this repository if any of the following is true:
- You have expertise in community development, communication, or education
- You want open source communities to be more collaborative and inclusive
- You want to help lower the burden to first time contributors

# How to contribute

**Prerequisites:**  
- Familiarity with [GitHub PRs](https://help.github.com/articles/using-pull-requests) (pull requests) and issues.
- Knowledge of [markdown](https://help.github.com/articles/markdown-basics/) for editing `.md` documents.
- Experience with or interest in learning JavaScript.

**In particular, this community seeks the following types of contributions:**
- ideas: participate in an issues thread or start your own to have your voice heard.
- design: create mockups & prototypes
- write: contribute your expertise in an area by helping us expand the included content
- copy editing: fix typos, clarify language, and generally improve the quality of the content
- formatting: help keep content easy to read with consistent formatting
- code: fix issues or contribute new features to this or any related projects

# Steps to contribute writing code

- Tasks are run using npm run scripts. Review the scripts object in the package.json file for details.
- Files in the `public` directory are generated by npm scripts
- Fork this repository.
- Run `npm install`
- Run `npm run watch` to build css & browser js
- Run `npm start` to start the server
- Create a branch for your changes
- Include tests if applicable
- Add/edit documentation for any changes
- Submit a pull request

# Steps to contributing writing documentation

Markdown is the format we are using to write documentation and mkdocs is the python tool to build html static files from it. You can find it in the folder docs/ of the github repository.

Read about it at [readthedocs](http://docs.readthedocs.org/en/latest/getting_started.html).

# Steps to contribute submitting bugs

- **[flatsheet on Github](http://github.com/flatsheet)**
- **[Discussions, tasks, and issue reporting](http://github.com/flatsheet/flatsheet/issues)**
- **[Chat on Gitter](https://gitter.im/flatsheet/flatsheet)**

GitHub issues are the primary way for communicating about specific proposed
changes to this project.

In both contexts, please follow the conduct guidelines. Language issues
are often contentious and we'd like to keep discussion brief, civil and focused
on what we're actually doing, not wandering off into too much imaginary stuff.

## Credits

Seth Vincent

## Sponsor

This project is supported in part by a [code sprint grant from OpenNews](http://opennews.org/codesprints.html).

More info [at the Flatsheet blog](http://flatsheet.io/blog/getting-flatsheet-to-v1-with-help-from-opennews/).

## License

The MIT License (MIT)

Copyright (c) 2015 Seth Vincent

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
