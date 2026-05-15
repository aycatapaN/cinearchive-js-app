
let mediaArchive = [
    { id: 1, name: "The Lord of the Rings", type: "Film", genre: "Aksiyon" },
    { id: 2, name: "Breaking Bad", type: "Dizi", genre: "Dram" }
];


function renderMedia() {
    const list = document.getElementById('mediaList');
    document.getElementById('totalCount').innerText = `${mediaArchive.length} Yapım`;
    list.innerHTML = "";

    mediaArchive.forEach(media => {
        list.innerHTML += `
            <tr>
                <td class="fw-semibold text-white">${media.name}</td>
                
                <td>
                    <span class="type-badge type-${media.type}">
                        <i class="fa-solid ${getIcon(media.type)} me-1"></i>${media.type}
                    </span>
                </td>
                
                <td class="text-info opacity-75">${media.genre}</td>
                
                <td class="text-end">
                    <button onclick="editMedia(${media.id})" class="action-btn btn-edit me-2" title="Güncelle">
                        <i class="fa-solid fa-pen text-sm"></i>
                    </button>
                    <button onclick="deleteMedia(${media.id})" class="action-btn btn-delete" title="Sil">
                        <i class="fa-solid fa-trash text-sm"></i>
                    </button>
                </td>
            </tr>
        `;
    });
}


function getIcon(type) {
    if(type === 'Film') return 'fa-film';
    if(type === 'Dizi') return 'fa-tv';
    return 'fa-video';
}


function addMedia() {
    const nameInput = document.getElementById('mediaName');
    const typeInput = document.getElementById('mediaType');
    const genreInput = document.getElementById('mediaGenre');
    
    if (nameInput.value.trim() !== "") {
        mediaArchive.push({
            id: Date.now(),
            name: nameInput.value.trim(),
            type: typeInput.value,
            genre: genreInput.value
        });
        nameInput.value = ""; 
        renderMedia(); 
    } else {
        alert("Lütfen bir yapım adı girin!");
    }
}


function editMedia(id) {
    const media = mediaArchive.find(m => m.id === id);
    const newName = prompt("Yapım adını güncelle:", media.name);
    
    if (newName !== null && newName.trim() !== "") {
        media.name = newName.trim();
        renderMedia();
    }
}


function deleteMedia(id) {
    if(confirm("Bu yapımı arşivden silmek istediğinize emin misiniz?")) {
        mediaArchive = mediaArchive.filter(m => m.id !== id);
        renderMedia();
    }
}

// Sayfa yüklendiğinde listeyi çalıştır
renderMedia();
