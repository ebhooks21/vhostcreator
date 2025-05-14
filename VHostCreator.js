/**
 * VHostCreator.js -- Main entry point for the VHostCreator application.
 * Author: Eric Hooks, 2025
 */

import os from 'os';
import CommandLineProcessor from './app/CommandLineProcessor.js';

const clp = new CommandLineProcessor();

//Output the program tagline
console.log(`VHostCreator -- Program for generating Apache VHOSTS files.${os.EOL}`);

if(clp.checkForCommandLineArguments()) {
	//We have command line arguments
}

else {
	//We don't have command line arguments, show the inputs
	console.log("TEST");
}

//Exit the program
process.exit(0);
