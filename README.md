

---

# My Cypress Automation

This project uses **Cypress** to automate the testing of a login feature and a user update feature. **Cypress** is a JavaScript-based end-to-end testing framework that allows developers to write and execute tests in a real browser, providing a more realistic testing experience.

## Automated Features

- **Login:** Validates user authentication with different success and error scenarios.
- **User Update:** Tests profile update functionality, including field validation and successful form submission.

## Requirements

- **Node.js:** Make sure Node.js is installed on your system. If not, you can download and install it from the [official Node.js website](https://nodejs.org/).

## Installation

To set up and install the project locally, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/my-cypress-automation.git
   ```

2. Navigate to the project directory:
   ```bash
   cd my-cypress-automation
   ```

3. Install the project dependencies:
   ```bash
   npm install
   ```

## Running the Tests

You can run the tests in two different ways:

### 1. Open the Cypress User Interface (UI)
The graphical interface makes it easier to view and run tests directly in the browser:

```bash
npx cypress open
```

### 2. Run the tests from the command line
To run the tests directly in the terminal:

```bash
npx cypress run
```

## Project Structure

- **cypress/integration:** Contains the test files for the automated features.
- **cypress/fixtures:** Stores reusable test data for automations.
- **cypress/support:** Contains custom commands and global test configurations.

## Contributing

If you want to contribute improvements or new features, feel free to open a pull request or report issues in the **Issues** section.

---
