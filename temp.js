let students=[];
function revert(){
    let userc=document.getElementById('tt')
    userc.innerHTML=''
    students.map((user)=>{
        let div=document.createElement('div')
        let name=document.createElement('name')
        let mail=document.createElement('mail')
        name.innerText=user.name;
        mail.innerText=user.mail;
        div.classList.add('std')
        
        div.appendChild(name)
        div.appendChild(mail)
        userc.appendChild(div)
    })
}
function sucess(){
    let elem=document.getElementById('alt')
    elem.classList.add('sucesses')
    elem.innerText='sucessfully added'
    setTimeout(()=>{
        elem.classList.remove('sucesses')
        elem.innerText=''
    },2000)
}
function clicked(){
    let name=document.getElementById('tex')
    let email=document.getElementById('mail')
    let obj={
        name:name.value,
        mail:email.value,
    }
    let res=students.filter((std)=>{
        if(std.mail==email.value){
            return 1;
        }
    })
    if(res.length!=1){
        
        students.push(obj);
        sucess();
    }
    else{
        alert('already registered')
    }
    revert();
}