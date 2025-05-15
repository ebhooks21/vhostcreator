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

	/**
	 * Function to display the root privileges warning message.
	 */
	displayRootWarningMsg() {
		console.log(`ERROR: This program must be ran as the root user.${os.EOL}`);
		console.log(`This is due to the program editing Apache system files, which are usually only editable as root.${os.EOL}`);
		console.log(`Please re-run this program as root.${os.EOL}`);
	}

	/**
	 * Display OS cannot be determined message.
	 */
	displayOSCannotBeDeterminedMsg() {
		console.log(`ERROR: This program was not able to detect the distribution you are currently running.${os.EOL}`);
		console.log(`This could be due to you running an unsupported OS or an OS that this program is not aware of.${os.EOL}`);
	}
}