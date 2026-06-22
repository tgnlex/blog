


async function getPosts() {
  const response = await fetch('http://localhost:4000/api/posts');
  const posts = response.json();
  return posts;
}

async function setupPreviews() {
  const $posts = document.querySelector('#blog--posts');  
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
        Read post
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
