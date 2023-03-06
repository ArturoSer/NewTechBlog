const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
];

async function editPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

   const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
        title, 
        body
   }),
   headers: { 'Content-Type': 'application/json' },
});

if(response.ok) {
    document.location.replace('/dashboard');
} else {
    alert(response.statusText);
}
};

async function deletePostHandler(event) {
    event.preventDefault();

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
    });

    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

document
.querySelector('.edit-post-form')
.addEventListener('submit', editPostHandler);
document
.querySelector('.delete-post-btn')
.addEventListener('click', deletePostHandler);