function subOneFeedSecondUser(callback) {
    var user = TEST_USERS[1];
    frisby.create('PUT Add one feed sub for second user ' + user.email)
        .put(tc.url + '/feeds/subscribe',
            { 'feedURL': nycEaterFeedURL })
        .auth(user.sp_api_key_id, user.sp_api_key_secret)
        .expectStatus(201)
        .expectHeader('Content-Type', 'application/json; charset=utf-8')
        .expectJSONLength('user.subs', 1)
        .toss()
    callback(null);
}
async.series([addEmptyFeedListTest, subOneFeed, subDuplicateFeed, subSecondFeed, subOneFeedSecondUser]);