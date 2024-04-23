
const passwordGet = document.getElementById("password");
const length=12;
const uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol ="~!@#$%^&*()_+{}|[]\\/<>-=?";
const Allchar = uppercase+lowercase+number+symbol;

function createPassword(){
    let password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    while(length>password.length){
        password+=Allchar[Math.floor(Math.random()*Allchar.length)];

    }
    passwordGet.value=password;


}
function copypassword(){
    passwordGet.select();
    document.execCommand("copy");
}