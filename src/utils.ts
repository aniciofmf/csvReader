export const toDate = (date: string): Date => {
	const dateFragments = date.split("/").map((value: string): number => {
		return parseInt(value);
	});

	return new Date(dateFragments[2], dateFragments[1] - 1, dateFragments[0]);
};
