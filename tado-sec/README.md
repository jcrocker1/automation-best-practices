# Testing with WebdriverIO on Sauce

## 🧠You will learn

✅sauce labs dashboard

✅functional ui tests with WebdriverIO

✅how to run tests in sauce labs ci grid

✅how to run tests against a local build

✅how to run tests cross-browser and cross-platform

## 🔧Technologies you will use

1. ReactJS
2. WebdriverIO v7 async
3. Sauce Labs
4. Sauce Connect
5. Node.JS

## Table Of Contents

- [E2E UI testing w/ Cypress](./my-react-app/docs/E2E-TESTS.md)
- [CICD](./my-react-app/docs/CICD.md)
- [Visual e2e tesing](./my-react-app/docs/VISUAL.md)
- [Component testing](./my-react-app/docs/COMPONENT-TESTS.md)
- [Conclusions](./my-react-app/docs/CONCLUSIONS.md)

## Prerequisites

- Node.JS installed
- Sauce Labs account
- Basic understanding of JavaScript
- Your favorite IDE

## Key

💡 this is a tip

🏋️‍♀️ this is an exercise for you to do

❓ this is a question for us to think and talk about. Try not to scroll beyond this question before we discuss

## Your Instructor: Nikolay Advolodkin

<img src="./../graphics/me-and-mia.jpg" alt="me" width="150"/>

- 🏢 I’m a Sr Solutions Architect at Sauce Labs
- 🔭 I’m the founder of [Ultimate QA](https://ultimateqa.com/)
- 🌱 I’m currently working on [Sauce Bindings](https://github.com/saucelabs/sauce_bindings)
- 💬 Ask me about environmentalism, veganism, test automation, and fitness
- 😄 Pronouns: he/him
- ⚡ Fun fact: I'm a vegan that's super pasionate about saving the planet, saving animals, and helping underpriveleged communities
- 📫 Follow me for testing and dev training
  - [JS Testing Newsletter](https://ultimateqa.ck.page/js-testing-tips)
  - [Youtube](https://youtube.com/ultimateqa)
  - [LinkedIn](https://www.linkedin.com/in/nikolayadvolodkin/)
  - [Twitter](https://twitter.com/Nikolay_A00)

## ⚙️ Setup

### 1. Install Node 14 LTS

Please follow your organizations installation instructions

### 2.Clone this repo

```bash
git clone https://github.com/saucelabs-training/automation-best-practices
```

4. **Navigate to the directory of where you cloned your repo**

`cd YOUR_FORK_DIR/automation-best-practices/testing-for-charity`

### 3.Install the app

```bash
cd tado-sec/my-react-app
npm install && npm start
```

<br/>
<details>
  <summary>
    <strong>Click here</strong> to see an example output.
  </summary>

  <code>

    Compiled successfully!

    You can now view my-react-app in the browser.

      Local:            http://localhost:3000
      On Your Network:  http://172.20.10.2:3000

    Note that the development build is not optimized.
    To create a production build, use npm run build.

  </code>
</details>

<br/><br/>

**Don't worry about fixing any warnings that may appear during `npm install`**

Once the app is running, kill the server by executing `Ctrl + C` in command line. We don't need the app running right now.

### 4.Have an IDE installed that can handle NodeJS/JS (We will use [VSCode](https://code.visualstudio.com/Download))

### 5.Set Your Sauce Labs Credentials

> It's a best practice to store environment variables in your
> system environment variables follow instructions 👇

- [MacOS/Linux](https://docs.saucelabs.com/basics/environment-variables/#setting-up-environment-variables-on-macos-and-linux-systems)
- [Windows](https://docs.saucelabs.com/basics/environment-variables/#setting-up-environment-variables-on-windows-systems)

### 6. Run tests

```bash
cd tado-sec/my-react-app
npm run test.sanity
```

<br/>
<details>
  <summary>
    <strong>Click here</strong> to see an example output.
  </summary>

  <code>

    wdio run test/configs/wdio.sanity.conf.js

    Execution of 1 workers started at 2022-01-28T19:20:01.341Z

    [0-0] RUNNING in chrome - /test/specs/sanity.spec.js
    [0-0] PASSED in chrome - /test/specs/sanity.spec.js

  </code>
</details>

<br/><br/>

#### ✅👏Congratulations, your environment is ready!
