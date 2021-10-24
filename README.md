# lerna-nextjs-storybook

- `lerna`와 `yarn workspace`를 이용하여 nextjs와 ui components 패키지를 분리
- ui components는 storybook을 이용하여 개발할 수 있도록 환경 구성

## Spec

- TypeScript
- Lerna
- React
- NextJS
- Storybook
- yarn workspace
- microbundle
- eslint & prettier
- testing-library/react

## 기본 설정

루트에 공통의 라이브러리 설치

```console
yarn add react -W // -W 옵션 사용
```

개별 라이브러리는 패키지 내에서 설치

```console
cd <your-package>
yarn add storybook
```

nextjs와 ui components를 동시에 개발자 모드로 실행

```console
lerna run dev --parallel // --parallel 옵션 사용
```

## 이슈

### testling-library 적용 과정에서

Support for the experimental syntax 'jsx' isn't currently enabled

- https://stackoverflow.com/questions/63005011/support-for-the-experimental-syntax-jsx-isnt-currently-enabled

SyntaxError: Cannot use import statement outside a module

- https://stackoverflow.com/questions/61781271/jest-wont-transform-the-module-syntaxerror-cannot-use-import-statement-outsi

- https://github.com/facebook/jest/issues/9395

Error: Jest: Failed to parse the TypeScript config

- https://jestjs.io/docs/getting-started#using-typescript

TypeError: Cannot read properties of undefined (reading 'createElement')

- https://www.codegrepper.com/code-examples/javascript/cannot+read+property+%27createelement%27+of+undefined+jest

- The error below may be caused by using the wrong test environment, see https://jestjs.io/docs/en/configuration#testenvironment-string.
  Consider using the "jsdom" test environment.
