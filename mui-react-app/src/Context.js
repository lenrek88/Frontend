import {createContext} from "react";
import {useReducer} from "react";

export const TodoDispatch = createContext('add');
export const TodoState = createContext('add');

export function Provider({children}) {
    const [context, dispatch] = useReducer(todoReducer, initalState);

    return (

            <TodoState.Provider value={context}>
                <TodoDispatch.Provider value={dispatch}>
                    {children}
                 </TodoDispatch.Provider>
            </TodoState.Provider>

    )
}

let nextId = 0;

export function todoReducer(context, action) {
    switch(action.type) {
        case 'add':{
            return [...context, {id: nextId++, value: action.value, status: false, isEdit: false}];
        }
        case 'changeStatus':{
            let tempMap = context.map((item) => {
                if(action.id === item.id) {
                    return {...item, status: !item.status}
                }
                return item })
            return tempMap;

        }
        case 'changeIsEdit' :{
            let tempMap = context.map((item) => {
                if(action.id === item.id) {
                    return {...item, isEdit: !item.isEdit}
                }
                return item })
            return tempMap;
        }
        case 'changeTaskName':{
            let tempMap = context.map((item) => {
                if(action.id === item.id) {

                    return {...item, value: action.value, isEdit: !item.isEdit}
                }
                return item })
            return tempMap;
        }
        case 'deleteTask': {
            return context.filter((item) => item.id !== action.id)
        }
        default: {
            return [...context];

        }
     }
}

const initalState = []