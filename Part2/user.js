function dropUserCollection(callback) {
    console.log("dropUserCollection");
    user = reader_test_db.collection('user');
    if (undefined != user) {
        user.drop(function (err, reply) {
            console.log('user collection dropped');
            callback(0);
        });
    } else {
        callback(0);
    }
}