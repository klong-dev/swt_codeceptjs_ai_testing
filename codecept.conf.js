const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
require('dotenv').config();

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

console.log(process.env.AI_API_KEY);

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://nestjs.com',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'demo',
  ai: { // Add this property to use ai plugin
    request: async (messages) => {
      const Groq = require("groq-sdk");
      const groq = new Groq({ apiKey: process.env.AI_API_KEY });

      const chatCompletion = await groq.chat.completions.create({
        messages,
        model: "mixtral-8x7b-32768", // Ensure the model is correct
      });

      return chatCompletion.choices[0]?.message?.content || "";
    },
  },
}