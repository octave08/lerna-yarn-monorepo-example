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
