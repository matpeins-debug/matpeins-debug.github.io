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
    { id: "big-air", name: "Big Air" },
    { id: "ski-cross", name: "Ski Cross" },
    { id: "eisschnelllauf", name: "Eisschnelllauf" },
    { id: "eisstock", name: "Eisstock" },
    { id: "hoernerschlitten", name: "Hörnerschlitten" },
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
