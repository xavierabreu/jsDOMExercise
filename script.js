// Get the header element
let headerElement = document.querySelector('header');
console.log('Header Element:', headerElement);

// Get all the section elements
let allSections = document.querySelectorAll('div.col section');
console.log('All Sections:', allSections);

// Get the section element with class="current"
let currentSection = document.querySelector('section.current');
console.log('Current Section:', currentSection);

// Get the section that comes after the current section
let nextSection = currentSection.nextElementSibling;
console.log('Next Section:', nextSection);

// Get the h2 node from the section before the 'current' section
let previousSectionH2 = currentSection.previousElementSibling.querySelector('h2');
console.log('Previous Section H2:', previousSectionH2);

// Get the div that contains the section that has an h2 with a class of 'highlight'
let divWithHighlight = document.querySelector('section h2.highlight').closest('div');
console.log('Div with Highlight:', divWithHighlight);

// Get all the sections that contain an H2 (using a single statement)
let sectionsWithH2 = document.querySelectorAll('section:scope:has(h2)');
console.log('Sections with H2:', sectionsWithH2);