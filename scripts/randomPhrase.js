var quotes = [
    "I wish u happi happi day ^^",
    "I could eat a huge piece of strawberry cake right now (๑>◡<๑)", 
    "Love is like Pi: natural, irrational, and very important ♡⸜(˃ ᵕ ˂ )⸝",
    "U're the BEST!!! ( ≧ᗜ≦)",
    "I feel a little sleepy (＿ ＿*) Z z",
    "YAYYYY ♪",
    "Wiggle with meeee ♬",
    "Make yourself at home ^^",
    "Click on me!!!",
    "Click on me mooore!!!!!",
    "Talk to meee",
    "Talk to me more!!!",
    "Did you know that you are wonderful? ♡( ◡‿◡ )",
    "I hope you enjoy your time on this site ♡",
    "WOOO HOOO",
    "I can talk all day!!!",
    "I believe in you ⸜(｡˃ ᵕ ˂ )⸝♡",
    "I love you <3",
    "I hope your day is going well~",
    "I want to eat something sweet!",
    "There's nothing better than strawberry jam!",
    "I'm a little tired of standing here...",
    ":3",

    "Did u know that strawberries contain a large amount of vitamins? By eating 100 grams of juicy and aromatic strawberries, you will fill 98% of the daily requirement of this substance in the body (๑•᎑•๑)",
    "Did you know that there are just over 300 species of strawberries growing on earth? 	(o_O)",
    "Strawberries contain a lot of vitamin B. It is a safe and natural antidepressant. Eating 200-250 grams of fresh strawberries daily can strengthen your nervous system. And if you dry strawberries and then brew them with lemon balm, you will get a delicious and healthy soothing herbal tea (≧◡≦)",
    "Did u know that strawberry’s botanical name is “Fragaria ananassa”?",
    "Did u know that strawberry is a member of the rose family and it is the only fruit which has seeds outside?",
    "Did u know that strawberries are also in yellow, blue, white, black and purple color?",
    "Did u know that there is a museum dedicated to strawberries in Wepion, Belgium?",
    "Did u know that February 27th is National Strawberry Day?",
    "Did u know that there are around 200 tiny seeds in every strawberry?",
    "Did u know that strawberries mainly consist of water (91%) and carbohydrates (7.7%). They contain only minor amounts of fat (0.3%) and protein (0.7%)?",
    "Did u know that Strawberries make the brain work better?",
    
    "Have you already looked at my <a href='website.html'>Website</a>?",
    "Have you already looked at my <a href='terminal.html'>Terminal</a>?",
    "Have you already written something in my <a href='cbox.html'>Chatbox</a>?",
    "Have you already visited my <a href='garden.html'>Web Garden</a>?",
    "Did you know that you can change color theme of this site?",
    
    
    
    "Did you know that there is no official HTML 1.0 specification? Before 1995, there were many unofficial HTML standards. To make the standard version different from them, it was immediately given a second number",
    "Did you know that the fourth version of HTML (4.0) was released on December 18, 1997, and the fifth (HTM5) only 17 years later - on October 28, 2014.",
    
    "What do you call a sad strawberry? A blueberry!",
    "What did the strawberry say before robbing a house? 'Hands up, this is a stroberry!'",
    "I always forget the french word for strawberry but I eventually remember the fraise",
    "What do you call a microscopic strawberry? A strawbarely.",
    "How do you call a bunch of strawberries playing the guitar? A jam session.",
    
    "<img src='https://media.tenor.com/M9FNi9FnSu8AAAAC/bleh-cat.gif'>",
    "<img src='https://forum.vimeworld.com/uploads/monthly_2021_12/boa-kwon-min.thumb.gif.c425ed49640b8e5fb651fe5ce058598e.gif'>",
    "<img src='https://i.pinimg.com/236x/f6/6d/30/f66d30487793ea8be373af464654251f.jpg?nii=t'>",
    "<img src='https://media.tenor.com/Do2tfm6klgQAAAAM/cat-kitten.gif'>",
    "<img src='arts/strawber.png' width='256' height='256'>",

    
    
];

document.getElementById("bebby").addEventListener("click", function() {
   
    // выбираем случайную фразу из массива
    // данные в массив могут попадать и через api
    var quote = quotes[ Math.floor( Math.random() * quotes.length ) ];

    // цитата
    var phrase = document.querySelector("#phrase");

    phrase.innerHTML = quote;  
});