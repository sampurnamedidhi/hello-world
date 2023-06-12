function dropUserFeedEntryCollection(callback) {
    console.log("dropUserFeedEntryCollection");
    user_feed_entry = reader_test_db.collection('user_feed_entry');
    if (undefined != user_feed_entry) {
        user_feed_entry.drop(function (err, reply) {
            console.log('user_feed_entry collection dropped');
            callback(0);
        });
    } else {
        callback(0);
    }
}