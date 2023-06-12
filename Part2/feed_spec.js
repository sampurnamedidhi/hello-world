TEST_USERS = require('/tmp/readerTestCreds.js');
var frisby = require('frisby');
var tc = require('./config/test_config');
var async = require('async');
var dbConfig = require('./config/db.js');</p>
var dilbertFeedURL = 'http://feeds.feedburner.com/DilbertDailyStrip';
var nycEaterFeedURL = 'http://feeds.feedburner.com/eater/nyc';