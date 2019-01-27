export default interface IYearsStrategy {
    check(year: number): boolean;
    execute(): string;
}