# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview
I first built everything out on the mobile version. I started with the top with the background image, and then I started building out a job listing box. Then I started mapping out all of the components in the data.json. Next, I started working on the filtering functionality which included changing the job boxes that were shown and created the filterbox at the top of the app. I was never able to figure out how to "reverse" the filtering that was done. Finally, I started working on the desktop version.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind](https://tailwindcss.com/) - For styles


### What I learned

I learnd how to use the array filter method in a deeper way and realized that I can use array methods inside the filter method. The code below is an example of this:


```js
const filterTool = (tool: string): void => {
    const newData = initalData.filter((data) => data.tools.includes(tool));
    setData(newData);
    setFilterActive(true);
    if (filterBox.includes(tool)) {
      setFilterBox(filterBox);
    } else {
      const newItem = tool;
      const newPosition = [...filterBox, newItem];
      setFilterBox(newPosition);
    }
  };
```

### Continued development

I want to continue to hone my skills in Typescript and Tailwind and integrate my next project in Next.js


### Useful resources

- [w3schools](https://www.w3schools.com) - Documentation on methods for HTML, CSS, Javascript
- [MDN](https://www.developer.mozilla.org) - Documentation on methods for HTML, CSS, Javascript
- [StackOverflow](https://stackoverflow.com) - Good reference for past problems solved


## Author
- Frontend Mentor - [@ljcutts](https://www.frontendmentor.io/profile/ljcutts)

