function login(){
 let role = document.getElementById("role").value;

 if(role === "admin")
  window.location = "admin.html";
 else
  window.location = "student.html";
}