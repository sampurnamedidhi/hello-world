frisby.create('POST password missing lowercase')
    .post(tc.url + '/user/enroll',
        {
            'firstName': TU1_FN,
            'lastName': TU1_LN,
            'email': TU1_EMAIL,
            'password': 'TESTUSER123'
        })
    .expectStatus(400)
    .expectHeader('Content-Type', 'application/json; charset=utf-8')
    .expectJSONTypes({ 'error': String })
    .toss()