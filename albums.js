

fetch('https://schwenz.uk/Photos/Assets/albums.json?v=' + Date.now())
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
        <div class="album-card-logo"></div>
        <img class="album-thumb" src="${album.thumb}" alt="${album.title}" />
        <div class="album-card-title">${album.title}</div>
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