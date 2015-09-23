#! /usr/bin/env node

/**
 * Copyright 2015 Mozilla
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var configure = require('./lib/configure');
var packageJson = require('./package.json');
var program = require('commander');

program
  .version(packageJson.version)
  .command('configure')
  .description('configure repository to auto-deploy to GitHub Pages using Travis CI')
  .action(function(env, options) {
    configure()
    .catch(function(err) {
      console.error(err);
    });
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}