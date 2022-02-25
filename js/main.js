var elform = document.querySelector(".form");
var eltext = document.querySelector(".form__input-text");
var elSelect = document.querySelector(".form__select-text");
var elBtn = document.querySelector(".form__btn");
var elnatija = document.querySelector(".natija");
var qiymat;
var dollar = 10950, euro = 11600, rub = 100;

elform.addEventListener("submit", function(evt){
    evt.preventDefault();
  qiymat = eltext.value;
    var result;
    if(elSelect.value == "USD"){
        result = qiymat * dollar;
        console.log(result);
       
    }else{
        if(elSelect.value == "EUR"){
            result = qiymat*euro;
            console.log(result);
            
        }
        else{
            result = qiymat*rub;
            console.log(result);

        }
    }
    elnatija.textContent = result;
})
elBtn.addEventListener("click", function(evt){
   elnatija.classList.toggle("natija__open");
})
var elcancel = document.querySelector(".natija__btn")
elcancel.addEventListener("click", function(){
    elnatija.classList.toggle("natija__open");
})