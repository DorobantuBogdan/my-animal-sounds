My Animal Sounds 

Acest proiect este o aplicație de consolă scrisă în **TypeScript** care demonstrează principiile programării orientate pe obiect (OOP) prin simularea sunetelor produse de animale.


Structura proiectului

my-animal-sounds/
src/              # Codul TypeScript
-Animal.ts
-Lion.ts
-Elephant.ts
-Wolf.ts
-main.ts
dist/             # Codul JavaScript
─tsconfig.json     # Configurația TypeScript
─package.json
README.md


Cum rulezi aplicația

1.Instalează TypeScript în proiect: npm install typescript --save-dev

2.Compilează codul TypeScript: npx tsc


3.Rulează aplicația: node dist/main.js


Aplicatia definește o clasă abstractă `Animal` și 3 clase concrete:
- `Lion` → "Roar"
- `Elephant` → "Trumpet"
- `Wolf` → "Howl"

În `main.ts` sunt create instanțe din aceste clase și se afișează rezultatul în consolă:

Lion makes sound: Roar
Elephant makes sound: Trumpet
Wolf makes sound: Howl

Tehnologii folosite
- TypeScript
- Node.js
- Programare orientată pe obiect (OOP)
