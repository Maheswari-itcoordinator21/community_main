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
        
       })