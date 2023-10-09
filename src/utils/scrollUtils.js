// scrollHandler.js

// Get a reference to the element you want to track the scroll on
const wrap = document.getElementById("wrap");

// Define a function to handle the scroll event
function handleScroll() {
  if (wrap.scrollTop > 147) {
    wrap.classList.add("fix-search");
  } else {
    wrap.classList.remove("fix-search");
  }
}

// Attach the scroll event listener to the element
wrap.addEventListener("scroll", handleScroll);

// Optionally, you can export the handleScroll function if needed in other parts of your code.
export { handleScroll };
