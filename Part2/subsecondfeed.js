function subSecondFeed(callback) {
    var user = TEST_USERS[0];
    frisby.create('PUT Add second feed sub for user ' + user.email)
        .put(tc.url + '/feeds/subscribe',
            { 'feedURL': nycEaterFeedURL })
        .auth(user.sp_api_key_id, user.sp_api_key_secret)
        .expectStatus(201)
        .expectHeader('Content-Type', 'application/json; charset=utf-8')
        .expectJSONLength('user.subs', 2)
        .toss()
    callback(null);
}