#!/usr/bin/env node
const program = require('commander')

const { create, deleting, dirTree } = require('./actions')

program.version('1.0.0').description('Brainboqs CLI system')

program
  .option('-c, --components')
  .option('-dd, --delete-domains')
  .option('-r, --create')
  .option('-s , --show ')
  .option('-a, --all')
  .option('-e, --edit')
  .option('-t, --allTypes')
  .option('-x, --complex')

program
  .command('create <type> <nameOfObject> [fields...]')
  .alias('c')
  .description('create a new object')
  .action((type, nameOfObject, fields) =>
    create(type, nameOfObject, fields, program.opts())
  )

program
  .command('read <dir> <cliName>')
  .alias('r')
  .description('read structure of folder to cli{Name}.json file')
  .action((dir, cliName) => dirTree(dir, cliName))

program
  .command('delete <type> <nameOfObject>')
  .alias('d')
  .description('delete a object')
  .action((type, nameOfObject) => deleting(type, nameOfObject, program.opts()))

program.parse(process.argv)
