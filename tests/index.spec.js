#!/usr/bin/env node

'use strict'

var config = require('../')
var eslint = require('eslint')
var test = require('tape')

function isObject (obj) {
  return typeof obj === 'object' && obj !== null
}

test('test properties of config', function (t) {
  t.ok(isObject(config.parserOptions), 'should be truthy - config has parserOptions')
  t.ok(isObject(config.ecmaFeatures), 'should be truthy - config has ecmaFeatures')
  t.ok(isObject(config.env), 'should be truthy - config has env')
  t.ok(isObject(config.plugins), 'should be truthy - config has plugins')
  t.ok(isObject(config.rules), 'should be truthy - config has rules')
  t.end()
})
