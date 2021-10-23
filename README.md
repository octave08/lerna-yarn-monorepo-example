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

yarn으로 각각의 패키지에 라이브러리 설치

```
yarn workspace my-app
```

루트에 공통의 라이브러리 설치

```
yarn add react -W
```
