# roman-numeral
A simple http server that converts provided int to roman numeral

## How to build and run
```
npm install
npm start
curl localhost:8080/romannumeral?query=123
```

## Testing
Tests are articulated for
1. Positive integer validation (validate.test.js)
2. Testing `convertToRoman` (convert-to-roman.test.js)
```
npm run test
```
## Packaging layout
```
├── index.js
├── functions
│   ├── convert-to-roman.js
│   ├── convert-to-roman.test.js
│   ├── validate.js
│   ├── validate.test.js
├── package.json
├── package-lock.json
├── README.md
```

## Dependency attribution
- nodemon
- jest
- express