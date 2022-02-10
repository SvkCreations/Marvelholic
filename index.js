function animateOnHover(cards, text, folder){
  cards.forEach((element, index) => {
    element.style.cssText = `background-image: url('Images/${folder}/${
      index + 1
    }.jpg');background-size:cover; background-position:center; background-repeat:no-repeat`;
    element.addEventListener("mouseover", () => {
      element.style.cssText = `background-image: linear-gradient(to left, transparent, #360b0b),url('Images/${folder}/${
        index + 1
      }.jpg'); cursor:pointer;background-size:cover; background-position:center; background-repeat:no-repeat`;
      text[index].style.display="block";
    });
    element.addEventListener("mouseout", () => {
      element.style.cssText = `background-image: url('Images/${folder}/${
        index + 1
      }.jpg');background-size:cover; background-position:center; background-repeat:no-repeat`;
      text[index].style.display="none";
    });
  });
}
let movieCards = document.querySelectorAll('.streaming-cards');
let movies = document.querySelector('.streaming-movies');
let cards = Array.from(movieCards);
let text = movies.querySelectorAll('.text');
animateOnHover(cards,text,"Streaming");


let seriesCards = document.querySelectorAll('.series-cards');
let series = document.querySelector('.streaming-series');
let seriesArray = Array.from(seriesCards);
let seriesText = series.querySelectorAll('.text');
animateOnHover(seriesArray,seriesText,"Series");

let upcomingCards = document.querySelectorAll('.upcoming-cards');
let upcoming = document.querySelector('.upcoming');
let upcomingArray = Array.from(upcomingCards);
let upcomingText = upcoming.querySelectorAll('.text');
animateOnHover(upcomingArray,upcomingText,"Upcoming");
