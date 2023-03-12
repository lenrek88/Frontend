// const list = {
//     "create a new practice task": "In Progress",
//     "make a bed": "Done", // задача "заправить кровать" в статусе "Готово"
//     "write a post": "To Do",
// }
//
// changeStatus("write a post", "Done") // меняет статус задачи
// addTask('have a walk'); // добавляет новую задачу
// deleteTask('have a walk'); // удаляет задачу
// showList(); // показывает список всех задач
//
// "create a new practice task": Todo
// "make a bed": Todo
//
// "write a post": In Progress
//
// Nothing is Done

const list = {
    "create a new practice task": "In Progress",
    "write a post": "To Do",
    "make a bed": "Done",
}

function changeStatus(task,status) {
    if (task in list) {
        for (const name in list) {
            if (name === task) {
                list[name] = status;
            }
        }
    } else {
        console.log("Неверное название задачи!");
    }
}

function addTask(task) {
    list[task] = 'To Do';
}

function deleteTask(task) {
    if (task in list) {
        delete list[task];
    } else {
        console.log("Неверное название задачи!");
    }
}

function showList() {
    let sum = 0;
    console.log("Todo:")
   for (const name in list) {
        if (list[name] === "To Do") {
            console.log(`   "${name}"`);
            sum += 1;
        }
    }
   if (sum === 0) {
       console.log("   -");
   }

    console.log("");

    sum = 0;

    console.log("In Progress:")
    for (const name in list) {
        if (list[name] === "In Progress") {
            console.log(`   "${name}"`);
            sum += 1;
        }
    }
     if (sum === 0) {
         console.log("   -");
     }

    console.log("");
    sum = 0;
    console.log("Done:")
    for (const name in list) {
        if (list[name] === "Done") {
            console.log(`   "${name}"`);
            sum += 1;
        }
    }

    if (sum === 0) {
        console.log("   -");
    }
}

addTask("Go to school");

changeStatus("Go to school", "In Progress")

showList();