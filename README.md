# React: Notes application

## Environment

- React Version: ^17.0.2
- Node Version: ^4.3.1
- Default Port: 3000

## Application Demo:


## Functionality Requirements

- The note  Application has the following functionality :
   1> Create
   2> Delete
  3> Search
  4> filter based on category
  5> Persisting data using the local storage

- The 'New note' input should initially be empty. The user can type a note in the empty textarea and clicking on 'Save' button should add a new note with in the category selected.  Post this, clear the text area to ceate a new task..

- If 'Save' button is clicked with input being empty, nothing should happen.

- Button Functionality 
1. Save button - This button is used to create a new note based on the category.
2. Delete button - This removes the note from the list.
3. Edit button - This is used to edit the existing note. 

- Each note has 4 properties -
1. Id - This is the unique identification for every task. [STRING]
2. Text - This is the text added by the user in the note.
3. Date - The date on which the text is created.
4  Category - The category is used to differentiate the notes so that it can be easily identified.




## Project Specifications

**Read Only Files**
- Readme.md

**Commands**
- npm start

- install:
- npx create-react-app react-note-app
- npm install react-icon
