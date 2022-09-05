import { ConsoleReport } from "./reports/Console";
import { Wins } from "./analyzers/Wins";
import { IAnalyzer } from "./interfaces/IAnalyzer";
import { IOutputTarget } from "./interfaces/IOutputTarget";
import { ResultData } from "./interfaces/ResultData";

export class Overview {
	static winsAnalysisWithConsoleReport(team: string) {
		return new Overview(new Wins(team.toLowerCase()), new ConsoleReport());
	}

	constructor(public analyzer: IAnalyzer, public outputTarget: IOutputTarget) {}

	buildAndMakeReport(results: ResultData[]): void {
		const response = this.analyzer.run(results);

		this.outputTarget.print(response);
	}
}
