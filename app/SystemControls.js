/**
 * SystemControls.js -- File to contain the SystemControls class, which has the functionality for dealing with the system.
 * Author: Eric Hooks, 2025 
 */

import os from 'os';
import fs from 'fs';

export default class SystemControls {
	/**
	 * Constructor for the SystemControls class.
	 */
	constructor() {

	}

	/**
	 * Function to check if the application is being ran as root or not.
	 * This limits the focus of the application to POSIX compatible(Linux, MacOS, WSL) systems. No generic Windows system.
	 */
	runningAsRoot() {
		return (process.getuid() && process.getuid) == 0;
	}
}