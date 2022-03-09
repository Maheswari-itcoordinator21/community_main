fetch("json/story.json")
    .then(function(response) {
        return response.json();
        console.log(story);
        patcheventName(story);
    })

.then(function(story) {
    document.getElementById("mentee_name1").innerHTML += story[0].name;
    document.getElementById("mentee_name2").innerHTML += story[1].name;
  
    document.getElementById("mentee_dest1").innerHTML += story[0].design;
    document.getElementById("mentee_dest2").innerHTML += story[1].design;
  
    document.getElementById("mentee_img1").src = story[0].image;
    document.getElementById("mentee_img2").src = story[1].image;
   
});

function patchname(story) {
    document.getElementById("mentee_name1").innerHTML += story[0].name;
}

function patchimage(story) {
    document.getElementById("mentee_img1").innerHTML += story[0].image;
}

function patchdesign(story) {
    document.getElementById("mentee_dest1").innerHTML += story[0].design;
}

function patchhi(story) {
    document.getElementById("mentee_hi1").innerHTML += data[0].hi;
}

function navigationpage1() {
    window.location.href =
        "/mentee_story-home.html?id=1";
}

function navigationpage2() {
    window.location.href =
        "/mentee_story-home.html?id=2";
}
