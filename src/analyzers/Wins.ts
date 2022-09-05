import { IAnalyzer } from "../interfaces/IAnalyzer";
import { ResultData } from "../interfaces/ResultData";
import { MatchResult } from "../interfaces/MatchResult";

export class Wins implements IAnalyzer {
	constructor(public team: string) {
		team = team.toLowerCase();
	}

	run(results: ResultData[]): string {
		let wins = 0;

		for (let result of results) {
			if (this.team === result[1].toLowerCase() && result[5] == MatchResult.HomeWin) {
				wins++;
			}

			if (this.team === result[2].toLowerCase() && result[5] == MatchResult.AwayWin) {
				wins++;
			}
		}

		return `Team ${this.team.toUpperCase()} won: ${wins} games`;
	}
}
