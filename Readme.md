# Űrlap MVC - vel 

A cél egy olyan űrlapkezelő alkalmazás létrehozása, mely képes tetszőleges szerkezetű űrlap létrehozására és validálására, valamitn az űrlapadatok összegyűjtésére, és továbbküldésére. 

A commitok a készítés folyamatát mutatják. 
## 1. Egyszerű űrlap létrehozása MVC szerkezettel

### UrlapView

Létrehozása a szokásos módon történik.
A konstruktor megkapja példányosításkor  a szülőelemet. 
1.  A szülőelembe elhelyezzük  a form tag-et. 
2.  Készítünk egy hivatkozást a FORM taghez. Győződjünk meg róla, hogy a html-ben valóban megjelenik a jó helyena form tag! Irassuk ki a konzolra a this.formElem értékét. A FORM html tag-et kell kapnunk eredményül. 
3.  Hívjuk meg a htmlOsszeallit metódust, melynek feladata a form html szerkezetének létrehozása. 
Minden egyes formelem külön div-ben helyezkedik el, egy div tartalmaz egy label elemet és egy input elemet. (Bootstrap 5 osztályokkal)
Fontos, hogy a label for tagje és az input elem id és name attributumának értéke egyezzen meg. 
4. Utoljára adjunk egy submit gombot is a formhoz. Ezzel fogjuk elküldeni a beviteli mezőkben rögzített adatokat. 
5. Az összeállított html-t adjuk hozzá az form taghez. 
A Böngészőben láthatjuk a kész űrlapunkat, alján egy submit gombbal. 

### Submit gomb működése

Lépések: 
1. Létrehozom a gombhoz a "kapaszkodót"
2. Hozzárendelem az eseményt
3. Ebben az eseményben összegyűjtöm a form adatait
4. és felküldöm au UrlapController-nek

### Hogy kapjuk meg az UrlapControllerben az űrlap adatait? 

Saját esemény létrehozása 
A saját eseményünk neve ujAdatHozzaAdasa lesz. Akkor fog kiváltódni, amikor rákattintunk a submit gombra és összegyűjtöttük az adatokat az űrlapról. 

Az esemény átad egy objektumot, melynek a detail kulcsa tartalmazza azokat az információkat, melyet át akarunk adni az eseményyel. Jelen esetben az a formról összegyűjtött adatok lesznek. 

Hívjuk meg a triggert a submit gomb kattintás eseménykezelőjében, a formadatok összegyűjtése UTÁN.
Ezután az UrlapControllerben feliratkozhatunk a sajáteseményre. 

## Űrlapelemek létrehozása az adatLeiras objektum segítségével. 

Hozzunk létre ehhez egy új fájlt, ami tartalmazni fogja az űrlapmezők leírását. 

Ezután az UrlapView-ban importáljuk be ide az adatLeiras objektumunkat, és a htmlOsszeallit metódust módosítsuk úgy, hoyg egy ciklussal menjünk végig az adaleiras objektumon. 

## Minden form elem típusnak saját osztályt hozunk létre!

1. Ezek az osztályok hozzák létre az adott elemi űrlap elem típust. 
2. Ki tudják olvasni az elem értékét
3. Ellenőrzik az adatok validitását. 





