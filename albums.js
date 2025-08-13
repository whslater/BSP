/* // Example album data
const albums = [
  {
    title: "UK Draft 2025 - Awards & Pictures",
    thumb: "Assets/Images/uk-draft-2025-awards-thumb.jpg", // Place your image in the images/ folder
    desc: "Awards and Final Pictures from The Draft.",
    links: [
      { label: "Full Album on Google Photos", url: "https://photos.app.goo.gl/KeR6e5sem7iBrTF69" },
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
      { label: "Full Album on Google Photos", url: "https://photos.app.goo.gl/MppVBCYbekE7ZZMaA" },
    ]
  },
    {
    title: "UK Draft 2025 - Day 1",
    thumb: "Assets/Images/uk-draft-2025-part1-thumb.jpg", // Place your image in the images/ folder
    desc: "Photos from the draft on Friday at The Draft.",
    links: [
      { label: "Full Album on Google Photos", url: "https://photos.app.goo.gl/6DfpVv23z8w6sLCR8" },
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
]; */

fetch('https://whslater.github.io/BSP/Assets/albums.json?v=' + Date.now())
  .then(response => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then(albums => {
    const albumList = document.getElementById('album-list');
    albums.forEach((album, i) => {
      const card = document.createElement('div');
      card.className = 'album-card';
      card.innerHTML = `
        <img class="album-thumb" src="${album.thumb}" alt="${album.title}" />
        <div>${album.title}</div>
      `;
      card.onclick = () => showModal(albums, i);
      albumList.appendChild(card);
    });

    // Modal logic
    const modal = document.getElementById('album-modal');
    const closeBtn = document.querySelector('.close');
    function showModal(albums, idx) {
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
  })
  .catch(error => {
    document.getElementById('album-list').innerHTML = `<div style="color:red;text-align:center;">Failed to load albums.</div>`;
    console.error("Error loading albums.json:", error);
  });