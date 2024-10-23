# Quiz Forge

## Overview

### Purpose
Quiz forge is designed to be a revision tool in the form of an online quiz. The primary focus is programming questions. However other topics have been considered. [Live Project](https://guymitchy.github.io/hackathon/) available here.

<p align="center">
<img src="assets/readMe Images/final-product.png" alt="Image of final MVP product">
</p>
<br>


### Target Audience
There is no particular audience targeted for this application, however with Quiz forge being a quiz application with the focus on revision and learning, stating the target audience would be students or those looking learn.

## User Stories

### Must-Have User Stories
- **Game Board:** As Visual Learner, I want to a gameboard, so that i can track my progression through the quiz, to help me keep engaged  
  **Acceptance Criteria:** Gameboard must be visible and not intrusive on both desktop and mobile.

- **Answer Quiz Questions:** As a player, I want to answer quiz questions, so that I can test my programming knowledge, and advance in the game.
  **Acceptance Criteria:** Questions are presented clearly, I can submit my answers, I receive feedback on whether my answer was correct

- **Full Responsiveness:** As a player, I want the game to be responsive, so that I can play on different devices.
  **Acceptance Criteria:** Game is playable on desktop, tablet, and mobile devices, Layout adjusts appropriately to different screen sizes

- **Accessibility:** As a User of the quiz website, I require the site to be accessible, with consideration to colour contrast, fonts, images and screen reading capabilities,So I can utilise the website fully, regardless of potential visual impairments  
  **Acceptance Criteria:** All Accessibility aspects should be considered, e.g alt text, colours, fonts, colour contrast etc

- **Deployment Tests:** As a Developer, I want my deployed site to function as its supposed to, So that a user can go to the site and play the game.
  **Acceptance Criteria:** You can play the quiz from the deployed website link. No major game breaking bugs in deployed site.

### Should-Have User Stories
- **Quiz Types:** As a player, I want to be able to face different types of questions (multiple choice, true false etc), So I can the game remains engaging
  **Acceptance Criteria:** Implement at least 3 different types of questions.

- **Expandable Question Storage:** As a lazy developer, I want the question data to be stored in an expandable format, so that I can easily add or modify questions in the future.
  **Acceptance Criteria:** Questions are stored in a structured format (e.g., JSON), New questions can be added without changing the code structure

- **Scoring and Completion:** As a competitive player, I want to see my score and a win/lose screen at the end of the game, so that I know how well I performed.
  **Acceptance Criteria:** The score is displayed at the end of the game, Win/lose condition is communicated, The option to play again is provided

- **Randomised Question Devliery:** As a returning player, I want questions to be randomized each time I play, so that the game feels fresh on repeated playthrough.
  **Acceptance Criteria:** Questions appear in a different order in each game, If possible, a different set of questions is selected for each game

- **Varied Question Content:** As a player, I want to encounter a variety of programming questions, So that i can test my knowledge on different areas.
  **Acceptance Criteria:** Questions cover various programming topics. There are enough questions to avoid frequent repetition

### Could-Have User Stories
- **Timer Toggle:** As a player, I want an optional question timer to challenge myself to answer quickly.
  **Acceptance Criteria:** A timer can be toggled on/off in the settings, Time remaining is displayed during questions, Time taken to answer affects scoring (if the timer is enabled)

- **Puzzle Integration:** As a learner who enjoys puzzles, I want to solve simple puzzles (like a command-line interface simulation) to apply my programming knowledge more interactively.
  **Acceptance Criteria:** At least one puzzle type is implemented, Puzzles are interspersed with quiz questions, Clear instructions/hints are provided for how to solve the puzzles

- **Animated Traversal:** As a player who enjoys animated content, I want to see my character move smoothly between stages, so that the game feels more dynamic.
  **Acceptance Criteria:** Character visibly moves from one stage to the next, Movement animation is smooth (lerping)

- **Visual Theme Toggle:** As a player who values theme customisation, I want to choose between different visual themes, so that I can customize my game experience.
  **Acceptance Criteria:** At least two themes are available (e.g., light and dark mode), Theme can be changed from the main menu or settings

- **Storyline:** As a player that enjoys story elements, I want to experience an overarching story, so that the game feels more immersive.
  **Acceptance Criteria:** Brief story snippets are presented between stages or questions, Story elements are relevant to the programming theme

- **Audio Integration:** As a player who values audio feedback, I want to have sounds attached to actions performed within the game, to make the experience more rounded and immersive
  **Acceptance Criteria:** At least two themes are available (e.g., light and dark mode), Theme can be changed from the main menu or settings

## Design Decisions

### Project Board

To manage the [Project](https://github.com/users/GuyMitchy/projects/1/views/1) and keep track of the required tasks. Agile methodologies were adopted throughout the project by utilising User Stories, a KanBan board and holding stand up / Stand downs.

<p align="center">
<img src="assets/readMe Images/project-board.png" alt="Image of the project KanBan Board">
</p>
<br>

### Mood Board

The team decided to consolidate initial design ideas via a [Mood Board](https://miro.com/app/board/uXjVLc0PLq0=/) was created as a method of brainstorming ideas amongst the team, whilst keeping a record of the thought process. 


<p align="center">
<img src="assets/readMe Images/mood-Board.png" alt="Image of the teams mood board">
</p>
<br>

### Wireframes

Within the initial planning stage of the project, wireframes were created to provide initial layouts and to ensure all members of the team were envisioning the same design and starting point for the web application.

<br>
<p align="center">
<img src="assets/readMe Images/Desktop-view.png" alt="Wireframe image for Desktop view">
</p>
<br>
<p align="center">
<img src="assets/readMe Images/tablet-view.png" alt="Wireframe image for Tablet view">
</p>
<br>
<p align="center">
<img src="assets/readMe Images/Mobile-view.png" alt="Wireframe image for Mobile view">
</p>
<br>
<p align="center">
<img src="assets/readMe Images/Multi-choice-Q.png" alt="Wireframe image for Multiple answer Questions view">
</p>
<br>
<p align="center">
<img src="assets/readMe Images/True-False-Q.png" alt="Wireframe image for True or False Questions view">
</p>
<br>
<p align="center">
<img src="assets/readMe Images/Type-Answer_Q.png" alt="Wireframe image for Type your answer questions view">
</p>
<br>



### Accessibility Considerations

Accessibility considerations have been considered throughout the projects creation. Such as colour schemes, colour contrasts, fonts and alt text attributes are set correctly.

#### Colour Scheme

A dark background with aqua colour scheme was chosen to keep with the retro 90's computer terminal theme.

<p align="center">
<img src="assets/readMe Images/colour-scheme.png" alt="Image of the colour scheme being used">
</p>
<br>

#### Colour Contrast Checks

Colour contrast has been consider and the chosen colour scheme has been tested via an online [Colour Contrast Checker](https://webaim.org/resources/contrastchecker/). 


<p align="center">
<img src="assets/readMe Images/colour-contrast-check.png" alt="Image of the colour scheme being used">
</p>
<br>

#### Fonts

Google fonts were used within the project to enable additional customisation to the application as well adding to the general theme and feel of the application.
[Source Code Pro](https://fonts.google.com/specimen/Source+Code+Pro?query=source+mono), [Ubuntu Mono](https://fonts.google.com/specimen/Ubuntu+Mono?query=ubuntu+mono)

<p align="center">
<img src="assets/readMe Images/Ubuntu Font.png" alt="Image of Ubuntu font used for the project">
</p>
<br>

<p align="center">
<img src="assets/readMe Images/source code font.png" alt="Image of Source Code font used for the project">
</p>
<br>

## Features Implementation

### Core Features (Must-Haves)
- **Game Board:** A digital game board to show the users progression, different indicators to show if players are correct, wrong, and which icon is active.

<p align="center">
<img src="assets/readMe Images/game-board.png" alt="Image of Game Board">
</p>
<br>

- **Quiz Questions:** Quiz questions to help the user revise and test their knowledge on programming. Programming is the default topic. The quiz questions are presented to the user by a modal popup.

<p align="center">
<img src="assets/readMe Images/question-modal.png" alt="Image of Quiz Questions">
</p>
<br>

### Advanced Features (Should-Haves)
- **Questions Types:** Quiz questions provided in various types, e.g. Multiple Choice, True/False, Type Your Own Answer. By having different question types this gives an overall better user experience for the student/learner. 

<p align="center">
<img src="assets/readMe Images/multi-choice.png" alt="Image of Multiple Choice question">
</p>
<br>

<p align="center">
<img src="assets/readMe Images/true-false.png" alt="Image of True or False question">
</p>
<br>

<p align="center">
<img src="assets/readMe Images/type-own-answer.png" alt="Image of Type your own answer question">
</p>
<br>

- **Expandable Question Storage :** A feature to allow the question bank to be easily expanded upon if required. This was done via a JSON format

<p align="center">
<img src="assets/readMe Images/json-question-storage.png" alt="Image of JSON format used for storing questions">
</p>
<br>

- **Scoring And Completion:** A feature to allow a visual way of keeping score for the player.

<p align="center">
<img src="assets/readMe Images/game-score.png" alt="Image of the games scoring setup">
</p>
<br>

- **Randomised Questions:** Randomising the presented quiz questions from the initial bank of 30 quiz question


- **Varied Question Content:** Quiz questions should have varied content, taking into consideration different topics as well as adding images as question answers as well as more visual content.


### Optional Features (Could-Haves)

- **Custom Json Questions:** Additional customisation of the quiz can be done via the user submitting a custom JSON file to allow the user choose their own questions and or revision topic

<p align="center">
<img src="assets/readMe Images/json-upload-questions.png" alt="Image of JSON Upload Modal">
</p>
<br>

- **Timer Toggle:** Addition of a timer to increase the difficulty of the quiz and force the user to think quickly.

<p align="center">
<img src="assets/readMe Images/timer.png" alt="Game Board Timer Image">
</p>
<br>

- **Puzzle Integration:** The addition of more puzzles, rather than simple answer the question style questions

<p align="center">
<img src="assets/readMe Images/puzzles.png" alt="Game puzzles Image">
</p>
<br>

- **Visual Theme Toggle:** Addition of themes that can be toggled between each other. Proposed colours are aqua by default, orange, green and a light or white. These chosen colours are based off traditional terminal themes.

<p align="center">
<img src="assets/readMe Images/themes.png" alt="Game themes selection Image">
</p>
<br>

- **Audio integration:** Adding audio to the project will enhance the user experience.

<p align="center">
<img src="assets/readMe Images/audio.png" alt="Game audio Image">
</p>
<br>

- **Multiple User Question Sets:** Having the ability to create multiple question sets so that multiple users can test there knowledge 

<p align="center">
<img src="assets/readMe Images/question-sets.png" alt="Multiple Question Sets Image">
</p>
<br>


## Testing and Validation

### Testing Results
Testing the application has been an ongoing process throughout the development of the website. With a focus on responsiveness across all standard screen sizes, various edits were made throughout the development process to ensure the application looks and performs well on mobile, tablet and desktop. The team agreed to deploy early to allow to additional live testing encase there were any inconsistencies between the development environment and the live application.

### Known Bugs

- **Bug:**
Quiz question icons, don't scale properly on higher resolution screens, the question icons are really small on the screen.
- ***Fix:***
Issue resolved, bug was created due to different zoom levels on different developers screen sizes.

- **Bug:**
Random question list generator goes into infinite loop due to use of while.
- ***Fix:***
prevent while loop from starting when number of questions is larger than the list of possible questions.

- **Bug:**
Footer expands past boundary of game board, creating white space and scroll on mobile phones
- ***Fix:***
Pending (Add burger icon for mobile devices?)

- **Bug:**
Text in json files where code has been used as an answer, the answer gets interpreted as code.
- ***Fix:***
html characters in string not displaying properly was: use string.replaceAll to replace < and > characters with correct HTML escape characters - &lt; and &gt; respectively.

- **Bug:**
Close button on display questions modal not working
- ***Fix:***
Corrected indexing to fix this issue

### Validation
Validators were used to help address any issues within the projects HTML, CSS and Javascript files. [HTML Validator](https://validator.w3.org/), [CSS Validator](https://jigsaw.w3.org/css-validator/), [JavaScript Linter]()

<p align="center">
<img src="assets/readMe Images/html-validator.png" alt="HTML Validator Checks">
</p>
<br>

<p align="center">
<img src="assets/readMe Images/css-validator.png" alt="CSS Validator Checks">
</p>
<br>

<p align="center">
<img src="assets/readMe Images/js-linter.png" alt="JavaScript Linter Checks">
</p>
<br>


## Deployment

### Deployment Process
For this project, GitHub pages was the chosen deployment method. A simple and straight forward service provided by github which uses a repo branch as a source for the page to pull from.

<p align="center">
<img src="assets/readMe Images/github-pages.png" alt="Github Pages Deployments image">
</p>
<br>

## Development Team

- **Guy Clements:**
[GitHub](https://github.com/GuyMitchy)

- **Zara Samm:**
[GitHub](https://github.com/ZASamm)

- **Nathan Jones:**
[GitHub](https://github.com/NSJ021)

- **Richard Hallam:**
[GitHub](https://github.com/Richard-Hallam)

- **James Vanstone:**
[GitHub](https://github.com/JamesVanstone)

## Reflection on Development Process

### Successes
One of the key successes was creating the retro 90's style computer terminal for the Quiz's game board. The entire team contributed to the structure, layout and theme to achieve this.

### Challenges
After deciding on using a JSON format for the storage of quiz questions, Utilising this format as well as linking and looping through the questions in Javascript proved problematic with Javascript's Arrays.

### Final Thoughts
Overall the Quiz Forge project went very well, there were ups and downs as to be expected, Javascript was both kind and hard to tame at the same time. Ensuring the application looks great and responded smoothly and correctly was an ongoing yet enjoyable battle.

The development worked very well together with little to no issues. Stand ups and Downs took place everyday where progress was summarised and a game plan for the next day was formed. Throughout various discussions the entire group was involved in communicating their view, problem, concern or solution.

## Code Attribution
Shuffle function is from this [Stackoverflow Javascript Shuffle](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)

## Future Improvements
With regards to future improvements, generally speaking additional functionality and customisation would be the main areas of focus. For example, extending the quiz's question bank, featuring different topics, additional more challenging questions in the form of puzzles. By utilising JSON as the question storage format, with additional development the user would be given the ability to configure the quiz system to their liking via uploading a custom JSON file to change the content of the quiz.
