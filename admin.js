function addNotice(){

 let notice={
  title:document.getElementById("title").value,
  desc:document.getElementById("desc").value,
  expiry:document.getElementById("expiry").value,
  type:document.getElementById("type").value,
  priority:document.getElementById("priority").value,
  dept:document.getElementById("dept").value,
  link:document.getElementById("link").value
 };

 let notices = JSON.parse(localStorage.getItem("notices")) || [];

 notices.push(notice);

 localStorage.setItem("notices", JSON.stringify(notices));

 alert("Notice Posted Successfully");
}