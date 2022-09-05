import { ResultData } from "./ResultData";

export interface IAnalyzer {
	run(matches: ResultData[]): string;
}
