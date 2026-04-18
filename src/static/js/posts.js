async function fetchPosts() {
  const response = await fetch('/api/posts');
  return response.json();
}

const item = (post) => `
  <li class="item post--item" key="${post.id}">
    <a class="link post--link" href="/api/posts/${post.id}">
      ${post.title}
    </a>
  </li>`


function previews() {
  const $posts = document.querySelector('#posts');
  const posts = await fetchPosts();
  posts.forEach((post) => {
    $posts.appendChild(item(post));
  })
}

previews()


