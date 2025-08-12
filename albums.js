// Example album data
const albums = [
  {
    title: "Vacation 2024",
    thumb: "Assets/Images/vacation-thumb.jpg", // Place your image in the images/ folder
    desc: "Photos from my 2024 summer vacation.",
    links: [
      { label: "Full Album on Google Photos", url: "https://photos.app.goo.gl/example1" },
      { label: "Favorite Shots", url: "https://photos.app.goo.gl/example2" }
    ]
  },
  {
    title: "Family Events",
    thumb: "Assets/Images/family-thumb.jpg",
    desc: "Birthday parties, reunions, and more.",
    links: [
      { label: "Flickr Album", url: "https://flickr.com/example" }
    ]
  },
  {
    title: "Hiking Adventures",
    thumb: "Assets/Images/hiking-thumb.jpg",
    desc: "Trails and nature from my hiking trips.",
    links: [
      { label: "View on SmugMug", url: "https://smugmug.com/example" }
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