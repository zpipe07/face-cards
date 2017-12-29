# Face Cards

## Description
This is my very first time developing an application with Redux. I learned a lot from the wonderful documentation at [redux.js.org](https://redux.js.org/). I tried to follow their conventions closely.

This is also my first time using custom CSS properties. I was pretty impressed. It's nice to have native support for variables in CSS. If this was a production app I would potentially need to provide fallback support.

## Improvements
- Improve test coverage. I am currently only unit testing logic around Redux. I decided against testing my React components due to time constraints and the simplicity of the components. In a production app I would want to test these.
- I would love to smooth out the transitions between cards and posts being loaded. It is jarring at the moment, and I believe subtle transitions can really improve UX.

## ToDos
- split reducers into users and posts
- figure out why arrayContaining() is not a function

<!--
using `node v8.1.4`

# Face Cards

Much of the work at SendGrid involves pulling in data from multiple sources and combining them into one, cohesive presentation.

This problem is separated into two tasks. First, display three "cards" for randomly-selected users which displays their name, email address, company catchphrase, and, of course, their adorable avatar. Second, display 5 randomly-selected posts when a user clicks on an individual card.

## Getting Started

Click on the name of the application in the upper-left corner and select "Remix". This your own special version of the application that you'll be working in. We'll need you to send us this URL.

If you want to work on this locally, click on the name of the project in the upper-left corner, select "Advanced Options" and either download the project or export it to Github.

If you're looking to run your unit tests from within Glitch, then you can select "Open Console" from the "Advanced Options" and run `npm test`.

If you have any issues. Download the project and work on it locally. Send us the zip file.

## Time Expectations

We would expect this task to only take about 3 hours to complete. It's okay to go over if you're enjoying yourself, but if you go too much beyond please add some comments on how you would see yourself finishing this, what changes you might make, etc. and make your submission.

## General Requirements

1. Use React, Jest, and your favorite library for managing state to create the simple application described below.
2. Write clean, concise, self-documenting code.
3. Write small, easily-testable components.
4. Write unit tests and ensure code coverage.

Familiarize yourself with the [Jest documentation](https://facebook.github.io/jest/).

## Technical Requirements

### Part 1

1. Fetch user data from `https://jsonplaceholder.typicode.com/users` via AJAX.
2. Select three unique users at random.
3. Display a card for each of the three randomly selected users (see mockups below).
4. Cards are 350px by 206px.
5. The avatar images are provided by `http://avatars.adorable.io`. The `<img>` element's `src` attribute will be in the format of `https://api.adorable.io/avatars/150/<email>.png`.
6. You may use any JavaScript library not already provided to achieve the desired functionality.

### Part 2

1. When a user clicks on a card, perform an AJAX request to `https://jsonplaceholder.typicode.com/posts?userId=<USER ID>`.
2. Select five unique posts at random.
3. Display the title and body of each post below the original three cards (see the mockups below).
4. The title should always render Capitalized Words.


## Reference Material

[part1]: https://s3.amazonaws.com/istreet-assets/1xbaS_Iw9maIlJcSfD2okQ/Challenge%20-%20Closed%20-%20Redlines.png "Part 1"
[part2]: https://s3.amazonaws.com/istreet-assets/sHqSvjzUfe8RkpjY4t_0ww/Challenge%20-%20Open%20-%20Redlines.png "Part 2"

### Part 1 Design

![Design for Part 1][part1]

### Part 2 Design

![Design for Part 2][part2] -->
