
export const list = [
    // {name: 'create a post', status: 'In Progress', priority: 'low'},
    // {name: 'test', status: 'Done', priority: 'high'},
]

export function Task(name, priority) {
    this.name = name;
    this.status = 'In Progress';
    this.priority = priority;
}

export function addTask(name, priority){
    // const task = {name: name, status: 'In Progress', priority: priority}
    let task = new Task(name, priority);
    list.splice(list.length-1, 0, task);
}

export function deleteTask(task){
    const pos = list.findIndex(list => list.name === task);
    if (pos !== -1) {
        list.splice(pos,1);

    }
}

export function changeStatus(task, status){
    const pos = list.findIndex(list => list.name === task);

    const findTask = list.find(list => list.name === task);

    findTask.status = status;

    list[pos] = findTask;
}

//  function showList(){
//     const ToDoObjects = list.filter(task => task.status === 'To Do');
//     const ToDoList = ToDoObjects.map(task => task.name);
//     const stringToDo = ToDoList.join('\n           ');
//
//
//
//     const InProgress = list.filter(task => task.status === 'In Progress');
//     const InProgressList = InProgress.map(task => task.name);
//     const stringInProgress = InProgressList.join('\n            ');
//
//     const DoneObject = list.filter(task => task.status === 'Done');
//     const DoneList = DoneObject.map(task => task.name);
//     const stringDone = DoneList.join('\n               ');
//
//     console.log(
//         `
//         Todo:
//             ${stringToDo}
//
//         In Progress:
//             ${stringInProgress}
//
//         Done:
//             ${stringDone}
//         `
//     )
// }
//
// addTask('learn English');
// addTask('clean in home');
//
//
//
// changeStatus('learn English', 'In Progress');
//
// addTask('write a post');
//
// changeStatus('learn English', 'Done')
// changeStatus('clean in home', 'In Progress');
//
// addTask('make a bad');
//
// deleteTask('write a post');
//
//
//
// showList();
//
