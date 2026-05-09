

const posts = [
  {id: 1, title: "Post one"},
  {id: 2, title: "Post two"},
  {id: 3, title: "Post three"},
]

async function getPosts() {
  const response = await fetch('localhost:4000/api/posts');
  const posts = response.json();
  return posts;
}

function setupPreviews(posts) {
  const $posts = document.querySelector('#blog--posts');
  posts.forEach((post) => {
    const $item = document.createElement('li');
    $item.classList.add('preview', 'item');
    $item.setAttribute('id', 'post-preview');
    $item.innerHTML = `<a class="link text-white" href="/posts/${post.id}">${post.title}</a>`;
    $posts.appendChild($item);
  })
}


setupPreviews(posts);
