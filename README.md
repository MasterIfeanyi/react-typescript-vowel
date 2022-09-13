# Getting Started

This project was created as a self-motivated self project

Technologies: `react` `javascript` `bootstrap`

## Deploy

Click the link [vowel-counter](https://ifeanyi-vowel-counter.netlify.app) to view it in the browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Issues


#### 1. Bootstrap

I ran into an issue with `bootstrap v5.1.3`, here is the error message

```javascript
autoprefixer: Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated.
```

**solution**

I found a solution on stackoverflow [here](https://stackoverflow.com/a/72980092/17171424)

A github discussion [here](https://github.com/twbs/bootstrap/issues/36259#issuecomment-1119095459)


#### 2. writing tests

I wanted to simulate user typing on input with `userEvent.change`

**solution**

instead of `change` use `userEvent.type`


[stackoverflow](https://stackoverflow.com/a/72124281/17171424)


#### 3. npm errorConn

I was not able to use `creact-react-app` to initialize a react project

```javascript
npm ERR! code ECONNRESET
npm ERR! syscall read
npm ERR! errno ECONNRESET
npm ERR! network request to https://registry.npmjs.org/discord.js/-/discord.js-13.1.0.tgz failed, reason: read ECONNRESET
npm ERR! network This is a problem related to network connectivity.
npm ERR! network In most cases you are behind a proxy or have bad network settings.
npm ERR! network
npm ERR! network If you are behind a proxy, please make sure that the
npm ERR! network 'proxy' config is set properly.  See: 'npm help config'

npm ERR! A complete log of this run can be found in:

```

**solution**

I found a solution on stackoverflow [here](https://stackoverflow.com/a/68870880/17171424)

#### 4. VS code error

I got this error from VS code 

``File node_modules/@types/react/jsx-runtime.d.ts' is not a module.``

**solution**

I found a solution on stackoverflow [here](https://stackoverflow.com/a/73284349/17171424)