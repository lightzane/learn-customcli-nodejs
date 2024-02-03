#!/usr/bin/env node

import inquirer from 'inquirer';
import yargs from 'yargs';
import PokeAPI from './pokeapi.js'; // specify ".js" extension since we are building ESM modules

const argv = yargs(process.argv.slice(2))
  .options({
    interactive: { alias: ['i'] }, // cli --interactive OR cli -i
    pokemon: { type: 'string', default: false },
  })
  .parseSync();

const interactive = !!argv.i || !!argv.interactive;

// Invalid input: cli
if (!argv.pokemon && !interactive) {
  throw new Error(`Please add flag "--pokemon <name>"`);
}

// Invalid input: cli --pokemon
if (argv.pokemon === true) {
  throw new Error(`Please add name (e.g. --pokemon bulbasaur)`);
}

// Input: cli --pokemon <name>
if (argv.pokemon && !interactive) {
  PokeAPI.printFiveMoves(argv.pokemon);
}

// Input: cli -i or cli --interactive
if (interactive) {
  (async () => {
    const prompt = inquirer.createPromptModule();

    const answers = await prompt([
      {
        type: 'input',
        name: 'Pakimo', // Key will be accessed as "answers.Pakimo" and returns the value/answer
        message: 'Enter a pokemon name',
        default: 'bulbasaur',
        transformer: (input: string) => input.toUpperCase(),
        suffix: ' >',
      },
    ]);

    PokeAPI.printFiveMoves(answers.Pakimo);
  })();
}
