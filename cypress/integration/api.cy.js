describe('API', () => {

    before(() => Cypress.config('baseUrl', 'https://reqres.in/api/'))

    it('should get users', () => {
        cy.request({
            method: 'GET',
            url: '/users'
        }).then( response => {
            expect(response.status).to.eq(200)
            expect(response.body.data).to.have.length(6)
        })

    });

    it('should create an user', () => {
        cy.request({
            method: 'POST',
            url: '/users',
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then(response => {
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq('morpheus')
            assert.isString(response.body.id)
        });
    });

    it('should update an user', () => {
            cy.request({
                method: 'PUT',
                url: '/users/2',
                body: {
                    "name": "morpheus",
                    "job": "zion resident"
                }
            }).then(response => {
                expect(response.status).to.eq(200)
                expect(response.body.job).to.eq('zion resident')
            });
        });

        it('should delete an user', () => {
            cy.request({
                method: 'DELETE',
                url: '/users/2',

            }).then(response => {
                expect(response.status).to.eq(204)
            })
        });

});
