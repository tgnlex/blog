async function fetchPosts() {
  const response = await fetch('/api/posts');
  const data = await response.json();
  return data;
}


async function previews() {
  const $posts = document.querySelector('#posts');
  const posts = await fetchPosts();
  posts.forEach((post) => {
    const item = document.createElement('li');
    item.setAttribute('class', 'item card preview');
    item.innerHTML = `<a class="link" href="/blog/${post.id}">${post.title}</a>`;
    $posts.appendChild(item);
  })
}

previews()


