const urlParams = new URLSearchParams(window.location.search);
        var id = urlParams.get("id");
        console.log({ id });
        fetch("json/story.json")
        .then(function (response){
        return response.json();
     
    })
   
    .then((story)=>{
        console.log(story);
       story .forEach ((story)=> {
           if (story.id == id){
               console.log(story);
               document.getElementById("mentee_desc1").innerHTML+= story.story;
             
           } })
         
       story .forEach ((image)=> {
           if (image.id == id){
               console.log(image);
               document.getElementById("mentee_img1").src = image.image;
           }
        })
        story .forEach ((id)=> {
            console.log(id);
           
           if(id==0){
          page();
               
           }
          
        })  
       })
       function page(){
  
        if(id==1){
         pagenavigation_1();
              
          }
          else if(id==2){
           pagenavigation_2();
          }
      
   
      function pagenavigation_1() {
       window.location.href =
           "https://focused-mayer-701538.netlify.app/page3.html?id=1";
   }
       function pagenavigation_2() {
       window.location.href =
           "https://focused-mayer-701538.netlify.app/page3.html?id=2";
   }
}