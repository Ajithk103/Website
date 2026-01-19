/* ===== LOGIN ===== */
function login(){
  const user=document.getElementById("username").value;
  const pass=document.getElementById("password").value;
  if(user && pass){
    localStorage.setItem("loggedIn","true");
    window.location.href="home.html";
  } else {
    alert("Enter username & password");
  }
}

/* ===== LOGOUT ===== */
function logout(){
  localStorage.removeItem("loggedIn");
  window.location.href="index.html";
}

/* ===== POPUP GALLERY ===== */
function openImg(img){
  document.getElementById("popup").style.display="flex";
  document.getElementById("popupImg").src=img.src;
}
function closeImg(){
  document.getElementById("popup").style.display="none";
}

/* ===== NOTIFICATION ===== */
function showNotification(){
  alert("🔔 No new notifications");
}

/* ===== AUTH CHECK ===== */
if(window.location.href.includes("home.html")){
  if(localStorage.getItem("loggedIn")!=="true"){
    window.location.href="index.html";
  }
}

/* ===== DRAWER MENU ===== */
function toggleMenu(){
  const menu=document.getElementById("drawerMenu");
  menu.style.left=menu.style.left==="0px"?"-250px":"0px";
}

/* ===== BACK BUTTON ===== */
function goBack(){
  window.history.back();
}
