const urlParams = new URLSearchParams(window.location.search);
        var id = urlParams.get("id");
        console.log({ id });
        fetch("json/story.json")
        .then(function (response){
        return response.json();
     
    })
    .then((story)=>{
        console.log(story);
       story .forEach ((name)=> {
           if (name.id == id){
               console.log(name);
               document.getElementById("mentee_name1").innerHTML+= name.name ;
             
           } })
         
       story .forEach ((image)=> {
           if (image.id == id){
               console.log(image);
               document.getElementById("mentee_img1").src = image.image;
           }
        })
        story .forEach ((linked)=> {
            if (linked.id == id){
                console.log(linked);
                document.getElementById("mentee_link1").href = linked.linked;
            }
         })
        story .forEach ((design)=> {
            if(design.id ==id){
                console.log(design);
                document.getElementById("mentee_dest1").innerHTML +=design.design;
            }
        })
        story .forEach ((hi)=> {
            if(hi.id ==id){
                console.log(hi);
                document.getElementById("mentee_hi1").innerHTML +=hi.hi;
            }
        })
        story .forEach ((id)=> {
            console.log(id);
           
           if(id==0){
          pagenavigation();
               
           }
          
        })  
    })
    function pagenavigation(){
  
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