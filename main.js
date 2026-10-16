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

function reservieren() {
    // 1. E-Mail-Adresse aus dem Input-Feld auslesen
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();

    // Überprüfen, ob eine E-Mail eingegeben wurde
    if (!email) {
        alert("Bitte gib eine gültige E-Mail-Adresse ein!");
        return;
    }

    // 2. Den aktuell ausgewählten Sitzplatz finden
    const ausgewaehlterSitz = document.querySelector('.sitzplatz.ausgewaehlt');
    if (!ausgewaehlterSitz) {
        alert("Bitte wähle zuerst einen Sitzplatz aus!");
        return;
    }

    // Den Text des Sitzplatzes (z. B. "Platz 1 SofaLinks") auslesen
    const sitzName = ausgewaehlterSitz.querySelector('span').innerText;

    // 3. E-Mail über EmailJS versenden
    // WICHTIG: Ersetze 'DEIN_SERVICE_ID' und 'DEIN_TEMPLATE_ID' mit deinen Daten von emailjs.com
    emailjs.send('service_q4jkxie', 'template_tv22amo', {
        user_email: email,
        seat_name: sitzName
    })
    .then(function(response) {
        alert("Erfolgreich reserviert! Eine Bestätigung wurde per E-Mail verschickt.");
        
        // Sitz als gebucht markieren und klickbar machen sperren
        ausgewaehlterSitz.classList.remove('ausgewaehlt');
        ausgewaehlterSitz.classList.add('gebucht');
        ausgewaehlterSitz.setAttribute('aria-pressed', 'false');
        ausgewaehlterSitz.setAttribute('disabled', 'true');
        
        // Optional: Eingabefeld leeren
        emailInput.value = '';
    }, function(error) {
        alert("Fehler beim Senden der E-Mail: " + JSON.stringify(error));
    });
    }