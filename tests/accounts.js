// This are the tests on accounts that need to happen

var test = require('tape')
var level = require('level')

var db = level(__dirname + '/data/accounts', { valueEncoding: 'json' })

test('get list of accounts', function (t) {
  t.end;
});


test('sign-in', function (t) {
  t.end;
});

test('create an admin account (admin only)', function (t) {
  t.end;
})

test('create an account', function (t) {
  t.end;
})

test('delete an account (admin only)', function (t) {
  t.end;
})

test('update an account', function (t) {
  t.end;
})

test('reset password', function (t) {
  t.end;
})

test('Accept reset password email', function (t) {
  t.end;
})

test('Invite users to create accounts', function (t) {
  t.end;
})

test('Accept invitation to create account', function (t) {
  t.end;
})


// // CHECK remove temp db
// test('teardown', function (t) {
//   accounts.list(function (err, list) {
//     t.notOk(err)
//     t.ok(list)
//
//     function iterator (account, i, next) {
//       accounts.destroy(account.key, function (err) {
//         t.notOk(err)
//         next()
//       })
//     }
//
//     function end () {
//       t.end()
//     }
//   })
// })
