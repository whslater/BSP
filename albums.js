// Example album data
const albums = [
  {
    title: "UK Draft 2025 - Awards & Pictures",
    thumb: "Assets/Images/uk-draft-2025-awards-thumb.jpg", // Place your image in the images/ folder
    desc: "Awards and Final Pictures from The Draft.",
    links: [
      { label: "Full Album on Google Photos", url: "https://photos.app.goo.gl/juMAmwWmXDZSY8Qj6" },
    ]
  },
  {
    title: "UK Draft 2025 - Day 3",
    thumb: "Assets/Images/uk-draft-2025-part3-thumb.jpg", // Place your image in the images/ folder
    desc: "Photos from the games and finals on Sunday at The Draft.",
    links: [
      { label: "Full Album on Google Photos", url: "https://photos.app.goo.gl/juMAmwWmXDZSY8Qj6" },
    ]
  },
  {
    title: "UK Draft 2025 - Day 2",
    thumb: "Assets/Images/uk-draft-2025-part2-thumb.jpg", // Place your image in the images/ folder
    desc: "Photos from the games on Saturday at The Draft.",
    links: [
      { label: "Full Album on Google Photos", url: "https://photos.app.goo.gl/juMAmwWmXDZSY8Qj6" },
    ]
  },
    {
    title: "UK Draft 2025 - Day 1",
    thumb: "Assets/Images/uk-draft-2025-part1-thumb.jpg", // Place your image in the images/ folder
    desc: "Photos from the draft on Friday at The Draft.",
    links: [
      { label: "Full Album on Google Photos", url: "https://photos.app.goo.gl/juMAmwWmXDZSY8Qj6" },
    ]
  },
  {
    title: "Tigers Vs. Blazers - Home",
    thumb: "Assets/Images/tigers-vs-blazers-thumb.jpg",
    desc: "Photos from Tigers Vs. Blazers - 10/08/2025 ",
    links: [
      { label: "Full Album on Google Photos", url: "https://photos.app.goo.gl/juMAmwWmXDZSY8Qj6" },
    ]
  }
];

// Album grid rendering
const albumList = document.getElementById('album-list');
albums.forEach((album, i) => {
  const card = document.createElement('div');
  card.className = 'album-card';
  card.innerHTML = `
    <img class="album-thumb" src="${album.thumb}" alt="${album.title}" />
    <div>${album.title}</div>
  `;
  card.onclick = () => showModal(i);
  albumList.appendChild(card);
});

// Modal logic
const modal = document.getElementById('album-modal');
const closeBtn = document.querySelector('.close');
function showModal(idx) {
  const album = albums[idx];
  document.getElementById('modal-title').textContent = album.title;
  document.getElementById('modal-desc').textContent = album.desc;
  const linksDiv = document.getElementById('modal-links');
  linksDiv.innerHTML = '';
  album.links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.target = '_blank';
    a.textContent = link.label;
    linksDiv.appendChild(a);
  });
  modal.classList.remove('hidden');
}
closeBtn.onclick = () => modal.classList.add('hidden');
modal.onclick = e => {
  if (e.target === modal) modal.classList.add('hidden');
};