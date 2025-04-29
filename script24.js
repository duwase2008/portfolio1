Document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    addPost(title, content);

    document.getElementById('postForm').reset();
});

function addPost(title, content) {
    const postsList = document.getElementById('postsList');
    const li = document.createElement('li');
    li.innerHTML = `<h3>${title}</h3><p>${content}</p><button class="delete-btn" onclick="deletePost(this)">Delete</button>`;
    postsList.appendChild(li);
}

function deletePost(button) {
    const post = button.parentElement;
    post.remove();
}
// Add an event listener to the form to handle submission
document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    
    // Get the values from the input fields
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Call the function to add a new post
    addPost(title, content);

    // Reset the form fields
    document.getElementById('postForm').reset();
});

// Function to add a new post to the posts list
function addPost(title, content) {
    const postsList = document.getElementById('postsList'); // Get the posts list element
    const li = document.createElement('li'); // Create a new list item

    // Set the inner HTML of the list item with the title, content, and delete button
    li.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <button class="delete-btn" onclick="deletePost(this)">Delete</button>
    `;

    // Append the new list item to the posts list
    postsList.appendChild(li);
}

// Function to delete a post
function deletePost(button) {
    const post = button.parentElement; // Get the parent element (the list item)
    post.remove(); // Remove the list item from the DOM
}