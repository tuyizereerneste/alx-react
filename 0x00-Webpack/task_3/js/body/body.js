import $ from 'jquery';
import { debounce } from 'lodash';
import './body.css';

$(function() {
    // Append elements to the body
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="clickButton">Click here to get started</button>');
    $('body').append('<p id="count"></p>');

    // Initialize the count
    let count = 0;

    // Function to update the counter
    function updateCounter() {
        count += 1;
        $('#count').text(`${count} clicks on the button`);
    }

    // Get the button element
    const button = $('#clickButton');

    // Bind the debounce function from Lodash to the click event
    button.on('click', debounce(updateCounter, 500));
});

