document.addEventListener('DOMContentLoaded', function(){
//By default, submit button is disabled
document.querySelector('#submit').disabled = true;

document.querySelector('#task').onkeyup = () => {
    if(document.querySelector('#task').value.length > 0) {
        document.querySelector('#submit').disabled = false;
    }else {
        document.querySelector('#submit').disabled = true;
    }
    
}

    document.querySelector('form').onsubmit = () => {
       const task = document.querySelector('#task').value;
      //To create a new element that will be added to the body of HTML

      const li = document.createElement('li');
      li.innerHTML = task;

      document.querySelector('#tasks').append(li);
      //To clear a task after adding it
      document.querySelector('#task').value = '';
      document.querySelector('#submit').disabled = true;

       //Stop form from submitting
       return false;
    }
})