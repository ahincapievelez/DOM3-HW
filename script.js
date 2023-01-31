let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  let mainTitle = document.querySelector('#main-title')
  mainTitle.innerHTML = 'Hi! I\'am DOM Toretto. Enjoy the website'

  // Part 2
  let body = document.querySelector('body')
  body.style.backgroundColor = '#FFFBF5' 

  // Part 3
  let favoriteThings = document.getElementById('favorite-things')
  favoriteThings.removeChild(favoriteThings.lastElementChild)

  // Part 4
  let specialTitle = document.querySelectorAll('.special-title')
  specialTitle.forEach(element => {
    element.style.fontSize = '2rem'
  });

  // Part 5
  let pastRaces = document.querySelectorAll('#past-races li')
  for (let i = 0; i < pastRaces.length; i++) {
    if(pastRaces[i].textContent == 'Chicago'){
      pastRaces[i].innerHTML = ''
    } 
  }

  // Part 6
  let li = document.createElement('li')
  li.textContent = 'Boston'

  const ul = document.querySelector('#past-races')
  ul.appendChild(li)

  // Part 7
  const div = document.createElement('div')
  div.classList.add('blog-post')

  let h2 = document.createElement('h2')
  h2.textContent = li.textContent

  let p = document.createElement('p')
  p.textContent = 'WE VISITED THE ENCORE COSINO'

  div.appendChild(h2)
  div.appendChild(p)

  let blogPosts = document.querySelector('.main')
  blogPosts.appendChild(div)

  // Part 8
  let quoteButton = document.getElementById('quote-title')
  quoteButton.addEventListener('click', function(evt){
    randomQuote();
  })
  // Part 9
  let posts = document.querySelectorAll('.main .blog-post')
  console.log(posts)
  posts.forEach(post => {
    post.addEventListener('mouseout', function(evt){
      evt.target.classList.toggle('purple')
    })

    post.addEventListener('mouseenter', function(evt){
      evt.target.classList.toggle('red')
    })
  });

});
