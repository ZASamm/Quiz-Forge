# Quiz Forge

## Overview

### Purpose
Quiz forge is designed to be a revision tool in the form of an online quiz. The primary focus is programming questions. However other topics have been considered.

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

### Wireframes

Within the initial planning stage of the project, wireframes were created to provide initial layouts and to 

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

<p align="center">
<img src="assets/readMe Images/colour-scheme.png" alt="Image of the colour scheme being used">
</p>
<br>

#### Colour Contrast Checks

<p align="center">
<img src="assets/readMe Images/colour-contrast-check.png" alt="Image of the colour scheme being used">
</p>
<br>

#### Fonts

<p align="center">
<img src="assets/readMe Images/" alt="Image of font used for the project">
</p>
<br>

## Features Implementation

### Core Features (Must-Haves)
- **Game Board:** A digital game board to show the users progression, different indicators to show if players are correct, wrong, and which icon is active.

<p align="center">
<img src="assets/readMe Images/" alt="Image of Game Board">
</p>
<br>

- **Quiz Questions:** Quiz questions to help the user revise and test their knowledge on programming. Programming is the default topic. The quiz questions are presented to the user by a modal popup.

<p align="center">
<img src="assets/readMe Images/" alt="Image of Quiz Questions">
</p>
<br>

### Advanced Features (Should-Haves)
- **Feature 1:** Description of the implemented feature.
- **Feature 2:** Description of the implemented feature.

(Include all should-have features)  
**Guidance:** Include any advanced features you implemented during Phase 3: Should User Stories Implementation & Any Advanced Features. Explain how these features enhance user experience and their alignment with the acceptance criteria.

### Optional Features (Could-Haves)
- **Feature 1:** Description of the implemented feature (if any).
- **Feature 2:** Description of the implemented feature (if any).

(Include any could-have features that were implemented or considered)  
**Guidance:** If any could-have features were implemented, describe them here. This is an opportunity to showcase extra work done beyond the initial scope. But remember - keep it simple! Focus on the Must stories first. Could user story features are commonly earmarked for future project iterations.


## Testing and Validation

### Testing Results
Summarize the results of testing across different devices and screen sizes.  
Mention any issues found and how they were resolved.  
**Guidance:** Summarize the results of your testing across various devices using tools like Chrome DevTools, as outlined in Phase 2. Mention any issues found and how they were resolved.

### Known Bugs

Quiz question icons, don't scale properly on higher resolution screens, the question icons are really small on the screen.

### Validation
Discuss the validation process for HTML and CSS using W3C and Jigsaw validators.  
Include the results of the validation process.  
**Guidance:** Document your use of W3C and Jigsaw validators to ensure your HTML and CSS meet web standards. Include any errors or warnings encountered and how they were resolved.


## Deployment

### Deployment Process
Briefly describe the deployment process to GitHub Pages or another cloud platform.  
Mention any specific challenges encountered during deployment.  
**Guidance:** Describe the steps you took to deploy your website during Phase 4: Final Testing, Debugging & Deployment, including any challenges encountered.

## AI Tools Usage

### Reflection
Describe the role AI tools played in the deployment process, including any benefits or challenges.  
**Guidance:** Reflect on how AI tools assisted with the deployment process, particularly how they streamlined any tasks or presented challenges.

## Reflection on Development Process

### Successes
Effective use of AI tools, including GitHub Copilot and DALL-E, and how they contributed to the development process.

### Challenges
Describe any challenges faced when integrating AI-generated content and how they were addressed.

### Final Thoughts
Provide any additional insights gained during the project and thoughts on the overall process.  
**Guidance:** Begin drafting reflections during Phase 1 and update throughout the project. Finalize this section after Phase 4. Highlight successes and challenges, particularly regarding the use of AI tools, and provide overall insights into the project.

## Code Attribution
Properly attribute any external code sources used in the project (excluding GitHub Copilot-generated code).  
**Guidance:** Document any external code sources used throughout the entire project, especially during Phase 2 and Phase 3. Exclude GitHub Copilot-generated code from attribution.

## Future Improvements
Briefly discuss potential future improvements or features that could be added to the project.  
**Guidance:** Reflect on potential enhancements that could be made to the project after Phase 4: Final Testing, Debugging & Deployment. These could be Could user story features you didn’t have time to implement or improvements based on testing feedback.

