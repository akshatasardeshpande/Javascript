// Get the search element
const search = document.querySelector("._wrapper_1f3oz_1")

// Add a mouseover event listener
search.addEventListener('mouseover' , () => {
    // Change the search's background color
  search.style.backgroundColor = 'red';
});

// Add a mouseout event listener
search.addEventListener('mouseout', () => {
    // Change the search's background color back to its original color
    search.style.backgroundColor = '';
  });