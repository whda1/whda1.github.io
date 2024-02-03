const animateElement=document.querySelectorAll('.animation')
const threshold=0.1
const greetText="Welcome !"
const greetSpeed=50
function typeEffect(i=null){
    var greetingText=document.querySelector('.greeting')
    i=i?i:0
    greetingText.innerHTML+=greetText[i]
    i++
    if(i<greetText.length)
    setTimeout(typeEffect,greetSpeed,i)   
}

const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.style.opacity=1
            entry.target.style.animation="slideIn 1s linear"
            observer.unobserve(entry.target)
        }
    })
},{
    threshold:threshold
})

for(let i=0;i<animateElement.length;i++){
    animateElement[i].style.opacity=0
    observer.observe(animateElement[i])
}

const progressList={
"Fontend":[{text:"React",checked:true,practical:true},{text:"HTML CSS JQuery",checked:true,practical:true},
{text:"Bootstrap",checked:true,practical:true},{text:"React Native",checked:false,practical:false}],
"Backend":[{text:"Nodejs",checked:true,practical:true},{text:"PHP",checked:true,practical:true},
{text:"Flask",checked:true,practical:true},{text:"Spring",checked:false,practical:false}],
"Cloud Service":[{text:"AWS Azure",checked:false,practical:false}],
"CICD":[{text:"Github",checked:true,practical:true},{text:"Gitlab",checked:true,practical:true},
{text:"Appium",checked:true,practical:true},{text:"pytest",checked:true,practical:true},
{text:"Docker",checked:true,practical:true},{text:"kubernetes (certificate)",checked:false,practical:false}],"Cyber Security":[]}
function createCheckBoxNode(array){
    var list=[]
    for(var i =0; i<array.length;i++){
        var checkBox = document.createElement("INPUT")
        checkBox.setAttribute("type", "checkbox")
        checkBox.disabled=true
        checkBox.checked=array[i].checked
        checkBox.setAttribute("id",i)
        var checkLabel=document.createElement("label")
        checkLabel.setAttribute("for",i)
        var labelText=document.createTextNode(" "+array[i].text)
        if(array[i].practical===true){ 
            checkLabel.style.textDecorationLine="line-through"
        }
        checkLabel.appendChild(labelText)
        var checkDiv=document.createElement("div")
        checkDiv.setAttribute('class','goal')
        checkDiv.appendChild(checkBox)
        checkDiv.appendChild(checkLabel)
        list.push(checkDiv)
    }
    console.log(list)
    return(list)
}

function createProgressElement(){
    var progressListNode=document.querySelector('.progressList')
     for(var e in progressList){
        var progressElement=document.createElement('div')
        progressElement.setAttribute('class',"progressElement")
        var progressHeader=document.createElement('h3')
        var headerText=document.createTextNode(e)
        progressHeader.appendChild(headerText)
        progressElement.appendChild(progressHeader)
        var list=createCheckBoxNode(progressList[e])
        for(var element of list){
            progressElement.appendChild(element)
        }
        console.log(progressElement)
        progressListNode.appendChild(progressElement)
    }
}



typeEffect() 
createProgressElement()