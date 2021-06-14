var names= ["Anna Johnson","Peter Jones","Bill Anderson","Susan Smith"];
var posts=["WEB DESIGNER","INTERN","THE BOSS","WEB DEVELOPER"];
var infos=["Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.","Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.","Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.","I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"];
var pics=["person-1.jpeg","peter.jpg","boss.jpg","susan.jpg"];

var count=0;
const previousButton=document.querySelector('.prev-btn');
const nextButton=document.querySelector('.next-btn');
const nameTag=document.querySelector('.name');
const postTag=document.querySelector('.post');
const infoTag=document.querySelector('.info');
const picTag=document.querySelector('.pic');

previousButton.addEventListener("click",()=>{
    count--;
    
    if(count ==-1)
        {
            count=3;
     
        }
        if(count == 4)
        {
            count=0;
        }
       
        nameTag.textContent=names[count];
        postTag.textContent=posts[count];
        infoTag.textContent=infos[count];
        picTag.src=pics[count];
        
    
});
nextButton.addEventListener("click",()=>{
    count++;
    
    
    if(count ==-1)
        {
            count=3;
     
        }
        if(count == 4)
        {
            count=0;
        }
       
        nameTag.textContent=names[count];
        postTag.textContent=posts[count];
        infoTag.textContent=infos[count];
        picTag.src=pics[count];
});

