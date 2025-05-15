/**
 * VHostCreator.js -- Main entry point for the VHostCreator application.
 * Author: Eric Hooks, 2025
 */

import os from 'os';
import CommandLineProcessor from './app/CommandLineProcessor.js';
import CommandLineOutput from './app/CommandLineOutput.js';
import SystemControls from './app/SystemControls.js';

const sc = new SystemControls();
const clo = new CommandLineOutput();
const clp = new CommandLineProcessor();

//Output the program tagline
console.log(`VHostCreator -- Program for generating Apache VHOSTS files.${os.EOL}`);

//Check to see if the application is being ran as root, as that is required for operation
if(sc.runningAsRoot()) {
	if(clp.checkForCommandLineArguments()) {
		//We have command line arguments

		//Attempt to process the command line arguments
		let argData = clp.processCommandLineArguments();

		if(argData.exit) {
			process.exit(1);
		}
	}

	else {
		//We don't have command line arguments, show the inputs
	}
}

else {
	//We are not running as root, which is required
	clo.displayRootWarningMsg();
}

//Exit the program
process.exit(0);
