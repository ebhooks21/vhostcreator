/**
 * VHostCreator.js -- Main entry point for the VHostCreator application.
 * Author: Eric Hooks, 2025
 */

import os from 'os';
import CommandLineProcessor from './app/CommandLineProcessor.js';

const clp = new CommandLineProcessor();

//Output the program tagline
console.log(`VHostCreator -- Program for generating Apache VHOSTS files.${os.EOL}`);

clp.checkForCommandLineArguments();

//Exit the program
process.exit(0);
