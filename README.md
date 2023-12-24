# SDET Tasks

This repository holds two folders: one for Ui Tests, which contains testing of [My Store](http://automationpractice.multiformis.com/index.php) using Nightwatch.js, and another for API Route Testing for Mock-User-Auth using SuperTest and Jest.

## Required Technologies
1. Required libraries for UI Tests:
- [Node.js](https://nodejs.org/en)
- [Npm](https://docs.npmjs.com/cli/v6/commands/npm-install)
- [Nightwatch.js](https://nightwatchjs.org/guide/quickstarts/create-and-run-a-nightwatch-test.html)

2. Required libraries for API Tests:
- [Node.js](https://nodejs.org/en)
- [Npm](https://docs.npmjs.com/cli/v6/commands/npm-install)
- [Mock-User-Auth Package](https://www.npmjs.com/package/mock-user-auth)
- [SuperTest](https://www.npmjs.com/package/supertest)
- [Jest](https://jestjs.io/docs/getting-started)
- [Jest-HTML-Reporter](https://www.npmjs.com/package/jest-html-reporter)

## 1. UI Tests

The first task was to test the functionality of the [Contact Us](http://automationpractice.multiformis.com/index.php?controller=contact) Page. This involved testing various combinations to determine the required and optional fields, checking if they led to valid or invalid submissions. The next task was to verify "dress" search results. 

Nightwatch.js automatically generated an [HTML report](UI Tests/tests_output/nightwatch-html-report) to display the test results.
Here is the document for the [Test Cases](https://docs.google.com/spreadsheets/d/1bn_Hhxgq_vgSK62qykpqbs6n98_RYa8IehfYOsk_bWs/edit#gid=298129271)

The first task didn't encounter any bugs, but a bug was discovered in the second task, leading to the creation of a [bug ticket](https://docs.google.com/document/d/19HlgJdrtWlCwSvekQf1lZL57HDv2M3Z8iEhGkUa4A_o/edit?usp=sharing) to address it.

## 1. API Test

This task involved testing all API routes within the Mock-User-Auth API. It required interactions with the routes using both valid and invalid request bodies, along with valid and invalid authorization tokens.

# API Routes

![]([https://myoctocat.com/assets/images/base-octocat.svg](https://monosnap.com/file/G8KJw3b0p52ygqZl2HstO8ZZh0tAlC)https://monosnap.com/file/G8KJw3b0p52ygqZl2HstO8ZZh0tAlC)
