


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
    $item.classList.add('preview', 'item');
    $item.setAttribute('id', 'post-preview');
    $item.innerHTML = `<a class="link text-white" href="/blog/${post.id}">${post.title}</a>`;
    $posts.appendChild($item);
  })
}


setupPreviews();
