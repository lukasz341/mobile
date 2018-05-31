

document.addEventListener('DOMContentLoaded', function() {
   for (var klucz in window.localStorage) {
       if (window.localStorage.getItem(klucz)!= null) {
       addTask(JSON.parse(window.localStorage.getItem( klucz )));
       }
   }

   
});



function savetoStorage(task) {
   
const ilosczadan = document.querySelectorAll('.todo-element');
         console.log('Liczba zadań: ' + ilosczadan.length);
     
      
       window.localStorage.setItem(task, JSON.stringify(task));
      
     const retrievedObject = window.localStorage.getItem(task);
     
    
}

function addTask(text) {
    const todoList = document.querySelector('#todoList');
   
   
        //dodanie div z nowym zadaniem
     const todo = document.createElement('DIV');
       todo.classList.add('todo-element');
       todoList.appendChild(todo);
     
       
       
      
       //dodanie tekstu do zadania
       const todoText = document.createElement('DIV');
       todoText.classList.add('todo-element-text');
        todoText.innerText=text;
       todo.appendChild(todoText);
       const textareavalue = document.querySelector('#todoMessage');
       textareavalue.value='';
      
     
     
      
       //dodanie przycisku usuń
       const deleteButton = document.createElement('button');
       deleteButton.classList.add('todo-delete-button');
       deleteButton.innerText='Usuń';
       todo.appendChild(deleteButton);   
}


// dodawanie zadania
const todoButton = document.querySelector ('#todo-button');
    todoButton.addEventListener('click', function(e) {
       
     e.preventDefault();
       const textarea = document.querySelector ('textarea');
     
          savetoStorage(textarea.value);
         addTask(textarea.value);
         
    
});

// usuwanie zadania
const todoList = document.querySelector('#todoList');


todoList.addEventListener('click', function(e) {
    if (e.target.className=='todo-delete-button') {
    window.localStorage.removeItem(e.target.parentNode.firstChild.innerText);
     // e.target.parentNode.remove();  
     window.location.reload();
   
       
       }
     
    });

   
    //wyszukiwanie dodanych zadań
    const todoSearch= document.querySelector('input');
    todoSearch.addEventListener('input', function() {
    const val = this.value;
    const elems = todoList.querySelectorAll('.todo-element');

    [].forEach.call(elems, function(el) {
        const text = el.querySelector('.todo-element-text').innerText;

        if (text.indexOf(val) !== -1) {
            el.style.setProperty('display', '');
        } else {
            el.style.setProperty('display', 'none');
        }
    });
});

const clearButton=document.querySelector('#clear-button');
clearButton.addEventListener('click', function(e) {
   
    e.preventDefault();
    if (confirm('Czy chcesz wyczyścić zapisane dane?')) {
        window.localStorage.clear();
        window.location.reload();
    }
   
   
});



