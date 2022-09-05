import { IOutputTarget } from "../interfaces/IOutputTarget";

/** Add Colors & Console Sytles */

export class ConsoleReport implements IOutputTarget {
	print(report: string): void {
		console.log(report);
	}
}
