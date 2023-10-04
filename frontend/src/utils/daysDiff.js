export default function daysDiff(startDate, endDate) {
    const differenceInMilliseconds = new Date(endDate) - new Date(startDate);
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    console.log("start", startDate, "end", endDate, differenceInMilliseconds, millisecondsInADay);
    return differenceInMilliseconds / millisecondsInADay;
}