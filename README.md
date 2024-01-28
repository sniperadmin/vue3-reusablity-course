# vue3-reusablity-course

This template should help get you started developing with Vue 3 + Vuetify in Vite.

## Software Industry Stages
| Stage                             | Description                                                                                                                                                                                                                                   |
|-----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **1. Conception/Idea**            | - Initial phase where the idea for a software product is conceived.<br/> - Identification of market needs, problem-solving, or innovation. <br/> - High-level discussions to define the purpose and goals of the software.                    |
| **2. Planning**                   | - Detailed planning involving scope, requirements, timeline, budget, and risks. <br/> - Collaboration between project managers and stakeholders. <br/> - Creation of a comprehensive project plan.                                            |
| **3. Design**                     | - Creation of software architecture, technical specifications, and user interface design. <br/> - Defining the overall structure and components of the software. <br/> - Detailed documentation of the design elements.                       |
| **4. Implementation/Development** | - Actual coding and development of the software based on design specifications. <br/> - Writing and testing code to ensure functionality. <br/> - Iterative development based on agile or other methodologies.                                |
| **5. Testing**                    | - Quality assurance and testing to identify and fix bugs, errors, and issues. <br/> - Various testing levels including unit, integration, system, and user acceptance testing. <br/> - Validation of software against specified requirements. |
| **6. Deployment/Release**         | - Release or deployment of the software to the production environment for users. <br/> - Gradual rollout or full release depending on the development strategy. <br/> - Monitoring for any issues during the initial deployment.              |
| **7. Maintenance and Support**    | - Ongoing support and addressing issues post-deployment. <br/> - Corrective maintenance (fixing bugs), adaptive maintenance (adjusting to changes), and perfective maintenance (adding features).                                             |
| **8. Updates and Upgrades**       | - Releasing updates to address issues, improve performance, or add new features. <br/> - Consideration of user feedback for continuous improvement.                                                                                           |
| **9. Retirement/End-of-Life**     | - Retirement of the software when it reaches the end of its lifecycle. <br/> - Transitioning users to newer alternatives or versions.                                                                                                         |

## Design Systems List
The following link shows the full list of
[all design systems](https://designsystemsrepo.com/design-systems/)

## Figma Design concept
The following link has [all figma designs](https://www.figma.com/file/Gh13ih0L96opNx0RojNhyw/Admin-Dashboard---Vue-3-Reusability-Course-(Community)?type=design&node-id=206-73&mode=design&t=uPUWTcBHIMwmUwSk-0)

## Domain Driven Testing (optional)
We can use [vitest-cucumber-plugin](https://github.com/samuel-ziegler/vitest-cucumber-plugin)

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
