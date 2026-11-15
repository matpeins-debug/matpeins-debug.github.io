/* Spiele der Reihe Cold Medal Games: eine Liste für die Startseite (start/, https://matpeins-debug.github.io/) und künftig
 * für die Leiste „Mehr Spiele“ in jedem Spiel. Ein neues Spiel hier eintragen: Ordner (id), Name, Pfad unter matpeins-debug.github.io,
 * ein Satz wie auf seinem Startbild, Bild für die Startseite (start/bilder/<id>.jpg, 1200 × 630), ob es Gruppen mit Link gibt.
 * Ohne Pfad gilt ein Spiel als „bald“. Global: CMSpiele (Version 1), ohne Abhängigkeiten. */
(function (root) {
  "use strict";
  const HOST = "https://matpeins-debug.github.io";
  const LISTE = [
    { id: "skispringen", name: "Skispringen", pfad: "/TELEMARK/", satz: "Fliegen auf dem Luftpolster. Spring gegen deine Freunde.", gruppen: true },
    { id: "biathlon", name: "Biathlon", pfad: "/cold-medal-biathlon/", satz: "Im Takt laufen, am Stand ruhig werden.", gruppen: true },
    { id: "eiskunstlauf", name: "Eiskunstlauf", pfad: "/cold-medal-eiskunstlauf/", satz: "Deine Kür zum Donauwalzer.", gruppen: true },
    { id: "schneeball", name: "Schneeball", pfad: "/cold-medal-schneeball/", satz: "Schnee lesen und so weit werfen wie keiner im Dorf.", gruppen: false },
    { id: "big-air", name: "Big Air", pfad: "/big-air/", satz: "Anlauf, Absprung, Trick und Landung auf der großen Schanze.", gruppen: false },
    { id: "ski-cross", name: "Ski Cross", pfad: "/ski-cross/", satz: "Vier am Start, zwei kommen weiter: Wellen, Kurven, Zweikämpfe.", gruppen: false },
    { id: "eisschnelllauf", name: "Eisschnelllauf", pfad: "/eisschnelllauf/", satz: "Im Takt über das Oval: Kurven drücken, Kraft einteilen.", gruppen: false },
    { id: "eisstock", name: "Eisstock", pfad: "/eisstock/", satz: "Stock um Stock an die Daube: Maß nehmen oder wegschießen.", gruppen: false },
    { id: "hoernerschlitten", name: "Hörnerschlitten", pfad: "/hoernerschlitten/", satz: "Mit dem Heuschlitten ins Tal: lenken, bremsen, nicht kippen.", gruppen: false },
    { id: "nordische-kombination", name: "Nordische Kombination", pfad: "/nordische-kombination/", satz: "Erst springen, dann laufen: Wer zuerst im Ziel ist, gewinnt.", gruppen: false },
    { id: "skibergsteigen", name: "Skibergsteigen", pfad: "/skibergsteigen/", satz: "Aufsteigen, tragen, abfellen, abfahren: der Sprint am Berg.", gruppen: false },
    { id: "wintermehrkampf", name: "Wintermehrkampf", pfad: "/wintermehrkampf/", satz: "Fünf Spiele, eine Wertung.", gruppen: false },
    { id: "schuetzenfest", name: "Schützenfest", pfad: "/schuetzenfest/", satz: "Ruhige Hand am Schießstand: Atem, Zug, Treffer.", gruppen: false },
    { id: "penaltyschiessen", name: "Penaltyschießen", pfad: "/penaltyschiessen/", satz: "Eins gegen eins auf dem Eis: antäuschen, schießen, halten.", gruppen: false },
    { id: "halfpipe", name: "Halfpipe", pfad: "/halfpipe/", satz: "Acht Sprünge über der Kante: abspringen, drehen, landen.", gruppen: false },
  ];
  const live = () => LISTE.filter((s) => s.pfad);
  root.CMSpiele = {
    v: 1,
    host: HOST,
    start: HOST + "/",
    liste: LISTE,
    live,
    bald: () => LISTE.filter((s) => !s.pfad),
    url: (s) => HOST + s.pfad,
    // die anderen spielbaren Spiele (für „Mehr Spiele“ im Spiel mit dieser id)
    andere: (id) => live().filter((s) => s.id !== id),
  };
})(typeof window !== "undefined" ? window : globalThis);
