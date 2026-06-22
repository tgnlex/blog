


async function getPosts() {
  const response = await fetch('http://127.0.0.1:4000/api/posts');
  const posts = response.json();
  return posts;
}

async function setupPreviews() {
  const $posts = document.querySelector('#admin--posts');  
  const posts = await getPosts();
  posts.forEach((post) => {
    const $item = document.createElement('li');
    $item.classList.add('admin-preview', 'card');
    $item.setAttribute('id', 'admin--preview');
    $item.innerHTML = `
      <h4 class="title text-white">
        ${post.title}
      </h4>
      <p class="description text-white">
        ${post.description}
      </p>
      <div id="post-buttons" class="row btn-row">
      <button class="btn btn-read">
        <a class="btn--link" href="/blog/${post.id}">
        Read
        </a>
      </button>
      <button class="btn btn-edit">
        Edit
      </button>
      <button class="btn btn-delete">
        Delete
      </button
      </div>
      `;
    $posts.appendChild($item);
  })
}


setupPreviews();
