import './style.css';

let toDos = [
  // {
  //   description: 'Go to market',
  //   completed: true,
  //   index: 1,
  // },

  // {
  //   description: 'Take some rest',
  //   completed: true,
  //   index: 3,
  // },
  // {
  //   description: 'Go to gym',
  //   completed: true,
  //   index: 2,
  // },
];

class UI {
  constructor(description, completed,index){

      this.description = description;
      this.completed = false;
      this.index = index;
  }
}

const displayList = () => {
  const listItems = document.querySelector('.list-items');
  toDos.sort((a, b) => a.index - b.index);
  toDos.forEach((toDo) => {
    const div = document.createElement('div');
    div.classList.add('list-item');
    div.innerHTML = `<div id="des"><input type="checkbox"><p>${toDo.description}</p></div><span>
    <i class="fas fa-ellipsis-v"></i></span>`;
    listItems.appendChild(div);
  });
};
// displayList();


const showLists = () => {
  const inputValue = document.querySelector('#input').value;
 if (inputValue.value){
 const todoLists = new UI (inputValue, false, 1)
 console.log(todoLists);
 const lists = {
   description: todoLists.description,
   completed: todoLists.completed,
   index: 1
  }
  toDos.push(lists)
}
displayList()
// // displayList()

}

// showLists()

const adOn = document.querySelector('#enter');
document.addEventListener('keypress',e => {
  if (e.code == 'Enter'){
    console.log(e);
  showLists();
  toDos =[];
  document.querySelector('#input').value = ' ';
  }
})

// class User {
//   constructor(name) {
//     name; // => 'Jon Snow'
//     this.name = name;
//   }
// }
// const user = new User('Jon Snow');
// console.log(user);
// const jass = user
// console.log(jass);

// const gate = {
//   name: user.name
// }

// console.log(gate);