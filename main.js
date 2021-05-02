var name_member = ["Mukesh","Rinku","Ruchi","Hriday"];

    
    var image=["dad.JPG","mom.jpg","Myself.jpg","Brother.jpg"];
   
    console.log(name_member);
    console.log(image);

    var i = 0;
    function update(){

        var img = image[i];
        var name = name_member[i];

    document.getElementById("Reasons").innerHTML=name;
    document.getElementById("img1").src=img;
    console.log(i);
  i++;
   /*
if(i=0){
    console.log("A");
}
if(i=1){
    console.log("B");
} 
*/

var length_of_array=3
if (i>length_of_array) 
{
    i=0 ;
}
console.log(i);
    }