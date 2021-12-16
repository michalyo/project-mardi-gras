const user = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const text = document.getElementById('text');
const small = document.querySelectorAll('small');
const form = document.querySelector('.formArea');

form.addEventListener('submit', (e)=>{
    
    
    for(let item of small){
        item.style.display = "none";
    }
    if(user.value === ""){
        small[0].style.display = "block";
        e.preventDefault()
    }

    if(lastname.value === ""){
        small[1].style.display = "block";
        e.preventDefault()
    }
    if(email.value === "" || email.value.indexOf('@')==-1 || email.value.indexOf('.')==-1){
        small[2].style.display = "block";
        e.preventDefault()
    }
    if(text.value === ""){
        small[3].style.display = "block";
        e.preventDefault()
    }

    
});

