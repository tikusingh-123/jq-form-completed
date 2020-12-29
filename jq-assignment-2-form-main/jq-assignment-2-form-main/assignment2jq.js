

$(document).ready(function(){

    $("#showpass").click(function()
    
    {

        var x = document.getElementById("password");

        if(x.type ==="password")
        {

           x.type = "text";

         }  

        else {

           x.type= "password";
        }

        }

);


//email validity alert functionality


$("#email").change(function (){



   var inputvalues = $(this).val();    
   var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;    
   if(!regex.test(inputvalues))
   {    
   alert("invalid email id");  

   return 
     regex.test(inputvalues);    

   }    

});




//phone validation functionality


   $("#phone").change(function ()
   {



      var inputvalues1 = $(this).val();  

      var regex = /^\d{10}$/;


      if(!regex.test(inputvalues1))
      {    
      alert("invalid phone");  
   
      return 
        regex.test(inputvalues);    
   
      }    
      


     
   
   
   



});

//selection functionality using chosen api
$(".chzn-select").chosen();



//autosuggestion functionality

$(function(){


   var suggestionslist=["gaming","singing","coding" , "c++" , 
   "java" , "html","jquery","haskell" ,"javascript" ,"php","ruby"];

   
      $('#tags').autocomplete({
         source:  suggestionslist
      });

});

$("#submit").click(function()
    
    {

      alert("form has been submitted!!");
    }

);



   });




  