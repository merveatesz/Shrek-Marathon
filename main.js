function sitzKlicken(sitz) {
    if (sitz.classList.contains('gebucht')) {
        return;
    }

    if (sitz.classList.contains('ausgewaehlt')) {
        sitz.classList.remove('ausgewaehlt');
        sitz.setAttribute('aria-pressed', 'false');
        return;
    }

    const ausgewaehlteSitze = document.querySelectorAll('.sitzplatz.ausgewaehlt');
    for (const ausgewaehlterSitz of ausgewaehlteSitze) {
        ausgewaehlterSitz.classList.remove('ausgewaehlt');
        ausgewaehlterSitz.setAttribute('aria-pressed', 'false');
    }

    sitz.classList.add('ausgewaehlt');
    sitz.setAttribute('aria-pressed', 'true');
}