/*function switchImage() {
	var image = document.getElementById("updatePic");
	image.onmouseover = function() {  image.src = "images/updatePic1.png" };
	image.onmouseout = function() {  image.src = "images/updatePic2.png" };	
}*/


function switchImage()
{
   if (document.getElementById("updatePic").src.endsWith('images/update1.png') != -1)  //==:Comparison
   { 
      document.getElementById("updatePic").src = "images/update2.png"; //=:assignment   
   } 
   else if (window.document.pic.src.endsWith('images/update2.png') != -1) 
   { 
      document.getElementById("updatePic").src = "images/update1.png"; 
   }
}


