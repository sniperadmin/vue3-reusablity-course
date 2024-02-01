# vue3-reusablity-course

This template should help get you started developing with Vue 3 + Vuetify in Vite.

## Design Systems List
The following link shows the full list of
[all design systems](https://designsystemsrepo.com/design-systems/)

## Figma Design concept
The following link has [all figma designs](https://www.figma.com/file/Gh13ih0L96opNx0RojNhyw/Admin-Dashboard---Vue-3-Reusability-Course-(Community)?type=design&node-id=206-73&mode=design&t=uPUWTcBHIMwmUwSk-0)

## Domain Driven Testing (optional)
We can use [vitest-cucumber-plugin](https://github.com/samuel-ziegler/vitest-cucumber-plugin)

## Charts
[Charts for Vue](https://github.com/ecomfe/vue-echarts?tab=readme-ov-file#readme)


## Spotting Reusable Components in Figma
The following components can be reusable because
they are used within one or two pages:
```mermaid
---
title: Individual Components
---
flowchart LR
id1([Product Item]) ~~~
id2([Statistics Card]) ~~~
id3([Chart Card])
id4([Empty State Card]) ~~~
id5([Message Component]) ~~~
id6([Missing Snackbar])
id7([Long Pricing Tier Card]) ~~~
id8([Contact Item]) ~~~
id9([Team Item])
```

We found that input component is shared:
```mermaid
---
title: Input Component is shared
---
flowchart LR
   id1(["`input
'shared Component'
`"]):::foo

id6([auth form]) --- id1
id2([contact form]) --- id1
id1 --- id3([event form])
id1 --- id4([team form])
id1 --- id5([settings form])

classDef foo stroke:#f00,color:yellow;
classDef default font-size: 20px;
```

The avatar also is shared across some components

## Data models
Once we spotted the components, we can extract the metadata
from the design of each component in figma.

### Product Item
Let's start with the `productItem`:
```mermaid
classDiagram
    direction RL
  
    class Product {
      +image: String
      +productName: String
      +favourited_by: Array<string>
      +price: Object
      +Rating: Number
   }
   
```

### Statistics Card
This card will have the following metadata:
```mermaid
classDiagram
   direction RL
   class Stat {
      +name: String
      +icon: String
      +value: Number
      +oneDayPercentile: String
      +date: Number
      +isUp: Boolean
   }
```
### Chart Card
```mermaid
classDiagram
   direction RL
   class Chart {
       +titleX: String
       +dataX: Array<number>
       +titleY: String
       +dataY: Array<number>
   }
```

### Pricing Card
```mermaid
classDiagram
   direction RL
   class Pricing {
       +title: String
       +subtitle: String
       +price: Object
       +features: Array<string>
   }
```

### Contact Details
```mermaid
classDiagram
   direction RL
   class Contact {
       +image: String
       +firstName: String
       +lastName: String
       +email: Object
       +phone: String
       +dateOfBirth: String
       +gender: String
   }
```

### Event Meta
```mermaid
classDiagram
   direction RL
   class Event {
      name: String
      time: String
      date: String
      address: String
      contactNumber: String
   }
```

### Team Member
```mermaid
classDiagram
   direction RL
   class TeamMember {
       +image: String
       +firstName: String
       +lastName: String
       +email: Object
       +phone: String
       +position: String
       +gender: String
   }
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
