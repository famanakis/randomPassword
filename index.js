const btn = document.getElementById("btn-generate");
const arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','!','@','#','$','%','^','&','*','<','>','?']
const password1 = document.getElementById("password1")
const password2 = document.getElementById("password2")
const password3 = document.getElementById("password3")
const password4 = document.getElementById("password4")



//Button Action - when clicked, generatePassword() is called to action and random password are added to the DOM
btn.addEventListener("click", () => {
    generatePassword()
    password1.classList.remove("icon");
    password2.classList.remove("icon");
    password3.classList.remove("icon");
    password4.classList.remove("icon");  
    });
    
    
//Generate a random element from the array
function randomPassword(arr,num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0,num);   
}

//Call randomPassword with the charArray and the #of elements - join them together
//console.log(randomPassword(arr,8).join(""))

//Generate a random password with 8 characters
function generatePassword() {
    password1.value=randomPassword(arr,8).join("")
    password2.value=randomPassword(arr,8).join("")
    password3.value=randomPassword(arr,8).join("")
    password4.value=randomPassword(arr,8).join("")
}








