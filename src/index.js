import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadReviews } from './reviews.js';
import "./style.css";

const clearContent = () => {
    document.getElementById('container').remove();
}

loadHome();

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const reviewsButton = document.getElementById('reviews');

homeButton.addEventListener('click', () => {
    clearContent();
    loadHome();
});

menuButton.addEventListener('click', () => {
    clearContent();
    loadMenu();
});

reviewsButton.addEventListener('click', () => {
    clearContent();
    loadReviews();
})
