/**
 * CommandLineProcessor.js -- File to contain the commaind line processor class, which processes command line arguments for the application.
 * Author: Eric Hooks, 2025
 */

import CommandLineOutput from "./CommandLineOutput.js";

export default class CommandLineProcessor {
	/**
	 * Constructor for the CommandLineProcessor class.
	 */
	constructor() {
		let self = this;

		self.clo = new CommandLineOutput();
	}

	/**
	 * Function to check for command line arguments.
	 */
	checkForCommandLineArguments() {
		return ((process.argv).length > 2) ? true : false;	
	}

	/**
	 * Function to process the command line arguments.
	 */
	processCommandLineArguments() {
		let self = this;

		//Process the arguments and create an object with that data
		let argData = {
			exit: false
		};

		for(let i = 2; i < (process.argv).length; i++) {
			switch(process.argv[i]) {
				case "--h":
					//Display the help message
					(self.clo).displayHelpMenu();
					argData.exit = true;
					break;

				default:
					//Display the invalid argument message
					(self.clo).displayInvalidArgumentMsg(process.argv[i]);	
					argData.exit = true;
					break;	
			}

			if(argData.exit) {
				break;
			}
		}

		return argData;
	}
}