# README

The main objective of this repo to learn how to configure **e2e** test case using [CodeCeptjs](https://codecept.io/basics/) with **RubyonRails** application.

Things you may want to cover:

* Ruby version
	ruby-3.0.0
* System dependencies

* Configuration
```
bundle install
```

* Database creation
```
rake db:create & rake db:migrate
```

* How to run the test suite
```
yarn run test
```
## To Integrate e2e test with codeceptjs
1) create a folder in root app directory named _spec_ (if you already cover unit test then skip this step)
2) create folder _e2e_ inside _spec_ folder
3) then go to e2e directory cd spec/e2e
4) then run npm init
5) then yarn init
6) run npm install -g codeceptjs-webdriverio
7) run codeceptjs init
8) run  npm install -g puppeteer
9) then update your codecept.conf.js file accordingly
10) add feature test and run it.

## To Integrate BDD with cucumber
```
 mkdir bdd 
``` 
better to keep this in seperate folder inside spec


* Use cd to go into that directory.  If you want to, you can open the directory up in your favourite text exitor at this point.
```
cd bdd
```

* First we’ll add ***Cucumber*** and  ***RSpec-Expectations*** in Gemfile

* Now go back to the command-line  and run bundle install to install those gems.
```
 bundle install
 ```
 
* Now we’re ready! If we run cucumber at this point , we’ll see it’s telling us to create a features directory.
```
bundle exec cucumber
```
* No such file or directory - features. You can use `cucumber --init` to get started.
Good, we’ve installed Cucumber.

* As instructed, we can use the cucumber --init command to create the conventional folder structure for our Gherkin specifications and the code that will let Cucumber test them:
```
 cucumber --init
```

* Now we’re ready to create our first feature file.
```
bundle exec cucumber
```
0 scenarios
0 steps
0m0.000s



