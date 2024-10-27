import userData from '../fixtures/user-Data.json';
import LoginPage from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPage.js';
import MenuPage from '../pages/menuPage.js';
import MyInfoPage from '../pages/myInfoPage.js';

const Chance = require('chance');

var chance = new Chance();

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe('Orange HRM Tests', () => {

const selectorsList = {   
}

it('User Info Update - Seccess', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
  
  dashboardPage.checkDashboardPage()

  menuPage.accessMyInfo()  

  myInfoPage.fillPersonalDetails(chance.first(), chance.string(), chance.last())
  myInfoPage.fillEmployDetails('EmployeeID', 'OtherID', 'driversLicense', '2025-07-29')
  myInfoPage.fillStatus()
  myInfoPage.saveForm()
  })
  
})