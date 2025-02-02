const searchInput = document.getElementById('search-input')
const resultArtist = document.getElementById('result-artist')
const resultPlaylist = document.getElementById('result-playlists')

function requestApi(searchTerm){
    // QuerySelector = mostrar os artistas que tenham um nome parecido com o searchTerm
    fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
        .then((response) => response.json())
        .then((result) => displayResults(result))
        console.log("resquestApi")
}

function displayResults(result){
    resultPlaylist.classList.add('hidden')
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
    console.log("displayresults")
}

document.addEventListener('input', function(){
    const searchTerm = searchInput.value.toLowerCase();
    if(searchTerm === ""){
        resultPlaylist.classList.add('hidden')
        resultArtist.classList.remove('hidden')
        return;
    }

    requestApi(searchTerm)
    console.log("addEvent")

})