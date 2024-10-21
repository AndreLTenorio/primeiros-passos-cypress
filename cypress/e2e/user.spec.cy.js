describe('Orange HRM Tests', () => {

const selectorsList = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: "[type='submit']",
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  wrongCredentialAlert: "[role='alert']",
  myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
  firstNameField: "[name='firstName']",
  middleNameField: "[name='middleName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active",
  dateField: "[placeholder='yyy-mm-dd']",
  dateCloseButton: ".--close",
  submitButton: "[type='submit']",
}


  it.only('User Info Update - Secess', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Andre')
    cy.get(selectorsList.middleNameField).clear().type('Luiz')
    cy.get(selectorsList.lastNameField).clear().type('Tenorio')
    cy.get(selectorsList.genericField).eq(3).clear().type('123456789')
    cy.get(selectorsList.genericField).eq(4).clear().type('102030')
    cy.get(selectorsList.genericField).eq(5).clear().type('1415161718')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-02-07')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })
  it('Login  - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Teste')
    cy.get(selectorsList.passwordField).type('Teste')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert).contains('Invalid credentials')
    
  })
})