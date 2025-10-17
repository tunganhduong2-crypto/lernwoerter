// Simuliert die Struktur der woerter.yml
const WOERTER_DATA = [
    {
    Wort: "das Feld",
    Wortart: "Nomen",
    "Link zum Bild": "pics/feld.png",
    Beispiel: "Das Feld ist grün. Der Bauer bestellt das Feld.",
    "weitere Infos": "die Felder",
    Gruppe: 1
  },
  {
    Wort: "schwimmen",
    Wortart: "Verb",
    "Link zum Bild": "pics/schwimmen.png",
    Beispiel: "Ich kann gut schwimmen. Er ist im Meer geschwommen.",
    "weitere Infos": "schwamm, ist geschwommen",
    Gruppe: 1
  },
  {
    Wort: "das Gedicht",
    Wortart: "Nomen",
    "Link zum Bild": "pics/gedicht.png",
    Beispiel: "Sie liest ein Gedicht vor. Das Gedicht hat vier Strophen.",
    "weitere Infos": "die Gedichte",
    Gruppe: 1
  },
  {
    Wort: "der See",
    Wortart: "Nomen",
    "Link zum Bild": "pics/see.png",
    Beispiel: "Wir baden im See. Der See ist sehr tief.",
    "weitere Infos": "die Seen",
    Gruppe: 1
  },
  {
    Wort: "das Schloss",
    Wortart: "Nomen",
    "Link zum Bild": "pics/schloss.png",
    Beispiel: "Die Prinzessin wohnt im Schloss. Das Schloss ist sehr alt.",
    "weitere Infos": "die Schlösser",
    Gruppe: 1
  },
  {
    Wort: "dürfen",
    Wortart: "Verb",
    "Link zum Bild": "pics/duerfen.png",
    Beispiel: "Darf ich jetzt gehen? Wir dürfen heute länger aufbleiben.",
    "weitere Infos": "durfte, hat gedurft",
    Gruppe: 1
  },
  {
    Wort: "die Flosse",
    Wortart: "Nomen",
    "Link zum Bild": "pics/flosse.png",
    Beispiel: "Der Fisch schwimmt mit seinen Flossen. Der Taucher trägt Flossen.",
    "weitere Infos": "die Flossen",
    Gruppe: 1
  },
  {
    Wort: "das Gras",
    Wortart: "Nomen",
    "Link zum Bild": "pics/gras.png",
    Beispiel: "Die Kühe fressen Gras. Der Rasen besteht aus Gras.",
    "weitere Infos": "die Gräser",
    Gruppe: 1
  },
  {
    Wort: "klettern",
    Wortart: "Verb",
    "Link zum Bild": "pics/klettern.png",
    Beispiel: "Das Eichhörnchen klettert auf den Baum. Er ist auf den Berg geklettert.",
    "weitere Infos": "kletterte, ist geklettert",
    Gruppe: 1
  },
  {
    Wort: "das Schwimmbad",
    Wortart: "Nomen",
    "Link zum Bild": "pics/schwimmbad.png",
    Beispiel: "Wir gehen ins Schwimmbad. Das Schwimmbad ist bis 18 Uhr geöffnet.",
    "weitere Infos": "die Schwimmbäder",
    Gruppe: 1
  },
  {
    Wort: "offen",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/offen.png",
    Beispiel: "Die Tür ist offen. Er ist sehr offen für neue Ideen.",
    "weitere Infos": "geschlossen",
    Gruppe: 1
  },
  {
    Wort: "der Käfer",
    Wortart: "Nomen",
    "Link zum Bild": "pics/kaefer.png",
    Beispiel: "Der Käfer krabbelt über das Blatt. Marienkäfer sind Glücksbringer.",
    "weitere Infos": "die Käfer",
    Gruppe: 1
  },
	{
    Wort: "das Ohr",
    Wortart: "Nomen",
    "Link zum Bild": "pics/ohr.png",
    Beispiel: "Ich höre mit meinem Ohr. Das Kind hält sich die Ohren zu.",
    "weitere Infos": "die Ohren",
    Gruppe: 2
  },
  {
    Wort: "der Witz",
    Wortart: "Nomen",
    "Link zum Bild": "pics/witz.png",
    Beispiel: "Er erzählt gerne lustige Witze. Sein Witz hat alle zum Lachen gebracht.",
    "weitere Infos": "die Witze",
    Gruppe: 2
  },
  {
    Wort: "lustig",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/lustig.png",
    Beispiel: "Der Clown ist sehr lustig. Wir haben einen lustigen Film gesehen.",
    "weitere Infos": "traurig / ernst",
    Gruppe: 2
  },
  {
    Wort: "die Wärme",
    Wortart: "Nomen",
    "Link zum Bild": "pics/waerme.png",
    Beispiel: "Die Sonne spendet viel Wärme. Im Winter fehlt mir die Wärme.",
    "weitere Infos": "die Wärmen (selten)",
    Gruppe: 2
  },
  {
    Wort: "der Wecker",
    Wortart: "Nomen",
    "Link zum Bild": "pics/wecker.png",
    Beispiel: "Der Wecker klingelt um sieben Uhr. Ich muss den Wecker stellen.",
    "weitere Infos": "die Wecker",
    Gruppe: 2
  },
  {
    Wort: "auch",
    Wortart: "Adverb",
    "Link zum Bild": "pics/auch.png",
    Beispiel: "Ich komme auch zur Party. Sie hat das Buch auch gelesen.",
    "weitere Infos": "",
    Gruppe: 2
  },
  {
    Wort: "weil",
    Wortart: "Konjunktion",
    "Link zum Bild": "pics/weil.png",
    Beispiel: "Wir bleiben zu Hause, weil es regnet. Ich bin müde, weil ich spät aufgestanden bin.",
    "weitere Infos": "",
    Gruppe: 2
  },
  {
    Wort: "die Pizza",
    Wortart: "Nomen",
    "Link zum Bild": "pics/pizza.png",
    Beispiel: "Wir essen heute Abend Pizza. Die Pizza schmeckt sehr gut.",
    "weitere Infos": "die Pizzen / die Pizzas",
    Gruppe: 2
  },
  {
    Wort: "die Ruhe",
    Wortart: "Nomen",
    "Link zum Bild": "pics/ruhe.png",
    Beispiel: "Bitte sei still und gib Ruhe. In der Bibliothek herrscht Ruhe.",
    "weitere Infos": "—",
    Gruppe: 2
  },
  {
    Wort: "der Zoo",
    Wortart: "Nomen",
    "Link zum Bild": "pics/zoo.png",
    Beispiel: "Im Zoo kann man viele Tiere sehen. Am Wochenende besuchen wir den Zoo.",
    "weitere Infos": "die Zoos",
    Gruppe: 2
  },
  {
    Wort: "sammeln",
    Wortart: "Verb",
    "Link zum Bild": "pics/sammeln.png",
    Beispiel: "Er sammelt Briefmarken als Hobby. Wir sammeln Pilze im Wald.",
    "weitere Infos": "sammelte, hat gesammelt",
    Gruppe: 2
  },
  {
    Wort: "öffnen",
    Wortart: "Verb",
    "Link zum Bild": "pics/oeffnen.png",
    Beispiel: "Bitte öffne die Tür. Er öffnet vorsichtig das Paket.",
    "weitere Infos": "öffnete, hat geöffnet",
    Gruppe: 2
  },
  {
    Wort: "der Tee",
    Wortart: "Nomen",
    "Link zum Bild": "pics/tee.png",
    Beispiel: "Am Morgen trinke ich gerne einen warmen Tee. Der Tee ist sehr heiß.",
    "weitere Infos": "die Tees",
    Gruppe: 3
  },
  {
    Wort: "wohnen",
    Wortart: "Verb",
    "Link zum Bild": "pics/wohnen.png",
    Beispiel: "Meine Familie wohnt in einer großen Stadt. Wir wohnen in einem kleinen Haus.",
    "weitere Infos": "wohnte, hat gewohnt",
    Gruppe: 3
  },
  {
    Wort: "der Preis",
    Wortart: "Nomen",
    "Link zum Bild": "pics/preis.png",
    Beispiel: "Der Preis für das Spielzeug ist hoch. Sie hat einen tollen Preis gewonnen.",
    "weitere Infos": "die Preise",
    Gruppe: 3
  },
  {
    Wort: "der Zucker",
    Wortart: "Nomen",
    "Link zum Bild": "pics/zucker.png",
    Beispiel: "Ich nehme keinen Zucker in den Kaffee. Im Kuchen ist viel Zucker.",
    "weitere Infos": "—",
    Gruppe: 3
  },
  {
    Wort: "die Hand",
    Wortart: "Nomen",
    "Link zum Bild": "pics/hand.png",
    Beispiel: "Sie hält den Stift in der Hand. Meine Hände sind kalt.",
    "weitere Infos": "die Hände",
    Gruppe: 3
  },
  {
    Wort: "unser",
    Wortart: "Pronomen",
    "Link zum Bild": "pics/unser.png",
    Beispiel: "Das ist unser Hund. Unser Auto steht vor dem Haus.",
    "weitere Infos": "",
    Gruppe: 3
  },
  {
    Wort: "schmutzig",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/schmutzig.png",
    Beispiel: "Nach dem Spielen sind meine Kleider schmutzig. Der Boden war schmutzig.",
    "weitere Infos": "sauber",
    Gruppe: 3
  },
  {
    Wort: "das Bad",
    Wortart: "Nomen",
    "Link zum Bild": "pics/bad.png",
    Beispiel: "Ich nehme gerne ein warmes Bad. Das Bad ist neben der Küche.",
    "weitere Infos": "die Bäder",
    Gruppe: 3
  },
  {
    Wort: "alles",
    Wortart: "Pronomen",
    "Link zum Bild": "pics/alles.png",
    Beispiel: "Hast du alles eingepackt? Das ist alles, was ich habe.",
    "weitere Infos": "",
    Gruppe: 3
  },
  {
    Wort: "alt",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/alt.png",
    Beispiel: "Sein Fahrrad ist schon sehr alt. Das alte Haus wird bald renoviert.",
    "weitere Infos": "neu / jung",
    Gruppe: 3
  },
  {
    Wort: "der Berg",
    Wortart: "Nomen",
    "Link zum Bild": "pics/berg.png",
    Beispiel: "Wir wandern auf einen hohen Berg. Der Berg ist mit Schnee bedeckt.",
    "weitere Infos": "die Berge",
    Gruppe: 3
  },
  {
    Wort: "drehen",
    Wortart: "Verb",
    "Link zum Bild": "pics/drehen.png",
    Beispiel: "Das Rad beginnt sich zu drehen. Er dreht den Schlüssel im Schloss.",
    "weitere Infos": "drehte, hat gedreht",
    Gruppe: 3
  },
  {
    Wort: "traurig",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/traurig.png",
    Beispiel: "Der Junge ist traurig, weil sein Spielzeug kaputt ist. Mach dir keine Sorgen, sei nicht traurig.",
    "weitere Infos": "fröhlich / lustig",
    Gruppe: 4
  },
  {
    Wort: "hoffentlich",
    Wortart: "Adverb",
    "Link zum Bild": "pics/hoffentlich.png",
    Beispiel: "Hoffentlich scheint morgen die Sonne. Ich hoffe, wir sehen uns bald.",
    "weitere Infos": "",
    Gruppe: 4
  },
  {
    Wort: "die Maschine",
    Wortart: "Nomen",
    "Link zum Bild": "pics/maschine.png",
    Beispiel: "Die Waschmaschine ist sehr alt. Diese Maschine erleichtert die Arbeit.",
    "weitere Infos": "die Maschinen",
    Gruppe: 4
  },
  {
    Wort: "der Erfolg",
    Wortart: "Nomen",
    "Link zum Bild": "pics/erfolg.png",
    Beispiel: "Der Erfolg kam nach langer Arbeit. Ich wünsche dir viel Erfolg bei der Prüfung.",
    "weitere Infos": "die Erfolge",
    Gruppe: 4
  },
  {
    Wort: "sogar",
    Wortart: "Adverb",
    "Link zum Bild": "pics/sogar.png",
    Beispiel: "Es war so kalt, dass es sogar geschneit hat. Er hat mir sogar geholfen.",
    "weitere Infos": "",
    Gruppe: 4
  },
  {
    Wort: "satt",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/satt.png",
    Beispiel: "Nach dem Essen bin ich satt. Die Katze ist jetzt satt.",
    "weitere Infos": "hungrig",
    Gruppe: 4
  },
  {
    Wort: "erklären",
    Wortart: "Verb",
    "Link zum Bild": "pics/erklaeren.png",
    Beispiel: "Kannst du mir die Aufgabe erklären? Er erklärt den Schülern die Regeln.",
    "weitere Infos": "erklärte, hat erklärt",
    Gruppe: 4
  },
  {
    Wort: "der Teddy",
    Wortart: "Nomen",
    "Link zum Bild": "pics/teddy.png",
    Beispiel: "Das kleine Kind liebt seinen Teddy. Sie hat viele Teddys im Bett.",
    "weitere Infos": "die Teddys",
    Gruppe: 4
  },
  {
    Wort: "der Text",
    Wortart: "Nomen",
    "Link zum Bild": "pics/text.png",
    Beispiel: "Wir müssen den Text für morgen lesen. Der Text ist sehr lang.",
    "weitere Infos": "die Texte",
    Gruppe: 4
  },
  {
    Wort: "der Spatz",
    Wortart: "Nomen",
    "Link zum Bild": "pics/spatz.png",
    Beispiel: "Ein kleiner Spatz sitzt auf dem Baum. Spatzen sind oft in der Stadt zu sehen.",
    "weitere Infos": "die Spatzen",
    Gruppe: 4
  },
  {
    Wort: "etwas",
    Wortart: "Pronomen",
    "Link zum Bild": "pics/etwas.png",
    Beispiel: "Gib mir bitte etwas Wasser. Hast du etwas gehört?",
    "weitere Infos": "",
    Gruppe: 4
  },
  {
    Wort: "wenn",
    Wortart: "Konjunktion",
    "Link zum Bild": "pics/wenn.png",
    Beispiel: "Wir gehen spazieren, wenn die Sonne scheint. Wenn du Zeit hast, ruf mich an.",
    "weitere Infos": "",
    Gruppe: 4
  },
  {
    Wort: "der Schluss",
    Wortart: "Nomen",
    "Link zum Bild": "pics/schluss.png",
    Beispiel: "Der Film war am Schluss sehr spannend. Zum Schluss gab es noch eine Überraschung.",
    "weitere Infos": "die Schlüsse",
    Gruppe: 5
  },
  {
    Wort: "kühl",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/kuehl.png",
    Beispiel: "Das Wasser ist angenehm kühl. Es wird heute Abend kühl.",
    "weitere Infos": "warm / heiß",
    Gruppe: 5
  },
  {
    Wort: "der Igel",
    Wortart: "Nomen",
    "Link zum Bild": "pics/igel.png",
    Beispiel: "Der Igel hat viele Stacheln. Wir haben einen Igel im Garten gesehen.",
    "weitere Infos": "die Igel",
    Gruppe: 5
  },
  {
    Wort: "passen",
    Wortart: "Verb",
    "Link zum Bild": "pics/passen.png",
    Beispiel: "Die Schuhe passen mir perfekt. Diese Farbe passt nicht zu mir.",
    "weitere Infos": "passte, hat gepasst",
    Gruppe: 5
  },
  {
    Wort: "das Abendessen",
    Wortart: "Nomen",
    "Link zum Bild": "pics/abendessen.png",
    Beispiel: "Zum Abendessen gibt es Brot. Das Abendessen war sehr lecker.",
    "weitere Infos": "die Abendessen",
    Gruppe: 5
  },
  {
    Wort: "brüllen",
    Wortart: "Verb",
    "Link zum Bild": "pics/bruellen.png",
    Beispiel: "Der Löwe kann laut brüllen. Er hat vor Wut gebrüllt.",
    "weitere Infos": "brüllte, hat gebrüllt",
    Gruppe: 5
  },
  {
    Wort: "das Geheimnis",
    Wortart: "Nomen",
    "Link zum Bild": "pics/geheimnis.png",
    Beispiel: "Erzähle mir dein Geheimnis. Sie hat viele Geheimnisse.",
    "weitere Infos": "die Geheimnisse",
    Gruppe: 5
  },
  {
    Wort: "also",
    Wortart: "Adverb",
    "Link zum Bild": "pics/also.png",
    Beispiel: "Er ist krank, also kommt er nicht mit. Also, was machen wir jetzt?",
    "weitere Infos": "",
    Gruppe: 5
  },
  {
    Wort: "rechts",
    Wortart: "Adverb",
    "Link zum Bild": "pics/rechts.png",
    Beispiel: "Die Bäckerei ist rechts um die Ecke. Sie muss nach rechts abbiegen.",
    "weitere Infos": "links",
    Gruppe: 5
  },
  {
    Wort: "die Kleidung",
    Wortart: "Nomen",
    "Link zum Bild": "pics/kleidung.png",
    Beispiel: "Warme Kleidung ist im Winter wichtig. Sie kaufte neue Kleidung.",
    "weitere Infos": "—",
    Gruppe: 5
  },
  {
    Wort: "der Hals",
    Wortart: "Nomen",
    "Link zum Bild": "pics/hals.png",
    Beispiel: "Er hat Halsschmerzen. Ich trage einen Schal um den Hals.",
    "weitere Infos": "die Hälse",
    Gruppe: 5
  },
  {
    Wort: "der Mais",
    Wortart: "Nomen",
    "Link zum Bild": "pics/mais.png",
    Beispiel: "Auf dem Feld wächst viel Mais. Popcorn wird aus Mais gemacht.",
    "weitere Infos": "—",
    Gruppe: 5
  },
  {
    Wort: "gelb",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/gelb.png",
    Beispiel: "Die Sonne ist gelb. Sie trägt ein gelbes Kleid.",
    "weitere Infos": "",
    Gruppe: 6
  },
  {
    Wort: "die Mühle",
    Wortart: "Nomen",
    "Link zum Bild": "pics/muehle.png",
    Beispiel: "Die alte Mühle steht am Fluss. Früher wurde in der Mühle Korn gemahlen.",
    "weitere Infos": "die Mühlen",
    Gruppe: 6
  },
  {
    Wort: "die Heizung",
    Wortart: "Nomen",
    "Link zum Bild": "pics/heizung.png",
    Beispiel: "Die Heizung ist im Winter oft an. Drehe bitte die Heizung auf.",
    "weitere Infos": "die Heizungen",
    Gruppe: 6
  },
  {
    Wort: "der Ast",
    Wortart: "Nomen",
    "Link zum Bild": "pics/ast.png",
    Beispiel: "Ein Vogel sitzt auf einem Ast. Der Wind hat einen Ast abgebrochen.",
    "weitere Infos": "die Äste",
    Gruppe: 6
  },
  {
    Wort: "wichtig",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/wichtig.png",
    Beispiel: "Es ist wichtig, viel zu trinken. Das ist eine wichtige Regel.",
    "weitere Infos": "unwichtig",
    Gruppe: 6
  },
  {
    Wort: "hungrig",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/hungrig.png",
    Beispiel: "Nach der Wanderung sind wir sehr hungrig. Die hungrigen Vögel warten auf Futter.",
    "weitere Infos": "satt",
    Gruppe: 6
  },
  {
    Wort: "antworten",
    Wortart: "Verb",
    "Link zum Bild": "pics/antworten.png",
    Beispiel: "Er antwortet schnell auf meine Frage. Kannst du bitte antworten?",
    "weitere Infos": "antwortete, hat geantwortet",
    Gruppe: 6
  },
  {
    Wort: "durch",
    Wortart: "Präposition",
    "Link zum Bild": "pics/durch.png",
    Beispiel: "Wir gehen durch den Wald. Das Licht scheint durch das Fenster.",
    "weitere Infos": "",
    Gruppe: 6
  },
  {
    Wort: "die Waage",
    Wortart: "Nomen",
    "Link zum Bild": "pics/waage.png",
    Beispiel: "Mit der Waage kann man Dinge wiegen. Er stellte sich auf die Waage.",
    "weitere Infos": "die Waagen",
    Gruppe: 6
  },
  {
    Wort: "der Nachmittag",
    Wortart: "Nomen",
    "Link zum Bild": "pics/nachmittag.png",
    Beispiel: "Am Nachmittag spiele ich draußen. Der Nachmittag ist sonnig.",
    "weitere Infos": "die Nachmittage",
    Gruppe: 6
  },
  {
    Wort: "ihm",
    Wortart: "Pronomen",
    "Link zum Bild": "pics/ihm.png",
    Beispiel: "Ich gebe ihm den Ball. Er hilft ihm bei der Arbeit.",
    "weitere Infos": "",
    Gruppe: 6
  },
  {
    Wort: "windig",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/windig.png",
    Beispiel: "Heute ist es sehr windig. Bei windigem Wetter kann man gut Drachen steigen lassen.",
    "weitere Infos": "windstill",
    Gruppe: 6
  },
  {
    Wort: "erschrecken",
    Wortart: "Verb",
    "Link zum Bild": "pics/erschrecken.png",
    Beispiel: "Die laute Musik kann uns erschrecken. Er hat mich gestern erschreckt.",
    "weitere Infos": "erschreckte/erschrak, hat erschreckt/ist erschrocken",
    Gruppe: 7
  },
  {
    Wort: "der Zahn",
    Wortart: "Nomen",
    "Link zum Bild": "pics/zahn.png",
    Beispiel: "Der Milchzahn ist mir ausgefallen. Putze dir zweimal täglich die Zähne.",
    "weitere Infos": "die Zähne",
    Gruppe: 7
  },
  {
    Wort: "dick",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/dick.png",
    Beispiel: "Sie trägt einen dicken Pullover. Das Buch ist sehr dick.",
    "weitere Infos": "dünn / schlank",
    Gruppe: 7
  },
  {
    Wort: "die Wurst",
    Wortart: "Nomen",
    "Link zum Bild": "pics/wurst.png",
    Beispiel: "Ich esse gerne Brot mit Wurst. Kannst du eine Scheibe Wurst aufschneiden?",
    "weitere Infos": "die Würste",
    Gruppe: 7
  },
  {
    Wort: "ziehen",
    Wortart: "Verb",
    "Link zum Bild": "pics/ziehen.png",
    Beispiel: "Man muss an dem Seil ziehen. Er zog den Wagen hinter sich her.",
    "weitere Infos": "zog, hat gezogen",
    Gruppe: 7
  },
  {
    Wort: "donnern",
    Wortart: "Verb",
    "Link zum Bild": "pics/donnern.png",
    Beispiel: "Es blitzt und donnert am Himmel. Das Gewitter hat die ganze Nacht gedonnert.",
    "weitere Infos": "donnerte, hat gedonnert",
    Gruppe: 7
  },
  {
    Wort: "dreckig",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/dreckig.png",
    Beispiel: "Nach dem Spielen waren die Schuhe dreckig. Das Handtuch ist dreckig.",
    "weitere Infos": "sauber",
    Gruppe: 7
  },
  {
    Wort: "leihen",
    Wortart: "Verb",
    "Link zum Bild": "pics/leihen.png",
    Beispiel: "Kannst du mir dein Buch leihen? Ich habe mir Geld von ihm geliehen.",
    "weitere Infos": "lieh, hat geliehen",
    Gruppe: 7
  },
  {
    Wort: "das Haar",
    Wortart: "Nomen",
    "Link zum Bild": "pics/haar.png",
    Beispiel: "Sie hat lange blonde Haare. Das Haar ist dunkel.",
    "weitere Infos": "die Haare",
    Gruppe: 7
  },
  {
    Wort: "pflücken",
    Wortart: "Verb",
    "Link zum Bild": "pics/pfluecken.png",
    Beispiel: "Wir wollen Äpfel pflücken. Sie hat einen Strauß Blumen gepflückt.",
    "weitere Infos": "pflückte, hat gepflückt",
    Gruppe: 7
  },
  {
    Wort: "ohne",
    Wortart: "Präposition",
    "Link zum Bild": "pics/ohne.png",
    Beispiel: "Ich trinke Kaffee ohne Zucker. Ohne einen Schirm werden wir nass.",
    "weitere Infos": "",
    Gruppe: 7
  },
  {
    Wort: "die Beere",
    Wortart: "Nomen",
    "Link zum Bild": "pics/beere.png",
    Beispiel: "Im Wald wachsen viele leckere Beeren. Die kleine Beere ist süß.",
    "weitere Infos": "die Beeren",
    Gruppe: 7
  },
  {
    Wort: "die Wohnung",
    Wortart: "Nomen",
    "Link zum Bild": "pics/wohnung.png",
    Beispiel: "Sie suchen eine neue Wohnung. Die Wohnung ist hell und groß.",
    "weitere Infos": "die Wohnungen",
    Gruppe: 8
  },
  {
    Wort: "wahr",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/wahr.png",
    Beispiel: "Seine Geschichte ist nicht wahr. Ist das wirklich wahr?",
    "weitere Infos": "falsch",
    Gruppe: 8
  },
  {
    Wort: "werden",
    Wortart: "Verb",
    "Link zum Bild": "pics/werden.png",
    Beispiel: "Was willst du später werden? Es wird bald dunkel.",
    "weitere Infos": "wurde, ist geworden",
    Gruppe: 8
  },
  {
    Wort: "nichts",
    Wortart: "Pronomen",
    "Link zum Bild": "pics/nichts.png",
    Beispiel: "Ich habe nichts zu tun. Er hat nichts verstanden.",
    "weitere Infos": "",
    Gruppe: 8
  },
  {
    Wort: "vorbei",
    Wortart: "Adverb",
    "Link zum Bild": "pics/vorbei.png",
    Beispiel: "Der Zug ist schon vorbeigefahren. Die Ferien sind vorbei.",
    "weitere Infos": "",
    Gruppe: 8
  },
  {
    Wort: "verstecken",
    Wortart: "Verb",
    "Link zum Bild": "pics/verstecken.png",
    Beispiel: "Die Kinder spielen Verstecken. Er hat den Schlüssel gut versteckt.",
    "weitere Infos": "versteckte, hat versteckt",
    Gruppe: 8
  },
  {
    Wort: "Süß",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/suess.png",
    Beispiel: "Der Kuchen schmeckt sehr süß. Das Baby ist so süß.",
    "weitere Infos": "sauer / salzig",
    Gruppe: 8
  },
  {
    Wort: "das Frühstück",
    Wortart: "Nomen",
    "Link zum Bild": "pics/fruehstueck.png",
    Beispiel: "Das Frühstück ist die wichtigste Mahlzeit. Wir essen das Frühstück um acht Uhr.",
    "weitere Infos": "die Frühstücke",
    Gruppe: 8
  },
  {
    Wort: "zählen",
    Wortart: "Verb",
    "Link zum Bild": "pics/zaehlen.png",
    Beispiel: "Ich kann bis zehn zählen. Er zählt das Geld im Portemonnaie.",
    "weitere Infos": "zählte, hat gezählt",
    Gruppe: 8
  },
  {
    Wort: "das Geld",
    Wortart: "Nomen",
    "Link zum Bild": "pics/geld.png",
    Beispiel: "Sie hat nicht viel Geld dabei. Hast du das Geld für das Eis?",
    "weitere Infos": "—",
    Gruppe: 8
  },
  {
    Wort: "Der Mittag",
    Wortart: "Nomen",
    "Link zum Bild": "pics/mittag.png",
    Beispiel: "Um die Mittagszeit essen wir zu Hause. Die Sonne scheint am Mittag am stärksten.",
    "weitere Infos": "die Mittage",
    Gruppe: 8
  },
  {
    Wort: "kriechen",
    Wortart: "Verb",
    "Link zum Bild": "pics/kriechen.png",
    Beispiel: "Die Schnecke kriecht langsam. Er ist durch den Tunnel gekrochen.",
    "weitere Infos": "kroch, ist gekrochen",
    Gruppe: 8
  },
  {
    Wort: "krank",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/krank.png",
    Beispiel: "Er ist krank und muss im Bett bleiben. Die kranke Katze wird beim Tierarzt behandelt.",
    "weitere Infos": "gesund",
    Gruppe: 9
  },
  {
    Wort: "das Band",
    Wortart: "Nomen",
    "Link zum Bild": "pics/band.png",
    Beispiel: "Sie bindet ein rotes Band um das Geschenk. Das Band ist aus Stoff.",
    "weitere Infos": "die Bänder",
    Gruppe: 9
  },
  {
    Wort: "der Bäcker",
    Wortart: "Nomen",
    "Link zum Bild": "pics/baecker.png",
    Beispiel: "Der Bäcker backt jeden Tag frisches Brot. Wir kaufen Brötchen beim Bäcker.",
    "weitere Infos": "die Bäcker",
    Gruppe: 9
  },
  {
    Wort: "der Fleck",
    Wortart: "Nomen",
    "Link zum Bild": "pics/fleck.png",
    Beispiel: "Das T-Shirt hat einen großen Fleck. Dieser Fleck geht nicht mehr raus.",
    "weitere Infos": "die Flecken",
    Gruppe: 9
  },
  {
    Wort: "die E-Mail",
    Wortart: "Nomen",
    "Link zum Bild": "pics/email.png",
    Beispiel: "Ich habe dir eine E-Mail geschrieben. Die E-Mail kam gestern an.",
    "weitere Infos": "die E-Mails",
    Gruppe: 9
  },
  {
    Wort: "fressen",
    Wortart: "Verb",
    "Link zum Bild": "pics/fressen.png",
    Beispiel: "Die Katze frisst ihr Futter schnell. Hunde fressen gerne Knochen.",
    "weitere Infos": "fraß, hat gefressen",
    Gruppe: 9
  },
  {
    Wort: "die Wand",
    Wortart: "Nomen",
    "Link zum Bild": "pics/wand.png",
    Beispiel: "Wir hängen ein Bild an die Wand. Die Wände sind weiß gestrichen.",
    "weitere Infos": "die Wände",
    Gruppe: 9
  },
  {
    Wort: "anschließend",
    Wortart: "Adverb",
    "Link zum Bild": "pics/anschliessend.png",
    Beispiel: "Zuerst essen wir, anschließend spielen wir. Anschließend räumen wir auf.",
    "weitere Infos": "",
    Gruppe: 9
  },
  {
    Wort: "der Lärm",
    Wortart: "Nomen",
    "Link zum Bild": "pics/laerm.png",
    Beispiel: "Der Lärm von der Baustelle ist laut. Bitte mach keinen Lärm.",
    "weitere Infos": "—",
    Gruppe: 9
  },
  {
    Wort: "rund",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/rund.png",
    Beispiel: "Der Ball ist rund. Die Erde ist rund.",
    "weitere Infos": "eckig",
    Gruppe: 9
  },
  {
    Wort: "kaputt",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/kaputt.png",
    Beispiel: "Sein Spielzeug ist kaputt. Die Uhr ist nicht kaputt.",
    "weitere Infos": "ganz",
    Gruppe: 9
  },
  {
    Wort: "das Obst",
    Wortart: "Nomen",
    "Link zum Bild": "pics/obst.png",
    Beispiel: "Wir essen viel frisches Obst. Das Obst ist reif und lecker.",
    "weitere Infos": "—",
    Gruppe: 9
  },
  {
    Wort: "vorsichtig",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/vorsichtig.png",
    Beispiel: "Sei vorsichtig auf der Treppe. Er ist sehr vorsichtig gefahren.",
    "weitere Infos": "unvorsichtig",
    Gruppe: 9
  },
  {
    Wort: "der Winter",
    Wortart: "Nomen",
    "Link zum Bild": "pics/winter.png",
    Beispiel: "Im Winter liegt oft Schnee. Der Winter ist die kälteste Jahreszeit.",
    "weitere Infos": "die Winter",
    Gruppe: 10
  },
  {
    Wort: "das Geschenk",
    Wortart: "Nomen",
    "Link zum Bild": "pics/geschenk.png",
    Beispiel: "Ich habe ein schönes Geschenk bekommen. Er packt das Geschenk aus.",
    "weitere Infos": "die Geschenke",
    Gruppe: 10
  },
  {
    Wort: "glitzern",
    Wortart: "Verb",
    "Link zum Bild": "pics/glitzern.png",
    Beispiel: "Der Schnee beginnt zu glitzern. Die Sterne glitzerten am Himmel.",
    "weitere Infos": "glitzerte, hat geglitzert",
    Gruppe: 10
  },
  {
    Wort: "der Stern",
    Wortart: "Nomen",
    "Link zum Bild": "pics/stern.png",
    Beispiel: "Am Nachthimmel leuchten viele Sterne. Der Stern ist sehr hell.",
    "weitere Infos": "die Sterne",
    Gruppe: 10
  },
  {
    Wort: "der Schneemann",
    Wortart: "Nomen",
    "Link zum Bild": "pics/schneemann.png",
    Beispiel: "Die Kinder bauen einen großen Schneemann. Der Schneemann schmilzt in der Sonne.",
    "weitere Infos": "die Schneemänner",
    Gruppe: 10
  },
  {
    Wort: "kalt",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/kalt.png",
    Beispiel: "Heute ist es sehr kalt draußen. Mir ist kalt.",
    "weitere Infos": "warm / heiß",
    Gruppe: 10
  },
  {
    Wort: "die Mandarine",
    Wortart: "Nomen",
    "Link zum Bild": "pics/mandarine.png",
    Beispiel: "Ich esse gerne eine Mandarine. Die Mandarinen sind sehr saftig.",
    "weitere Infos": "die Mandarinen",
    Gruppe: 10
  },
  {
    Wort: "still",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/still.png",
    Beispiel: "In der Kirche ist es sehr still. Sei still und hör zu.",
    "weitere Infos": "laut",
    Gruppe: 10
  },
  {
    Wort: "schenken",
    Wortart: "Verb",
    "Link zum Bild": "pics/schenken.png",
    Beispiel: "Er möchte mir Blumen schenken. Wir haben ihm ein Buch geschenkt.",
    "weitere Infos": "schenkte, hat geschenkt",
    Gruppe: 10
  },
  {
    Wort: "verkaufen",
    Wortart: "Verb",
    "Link zum Bild": "pics/verkaufen.png",
    Beispiel: "Sie will ihr altes Spielzeug verkaufen. Der Händler verkauft Obst und Gemüse.",
    "weitere Infos": "verkaufte, hat verkauft",
    Gruppe: 10
  },
  {
    Wort: "sprechen",
    Wortart: "Verb",
    "Link zum Bild": "pics/sprechen.png",
    Beispiel: "Ich kann zwei Sprachen sprechen. Er spricht sehr schnell.",
    "weitere Infos": "sprach, hat gesprochen",
    Gruppe: 10
  },
  {
    Wort: "zuerst",
    Wortart: "Adverb",
    "Link zum Bild": "pics/zuerst.png",
    Beispiel: "Zuerst essen wir, dann spielen wir. Er kam zuerst an.",
    "weitere Infos": "",
    Gruppe: 10
  },
  {
    Wort: "zusammen",
    Wortart: "Adverb",
    "Link zum Bild": "pics/zusammen.png",
    Beispiel: "Wir arbeiten zusammen an dem Projekt. Wir gehen zusammen ins Kino.",
    "weitere Infos": "allein",
    Gruppe: 10
  },
  {
    Wort: "das Silvester",
    Wortart: "Nomen",
    "Link zum Bild": "pics/silvester.png",
    Beispiel: "Silvester feiern wir mit Freunden. Wir sehen uns das Feuerwerk an Silvester an.",
    "weitere Infos": "—",
    Gruppe: 11
  },
  {
    Wort: "schneien",
    Wortart: "Verb",
    "Link zum Bild": "pics/schneien.png",
    Beispiel: "Im Winter schneit es oft. Es hat die ganze Nacht geschneit.",
    "weitere Infos": "schneite, hat geschneit",
    Gruppe: 11
  },
  {
    Wort: "die Nuss",
    Wortart: "Nomen",
    "Link zum Bild": "pics/nuss.png",
    Beispiel: "Eichhörnchen verstecken Nüsse. Die Nuss ist hart.",
    "weitere Infos": "die Nüsse",
    Gruppe: 11
  },
  {
    Wort: "verpacken",
    Wortart: "Verb",
    "Link zum Bild": "pics/verpacken.png",
    Beispiel: "Ich muss das Geschenk noch verpacken. Die Süßigkeiten sind einzeln verpackt.",
    "weitere Infos": "verpackte, hat verpackt",
    Gruppe: 11
  },
  {
    Wort: "der Advent",
    Wortart: "Nomen",
    "Link zum Bild": "pics/advent.png",
    Beispiel: "Die Adventszeit beginnt bald. Wir zünden jede Woche eine Kerze im Advent an.",
    "weitere Infos": "—",
    Gruppe: 11
  },
  {
    Wort: "das Weihnachten",
    Wortart: "Nomen",
    "Link zum Bild": "pics/weihnachten.png",
    Beispiel: "Wir feiern Weihnachten am 24. Dezember. Weihnachten ist das Fest der Liebe.",
    "weitere Infos": "—",
    Gruppe: 11
  },
  {
    Wort: "das Geschenkpapier",
    Wortart: "Nomen",
    "Link zum Bild": "pics/geschenkpapier.png",
    Beispiel: "Ich brauche schönes Geschenkpapier. Das Geschenkpapier ist blau.",
    "weitere Infos": "die Geschenkpapiere",
    Gruppe: 11
  },
  {
    Wort: "nett",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/nett.png",
    Beispiel: "Die Nachbarin ist sehr nett. Sei immer nett zu deinen Mitschülern.",
    "weitere Infos": "unfreundlich / böse",
    Gruppe: 11
  },
  {
    Wort: "die Sprache",
    Wortart: "Nomen",
    "Link zum Bild": "pics/sprache.png",
    Beispiel: "Deutsch ist eine schwere Sprache. Er lernt gerade eine neue Sprache.",
    "weitere Infos": "die Sprachen",
    Gruppe: 11
  },
  {
    Wort: "die Mitte",
    Wortart: "Nomen",
    "Link zum Bild": "pics/mitte.png",
    Beispiel: "Sie sitzt in der Mitte des Tisches. Er steht in der Mitte des Raumes.",
    "weitere Infos": "die Mitten (selten)",
    Gruppe: 11
  },
  {
    Wort: "hübsch",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/huebsch.png",
    Beispiel: "Sie hat ein hübsches Gesicht. Das Kleid ist sehr hübsch.",
    "weitere Infos": "hässlich",
    Gruppe: 11
  },
  {
    Wort: "das Stück",
    Wortart: "Nomen",
    "Link zum Bild": "pics/stueck.png",
    Beispiel: "Ich möchte ein Stück Kuchen. Er hat noch viele Stücke von dem Puzzle.",
    "weitere Infos": "die Stücke",
    Gruppe: 11
  },
  {
    Wort: "der Weihnachtsbaum",
    Wortart: "Nomen",
    "Link zum Bild": "pics/weihnachtsbaum.png",
    Beispiel: "Der Weihnachtsbaum ist schön geschmückt. Wir haben den Weihnachtsbaum im Wohnzimmer aufgestellt.",
    "weitere Infos": "die Weihnachtsbäume",
    Gruppe: 11
  },
  {
    Wort: "die Pflanze",
    Wortart: "Nomen",
    "Link zum Bild": "pics/pflanze.png",
    Beispiel: "Diese Pflanze braucht viel Licht. Wir gießen die Pflanzen im Garten.",
    "weitere Infos": "die Pflanzen",
    Gruppe: 12
  },
  {
    Wort: "die Quelle",
    Wortart: "Nomen",
    "Link zum Bild": "pics/quelle.png",
    Beispiel: "Das Wasser kommt aus einer Quelle. Er hat eine gute Quelle für Informationen.",
    "weitere Infos": "die Quellen",
    Gruppe: 12
  },
  {
    Wort: "die Kuh",
    Wortart: "Nomen",
    "Link zum Bild": "pics/kuh.png",
    Beispiel: "Die Kuh frisst Gras auf der Wiese. Kühe geben uns Milch.",
    "weitere Infos": "die Kühe",
    Gruppe: 12
  },
  {
    Wort: "freuen",
    Wortart: "Verb",
    "Link zum Bild": "pics/freuen.png",
    Beispiel: "Ich freue mich auf die Ferien. Sie hat sich über das Geschenk gefreut.",
    "weitere Infos": "freute, hat gefreut",
    Gruppe: 12
  },
  {
    Wort: "der Biber",
    Wortart: "Nomen",
    "Link zum Bild": "pics/biber.png",
    Beispiel: "Der Biber baut einen Damm. Im Fluss lebt ein Biber.",
    "weitere Infos": "die Biber",
    Gruppe: 12
  },
  {
    Wort: "das Lob",
    Wortart: "Nomen",
    "Link zum Bild": "pics/lob.png",
    Beispiel: "Der Lehrer hat ihm großes Lob ausgesprochen. Er freut sich über jedes Lob.",
    "weitere Infos": "die Lobe (selten)",
    Gruppe: 12
  },
  {
    Wort: "die Rakete",
    Wortart: "Nomen",
    "Link zum Bild": "pics/rakete.png",
    Beispiel: "Die Rakete fliegt ins Weltall. Wir haben eine Rakete als Spielzeug.",
    "weitere Infos": "die Raketen",
    Gruppe: 12
  },
  {
    Wort: "sondern",
    Wortart: "Konjunktion",
    "Link zum Bild": "pics/sondern.png",
    Beispiel: "Das ist nicht rot, sondern blau. Wir fahren nicht morgen, sondern heute.",
    "weitere Infos": "",
    Gruppe: 12
  },
  {
    Wort: "dumm",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/dumm.png",
    Beispiel: "Das ist eine dumme Idee. Er hat sich dumm verhalten.",
    "weitere Infos": "klug / schlau",
    Gruppe: 12
  },
  {
    Wort: "die Party",
    Wortart: "Nomen",
    "Link zum Bild": "pics/party.png",
    Beispiel: "Wir machen am Samstag eine Party. Die Party war sehr lustig.",
    "weitere Infos": "die Partys",
    Gruppe: 12
  },
  {
    Wort: "toll",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/toll.png",
    Beispiel: "Du hast das toll gemacht. Das ist ein tolles Geschenk.",
    "weitere Infos": "schlecht / furchtbar",
    Gruppe: 12
  },
  {
    Wort: "retten",
    Wortart: "Verb",
    "Link zum Bild": "pics/retten.png",
    Beispiel: "Der Feuerwehrmann konnte die Katze retten. Er hat sein Leben gerettet.",
    "weitere Infos": "rettete, hat gerettet",
    Gruppe: 12
  },
  {
    Wort: "scharf",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/scharf.png",
    Beispiel: "Das Messer ist sehr scharf. Die Soße ist mir zu scharf.",
    "weitere Infos": "stumpf / mild",
    Gruppe: 12
  },
  {
    Wort: "bei",
    Wortart: "Präposition",
    "Link zum Bild": "pics/bei.png",
    Beispiel: "Ich wohne bei meiner Tante. Wir sitzen bei dem Lagerfeuer.",
    "weitere Infos": "",
    Gruppe: 12
  },
  {
    Wort: "der Hai",
    Wortart: "Nomen",
    "Link zum Bild": "pics/hai.png",
    Beispiel: "Der Hai ist ein großer Fisch mit scharfen Zähnen. Haie leben im Meer.",
    "weitere Infos": "die Haie",
    Gruppe: 13
  },
  {
    Wort: "ihr",
    Wortart: "Pronomen",
    "Link zum Bild": "pics/ihr.png",
    Beispiel: "Ist das euer Hund? Habt ihr die Hausaufgaben gemacht?",
    "weitere Infos": "",
    Gruppe: 13
  },
  {
    Wort: "die Faust",
    Wortart: "Nomen",
    "Link zum Bild": "pics/faust.png",
    Beispiel: "Er ballte die Faust vor Wut. Die Faust ist eine geschlossene Hand.",
    "weitere Infos": "die Fäuste",
    Gruppe: 13
  },
  {
    Wort: "fangen",
    Wortart: "Verb",
    "Link zum Bild": "pics/fangen.png",
    Beispiel: "Die Kinder spielen Fangen im Garten. Er hat den Ball gefangen.",
    "weitere Infos": "fing, hat gefangen",
    Gruppe: 13
  },
  {
    Wort: "der Ball",
    Wortart: "Nomen",
    "Link zum Bild": "pics/ball.png",
    Beispiel: "Mit dem Ball spielen wir Fußball. Er wirft den Ball hoch in die Luft.",
    "weitere Infos": "die Bälle",
    Gruppe: 13
  },
  {
    Wort: "klug",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/klug.png",
    Beispiel: "Der kluge Schüler löst die Aufgabe schnell. Sie ist sehr klug.",
    "weitere Infos": "dumm",
    Gruppe: 13
  },
  {
    Wort: "das Bett",
    Wortart: "Nomen",
    "Link zum Bild": "pics/bett.png",
    Beispiel: "Ich gehe abends ins Bett. Das Bett ist gemütlich und weich.",
    "weitere Infos": "die Betten",
    Gruppe: 13
  },
  {
    Wort: "dein",
    Wortart: "Pronomen",
    "Link zum Bild": "pics/dein.png",
    Beispiel: "Ist das dein Fahrrad? Dein Buch liegt auf dem Tisch.",
    "weitere Infos": "",
    Gruppe: 13
  },
  {
    Wort: "die Zukunft",
    Wortart: "Nomen",
    "Link zum Bild": "pics/zukunft.png",
    Beispiel: "Was wünschst du dir für die Zukunft? Niemand kennt die Zukunft.",
    "weitere Infos": "—",
    Gruppe: 13
  },
  {
    Wort: "das Zelt",
    Wortart: "Nomen",
    "Link zum Bild": "pics/zelt.png",
    Beispiel: "Wir schlafen im Urlaub in einem Zelt. Das Zelt ist groß genug für uns alle.",
    "weitere Infos": "die Zelte",
    Gruppe: 13
  },
  {
    Wort: "unter",
    Wortart: "Präposition",
    "Link zum Bild": "pics/unter.png",
    Beispiel: "Die Katze schläft unter dem Tisch. Er taucht unter Wasser.",
    "weitere Infos": "über",
    Gruppe: 13
  },
  {
    Wort: "streiten",
    Wortart: "Verb",
    "Link zum Bild": "pics/streiten.png",
    Beispiel: "Geschwister streiten manchmal. Sie haben sich gestern gestritten.",
    "weitere Infos": "stritt, hat gestritten",
    Gruppe: 13
  },
  {
    Wort: "der Mund",
    Wortart: "Nomen",
    "Link zum Bild": "pics/mund.png",
    Beispiel: "Er hält den Mund geschlossen. Sie öffnet ihren Mund zum Sprechen.",
    "weitere Infos": "die Münder",
    Gruppe: 13
  },
  {
    Wort: "der Müll",
    Wortart: "Nomen",
    "Link zum Bild": "pics/muell.png",
    Beispiel: "Wirf den Müll in die Tonne. Es liegt viel Müll auf der Straße.",
    "weitere Infos": "—",
    Gruppe: 13
  },
  {
    Wort: "der Januar",
    Wortart: "Nomen",
    "Link zum Bild": "pics/januar.png",
    Beispiel: "Der Januar ist der erste Monat im Jahr. Im Januar ist es sehr kalt.",
    "weitere Infos": "—",
    Gruppe: 14
  },
  {
    Wort: "der Februar",
    Wortart: "Nomen",
    "Link zum Bild": "pics/februar.png",
    Beispiel: "Der Februar ist der kürzeste Monat. Im Februar liegt oft Schnee.",
    "weitere Infos": "—",
    Gruppe: 14
  },
  {
    Wort: "der März",
    Wortart: "Nomen",
    "Link zum Bild": "pics/maerz.png",
    Beispiel: "Der Frühling beginnt im März. Im März werden die Tage länger.",
    "weitere Infos": "—",
    Gruppe: 14
  },
  {
    Wort: "der April",
    Wortart: "Nomen",
    "Link zum Bild": "pics/april.png",
    Beispiel: "Der April macht, was er will. Im April regnet es oft.",
    "weitere Infos": "—",
    Gruppe: 14
  },
  {
    Wort: "der Mai",
    Wortart: "Nomen",
    "Link zum Bild": "pics/mai.png",
    Beispiel: "Der Mai ist ein Frühlingsmonat. Im Mai blühen viele Blumen.",
    "weitere Infos": "—",
    Gruppe: 14
  },
  {
    Wort: "der Juni",
    Wortart: "Nomen",
    "Link zum Bild": "pics/juni.png",
    Beispiel: "Der Juni ist der Beginn des Sommers. Im Juni sind die Nächte kurz.",
    "weitere Infos": "—",
    Gruppe: 14
  },
  {
    Wort: "der Juli",
    Wortart: "Nomen",
    "Link zum Bild": "pics/juli.png",
    Beispiel: "Im Juli sind die Sommerferien. Der Juli ist der wärmste Monat.",
    "weitere Infos": "—",
    Gruppe: 14
  },
  {
    Wort: "der August",
    Wortart: "Nomen",
    "Link zum Bild": "pics/august.png",
    Beispiel: "Der August ist ein Sommermonat. Im August ist es oft sehr heiß.",
    "weitere Infos": "—",
    Gruppe: 14
  },
  {
    Wort: "der September",
    Wortart: "Nomen",
    "Link zum Bild": "pics/september.png",
    Beispiel: "Im September beginnt der Herbst. Die Schule beginnt im September wieder.",
    "weitere Infos": "—",
    Gruppe: 14
  },
  {
    Wort: "der Oktober",
    Wortart: "Nomen",
    "Link zum Bild": "pics/oktober.png",
    Beispiel: "Wir feiern das Oktoberfest im Oktober. Die Blätter fallen im Oktober.",
    "weitere Infos": "—",
    Gruppe: 14
  },
  {
    Wort: "der November",
    Wortart: "Nomen",
    "Link zum Bild": "pics/november.png",
    Beispiel: "Der November ist oft neblig. Im November ist es schon früh dunkel.",
    "weitere Infos": "—",
    Gruppe: 14
  },
  {
    Wort: "der Dezember",
    Wortart: "Nomen",
    "Link zum Bild": "pics/dezember.png",
    Beispiel: "Im Dezember feiern wir Weihnachten. Der Dezember ist der letzte Monat.",
    "weitere Infos": "—",
    Gruppe: 14
  },
  {
    Wort: "der Kalender",
    Wortart: "Nomen",
    "Link zum Bild": "pics/kalender.png",
    Beispiel: "Ich habe einen neuen Kalender für das nächste Jahr. Schaue in den Kalender, welchen Tag wir haben.",
    "weitere Infos": "die Kalender",
    Gruppe: 14
  },
  {
    Wort: "die Monate",
    Wortart: "Nomen",
    "Link zum Bild": "pics/monate.png",
    Beispiel: "Ein Jahr hat zwölf Monate. Die Monate sind unterschiedlich lang.",
    "weitere Infos": "der Monat",
    Gruppe: 14
  },
  {
    Wort: "der Fasching",
    Wortart: "Nomen",
    "Link zum Bild": "pics/fasching.png",
    Beispiel: "Beim Fasching verkleiden sich die Kinder. Wir feiern Fasching mit Musik und Tanz.",
    "weitere Infos": "die Faschinge (selten)",
    Gruppe: 15
  },
  {
    Wort: "blind",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/blind.png",
    Beispiel: "Er ist blind und liest Braille-Schrift. Die Katze wurde blind geboren.",
    "weitere Infos": "sehend",
    Gruppe: 15
  },
  {
    Wort: "die Eltern",
    Wortart: "Nomen",
    "Link zum Bild": "pics/eltern.png",
    Beispiel: "Meine Eltern sind sehr nett. Sie fragen ihre Eltern um Erlaubnis.",
    "weitere Infos": "— (Singular: das Elternteil)",
    Gruppe: 15
  },
  {
    Wort: "das Kind",
    Wortart: "Nomen",
    "Link zum Bild": "pics/kind.png",
    Beispiel: "Das kleine Kind spielt im Sandkasten. Sie hat zwei Kinder.",
    "weitere Infos": "die Kinder",
    Gruppe: 15
  },
  {
    Wort: "bunt",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/bunt.png",
    Beispiel: "Der Regenbogen ist sehr bunt. Sie trägt ein buntes Kleid.",
    "weitere Infos": "einfarbig / grau",
    Gruppe: 15
  },
  {
    Wort: "tanzen",
    Wortart: "Verb",
    "Link zum Bild": "pics/tanzen.png",
    Beispiel: "Wir wollen den ganzen Abend tanzen. Sie hat auf der Party getanzt.",
    "weitere Infos": "tanzte, hat getanzt",
    Gruppe: 15
  },
  {
    Wort: "laufen",
    Wortart: "Verb",
    "Link zum Bild": "pics/laufen.png",
    Beispiel: "Der Hund läuft schnell über die Wiese. Er ist den Marathon gelaufen.",
    "weitere Infos": "lief, ist gelaufen",
    Gruppe: 15
  },
  {
    Wort: "das Pferd",
    Wortart: "Nomen",
    "Link zum Bild": "pics/pferd.png",
    Beispiel: "Das Pferd steht auf der Koppel. Sie reitet gerne auf ihrem Pferd.",
    "weitere Infos": "die Pferde",
    Gruppe: 15
  },
  {
    Wort: "noch",
    Wortart: "Adverb",
    "Link zum Bild": "pics/noch.png",
    Beispiel: "Möchtest du noch ein Stück Kuchen? Er ist noch nicht fertig.",
    "weitere Infos": "",
    Gruppe: 15
  },
  {
    Wort: "das Rätsel",
    Wortart: "Nomen",
    "Link zum Bild": "pics/raetsel.png",
    Beispiel: "Ich liebe es, Rätsel zu lösen. Dieses Rätsel ist sehr schwer.",
    "weitere Infos": "die Rätsel",
    Gruppe: 15
  },
  {
    Wort: "erzählen",
    Wortart: "Verb",
    "Link zum Bild": "pics/erzaehlen.png",
    Beispiel: "Kannst du mir eine Geschichte erzählen? Er hat viel von seinem Urlaub erzählt.",
    "weitere Infos": "erzählte, hat erzählt",
    Gruppe: 15
  },
  {
    Wort: "besser",
    Wortart: "Adjektiv/Adverb (Komparativ)",
    "Link zum Bild": "pics/besser.png",
    Beispiel: "Diese Lösung ist besser. Mir geht es heute schon besser.",
    "weitere Infos": "schlechter",
    Gruppe: 15
  },
  {
    Wort: "die Axt",
    Wortart: "Nomen",
    "Link zum Bild": "pics/axt.png",
    Beispiel: "Mit der Axt spaltet er Holz. Die Axt ist ein Werkzeug.",
    "weitere Infos": "die Äxte",
    Gruppe: 15
  },
  {
    Wort: "das Kostüm",
    Wortart: "Nomen",
    "Link zum Bild": "pics/kostuem.png",
    Beispiel: "Ihr Kostüm ist sehr fantasievoll. Er trägt ein Clown-Kostüm.",
    "weitere Infos": "die Kostüme",
    Gruppe: 15
  },
  {
    Wort: "die Kraft",
    Wortart: "Nomen",
    "Link zum Bild": "pics/kraft.png",
    Beispiel: "Der Mann hat viel Kraft in den Armen. Er hat nicht mehr genug Kraft.",
    "weitere Infos": "die Kräfte",
    Gruppe: 16
  },
  {
    Wort: "teuer",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/teuer.png",
    Beispiel: "Das Auto ist sehr teuer. Dieses Kleid ist zu teuer.",
    "weitere Infos": "billig / preiswert",
    Gruppe: 16
  },
  {
    Wort: "glatt",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/glatt.png",
    Beispiel: "Vorsicht, die Straße ist glatt. Das Brett hat eine glatte Oberfläche.",
    "weitere Infos": "rau",
    Gruppe: 16
  },
  {
    Wort: "das Glück",
    Wortart: "Nomen",
    "Link zum Bild": "pics/glueck.png",
    Beispiel: "Ich wünsche dir viel Glück für deine Prüfung. Das Glück ist nicht auf seiner Seite.",
    "weitere Infos": "die Glücke (selten)",
    Gruppe: 16
  },
  {
    Wort: "die Schokolade",
    Wortart: "Nomen",
    "Link zum Bild": "pics/schokolade.png",
    Beispiel: "Ich esse gerne ein Stück Schokolade. Die Schokolade ist braun.",
    "weitere Infos": "die Schokoladen",
    Gruppe: 16
  },
  {
    Wort: "putzen",
    Wortart: "Verb",
    "Link zum Bild": "pics/putzen.png",
    Beispiel: "Wir müssen die Fenster putzen. Er putzt seine Zähne zweimal täglich.",
    "weitere Infos": "putzte, hat geputzt",
    Gruppe: 16
  },
  {
    Wort: "tief",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/tief.png",
    Beispiel: "Der See ist an dieser Stelle sehr tief. Sie atmet tief ein und aus.",
    "weitere Infos": "flach / hoch",
    Gruppe: 16
  },
  {
    Wort: "eigentlich",
    Wortart: "Adverb",
    "Link zum Bild": "pics/eigentlich.png",
    Beispiel: "Eigentlich wollte ich heute schwimmen gehen. Was ist eigentlich passiert?",
    "weitere Infos": "",
    Gruppe: 16
  },
  {
    Wort: "jetzt",
    Wortart: "Adverb",
    "Link zum Bild": "pics/jetzt.png",
    Beispiel: "Jetzt ist es Zeit für das Abendessen. Komm jetzt sofort her.",
    "weitere Infos": "später / früher",
    Gruppe: 16
  },
  {
    Wort: "vor",
    Wortart: "Präposition",
    "Link zum Bild": "pics/vor.png",
    Beispiel: "Er steht vor der Tür. Vor einer Woche war er noch im Urlaub.",
    "weitere Infos": "hinter",
    Gruppe: 16
  },
  {
    Wort: "das Tier",
    Wortart: "Nomen",
    "Link zum Bild": "pics/tier.png",
    Beispiel: "Im Wald leben viele Tiere. Mein Lieblingstier ist der Hund.",
    "weitere Infos": "die Tiere",
    Gruppe: 16
  },
  {
    Wort: "die Winterjacke",
    Wortart: "Nomen",
    "Link zum Bild": "pics/winterjacke.png",
    Beispiel: "Ich ziehe meine Winterjacke an, wenn es kalt ist. Die Winterjacke ist sehr warm.",
    "weitere Infos": "die Winterjacken",
    Gruppe: 16
  },
  {
    Wort: "die Stiefel",
    Wortart: "Nomen",
    "Link zum Bild": "pics/stiefel.png",
    Beispiel: "Im Schnee trage ich meine warmen Stiefel. Die Stiefel sind aus Leder.",
    "weitere Infos": "der Stiefel",
    Gruppe: 16
  },
  {
    Wort: "dunkel",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/dunkel.png",
    Beispiel: "Nach Sonnenuntergang wird es dunkel. Das Zimmer ist sehr dunkel.",
    "weitere Infos": "hell",
    Gruppe: 16
  },
  {
    Wort: "der Montag",
    Wortart: "Nomen",
    "Link zum Bild": "pics/montag.png",
    Beispiel: "Am Montag beginnt die neue Woche. Der Montag ist mein freier Tag.",
    "weitere Infos": "die Montage",
    Gruppe: 17
  },
  {
    Wort: "der Dienstag",
    Wortart: "Nomen",
    "Link zum Bild": "pics/dienstag.png",
    Beispiel: "Dienstag haben wir Sportunterricht. Bis Dienstag muss die Aufgabe fertig sein.",
    "weitere Infos": "die Dienstage",
    Gruppe: 17
  },
  {
    Wort: "der Mittwoch",
    Wortart: "Nomen",
    "Link zum Bild": "pics/mittwoch.png",
    Beispiel: "Die Woche ist am Mittwoch zur Hälfte vorbei. Wir treffen uns am Mittwoch.",
    "weitere Infos": "die Mittwoche",
    Gruppe: 17
  },
  {
    Wort: "der Donnerstag",
    Wortart: "Nomen",
    "Link zum Bild": "pics/donnerstag.png",
    Beispiel: "Am Donnerstag gehen wir ins Museum. Der Donnerstag ist bald vorbei.",
    "weitere Infos": "die Donnerstage",
    Gruppe: 17
  },
  {
    Wort: "der Freitag",
    Wortart: "Nomen",
    "Link zum Bild": "pics/freitag.png",
    Beispiel: "Der Freitag ist der letzte Schultag. Freitags ist der Verkehr sehr dicht.",
    "weitere Infos": "die Freitage",
    Gruppe: 17
  },
  {
    Wort: "der Samstag",
    Wortart: "Nomen",
    "Link zum Bild": "pics/samstag.png",
    Beispiel: "Am Samstag haben wir frei. Der Samstag gehört dem Wochenende.",
    "weitere Infos": "die Samstage",
    Gruppe: 17
  },
  {
    Wort: "der Sonntag",
    Wortart: "Nomen",
    "Link zum Bild": "pics/sonntag.png",
    Beispiel: "Der Sonntag ist Ruhetag. Am Sonntag schlafe ich lange.",
    "weitere Infos": "die Sonntage",
    Gruppe: 17
  },
  {
    Wort: "die Woche",
    Wortart: "Nomen",
    "Link zum Bild": "pics/woche.png",
    Beispiel: "Eine Woche hat sieben Tage. Nächste Woche fahre ich weg.",
    "weitere Infos": "die Wochen",
    Gruppe: 17
  },
  {
    Wort: "die Tageszeit",
    Wortart: "Nomen",
    "Link zum Bild": "pics/tageszeit.png",
    Beispiel: "Morgen ist eine Tageszeit. Welche Tageszeit magst du am liebsten?",
    "weitere Infos": "die Tageszeiten",
    Gruppe: 17
  },
  {
    Wort: "aufstehen",
    Wortart: "Verb",
    "Link zum Bild": "pics/aufstehen.png",
    Beispiel: "Ich muss früh aufstehen. Er ist heute schon um sechs Uhr aufgestanden.",
    "weitere Infos": "stand auf, ist aufgestanden",
    Gruppe: 17
  },
  {
    Wort: "schlafen",
    Wortart: "Verb",
    "Link zum Bild": "pics/schlafen.png",
    Beispiel: "Ich schlafe am liebsten im Dunkeln. Das Baby hat den ganzen Vormittag geschlafen.",
    "weitere Infos": "schlief, hat geschlafen",
    Gruppe: 17
  },
  {
    Wort: "täglich",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/taeglich.png",
    Beispiel: "Ich lese täglich die Zeitung. Das sind meine täglichen Aufgaben.",
    "weitere Infos": "nächtlich",
    Gruppe: 17
  },
  {
    Wort: "schnell",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/schnell.png",
    Beispiel: "Das schnelle Auto fährt vorbei. Er kann sehr schnell laufen.",
    "weitere Infos": "langsam",
    Gruppe: 17
  },
  {
    Wort: "langsam",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/langsam.png",
    Beispiel: "Die Schnecke kriecht langsam. Er spricht zu langsam.",
    "weitere Infos": "schnell",
    Gruppe: 17
  },
  {
    Wort: "der Frühling",
    Wortart: "Nomen",
    "Link zum Bild": "pics/fruehling.png",
    Beispiel: "Im Frühling wird es wärmer. Der Frühling beginnt im März.",
    "weitere Infos": "die Frühlinge",
    Gruppe: 18
  },
  {
    Wort: "beide",
    Wortart: "Pronomen",
    "Link zum Bild": "pics/beide.png",
    Beispiel: "Wir kommen beide morgen. Beide Kinder spielen im Sandkasten.",
    "weitere Infos": "",
    Gruppe: 18
  },
  {
    Wort: "blühen",
    Wortart: "Verb",
    "Link zum Bild": "pics/bluehen.png",
    Beispiel: "Die Blumen beginnen zu blühen. Im Frühling blüht alles.",
    "weitere Infos": "blühte, hat geblüht",
    Gruppe: 18
  },
  {
    Wort: "links",
    Wortart: "Adverb",
    "Link zum Bild": "pics/links.png",
    Beispiel: "Du musst an der Kreuzung links abbiegen. Halte dich immer links.",
    "weitere Infos": "rechts",
    Gruppe: 18
  },
  {
    Wort: "reden",
    Wortart: "Verb",
    "Link zum Bild": "pics/reden.png",
    Beispiel: "Wir reden über das Wetter. Er redet gerne mit seinen Freunden.",
    "weitere Infos": "redete, hat geredet",
    Gruppe: 18
  },
  {
    Wort: "hier",
    Wortart: "Adverb",
    "Link zum Bild": "pics/hier.png",
    Beispiel: "Komm bitte mal kurz hierher. Wir sind jetzt hier angekommen.",
    "weitere Infos": "dort",
    Gruppe: 18
  },
  {
    Wort: "die Blüte",
    Wortart: "Nomen",
    "Link zum Bild": "pics/bluete.png",
    Beispiel: "Die Blüte des Apfelbaums ist weiß. Bienen fliegen zu den Blüten.",
    "weitere Infos": "die Blüten",
    Gruppe: 18
  },
  {
    Wort: "der Topf",
    Wortart: "Nomen",
    "Link zum Bild": "pics/topf.png",
    Beispiel: "Ich brauche einen großen Topf zum Kochen. Die Blumen stehen in Töpfen.",
    "weitere Infos": "die Töpfe",
    Gruppe: 18
  },
  {
    Wort: "der Korb",
    Wortart: "Nomen",
    "Link zum Bild": "pics/korb.png",
    Beispiel: "Im Korb sind Äpfel und Birnen. Sie trägt einen Korb am Arm.",
    "weitere Infos": "die Körbe",
    Gruppe: 18
  },
  {
    Wort: "einfach",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/einfach.png",
    Beispiel: "Die Aufgabe ist ganz einfach. Das ist einfach zu verstehen.",
    "weitere Infos": "schwierig / kompliziert",
    Gruppe: 18
  },
  {
    Wort: "können",
    Wortart: "Verb",
    "Link zum Bild": "pics/koennen.png",
    Beispiel: "Ich kann sehr gut schwimmen. Er konnte die Tür nicht öffnen.",
    "weitere Infos": "konnte, hat gekonnt",
    Gruppe: 18
  },
  {
    Wort: "die Antwort",
    Wortart: "Nomen",
    "Link zum Bild": "pics/antwort.png",
    Beispiel: "Ich warte auf deine Antwort. Gib mir bitte eine Antwort.",
    "weitere Infos": "die Antworten",
    Gruppe: 18
  },
  {
    Wort: "der Fehler",
    Wortart: "Nomen",
    "Link zum Bild": "pics/fehler.png",
    Beispiel: "Du hast einen Fehler gemacht. Er fand viele Fehler in meinem Text.",
    "weitere Infos": "die Fehler",
    Gruppe: 18
  },
  {
    Wort: "gelingen",
    Wortart: "Verb",
    "Link zum Bild": "pics/gelingen.png",
    Beispiel: "Hoffentlich gelingt mir das Rezept. Die Überraschung ist gut gelungen.",
    "weitere Infos": "gelang, ist gelungen",
    Gruppe: 18
  },
  {
    Wort: "der Nachbar",
    Wortart: "Nomen",
    "Link zum Bild": "pics/nachbar.png",
    Beispiel: "Unser Nachbar ist sehr freundlich. Er redet mit seinem Nachbarn.",
    "weitere Infos": "die Nachbarn",
    Gruppe: 18
  },
  {
    Wort: "der Bär",
    Wortart: "Nomen",
    "Link zum Bild": "pics/baer.png",
    Beispiel: "Im Zoo lebt ein großer Bär. Bären halten Winterschlaf.",
    "weitere Infos": "die Bären",
    Gruppe: 18
  },
  {
    Wort: "das Ostern",
    Wortart: "Nomen",
    "Link zum Bild": "pics/ostern.png",
    Beispiel: "Ostern feiern wir im Frühling. Wir wünschen dir Frohe Ostern.",
    "weitere Infos": "—",
    Gruppe: 19
  },
  {
    Wort: "der Hase",
    Wortart: "Nomen",
    "Link zum Bild": "pics/hase.png",
    Beispiel: "Der Osterhase versteckt die Eier. Ein Hase ist ein schnelles Tier.",
    "weitere Infos": "die Hasen",
    Gruppe: 19
  },
  {
    Wort: "die Eier",
    Wortart: "Nomen",
    "Link zum Bild": "pics/eier.png",
    Beispiel: "Ich esse gerne gekochte Eier. Die Eier sind bunt bemalt.",
    "weitere Infos": "das Ei",
    Gruppe: 19
  },
  {
    Wort: "der Rasen",
    Wortart: "Nomen",
    "Link zum Bild": "pics/rasen.png",
    Beispiel: "Wir müssen den Rasen mähen. Der Rasen ist grün und weich.",
    "weitere Infos": "die Rasen",
    Gruppe: 19
  },
  {
    Wort: "essen",
    Wortart: "Verb",
    "Link zum Bild": "pics/essen.png",
    Beispiel: "Was wollen wir heute Abend essen? Er hat den ganzen Teller leer gegessen.",
    "weitere Infos": "aß, hat gegessen",
    Gruppe: 19
  },
  {
    Wort: "aufräumen",
    Wortart: "Verb",
    "Link zum Bild": "pics/aufraeumen.png",
    Beispiel: "Du musst dein Zimmer aufräumen. Sie hat die Küche aufgeräumt.",
    "weitere Infos": "räumte auf, hat aufgeräumt",
    Gruppe: 19
  },
  {
    Wort: "malen",
    Wortart: "Verb",
    "Link zum Bild": "pics/malen.png",
    Beispiel: "Wir malen ein Bild mit Wasserfarben. Er hat ein schönes Porträt gemalt.",
    "weitere Infos": "malte, hat gemalt",
    Gruppe: 19
  },
  {
    Wort: "euer",
    Wortart: "Pronomen",
    "Link zum Bild": "pics/euer.png",
    Beispiel: "Ist das euer Haus? Eure Katze ist weggelaufen.",
    "weitere Infos": "",
    Gruppe: 19
  },
  {
    Wort: "gegen",
    Wortart: "Präposition",
    "Link zum Bild": "pics/gegen.png",
    Beispiel: "Er spielt Fußball gegen seinen Bruder. Das ist eine Impfung gegen Masern.",
    "weitere Infos": "",
    Gruppe: 19
  },
  {
    Wort: "froh",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/froh.png",
    Beispiel: "Ich bin froh, dass du da bist. Wir wünschen dir Frohe Weihnachten.",
    "weitere Infos": "traurig / unglücklich",
    Gruppe: 19
  },
  {
    Wort: "frisch",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/frisch.png",
    Beispiel: "Das Brot ist ganz frisch. Im Frühling ist die Luft frisch.",
    "weitere Infos": "alt / abgestanden",
    Gruppe: 19
  },
  {
    Wort: "bremsen",
    Wortart: "Verb",
    "Link zum Bild": "pics/bremsen.png",
    Beispiel: "Du musst jetzt bremsen. Er hat gerade noch gebremst.",
    "weitere Infos": "bremste, hat gebremst",
    Gruppe: 19
  },
  {
    Wort: "treu",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/treu.png",
    Beispiel: "Hunde sind sehr treue Tiere. Er ist ein treuer Freund.",
    "weitere Infos": "untreu",
    Gruppe: 19
  },
  {
    Wort: "der Stuhl",
    Wortart: "Nomen",
    "Link zum Bild": "pics/stuhl.png",
    Beispiel: "Bitte setz dich auf den Stuhl. Der Stuhl wackelt.",
    "weitere Infos": "die Stühle",
    Gruppe: 19
  },
  {
    Wort: "greifen",
    Wortart: "Verb",
    "Link zum Bild": "pics/greifen.png",
    Beispiel: "Er greift nach dem Glas. Sie griff nach seiner Hand.",
    "weitere Infos": "griff, hat gegriffen",
    Gruppe: 19
  },
  {
    Wort: "komisch",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/komisch.png",
    Beispiel: "Der Film ist sehr komisch. Das ist ein komisches Geräusch.",
    "weitere Infos": "normal / ernst",
    Gruppe: 19
  },
  {
    Wort: "nehmen",
    Wortart: "Verb",
    "Link zum Bild": "pics/nehmen.png",
    Beispiel: "Nimm dir, was du brauchst. Er hat den Schlüssel genommen.",
    "weitere Infos": "nahm, hat genommen",
    Gruppe: 20
  },
  {
    Wort: "der Fahrer",
    Wortart: "Nomen",
    "Link zum Bild": "pics/fahrer.png",
    Beispiel: "Der Fahrer des Busses ist freundlich. Er ist ein guter Fahrer.",
    "weitere Infos": "die Fahrer",
    Gruppe: 20
  },
  {
    Wort: "telefonieren",
    Wortart: "Verb",
    "Link zum Bild": "pics/telefonieren.png",
    Beispiel: "Wir müssen noch mit ihm telefonieren. Sie hat lange telefoniert.",
    "weitere Infos": "telefonierte, hat telefoniert",
    Gruppe: 20
  },
  {
    Wort: "fotografieren",
    Wortart: "Verb",
    "Link zum Bild": "pics/fotografieren.png",
    Beispiel: "Ich möchte die Berge fotografieren. Er hat viele Fotos fotografiert.",
    "weitere Infos": "fotografierte, hat fotografiert",
    Gruppe: 20
  },
  {
    Wort: "die Schnecke",
    Wortart: "Nomen",
    "Link zum Bild": "pics/schnecke.png",
    Beispiel: "Die Schnecke kriecht sehr langsam. Nach dem Regen kommen viele Schnecken.",
    "weitere Infos": "die Schnecken",
    Gruppe: 20
  },
  {
    Wort: "deshalb",
    Wortart: "Adverb",
    "Link zum Bild": "pics/deshalb.png",
    Beispiel: "Es regnet, deshalb bleiben wir drinnen. Er war krank, deshalb kam er nicht.",
    "weitere Infos": "",
    Gruppe: 20
  },
  {
    Wort: "der Salat",
    Wortart: "Nomen",
    "Link zum Bild": "pics/salat.png",
    Beispiel: "Zum Abendessen gibt es Salat. Der Salat ist sehr frisch.",
    "weitere Infos": "die Salate",
    Gruppe: 20
  },
  {
    Wort: "schneiden",
    Wortart: "Verb",
    "Link zum Bild": "pics/schneiden.png",
    Beispiel: "Ich muss das Gemüse schneiden. Er hat sich in den Finger geschnitten.",
    "weitere Infos": "schnitt, hat geschnitten",
    Gruppe: 20
  },
  {
    Wort: "bevor",
    Wortart: "Konjunktion",
    "Link zum Bild": "pics/bevor.png",
    Beispiel: "Wasche deine Hände, bevor du isst. Bevor es dunkel wird, müssen wir zu Hause sein.",
    "weitere Infos": "",
    Gruppe: 20
  },
  {
    Wort: "lernen",
    Wortart: "Verb",
    "Link zum Bild": "pics/lernen.png",
    Beispiel: "Wir müssen für die Klassenarbeit lernen. Sie hat schnell die neue Sprache gelernt.",
    "weitere Infos": "lernte, hat gelernt",
    Gruppe: 20
  },
  {
    Wort: "laut",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/laut.png",
    Beispiel: "Die Musik ist zu laut. Er hat sehr laut gelacht.",
    "weitere Infos": "leise",
    Gruppe: 20
  },
  {
    Wort: "zwanzig",
    Wortart: "Zahlwort",
    "Link zum Bild": "pics/zwanzig.png",
    Beispiel: "Ich bin zwanzig Jahre alt. Wir brauchen zwanzig Stühle.",
    "weitere Infos": "",
    Gruppe: 20
  },
  {
    Wort: "fertig",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/fertig.png",
    Beispiel: "Bist du schon fertig mit den Hausaufgaben? Das Essen ist fertig.",
    "weitere Infos": "unfertig",
    Gruppe: 20
  },
  {
    Wort: "der Punkt",
    Wortart: "Nomen",
    "Link zum Bild": "pics/punkt.png",
    Beispiel: "Am Ende des Satzes steht ein Punkt. Ich habe viele Punkte in der Prüfung bekommen.",
    "weitere Infos": "die Punkte",
    Gruppe: 20
  },
  {
    Wort: "der Geburtstag",
    Wortart: "Nomen",
    "Link zum Bild": "pics/geburtstag.png",
    Beispiel: "Wir feiern heute seinen Geburtstag. Herzlichen Glückwunsch zum Geburtstag!",
    "weitere Infos": "die Geburtstage",
    Gruppe: 20
  },
  {
    Wort: "die Geburt",
    Wortart: "Nomen",
    "Link zum Bild": "pics/geburt.png",
    Beispiel: "Die Geburt des Babys war eine Freude. Sie feierte den Tag ihrer Geburt.",
    "weitere Infos": "die Geburten",
    Gruppe: 20
  },
  {
    Wort: "eins",
    Wortart: "Zahlwort",
    "Link zum Bild": "pics/eins.png",
    Beispiel: "Ich habe nur noch eins übrig. Die eins ist meine Lieblingszahl.",
    "weitere Infos": "",
    Gruppe: 21
  },
  {
    Wort: "zwei",
    Wortart: "Zahlwort",
    "Link zum Bild": "pics/zwei.png",
    Beispiel: "Wir sind nur zu zweit gekommen. Ich habe zwei Äpfel.",
    "weitere Infos": "",
    Gruppe: 21
  },
  {
    Wort: "drei",
    Wortart: "Zahlwort",
    "Link zum Bild": "pics/drei.png",
    Beispiel: "Drei ist eine ungerade Zahl. Wir sind drei Freunde.",
    "weitere Infos": "",
    Gruppe: 21
  },
  {
    Wort: "vier",
    Wortart: "Zahlwort",
    "Link zum Bild": "pics/vier.png",
    Beispiel: "Ein Stuhl hat vier Beine. Die Uhr schlägt vier.",
    "weitere Infos": "",
    Gruppe: 21
  },
  {
    Wort: "fünf",
    Wortart: "Zahlwort",
    "Link zum Bild": "pics/fuenf.png",
    Beispiel: "Ich habe fünf Finger an einer Hand. Die Schulstunde dauert fünfundvierzig Minuten.",
    "weitere Infos": "",
    Gruppe: 21
  },
  {
    Wort: "sechs",
    Wortart: "Zahlwort",
    "Link zum Bild": "pics/sechs.png",
    Beispiel: "Wir treffen uns um sechs Uhr. Der Würfel hat sechs Seiten.",
    "weitere Infos": "",
    Gruppe: 21
  },
  {
    Wort: "sieben",
    Wortart: "Zahlwort",
    "Link zum Bild": "pics/sieben.png",
    Beispiel: "Eine Woche hat sieben Tage. Die sieben ist meine Glückszahl.",
    "weitere Infos": "",
    Gruppe: 21
  },
  {
    Wort: "acht",
    Wortart: "Zahlwort",
    "Link zum Bild": "pics/acht.png",
    Beispiel: "Der Bus fährt um acht ab. Wir sind acht Personen.",
    "weitere Infos": "",
    Gruppe: 21
  },
  {
    Wort: "neun",
    Wortart: "Zahlwort",
    "Link zum Bild": "pics/neun.png",
    Beispiel: "Ich bin um neun Uhr aufgestanden. Neun ist eine schöne Zahl.",
    "weitere Infos": "",
    Gruppe: 21
  },
  {
    Wort: "zehn",
    Wortart: "Zahlwort",
    "Link zum Bild": "pics/zehn.png",
    Beispiel: "Wir haben zehn Finger. Ich warte seit zehn Minuten.",
    "weitere Infos": "",
    Gruppe: 21
  },
  {
    Wort: "elf",
    Wortart: "Zahlwort",
    "Link zum Bild": "pics/elf.png",
    Beispiel: "Der Film beginnt um elf Uhr. Elf ist eine Primzahl.",
    "weitere Infos": "",
    Gruppe: 21
  },
  {
    Wort: "zwölf",
    Wortart: "Zahlwort",
    "Link zum Bild": "pics/zwoelf.png",
    Beispiel: "Ich habe zwölf Eier gekauft. Ein Jahr hat zwölf Monate.",
    "weitere Infos": "",
    Gruppe: 21
  },
  {
    Wort: "die Zahl",
    Wortart: "Nomen",
    "Link zum Bild": "pics/zahl.png",
    Beispiel: "Er hat eine neue Zahl gelernt. Kannst du die Zahl erkennen?",
    "weitere Infos": "die Zahlen",
    Gruppe: 21
  },
  {
    Wort: "der Euro",
    Wortart: "Nomen",
    "Link zum Bild": "pics/euro.png",
    Beispiel: "Ich habe zehn Euro im Portemonnaie. Der Euro ist die europäische Währung.",
    "weitere Infos": "die Euro",
    Gruppe: 21
  },
  {
    Wort: "die Rechnung",
    Wortart: "Nomen",
    "Link zum Bild": "pics/rechnung.png",
    Beispiel: "Wir müssen die Rechnung bezahlen. Ich habe die Rechnung geprüft.",
    "weitere Infos": "die Rechnungen",
    Gruppe: 21
  },
  {
    Wort: "rechnen",
    Wortart: "Verb",
    "Link zum Bild": "pics/rechnen.png",
    Beispiel: "Ich kann gut im Kopf rechnen. Er hat die Aufgabe schnell gerechnet.",
    "weitere Infos": "rechnete, hat gerechnet",
    Gruppe: 21
  },
  {
    Wort: "heute",
    Wortart: "Adverb",
    "Link zum Bild": "pics/heute.png",
    Beispiel: "Heute scheint die Sonne. Was machen wir heute Abend?",
    "weitere Infos": "gestern / morgen",
    Gruppe: 22
  },
  {
    Wort: "letzte",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/letzte.png",
    Beispiel: "Das war letzte Woche. Das ist die letzte Seite im Buch.",
    "weitere Infos": "erste",
    Gruppe: 22
  },
  {
    Wort: "rollen",
    Wortart: "Verb",
    "Link zum Bild": "pics/rollen.png",
    Beispiel: "Der Ball beginnt zu rollen. Er hat den Teig gerollt.",
    "weitere Infos": "rollte, hat/ist gerollt",
    Gruppe: 22
  },
  {
    Wort: "das Knie",
    Wortart: "Nomen",
    "Link zum Bild": "pics/knie.png",
    Beispiel: "Ich habe mir das Knie gestoßen. Knie dich bitte hin.",
    "weitere Infos": "die Knie",
    Gruppe: 22
  },
  {
    Wort: "hundert",
    Wortart: "Zahlwort",
    "Link zum Bild": "pics/hundert.png",
    Beispiel: "Hundert ist eine große Zahl. Es waren hundert Leute da.",
    "weitere Infos": "",
    Gruppe: 22
  },
  {
    Wort: "wenig",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/wenig.png",
    Beispiel: "Ich habe nur wenig Zeit. Er hat wenig verstanden.",
    "weitere Infos": "viel",
    Gruppe: 22
  },
  {
    Wort: "die Bank",
    Wortart: "Nomen",
    "Link zum Bild": "pics/bank.png",
    Beispiel: "Wir sitzen auf der Parkbank. Die Bank ist aus Holz.",
    "weitere Infos": "die Bänke",
    Gruppe: 22
  },
  {
    Wort: "leicht",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/leicht.png",
    Beispiel: "Die Aufgabe ist sehr leicht. Der Koffer ist leicht.",
    "weitere Infos": "schwer",
    Gruppe: 22
  },
  {
    Wort: "die Schule",
    Wortart: "Nomen",
    "Link zum Bild": "pics/schule.png",
    Beispiel: "Ich gehe gerne in die Schule. Die Schule beginnt um acht Uhr.",
    "weitere Infos": "die Schulen",
    Gruppe: 22
  },
  {
    Wort: "zeigen",
    Wortart: "Verb",
    "Link zum Bild": "pics/zeigen.png",
    Beispiel: "Er zeigt mit dem Finger auf den Baum. Kannst du mir den Weg zeigen?",
    "weitere Infos": "zeigte, hat gezeigt",
    Gruppe: 22
  },
  {
    Wort: "der Lehrer",
    Wortart: "Nomen",
    "Link zum Bild": "pics/lehrer.png",
    Beispiel: "Der Lehrer erklärt die Aufgabe. Wir haben einen neuen Lehrer bekommen.",
    "weitere Infos": "die Lehrer",
    Gruppe: 22
  },
  {
    Wort: "die Lehrerin",
    Wortart: "Nomen",
    "Link zum Bild": "pics/lehrerin.png",
    Beispiel: "Die Lehrerin ist sehr nett. Sie ist eine tolle Lehrerin.",
    "weitere Infos": "die Lehrerinnen",
    Gruppe: 22
  },
  {
    Wort: "trinken",
    Wortart: "Verb",
    "Link zum Bild": "pics/trinken.png",
    Beispiel: "Ich trinke gerne Wasser. Er hat den ganzen Saft getrunken.",
    "weitere Infos": "trank, hat getrunken",
    Gruppe: 22
  },
  {
    Wort: "freundlich",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/freundlich.png",
    Beispiel: "Die Verkäuferin war sehr freundlich. Er hat uns freundlich gegrüßt.",
    "weitere Infos": "unfreundlich",
    Gruppe: 22
  },
  {
    Wort: "fallen",
    Wortart: "Verb",
    "Link zum Bild": "pics/fallen.png",
    Beispiel: "Das Glas ist auf den Boden gefallen. Im Herbst fallen die Blätter.",
    "weitere Infos": "fiel, ist gefallen",
    Gruppe: 22
  },
  {
    Wort: "springen",
    Wortart: "Verb",
    "Link zum Bild": "pics/springen.png",
    Beispiel: "Er kann sehr hoch springen. Wir sind über den Zaun gesprungen.",
    "weitere Infos": "sprang, ist gesprungen",
    Gruppe: 22
  },
  {
    Wort: "müssen",
    Wortart: "Verb",
    "Link zum Bild": "pics/muessen.png",
    Beispiel: "Ich muss meine Hausaufgaben machen. Wir mussten lange warten.",
    "weitere Infos": "musste, hat gemusst (selten)",
    Gruppe: 23
  },
  {
    Wort: "sicher",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/sicher.png",
    Beispiel: "Bist du dir sicher? Er ist ein sicherer Fahrer.",
    "weitere Infos": "unsicher",
    Gruppe: 23
  },
  {
    Wort: "küssen",
    Wortart: "Verb",
    "Link zum Bild": "pics/kuessen.png",
    Beispiel: "Sie küsst ihr Baby. Er hat seine Mutter geküsst.",
    "weitere Infos": "küsste, hat geküsst",
    Gruppe: 23
  },
  {
    Wort: "reisen",
    Wortart: "Verb",
    "Link zum Bild": "pics/reisen.png",
    Beispiel: "Wir reisen gerne in ferne Länder. Er ist viel in Europa gereist.",
    "weitere Infos": "reiste, ist gereist",
    Gruppe: 23
  },
  {
    Wort: "empfangen",
    Wortart: "Verb",
    "Link zum Bild": "pics/empfangen.png",
    Beispiel: "Wir empfangen heute Gäste. Sie wurde freundlich empfangen.",
    "weitere Infos": "empfing, hat empfangen",
    Gruppe: 23
  },
  {
    Wort: "dazu",
    Wortart: "Adverb",
    "Link zum Bild": "pics/dazu.png",
    Beispiel: "Möchtest du noch etwas dazu sagen? Dazu fällt mir nichts mehr ein.",
    "weitere Infos": "",
    Gruppe: 23
  },
  {
    Wort: "der Affe",
    Wortart: "Nomen",
    "Link zum Bild": "pics/affe.png",
    Beispiel: "Im Zoo leben lustige Affen. Der Affe klettert schnell.",
    "weitere Infos": "die Affen",
    Gruppe: 23
  },
  {
    Wort: "der Tiger",
    Wortart: "Nomen",
    "Link zum Bild": "pics/tiger.png",
    Beispiel: "Der Tiger ist eine große Katze. Tiger leben im Dschungel.",
    "weitere Infos": "die Tiger",
    Gruppe: 23
  },
  {
    Wort: "die Menschen",
    Wortart: "Nomen",
    "Link zum Bild": "pics/menschen.png",
    Beispiel: "Auf der Straße sind viele Menschen. Alle Menschen sind gleich.",
    "weitere Infos": "der Mensch",
    Gruppe: 23
  },
  {
    Wort: "früher",
    Wortart: "Adverb",
    "Link zum Bild": "pics/frueher.png",
    Beispiel: "Früher habe ich in einer anderen Stadt gewohnt. Komm bitte früher.",
    "weitere Infos": "später",
    Gruppe: 23
  },
  {
    Wort: "fett",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/fett.png",
    Beispiel: "Die Wurst ist sehr fett. Der Fisch ist sehr fett.",
    "weitere Infos": "mager",
    Gruppe: 23
  },
  {
    Wort: "sportlich",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/sportlich.png",
    Beispiel: "Er ist sehr sportlich und spielt viel Fußball. Das ist eine sportliche Hose.",
    "weitere Infos": "unsportlich",
    Gruppe: 23
  },
  {
    Wort: "riesig",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/riesig.png",
    Beispiel: "Das Haus ist riesig. Wir hatten riesigen Spaß.",
    "weitere Infos": "winzig / klein",
    Gruppe: 23
  },
  {
    Wort: "der Schatz",
    Wortart: "Nomen",
    "Link zum Bild": "pics/schatz.png",
    Beispiel: "Der Pirat hat einen Schatz gefunden. Du bist mein größter Schatz.",
    "weitere Infos": "die Schätze",
    Gruppe: 23
  },
  {
    Wort: "das Rad",
    Wortart: "Nomen",
    "Link zum Bild": "pics/rad.png",
    Beispiel: "Ein Auto hat vier Räder. Wir fahren Rad.",
    "weitere Infos": "die Räder",
    Gruppe: 23
  },
  {
    Wort: "hell",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/hell.png",
    Beispiel: "Das Licht ist sehr hell. Die Farbe ist hellblau.",
    "weitere Infos": "dunkel",
    Gruppe: 23
  },
  {
    Wort: "gestern",
    Wortart: "Adverb",
    "Link zum Bild": "pics/gestern.png",
    Beispiel: "Gestern war ein schöner Tag. Er hat mich gestern angerufen.",
    "weitere Infos": "heute / morgen",
    Gruppe: 24
  },
  {
    Wort: "der Zeh",
    Wortart: "Nomen",
    "Link zum Bild": "pics/zeh.png",
    Beispiel: "Ich habe mir den Zeh gestoßen. Wir haben zehn Zehen an den Füßen.",
    "weitere Infos": "die Zehen",
    Gruppe: 24
  },
  {
    Wort: "wütend",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/wuetend.png",
    Beispiel: "Der Mann war sehr wütend. Sie hat wütend die Tür zugeschlagen.",
    "weitere Infos": "ruhig / freundlich",
    Gruppe: 24
  },
  {
    Wort: "der Wald",
    Wortart: "Nomen",
    "Link zum Bild": "pics/wald.png",
    Beispiel: "Wir machen einen Spaziergang durch den Wald. Der Wald ist groß und grün.",
    "weitere Infos": "die Wälder",
    Gruppe: 24
  },
  {
    Wort: "kein",
    Wortart: "Pronomen",
    "Link zum Bild": "pics/kein.png",
    Beispiel: "Ich habe kein Geld dabei. Er hat keine Zeit.",
    "weitere Infos": "",
    Gruppe: 24
  },
  {
    Wort: "das Hobby",
    Wortart: "Nomen",
    "Link zum Bild": "pics/hobby.png",
    Beispiel: "Mein Hobby ist Lesen. Er hat viele Hobbys.",
    "weitere Infos": "die Hobbys",
    Gruppe: 24
  },
  {
    Wort: "gesund",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/gesund.png",
    Beispiel: "Es ist wichtig, gesund zu essen. Ich bin wieder gesund.",
    "weitere Infos": "krank",
    Gruppe: 24
  },
  {
    Wort: "der Herr",
    Wortart: "Nomen",
    "Link zum Bild": "pics/herr.png",
    Beispiel: "Guten Tag, Herr Müller. Der Herr hat uns geholfen.",
    "weitere Infos": "die Herren",
    Gruppe: 24
  },
  {
    Wort: "die Frau",
    Wortart: "Nomen",
    "Link zum Bild": "pics/frau.png",
    Beispiel: "Guten Tag, Frau Schmidt. Die Frau ist sehr nett.",
    "weitere Infos": "die Frauen",
    Gruppe: 24
  },
  {
    Wort: "der Fluss",
    Wortart: "Nomen",
    "Link zum Bild": "pics/fluss.png",
    Beispiel: "Der Fluss fließt durch die Stadt. Wir schwimmen im Fluss.",
    "weitere Infos": "die Flüsse",
    Gruppe: 24
  },
  {
    Wort: "flüssig",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/fluessig.png",
    Beispiel: "Wasser ist flüssig. Das Wachs ist noch flüssig.",
    "weitere Infos": "fest",
    Gruppe: 24
  },
  {
    Wort: "die Haare",
    Wortart: "Nomen",
    "Link zum Bild": "pics/haare.png",
    Beispiel: "Sie hat lange schwarze Haare. Er kämmt seine Haare.",
    "weitere Infos": "das Haar",
    Gruppe: 24
  },
  {
    Wort: "kochen",
    Wortart: "Verb",
    "Link zum Bild": "pics/kochen.png",
    Beispiel: "Er kocht gerne Spaghetti. Ich habe heute Abend gekocht.",
    "weitere Infos": "kochte, hat gekocht",
    Gruppe: 24
  },
  {
    Wort: "das Geschäft",
    Wortart: "Nomen",
    "Link zum Bild": "pics/geschaeft.png",
    Beispiel: "Das Geschäft hat bis 18 Uhr geöffnet. Er führt ein kleines Geschäft.",
    "weitere Infos": "die Geschäfte",
    Gruppe: 24
  },
  {
    Wort: "kommen",
    Wortart: "Verb",
    "Link zum Bild": "pics/kommen.png",
    Beispiel: "Ich komme morgen zu dir. Sie ist gestern Abend nach Hause gekommen.",
    "weitere Infos": "kam, ist gekommen",
    Gruppe: 24
  },
  {
    Wort: "besonders",
    Wortart: "Adverb",
    "Link zum Bild": "pics/besonders.png",
    Beispiel: "Dieser Tag war besonders schön. Ich mag besonders die Schokolade.",
    "weitere Infos": "gewöhnlich",
    Gruppe: 24
  },
  {
    Wort: "andere",
    Wortart: "Pronomen",
    "Link zum Bild": "pics/andere.png",
    Beispiel: "Die anderen Kinder spielen draußen. Möchtest du eine andere Farbe?",
    "weitere Infos": "",
    Gruppe: 24
  },
  {
    Wort: "füttern",
    Wortart: "Verb",
    "Link zum Bild": "pics/fuettern.png",
    Beispiel: "Wir müssen die Katze füttern. Er hat die Vögel gefüttert.",
    "weitere Infos": "fütterte, hat gefüttert",
    Gruppe: 24
  },
  {
    Wort: "anders",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/anders.png",
    Beispiel: "Das ist ganz anders, als ich dachte. Er denkt anders als sie.",
    "weitere Infos": "gleich",
    Gruppe: 25
  },
  {
    Wort: "der Meter",
    Wortart: "Nomen",
    "Link zum Bild": "pics/meter.png",
    Beispiel: "Die Schnur ist drei Meter lang. Ein Meter sind hundert Zentimeter.",
    "weitere Infos": "die Meter",
    Gruppe: 25
  },
  {
    Wort: "putzen",
    Wortart: "Verb",
    "Link zum Bild": "pics/putzen.png",
    Beispiel: "Bitte putze deine Schuhe. Er putzt das Bad jede Woche.",
    "weitere Infos": "putzte, hat geputzt",
    Gruppe: 25
  },
  {
    Wort: "die Wahrheit",
    Wortart: "Nomen",
    "Link zum Bild": "pics/wahrheit.png",
    Beispiel: "Ich sage dir die Wahrheit. Die Wahrheit ist manchmal schmerzhaft.",
    "weitere Infos": "die Wahrheiten",
    Gruppe: 25
  },
  {
    Wort: "ein bisschen",
    Wortart: "Adverb",
    "Link zum Bild": "pics/ein_bisschen.png",
    Beispiel: "Ich bin nur ein bisschen müde. Er kann ein bisschen Französisch sprechen.",
    "weitere Infos": "viel",
    Gruppe: 25
  },
  {
    Wort: "häufig",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/haeufig.png",
    Beispiel: "Er besucht uns häufig. Das ist ein häufiger Fehler.",
    "weitere Infos": "selten",
    Gruppe: 25
  },
  {
    Wort: "der Frieden",
    Wortart: "Nomen",
    "Link zum Bild": "pics/frieden.png",
    Beispiel: "Alle wünschen sich Frieden auf der Welt. Möge Frieden herrschen.",
    "weitere Infos": "die Frieden (selten)",
    Gruppe: 25
  },
  {
    Wort: "der Krieg",
    Wortart: "Nomen",
    "Link zum Bild": "pics/krieg.png",
    Beispiel: "Der Krieg hat viel Leid gebracht. Alle hoffen auf ein Ende des Krieges.",
    "weitere Infos": "die Kriege",
    Gruppe: 25
  },
  {
    Wort: "lieb",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/lieb.png",
    Beispiel: "Sie ist ein sehr liebes Kind. Sei bitte lieb zu deiner Schwester.",
    "weitere Infos": "böse / gemein",
    Gruppe: 25
  },
  {
    Wort: "die Hoffnung",
    Wortart: "Nomen",
    "Link zum Bild": "pics/hoffnung.png",
    Beispiel: "Die Hoffnung stirbt zuletzt. Er hat die Hoffnung nicht aufgegeben.",
    "weitere Infos": "die Hoffnungen",
    Gruppe: 25
  },
  {
    Wort: "gefährlich",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/gefaehrlich.png",
    Beispiel: "Das ist ein gefährlicher Weg. Die Situation ist gefährlich.",
    "weitere Infos": "ungefährlich",
    Gruppe: 25
  },
  {
    Wort: "fleißig",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/fleissig.png",
    Beispiel: "Die fleißigen Schüler lernen viel. Er arbeitet sehr fleißig.",
    "weitere Infos": "faul",
    Gruppe: 25
  },
  {
    Wort: "schlank",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/schlank.png",
    Beispiel: "Sie ist sehr schlank. Er hat eine schlanke Figur.",
    "weitere Infos": "dick",
    Gruppe: 25
  },
  {
    Wort: "der Körper",
    Wortart: "Nomen",
    "Link zum Bild": "pics/koerper.png",
    Beispiel: "Der menschliche Körper ist komplex. Halte deinen Körper gesund.",
    "weitere Infos": "die Körper",
    Gruppe: 25
  },
  {
    Wort: "der Bauch",
    Wortart: "Nomen",
    "Link zum Bild": "pics/bauch.png",
    Beispiel: "Mir tut der Bauch weh. Er liegt auf dem Bauch.",
    "weitere Infos": "die Bäuche",
    Gruppe: 25
  },
  {
    Wort: "der Morgen",
    Wortart: "Nomen",
    "Link zum Bild": "pics/morgen.png",
    Beispiel: "Guten Morgen! Am Morgen scheint die Sonne.",
    "weitere Infos": "die Morgen",
    Gruppe: 25
  },
  {
    Wort: "morgens",
    Wortart: "Adverb",
    "Link zum Bild": "pics/morgens.png",
    Beispiel: "Morgens trinke ich Kaffee. Sie geht morgens joggen.",
    "weitere Infos": "abends",
    Gruppe: 25
  },
  {
    Wort: "am besten",
    Wortart: "Adverb",
    "Link zum Bild": "pics/am_besten.png",
    Beispiel: "Am besten gehen wir jetzt. Er kann am besten singen.",
    "weitere Infos": "am schlechtesten",
    Gruppe: 25
  },
  {
    Wort: "warten",
    Wortart: "Verb",
    "Link zum Bild": "pics/warten.png",
    Beispiel: "Ich muss noch auf den Bus warten. Sie hat lange gewartet.",
    "weitere Infos": "wartete, hat gewartet",
    Gruppe: 26
  },
  {
    Wort: "groß",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/gross.png",
    Beispiel: "Das Haus ist sehr groß. Ich bin 1,70 Meter groß.",
    "weitere Infos": "klein",
    Gruppe: 26
  },
  {
    Wort: "die Tante",
    Wortart: "Nomen",
    "Link zum Bild": "pics/tante.png",
    Beispiel: "Meine Tante kommt uns besuchen. Sie ist die Schwester meines Vaters.",
    "weitere Infos": "die Tanten",
    Gruppe: 26
  },
  {
    Wort: "bekannt",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/bekannt.png",
    Beispiel: "Dieser Maler ist sehr bekannt. Das ist eine bekannte Melodie.",
    "weitere Infos": "unbekannt",
    Gruppe: 26
  },
  {
    Wort: "damit",
    Wortart: "Konjunktion",
    "Link zum Bild": "pics/damit.png",
    Beispiel: "Er rennt, damit er den Bus noch erreicht. Nimm einen Schirm mit, damit du nicht nass wirst.",
    "weitere Infos": "",
    Gruppe: 26
  },
  {
    Wort: "schon",
    Wortart: "Adverb",
    "Link zum Bild": "pics/schon.png",
    Beispiel: "Bist du schon fertig? Ich war schon einmal dort.",
    "weitere Infos": "noch nicht",
    Gruppe: 26
  },
  {
    Wort: "genug",
    Wortart: "Adverb",
    "Link zum Bild": "pics/genug.png",
    Beispiel: "Das ist genug für mich. Hast du genug geschlafen?",
    "weitere Infos": "zu wenig",
    Gruppe: 26
  },
  {
    Wort: "nennen",
    Wortart: "Verb",
    "Link zum Bild": "pics/nennen.png",
    Beispiel: "Er nennt seinen Hund Bello. Sie hat ihren Namen nicht genannt.",
    "weitere Infos": "nannte, hat genannt",
    Gruppe: 26
  },
  {
    Wort: "verlieren",
    Wortart: "Verb",
    "Link zum Bild": "pics/verlieren.png",
    Beispiel: "Ich will das Spiel nicht verlieren. Er hat seinen Schlüssel verloren.",
    "weitere Infos": "verlor, hat verloren",
    Gruppe: 26
  },
  {
    Wort: "der Moment",
    Wortart: "Nomen",
    "Link zum Bild": "pics/moment.png",
    Beispiel: "Warte einen kurzen Moment. In diesem Moment wurde es still.",
    "weitere Infos": "die Momente",
    Gruppe: 26
  },
  {
    Wort: "geschehen",
    Wortart: "Verb",
    "Link zum Bild": "pics/geschehen.png",
    Beispiel: "Was ist hier geschehen? Das wird nie wieder geschehen.",
    "weitere Infos": "geschah, ist geschehen",
    Gruppe: 26
  },
  {
    Wort: "schwingen",
    Wortart: "Verb",
    "Link zum Bild": "pics/schwingen.png",
    Beispiel: "Er lässt das Seil schwingen. Sie hat sich in das Wasser geschwungen.",
    "weitere Infos": "schwang, hat/ist geschwungen",
    Gruppe: 26
  },
  {
    Wort: "mitmachen",
    Wortart: "Verb",
    "Link zum Bild": "pics/mitmachen.png",
    Beispiel: "Möchtest du bei unserem Spiel mitmachen? Alle haben gerne mitgemacht.",
    "weitere Infos": "machte mit, hat mitgemacht",
    Gruppe: 26
  },
  {
    Wort: "der Topf",
    Wortart: "Nomen",
    "Link zum Bild": "pics/topf_kochen.png",
    Beispiel: "Das Wasser kocht im Topf. Ich brauche einen größeren Topf.",
    "weitere Infos": "die Töpfe",
    Gruppe: 26
  },
  {
    Wort: "voran",
    Wortart: "Adverb",
    "Link zum Bild": "pics/voran.png",
    Beispiel: "Das Projekt kommt gut voran. Er geht voran.",
    "weitere Infos": "zurück",
    Gruppe: 26
  },
  {
    Wort: "fehlen",
    Wortart: "Verb",
    "Link zum Bild": "pics/fehlen.png",
    Beispiel: "Du fehlst mir sehr. Mir fehlt noch ein Stück vom Puzzle.",
    "weitere Infos": "fehlte, hat gefehlt",
    Gruppe: 26
  },
  {
    Wort: "bereits",
    Wortart: "Adverb",
    "Link zum Bild": "pics/bereits.png",
    Beispiel: "Ich habe die Aufgabe bereits erledigt. Es ist bereits spät.",
    "weitere Infos": "noch nicht",
    Gruppe: 26
  },
  {
    Wort: "spät",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/spaet.png",
    Beispiel: "Es ist schon sehr spät. Der Zug kommt spät an.",
    "weitere Infos": "früh",
    Gruppe: 26
  },
  {
    Wort: "die Küche",
    Wortart: "Nomen",
    "Link zum Bild": "pics/kueche.png",
    Beispiel: "Wir essen in der Küche. Die Küche ist neu und hell.",
    "weitere Infos": "die Küchen",
    Gruppe: 26
  },
  {
    Wort: "billig",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/billig.png",
    Beispiel: "Das T-Shirt war sehr billig. Ich habe etwas Billiges gesucht.",
    "weitere Infos": "teuer",
    Gruppe: 26
  },
  {
    Wort: "der Schüler",
    Wortart: "Nomen",
    "Link zum Bild": "pics/schueler.png",
    Beispiel: "Der Schüler lernt fleißig. Alle Schüler der Klasse sind da.",
    "weitere Infos": "die Schüler",
    Gruppe: 27
  },
  {
    Wort: "die Schülerin",
    Wortart: "Nomen",
    "Link zum Bild": "pics/schuelerin.png",
    Beispiel: "Die Schülerin hat die Hausaufgaben gemacht. Sie ist eine kluge Schülerin.",
    "weitere Infos": "die Schülerinnen",
    Gruppe: 27
  },
  {
    Wort: "reich",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/reich.png",
    Beispiel: "Er ist sehr reich geworden. Das Land ist reich an Bodenschätzen.",
    "weitere Infos": "arm",
    Gruppe: 27
  },
  {
    Wort: "aufhören",
    Wortart: "Verb",
    "Link zum Bild": "pics/aufhoeren.png",
    Beispiel: "Hör bitte auf zu reden. Er hat mit dem Rauchen aufgehört.",
    "weitere Infos": "hörte auf, hat aufgehört",
    Gruppe: 27
  },
  {
    Wort: "nachher",
    Wortart: "Adverb",
    "Link zum Bild": "pics/nachher.png",
    Beispiel: "Zuerst essen wir, nachher spielen wir. Er kommt nachher wieder.",
    "weitere Infos": "vorher",
    Gruppe: 27
  },
  {
    Wort: "die Bewegung",
    Wortart: "Nomen",
    "Link zum Bild": "pics/bewegung.png",
    Beispiel: "Ausreichend Bewegung ist wichtig. Das Auto war in Bewegung.",
    "weitere Infos": "die Bewegungen",
    Gruppe: 27
  },
  {
    Wort: "der Zentimeter",
    Wortart: "Nomen",
    "Link zum Bild": "pics/zentimeter.png",
    Beispiel: "Ein Zentimeter ist sehr kurz. Der Tisch ist 100 Zentimeter breit.",
    "weitere Infos": "die Zentimeter",
    Gruppe: 27
  },
  {
    Wort: "der Mut",
    Wortart: "Nomen",
    "Link zum Bild": "pics/mut.png",
    Beispiel: "Er hatte den Mut, das zu sagen. Zeige Mut!",
    "weitere Infos": "—",
    Gruppe: 27
  },
  {
    Wort: "der Nachbar",
    Wortart: "Nomen",
    "Link zum Bild": "pics/nachbar_2.png",
    Beispiel: "Unser Nachbar ist sehr hilfsbereit. Er grüßt seine Nachbarn.",
    "weitere Infos": "die Nachbarn",
    Gruppe: 27
  },
  {
    Wort: "starten",
    Wortart: "Verb",
    "Link zum Bild": "pics/starten.png",
    Beispiel: "Das Flugzeug wird gleich starten. Wir haben mit dem Projekt gestartet.",
    "weitere Infos": "startete, ist/hat gestartet",
    Gruppe: 27
  },
  {
    Wort: "der Computer",
    Wortart: "Nomen",
    "Link zum Bild": "pics/computer.png",
    Beispiel: "Der Computer ist sehr schnell. Ich arbeite am Computer.",
    "weitere Infos": "die Computer",
    Gruppe: 27
  },
  {
    Wort: "das Programm",
    Wortart: "Nomen",
    "Link zum Bild": "pics/programm.png",
    Beispiel: "Ich lade ein neues Programm herunter. Das Programm beginnt um acht Uhr.",
    "weitere Infos": "die Programme",
    Gruppe: 27
  },
  {
    Wort: "die Medien",
    Wortart: "Nomen",
    "Link zum Bild": "pics/medien.png",
    Beispiel: "Zeitungen und Fernsehen sind Medien. Die Medien berichten über das Ereignis.",
    "weitere Infos": "das Medium",
    Gruppe: 27
  },
  {
    Wort: "sofort",
    Wortart: "Adverb",
    "Link zum Bild": "pics/sofort.png",
    Beispiel: "Komm sofort zu mir! Ich muss das sofort erledigen.",
    "weitere Infos": "später",
    Gruppe: 27
  },
  {
    Wort: "kleben",
    Wortart: "Verb",
    "Link zum Bild": "pics/kleben.png",
    Beispiel: "Das Papier klebt am Tisch fest. Er klebt ein Bild ins Heft.",
    "weitere Infos": "klebte, hat geklebt",
    Gruppe: 27
  },
  {
    Wort: "die Tastatur",
    Wortart: "Nomen",
    "Link zum Bild": "pics/tastatur.png",
    Beispiel: "Ich schreibe auf der Tastatur. Die Tastatur ist schmutzig.",
    "weitere Infos": "die Tastaturen",
    Gruppe: 27
  },
  {
    Wort: "die Maus",
    Wortart: "Nomen",
    "Link zum Bild": "pics/maus.png",
    Beispiel: "Die Computermaus liegt neben der Tastatur. Die Maus bewegt den Cursor.",
    "weitere Infos": "die Mäuse",
    Gruppe: 27
  },
  {
    Wort: "knallen",
    Wortart: "Verb",
    "Link zum Bild": "pics/knallen.png",
    Beispiel: "Die Sektkorken knallen an Silvester. Der Wind lässt die Tür knallen.",
    "weitere Infos": "knallte, hat geknallt",
    Gruppe: 27
  },
  {
    Wort: "wahrscheinlich",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/wahrscheinlich.png",
    Beispiel: "Es ist wahrscheinlich, dass es regnet. Er kommt wahrscheinlich nicht.",
    "weitere Infos": "unwahrscheinlich",
    Gruppe: 27
  },
  {
    Wort: "schrecklich",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/schrecklich.png",
    Beispiel: "Das Wetter ist heute schrecklich. Ich hatte einen schrecklichen Traum.",
    "weitere Infos": "wundervoll / schön",
    Gruppe: 27
  },
  {
    Wort: "die Hitze",
    Wortart: "Nomen",
    "Link zum Bild": "pics/hitze.png",
    Beispiel: "Die Hitze im Sommer ist unerträglich. Suche Schutz vor der Hitze.",
    "weitere Infos": "die Hitzen (selten)",
    Gruppe: 28
  },
  {
    Wort: "die Sommerferien",
    Wortart: "Nomen",
    "Link zum Bild": "pics/sommerferien.png",
    Beispiel: "In den Sommerferien fahren wir ans Meer. Die Sommerferien sind sehr lang.",
    "weitere Infos": "—",
    Gruppe: 28
  },
  {
    Wort: "das Freibad",
    Wortart: "Nomen",
    "Link zum Bild": "pics/freibad.png",
    Beispiel: "Im Sommer gehen wir oft ins Freibad. Das Freibad ist gut besucht.",
    "weitere Infos": "die Freibäder",
    Gruppe: 28
  },
  {
    Wort: "der Badeanzug",
    Wortart: "Nomen",
    "Link zum Bild": "pics/badeanzug.png",
    Beispiel: "Sie zieht ihren Badeanzug an. Der Badeanzug ist neu.",
    "weitere Infos": "die Badeanzüge",
    Gruppe: 28
  },
  {
    Wort: "ähnlich",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/aehnlich.png",
    Beispiel: "Die beiden Brüder sehen sich sehr ähnlich. Das ist eine ähnliche Situation.",
    "weitere Infos": "ungleich / verschieden",
    Gruppe: 28
  },
  {
    Wort: "der Urlaub",
    Wortart: "Nomen",
    "Link zum Bild": "pics/urlaub.png",
    Beispiel: "Wir fahren in den Urlaub in die Berge. Ich brauche dringend Urlaub.",
    "weitere Infos": "die Urlaube",
    Gruppe: 28
  },
  {
    Wort: "die Sonne",
    Wortart: "Nomen",
    "Link zum Bild": "pics/sonne.png",
    Beispiel: "Die Sonne scheint heute hell. Die Sonne ist ein Stern.",
    "weitere Infos": "die Sonnen",
    Gruppe: 28
  },
  {
    Wort: "das Wasser",
    Wortart: "Nomen",
    "Link zum Bild": "pics/wasser.png",
    Beispiel: "Bitte trinke viel Wasser. Das Wasser im See ist kalt.",
    "weitere Infos": "die Wasser (selten)",
    Gruppe: 28
  },
  {
    Wort: "scheinen",
    Wortart: "Verb",
    "Link zum Bild": "pics/scheinen.png",
    Beispiel: "Die Sonne beginnt zu scheinen. Es hat den ganzen Tag geschienen.",
    "weitere Infos": "schien, hat geschienen",
    Gruppe: 28
  },
  {
    Wort: "spritzen",
    Wortart: "Verb",
    "Link zum Bild": "pics/spritzen.png",
    Beispiel: "Die Kinder spritzen sich mit Wasser nass. Er hat sich mit Farbe bespritzt.",
    "weitere Infos": "spritzte, hat gespritzt",
    Gruppe: 28
  },
  {
    Wort: "das Handtuch",
    Wortart: "Nomen",
    "Link zum Bild": "pics/handtuch.png",
    Beispiel: "Nimm dein Handtuch mit ins Freibad. Ich trockne mich mit dem Handtuch ab.",
    "weitere Infos": "die Handtücher",
    Gruppe: 28
  },
  {
    Wort: "die Vorfreude",
    Wortart: "Nomen",
    "Link zum Bild": "pics/vorfreude.png",
    Beispiel: "Die Vorfreude auf den Urlaub ist groß. Ich spüre eine leichte Vorfreude.",
    "weitere Infos": "—",
    Gruppe: 28
  },
  {
    Wort: "schwitzen",
    Wortart: "Verb",
    "Link zum Bild": "pics/schwitzen.png",
    Beispiel: "Mir ist so heiß, ich schwitze. Er hat beim Sport geschwitzt.",
    "weitere Infos": "schwitzte, hat geschwitzt",
    Gruppe: 28
  },
  {
    Wort: "glücklich",
    Wortart: "Adjektiv",
    "Link zum Bild": "pics/gluecklich.png",
    Beispiel: "Sie sieht sehr glücklich aus. Ich bin glücklich, dich zu sehen.",
    "weitere Infos": "unglücklich",
    Gruppe: 28
  },
  {
    Wort: "chillen",
    Wortart: "Verb",
    "Link zum Bild": "pics/chillen.png",
    Beispiel: "Nach der Arbeit will ich nur noch chillen. Er hat den ganzen Tag gechillt.",
    "weitere Infos": "chillte, hat gechillt",
    Gruppe: 28
  },
  {
    Wort: "die Wiese",
    Wortart: "Nomen",
    "Link zum Bild": "pics/wiese.png",
    Beispiel: "Auf der Wiese stehen Blumen. Die Kühe grasen auf der Wiese.",
    "weitere Infos": "die Wiesen",
    Gruppe: 28
  },
  {
    Wort: "ausruhen",
    Wortart: "Verb",
    "Link zum Bild": "pics/ausruhen.png",
    Beispiel: "Ich muss mich erst einmal ausruhen. Sie hat sich im Schatten ausgeruht.",
    "weitere Infos": "ruhte aus, hat ausgeruht",
    Gruppe: 28
  },
  {
    Wort: "der Bikini",
    Wortart: "Nomen",
    "Link zum Bild": "pics/bikini.png",
    Beispiel: "Sie trägt einen neuen Bikini. Der Bikini ist gelb.",
    "weitere Infos": "die Bikinis",
    Gruppe: 28
  },
  {
    Wort: "die Badehose",
    Wortart: "Nomen",
    "Link zum Bild": "pics/badehose.png",
    Beispiel: "Er hat seine Badehose vergessen. Die Badehose ist blau.",
    "weitere Infos": "die Badehosen",
    Gruppe: 28
  },
  {
    Wort: "erinnern",
    Wortart: "Verb",
    "Link zum Bild": "pics/erinnern.png",
    Beispiel: "Ich kann mich nicht daran erinnern. Er erinnert sich gut an den Urlaub.",
    "weitere Infos": "erinnerte, hat erinnert",
    Gruppe: 28
  }
  
  
  
];