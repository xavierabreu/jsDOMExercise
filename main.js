// Get the header element
let headerElement = document.querySelector('header');

// Get all the section elements
let allSections = document.querySelectorAll('div.col section');

// Get the section element with class="current"
let currentSection = document.querySelector('section.current');

// Get the section that comes after the current section
let nextSection = currentSection.nextElementSibling;

// Get the h2 node from the section before the 'current' section
let previousSectionH2 = currentSection.previousElementSibling.querySelector('h2');

// Get the div that contains the section that has an h2 with a class of 'highlight'
let divWithHighlight = document.querySelector('section h2.highlight').closest('div');

// Get all the sections that contain an H2 (using a single statement)
let sectionsWithH2 = document.querySelectorAll('section:scope:has(h2)');