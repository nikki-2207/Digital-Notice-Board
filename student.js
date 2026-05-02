function getIcon(type){

 if(type==="Education") return {emoji:"🎓", class:"edu"};
 if(type==="Meeting") return {emoji:"🏢", class:""};
 if(type==="Event") return {emoji:"🎉", class:"event"};
 if(type==="Sports") return {emoji:"⚽", class:"sports"};
 if(type==="Urgent") return {emoji:"🚨", class:"urgent"};

 return {emoji:"📢", class:""};
}

let notices = JSON.parse(localStorage.getItem("notices")) || [];
let today = new Date().toISOString().split("T")[0];

let board = document.getElementById("board");

notices.forEach(n=>{

 if(n.expiry >= today){

  let iconData = getIcon(n.type);

  board.innerHTML += `
  <div class="notice">
   <div class="icon ${iconData.class}">${iconData.emoji}</div>
   <div>
    <h3>${n.title}</h3>
    <p>${n.desc}</p>
    <small>Type: ${n.type}</small><br>
    <small>Priority: ${n.priority}</small><br>
    <small>Dept: ${n.dept}</small><br>
    ${n.link ? `<a href="${n.link}" target="_blank">Open Attachment</a><br>` : ""}
    <small>Expiry: ${n.expiry}</small>
   </div>
  </div>
  `;
 }

});