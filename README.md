# if-your-friends-don't-want-TypeScript
If your friends don't want TypeScript, then just code in TypeScript, but delivery JavaScript to them.

## Usage
### `yarn start`

Start the dev server and code in `./src` using TypeScript, just in the same way you do in a normal TypeScript project

### `yarn transpile`

JavaScript code base transpiled from the TypeScript code base will be put under `./src-js` 

### `yarn start:src-js` 

Run the JavaScript code on its own without anything in `./src`, and make sure this JavaScript code base can work as expected

And because these two code bases works on the same webpack config, all the changes you do to webpack config when you develop in TypeScript will also be applied to JavaScript code base as well

### `yarn clean`

***It's highly recommended that all files have been tracked by git before running this***

All TypeScript related files will be removed

And `./src-js` will be renamed to `./src`, so that you friend can use `yarn start` to start dev server and develop on JavaScript code base