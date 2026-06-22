


async function getPosts() {
  const response = await fetch('http://127.0.0.1:4000/api/posts');
  const posts = response.json();
  return posts;
}

async function setupPreviews() {
  const $posts = document.querySelector('#blog--posts');  
  const posts = await getPosts();
  posts.forEach((post) => {
    const $item = document.createElement('li');
    $item.classList.add('preview', 'card');
    $item.setAttribute('id', 'post--preview');
    $item.innerHTML = `
      <h4 class="title text-white">
        ${post.title}
      </h4>
      <p class="description text-white">
        ${post.description}
      </p>
      <button class="btn">
        <a class="link" href="/blog/${post.id}">
        Read post
        </a>
      </button>
      `;
    $posts.appendChild($item);
  })
}


setupPreviews();
