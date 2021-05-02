const hamburger = document.querySelector('.hamburger');
const barOne = document.querySelector('.bar1');
const barTwo = document.querySelector('.bar2');
const barThree = document.querySelector('.bar3')
const links = document.querySelector('div.nav-bar .nav-links');
const navBarDiv = document.querySelector('.nav-bar');

hamburger.addEventListener('click', (e) => {
    barOne.classList.toggle('bar-one');
    barTwo.classList.toggle('bar-two');
    barThree.classList.toggle('bar-three');

    links.classList.add('link');
    links.classList.toggle('active');
}); 