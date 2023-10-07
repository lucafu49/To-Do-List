const inputbox= document.getElementById("input-box");
const list= document.getElementById("list-container");

function addTask(){
    if(inputbox.value === ''){
        alert("You must write something!");
    } else{
        let li = document.createElement("li"); //create the task 
        li.innerHTML= inputbox.value;
        list.appendChild(li); //adds the task to the list
        let span = document.createElement("span");
        span.innerHTML= "\u00d7"
        li.appendChild(span);
    }
    inputbox.value = '';
    saveData();
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){          //if we click on LI, it will put on "check" the task
        e.target.classList.toggle("checked"); //I used toggle because it works like an on and off button, so you know if the task was completed or not
        saveData();
    }
    else if(e.target.tagName === "SPAN"){   //if we click on SPAN, it will delete the parentElement (referencing LI)
        e.target.parentElement.remove();    // so the task will be deleted
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", list.innerHTML); //save the task created in localStorage, so when the web gets refreshed, the data will not be lost
}

function showList(){
    list.innerHTML= localStorage.getItem("data");
}

showList();