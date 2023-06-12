﻿function subOneFeed(callback) {
    var user = TEST_USERS[0];
    frisby.create('PUT Add feed sub for user ' + user.email)
        .put(tc.url + '/feeds/subscribe', { 'feedURL': dilbertFeedURL })
        .auth(user.sp_api_key_id, user.sp_api_key_secret)
        .expectStatus(201)
        .expectHeader('Content-Type', 'application/json; charset=utf-8')
        .expectJSONLength('user.subs', 1)
        .toss()
    callback(null);
}