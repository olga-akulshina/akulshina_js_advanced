'use strict';

class User {
    constructor(task) {
        this.task = task;
    }
    do() {
        this.task.run();
    }
}

class Task {
    constructor(task) {
        this.task = task;
    }
    run() {
        console.log(this.task);
    }
}

const testTask = new Task('Писать больше кода!');
const testUser = new User(testTask);
testUser.do();
