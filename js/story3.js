const urlParams = new URLSearchParams(window.location.search);
        var id = urlParams.get("id");
        console.log({ id });
        fetch("json/story.json")
        .then(function (response){
        return response.json();
     
    })
   
    .then((story)=>{
        console.log(story);
       story .forEach ((desc)=> {
           if (desc.id == id){
               console.log(desc);
               document.getElementById("mentee_desc1").innerHTML+= desc.desc;
             
           } })
         
       story .forEach ((image)=> {
           if (image.id == id){
               console.log(image);
               document.getElementById("mentee_img1").src = image.image;
           }
        })
        // story .forEach ((linked)=> {
        //     if (linked.id == id){
        //         console.log(linked);
        //         document.getElementById("mentee_link1").src= linked.linked;
        //     }
        //  })
        // story .forEach ((design)=> {
        //     if(design.id ==id){
        //         console.log(design);
        //         document.getElementById("mentee_dest1").innerHTML +=design.design;
        //     }
        // })
        // story .forEach ((hi)=> {
        //     if(hi.id ==id){
        //         console.log(hi);
        //         document.getElementById("mentee_hi1").innerHTML +=hi.hi;
        //     }
        // })
       })