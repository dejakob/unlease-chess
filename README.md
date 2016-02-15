# unlease-chess
Unlease chess job application, check out the task [here](task.md)
While making the task, I already got hired at [tsjing](http://tsjing.eu),
but wanted to finish it anyhow to have more experience with ReactJS, JEST, Flux, etc.

## How to execute
* Clone the repo
```
git clone https://github.com/dejakob/unlease-chess.git
```
* Open index.html into your browser

## How to build
```
npm install
gulp
```

## Run unit tests (Jest)
```
npm test
```

## Issues I ran into
### Jest + ES2015
I had a lot of issues to run jest in combination with ES2015 classes.
I found one workaround to unmock files: https://github.com/babel/babel-jest/issues/16 (See the files in spec/unmock).
I had more issues with extending the classes and did not find a solution yet.
Check out this issue on stackoverflow: http://stackoverflow.com/questions/35396983/jest-es2015-import.