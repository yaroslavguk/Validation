
function validate(){
   
   var x=document.forms['form']['name'].value;
   var y=document.forms['form']['email'].value;
   
   if (x.length==0){
      document.getElementById('namef').innerHTML='*дане поле обовязкове для заповнення';
      return false;
   }else if(x.length<4){  
      document.getElementById('namef').innerHTML='*від 4 символів';
      return false; 
  }
   
  
   if (y.length==0){
      document.getElementById('emailf').innerHTML='*дане поле обовязкове для заповнення';
      return false;
   }else if(y.length<8){  
      document.getElementById('emailf').innerHTML='*від 8 символів';
      return false;
   }   
   
   at=y.indexOf("@");
   dot=y.indexOf(".");
   
   if (at<1 || dot <1){
      document.getElementById('emailf').innerHTML='*email повинен містити @ і .';
      return false;
   }
}