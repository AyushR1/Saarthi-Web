import axios from 'axios'

const baseUrl = "https://saarthi.onrender.com"

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            setToDo(data)
        })
        .catch((err) => console.log(err))
}

const addToDo = (name, desc, linkcourse, lnknotes, setName, setDesc, setLinkCourse, setLnkNotes, setToDo) => {

    axios
        .post(`${baseUrl}/save`, { name, desc, linkcourse, lnknotes })
        .then((data) => {
            setName("");
            setDesc("");
            setLinkCourse("");
            setLnkNotes("");
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}


const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {

    axios
        .post(`${baseUrl}/update`, { _id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const deleteToDo = (_id, setToDo) => {

    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}


export { getAllToDo, addToDo, updateToDo, deleteToDo }