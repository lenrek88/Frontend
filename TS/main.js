var list = [
    { name: 'create a post', status: 'In Progress', priority: 'low' },
    { name: 'test', status: 'Done', priority: 'high' },
];
function addTask(name) {
    var task = { name: name, status: 'To Do', priority: 'low' };
    list.splice(list.length - 1, 0, task);
}
function deleteTask(task) {
    var pos = list.findIndex(function (list) { return list.name === task; });
    if (pos !== -1) {
        list.splice(pos, 1);
    }
}
function changeStatus(task, status) {
    var pos = list.findIndex(function (list) { return list.name === task; });
    var findTask = list.find(function (list) { return list.name === task; });
    if (pos && findTask !== undefined) {
        findTask.status = status;
        console.log(findTask);
        list[pos] = findTask;
    }
    else {
        console.log(' this is task not found');
    }
}
function showList() {
    var ToDoObjects = list.filter(function (task) { return task.status === 'To Do'; });
    var ToDoList = ToDoObjects.map(function (task) { return task.name; });
    var stringToDo = ToDoList.join('\n           ');
    var InProgress = list.filter(function (task) { return task.status === 'In Progress'; });
    var InProgressList = InProgress.map(function (task) { return task.name; });
    var stringInProgress = InProgressList.join('\n            ');
    var DoneObject = list.filter(function (task) { return task.status === 'Done'; });
    var DoneList = DoneObject.map(function (task) { return task.name; });
    var stringDone = DoneList.join('\n               ');
    console.log("\n        Todo:\n            ".concat(stringToDo, "\n        \n        In Progress:\n            ").concat(stringInProgress, "\n        \n        Done:\n            ").concat(stringDone, "\n        "));
}
addTask('learn English');
addTask('clean in home');
changeStatus('learn English', 'In Progress');
addTask('write a post');
changeStatus('learn English', 'Done');
changeStatus('clean in home', 'In Progress');
addTask('make a bad');
deleteTask('write a post');
showList();
