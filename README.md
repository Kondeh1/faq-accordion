# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This project demonstrates the foundational principles of web development. Using HTML for structure, CSS for styling, and JavaScript for interactivity, I built a functional and visually appealing user interface that is fully responsive. This hands-on experience has been vital in my journey to create modern web applications.

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./Screenshots/Screenshot%202025-09-22%20101634.png)
![](./Screenshots/Screenshot%202025-09-22%20101649.png)
![](./Screenshots/Screenshot%202025-09-22%20101854.png)
![](./Screenshots/Screenshot%202025-09-22%20101829.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript (jQuery)

### What I learned

This project has been vital to my development journey, as I've learned how to effectively manipulate elements using HTML, CSS, and JavaScript.

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
@media (max-width: 480px) {
  body {
    margin: 0;
    padding: 0;
  }
  .container {
    width: 260px;
    margin-top: 200px;
  }

  .parent {
    width: 100vw;
  }

  .banner {
    width: 100vw;
  }

  .answer {
    width: 250px;
  }
}
```

```js
$(".plus").click(function () {
  var targetAnswer = $(this).closest(".question").next(".answer");

  $(".answer").not(targetAnswer).slideUp();

  $(".plus").not(this).attr("src", "./assets/images/icon-plus.svg");
});
```

### Continued development

I will continue to keep learning on how to manipulate complex element by using javaScript.

## Author

- Website - [Moriba Sahr Kondeh](https://www.your-site.com)
- Frontend Mentor - [@Kondeh1](https://www.frontendmentor.io/profile/Kondeh1)
- Twitter - [@KondehMe](https://www.twitter.com/KondehMe)

## Acknowledgments

In acknowledgment, i want to thank New Tamba Sam a gentle man who has been helping me to understand some core things not only in this project but in many projects and i want to acknowledgment my MOM for keep trusting and beleving in me by investing in me to learn more may God keep you alive so that all the investement you have invest in me you shall enjoy it in jesus name, I love you MOM 🥰
