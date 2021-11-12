# Alchemy Bootstrap Template

## Making a plan

(bolded steps are mandatory, unbolded are for more advanced projects)

1) **Make a drawing of your app. Simple "wireframes"**
2) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
3) **For each HTML element ask: Why do I need this?**
4) Ask which of out HTML elements are hard coded, and which are dynamically generated?
5) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
6) Is there some state we need to initialize?
7) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
8) **Think about how to validate each of your steps**
9) Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
10) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
11) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**


## To Run Cypress Tests
* `npm install`
* `npm test`
* Cypress will open -- you should then click "run <#> integration spec(s)"
    ![](cypress.png)
* Make sure all tests pass


# Refactoring Calculator Lab

#### I've already set up the basic calculator elements and generically styled them for a template

### What
1. What do I need to finish my calculator lab?
    - 17 buttons
    - 1 display
    - functions for each math operation

### Why
1. Why do I need them?
    - 17 buttons to display all the possible key entries
    - A single Div to display the result of the calculation
    - Making the code modular makes it easier to swap modules and update

### How
1. How will they solve the problem?
    - Adding one button per key, and presenting them as clickable/readable buttons allows us to control the inputs and behaviours
    - Having a single Div for display gives a clean ui/ux
    - By importing all the functions, we can easily work on individual sections of code without breaking the code as a whole

### When
1. When will they solve the problem?
    - By adding event listeners to each button we can update the DOM each time is a button is pressed, and generate variable to work with.... not going as planned. gonna just write some code