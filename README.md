# GyeongJinKwak's Portfolio with React

## Tech Stack 
**Front**
- React
- Typescript
- Styled-Components
- react + typescript + eslint + prettier
  - `yarn run prettier`
---
**Back**
- Express
- eslint + prettier
- Nodemon
  - `yarn run dev`
- Sequelize
  - `npx sequelize init` 
  - config, migration, seeders

## Directory

```
├── front
│    ├── src
│    ├── Components
│    │    ├── App.tsx
│    │    ├── Header.tsx
│    │    └── Router.tsx
│    ├── Routes
│    │    ├── Home
│    │    ├── About
│    │    ├── Projects
│    │    ├── Toy
│    │    ├── Search
│    │    └── Detail
│    └── assets
├── back

```
## BreakPoint

```
const BREAK_POINT_MOBILE: number = 768;
const BREAK_POINT_TABLET: number = 992;
const BREAK_POINT_PC: number = 1200;
```

## Screens

- [ ] Home
- [ ] About
- [ ] Projects
- [ ] Toy
- [ ] Search
- [ ] Detail

## Installed Modules

**Front**
- `yarn add react-router-dom`
- `yarn add prettier eslint-config-prettier eslint-plugin-prettier -D`
- `yarn add styled-components`
- `yarn add styled-reset`
- `yarn add url-loader`
- `yarn add file-loader`
- `yarn add typescript @types/node @types/react @types/react-dom @types/jest`
- `yarn add @types/styled-components`
- `yarn add @types/react-router`
- `yarn add @types/react-router-dom`
- `yarn add @typescript-eslint/parser`
- `yarn add -D @typescript-eslint/eslint-plugin`
- `yarn add eslint-config-airbnb`
- `yarn add eslint-config-prettier@latest`
- `yarn add redux react-redux redux-saga`
- `yarn add -D @types/react-redux`
- `yarn add shortid`
- `yarn add -D @types/shortid`
- `yarn add faker`
- `yarn add -D @types/faker`
- `yarn add react-masonry-css`
---
**Back**
- `yarn add eslint --save-dev`
- `yarn add prettier --save-dev --save-exact`
- `yarn add eslint-config-prettier --save-dev`
- `yarn add eslint-plugin-prettier --save-dev`
- `yarn add express`
- `yarn add -D nodemon`
- `yarn add sequelize sequelize-cli mysql2`

* msql2: node 와 mysql을 연결해주는 드라이버
* sequelize: sql언어 대신 javascirpt 언어를 사용할 수 있도록 도와줌

## PortNum
- Browser, Front: 3001 
- Server: 3002
- Database: 3306
