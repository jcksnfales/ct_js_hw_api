const getPieceData = async (id) => {
    let response = await axios.get(`https://api.artic.edu/api/v1/artworks/${id}?fields=title,artist_title,date_display,place_of_origin,medium_display`);
    return response.data.data;
}

const doInfoPopup = async (id) => {
    // gather the artpiece info
    let pieceData = await getPieceData(id);

    // make changes to modal data
    document.getElementById("modalTitle").innerHTML = pieceData.title;
    document.getElementById("modalInfoArtist").innerHTML = `by ${pieceData.artist_title}`;
    document.getElementById("modalInfoDate").innerHTML = pieceData.date_display;
    document.getElementById("modalInfoOrigin").innerHTML = pieceData.place_of_origin;
    document.getElementById("modalInfoMedium").innerHTML = pieceData.medium_display;
    document.getElementById("modalImage").src = document.getElementById(id).src;

    // simulate button click to show modal
    document.getElementById("modalToggler").click();
}