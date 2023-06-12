function getApplication(callback) {
    console.log("getApplication");
    client.getApplications({
        name: SP_APP_NAME
    }, function (err, applications) {
        console.log(applications);
        if (err) {
            log("Error in getApplications");
            throw err;
        }
        app = applications.items[0];
        callback(0);
    });
},
function deleteTestAccounts(callback) {
    app.getAccounts({
        email: TU_EMAIL_REGEX
    }, function (err, accounts) {
        if (err) throw err;
        accounts.items.forEach(function deleteAccount(account) {
            account.delete(function deleteError(err) {
                if (err) throw err;
            });
        });
        callback(0);
    });
}