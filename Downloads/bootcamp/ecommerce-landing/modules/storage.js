function getItemCard  () {
  const card = JSON.parse(localStorage.getItem ("card")) || [];  //get the item card from localstorage
}

function addItemCard () {
    localStorage.setItem("card", JSON.stringify(card));
} ö