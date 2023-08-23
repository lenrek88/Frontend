import './App.css';
import Button from '@mui/material/Button';
import {Box, SvgIcon} from "@mui/material";
import TextField from '@mui/material/TextField'
import {useContext, useState} from "react";
import {Typography} from "@mui/material"
import {Provider, TodoDispatch, TodoState} from "./Context";
import {Checkbox} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';


function Task({status, value, id, isEdit}) {

    const [text, setText] = useState(value);
    const dispatch = useContext(TodoDispatch)
    console.log(value)
    if (!isEdit) {
        return (
            <div>
                <Box display="flex" alignItems="center">
                    <Checkbox checked={status} onChange={() => dispatch({type: 'changeStatus', id: id})}></Checkbox>
                    <Typography sx={{width: 400}}>{text}</Typography>
                    <IconButton onClick={() => dispatch({type: 'changeIsEdit', id: id})}>
                        <SvgIcon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M2.49902 14.3761V17.5011H5.62402L14.8407 8.28444L11.7157 5.15944L2.49902 14.3761ZM17.2574 5.86777C17.5824 5.54277 17.5824 5.01777 17.2574 4.69277L15.3074 2.74277C14.9824 2.41777 14.4574 2.41777 14.1324 2.74277L12.6074 4.26777L15.7324 7.39277L17.2574 5.86777Z" fill="#0288D1"/>
                            </svg>
                        </SvgIcon>
                    </IconButton>
                    <IconButton onClick={() => dispatch({type: 'deleteTask', id: id})}> <DeleteIcon sx={{color: "orange"}}/></IconButton>
                </Box>
            </div>
        )
    } else {
        return (
            <div>
                <Box display="flex" alignItems="center">
                    <TextField
                        variant="standard"
                        label="Имя задачи"
                        fullWidth
                        value={text}
                        onChange={(e) => setText(e.target.value)}>
                    </TextField>
                    <IconButton onClick={() => dispatch({type: "changeTaskName", id: id, value: text})}>
                        <CheckIcon sx={{color: 'blue'}}>

                        </CheckIcon>
                    </IconButton>
                </Box>
            </div>
        )
    }

}

function Plan() {
    const state = useContext(TodoState);

    return (
        state.map((item) => {
        if(!item.status)
            return <Box>
                <Task status={item.status} value={item.value} id={item.id} isEdit={item.isEdit}/>
            </Box>
            return null
            }
        )

    )
}

function Done() {
    const state = useContext(TodoState);

    return (
        state.slice(0).reverse().map((item) => {
            if(item.status)
                return <Box>
                    <Task status={item.status} value={item.value} id={item.id} isEdit={item.isEdit}/>
                </Box>
                return null
        }

        )

    )

}

function TaskList() {

    const state = useContext(TodoState);

    const planCount = state.filter((item) => item.status === false).length;
    const doneCount = state.filter((item) => item.status === true).length;

    return(
        <>

                {planCount > 0 ? <Box sx={{minHeight: 180}}> <Typography sx={{display: "flex", flexDirection:"column", alignItems:"center", color: "var(--text-secondary, rgba(0, 0, 0, 0.60));"}}>План ({planCount})</Typography>
                    <Plan   /> </Box> : null
                }
                  {doneCount > 0 ?
                      <>
                          <Typography sx={{display: "flex", flexDirection:"column", alignItems:"center", color: "var(--text-secondary, rgba(0, 0, 0, 0.60));"}}>Готово ({doneCount})</Typography>
                          <Done />
                      </>
                :
                null
            }

        </>

    )
}


function Todo() {
    const [text, setText] = useState('')

    const dispatch = useContext(TodoDispatch);



    return (
            <Box sx={{width:474, height: 726, mt: 10, p:5, ml: 80, border: 1, borderRadius: 3}}>
                <Typography sx={{mb: 1}} color="blue" variant="h3">TODO</Typography>
                <TextField
                    variant="standard"
                    label="Имя новой задачи"
                    fullWidth
                    value={text}
                    onChange={(e) => setText(e.target.value)}>
                </TextField>
                <Button disabled={!text.trim()} sx={{ left: 420, bottom: 40}} onClick={() => {setText(''); dispatch({type: 'add', value: text})}}>
                    <Typography color="blue" variant="h5">+</Typography>
                </Button>
                <TaskList></TaskList>
            </Box>
    )
}

function App() {

    return (
        <Provider>
        <Todo></Todo>
        </Provider>
    )


}

export default App;
