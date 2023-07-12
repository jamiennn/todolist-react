import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState, useEffect } from 'react'
import { getTodos, createTodo, patchTodo, deleteTodo } from '../api/todo';
import { useNavigate } from 'react-router-dom'
import { useAuth } from 'context/AuthContext'


const TodoPage = () => {
  
  const [todos, setTodos] = useState([])
  const [todoChange, setTodoChange] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (Object.is(isAuthenticated, null)) return 
    if (!isAuthenticated) return navigate("/login")
  }, [navigate, isAuthenticated])

  let count = 0
  todos.forEach(todo => {
    if (!todo.isDone) count ++
  })



  // useEffect(() => {}, [])
  // useEffect(函式, dependencies(陣列表示))
  // useEffect原理：
  // 情況1 一開始：先用原本內容去 render，再跑useEffect的function，再重新re-render
  // 情況2 每當dependencies內的參數有re-render，就執行這個函式，
  // 情況3 如果dependencies為空陣列，就會在render這個大component的時候，跑一次此函式而已
  // 情況4 如果直接沒傳dependencies參數，就會每次re-render就執行這個useEffect


  // 下面這個例子，不能讓他每次re render，因為函式裡有setTodos()，會無限loop，所以是專門開另外個state: todochange 給他用
  useEffect(() => {
    const getTodosAsync = async () => {
      try {
        const todos = await getTodos()
        setTodos(todos.map(todo => ({...todo, isEdit: false})))
      } catch (e) {
        console.error(e)
      }
    }
    getTodosAsync()
  }, [todoChange])

  
  return (
    <div>
      TodoPage
      <Header />
      <TodoInput
      inputValue={inputValue}
      onChange={handleChange}
      onAddTodo={handleAddTodo}
      />
      <TodoCollection 
      todos={todos}
      onSave={handleSave}
      onDelete={handleDelete}
      onToggleDone={handleToggleDone}
      onChangeMode={handleChangeMode}
      />
      <Footer count={count}/>
    </div>
  );

  function handleChange(value) {
    setInputValue(value)
  }

  async function handleAddTodo (e) {
    try {
      if (inputValue.length === 0) return 
      await createTodo({
        title: inputValue,
        isDone: false
      })
      // setTodos([
      //   ...todos,
      //   {
      //     id: data.id,
      //     title: data.title,
      //     isDone: data.isDone,
      //     isEdit: false
      //   }
      // ])
      setTodoChange(!todoChange)
      setInputValue('')
    } catch(error) {
      console.error(error)
    }
  }

  async function handleToggleDone(todoId) {
    try {     
      // let newTodo
      // const newTodos = todos.map(todo => {
      //   if (todo.id !== todoId) {
      //     return todo
      //   }
      //   newTodo = {...todo, isDone: !todo.isDone}
      //   return newTodo
      // })

      const newTodo = todos.find(todo => todo.id === todoId)
      await patchTodo({...newTodo, isDone: !newTodo.isDone})
      setTodoChange(!todoChange)
    } catch(e) {
      console.error(e)
    }
  }

  function handleChangeMode ({todoId, isEdit}) {
    setTodos(todos.map(todo => {
      if (todo.id === todoId) return {...todo, isEdit}
      return {...todo, isEdit: false}
    }))
  }

  async function handleSave ({ id, title }) {
    try {
      // let newTodo
      // const newTodos = todos.map(todo => {
      //   if (todo.id !== id) {
      //     return todo
      //   }
      //   newTodo = {...todo, title}
      //   return {...newTodo, isEdit: false}
      // })

      const newTodo = todos.find(todo => todo.id === id)
      await patchTodo({...newTodo, title})
      setTodoChange(!todoChange)

      // const todo = todos.find(todo => todo.id === id)
      // setTodos(todos.map(todo => {
      //   if (todo.id === id) return { ...todo, title, isEdit: false }
      //   return todo
      // }))
    } catch (e) {
      console.error(e)
    }
  }

  async function handleDelete(id) {
    try {
      await deleteTodo(id)
      setTodos(todos.filter(todo => todo.id !== id))
    } catch (e) {
      console.error(e)
    }
  }
};



export default TodoPage;
