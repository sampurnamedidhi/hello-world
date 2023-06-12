TEST_USERS.forEach(function createUser(user, index, array) {
    frisby.create('POST enroll user ' + user.email)
        .post(tc.url + '/user/enroll',
            {
                'firstName': user.fn,
                'lastName': user.ln,
                'email': user.email,
                'password': user.pwd
            })
        .expectStatus(201)
        .expectHeader('Content-Type', 'application/json; charset=utf-8')
        .expectJSON({
            'firstName': user.fn,
            'lastName': user.ln,
            'email': user.email
        })
        .toss()
});