# Frontend Test

## SetUp Instructions
1. Clone this repository
2. cd into the /star-wars-tech-test directory
3. Type the following command to install the dependencies and run the project
````
npm install && npm start
````

**​Your task is to create a user interface for lovers of the Star Wars movie franchise.**

_You should use the People endpoint from the Star Wars API (https://swapi.dev/api/) for your data._

## Acceptance Criteria: ##

##### :wrench: The application should: #####

- [x] Fetch and display a list of characters
- [x] Contain a "next" and "previous" button which when clicked will fetch the next and previous page of results respectively (the endpoint you use already supports pagination)
- [x] When the application displays the first page of results, the previous button should be disabled
- [x] When the application displays the last page of results, the next button should be disabled
- [x] The current page number should be visible
- [x] Contain a button to sort results on the current page by "mass"


###### _Optional:_ ######
- [x] Build the application so that a user can access the page number through a parameter on the url: e.g. <domain>/14 would load the application with page 14 (if it exists)
Please complete the task using React and/or NextJS


###### _Personal Additions Once Task Are Complete_ ######
- [x] CSS styling (preferably with Sass)
- [x] Transition styling
- [x] Code Tidy ups


###### _Notes_ ######
###### <ins>_If I had more time_</ins> ######
- I would've tested the pagination more thoroughly. I had to use an input text with a maxlength attribute to make sure it would not overflow if too much is typed into it.
- I would have liked to have done some more styling inline with the movie franchise
- I would have liked to have added a numbering system, or looked at the layout for a better ordering when sorting the results