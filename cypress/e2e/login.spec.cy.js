import userData from '../fixtures/user-Data.json';
import LoginPage from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPage.js';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe('Login Orange HRM Tests', () => {

  it('Login - Fail', () => {
    loginPage.accessLoginPage(); 
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password) 
    loginPage.checkAccessInvalid()
  })
  it('Login - Success', () => {
    loginPage.accessLoginPage(); 
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password) 
    dashboardPage.checkDashboardPage()
  })
  
})