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

	/**
	 * Function to get the linux distribution name.
	 */
	getDistributionName() {
		try {
			//Read in the os-release file and get the needed information
			const osReleaseData = fs.readFileSync('/etc/os-release', 'UTF-8');

			let dataLines = osReleaseData.split(os.EOL);

			for(let line in dataLines) {
				if(line.startsWith("NAME=")) {
					return (line.split("=")[1].replace(/\"/g, ""));
				}
			}

			return null;
		}

		catch(err) {
			return null;
		}
	}
}