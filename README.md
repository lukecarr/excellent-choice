# 🏆 excellent-choice

> Excel-based multiple-choice testing

[![npm](https://img.shields.io/npm/v/excellent-choice)](https://npmjs.com/package/excellent-choice)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/lukecarr/excellent-choice)](https://codeclimate.com/github/lukecarr/excellent-choice)
[![npms.io (quality)](https://img.shields.io/npms-io/final-score/excellent-choice?label=npms.io%20score)](https://api.npms.io/v2/package/excellent-choice)
[![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/excellent-choice)](#)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/excellent-choice)](https://bundlephobia.com/package/excellent-choice)

- 💪 **TypeScript.** Fully typed and self-documenting!

## 🚀 Quick Start

### Install

```bash
# npm
npm i excellent-choice

# or yarn
yarn add excellent-choice
```

### Import

```js
// ESM / TypeScript
import { parse, parseFile } from "excellent-choice";

// or CommonJS
const { parse, parseFile } = require("excellent-choice");
```

### Example Usage

```js
// Parse an ArrayBuffer (.xlsx file data)
const tests = parse(...); 
// => An object of test name => test questions
```

Alternatively, you can use `parseFile` to automate the file reading process:

```js
// Parse an .xlsx file
const tests = parseFile('your-file.xlsx');
// => An object of test name => test questions
```

## ⚖ License

excellent-choice is licensed under the [`MIT License`](LICENSE).
