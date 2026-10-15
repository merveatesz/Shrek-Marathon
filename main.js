function sitzKlicken(sitz) {
    if (sitz.classList.contains('gebucht')) {
        return;
    }

if (sitz.classList.contains('ausgewaehlt')) {
    sitz.classList.remove('ausgewaehlt');
    return;
    }
    let alleSitze = document.querySelectorAll('.sitz');
    for(let i = 0; i < alleSitze.length; i++) {
        alleSitze[i].classList.remove('ausgewaehlt');
    }
    sitz.classList.add('ausgewaehlt');
}