//1
function getUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json());
}

getUser(1).then(user => {
    console.log("User's name:", user.name);
});


//2
function getPost(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json());
}

getPost(1).then(post => {
    console.log("Post title:", post.title);
});


//3
function getUserEmail(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            console.log("User's email:", user.email);
            return user.email;
        });
}

getUserEmail(1);


//4
function listUserTodos(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        .then(response => response.json())
        .then(todos => {
            console.log(`User ${userId} has ${todos.length} todos`);
            return todos;
        });
}

listUserTodos(3);


//5
function checkPostExists(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Post not found");
            }

            console.log("Post exists");
            return true;
        })
        .catch(error => {
            console.log("Post not found");
            return false;
        });
}

checkPostExists(1);
checkPostExists(9999);


//6
function fetchWithDelay(url, delay) {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    })
        .then(() => fetch(url))
        .then(response => response.text())
        .then(text => {
            console.log("First 50 chars:", text.slice(0, 50));
            return text;
        });
}

fetchWithDelay(
    "https://jsonplaceholder.typicode.com/posts/1",
    2000
);


//7
function showKeys(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("Keys:", Object.keys(data));
            return Object.keys(data);
        });
}

showKeys("https://jsonplaceholder.typicode.com/todos/1");


//8
function getUserFirstPost(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        })
        .then(response => response.json())
        .then(posts => {
            console.log("First post title:", posts[0].title);
            return posts[0];
        });
}

getUserFirstPost(1);


//9
function getPostCommentsCount(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
        })
        .then(response => response.json())
        .then(comments => {
            console.log(`Post has ${comments.length} comments`);
            return comments.length;
        });
}

getPostCommentsCount(1);


//10
function todoAndUser(todoId) {
    let todo;

    return fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then(response => response.json())
        .then(data => {
            todo = data;

            return fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
        })
        .then(response => response.json())
        .then(user => {
            console.log("Todo title:", todo.title);
            console.log("User name:", user.name);

            return { todo, user };
        });
}

todoAndUser(1);