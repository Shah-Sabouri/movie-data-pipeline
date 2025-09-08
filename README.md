# 🎬 Movie Data Pipeline

Detta är ett individuellt veckoprojekt på år 2 av **Fullstack Open Source-programmet** vid *Chas Academy*.  
Projektet är skrivet i **JavaScript** och demonstrerar hur man kan använda **functional programming** för att bearbeta filmdata, beräkna statistik och skapa rekommendationer.  

Projektet innehåller rena funktioner, pipelines (`pipe`/`compose`) och hårdkodad exempeldata.

---

## 🚀 Funktionalitet

- **calculateAverage(ratings)** – Beräknar medelbetyg för en lista av betyg  
- **addAverageRating(movie)** – Lägger till `averageRating` till ett filmobjekt utan att mutera originalet  
- **filterByGenre(genre, movies)** – Filtrerar filmer efter genre  
- **filterByYear(minYear, movies)** – Filtrerar filmer efter ett visst årtal  
- **sortByRating(movies)** – Sorterar filmer baserat på genomsnittligt betyg (högst först)  
- **pipe(...functions)** – Kör funktioner i sekvens (vänster → höger)  
- **compose(...functions)** – Kör funktioner i sekvens (höger → vänster)  

---

## 📂 Projektstruktur
```bash
movie-data-pipeline/
│── index.js # Huvudfilen som kör pipelinen
│── movies.js # Exempeldata (filmer)
│── package.json # Projektets metadata och scripts
│── .gitignore # Ignorerar node_modules m.m.
```

---

## ▶️ Kör projektet

1. Klona repot:
```bash
git clone https://github.com/<ditt-användarnamn>/movie-data-pipeline.git
cd movie-data-pipeline
```

2. Installera dependencies (just nu inga externa, men skapar node_modules):
```bash
npm install
```

3. Kör koden:
```bash
npm start
```

---

## 🧩 Exempel på output
```bash
Resultat: [
    { id: 1, title: 'Inception', genre: 'Sci-Fi', year: 2010, averageRating: 8.2, ratings: [9,8,9,7,8] },
    { id: 4, title: 'Avatar', genre: 'Sci-Fi', year: 2009, averageRating: 7.8, ratings: [8,7,8,9,7] }
]
```
---

## 📚 Om uppgiften
- Detta repo är en lösning på skoluppgiften "Data pipeline" där kraven var att:
- Bygga ett system som använder functional programming
- Bearbeta filmdata och skapa statistik
- Filtrera, beräkna genomsnitt och rekommendera filmer utan att förändra originaldata

## 🛠️ Teknik
- JavaScript (Node.js)
- Functional programming (pure functions, immutability, higher-order functions)

## ✨ Vidare utveckling
- Läsa in data från en JSON-fil eller API
- Lägga till fler filter (t.ex. efter regissör eller längd)
- Bygga ett enkelt CLI eller frontend som visar resultaten

---