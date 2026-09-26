### Playwright practice project

Playwright tests for the "SDET with Playwright" class at https://www.bondaracademy.com.

The tests run against the hosted practice app at https://playground.bondaracademy.com, so there is no local app to start.

### How to run it

1. Install the LTS version of Node.js (v20 or later).
2. Install dependencies: `npm install`
3. Install the Playwright browsers: `npx playwright install`
4. Run the tests: `npm test`
5. Open the HTML report: `npm run report`

To use Playwright's interactive UI mode, run `npm run test:ui`.

To point the tests at a different URL, set `BASE_URL`, for example `BASE_URL=http://localhost:4200 npm test`.

> Note: the `User facing locators` test in `tests/firstTest.spec.ts` uses `getByTestId('SignIn')`. That `data-testid` was added to the local copy of the app during the course, and the hosted playground doesn't have it, so this test fails on purpose as a reminder of the lesson.

### Project structure

| Folder / file | What's in it |
| --- | --- |
| `tests/firstTest.spec.ts` | Locators and assertions |
| `tests/autoWaiting.spec.ts` | Auto-waiting and timeouts (runs against http://www.uitestingplayground.com/ajax) |
| `tests/uiComponents.spec.ts` | UI elements: inputs, radio buttons, checkboxes, dropdowns, tooltips, dialogs, web tables, date picker, sliders, iFrames, drag & drop |
| `tests/test-with-page-objects.spec.ts` | Tests that use the page objects |
| `page-objects/` | Page objects, the page manager (`page-manager.ts`) and the shared helper base class (`helper-base.ts`) |
| `helpers/test-step-decorator.ts` | `@step` decorator that wraps page object methods in `test.step` so they show up as steps in the report |
| `playwright.config.ts` | Playwright configuration: base URL, browsers and reporter |

### What I Mastered

#### Introduction
- Environment configuration
- Playwright installation and overview

#### Getting started with Playwright
- Running tests from the command line
- Running tests with the UI mode
- Trace viewer and debugging tests
- Test structure (`test`, `test.describe`)
- Test hooks (`beforeEach`, `beforeAll`, `afterEach`, `afterAll`)

#### Locators and assertions
- HTML terminology (tags, attributes, classes, IDs)
- Locator syntax rules
- User-visible locators (`getByRole`, `getByLabel`, `getByPlaceholder`, `getByText`, `getByTitle`, `getByTestId`)
- Locating child elements
- Locating parent elements
- Reusing locators
- Getting text and values from web elements
- Playwright assertions (generic and locator assertions, soft assertions)
- Auto-waiting mechanism
- Timeouts (test, action, navigation and expect timeouts)
- Code generation (`npx playwright codegen`)

#### Mastering UI elements
- Input fields
- Radio buttons
- Checkboxes
- Lists and dropdowns
- Tooltips
- Dialog boxes
- Web tables: navigation and loops
- Date selection by text and with the `Date` object
- Sliders
- iFrames
- Drag & drop

#### Page objects
- The Page Object design pattern
- First page object
- Navigation page object
- Locators in page objects
- Methods parametrization
- Datepicker page object
- Test steps decorator (`@step`)
- Page objects manager
- Page objects helper (base class)
