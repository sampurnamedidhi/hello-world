frisby.create('POST missing firstName')
    .post(tc.url + '/user/enroll',
        {
            'lastName': TU1_LN,
            'email': TU1_EMAIL,
            'password': TU1_PW
        })
    .expectStatus(400)
    .expectHeader('Content-Type', 'application/json; charset=utf-8')
    .expectJSON({ 'error': 'Undefined First Name' })
    .toss()