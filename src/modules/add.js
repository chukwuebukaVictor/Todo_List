import addToList from './addToUI.js';
import ToDo from './todo.js';

function add(e) {
  if (e.key === 'Enter') {
    const newItem = new ToDo(this.value, false);
    localStorage.setItem('todoList', JSON.stringify(newItem.getList()));
    this.value = '';
    addToList();
  }
}

export default add;