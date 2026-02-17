# assignment3

Event Handling using JavaScript
In this assignment, you will practice event handling by adding enhancements to the Campus Eats blog you made for Assignment 2. You will add dynamic behavior by implementing an interactive “Favorites” functionality. A user can mark a dish as a favorite and it gets added to a favorites list at the bottom of the page.

What Stays the Same
Your HTML structure and Flexbox layout from assignment 2.
Your semantic tags and restaurant showcase sections.
Your styling and dish cards; no need to redesign or rearrange.
What You Will Add
Using JavaScript only, layer in the following features:

Add to Favorites
Each dish card gets an “Add to Favorites” button and a price tag. This should happen when the page loads.
Add to favorites
Clicking the button: 
Highlights the dish visually (e.g., border or background).
Adds the dish to a favorites summary list at the bottom of the page.
Updates the total price of selected favorites.
Remove from Favorites
Clicking the button again:
Removes the dish from the summary list.
Updates the total price.
Resets the visual highlight and button text.
Favorites Summary
At the bottom of the page, dynamically display:

A list of all selected favorite dishes. Just text, no images.
Each dish’s name and price.
A running total price of all favorites.
The list updates live as dishes are added or removed.
 Implementation Notes
The HTML should remain unchanged except to add the script import and/or new attributes.
You may use data-* attributes to store dish info (name, price)
You may add new CSS selectors for any NEW classes and ids into your stylesheet.
Please pay attention to our coding guidelines.
Do not user innerHTML to add elements. 
Do not use inline JavaScript ("onClick") on an HTML element, use event listeners to listen for clicks and a page load.
Use classList to manage visual states.
Use createElement to add elements to the page.
When you are done, add, commit and push your changes to your GitHub repository.
Use Menu shortcuts, or use the terminal within Visual Studio Code to type in commands.
Pushing to the repository will automatically redeploy your page with the new changes. 
Submission Instructions
Submit the link to your GitHub repository. We want to see your edit history. 
Make sure the link to your deployment is easily reachable from your repo.
