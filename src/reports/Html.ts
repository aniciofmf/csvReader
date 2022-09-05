import fs from "fs";
import { IOutputTarget } from "../interfaces/IOutputTarget";

/** I can do it better :E, just for testing purposes */

export class HtmlReport implements IOutputTarget {
	print(report: string): void {
		const html = `
        <div>
            <h1> Report </h1>
            <div> ${report} </div>
        </div>`;

		fs.writeFileSync("report.html", html, {
			encoding: "utf-8",
		});
	}
}
