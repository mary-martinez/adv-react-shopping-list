## Learning Objectives
- Explain how action types describe state changes
- Explain the two parameters (state and action) of the reducer function
- Explain the purpose of the reducer function
- Use useReducer to manage complex application state
- Use the dispatch function to dispatch actions to update state
- Use a reducer function to update state
- Use a switch statement to handle multiple conditions
- Use useContext to store global application state

## Acceptance Criteria
- Users are able to add a new item to the list
- Users are able to edit an existing item
- Users are able to delete an item
- Users are able to see a list of shopping items
- A separate <Header> component is rendered at the top of the page
  - The <Header> component contains the total count of the items on the shopping list
  - The <Header> component has a button that clears the shopping list
- (STRETCH) Users are able to mark a shopping item as done with strikethrough on text
- (STRETCH) Shopping list state is saved to localStorage and persisted on page refreshes

## Plan:
1. Create List view
1. Create Header component
1. Add Header and List to App
1. Create AddItem component with Input and submit button
1. Create context
1. Create useReducer 
1. Add switch statements for add, edit, delete
1. Testing