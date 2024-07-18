describe('Lunch Application', () => {
  it('Naviating to test application', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')

      //login with invalid credential
      cy.get("input[name='username']").type('Patene')
      cy.get("input[name='password']").type('Pat@222')
      cy.get("input[type='submit']").click()

      //validating error invalid credential login message
      cy.get('.error').should('have.text','The username and password could not be verified.')
  })
        
  })