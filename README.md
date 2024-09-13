<p align="center">
  <img src="[https://nestjs.com/img/logo-small.svg](https://avatars.githubusercontent.com/u/54646432?s=148&v=4)" width="148" alt="Nest Logo" />
</p>

Here's a sample `README.md` for your GitHub repository:
---
## Features

- **AI-Driven Testing**: Leveraging AI tools for automated testing and intelligent test case generation.
- **CodeceptJS Integration**: Simplified web testing with CodeceptJS framework for end-to-end testing.
- **Cross-Browser Compatibility**: Execute tests across different web browsers to ensure cross-browser functionality.
- **Test Scenarios**: Includes pre-configured test scenarios for basic interactions like login, form submissions, navigation, and more.
- **Scalable**: Add and scale test cases easily for large applications.
  
### First, I will show you how setup this project from https://codecept.io
## Create a codeceptjs project
```bash
npx create-codeceptjs . // create project
npx codeceptjs init // create main config file: codecept.conf.js
```

## Setup AI-Tesing
```bash
ai: { // Add this property to use ai plugin
    request: async (messages) => {
      const Groq = require("groq-sdk");
      const groq = new Groq({ apiKey: process.env.AI_API_KEY }); // using .env to protect your api_key

      const chatCompletion = await groq.chat.completions.create({
        messages,
        model: "mixtral-8x7b-32768", // Ensure the model is correct
      });

      return chatCompletion.choices[0]?.message?.content || "";
    },
  },
```

## Improve your security by using dotenv
```bash
npm install dotenv
// require dotenv at codeceptjs.conf.js module to use
require('dotenv').config();
```

## In your test file, include pause() method to ask AI
```bash
// search_test.js
Feature('search');

Scenario('test something',  ({ I }) => {
    I.amOnPage('https://www.google.com');
    pause(); // you must pause the process to see the browser

    // write your test case in terminal
});

```
### Alternative, you can clone my repository below:

# swt_codeceptjs_ai_testing

This repository is a template for automating web testing using **CodeceptJS** and **AI Testing**. The goal of this project is to integrate intelligent testing practices into a web application's testing workflow, allowing for efficient and reliable end-to-end testing.


## Getting Started

### Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js**: >= 12.x
- **CodeceptJS**: Latest version
- **Playwright** (or your preferred browser automation tool)
- **AI Test Library**: Optional library for AI-driven testing

### Installation

Clone the repository:

```bash
git clone https://github.com/klong-dev/swt_codeceptjs_ai_testing.git
cd swt_codeceptjs_ai_testing
```

Install the dependencies:

```bash
npm install
```

### Configuration

The configuration for the tests is located in `codecept.conf.js`. You can customize the following options:

- **Browser**: Set the browser (Chromium, Firefox, WebKit).
- **Base URL**: The base URL for the web application you want to test.
- **AI Testing**: Enable AI-driven test generation if applicable.

### Running Tests

To run the tests, use the following command:

```bash
npx codeceptjs run --ai
```

This will execute the predefined test scenarios with step-by-step output.

## Project Structure

- **tests/**: Contains all the test cases.
- **ai.config.js**: AI-driven test configuration file.
- **codecept.conf.js**: Main configuration for CodeceptJS.
- **output/**: Test output and reports.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or issues to improve this project.


Let me know if you need further customization for your project!
