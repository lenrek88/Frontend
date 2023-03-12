const toDoList = ['почитать', 'помыть машину', 'убраться в квартире', 'купить продукты'];
toDoList.pop();
toDoList.shift();
toDoList.unshift('ПОЧИТАТЬ')

toDoList.splice(toDoList.length,0, 'выкинуть мусор');
toDoList.push('выкинуть книгу');
for (let task of toDoList) {
    console.log(task)
}

