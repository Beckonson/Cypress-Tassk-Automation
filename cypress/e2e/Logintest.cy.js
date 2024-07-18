describe('Lunch Application', () => {
    // add to before()
  it('Naviating to test application', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')

      //Login with valid credential
      cy.get("input[name='username']").type('Patene')
      cy.get("input[name='password']").type('Pat@123')
      cy.get("input[type='submit']").click()

      //validating a successful login 
      cy.get('#showOverview > .title').should('be.visible', 'Accounts Overview')
      cy.getAllCookies
  })
        
  })