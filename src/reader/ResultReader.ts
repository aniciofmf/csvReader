import { csvReader } from "./csvReader";
import { toDate } from "../utils";
import { MatchResult } from "../interfaces/MatchResult";
import { IResultReader } from "../interfaces/IResultReader";
import { ResultData } from "../interfaces/ResultData";

export class ResultReader {
	results: ResultData[] = [];

	static loadFromCsv(filename: string): ResultReader {
		return new ResultReader(new csvReader(filename));
	}

	constructor(public reader: IResultReader) {}

	load() {
		this.reader.read();

		this.results = this.reader.data.map((row: string[]): ResultData => {
			return [toDate(row[0]), row[1], row[2], parseInt(row[3]), parseInt(row[4]), row[5] as MatchResult, row[6]];
		});
	}
}
