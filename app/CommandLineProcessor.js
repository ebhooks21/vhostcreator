/**
 * CommandLineProcessor.js -- File to contain the commaind line processor class, which processes command line arguments for the application.
 * Author: Eric Hooks, 2025
 */

export default class CommandLineProcessor {
	/**
	 * Constructor for the CommandLineProcessor class.
	 */
	constructor() {

	}

	/**
	 * Function to check for command line arguments.
	 */
	checkForCommandLineArguments() {
		if((process.argv).length > 2) {
			console.log("Arg");
		}

		console.log(process.argv.length);
	}
}