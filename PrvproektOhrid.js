let likes = 0;
let dislikes = 0;

function likePhoto(id) {
  likes++;
  document.getElementById("likes" + id).innerText = `Likes: ${likes} | Dislikes: ${dislikes}`;
}

function dislikePhoto(id) {
  dislikes++;
  document.getElementById("likes" + id).innerText = `Likes: ${likes} | Dislikes: ${dislikes}`;
}

document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  
});