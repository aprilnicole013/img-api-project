File Structure

|-- img-api-project
    |-- .eslintrc
    |-- .gitignore
    |-- .prettierrc
    |-- ReadMe.md
    |-- package-lock.json
    |-- package.json
    |-- tsconfig.json
    |-- assets
    |   |-- full
    |   |   |-- encenadaport.jpg
    |   |   |-- fjord.jpg
    |   |   |-- icelandwaterfall.jpg
    |   |   |-- palmtunnel.jpg
    |   |   |-- santamonica.jpg
    |   |-- thumbs
    |-- spec
    |   |-- support
    |       |-- jasmine.json
    |-- src
        |-- index.ts
        |-- middleware
        |   |-- imageValidator.ts
        |-- operations
        |   |-- resizeImage.ts
        |-- routes
        |   |-- help.ts
        |   |-- images.ts
        |-- tests
            |-- endpointSpec.ts
            |-- imagesSpec.ts
            |-- helpers
                |-- reporter.ts


##Environment Dependencies

1. Install Node modules
npm install

2. Install Prettier
npm i --save-dev prettier

3. Install ESLint
npm i --save-dev eslint

3. Install ESLint Config Prettier and Plugin
npm i --save-dev eslint-config-prettier
npm i --save-dev eslint-plugin-prettier

4. Install TypeScript, ts-node and @types/node
npm i --save-dev typescript
npm i --save-dev ts-node 
npm i --save-dev @types/node

5. Install Jasmine, terminal reporter, and type definitions
npm i jasmine 
npm i jasmine-spec-reporter
npm i --save-dev @types/jasmine

6. Install Supertest for endpoint testing
npm i supertest
npm i --save-dev @types/supertest

7. Install Express and type express(Typescript support for express)
npm i express
npm i --save-dev @types/express

8. Install nodemon
npm i --save-dev nodemon

9. Install Sharp for image resizing
npm install sharp

10. Install Jimp for additional image resizing
npm install --save jimp


##Build and start the server

###Run the Build - This command will build the typeScript code into JavaScript and save them in the ./build folder.
npm run build

###Start the server on configured port: http://localhost:3000/api
npm run start

###Run ESLint
npm run lint

###Run Jasmine and Supertest
npm run test
