import { ResultReader } from "./reader/ResultReader";
import { Overview } from "./Overview";

const resultsReader = ResultReader.loadFromCsv("results.csv");

resultsReader.load();

const overviewEverton = Overview.winsAnalysisWithConsoleReport("Everton");
overviewEverton.buildAndMakeReport(resultsReader.results);

const overviewChelsea = Overview.winsAnalysisWithConsoleReport("Chelsea");
overviewChelsea.buildAndMakeReport(resultsReader.results);
