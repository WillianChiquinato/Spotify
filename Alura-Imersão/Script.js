const InputPesquisa = document.getElementById('InputPesquisa');
const ResultadoArtists = document.getElementById('result-artist');
const ResultadoPlaylist = document.getElementById('result-playlists');

function RequerenteAPI(DigitaPesquisa) {
    const url = `http://localhost:3000/artists?name_like=${DigitaPesquisa}`
    fetch(url)
    // Arrow Functions
        .then((Response) => Response.json())
        .then((result) => displayResults(result))
};

function displayResults() {
    ResultadoPlaylist.classList.add('hidden');
    const NomeArtista = getElementById('artists-name');
    const ImagemArtista = getElementById('artists-img');

    result.forEach(element => {
        NomeArtista.innerText = element.name;
        ImagemArtista.src = element.img;
    });

    ResultadoArtists.classList.remove('hidden');
};

document.addEventListener('input', function() {
    const DigitaPesquisa = InputPesquisa.ariaValueMax.toLowerCase;

    if (DigitaPesquisa === '') {

        ResultadoPlaylist.classList.add('hidden');
        ResultadoArtists.classList.remove('hidden');
        return;
    }
});