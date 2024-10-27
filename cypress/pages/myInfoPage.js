class MyInfoPage {

    selectorsList() {
        const selectors = {
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

        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployDetails(employeeId, otherId, driversLicense, driversLicenseDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true})
        cy.get('.oxd-toast-close')
    }

    fillStatus() {
        cy.get(this.selectorsList().genericComboBox).eq(0).click({ force: true})
        cy.get(this.selectorsList().secondItemCombobox).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click({ force: true})
        cy.get(this.selectorsList().thirdItemCombobox).click()
    }

}

export default MyInfoPage;