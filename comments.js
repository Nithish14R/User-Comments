const img =[{
    text:"dolore magnam aliquam quaerat Sed quia non numquam modi tempora indunt<br/> ut labore et dolore magnam<br/> aliquam quaerat Sed quia non numquam modi tempora indunt ut labore et <br/>dolore magnam aliquam quaerat Sed quia non numquam modi tempora indunt<br/> ut labore et dolore magnam aliquam quaerat",
    name:"Shakthi Mahesh",
    designation:'Software Developer',
    imgage:'https://www.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_10421502.htm'
},

{
    text:"Sed quia non numquam modi tempora indunt ut labore et <br/>det dolore magnam<br/> aliquam quaerat Sed quia non numquam modi tempora indunt ut labore et <br/>dolore magnam aliquam quaerat Sed quia non numquam modi tempora indunt<br/> ut labore et dolore magnam aliquam quaerat",
    name:"nithiMahesh",
    designation:'Web Developer',
    imgage:'https://www.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_10421502.htm'
},

{
    text:"Sed quia non numquam modi tempora indunt ut labore et <br/>dolore magnam aliquam quaerat Sed quia non numquam modi tempora indunt<br/> ut labore et dolore magnam<br/> aliquam quaerat Sed quia non numquam modi tempora indunt ut labore et <br/>dolore magnam aliquam quaerat Sed quia non numquam modi tempora indunt",
    name:"Sha Mah",
    designation:'Seo Developer',
    imgage:'https://www.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_10421502.htm'
},

{
    text:"Sed quia non numquam modi tempora indunt ut labore et <br/>dolore magnam aliquam quaerat Sed quia non numquam modi tempora indunt<br/> ut labore et dolore magnam<br/> aliquam quaerat Sed quia non numquam modi tempora indunt ut labore et <br/>dolore magnam aliqu<br/> ut labore et dolore magnam aliquam quaerat",
    name:"Shakthi",
    designation:'Content writer',
    imgage:'https://www.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_10421502.htm'
},

{
    text:"Sed quia non numquam modi tempora indunt ut labore et<br/>dolore magnam aliquam quaerat Sed quia non numquam modi tempora indunt<br/> ut labore et dolore magnam aliquam quaerat",
    name:"Mahesh",
    designation:'Android Developer',
    imgage:'https://www.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_10421502.htm'
},
]
let image=document.querySelector('.img');
let text=document.querySelector('.content');
let desi=document.querySelector('.desig');
let Name=document.querySelector('.name');

const prev_btn=document.querySelector('.prev');
const frwd_btn=document.querySelector('.frwd');

let Currentitem=0;
let comments=img;
window.addEventListener('DOMContentLoaded',()=>{
    Name.innerHTML=comments[Currentitem].name;
    text.innerHTML=comments[Currentitem].text;
    image.innerHTML=comments[Currentitem].imgage;
    desi.innerHTML=comments[Currentitem].designation;
})
frwd_btn.addEventListener('click',()=>{
    Currentitem++;
    Name.innerHTML=comments[Currentitem].name;
    text.innerHTML=comments[Currentitem].text;
    image.src=comments[Currentitem].imgage;
    desi.innerHTML=comments[Currentitem].designation;
    if(Currentitem==4){
        Currentitem=0;
    }
})

prev_btn.addEventListener('click',()=>{
    Currentitem--;
    Name.innerHTML=comments[Currentitem].name;
    text.innerHTML=comments[Currentitem].text;
    image.src=comments[Currentitem].imgage;
    desi.innerHTML=comments[Currentitem].designation;
    if(Currentitem==0){
        Currentitem=4;
    }
    console.log(Currentitem)
})
