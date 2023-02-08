
const listeMots = ['Suspect', 'Multiplication', 'Masquer', 'Manipuler', 'Consommer', 'Pair', 'Adhérer', 'Chariot', 'Crevette', 'Faim']

function motAtrouver () {
    let motCacher = Math.floor(Math.random()* listeMots.length);
    let motChoisi = listeMots[motCacher];
    return motChoisi
}

function tableau (leMot) {
    let tab = leMot.split("")
    return tab
}