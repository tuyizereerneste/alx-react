import $ from 'jquery';
import './footer.css';

$(function () {

    // Append elements to the footer
    $('body').append('<p id="footer">Copyright - Holberton School</p>');

    console.log('Init footer');
})