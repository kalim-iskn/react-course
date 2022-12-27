export default class Task {
    private readonly _id: string;
    private _title: string;
    private _isDone: boolean;

    constructor(title: string, isDone: boolean) {
        this._id = Date.now().toString(36) + Math.random().toString(36).substr(2);
        this._title = title;
        this._isDone = isDone;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get isDone(): boolean {
        return this._isDone;
    }

    set isDone(value: boolean) {
        this._isDone = value;
    }

    get id(): string {
        return this._id;
    }
}
