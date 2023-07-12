import TodoItem from './TodoItem';

const TodoCollection = ({ todos, onSave, onDelete, onToggleDone, onChangeMode }) => {
  return (
    <div>
      TodoCollection
      {todos.map(todo => 
      <TodoItem 
      key={todo.id} 
      todo={todo}
      onSave={onSave}
      onDelete={onDelete}
      onToggleDone={onToggleDone}
      onChangeMode={onChangeMode}
      />
      )}
    </div>
  );
};

export default TodoCollection;
