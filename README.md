# Learn Custom CLI

Learn to create a custom `CLI` tool using [nodejs](https://nodejs.org/)

## Demo

### 1. Install dependencies

```bash
npm install
```

### 2. Install package globally as a shortcut/reference

```bash
npm install -g
```

### 3. Test

```bash
testme --pokemon bulbasaur
testme -i
```

### 4. Uninstall package

```bash
npm uninstall -g
```

# Getting Started

1. [Building CLI Tools](#building-cli-tools)

- [CLI Options](#cli-options) (optional)
- [Interactive CLI Tools](#interactive-cli-tools) (optional)

# Building CLI Tools

`index.js`

```js
#!/usr/bin/env node

console.log('Hello World');
```

`package.json`

```json
{
  "bin": {
    "testme": "index.js"
  }
}
```

**Run command** to test the application

```bash
testme
```

If you encountered an error that `testme` is not recognized, then you must execute this command first: `npm i -g`

**Output**

```bash
Hello World
```

### Install Globally

```bash
npm i -g
```

This will install a reference shortcut to your current project directory. Meaning, everything you update directly in the source code, will immediately reflect in the global `testme` cli, since the one we installed globally is only a **reference**.

To actually install it separately, we need to run the following command:

```bash
npm pack
```

And it will generate a `npm_package_name-x.x.x.tgz` file.

```bash
npm i -g npm_package_name-x.x.x.tgz
npm uninstall npm_package_name -g
```

# CLI Options

We can pass input arguments

```js
console.log(process.argv);
```

**CLI**

```bash
testme --sample sampleInput
```

**Output**

```bash
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\<user>\\path\\to\\index.js',
  '--sample',
  'sampleInput'
]
```

## Using yargs package

https://www.npmjs.com/package/yargs

```bash
npm i yargs
```

**With Typescript**, install additional _types_

```bash
npm i -D @types/yargs
```

`index.js`

```js
import yargs from 'yargs';

const { argv } = yargs(process.argv);

console.log(argv);
```

**CLI**

```bash
testme --sample sampleInput --pokemon
```

**Output**

```bash
{
  _: [
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\<user>\\path\\to\\index.js'
  ],
  sample: 'sampleInput',
  pokemon: true
  '$0': '..\\..\\relative\\path\\to\\index.js'
}
```

# Interactive CLI Tools

https://www.npmjs.com/package/inquirer

```bash
npm i inquirer
```

**With Typescript**, install additional types:

```bash
npm i -D @types/inquirer
```

`index.js`

```js
const prompt = inquirer.createPromptModule();

const answers = await prompt([
  {
    type: 'input',
    name: 'Pakimo',
    message: 'Enter a pokemon name',
    default: 'bulbasaur',
    transformer: (input) => input.toUpperCase(), // executes for each keyboard input
    suffix: ' >',
  },
]);

console.log(answers);
```

**Output**

```bash
? Enter a pokemon name > BULBASAUR
{ Pakimo: 'bulbasaur' }
```

> Note: `inquirer@9+` Uses ESM modules. For CommonJS, use `npm i inquirer@8`

## Refernces

- **Node.js Tutorial - 58 - Building CLI Tools**

  - https://www.youtube.com/watch?v=y-zS9XV_kRM

- **Node.js Tutorials - 59 - CLI Options**

  - https://www.youtube.com/watch?v=oIg08Z0bqsY

- **Node.js Tutorial - 60 - Interactive CLI Tools**

  - https://www.youtube.com/watch?v=sJdqdGxRbXY
