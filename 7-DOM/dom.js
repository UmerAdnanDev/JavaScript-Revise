console.log(document.title);// html title
//chnaging title
document.title = 'Title ';
console.log(document.body.innerHTML)//all html
//  document.body.innerHTML = "<h1 style ='color: blue;border:none;margin:45px;border-radius:23px;background-color:gray;padding:10px 15px'>This is a button</h1>"
console.log(document.body);//html body
console.log(document.querySelector("button"))//gets button
console.log(document.querySelector("button").innerHTML)//get button content
//  document.querySelector("button").innerHTML = "Button" alters all buttons
console.log(document.querySelector(".js-button"))