var test = require('tape')
var level = require('level')
var each = require('each-async')

var db = level(__dirname + '/../tmp/sheets', { valueEncoding: 'json' })
var sheets = require('../models/sheets')(db)

test('create sheets', function (t) {
  var data = require('./data/sample.js')
  each(data, iterator, end)

  function iterator (sheet, i, done) {
    sheets.create(sheet, function (err, sheet) {
      t.notOk(err, 'no errors')
      t.ok(sheet, 'it was created succesful')
      done()
    })
  }

  function end () {
    t.end()
  }
})

test('get sheets by owners index', function (t) {
  sheets.list({filter: {owners: 'pizzamaker'}}, function (err, list) {
    t.notOk(err, 'no errors')
    t.ok(list, 'got the list by owners')
    t.equal(1, list.length, 'only one in the list')
    t.end()
  })
})

test('get sheets by editors index', function (t) {
  sheets.list({filter: {editors: 'eater'}}, function (err, list) {
    t.notOk(err, 'no errors')
    t.ok(list, 'got the list by editors')
    t.equal(4, list.length, 'only four')
    t.end()
  })
})

test('get sheets by categories index', function (t) {
  sheets.list({filter: {categories: 'drink'}}, function (err, list) {
    t.notOk(err, 'no errors')
    t.ok(list, 'got the list by category')
    t.equal(1, list.length, 'only one')
    t.end()
  })
})

test('get sheets by project index', function (t) {
  sheets.list({filter: {project: 'awesome'}}, function (err, list) {
    t.notOk(err, 'no error')
    t.ok(list, 'got the list by project')
    t.equal(3, list.length, 'only three')
    t.end()
  })
})

test('get sheets by private index', function (t) {
  sheets.list({filter: {private: true}}, function (err, list) {
    t.notOk(err, 'no errors')
    t.ok(list, 'got the list')
    t.equal(4, list.length, 'only four')
    t.end()
  })
})

test('get sheets by accessible index', function (t) {
  sheets.list({filter: {accessible: 'pizzamaker'}}, function (err, list) {
    t.notOk(err, 'no errors')
    t.ok(list, 'got the list')
    t.equal(2, list.length, 'only two')
    t.end()
  })
})

test('teardown', function (t) {
  sheets.list(function (err, list) {
    t.notOk(err)
    t.ok(list)

    function iterator (sheet, i, next) {
      sheets.destroy(sheet.key, function (err) {
        t.notOk(err)
        next()
      })
    }

    function end () {
      t.end()
    }

    each(list, iterator, end)
  })
})
