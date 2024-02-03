#!/usr/bin/env node

import inquirer from 'inquirer';
import yargs from 'yargs';
import PokeAPI from './pokeapi.js';

const { argv } = yargs(process.argv);

const interactive = !!argv.i || !!argv.interactive;

if (!argv.pokemon && !interactive) {
  throw new Error(`Please add flag "--pokemon <name>"`);
}

if (argv.pokemon === true) {
  throw new Error(`Please add name (e.g. --pokemon bulbasaur)`);
}

if (argv.pokemon && !interactive) {
  PokeAPI.printFiveMoves(argv.pokemon);
}

if (interactive) {
  (async () => {
    const prompt = inquirer.createPromptModule();

    const answers = await prompt([
      {
        type: 'input',
        name: 'Pakimo', // Key will be accessed as "answers.Pakimo" and returns the value/answer
        message: 'Enter a pokemon name',
        default: 'bulbasaur',
        transformer: (input) => input.toUpperCase(),
        suffix: ' >',
      },
    ]);

    // console.log(answers);

    PokeAPI.printFiveMoves(answers.Pakimo);
  })();
}
