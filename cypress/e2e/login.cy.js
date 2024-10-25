import userData from '../fixtures/user-Data.json';
import LoginPage from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPage.js';
import MenuPage from '../pages/menuPage.js';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();

describe('Orange HRM Tests', () => {

const selectorsList = {
  
  firstNameField: "[name='firstName']",
  middleNameField: "[name='middleName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active",
  genericComboBox: ".oxd-select-text--arrow",
  secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
  thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
  dateField: "[placeholder='yyy-mm-dd']",
  dateCloseButton: ".--close",
  submitButton: ".orangehrm-left-space",
}

it.only('User Info Update - Seccess', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
  
  dashboardPage.checkDashboardPage()

  menuPage.accessMyInfo()
  
  cy.get(selectorsList.firstNameField).clear().type('Andre')
  cy.get(selectorsList.middleNameField).clear().type('Luiz')
  cy.get(selectorsList.lastNameField).clear().type('Tenorio')
  cy.get(selectorsList.genericField).eq(3).clear().type('123456789')
  cy.get(selectorsList.genericField).eq(4).clear().type('102030')
  cy.get(selectorsList.genericField).eq(5).clear().type('1415161718')
  cy.get(selectorsList.genericField).eq(6).clear().type('2025-02-07')
  cy.get(selectorsList.dateCloseButton).click()
  cy.get(selectorsList.genericComboBox).eq(0).click({ force: true})
  cy.get(selectorsList.secondItemCombobox).click()
  // cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
  // cy.get('.oxd-select-dropdown').contains('American').click()
  cy.get(selectorsList.genericComboBox).eq(1).click({ force: true})
  cy.get(selectorsList.thirdItemCombobox).click()
  cy.get(selectorsList.submitButton).eq(0).click({ force: true})
  cy.get('.oxd-toast-close')
  })
it('Login  - Fail', () => {
  cy.visit('/auth/login')
  cy.get(selectorsList.usernameField).type(userData.userFail.username)
  cy.get(selectorsList.passwordField).type(userData.userFail.password)
  cy.get(selectorsList.loginButton).click()
  cy.get(selectorsList.wrongCredentialAlert)
    
  })
})