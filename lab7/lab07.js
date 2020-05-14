const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
let k=0;
for(let i = 0;i<works.length;i++){
    document.write("<div class='item'>");
    document.write("<h4 class='genre'></h4>");
    document.write("<div class='inner-box'>");
    document.write("<h3 class='auth'></h3>");
    document.write("<h5 class='life'></h5>");
    document.write("</div>");
    document.write("<div class='inner-box imgs'>");
    document.write("<h3>Popular Photos</h3>");
    for (let j = 0;j<works[i].photos.length;j++){
        var img = document.createElement("img");
        img.src = works[i].photos[j];
        img.className  ="photo";
        document.getElementsByClassName("imgs")[i].appendChild(img);
    }
    document.write("</div>");
    document.write("<button>Visit</button>");
    document.write("</div>");
    document.getElementsByClassName("genre")[i].innerHTML = "Genre : "+works[i].tips;
    document.getElementsByClassName("auth")[i].innerHTML = works[i].author;
    document.getElementsByClassName("auth")[i].style.display = "inline";
    document.getElementsByClassName("life")[i].style.display = "inline";
    document.getElementsByClassName("life")[i].style.marginLeft = "1em";
    document.getElementsByClassName("life")[i].innerHTML = "lifetime:"+works[i].lifetime;
}
