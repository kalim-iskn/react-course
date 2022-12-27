import {makeAutoObservable} from "mobx";
import Task from "./Task";

class Store {
    private _tasks: Array<Task> = [];

    // makeAutoObservable делает все свойства наблюдаемыми по умолчанию
    constructor() {
        makeAutoObservable(this);
    }

    add(text: string) {
        let task = new Task(text, false);
        this._tasks.push(task);
    };

    delete(id: string) {
        this._tasks = this._tasks.filter(task => {
            return (task.id != id);
        })
    }

    setDone(id: String) {
        this._tasks = this._tasks.map(task => {
            if (task.id == id) {
                task.isDone = !task.isDone;
            }
            return task;
        })
    }

    get tasks(): Array<Task> {
        return this._tasks;
    }

    set tasks(value: Array<Task>) {
        this._tasks = value;
    }
}

export default new Store();
