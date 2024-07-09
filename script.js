let addFlag=false;
const modalElement=document.querySelector('.modal-container');
const parent = document.querySelector(".main-container");
const modalContainer=document.querySelector(".modal-container");
const textAreaContainer=document.querySelector(".textarea-container");
const color=['lightpink','lightsalmon','lightgreen','black'];
let modalPriorityColor=color[color.length-1];/*set default color or change the color */
let AllpriorityColor=document.querySelectorAll('.priority-color');
console.log(AllpriorityColor)
const addBtn=document.querySelector('.add-btn').addEventListener('click',function(){
    //console.log("clicked");

    //display modal
    /*if addflag is true show modal else hide modal */
    addFlag=!addFlag;
    if(addFlag){
        modalElement.style.display="flex";
    }
    else{
        modalElement.style.display="none";
    }
})

function createTicket(ticketColor,ticketTask,ticketId){
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class","ticket-container");
    newDiv.innerHTML=`
        <div class="ticket-color"> ${ticketColor}"</div>
        <div class="ticket-id>#${ticketId}"</div>
        <div class="task">${ticketTask}
        </div>
    `;
    parent.appendChild(newDiv);
}

modalContainer.addEventListener("keydown",(e)=>{
    console.log(e.key);
    if(e.key==='Shift'){
        createTicket(modalPriorityColor,textAreaContainer.value,Math.floor((Math.random()*1000000)+1));
        modalContainer.style.display="none";
        textAreaContainer.value=" ";
        addFlag=false;
    }
})

//change priority color on clicking
/*traverse over all the colors */
AllpriorityColor.forEach((color,idx)=>{
    color.addEventListener('click',(event)=>{
        AllpriorityColor.forEach((colorElement,index)=>{
            /*Remove all the border */
            colorElement.classList.remove('border');
        })
        /*Add border on which user has clicked*/
        color.classList.add('border');
        console.log(color);
        modalPriorityColor=AllpriorityColor.classList[0];
    })
})
