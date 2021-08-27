
# your library app

## Project Name

your library

## Project Description

your library is an app for tracking your personal library catalog. It is built on [React](https://reactjs.org/) with an [Airtable](https://airtable.com/tblzoNbKubApA62S9) database. The user will have the option of cataloging books, audiobooks, and ebooks. Inputting new media will be accomplished through a separately linked page. The catalog list can be displayed in its entirety or filtered by author, user inputted subject, type, or status. Selecting an item will lead to an individual page displaying information about the media as well as have space for user inputted 'thoughts'.

## Wireframes

  <img src="https://res.cloudinary.com/texasrachel/image/upload/v1629502502/your-library-wireframe-desktop.png" alt="wireframe of desktop site" style="zoom: 67%;" />

![wireframe of mobile site](https://res.cloudinary.com/texasrachel/image/upload/v1629482148/your-library-wireframe-mobile.png)

## Component Hierarchy

![component hierarchy display](https://res.cloudinary.com/texasrachel/image/upload/v1629484654/your-library-hierarchy.png)

## API and Data Sample

[Airtable](https://airtable.com/tblzoNbKubApA62S9) API snippet

```json
{
	"catalog": [
	{
		"id": "recLD0GTpqUvnVqTd",
		 "fields": {
			"thoughts": "Compelling, but very long. Very developed characters.",
			"type": "book",
			"subject": "Fiction - Historical",
			"author": "Ken Follett ",
			"title": "The Pillars of the Earth"
		},
	"createdTime": "2021-08-19T20:28:31.000Z"
	},
	{
		"id": "recTWtU6LGyyJxOFU",
		"fields": {
			"type": "ebook",
			"subject": "Nonfiction - Financial",
			"author": "Howard Marks",
			"title": "The Most Important Thing: Uncommon Sense for the Thoughtful Investor"
		},
		"createdTime": "2021-08-20T15:23:56.000Z"
	},
	]
}

```

### MVP/PostMVP

#### MVP

- [ x ] Navigation component with links for other components <!--(component 1) -->
- [ x ] Pull entire catalog from Airtable  <!--(axios get) --> 
	- [ x ] and search through with user-inputted information <!--(component 2) -->
	- [ x ] or render catalog on page  <!--(component 3) -->
		- [ x ] on rendered page, filter catalog by author, subject, type, or status  <!--(component 4) -->
	- [ x ] return information about filtered media  <!--(component 5) -->
	<!-- what to do about multiple returns - if...indiv...else...catalog?filtered? -->
- [ x ] Component to add media to catalog  <!--(axios post & component 6) -->
- [ x ] Component to add thoughts to individual pages which can be accessed on the individual media page or the add media page <!--(axios put & component 7) -->
- [ x ] Responsive for mobile
- [ x ] Deployed to Netlify

#### PostMVP

- [ ] on home page display informational totals from catalog
- [ ] on home page display currently reading
- [ ] have a stylized navigational component available on each page
- [ ] pull book title images from another api
	- [ ] display catalog with images instead of strings
- [ ] stylize individual media page
	- [ ] add progress 
	- [ ] add rating
	- [ ] add photo
	- [ ] ability to edit
	- [ ] ability to delete
	![wireframe of Post MVP](https://res.cloudinary.com/texasrachel/image/upload/v1629472022/your-library-wireframe-post-mvp.png)

## Project Schedule

| Day | Deliverable | Completed? |
|:--:|:--:|:--:|
| August 19 | Prompt / Wireframes / Airtable API / GitHub | Yes |
| August 20 | Hierarchy / Readme / Project Approval | Yes  |
| August 21 | Core Application Structure - HTML, CSS / Pseudocode / React App | Yes |
| August 22 | Components / Axios integration | Yes  |
| August 23 | Responsive & CSS Styling / Deploy to Netlify |Yes  |
| August 24 | MVP |  Yes  |
| August 25 | Debugging |  Yes  |
| August 26 | Clean-up Code |  Yes  |
| August 27 | Presentations |  Yes  |

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
|--|:--:|:--:|:--:|:--:|
| Setup basic app | M | 3hrs | 2hrs | 2hrs |
| Setup basic React App & folder structure | H | 4hrs | 5hrs | 7hrs  |
| Styling | M | 3hrs | 5hrs  | 12hrs |
| Axios call to Airtable & render catalog | H | 3hrs | 3hrs  | 15hrs  |
| Filter catalog component with Airtable filtering | H | 4hrs | N/A<br> part of Search component  |  |
| Search catalog & axios get | H | 4hrs | 6.5hr  | 21.5hrs |
| Individual detail component | H | 2hrs | 3hr  | 24.5hrs  |
| Add book component & axios post | H | 3hrs | 3hrs  | 27.5hrs |
| Add thought component & axios put | H | 3hrs | 3hrs  | 30.5hrs  |
| Navigation component | M | 2hrs | 5hr  | 35.5hrs  |
| Responsiveness | M | 3hrs | 2hr  | 37.5hrs |
| Deployment | H | 2hrs | 1hr | 38.5hrs  |
| Total | 36 | hrs | 38.5hrs | 38.5hrs  |

## SWOT Analysis

### Strengths:

I'm confident my HTML & CSS knowledge will help me set up the app quickly.  I've spent time making sure I am organized with regarding my time and what needs to be done.

### Weaknesses:

I'm not comfortable yet with React, parameters, and components. I'll need to make sure I know what needs to happen and how React can help me accomplish that goal.

### Opportunities:

This project will give me an opportunity to work on my needed JavaScript and React skills and improve my understanding of how they work.

### Threats:

 I need to make sure I don't waste time looking for answers when I can ask for help. There's trying to learn and being stubborn. I need to make sure I'm doing the former, not being the latter.

<!-- Notes:
  books--all book--filter
   -->