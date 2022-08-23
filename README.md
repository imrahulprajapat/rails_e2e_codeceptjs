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




