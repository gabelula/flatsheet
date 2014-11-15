# flatsheet

> A realtime editor for curating data.

## Current status

This version of Flatsheet is an **in-progress** rewrite using Node.js. The first version of Flatsheet was a [Ruby on Rails prototype](https://github.com/flatsheet/flatsheet-prototype).

Many aspects of the project are incomplete, but things are far enough along that it will be useful if you want to install it and **experiment in a development environment**.

Want to see an early demo of the real-time editor? Go here: http://flatsheet-realtime.herokuapp.com/

### Todos:

Open issues represent current todo list: [github.com/flatsheet/flatsheet/issues](http://github.com/flatsheet/flatsheet/issues)

## Contributing
- Tasks are run using npm run scripts. Review the scripts object in the package.json file for details.
- Files in the `public` directory are generated by npm scripts
- Fork this repository.
- `npm install`
- `npm run watch` to build css & browser js
- `npm start` to start the server
- Create a branch for your changes.
- Include tests if applicable.
- Add/edit documentation for any changes.
- Submit a pull request.


## Getting started

### Installation

- Create a directory name `flatsheet` for your project (or whatever you like)
- Change directory `cd flatsheet`
- Create a package.json file with `npm init`
- Install flatsheet-server with npm: `npm install flatsheet-server --save`
- Install the response module: `npm install response --save`

### File/folder setup
- Create a folder named `data`: `mkdir data`
- Create a server.js file with this code:

```
var response = require('response');
var server = require('flatsheet-server')({
  site: {
    title: 'flatsheet',
    email: 'hi@example.com',
    url: 'http://127.0.0.1:3333',
    contact: 'your full name'
  },
  db: __dirname + '/data/db'
});

server.route('/', function (req, res) {
  if (!res.account) {
    return response()
      .html(server.render('index', {
        account: { username: 'friend' }
      }))
      .pipe(res);
  }
  else {
    res.writeHead(302, { 'Location': '/sheet/list' });
    res.end();
  }
});

server.listen((process.env.PORT || 3333), function () {
  console.log('server started at 127.0.0.1:' + (process.env.PORT || 3333));
});
```

- Create a .env file for secret config like sendgrid username/password:

```
SENDGRID_USER=yourusername
SENDGRID_PASS=yourpassword
```

- Add a `flatsheet` script and a `start` script to the `scripts` field in your package.json file:

```
"scripts": {
  "flatsheet": "flatsheet",
  "start": "node server.js"
},
```

### Create an admin user
- Create an admin account by running `npm run flatsheet account create-admin`. You'll be prompted for email, username, & password.
- You can run `npm run flatsheet account list` to see that your admin account was created.

### Start the server
- Now run `npm start` to start the server.
- In development you can watch the css & js using `npm run watch`.
- Go to `http://127.0.0.1:3333` and log in with the admin account credentials.

### Create a sheet

#### Through the UI
- Log in
- Click the **New blank sheet** button

### Invite users
- Navigate to `http://127.0.0.1:3333/account/invite`
- Enter email addresses, one address per line
- Click "Send invitation"
- Users will receive an email with a link they can click to create accounts

## Support

This project is supported in part by a [code sprint grant from OpenNews](http://opennews.org/codesprints.html).

More info [at the Flatsheet blog](http://flatsheet.io/blog/getting-flatsheet-to-v1-with-help-from-opennews/).

## License
MIT
