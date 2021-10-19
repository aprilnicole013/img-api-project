# Image Processing API

## Introduction
This project is an image processing API. Four images can be queried and resized within the browser. To access the images, navigate to localhost:3000/api and enter the valid parameters to see the image resized in the browser. Once the image is resized, a copy will be pushed to the thumbs folder in your local directory.

## Installations

1. Install Node modules<br/>
npm install<br/>

2. Install Prettier<br/>
npm i --save-dev prettier<br/>

3. Install ESLint<br/>
npm i --save-dev eslint<br/>

3. Install ESLint Config Prettier and Plugin<br/>
npm i --save-dev eslint-config-prettier<br/>
npm i --save-dev eslint-plugin-prettier<br/>

4. Install TypeScript, ts-node and @types/node
npm i --save-dev typescript<br/>
npm i --save-dev ts-node<br/>
npm i --save-dev @types/node<br/>

5. Install Jasmine, terminal reporter, and type definitions<br/>
npm i jasmine<br/>
npm i jasmine-spec-reporter<br/>
npm i --save-dev @types/jasmine<br/>

6. Install Supertest for endpoint testing<br/>
npm i supertest<br/>
npm i --save-dev @types/supertest<br/>

7. Install Express and type express(Typescript support for express)<br/>
npm i express<br/>
npm i --save-dev @types/express<br/>

8. Install nodemon<br/>
npm i --save-dev nodemon<br/>

9. Install Sharp for image resizing<br/>
npm install sharp<br/>

10. Install Jimp for additional image resizing<br/>
npm install --save jimp<br/>

## Build and start the server

Run the Build - This command will build the typeScript code into JavaScript and save them in the ./build folder:<br/>
```npm run build```

Start the server on configured port: http://localhost:3000/api<br/>
```npm run start```

Run ESLint:<br/>
```npm run lint```

Run Jasmine and Supertest:<br/>
```npm run test```
