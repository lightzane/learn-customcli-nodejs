#!/usr/bin/env node

import { input } from '@inquirer/prompts';
import yargs from 'yargs';
import PokeAPI from './pokeapi.js';

const argv = yargs(process.argv)
  .options({
    interactive: { type: 'boolean', alias: 'i' },
    pokemon: { type: 'string', default: false },
  })
  .parseSync();

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
    const answer = await input({
      message: 'Enter a pokemon name',
      default: 'bulbasaur',
      transformer: (value, { isFinal }) => {
        if (isFinal) {
          return value.toUpperCase();
        }

        return value;
      },
    });

    PokeAPI.printFiveMoves(answer);
  })();
}
