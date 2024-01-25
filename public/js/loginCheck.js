let islogin = sessionStorage.getItem("isLogin")
if(islogin != 1){
    window.location.replace("/profpage")
}
else{
    console.log("not logged in")
}