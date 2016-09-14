function check(form)
{
 
 if(form.uname.value == "myuserid" && form.pword.value == "mypswrd")
  {
    window.open('home.html')
  }
 else
 {
   alert("Error Password or Username")
  }
}