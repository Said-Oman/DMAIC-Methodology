# DMAIC Methodology Project

This project aims to show how to make functionality using HTML, CSS, and JavaScript.


## Table of Contents

- [Project Files](#project-files)
- [Instructions](#instructions)
- [HTML Structure](#html-structure)
- [CSS Styles](#css-styles)
- [JavaScript Functionality](#javascript-functionality)

## Project Files
The project consists of the following files:

1. `index.html`: The HTML file contains the structure of the landing page, including sections, navigation menu, and scroll-to-top button.
2. `css/styles.css`: The CSS file contains the styles for the landing page, including layout, typography, navigation, header, footer, and section styles.
3. `js/app.js`: The JavaScript file contains the functionality for the landing page, including dynamically building the navigation menu, scrolling to sections, highlighting the active section, hiding the navigation bar when not scrolling, and showing the scroll-to-top button.

## HTML Structure

The HTML structure follows the BEM naming convention and consists of the following main elements:

- `<header>`: Represents the page header that contains the navigation menu.
- `<nav>`: Contains the unordered list (`<ul>`) that will be populated dynamically with JavaScript to create the navigation menu.
- `<main>`: Contains the main content of the landing page, including sections with unique IDs and data attributes for the navigation links.
- `<section>`: Represents each section of the DMAIC Methodlogy. Each section has an ID and a data attribute that will be used to create the navigation links.

## CSS Styles

The CSS file (`css/styles.css`) contains styles for the landing page layout, typography, navigation menu, header, footer, and sections. It uses a combination of classes and IDs to target specific elements and apply styles. The layout is designed to be responsive and adapt to different devices.

## JavaScript Functionality

The JavaScript file (`js/app.js`) provides the interactivity for the landing page. It implements the following functionality:

- Building the navigation menu dynamically based on the sections in the HTML.
- Scrolling to the corresponding section when a navigation menu item is clicked.
- Highlighting the active section based on the viewport's position.
- Hiding the navigation bar when the user stops scrolling.
- Showing the scroll-to-top button when the user scrolls below the fold and scrolling to the top when the button is clicked.
- The code uses event listeners, DOM manipulation, and CSS class manipulation to achieve the desired functionality.

