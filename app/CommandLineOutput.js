/**
 * CommandLineOutput.js -- File to hold the CommandLineOutput class, which holds functions for displaying menus for the application.
 * Author: Eric Hooks, 2025
 */

import os from 'os';

export default class CommandLineOutput {
	/**
	 * Constructor for the CommandLineOutput class.
	 */
	constructor() {

	}

	/**
	 * Function for displaying the help menu.
	 */
	displayHelpMenu() {
		console.log(`Help Listing: ${os.EOL}`);
		console.log(os.EOL);

		console.log(`Possible Arguments: ${os.EOL}`);
		console.log(`--h -- Displays this help message.${os.EOL}`);
	}

	/**
	 * Function to display the invalid argument message, followed by the help menu.
	 */
	displayInvalidArgumentMsg(arg) {
		let self = this;

		//Output that a command line argument is invalid
		console.log(`Invalid argument: ${arg}. Remember, arguments start with --, followed by the argument name and the argument value.${os.EOL}`);

		self.displayHelpMenu();
	}
}