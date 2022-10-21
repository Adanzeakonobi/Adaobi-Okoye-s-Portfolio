const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const contactBtn = document.querySelector('.submit-btn');
// const userName = document.querySelectorAll('#name');
const emailinput = document.querySelector('.email');
const msg = document.querySelectorAll('#message');
// const msgerror = document.querySelector('.message-error');
const form = document.querySelector('.form')

burger.addEventListener("click", () => {
    console.log('click')
    ul.classList.toggle("show");
  });

  const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);


  form.addEventListener('submit', (event) =>{
    event.preventDefault();
    
    if(emailinput.value===((emailinput.value).toLowerCase())){
      form.submit()
      msgerror.classList.remove('active')
    }else{
      msgerror.classList.add('active')
    } 
  })

// contactBtn.addEventListener('click', () => {
//     if(userName.value.length && email.value.length && msg.value.length){
//         fetch('/mail', {
//             method: 'post',
//             headers: new Headers({'Content-Type': 'application/json'}),
//             body: JSON.stringify({
//                 userName: userName.value,
//                 email: email.value,
//                 msg: msg.value,
//             })
//         })
//         .then(res => res.json())
//         .then(data => {
//             alert(data);
//         })
//     }
// })
