# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

Desktop
[Desktop]("images/Screenshot_Frontend_Mentor_FAQ_Accordion_Card_Desktop.png")

Desktop Active
[Desktop Active]("images/Screenshot_Frontend_Mentor_FAQ_Accordion_Card_Desktop_Active.png")


### Links

- Solution URL: https://github.com/VernonDodo/faq-accordian-card.git
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
- Started off with a Bootstrap container class because it was pre-styled for the purpose of containing elements.
- Then added two columns to the container - one for the images, and one for the accordion
- Added the images to the Images column and styled them according to the style guide.
- To create the accordion, I used a combination of pre-styled bootstrap elements and semantic HTML 5
- Once all the elements were in place, I used CSS to style them according to the style guide.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Styled Components](https://getbootstrap.com/)



### What I learned
I have a good grasp of HTML. What this particular challenge has helped me with, was to improve on my CSS skills.

On the Javascript front, I struggled with adding event listeners to elements but I finally perservered. I am particularly proud of the following piece of code to toggle the accordion button:

if (panel.style.maxHeight) {
  panel.style.maxHeight = null;
} else {
  panel.style.maxHeight = panel.scrollHeight + "px";
}

### Continued development

I definitely need to take a deeper dive into designing frontends because design is not my strongest suit. To this end, I am going to do small design challenges daily to improve on my design skills and especially my styling with CSS.


### Useful resources

- [CSS Tricks](https://css-tricks.com/) - This was particularly helpful with styling CSS Flexbox
components.
- [W3 Schools](https://www.w3schools.com/) - This was very useful for basic concepts of both HTML, CSS, and Javascript

## Author

- Github - [Vernon Dodo](https://github.com/VernonDodo)
- Frontend Mentor - [@VernonDodo](https://www.frontendmentor.io/profile/VernonDodo)
- Twitter - [@likeavernon](https://www.twitter.com/likeavernon)


