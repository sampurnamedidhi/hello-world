frisby.create('POST invalid email address')
    .post(tc.url + '/user/enroll',
        {
            'firstName': TU1_FN,
            'lastName': TU1_LN,
            'email': "invalid.email",
            'password': 'testUser'
        })
    .expectStatus(400)
    .expectHeader('Content-Type', 'application/json; charset=utf-8')
    .expectJSONTypes({ 'error': String })
    .toss()