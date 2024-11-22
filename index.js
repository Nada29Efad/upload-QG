const quotes = [
    '" The best thing about a boolean is even if you are wrong, you are only off by a bit ".',
    '" Without requirements or design, programming is the art of adding bugs to an empty text file ". ',
    '" Before software can be reusable it first has to be usable ".',
    '" The best method for accelerating a computer is the one that boosts it by 9.8 m/s2 ".',
    '" I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing ". ',
    '" There are two ways to write error-free programs; only the third one works ".',

]
const names = [
    '--Jim Rohn',
    '--Epictetus',
    '--Frank Sinatra',
    '--Wayne Gretzy',
    '--Nelson Mandela', 
    '--Elbert Hubbard', 
]

function displayQuote(){
    const randomIndex=Math.floor(Math.random()*quotes.length);
   document.getElementById("quote").textContent=quotes[randomIndex];
   document.getElementById("names").textContent=names[randomIndex];
    
}
