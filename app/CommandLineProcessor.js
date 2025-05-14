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
		return ((process.argv).length > 2) ? true : false;	
	}

	/**
	 * Function to process the command line arguments.
	 */
	processCommandLineArguments() {
		//Process the arguments and create an object with that data
		let argData = {
			exit: false
		};

		for(let i = 2; i < (process.argv).length; i++) {
			switch(process.argv[i]) {
				case "--h":
					//Display the help message
					break;

				default:
					//Output that a command line argument is invalid
					console.log(`Invalid argument: ${process.argv[i]}. Remember, arguments start with --, followed by the argument name and the argument value.`)

					//Display the help message
					break;	
			}
		}
	}
}