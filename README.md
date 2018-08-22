### Tech

* [node.js](https://nodejs.org/en/)
* [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [webdriverIO](http://webdriver.io) - test runner
* [mocha](https://mochajs.org/) -  test framework running on Node.js and in the browser
* [chai](https://mochajs.org/) -  BDD / TDD assertion library
* [selenium_standalone_server](http://www.seleniumhq.org/download/)

### Prerequisites

You will need to have Node.js installed (using npm package), and JDK.


### Setup

Download latest selenium standalone server
```sh
$ curl -O http://selenium-release.storage.googleapis.com/3.0/selenium-server-standalone-3.0.1.jar
```

Download the latest version geckodriver for your environment and unpack it in your project directory
```sh
$ curl -L https://github.com/mozilla/geckodriver/releases/download/v0.11.1/geckodriver-v0.11.1-linux64.tar.gz | tar xz
```

Download WebdriverIO
```sh
$ npm install webdriverio
```

And agree with next settings:
- Q: Where do you want to execute your tests?
A: On my local machine

- Q: Which framework do you want to use?
A: mocha

- Q: Shall I install the framework adapter for you?
A: Yes (just press enter)

- Q: Where are your test specs located?
A: ./test/specs/*/.js (just press enter)

- Q: Which reporter do you want to use?
A: dot (just press space and enter)

- Q: Shall I install the reporter library for you?
A: Yes (just press enter)

- Q: Do you want to add a service to your test setup?
A: none (just press enter, lets skip this for simplicity)

- Q: Level of logging verbosity:
A: silent (just press enter)

- Q: In which directory should screenshots gets saved if a command fails?
A: ./errorShots/ (just press enter)


### Run tests

Go to project directory  and run two command line, which write down in scripts of package.json.

First Tab:
```sh
$ npm run driver
```
Second Tab:
```sh
$ npm run test
```

If you want run one suite of test, use command from package.json and suite name from wdio.conf.js:
```sh
$ npm run suite login
```

### P.S.
You can use selenium-standalone instead of the standalone jar-file.
Install selenium-standalone globally
```sh
$ npm install selenium-standalone@latest -g
$ selenium-standalone install
```
Run selenium-standalone
```sh
$ selenium-standalone start
```
