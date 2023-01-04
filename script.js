const mail = document.querySelector('.mail');
const info = document.querySelectorAll('.info');
const btn = document.querySelector('.btn');

btn.addEventListener("click", () => {
for(let i=0;i<info.length;i++) {
if (info[i].validity.valueMissing)  {
  info[i].setCustomValidity(info[i].name + " cannot be empty");
  } else 
  info[i].setCustomValidity("");
  if (mail.validity.typeMismatch) {
    mail.setCustomValidity("Looks like this is not an email");}
}
});

