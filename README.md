# Interview - Backend Node

Fork this project and submit a pull request when you are complete.

Read the comments in [main.js](./main.js) for "business requirements".

In sum, the script in `main.js` pulls a CNN feed,
from which the script gets and transforms the top stories,
then logs the transformed top stories to console.

## Table of Contents

1. [Installation](#installation)
1. [Usage](#usage)
1. [Testing](#testing)
1. [File structure](#file-structure)

## Installation

- Git clone this repo down, then

- Run `npm install`, which installs dependencies.

## Usage

- Run `npm start`, which runs the `main.js` script.

## Testing

- Run `npm test`.

## File structure

- `main.js` contains the main script, which uses the modules in `scripts/`.

- `scripts/` contains modules which respectively:

> - pulls CNN feed,

> - gets top stories from CNN feed,

> - and transforms the top stories.

- `config.js` is a key-value hash of constants used in pulling, reading, and transforming the CNN feed.

- `test/test.js` is a test suite run on the `npm test` command.
