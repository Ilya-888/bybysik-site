function showSurprise() {
  const text = document.getElementById('surpriseText');
  text.textContent = 'Я тебя люблю ❤️ И надеюсь, что эта маленькая страничка заставила тебя улыбнуться. Ты моя самая любимая Буся ❤️';
  for (let i = 0; i < 18; i++) setTimeout(createHeart, i * 100);
}

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = Math.random() > .3 ? '❤️' : '💗';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (3 + Math.random() * 3) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6500);
}
