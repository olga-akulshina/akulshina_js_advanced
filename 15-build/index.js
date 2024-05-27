
import { User } from './user.js';
import { Task } from './task.js';

const testTask = new Task('Писать больше кода!');
const testUser = new User(testTask);
testUser.do();