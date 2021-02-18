const eye = document.querySelector(".eye")
const iEye = document.querySelector('i')
const input = document.querySelector("input[type=password]")

eye.addEventListener('click', function () {
  if(input.type == "text"){
    input.type = "password";
    iEye.classList.remove("fa-eye")
    iEye.classList.add("fa-eye-slash")
  }else{
    input.type = "text"
    iEye.classList.remove("fa-eye-slash")
    iEye.classList.add("fa-eye")
  }

});