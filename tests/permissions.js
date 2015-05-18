// Tests on permissions that need to happen

var test = require('tape')
var level = require('level')

/* Admin */

test('admin can edit sheets of other users', function (t) {
  t.end;
});


test('admin can destroy sheets', function (t) {
  t.end;
});

/* Editor */

test('editor can not edit sheet that do not own', function (t) {
  t.end;
});

/* Owner */

test('owner can destroy its own sheet', function (t) {
  t.end;
});


/* User administration */

test('admin or owner can add other users to a sheet', function (t) {
  t.end;
});

test('editor can not add users to a sheet', function (t) {
  t.end;
});
