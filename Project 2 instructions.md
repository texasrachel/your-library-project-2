# PROJECT 2: Your Front End React App

Congratulations! You are nearly done with Unit 2, which means you have conquered the basics of HTML, CSS, and Javascript. Now we get to kick it up a notch with modular and modern front-end applications using the React framework.

As with P1, the Unit 2 Project is a chance to be creative, build something you can be proud of, and add it to your portfolio. You will be working individually on this project, but we'll be helping you out along the way.

Remember to have fun and _read all the directions before you start_!

# OVERVIEW

## MVP Requirements

**In order to pass, ALL MVP requirements must be met.**

This project, like the one prior, will be a portfolio piece. For a portfolio piece to be complete, it **must** demonstrate an understanding of - and an ability to use - the tools and techniques introduced in this unit. It should be functional with sufficient complexity, meeting the following requirements:

### Planning 

- Have a **thoroughly** developed `README.md` file. (Refer below to _"Step 5: Pitch Your Project Idea"_ for more.)

### React 

- Be a working, interactive React app, built using `create react app`.
- Utilize React Router, installed via NPM. 
- Have at least 6 separate, rendered components.
- Implement an organized and understandable React file structure.
- Utilize functional components appropriately.
- Use Axios to consume data from Airtable, and GET/render that data in your components.
- Use Axios to POST/create new data on Airtable.
- Use Axios to **either** PUT/update **or** DELETE to Airtable (You pick which one you want to use either PUT or DELETE)
- Use **only** React for DOM Manipulation.

### Styling 

- Be styled, use any combination of CSS, Styled Components, CSS-in-JS, or a component library to style your React project.
- Use flexbox (`display: flex`) or CSS Grid (N/A if using a component library that handles this).
- Implement responsive design on 2 screen sizes, using a media query (desktop and mobile and N/A if using a component library that handles this).
  
### Linting 

- Indent properly.
- Utilize high-quality, semantic variable names.
- Follow `camelCase`, `kebab-case` and `PascalCase` conventions in your code
- Remove unnecessary boilerplate React files and code.
- Remove all `console.log()`s and commented out code (functional notes and comments are acceptable).

### Deployment

- Deployed via Netlify.

### Procedural 

- Commit early and often! Have GitHub commits (documenting substantial progress) **every day**. You should have a **minimum** of 50 commits total.

## The Presentation

Finally, to get you familiar with presenting your work to audiences, the last requirement: 

- Present your app to your cohort. Be sure to show it's functionality and features, including responsiveness. (Chrome Dev Tools' _Device Toolbar_ is helpul for this.)


# GETTING STARTED

## ~~STEP 1.~~ Read All Directions Before You Start

- [x] _We'll know if you don't._


## ~~STEP 2.~~ Create a [Whimsical](https://whimsical.com) wireframe of your app

- [x] Create mid-fi wireframes for mobile and desktop using [Whimsical](https://whimsical.com/)
- [x] Your wireframes should reflect what you will build
- [x] Pay attention to detail

> - [x] Remember you will need GET, POST, and either PUT or DELETE in your app

**☑️ Once your wireframe is approved by your instructor you can proceed to the next steps**

## ~~STEP 3.~~ Create a component hierarchy in your [Whimsical](https://whimsical.com/)

- [x] Create a component hierarchy in your Whimisical next to your wireframe
- [x] Your component hierarchy should reflect what you will build in react
- [x] Remember the minimum requirements for MVP is 6 React components

## ~~STEP 4.~~ Make A New Github.com Repo use [kebab-case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles) to name it!

- [x] Create a new Github repo on github.com (make sure you include a Readme.md)
- [x] Clone down the repo
- [x] cd into the repo
- [x] `npx create-react-app client`
- [x] make sure to add, commit, and push up the repo

_(Refer to the Resources section below if you need help with this.)_

| **DO**                              | **DO NOT**                      |
| ----------------------------------- | ------------------------------- |
| ... Use your personal GitHub.       | ... Use your Enterprise GitHub. |
| ... Make a new repo through GitHub. | ... Clone this SEI repo.        |
| ... Make the new repo public.       | ... use capital letters.        |


## ~~Step 5.~~ Setup your Airtable

- [x] Create a new Airtable base.
- [x] Create your Airtable columns according to your wireframes
- [x] Keep it simple at first (You can always add more columns later)
- [x] Navigate to https://airtable.com/api
https://airtable.com/app0vrHmHR45kdrtT/api/docs#curl/introduction

## STEP 6. Work on your Readme.md

IF you want an example of a stellar README, [check this out](https://github.com/mikanur10/What-cha-Think/blob/main/cha-think/README.md)!

1. **Title:** A working title for your app. (Feel free to have some fun with this.)
2. **Description:** 4 to 5 sentences in non-technical speak summarizing the features, functions, and goals.
3. **Wireframes:** A link or screenshot to your whimisical mockups of your app on desktop and mobile.
4. **Component Hierarchy:** A link or screenshot to your whimisical visual tree of your components, depicting the parent/child relationships, as well as an indication of which will be class components, requiring state, and which will be functional components, taking props.
5. **API:** How you will be using Airtable to handle your data, as well as a sample data pull from your Airtable database.
6. **MVP:** Your goals for MVP, including the minimum, need-to-have features of your app.
7. **Post-MVP:** Write out what your goals are for post-MVP, including nice-to-have features that you would like to implement once your MVP is complete. (If you plan to use a component library, please link that here as well.)
8. **Project Schedule:** Lay out your timeline for your project, from proposal to deployment.
9. **Timeframes:** Estimate out how much time you'll need for each part of your project! This will help you determine your schedule as well as how to prioritize certain features.
10. **SWOT Analysis:** Heading into project week and with all your planning in mind, consider your Strengths, Weaknesses, Opportunities, and Threats as they relate to your final project. How will you overcome your weaknesses and threats?

> [Project 2 README Template](https://git.generalassemb.ly/sei-nyc-chickadee/project-2/blob/master/Project-Template.md)
>
> Optionally, include a final section, your `Code Showcase`. Put snippets you're proud of here, and let your viewers know when you've written brag-worthy code!
>
> For putting wireframes in your ReadMe, we recommend uploading to Imgur, then linking the file directly into your markdown using the `![imageAlt](imageURL)` format. The imageURL must be a direct link ending with the file format, such as `.png`.

| **DO**                                  | **DO NOT**                        |
| --------------------------------------- | --------------------------------- |
| ... Create a ReadMe file locally.       | ... Leave your ReadMe empty.      |
| ... Add, commit & push your ReadMe.     | ... Leave your GitHub repo empty. |
| ... Have your Pitch materials prepared. | ... Waste the instructors' time.  |


## STEP 7. Get Hacking

Once your Readme is **approved by an instructor you can start coding!**

### Deploy Early and Often! 

### Squad Standups 

All students will be grouped into a squad. Every morning squads will do standups, where each person will answer:

1. What did you work on?
2. What will you work on?
3. What's something you expect will block your progress?

After this, we'll go around the squad once more, indicating what "percent MVP" you are at with your project. Remember, the purpose of these check-ins is **not** to discuss technical questions, but to answer questions about workflow and get a status check-in.

### Getting Unstuck 

Remember, two things:

1. Don't hesitate to write messy code to solve short-term problems; you can always refactor later!
2. Read the documentation for whatever technologies you use! The docs often include a tutorial that can help you get started, and learning to read documentation is crucial to your success as a developer.

### Getting Support 

Instructors will not be holding open office hours during project week. This is to give you the opportunity to solve issues and errors you run in to on your own and with your classmates. 

To receive support, file an issue ticket on your project's git repository to both provide the instructor with a point of reference regarding your code and the issue you are having. This will enable us to give you more effective guidance.

(We also strongly recommend using Slack to get help from your classmates. Chances are you all will be running into similar problems!)

When you submit an issue ticket, you must use the issue ticket template and include all sections.

# RECOMMENDATIONS

_(From previous survivors of project weeks.)_

> "This is a nice chance to make a portfolio piece, but you don't expect perfection. After graduating the SEI, no matter how great your project is now, you will want to return to it to improve and polish, before recruiters and potential employers see it."

> "Manage your expectations. Have a clear MVP goal and stick to it. If you're doing something that has nothing to do with your end goal, stop it. Also, try to just get your project working and improve it from there. Don't try to make it perfect the first time because you'll probably be unsuccessful. Get it working, make it better, repeat."

> "Mobile-first design, stick to your wireframes; it’s stressful to redo your whole CSS and lose precious project time."

> "Narrow your scope, especially if you’re chasing down a specific feature that you’ve never implemented.  Treat it as a chance to learn by doing and most importantly: build something you are happy to claim ownership of."

> "Don’t try too hard. Really. Do something that’s achievable and put cool graphics and styling on it."

### SAMPLE PROJECTS
Here are some previous P2s from students:
- [Working It](https://workingit-training-app.netlify.app/)
- [2048](https://2048-clone-zs.netlify.app)
- [FinDash](https://quizzical-kirch-53c1ec.netlify.app/)
- [Every Metro](https://every-metro.netlify.app/)
- [Is It A Sandwich](https://is-it-a-sandwich.netlify.app/)
- [FGLI Resource Hub](https://zen-tesla-60dc5f.netlify.app/)
- [Montpelier Zombie Guide](https://montpelierzombieguide.netlify.app/)
- [Stock Up](https://peaceful-knuth-91276e.netlify.app/)

Get search input from box, use api and axios, filter based on results, return filtered results:

​	https://www.freecodecamp.org/news/build-a-search-filter-using-react-and-react-hooks/

React router (config, navigation, link, props): 

​	https://ui.dev/blog/

https://upmostly.com/tutorials/build-a-todo-app-in-react-using-hooks

https://upmostly.com/tutorials/using-custom-react-hooks-simplify-forms

https://upmostly.com/tutorials/using-axios-with-react-api-requests

https://upmostly.com/tutorials/pass-a-parameter-through-onclick-in-react

https://upmostly.com/tutorials/react-onclick-event-handling-with-examples

