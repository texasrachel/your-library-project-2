
# your-library app project

## Project Name

your-library

## Project Description

your library is an app for tracking your personal library catalog. It is built on [React](https://reactjs.org/) with an [Airtable](https://airtable.com/tblzoNbKubApA62S9) database. Users will have the option of cataloging books, audiobooks, and ebooks. A page for inputting new media into the catalog will be ==provided/available==. The list of media can be displayed in its entirety or filtered by author, title, user-inputted subject, type, and status. Selecting a listed media will lead to an individual pages displaying information about the chosen media as well as have space for user inputted 'thoughts'.

## Wireframes
  ![wireframe of desktop site](https://res.cloudinary.com/texasrachel/image/upload/v1629472022/your-library-wireframe-desktop_a8bsd6.png)

![wireframe of mobile site](https://res.cloudinary.com/texasrachel/image/upload/v1629472022/your-library-wireframe-mobile_oyhwqj.png)
  
## Component Hierarchy

![enter image description here](https://res.cloudinary.com/texasrachel/image/upload/v1629484654/your-library-hierarchy.png)

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

The functionality will then be divided into two separate lists: MVP and PostMVP. Carefully decide what is placed into your MVP, as the client will expect this functionality to be implemented upon project completion.

#### MVP

- [ ] Navigation component with links for other components <!--(component 1) -->
- [ ] Pull entire catalog from Airtable  <!--(axios get) --> 
	- [ ] and search through with user-inputted information <!--(component 2) -->
	- [ ] or render catalog on page  <!--(component 3) -->
		- [ ] on rendered page, filter catalog by author, subject, type, or status  <!--(component 4) -->
	- [ ] return information about filtered media  <!--(component 5) -->
	<!-- what to do about multiple returns - if...indiv...else...catalog?filtered? -->
- [ ] Component to add media to catalog  <!--(axios post & component 6) -->
- [ ] Component to add thoughts to individual pages which can be accessed on the individual media page or the add media page <!--(axios put & component 7) -->
- [ ] Reactive for mobile

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
![enter image description here](https://res.cloudinary.com/texasrachel/image/upload/v1629472022/your-library-wireframe-post-mvp.png)

## Project Schedule

| Day | Deliverable | Status |
|:--:|:--:|:--:|
| August 19 | Prompt / Wireframes / Airtable API / GitHub | Complete |
| August 20 | Hierarchy / Readme / Project Approval | Incomplete/Complete |
| August 21 | Core Application Structure - HTML, CSS / Pseudocode | Incomplete/Complete |
| August 22 | Components / Axios integration | Incomplete/Complete |
| August 23 | Responsive & CSS Styling / Deploy to Netlify | Incomplete/Complete |
| August 24 | MVP | Incomplete/Complete |
| August 25 | Debugging | Incomplete/Complete |
| August 26 | Clean-up Code | Incomplete/Complete |
| August 27 | Presentations | Incomplete/Complete |

## Timeframes
  
| Component | Priority | Estimated Time | Time Invested | Actual Time |
|--|:--:|:--:|:--:|:--:|
| Setup basic app | M | 3hrs |  |  |
| Setup basic React App & folder structure | H | 4hrs |  |  |
| Styling | M | 3hrs |  |  |
| Axios call to Airtable & render catalog | H | 3hrs |   |  |
| Filter catalog component with Airtable filtering | H | 4hrs |  |  |
| Search catalog & axios get | H | 4hrs |  |  |
| Individual component | H | 2hrs |  |  |
| Add book component & axios post | H | 3hrs |  |  |
| Add thought component & axios put | H | 3hrs |  |  |
| Navigation component | M | 2hrs |  |  |
| Responsiveness | M | 3hrs |  |  |
| Deployment | H | 2hrs |  |  |
| Total | 36 | hrs |  |  |
 
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