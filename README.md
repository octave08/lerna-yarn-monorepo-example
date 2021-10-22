

```
npm install -g lerna

lerna init

cd ./packages
yarn create next-app --typescript

lerna create my-ui
cd my-ui

yarn add microbundle -D
```

script 추가
```
"scripts": {
   ..
   "dev": "microbundle watch --jsx React.createElement"
 }
 ```