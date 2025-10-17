// --- HILFSFUNKTIONEN (darkenColor bleibt unverändert) ---
function darkenColor(hex, percent) {
    let R = parseInt(hex.substring(1, 3), 16);
    let G = parseInt(hex.substring(3, 5), 16);
    let B = parseInt(hex.substring(5, 7), 16);
    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);
    R = (R < 255) ? R : 255;  
    G = (G < 255) ? G : 255;  
    B = (B < 255) ? B : 255;  
    const RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
    const GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
    const BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));
    return "#" + RR + GG + BB;
}

document.addEventListener('DOMContentLoaded', () => {
    const buttonArea = document.getElementById('button-area');
    const wordlistArea = document.getElementById('wordlist-area'); 
    const infoArea = document.getElementById('info-area');         
    const textDisplayArea = document.getElementById('text-display-area'); 
    
    const wordTableContainer = document.getElementById('word-table-container');
    const wordDetails = document.getElementById('word-details');
    const body = document.body;

    const colors = [
        '#3498db', '#9b59b6', '#2ecc71', '#e74c3c', '#f1c40f', 
        '#e67e22', '#1abc9c', '#d35400', '#c0392b', '#2980b9'
    ];
    
    const DARKEN_PERCENT = -25; 

    const GROUP_RANGES = [];
    for (let start = 1; start <= 25; start += 3) {
        const end = (start === 25) ? 28 : start + 2;
        GROUP_RANGES.push({ start: start, end: end, name: `${start}_bis_${end}` });
    }

    // --- Sichtbarkeitssteuerung der Bereiche ---

    function showWordView() {
        textDisplayArea.classList.add('hidden');
        wordlistArea.classList.remove('hidden');
        infoArea.classList.remove('hidden');
    }

    function showTextView() {
        wordlistArea.classList.add('hidden');
        infoArea.classList.add('hidden');
        textDisplayArea.classList.remove('hidden');
    }

    // --- Buttons rendern (bleibt unverändert) ---
    GROUP_RANGES.forEach((range, index) => {
        const groupColor = colors[index % colors.length];
        const darkerColor = darkenColor(groupColor, DARKEN_PERCENT);

        const groupDiv = document.createElement('div');
        groupDiv.className = 'button-group';
        groupDiv.style.backgroundColor = groupColor;
        
        groupDiv.dataset.groupColor = groupColor;
        groupDiv.dataset.borderColor = darkerColor;

        const wordBtn = document.createElement('button');
        wordBtn.className = 'word-group-btn';
        wordBtn.textContent = `${range.start} bis ${range.end}`;
        wordBtn.dataset.start = range.start;
        wordBtn.dataset.end = range.end;
        wordBtn.style.borderColor = darkerColor;

        const textBtn = document.createElement('button');
        textBtn.className = 'text-group-btn';
        textBtn.textContent = 'Text';
        textBtn.dataset.groupName = range.name;
        textBtn.style.borderColor = darkerColor;

        groupDiv.appendChild(wordBtn);
        groupDiv.appendChild(textBtn);
        buttonArea.appendChild(groupDiv);
    });

    // --- Dynamische Randfarbe setzen (bleibt unverändert) ---
    function setDynamicBorderColor(color) {
        body.style.setProperty('--current-border-color', color);
    }
    
    // --- Event-Handler für Buttons ---
    
    buttonArea.addEventListener('click', (event) => {
        const target = event.target;
        
        const groupDiv = target.closest('.button-group');
        if (groupDiv) {
            setDynamicBorderColor(groupDiv.dataset.borderColor);
        }

        if (target.classList.contains('word-group-btn')) {
            showWordView(); 
            const start = parseInt(target.dataset.start);
            const end = parseInt(target.dataset.end);
            loadWordList(start, end);
        } else if (target.classList.contains('text-group-btn')) {
            showTextView(); 
            const groupName = target.dataset.groupName;
            loadGroupText(groupName);
        }
    });

    // --- Logik zum Laden und Anzeigen der Wörterliste ---
    
    function loadWordList(start, end) {
        // ... (unverändert) ...
        const filteredWoerter = WOERTER_DATA.filter(wort => 
            wort.Gruppe >= start && wort.Gruppe <= end
        );

        let tableHTML = '<table class="word-table"><tbody>';
        if (filteredWoerter.length === 0) {
            tableHTML += '<tr><td>Keine Wörter gefunden.</td></tr>';
        } else {
            filteredWoerter.forEach(wort => {
                const infoJson = JSON.stringify(wort);
                tableHTML += `<tr><td data-wort-info='${infoJson}'>${wort.Wort}</td></tr>`;
            });
        }
        tableHTML += '</tbody></table>';
        wordTableContainer.innerHTML = tableHTML;
        
        document.querySelectorAll('.word-table td').forEach(td => {
            td.addEventListener('click', handleWordClick);
        });
        
        wordDetails.innerHTML = '<p class="word-details-info">Wörter geladen. Klicken Sie auf ein Wort.</p>';
    }

    // --- Logik zum Laden und Anzeigen des Gruppentextes (mit Zeilenumbrüchen) ---
    
    function loadGroupText(groupName) {
        const textItem = TEXT_DATA.find(item => item.Gruppen === groupName);
        
        let textContent = textItem ? textItem.Text : 'Kein Text für diese Gruppe vorhanden.';
        
        // **Änderung:** Ersetze echte Zeilenumbrüche (\n) durch HTML-Zeilenumbrüche (<br>).
        const textWithBreaks = textContent.replace(/\n/g, '<br>');
        
        // Fügt den Text direkt in den großen Textbereich ein
        // Wir verwenden hier ein div anstelle eines p-Tags, um die <br> besser zu handhaben und CSS flexibler zu gestalten.
        textDisplayArea.innerHTML = `<div class="group-text-content">${textWithBreaks}</div>`; 
    }

    // --- Logik zur Behandlung des Wort-Klicks (mit größerer Schrift und Zeilenumbrüchen im Beispiel) ---
    
    function handleWordClick(event) {
        const wordCell = event.target;
        const wortInfo = JSON.parse(wordCell.dataset.wortInfo);
        
        document.querySelectorAll('.word-table td').forEach(td => td.classList.remove('selected'));
        wordCell.classList.add('selected');

        let detailsHTML = ''; 

        // 1. Bild
        if (wortInfo['Link zum Bild']) {
            detailsHTML += `<img src="${wortInfo['Link zum Bild']}" alt="Bild von ${wortInfo.Wort}">`;
        } else {
            detailsHTML += '<p class="info-label">Bild:</p><p class="word-detail-text">Kein Bild vorhanden.</p>';
        }

        // 2. Beispiel
        // **Änderung:** Füge <br> nach jedem Punkt gefolgt von einem Leerzeichen ein, um Zeilenumbrüche zu erzeugen.
        const beispielText = wortInfo.Beispiel || 'Kein Beispiel vorhanden.';
        const beispielWithBreaks = beispielText.replace(/\. /g, '.<br>');
        
        detailsHTML += `<p class="info-label">Beispiel:</p><p class="word-detail-text">${beispielWithBreaks}</p>`;

        // 3. Weitere Infos
        detailsHTML += `<p class="info-label">Weitere Infos:</p><p class="word-detail-text">${wortInfo['weitere Infos'] || 'Keine weiteren Infos.'}</p>`;
        
        wordDetails.innerHTML = detailsHTML;
    }
});