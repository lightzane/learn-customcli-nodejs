# CLI Tool Template

for creating custom CLI tools...

# Prerequisite

Before using this, you must have knowledge on how to create custom CLI tools:

https://github.com/lightzane/learn-customcli-nodejs/blob/main/README.md

## Update your CLI name

This will be the `name` that will be called in terminal to execute your node project.

`package.json`

```json
{
  "bin": {
    "<your_cli_name>": "bin/index.js"
  }
}
```

## Development

```bash
npm i -g
```

This will create a shortcut reference to your global `node_modules`

```bash
npm run build
```

Run this command everytime you make a change.

```bash
<your_cli_name>
```

Run this command to test your CLI tool.

## End Development

```bash
npm uninstall -g
```

# Share your CLI tool

1. Update your package `name` and `version`
2. Run the following command:

```bash
npm run package
```

This will generate the `<package_name>-<version>.tgz` file which you can share and have them run the command:

```bash
npm i -g <package_name>-<version>.tgz
```

You can then verify and test by running in the terminal:

```bash
<your_cli_name>
```

## Uninstall

```bash
npm uninstall -g <package_name>
```

## Notes

### Uninstall yargs and/or inquirer

Based on your use-case, you may not need these packages at all.

- `yargs` - helps CLI tools by parsing arguments
- `inquirer` - helps providing Q&A interaction with the user

```bash
npm uninstall yargs @types/yargs
```

```bash
npm uninstall inquirer @types/inquirer
```

### .js extension on imports

You must explicitly write `.js` or `index.js`.

```ts
// INCORRECT
import PokeAPI from './pokeapi';

// CORRECT
import PokeAPI from './pokeapi.js'; // specify ".js" extension since we are building ESM modules
```

```ts
// util/index.ts
export * from 'message.util.js';

// other.ts
import { MessageUtil } from './util'; // INCORRECT
import { MessageUtil } from './util/index.js'; // CORRECT
```

You may encounter `ERR_MODULE_NOT_FOUND` when `.js` extension is not explicitly provided. Since when **Typescript** outputs the build as `ESM` modules, it will not include any extension name.
