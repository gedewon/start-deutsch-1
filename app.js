window.D = {};
/* HÖREN — exam format: Teil 1 short dialogues (MC a/b/c, heard twice),
   Teil 2 loudspeaker announcements (richtig/falsch, heard ONCE),
   Teil 3 phone messages (MC a/b/c, heard twice). 4 sets each. */
D.hoeren = {
t1: [
 [ // set 1
  {q:'Was kauft die Frau?', o:['Äpfel','Bananen','Tomaten'], a:2, s:[
   ['m','Guten Tag, was möchten Sie?'],['f','Ein Kilo Äpfel, bitte.'],['m','Tut mir leid, Äpfel haben wir heute nicht.'],['f','Hm, dann nehme ich ein Kilo Tomaten. Bananen habe ich noch zu Hause.']]},
  {q:'Wie viel kostet die Jacke?', o:['39 Euro','49 Euro','59 Euro'], a:1, s:[
   ['f','Entschuldigung, wie viel kostet die Jacke hier?'],['m','Die blaue Jacke? Die kostet 59 Euro.'],['f','Nein, die grüne.'],['m','Ach so, die grüne kostet nur 49 Euro. Sie ist im Angebot.']]},
  {q:'Wohin geht der Mann?', o:['Zum Bahnhof','Zur Post','Zur Bank'], a:1, s:[
   ['m','Entschuldigung, wo ist hier die Post?'],['f','Die Post? Gehen Sie geradeaus und dann links. Sie ist neben der Bank.'],['m','Danke! Und ist der Bahnhof auch in der Nähe?'],['f','Nein, der Bahnhof ist weit.'],['m','Kein Problem, ich muss nur zur Post.']]},
  {q:'Wann ist der Termin beim Arzt?', o:['Am Montag','Am Mittwoch','Am Freitag'], a:2, s:[
   ['f','Praxis Doktor Berg, guten Tag.'],['m','Guten Tag, ich brauche einen Termin. Geht es am Montag?'],['f','Am Montag ist leider alles voll. Am Mittwoch auch. Am Freitag um zehn Uhr geht es.'],['m','Gut, dann am Freitag.']]},
  {q:'Wie fährt die Frau heute zur Arbeit?', o:['Mit dem Bus','Mit dem Fahrrad','Mit dem Auto'], a:1, s:[
   ['m','Fährst du heute mit dem Auto zur Arbeit?'],['f','Nein, das Auto ist kaputt. Normalerweise nehme ich dann den Bus. Aber heute ist das Wetter so schön. Ich fahre mit dem Fahrrad.']]},
  {q:'Welche Telefonnummer hat Herr Klein?', o:['34 56 21','34 65 21','43 56 12'], a:0, s:[
   ['f','Wie ist die Telefonnummer von Herrn Klein?'],['m','Moment … vierunddreißig, sechsundfünfzig, einundzwanzig.'],['f','Vierunddreißig, sechsundfünfzig, einundzwanzig?'],['m','Ja, richtig.']]}
 ],
 [ // set 2
  {q:'Was trinkt der Mann?', o:['Kaffee','Tee','Wasser'], a:1, s:[
   ['f','Möchtest du einen Kaffee?'],['m','Nein danke, am Abend trinke ich keinen Kaffee. Hast du Tee?'],['f','Ja, Pfefferminztee.'],['m','Super, gern.']]},
  {q:'Wie spät ist es?', o:['Viertel nach acht','Halb neun','Viertel vor neun'], a:2, s:[
   ['m','Entschuldigung, wie spät ist es?'],['f','Es ist Viertel vor neun.'],['m','Oh, schon so spät! Mein Zug fährt um neun.']]},
  {q:'Wo ist die Toilette?', o:['Im ersten Stock','Im Erdgeschoss','Im zweiten Stock'], a:0, s:[
   ['f','Entschuldigung, wo sind hier die Toiletten?'],['m','Im Erdgeschoss sind sie leider kaputt. Gehen Sie bitte in den ersten Stock, gleich rechts.']]},
  {q:'Was macht die Frau am Wochenende?', o:['Sie besucht ihre Eltern.','Sie geht ins Kino.','Sie arbeitet.'], a:0, s:[
   ['m','Kommst du am Samstag mit ins Kino?'],['f','Am Samstag kann ich leider nicht. Ich fahre zu meinen Eltern nach Hamburg.'],['m','Und am Sonntag?'],['f','Da bin ich auch noch bei meinen Eltern.']]},
  {q:'Wie viele Personen kommen zur Party?', o:['8','12','15'], a:1, s:[
   ['f','Wie viele Leute kommen zu deiner Party?'],['m','Ich habe fünfzehn Leute eingeladen. Aber drei können nicht kommen.'],['f','Also zwölf. Dann brauchen wir viel Pizza!']]},
  {q:'Welche Größe nimmt der Mann?', o:['40','42','44'], a:2, s:[
   ['m','Haben Sie diese Hose in Größe 42?'],['f','Moment … Nein, in 42 leider nicht. Nur in 40 und 44.'],['m','40 ist zu klein. Dann nehme ich 44.']]}
 ],
 [ // set 3
  {q:'Wann fährt der nächste Bus?', o:['Um 7.15 Uhr','Um 7.30 Uhr','Um 7.45 Uhr'], a:2, s:[
   ['m','Wann fährt der nächste Bus zum Flughafen?'],['f','Der Bus um 7 Uhr 15 ist schon weg. Der nächste fährt um 7 Uhr 45.'],['m','Danke schön.'],['f','Bitte.']]},
  {q:'Was isst die Frau?', o:['Fisch','Salat','Suppe'], a:0, s:[
   ['m','Was nimmst du? Die Suppe ist hier sehr gut.'],['f','Suppe esse ich nicht so gern. Ich nehme den Fisch mit Kartoffeln.'],['m','Und ich nehme einen Salat.']]},
  {q:'Wo wohnt Anna jetzt?', o:['In Berlin','In München','In Köln'], a:1, s:[
   ['f','Weißt du, Anna wohnt nicht mehr in Berlin.'],['m','Nein? Wo denn? In Köln bei ihrer Schwester?'],['f','Nein, sie hat jetzt eine Wohnung in München. Sie hat dort eine neue Arbeit.']]},
  {q:'Wie ist das Wetter morgen?', o:['Es regnet.','Es ist sonnig.','Es schneit.'], a:0, s:[
   ['m','Gehen wir morgen schwimmen? Heute ist es so schön.'],['f','Morgen? Nein, morgen regnet es den ganzen Tag. Vielleicht am Samstag.'],['m','Schade.']]},
  {q:'Welches Zimmer hat Frau Müller?', o:['Zimmer 214','Zimmer 241','Zimmer 412'], a:1, s:[
   ['m','Guten Abend. Ihr Name, bitte?'],['f','Müller. Ich habe ein Einzelzimmer reserviert.'],['m','Ja, Frau Müller. Sie haben Zimmer zweihunderteinundvierzig im zweiten Stock. Hier ist Ihr Schlüssel.']]},
  {q:'Was hat der Mann nicht dabei?', o:['Seinen Schlüssel','Sein Handy','Seine Tasche'], a:1, s:[
   ['f','Hast du alles? Schlüssel, Tasche …?'],['m','Den Schlüssel habe ich. Die Tasche auch. Oh nein, wo ist mein Handy? Es liegt noch zu Hause auf dem Tisch!']]}
 ],
 [ // set 4
  {q:'Wie viel kosten die Brötchen?', o:['1,20 Euro','2,10 Euro','2,40 Euro'], a:2, s:[
   ['f','Sechs Brötchen, bitte.'],['m','Gern. Möchten Sie noch etwas?'],['f','Nein, danke. Was macht das?'],['m','Das macht zwei Euro vierzig.']]},
  {q:'Wohin fährt die Familie im Sommer?', o:['Ans Meer','In die Berge','Nach Italien'], a:0, s:[
   ['m','Fahrt ihr im Sommer wieder nach Italien?'],['f','Nein, dieses Jahr nicht. Die Kinder möchten ans Meer. Wir fahren an die Ostsee.'],['m','Toll!']]},
  {q:'Was ist der Mann von Beruf?', o:['Lehrer','Koch','Arzt'], a:1, s:[
   ['f','Was machen Sie beruflich?'],['m','Ich bin Koch. Ich arbeite in einem Restaurant am Bahnhof.'],['f','Oh, interessant! Mein Bruder ist auch Koch. Ich bin Lehrerin.']]},
  {q:'Wann hat Peter Geburtstag?', o:['Am 3. Mai','Am 13. Mai','Am 30. Mai'], a:1, s:[
   ['f','Wann hat Peter Geburtstag? Im Mai, oder?'],['m','Ja, am dreizehnten Mai.'],['f','Am dritten?'],['m','Nein, am dreizehnten.']]},
  {q:'Wo treffen sich die beiden?', o:['Vor dem Kino','Im Café','Am Bahnhof'], a:1, s:[
   ['m','Treffen wir uns vor dem Kino?'],['f','Es ist so kalt. Treffen wir uns lieber im Café neben dem Kino.'],['m','Okay, um sieben im Café.']]},
  {q:'Wie viele Zimmer hat die Wohnung?', o:['2 Zimmer','3 Zimmer','4 Zimmer'], a:1, s:[
   ['f','Wie groß ist deine neue Wohnung?'],['m','75 Quadratmeter. Sie hat drei Zimmer, eine Küche, ein Bad und einen Balkon.'],['f','Schön!'],['m','Ja, und sie ist nicht so teuer.']]}
 ]
],
t2: [
 [
  {t:'Achtung, Fahrgäste nach Frankfurt! Der Intercity nach Frankfurt, Abfahrt 10 Uhr 20, fährt heute nicht von Gleis 4, sondern von Gleis 7. Ich wiederhole: Der Zug nach Frankfurt fährt heute von Gleis 7.', st:'Der Zug nach Frankfurt fährt heute von Gleis 4.', a:false},
  {t:'Liebe Kundinnen und Kunden, heute haben wir ein besonderes Angebot für Sie: Alle Getränke im Erdgeschoss kosten heute zwanzig Prozent weniger. Das Angebot gibt es nur bis 18 Uhr.', st:'Getränke sind heute billiger.', a:true},
  {t:'Der kleine Max sucht seine Mutter. Max ist fünf Jahre alt und trägt eine rote Jacke. Frau Becker, bitte kommen Sie zur Information im ersten Stock. Ihr Sohn wartet dort auf Sie.', st:'Max wartet im Erdgeschoss.', a:false},
  {t:'Sehr geehrte Fluggäste, der Flug LH 345 nach Wien hat leider eine Stunde Verspätung. Die neue Abflugzeit ist 15 Uhr 30. Bitte warten Sie am Gate B 12.', st:'Das Flugzeug nach Wien fliegt um 15.30 Uhr.', a:true}
 ],
 [
  {t:'Nächste Haltestelle: Rathaus. Hier können Sie in die Buslinien 12 und 15 umsteigen. Fahrgäste zum Stadtmuseum steigen bitte hier aus.', st:'Zum Museum muss man an der Haltestelle Rathaus aussteigen.', a:true},
  {t:'Achtung bitte! Unser Supermarkt schließt in zehn Minuten. Bitte bringen Sie Ihre Einkäufe jetzt zur Kasse. Vielen Dank für Ihren Einkauf und einen schönen Abend.', st:'Der Supermarkt schließt in einer Stunde.', a:false},
  {t:'Information für alle Fahrgäste: Die U-Bahn-Linie 3 fährt heute wegen Bauarbeiten nur bis zum Hauptbahnhof. Von dort fahren Busse weiter zum Zoo.', st:'Die U-Bahn fährt heute bis zum Zoo.', a:false},
  {t:'Herzlich willkommen im Kaufhaus Schmidt. In unserer Sportabteilung im dritten Stock finden Sie diese Woche Sportschuhe zum halben Preis.', st:'Die Sportschuhe sind im dritten Stock.', a:true}
 ],
 [
  {t:'Liebe Reisende, der Regionalexpress nach Köln, Abfahrt 8 Uhr 12, hat heute etwa zehn Minuten Verspätung. Wir bitten um Entschuldigung.', st:'Der Zug nach Köln kommt zu spät.', a:true},
  {t:'Achtung, eine wichtige Information: Unser Schwimmbad ist heute wegen einer Reparatur geschlossen. Ab morgen sind wir wieder ab 7 Uhr für Sie da.', st:'Das Schwimmbad ist heute geöffnet.', a:false},
  {t:'Der Fahrer des grauen Autos mit der Nummer M – K L 482 kommt bitte sofort zum Parkplatz. Ihr Auto steht vor der Ausfahrt.', st:'Der Fahrer soll zum Eingang kommen.', a:false},
  {t:'Liebe Gäste, das Frühstück gibt es heute im Restaurant im Erdgeschoss von 6 Uhr 30 bis 10 Uhr. Am Wochenende gibt es Frühstück bis 11 Uhr.', st:'Am Samstag kann man bis 11 Uhr frühstücken.', a:true}
 ],
 [
  {t:'Liebe Kunden, Kasse 3 ist jetzt geöffnet. Bitte kommen Sie zu Kasse 3. Dort müssen Sie nicht warten.', st:'Kasse 3 ist jetzt offen.', a:true},
  {t:'Achtung an Gleis 2: Der Zug nach München hält heute nicht in Augsburg. Fahrgäste nach Augsburg nehmen bitte den Zug um 14 Uhr 05 von Gleis 5.', st:'Der Zug nach München hält heute in Augsburg.', a:false},
  {t:'Hier ist die Stadtbibliothek. Wir schließen heute schon um 16 Uhr. Bitte geben Sie Ihre Bücher bis 15 Uhr 45 an der Information ab.', st:'Die Bibliothek ist heute bis 18 Uhr geöffnet.', a:false},
  {t:'Sehr geehrte Fahrgäste, bitte achten Sie auf Ihre Taschen. Heute sind sehr viele Menschen im Bahnhof. Bei Fragen hilft Ihnen gern unser Personal an der Information.', st:'Man soll gut auf seine Taschen aufpassen.', a:true}
 ]
],
t3: [
 [
  {t:'Hallo Lisa, hier ist Tom. Wir gehen doch heute Abend ins Kino. Der Film beginnt um acht. Treffen wir uns um halb acht vor dem Kino? Ruf mich bitte an. Tschüss!', q:'Wann treffen sich Lisa und Tom?', o:['Um 19.30 Uhr','Um 20 Uhr','Um 20.30 Uhr'], a:0},
  {t:'Guten Tag, Frau Schneider. Hier ist die Praxis Doktor Wolf. Sie haben morgen um 9 Uhr einen Termin. Leider ist Doktor Wolf morgen krank. Können Sie am Donnerstag um 11 Uhr kommen? Bitte rufen Sie uns an. Danke.', q:'Wann ist der neue Termin?', o:['Morgen um 9 Uhr','Donnerstag um 9 Uhr','Donnerstag um 11 Uhr'], a:2},
  {t:'Hallo Papa, ich bin\'s, Julia. Ich bin noch in der Schule. Wir haben heute länger Unterricht. Kannst du mich um 16 Uhr abholen? Nicht am Eingang, ich warte am Sportplatz. Bis später!', q:'Wo wartet Julia?', o:['Am Eingang','Am Sportplatz','Im Klassenzimmer'], a:1},
  {t:'Guten Tag, hier ist das Möbelhaus Krone. Ihr neues Sofa ist da. Wir bringen es am Samstag zwischen 10 und 12 Uhr. Ist das okay für Sie? Bitte rufen Sie uns kurz an.', q:'Was bringt das Möbelhaus am Samstag?', o:['Ein Sofa','Einen Tisch','Ein Bett'], a:0},
  {t:'Hallo Markus, hier ist Sara. Ich koche heute Abend für unsere Freunde. Kannst du bitte noch Brot und Wein mitbringen? Käse und Obst habe ich schon. Danke dir!', q:'Was soll Markus mitbringen?', o:['Käse und Obst','Brot und Wein','Wein und Käse'], a:1}
 ],
 [
  {t:'Hallo, hier spricht Herr Wagner von der Sprachschule. Ihr Deutschkurs beginnt nicht am Montag, sondern am Dienstag, den vierten März. Der Kurs ist im Raum 12. Auf Wiederhören.', q:'Wann beginnt der Kurs?', o:['Am Montag','Am Dienstag','Am Mittwoch'], a:1},
  {t:'Hallo Ben, hier ist Mama. Ich komme heute erst um sieben nach Hause. Im Kühlschrank ist noch Pizza. Mach die Pizza bitte warm. Bis heute Abend!', q:'Was soll Ben essen?', o:['Pizza','Suppe','Brot'], a:0},
  {t:'Guten Tag, hier ist die Autowerkstatt Meier. Ihr Auto ist fertig. Die Reparatur kostet 280 Euro. Sie können das Auto heute bis 18 Uhr abholen.', q:'Wie viel kostet die Reparatur?', o:['180 Euro','218 Euro','280 Euro'], a:2},
  {t:'Hi Sofia, hier ist Leon. Das Wetter ist so schön! Wir wollen am Nachmittag am See grillen. Kommst du mit? Wir treffen uns um drei an der Bushaltestelle. Ruf mich an!', q:'Wo treffen sich die Freunde?', o:['Am See','An der Bushaltestelle','Bei Leon'], a:1},
  {t:'Guten Morgen, Frau Kaya, hier ist Peter Lang aus dem Büro. Ich bin heute leider krank und komme nicht zur Arbeit. Das Meeting um zehn machen wir bitte am Freitag. Danke und bis bald.', q:'Warum kommt Herr Lang nicht?', o:['Er hat Urlaub.','Er ist krank.','Er hat ein Meeting.'], a:1}
 ],
 [
  {t:'Hallo Anna, hier ist Kemal. Ich habe zwei Karten für das Fußballspiel am Sonntag. Das Spiel beginnt um halb vier am Nachmittag. Hast du Zeit? Ruf mich zurück, bitte.', q:'Wann beginnt das Spiel?', o:['Um 3.30 Uhr','Um 15.30 Uhr','Um 16.30 Uhr'], a:1},
  {t:'Guten Tag, hier ist das Reisebüro Sonnenschein. Ihre Tickets nach Spanien sind da. Sie können die Tickets ab morgen bei uns abholen. Wir sind von Montag bis Freitag von 9 bis 18 Uhr da.', q:'Was soll der Kunde machen?', o:['Die Tickets abholen','Die Tickets bezahlen','Ein Hotel buchen'], a:0},
  {t:'Hallo, hier ist Familie Roth von nebenan. Wir sind ab Montag eine Woche im Urlaub. Können Sie bitte unsere Post aus dem Briefkasten holen? Den Schlüssel bringen wir Ihnen am Sonntag. Vielen Dank!', q:'Was sollen die Nachbarn machen?', o:['Den Hund füttern','Die Post holen','Die Blumen kaufen'], a:1},
  {t:'Guten Tag, Herr Novak. Hier ist die Stadtbücherei. Sie haben noch zwei Bücher von uns. Bitte bringen Sie die Bücher bis Mittwoch zurück. Vielen Dank.', q:'Bis wann soll Herr Novak die Bücher zurückbringen?', o:['Bis Montag','Bis Mittwoch','Bis Freitag'], a:1},
  {t:'Hallo Maria, hier ist Eva. Ich bin gerade im Supermarkt. Brauchen wir noch Milch? Und wie viele Eier brauchst du für den Kuchen? Sechs oder zehn? Schreib mir bitte eine SMS.', q:'Wo ist Eva?', o:['Zu Hause','In der Bäckerei','Im Supermarkt'], a:2}
 ],
 [
  {t:'Hallo, hier ist die Praxis Doktor Schulz. Ihr Termin am Dienstag um 14 Uhr geht leider nicht. Kommen Sie bitte am Dienstag um 16 Uhr. Danke.', q:'Wann soll der Patient kommen?', o:['Dienstag, 14 Uhr','Dienstag, 16 Uhr','Mittwoch, 16 Uhr'], a:1},
  {t:'Hallo Jonas, hier ist Mia. Mein Computer ist kaputt. Kannst du mir heute helfen? Ich bin ab fünf Uhr zu Hause. Danke!', q:'Was ist kaputt?', o:['Das Handy','Der Computer','Der Drucker'], a:1},
  {t:'Guten Tag, hier ist die Firma Elektro Huber. Wir suchen eine Verkäuferin oder einen Verkäufer. Bitte kommen Sie am Freitag um 10 Uhr zu einem Gespräch. Bringen Sie bitte Ihren Lebenslauf mit.', q:'Was soll man mitbringen?', o:['Einen Pass','Ein Foto','Einen Lebenslauf'], a:2},
  {t:'Hallo Oma, hier ist Lukas. Wir kommen am Sonntag zum Mittagessen. Wir sind vier Personen: Mama, Papa, Lena und ich. Wir sind um zwölf Uhr bei dir. Bis Sonntag!', q:'Wie viele Personen kommen?', o:['Drei','Vier','Fünf'], a:1},
  {t:'Hier ist die automatische Ansage des Bürgeramts. Unsere Öffnungszeiten: Montag, Dienstag und Donnerstag von 8 bis 16 Uhr, Mittwoch von 8 bis 12 Uhr. Am Freitag ist das Bürgeramt geschlossen.', q:'Wann ist das Bürgeramt geschlossen?', o:['Am Mittwochnachmittag und am Freitag','Am Montag','Am Donnerstag'], a:0}
 ]
]
};

/* LESEN — Teil 1: two short notes/e-mails, 5 richtig/falsch statements.
   Teil 2: 5 situations, choose ad/website a or b. Teil 3: 5 signs/notices, richtig/falsch. */
D.lesen = {
t1: [
 [
  {text:'Liebe Petra,\n\nich bin jetzt in Hamburg bei meiner Tante. Das Wetter ist leider schlecht, es regnet jeden Tag. Aber die Stadt ist sehr schön! Morgen gehen wir in ein Museum und am Abend essen wir Fisch am Hafen. Am Freitag komme ich zurück. Kannst du mich um 18 Uhr am Bahnhof abholen?\n\nViele Grüße\nSandra',
   items:[{st:'Sandra wohnt bei ihrer Tante.', a:true},{st:'Petra soll Sandra am Freitag am Bahnhof abholen.', a:true}]},
  {text:'Hallo Herr Peters,\n\nunsere Teamsitzung ist nicht am Montag, sondern am Dienstag um 9 Uhr. Wir treffen uns im Raum 205 im zweiten Stock. Bitte bringen Sie die Zahlen vom Oktober mit. Frau Lehmann kommt auch.\n\nMit freundlichen Grüßen\nKarin Wolff',
   items:[{st:'Die Sitzung ist am Montag.', a:false},{st:'Die Sitzung ist im zweiten Stock.', a:true},{st:'Herr Peters soll Frau Lehmann mitbringen.', a:false}]}
 ],
 [
  {text:'Hallo Jan,\n\nich bin beim Arzt und komme erst um 14 Uhr nach Hause. Im Kühlschrank ist Suppe. Kannst du bitte noch einkaufen? Wir brauchen Milch, Brot und Kaffee. Das Geld liegt auf dem Tisch in der Küche.\n\nKuss, Mama',
   items:[{st:'Die Mutter ist beim Arzt.', a:true},{st:'Jan soll Suppe kaufen.', a:false},{st:'Das Geld ist in der Küche.', a:true}]},
  {text:'Liebe Nachbarinnen und Nachbarn,\n\nam Samstag, den 15. Juni, feiern wir unser Hoffest. Wir beginnen um 15 Uhr. Kaffee und Kuchen gibt es kostenlos. Bitte bringen Sie etwas zum Grillen mit. Kinder sind herzlich willkommen!\n\nIhre Hausverwaltung',
   items:[{st:'Das Fest ist am Sonntag.', a:false},{st:'Die Nachbarn sollen etwas zum Grillen mitbringen.', a:true}]}
 ],
 [
  {text:'Lieber Mehmet,\n\nvielen Dank für deine Einladung zum Geburtstag! Ich komme gern. Leider kann ich erst um 20 Uhr da sein, denn ich arbeite am Samstag bis 19 Uhr. Soll ich etwas mitbringen? Vielleicht einen Salat?\n\nBis Samstag!\nClaudia',
   items:[{st:'Claudia kann nicht zur Party kommen.', a:false},{st:'Claudia arbeitet am Samstag bis 19 Uhr.', a:true}]},
  {text:'Liebe Kursteilnehmerinnen und Kursteilnehmer,\n\nam Mittwoch ist leider kein Deutschkurs. Ihre Lehrerin, Frau Busch, ist krank. Der nächste Kurs ist am Freitag zur normalen Zeit. Bitte machen Sie die Hausaufgaben auf Seite 34.\n\nIhre Sprachschule',
   items:[{st:'Am Mittwoch gibt es keinen Kurs.', a:true},{st:'Frau Busch hat Urlaub.', a:false},{st:'Die Teilnehmer sollen Hausaufgaben machen.', a:true}]}
 ],
 [
  {text:'Hallo Tim,\n\nich habe eine neue Wohnung! Sie hat zwei Zimmer und einen großen Balkon. Sie ist nicht weit vom Zentrum, nur zehn Minuten mit dem Bus. Am Samstag ziehe ich um. Kannst du mir helfen? Ich habe viele Möbel und es gibt keinen Aufzug. Danach koche ich für uns.\n\nLiebe Grüße\nNina',
   items:[{st:'Ninas Wohnung hat einen Balkon.', a:true},{st:'Die Wohnung ist im Zentrum.', a:false},{st:'Tim soll Nina beim Umzug helfen.', a:true}]},
  {text:'Liebe Gäste,\n\ndas Hotelschwimmbad ist von Montag bis Mittwoch geschlossen. Sie können aber kostenlos das Stadtbad in der Goethestraße besuchen. Ihre Eintrittskarte bekommen Sie an der Rezeption.\n\nIhr Hotel Lindenhof',
   items:[{st:'Die Gäste müssen für das Stadtbad bezahlen.', a:false},{st:'Die Karte für das Stadtbad gibt es an der Rezeption.', a:true}]}
 ]
],
t2: [
 [
  {s:'Sie möchten am Wochenende mit dem Zug nach Berlin fahren und suchen ein günstiges Ticket.', o:[{h:'www.bahn-angebote.de', b:'Sparpreise für Fernzüge · Wochenend-Ticket ab 29,90 € · Jetzt online buchen'},{h:'www.berlin-hotels.de', b:'Hotels in Berlin ab 49 € pro Nacht · Zentral und ruhig'}], a:0},
  {s:'Ihr Kind ist krank. Sie brauchen am Sonntag einen Arzt.', o:[{h:'Praxis Dr. med. Lenz', b:'Kinderärztin · Mo–Fr 8–12 Uhr und 15–18 Uhr · Sa und So geschlossen'},{h:'Ärztlicher Notdienst', b:'Am Wochenende und an Feiertagen für Sie da · Tel. 116 117 · Auch für Kinder'}], a:1},
  {s:'Sie möchten Deutsch lernen, aber Sie haben nur am Abend Zeit.', o:[{h:'Sprachschule Lingua', b:'Deutschkurse A1–B2 · Abendkurse Mo + Mi 18.30–21.00 Uhr'},{h:'Volkshochschule', b:'Intensivkurse Deutsch · Mo–Fr 9.00–12.30 Uhr'}], a:0},
  {s:'Sie suchen ein gebrauchtes Fahrrad.', o:[{h:'Radhaus Müller', b:'Neue Fahrräder und E-Bikes · Reparatur in 24 Stunden'},{h:'Flohmarkt am Rathaus', b:'Jeden Samstag 8–14 Uhr · Kleidung, Bücher, alte Fahrräder'}], a:1},
  {s:'Sie möchten am Samstagabend tanzen gehen.', o:[{h:'Café Luna', b:'Frühstück, Kuchen, Kaffee · Täglich 8–18 Uhr'},{h:'Club Neon', b:'Fr + Sa ab 22 Uhr · Musik aus den 80ern und 90ern · Eintritt 8 €'}], a:1}
 ],
 [
  {s:'Sie möchten eine Wohnung mieten. Sie haben zwei Kinder.', o:[{h:'Zu vermieten', b:'1-Zimmer-Apartment, 30 m², ideal für Studenten, 380 € warm'},{h:'Zu vermieten', b:'4-Zimmer-Wohnung, 95 m², Garten, Schule in der Nähe, 1.150 €'}], a:1},
  {s:'Sie möchten wissen: Wann fährt der Bus zum Flughafen?', o:[{h:'www.flughafen-info.de', b:'Abflug · Ankunft · Parken · Bus und Bahn zum Flughafen: alle Fahrpläne'},{h:'www.reisen-billig.de', b:'Flüge nach Spanien und Italien ab 39 € · Jetzt buchen!'}], a:0},
  {s:'Ihre Waschmaschine ist kaputt. Sie brauchen Hilfe.', o:[{h:'Elektro-Service Krause', b:'Wir reparieren Waschmaschinen, Kühlschränke und Herde · Auch am Samstag · Tel. 23 45 67'},{h:'Möbel-Center', b:'Küchen, Betten, Sofas · 20 % Rabatt auf alle Möbel'}], a:0},
  {s:'Sie möchten am Sonntag Brötchen kaufen.', o:[{h:'Bäckerei Kranz', b:'Mo–Sa 6–18 Uhr · So 7–11 Uhr · Frische Brötchen jeden Tag'},{h:'Supermarkt Frisch', b:'Mo–Sa 7–22 Uhr · Große Brot-Abteilung'}], a:0},
  {s:'Sie möchten mit Ihren Kindern (6 und 9 Jahre) ein Museum besuchen.', o:[{h:'Kunsthalle', b:'Ausstellung „Fotografie heute“ · Eintritt ab 18 Jahren'},{h:'Naturkundemuseum', b:'Dinosaurier zum Anfassen! · Familienkarte 15 € · Kinder unter 6 Jahren frei'}], a:1}
 ],
 [
  {s:'Sie möchten schwimmen lernen.', o:[{h:'Hallenbad Nord', b:'Schwimmkurse für Erwachsene · Anfänger · Dienstag 19 Uhr'},{h:'Sportgeschäft Aktiv', b:'Badehosen, Badeanzüge und Handtücher im Angebot'}], a:0},
  {s:'Sie möchten am Abend italienisch essen.', o:[{h:'Pizzeria Roma', b:'Pizza und Pasta · Täglich 17–23 Uhr · Mittwoch Ruhetag'},{h:'Gasthaus Zur Linde', b:'Deutsche Küche · Mittagstisch 11.30–14 Uhr'}], a:0},
  {s:'Sie möchten Ihr altes Auto verkaufen.', o:[{h:'Autovermietung Rapid', b:'Autos mieten ab 25 € pro Tag'},{h:'Autohaus König', b:'Wir kaufen Ihr altes Auto! · Kostenloser Test · Sofort Geld'}], a:1},
  {s:'Sie brauchen ein Hotelzimmer in München für drei Nächte.', o:[{h:'www.muenchen-tourismus.de', b:'Hotels und Pensionen · Zimmer suchen und buchen · Stadtführungen'},{h:'www.muenchen-wetter.de', b:'Wetter heute und morgen · 7-Tage-Prognose'}], a:0},
  {s:'Sie sind am Wochenende nicht zu Hause. Wer kann Ihren Hund nehmen?', o:[{h:'Tierarzt Dr. Holm', b:'Sprechzeiten Mo–Fr 9–17 Uhr · Impfungen und Untersuchungen'},{h:'Hundehotel Bello', b:'Wir passen auf Ihren Hund auf · Auch am Wochenende · Großer Garten'}], a:1}
 ],
 [
  {s:'Sie suchen eine Arbeit am Wochenende.', o:[{h:'Café Sonne sucht', b:'Kellner/in für Samstag und Sonntag · 13 € pro Stunde'},{h:'Büro Weber sucht', b:'Sekretär/in · Montag bis Freitag · 40 Stunden'}], a:0},
  {s:'Sie möchten im Internet Kleidung kaufen.', o:[{h:'www.mode-shop.de', b:'Jacken, Hosen, Schuhe · Online bestellen · Lieferung in 2 Tagen'},{h:'www.mode-magazin.de', b:'Die neuen Farben für den Herbst · Interviews mit Designern'}], a:0},
  {s:'Sie möchten am Sonntag ins Kino gehen. Am Abend haben Sie keine Zeit.', o:[{h:'Kino Capitol', b:'Sonntag: 15.00 Uhr „Der kleine Bär“ · 17.30 Uhr „Paris im Herbst“'},{h:'Kino Rex', b:'Sonntag: 20.15 Uhr und 22.30 Uhr „Nachtzug“'}], a:0},
  {s:'Sie möchten einen Computerkurs machen.', o:[{h:'Volkshochschule – Programm', b:'Sprachen · Kochen · Computer und Internet · Sport'},{h:'Computer-Markt', b:'Laptops und Drucker zu Top-Preisen'}], a:0},
  {s:'Sie haben Zahnschmerzen.', o:[{h:'Dr. Weiß – Augenarzt', b:'Termine nur nach Vereinbarung'},{h:'Zahnarztpraxis Dr. Bauer', b:'Mo–Fr 8–18 Uhr · Patienten mit Schmerzen auch ohne Termin'}], a:1}
 ]
],
t3: [
 [
  {w:'An der Tür einer Bäckerei', sign:'Wir machen Urlaub!\nVom 1. bis 14. August geschlossen.\nAb 15. August sind wir wieder für Sie da.', st:'Die Bäckerei ist im August zwei Wochen geschlossen.', a:true},
  {w:'Im Bahnhof', sign:'Fahrkarten\nnur am Automaten\nSchalter geschlossen', st:'Sie können Ihre Fahrkarte am Schalter kaufen.', a:false},
  {w:'In der Sprachschule', sign:'Deutsch A1 – Abendkurs\nheute nicht in Raum 12,\nsondern in Raum 3 (Erdgeschoss)', st:'Der Abendkurs ist heute im Erdgeschoss.', a:true},
  {w:'Im Park', sign:'Kinderspielplatz\nHunde bitte an die Leine!', st:'Hunde dürfen hier frei laufen.', a:false},
  {w:'An einer Arztpraxis', sign:'Praxis Dr. Sommer\nMittwochnachmittag geschlossen\nIn dringenden Fällen: Tel. 116 117', st:'Am Mittwochnachmittag ist die Praxis zu.', a:true}
 ],
 [
  {w:'Im Kaufhaus', sign:'Kundentoiletten\n3. Stock\nneben dem Restaurant', st:'Die Toiletten sind im Erdgeschoss.', a:false},
  {w:'Am Schwimmbad', sign:'Montag: Ruhetag\nDienstag – Sonntag 8 – 20 Uhr', st:'Sie können am Sonntag schwimmen gehen.', a:true},
  {w:'An einer Wohnungstür', sign:'Bin gleich zurück!\nPakete bitte bei Familie Ott\n(1. Stock) abgeben.', st:'Sie sollen das Paket in den ersten Stock bringen.', a:true},
  {w:'Im Zug', sign:'Ruhebereich\nBitte nicht telefonieren', st:'Hier dürfen Sie telefonieren.', a:false},
  {w:'An der Bushaltestelle', sign:'Wegen Bauarbeiten:\nLinie 7 hält vom 3. bis 10. Mai\nan der Haltestelle Marktplatz.', st:'Der Bus Linie 7 fährt im Mai nicht.', a:false}
 ],
 [
  {w:'In einem Geschäft', sign:'Sonderangebot!\nAlle Jacken – 30 %\nnur heute', st:'Die Jacken sind heute billiger.', a:true},
  {w:'Am Kino', sign:'Heute 20.00 Uhr: ausverkauft!\nKarten für morgen an der Kasse', st:'Sie können für heute Abend noch Karten kaufen.', a:false},
  {w:'Im Hotel', sign:'Frühstück\nim 1. Stock\n6.30 – 10.00 Uhr', st:'Um 11 Uhr gibt es noch Frühstück.', a:false},
  {w:'An der Universität', sign:'Bibliothek\nAm Montag (Feiertag) geschlossen', st:'Am Montag ist die Bibliothek zu.', a:true},
  {w:'Im Supermarkt', sign:'Leere Flaschen\nbitte hier abgeben →\nSie bekommen Geld zurück.', st:'Hier können Sie leere Flaschen zurückgeben.', a:true}
 ],
 [
  {w:'An der Tür eines Büros', sign:'Anmeldung\nBitte klingeln und warten!', st:'Sie sollen direkt hineingehen.', a:false},
  {w:'Auf einem Parkplatz', sign:'Nur für Kunden\nMo–Sa 8–20 Uhr\nmaximal 2 Stunden', st:'Kunden dürfen hier zwei Stunden parken.', a:true},
  {w:'An einem Restaurant', sign:'Heute kein Mittagessen\nAb 17 Uhr geöffnet', st:'Sie können heute um 12 Uhr hier essen.', a:false},
  {w:'Im Krankenhaus', sign:'Besuchszeiten\ntäglich 14 – 19 Uhr', st:'Man kann jeden Tag am Nachmittag Besuch machen.', a:true},
  {w:'In der Post', sign:'Pakete und Briefe → Schalter 1–3\nPostbank → Schalter 4', st:'Für die Postbank gehen Sie zu Schalter 4.', a:true}
 ]
]
};

/* SCHREIBEN — Teil 1: complete a form (5 gaps, 1 point each) using info from a short text.
   Teil 2: short message (~30 words) covering 3 points; 3 pts per point + 1 for form (Anrede/Gruß). */
D.schreiben = {
t1: [
 {title:'Anmeldung Deutschkurs', text:'Ihre Freundin Maria Gonzales möchte einen Deutschkurs machen. Sie kommt aus Spanien und wohnt seit zwei Monaten in Köln, in der Bergstraße 12, 50667 Köln. Sie ist 28 Jahre alt und arbeitet als Krankenschwester. Sie hat nur am Abend Zeit. Sie bezahlt mit Kreditkarte.\n\nFüllen Sie das Anmeldeformular für Maria aus.',
  head:'Sprachschule Lingua – Anmeldung', fields:[
  {l:'Name', given:'Maria Gonzales'},
  {l:'Herkunftsland', ans:['Spanien'], show:'Spanien'},
  {l:'Wohnort', ans:['Köln','50667 Köln','Koeln'], show:'Köln'},
  {l:'Beruf', ans:['Krankenschwester'], show:'Krankenschwester'},
  {l:'Kurszeit', ch:['Vormittag','Nachmittag','Abend'], ans:[2]},
  {l:'Bezahlung', ch:['bar','Überweisung','Kreditkarte'], ans:[2]}]},
 {title:'Hotelreservierung', text:'Herr Thomas Weber und seine Frau Anna möchten vom 12. bis 14. Mai im Hotel Seeblick in Konstanz übernachten. Sie haben einen Sohn, er ist 8 Jahre alt. Sie möchten ein Zimmer mit Frühstück. Sie kommen mit dem Auto und brauchen einen Parkplatz.\n\nFüllen Sie das Formular für Herrn Weber aus.',
  head:'Hotel Seeblick – Reservierung', fields:[
  {l:'Name', given:'Thomas Weber'},
  {l:'Anzahl Erwachsene', ans:['2','zwei'], show:'2'},
  {l:'Anzahl Kinder', ans:['1','eins','ein','einkind','1kind'], show:'1'},
  {l:'Abreise (Datum)', ans:['14mai','145','1405','14052026','1452026'], show:'14. Mai'},
  {l:'Verpflegung', ch:['ohne Frühstück','mit Frühstück','Halbpension'], ans:[1]},
  {l:'Parkplatz', ch:['ja','nein'], ans:[0]}]},
 {title:'Sportverein', text:'Ihr Kollege Ali Yilmaz möchte im Sportverein „FC Blau-Weiß“ Fußball spielen. Er ist am 3. April 1995 in Ankara geboren. Er ist verheiratet und hat eine Tochter. Seine Handynummer ist 0176 554 210.\n\nFüllen Sie das Formular für Ali aus.',
  head:'FC Blau-Weiß – Mitgliedsantrag', fields:[
  {l:'Name', given:'Ali Yilmaz'},
  {l:'Geburtsort', ans:['Ankara'], show:'Ankara'},
  {l:'Geburtsdatum', ans:['341995','03041995','3april1995','03april1995','3495','030495'], show:'03.04.1995'},
  {l:'Familienstand', ch:['ledig','verheiratet','geschieden'], ans:[1]},
  {l:'Telefon', ans:['0176554210'], show:'0176 554 210'},
  {l:'Sportart', ans:['fußball','fussball'], show:'Fußball'}]},
 {title:'Bibliotheksausweis', text:'Sie sind mit Ihrer Freundin Lena Fischer in der Stadtbibliothek. Lena möchte einen Bibliotheksausweis. Sie studiert Medizin an der Universität. Sie wohnt in der Gartenstraße 5 in 79098 Freiburg. Ihre E-Mail-Adresse ist lena.fischer@example.com. Sie möchte den Ausweis für ein Jahr.\n\nFüllen Sie das Formular für Lena aus.',
  head:'Stadtbibliothek Freiburg – Antrag', fields:[
  {l:'Name', given:'Lena Fischer'},
  {l:'Straße, Hausnummer', ans:['gartenstraße5','gartenstr5','gartenstrasse5'], show:'Gartenstraße 5'},
  {l:'PLZ, Ort', ans:['79098freiburg'], show:'79098 Freiburg'},
  {l:'Beruf', ans:['studentin','student'], show:'Studentin'},
  {l:'E-Mail', ans:['lenafischer@examplecom'], show:'lena.fischer@example.com'},
  {l:'Ausweis für', ch:['1 Monat','6 Monate','1 Jahr'], ans:[2]}]},
 {title:'Busreise', text:'Familie Nowak – Herr Piotr Nowak, seine Frau und die zwei Kinder – möchte eine Busreise nach Berlin machen. Sie fahren am 20. Juli und kommen am 23. Juli zurück. Sie wohnen in Leipzig. Herr Nowak bezahlt mit Überweisung.\n\nFüllen Sie das Formular für Herrn Nowak aus.',
  head:'Reisebüro Sonnenschein – Buchung', fields:[
  {l:'Name', given:'Piotr Nowak'},
  {l:'Wohnort', ans:['leipzig'], show:'Leipzig'},
  {l:'Anzahl Personen', ans:['4','vier'], show:'4'},
  {l:'Hinfahrt', ans:['20juli','207','2007','20072026'], show:'20. Juli'},
  {l:'Rückfahrt', ans:['23juli','237','2307','23072026'], show:'23. Juli'},
  {l:'Bezahlung', ch:['bar','Kreditkarte','Überweisung'], ans:[2]}]},
 {title:'Beim Arzt', text:'Ihr Freund Daniel Costa ist neu in der Stadt und geht zum ersten Mal zu Dr. Hartmann. Er ist 35 Jahre alt und kommt aus Portugal. Er hat seit drei Tagen Kopfschmerzen und Fieber. Er ist bei der AOK versichert. Er hat keine Allergien.\n\nFüllen Sie das Formular für Daniel aus.',
  head:'Praxis Dr. Hartmann – Patientenbogen', fields:[
  {l:'Name', given:'Daniel Costa'},
  {l:'Alter', ans:['35','35jahre'], show:'35'},
  {l:'Herkunftsland', ans:['portugal'], show:'Portugal'},
  {l:'Krankenkasse', ans:['aok'], show:'AOK'},
  {l:'Beschwerden', ans:['kopfschmerzenundfieber','fieberundkopfschmerzen','kopfschmerzenfieber','fieberkopfschmerzen'], show:'Kopfschmerzen und Fieber'},
  {l:'Allergien', ch:['ja','nein'], ans:[1]}]}
],
t2: [
 {s:'Sie können am Samstag nicht zum Geburtstag von Ihrem Freund Paul kommen. Schreiben Sie Paul eine E-Mail.', p:['Entschuldigen Sie sich.','Warum können Sie nicht kommen?','Machen Sie einen neuen Termin.'], inf:true,
  m:'Lieber Paul,\n\nvielen Dank für die Einladung. Es tut mir leid, aber ich kann am Samstag nicht kommen. Meine Mutter ist krank und ich besuche sie. Hast du am Sonntag Zeit? Dann trinken wir zusammen Kaffee.\n\nViele Grüße\n{name}'},
 {s:'Sie möchten im August einen Deutschkurs in Berlin machen. Schreiben Sie an die Sprachschule „Deutsch Plus“.', p:['Warum schreiben Sie?','Fragen Sie: Wie viel kostet der Kurs?','Bitten Sie um Informationen über Zimmer oder Wohnungen.'],
  m:'Sehr geehrte Damen und Herren,\n\nich möchte im August einen Deutschkurs in Berlin machen. Wie viel kostet der Kurs? Ich suche auch ein Zimmer. Bitte schicken Sie mir Informationen über Wohnungen.\n\nMit freundlichen Grüßen\n{name}'},
 {s:'Sie sind krank und können morgen nicht zum Deutschkurs kommen. Schreiben Sie Ihrer Lehrerin, Frau Klein.', p:['Warum kommen Sie nicht?','Fragen Sie nach den Hausaufgaben.','Wann kommen Sie wieder?'],
  m:'Liebe Frau Klein,\n\nich bin leider krank und habe Fieber. Ich kann morgen nicht zum Kurs kommen. Was sind die Hausaufgaben? Am Montag komme ich wieder.\n\nViele Grüße\n{name}'},
 {s:'Ihre Freundin Julia hat ein Baby bekommen. Schreiben Sie Julia eine Karte.', p:['Gratulieren Sie.','Fragen Sie: Wie heißt das Baby?','Wann können Sie Julia besuchen?'], inf:true,
  m:'Liebe Julia,\n\nherzlichen Glückwunsch zu deinem Baby! Ich freue mich sehr für dich. Wie heißt das Baby? Ich möchte dich gern besuchen. Hast du am Wochenende Zeit?\n\nLiebe Grüße\n{name}'},
 {s:'Sie wohnen in einer neuen Wohnung. Die Heizung ist kaputt. Schreiben Sie Ihrem Vermieter, Herrn Schulz.', p:['Was ist das Problem?','Bitten Sie: Ein Techniker soll kommen.','Wann sind Sie zu Hause?'],
  m:'Sehr geehrter Herr Schulz,\n\nin meiner Wohnung ist die Heizung kaputt. Es ist sehr kalt. Können Sie bitte einen Techniker schicken? Ich bin jeden Tag ab 16 Uhr zu Hause.\n\nMit freundlichen Grüßen\n{name}'},
 {s:'Sie möchten am Wochenende mit Ihrem Kollegen Marco ins Kino gehen. Schreiben Sie Marco eine Nachricht.', p:['Laden Sie Marco ein.','An welchem Tag und um wie viel Uhr?','Wo treffen Sie sich?'], inf:true,
  m:'Hallo Marco,\n\nich möchte am Wochenende ins Kino gehen. Kommst du mit? Der Film beginnt am Samstag um 20 Uhr. Wir treffen uns um 19.30 Uhr vor dem Kino am Marktplatz.\n\nBis bald\n{name}'},
 {s:'Sie haben im Hotel „Sonne“ ein Zimmer vom 10. bis 12. Juni reserviert. Sie kommen später an. Schreiben Sie an das Hotel.', p:['Warum schreiben Sie?','Wann kommen Sie an?','Fragen Sie: Gibt es einen Parkplatz?'],
  m:'Sehr geehrte Damen und Herren,\n\nich habe ein Zimmer vom 10. bis 12. Juni reserviert. Ich komme leider später an, erst um 22 Uhr. Gibt es bei Ihnen einen Parkplatz für mein Auto?\n\nMit freundlichen Grüßen\n{name}'},
 {s:'Sie haben noch ein Buch von Ihrer Freundin Sara. Sie möchten es zurückgeben. Schreiben Sie Sara eine Nachricht.', p:['Danken Sie für das Buch.','Wann und wo können Sie sich treffen?','Fragen Sie: Hat Sara noch ein Buch für Sie?'], inf:true,
  m:'Liebe Sara,\n\nvielen Dank für das Buch! Es war sehr schön. Treffen wir uns am Freitag um 17 Uhr im Café Luna? Dann bringe ich das Buch mit. Hast du noch ein Buch für mich?\n\nLiebe Grüße\n{name}'},
 {s:'Sie möchten Ihren Freund Tom am Wochenende besuchen. Schreiben Sie Tom.', p:['Wann kommen Sie?','Wie kommen Sie (Zug, Auto …)?','Fragen Sie: Was möchte Tom am Wochenende machen?'], inf:true,
  m:'Lieber Tom,\n\nich komme am Samstag zu dir. Ich fahre mit dem Zug und bin um 11 Uhr am Bahnhof. Was möchtest du am Wochenende machen? Vielleicht wandern oder ins Kino?\n\nViele Grüße\n{name}'},
 {s:'Sie suchen eine Wohnung. Sie haben eine Anzeige von Frau Berger gelesen. Schreiben Sie Frau Berger.', p:['Warum schreiben Sie?','Fragen Sie: Wie hoch ist die Miete?','Wann können Sie die Wohnung sehen?'],
  m:'Sehr geehrte Frau Berger,\n\nich habe Ihre Anzeige gelesen. Ich suche eine Wohnung und Ihre Wohnung ist sehr interessant. Wie hoch ist die Miete? Kann ich die Wohnung am Dienstag um 18 Uhr sehen?\n\nMit freundlichen Grüßen\n{name}'},
 {s:'Ihr Kind ist krank und kann morgen nicht in die Schule gehen. Schreiben Sie dem Lehrer, Herrn Becker.', p:['Warum kommt Ihr Kind nicht?','Wie lange bleibt es zu Hause?','Fragen Sie nach den Hausaufgaben.'],
  m:'Sehr geehrter Herr Becker,\n\nmein Sohn ist krank. Er hat Fieber und kann morgen nicht in die Schule kommen. Er bleibt bis Freitag zu Hause. Welche Hausaufgaben hat er?\n\nMit freundlichen Grüßen\n{name}'},
 {s:'Sie möchten einen Termin beim Friseur. Schreiben Sie eine E-Mail an den Salon „Haarschnitt“.', p:['Was möchten Sie?','Wann haben Sie Zeit?','Fragen Sie nach dem Preis.'],
  m:'Sehr geehrte Damen und Herren,\n\nich möchte einen Termin zum Haare schneiden. Ich habe am Donnerstag oder am Freitag ab 15 Uhr Zeit. Wie viel kostet ein Haarschnitt?\n\nMit freundlichen Grüßen\n{name}'}
]
};

/* SPRECHEN — Teil 1: introduce yourself, spell, give a number (3 pts).
   Teil 2: topic + word card → ask a question, answer a partner (6 pts).
   Teil 3: picture card → make a request, react to a request (6 pts). */
D.sprechen = {
t1keys:['Name?','Alter?','Land?','Wohnort?','Sprachen?','Beruf?','Hobby?'],
t1follow:[
 {q:'Wie ist Ihr Familienname? Können Sie das bitte buchstabieren?', kind:'spell-last'},
 {q:'Wie heißt Ihre Stadt? Können Sie das bitte buchstabieren?', kind:'spell-city'},
 {q:'Wie ist Ihre Telefonnummer?', kind:'number'},
 {q:'Wie ist Ihre Postleitzahl?', kind:'number'},
 {q:'Wie ist Ihre Hausnummer?', kind:'number'},
 {q:'Wie viele Leute sind in Ihrem Deutschkurs?', kind:'number'}
],
spellWords:['Müller','Schmidt','Becker','Wagner','Köln','Weber','Hoffmann','Zürich','Jung','Fischer','Kaya','Novak','Bremen','Lehmann','Graz','Yilmaz','Schulz','Dresden','Vogel','Pohl','Wien','Krüger','Lange','Quast','Vietz','Hamburg','Ahmadi','Jäger'],
t2: {
 essen:{name:'Essen und Trinken', cards:[
  {w:'Frühstück', q:'Was isst du zum Frühstück?', a:'Ich esse Brot mit Käse und trinke Kaffee.'},
  {w:'Lieblingsessen', q:'Was ist dein Lieblingsessen?', a:'Mein Lieblingsessen ist Pizza.'},
  {w:'Getränk', q:'Was trinkst du gern?', a:'Ich trinke gern Tee.'},
  {w:'Restaurant', q:'Gehst du oft ins Restaurant?', a:'Nein, nur am Wochenende.'},
  {w:'Obst', q:'Isst du gern Obst?', a:'Ja, ich esse gern Äpfel und Bananen.'},
  {w:'Kochen', q:'Kochst du gern?', a:'Ja, ich koche jeden Abend.'}]},
 einkaufen:{name:'Einkaufen', cards:[
  {w:'Supermarkt', q:'Wann gehst du in den Supermarkt?', a:'Ich gehe am Samstag in den Supermarkt.'},
  {w:'Kleidung', q:'Wo kaufst du Kleidung?', a:'Ich kaufe Kleidung im Kaufhaus.'},
  {w:'Brot', q:'Wo kaufst du Brot?', a:'In der Bäckerei neben meiner Wohnung.'},
  {w:'Geschäfte', q:'Wann öffnen die Geschäfte hier?', a:'Die Geschäfte öffnen um neun Uhr.'},
  {w:'Markt', q:'Gehst du gern auf den Markt?', a:'Ja, am Samstag kaufe ich dort Obst und Gemüse.'},
  {w:'Geschenk', q:'Was kaufst du als Geschenk für deine Mutter?', a:'Ich kaufe Blumen oder Schokolade.'}]},
 wochenende:{name:'Wochenende', cards:[
  {w:'Samstag', q:'Was machst du am Samstag?', a:'Am Samstag treffe ich Freunde.'},
  {w:'Sonntag', q:'Wann stehst du am Sonntag auf?', a:'Am Sonntag stehe ich um zehn Uhr auf.'},
  {w:'Freunde', q:'Triffst du am Wochenende Freunde?', a:'Ja, wir gehen zusammen ins Café.'},
  {w:'Kino', q:'Gehst du am Wochenende ins Kino?', a:'Nein, ich sehe lieber zu Hause Filme.'},
  {w:'Ausflug', q:'Machst du am Wochenende einen Ausflug?', a:'Ja, ich fahre an den See.'},
  {w:'Sport', q:'Machst du am Wochenende Sport?', a:'Ja, ich spiele am Sonntag Fußball.'}]},
 freizeit:{name:'Freizeit und Hobbys', cards:[
  {w:'Hobby', q:'Was ist dein Hobby?', a:'Mein Hobby ist Lesen.'},
  {w:'Musik', q:'Welche Musik hörst du gern?', a:'Ich höre gern Popmusik.'},
  {w:'Buch', q:'Liest du gern Bücher?', a:'Ja, ich lese jeden Abend.'},
  {w:'Fernsehen', q:'Siehst du oft fern?', a:'Nein, nicht so oft. Vielleicht eine Stunde am Abend.'},
  {w:'Internet', q:'Wie lange bist du jeden Tag im Internet?', a:'Ungefähr zwei Stunden.'},
  {w:'Schwimmen', q:'Kannst du schwimmen?', a:'Ja, ich schwimme gern im Sommer.'}]},
 wohnen:{name:'Wohnen', cards:[
  {w:'Wohnung', q:'Wie groß ist deine Wohnung?', a:'Meine Wohnung hat zwei Zimmer.'},
  {w:'Küche', q:'Ist deine Küche groß?', a:'Nein, die Küche ist klein, aber hell.'},
  {w:'Nachbarn', q:'Kennst du deine Nachbarn?', a:'Ja, meine Nachbarn sind sehr nett.'},
  {w:'Miete', q:'Wie hoch ist deine Miete?', a:'Die Miete ist 600 Euro im Monat.'},
  {w:'Balkon', q:'Hat deine Wohnung einen Balkon?', a:'Ja, sie hat einen kleinen Balkon.'},
  {w:'Stadt', q:'Wohnst du gern in der Stadt?', a:'Ja, die Stadt ist interessant.'}]},
 reisen:{name:'Reisen und Urlaub', cards:[
  {w:'Urlaub', q:'Wohin fährst du im Urlaub?', a:'Ich fahre im Sommer nach Italien.'},
  {w:'Hotel', q:'Schläfst du im Urlaub im Hotel?', a:'Nein, ich wohne bei Freunden.'},
  {w:'Zug', q:'Fährst du gern mit dem Zug?', a:'Ja, der Zug ist bequem.'},
  {w:'Flugzeug', q:'Fliegst du oft mit dem Flugzeug?', a:'Nein, nur einmal im Jahr.'},
  {w:'Koffer', q:'Was ist in deinem Koffer?', a:'Kleidung, Bücher und meine Kamera.'},
  {w:'Meer', q:'Bist du gern am Meer?', a:'Ja, ich schwimme gern im Meer.'}]},
 arbeit:{name:'Arbeit und Beruf', cards:[
  {w:'Beruf', q:'Was bist du von Beruf?', a:'Ich bin Verkäufer.'},
  {w:'Arbeitszeit', q:'Wann beginnt deine Arbeit?', a:'Meine Arbeit beginnt um acht Uhr.'},
  {w:'Kollegen', q:'Wie sind deine Kollegen?', a:'Meine Kollegen sind sehr nett.'},
  {w:'Büro', q:'Arbeitest du in einem Büro?', a:'Nein, ich arbeite in einem Geschäft.'},
  {w:'Pause', q:'Wann machst du Mittagspause?', a:'Um zwölf Uhr.'},
  {w:'Weg zur Arbeit', q:'Wie kommst du zur Arbeit?', a:'Ich fahre mit dem Bus.'}]},
 familie:{name:'Familie und Person', cards:[
  {w:'Geschwister', q:'Hast du Geschwister?', a:'Ja, ich habe einen Bruder und zwei Schwestern.'},
  {w:'Eltern', q:'Wo wohnen deine Eltern?', a:'Meine Eltern wohnen nicht in Deutschland. Sie wohnen in meiner Heimat.'},
  {w:'Kinder', q:'Hast du Kinder?', a:'Nein, ich habe keine Kinder.'},
  {w:'Geburtstag', q:'Wann hast du Geburtstag?', a:'Ich habe im März Geburtstag.'},
  {w:'Sprachen', q:'Welche Sprachen sprichst du?', a:'Ich spreche Englisch und ein bisschen Deutsch.'},
  {w:'Heimat', q:'Woher kommst du?', a:'Ich komme aus {land}.'}]}
},
t3: [
 {e:'🪟', w:'Fenster', b:'Können Sie bitte das Fenster öffnen?', r:'Ja, natürlich. Ist es zu warm?'},
 {e:'🚪', w:'Tür', b:'Mach bitte die Tür zu!', r:'Ja, gern.'},
 {e:'☕', w:'Kaffee', b:'Einen Kaffee, bitte!', r:'Gern. Mit Milch und Zucker?'},
 {e:'🥛', w:'Wasser', b:'Kann ich bitte ein Glas Wasser haben?', r:'Natürlich. Hier, bitte.'},
 {e:'🖊️', w:'Kugelschreiber', b:'Kannst du mir bitte deinen Kuli geben?', r:'Ja, hier, bitte.'},
 {e:'📄', w:'Papier', b:'Haben Sie bitte ein Blatt Papier für mich?', r:'Ja, hier ist Papier.'},
 {e:'📱', w:'Handy', b:'Darf ich bitte mal mit deinem Handy telefonieren?', r:'Tut mir leid, mein Akku ist leer.'},
 {e:'🔑', w:'Schlüssel', b:'Gib mir bitte den Schlüssel!', r:'Hier ist der Schlüssel.'},
 {e:'💡', w:'Licht', b:'Können Sie bitte das Licht anmachen?', r:'Ja, sofort.'},
 {e:'👜', w:'Tasche', b:'Können Sie bitte meine Tasche nehmen?', r:'Ja, gern. Sie ist aber schwer!'},
 {e:'📕', w:'Buch', b:'Kannst du mir bitte das Buch geben?', r:'Natürlich, bitte schön.'},
 {e:'📰', w:'Zeitung', b:'Kann ich bitte die Zeitung haben?', r:'Ja, ich bin fertig. Hier, bitte.'},
 {e:'☂️', w:'Regenschirm', b:'Kannst du mir bitte deinen Regenschirm geben? Es regnet.', r:'Ja, klar. Hier.'},
 {e:'🚕', w:'Taxi', b:'Rufen Sie mir bitte ein Taxi!', r:'Ja, natürlich. Wohin möchten Sie fahren?'},
 {e:'🧂', w:'Salz', b:'Gib mir bitte das Salz!', r:'Hier, bitte.'},
 {e:'🍎', w:'Apfel', b:'Kann ich bitte einen Apfel haben?', r:'Gern, nimm zwei!'},
 {e:'🍞', w:'Brot', b:'Kaufst du bitte Brot?', r:'Ja, ich gehe gleich zur Bäckerei.'},
 {e:'🎵', w:'Musik', b:'Mach bitte die Musik leiser!', r:'Oh, Entschuldigung. Ja, natürlich.'},
 {e:'📺', w:'Fernseher', b:'Mach bitte den Fernseher aus!', r:'Okay, kein Problem.'},
 {e:'☎️', w:'Telefon', b:'Darf ich bitte mal telefonieren?', r:'Ja, natürlich. Das Telefon ist dort.'},
 {e:'📷', w:'Foto', b:'Können Sie bitte ein Foto von uns machen?', r:'Gern. Bitte lächeln!'},
 {e:'🪑', w:'Stuhl', b:'Ist der Stuhl hier frei? Kann ich ihn nehmen?', r:'Ja, bitte, nehmen Sie ihn.'},
 {e:'🚲', w:'Fahrrad', b:'Kann ich morgen bitte dein Fahrrad haben?', r:'Ja, aber bitte bis 18 Uhr.'},
 {e:'🍰', w:'Kuchen', b:'Kann ich bitte noch ein Stück Kuchen haben?', r:'Natürlich! Er ist sehr gut, oder?'},
 {e:'💶', w:'Geld', b:'Kannst du mir bitte zehn Euro geben?', r:'Tut mir leid, ich habe kein Geld dabei.'},
 {e:'🎫', w:'Fahrkarte', b:'Eine Fahrkarte nach Berlin, bitte!', r:'Einfach oder hin und zurück?'},
 {e:'🧳', w:'Koffer', b:'Können Sie mir bitte mit dem Koffer helfen?', r:'Ja, gern. Wohin soll ich ihn bringen?'},
 {e:'🚭', w:'Rauchen verboten', b:'Bitte rauchen Sie hier nicht!', r:'Oh, Entschuldigung. Das wusste ich nicht.'},
 {e:'🕐', w:'Uhrzeit', b:'Sagen Sie mir bitte, wie spät es ist.', r:'Es ist halb drei.'},
 {e:'💻', w:'Computer', b:'Kannst du mir bitte mit dem Computer helfen?', r:'Ja, gern. Was ist das Problem?'}
]
};

/* WORTSCHATZ — core A1 words from the Goethe Start Deutsch 1 word list, grouped by exam topic.
   One entry per line: German|English */
D.topics = [
 {id:'person', name:'Person & Familie', w:`der Name|name
der Vorname|first name
der Familienname|surname
das Alter|age
die Adresse|address
die Straße|street
die Hausnummer|house number
die Postleitzahl|postcode
der Wohnort|place where you live
das Land|country
die Sprache|language
der Beruf|job, profession
die Familie|family
die Eltern|parents
die Mutter|mother
der Vater|father
der Bruder|brother
die Schwester|sister
die Geschwister|brothers and sisters
der Sohn|son
die Tochter|daughter
das Kind|child
der Mann|man; husband
die Frau|woman; wife; Mrs
verheiratet|married
ledig|single
geschieden|divorced
der Freund|friend (m); boyfriend
die Freundin|friend (f); girlfriend
der Geburtstag|birthday
das Geburtsdatum|date of birth
der Geburtsort|place of birth
die Telefonnummer|phone number
das Handy|mobile phone
die E-Mail|e-mail
die Unterschrift|signature
männlich|male
weiblich|female
heißen|to be called
wohnen|to live (somewhere)
kommen aus|to come from`},
 {id:'zeit', name:'Zahlen & Zeit', w:`die Uhr|clock; o'clock
die Stunde|hour
die Minute|minute
der Tag|day
die Woche|week
der Monat|month
das Jahr|year
das Wochenende|weekend
heute|today
morgen|tomorrow
gestern|yesterday
der Morgen|morning
der Vormittag|late morning
der Mittag|midday
der Nachmittag|afternoon
der Abend|evening
die Nacht|night
der Montag|Monday
der Dienstag|Tuesday
der Mittwoch|Wednesday
der Donnerstag|Thursday
der Freitag|Friday
der Samstag|Saturday
der Sonntag|Sunday
der Januar|January
der Februar|February
der März|March
der April|April
der Mai|May
der Juni|June
der Juli|July
der August|August
der September|September
der Oktober|October
der November|November
der Dezember|December
halb drei|half past two (2:30)
Viertel nach drei|quarter past three
Viertel vor vier|quarter to four
früh|early
spät|late
bald|soon
jetzt|now
immer|always
oft|often
manchmal|sometimes
nie|never
der Termin|appointment
pünktlich|on time
die Verspätung|delay`},
 {id:'essen', name:'Essen & Trinken', w:`das Essen|food; meal
das Frühstück|breakfast
das Mittagessen|lunch
das Abendessen|dinner
das Brot|bread
das Brötchen|bread roll
die Butter|butter
der Käse|cheese
die Wurst|sausage
das Ei|egg
das Fleisch|meat
der Fisch|fish
das Hähnchen|chicken
das Gemüse|vegetables
die Kartoffel|potato
die Tomate|tomato
der Salat|salad
das Obst|fruit
der Apfel|apple
die Banane|banana
der Reis|rice
die Nudeln|pasta
die Suppe|soup
der Kuchen|cake
die Schokolade|chocolate
das Salz|salt
der Zucker|sugar
das Wasser|water
der Kaffee|coffee
der Tee|tea
die Milch|milk
der Saft|juice
das Bier|beer
der Wein|wine
das Getränk|drink
die Flasche|bottle
das Glas|glass
die Tasse|cup
die Speisekarte|menu
die Rechnung|bill (restaurant)
bestellen|to order
schmecken|to taste (good)
der Hunger|hunger
der Durst|thirst`},
 {id:'einkaufen', name:'Einkaufen', w:`das Geschäft|shop
der Supermarkt|supermarket
die Bäckerei|bakery
der Markt|market
das Kaufhaus|department store
die Kasse|checkout, till
der Preis|price
das Angebot|special offer
billig|cheap
teuer|expensive
kosten|to cost
bezahlen|to pay
bar|in cash
die Karte|card
das Geld|money
der Euro|euro
das Kilo|kilo
das Pfund|500 grams
die Kleidung|clothes
die Jacke|jacket
die Hose|trousers
das Hemd|shirt
das Kleid|dress
der Schuh|shoe
die Größe|size
die Farbe|colour
kaufen|to buy
verkaufen|to sell
brauchen|to need
geöffnet|open
geschlossen|closed
rot|red
blau|blue
grün|green
schwarz|black
weiß|white`},
 {id:'wohnen', name:'Wohnen', w:`die Wohnung|flat, apartment
das Haus|house
das Zimmer|room
die Küche|kitchen
das Bad|bathroom
das Schlafzimmer|bedroom
das Wohnzimmer|living room
der Balkon|balcony
der Garten|garden
der Stock|floor (storey)
das Erdgeschoss|ground floor
der Aufzug|lift, elevator
die Treppe|stairs
die Miete|rent
der Vermieter|landlord
der Nachbar|neighbour
die Möbel|furniture
der Tisch|table
der Stuhl|chair
das Bett|bed
der Schrank|cupboard
das Sofa|sofa
der Kühlschrank|fridge
der Herd|cooker, stove
die Waschmaschine|washing machine
die Heizung|heating
das Fenster|window
die Tür|door
der Schlüssel|key
das Licht|light
kaputt|broken
groß|big
klein|small
hell|bright
ruhig|quiet
umziehen|to move house`},
 {id:'stadt', name:'Stadt & Orte', w:`die Stadt|city, town
das Dorf|village
das Zentrum|centre
die Post|post office
die Bank|bank; bench
die Apotheke|pharmacy
das Krankenhaus|hospital
die Praxis|doctor's surgery
die Schule|school
die Universität|university
die Bibliothek|library
das Museum|museum
das Kino|cinema
das Restaurant|restaurant
das Café|café
der Park|park
das Schwimmbad|swimming pool
das Rathaus|town hall
die Polizei|police
die Information|information desk
der Eingang|entrance
der Ausgang|exit
links|left
rechts|right
geradeaus|straight ahead
die Ecke|corner
neben|next to
gegenüber|opposite
weit|far
in der Nähe|nearby`},
 {id:'reisen', name:'Reisen & Verkehr', w:`der Bahnhof|train station
der Zug|train
das Gleis|platform, track
die Fahrkarte|ticket
der Bus|bus
die Haltestelle|stop (bus, tram)
die U-Bahn|underground
die Straßenbahn|tram
das Taxi|taxi
das Auto|car
das Fahrrad|bicycle
der Flughafen|airport
das Flugzeug|plane
der Flug|flight
die Abfahrt|departure
die Ankunft|arrival
abfahren|to leave, depart
ankommen|to arrive
einsteigen|to get on
aussteigen|to get off
umsteigen|to change (trains)
der Koffer|suitcase
das Gepäck|luggage
der Pass|passport
der Ausweis|ID card
das Hotel|hotel
das Einzelzimmer|single room
das Doppelzimmer|double room
die Rezeption|reception
der Urlaub|holiday
die Reise|trip, journey
das Meer|sea
der See|lake
hin und zurück|return (ticket)
einfach|one way; easy`},
 {id:'arbeit', name:'Arbeit & Lernen', w:`die Arbeit|work
arbeiten|to work
die Firma|company
das Büro|office
der Kollege|colleague (m)
die Kollegin|colleague (f)
der Chef|boss
die Pause|break
der Lehrer|teacher (m)
der Arzt|doctor (m)
die Ärztin|doctor (f)
der Koch|cook
der Verkäufer|sales assistant
der Kellner|waiter
der Student|student
die Krankenschwester|nurse
der Ingenieur|engineer
arbeitslos|unemployed
die Stelle|job, position
verdienen|to earn
der Kurs|course
der Unterricht|lessons, class
die Prüfung|exam
lernen|to learn
die Hausaufgabe|homework
der Computer|computer
der Drucker|printer`},
 {id:'freizeit', name:'Freizeit & Wetter', w:`die Freizeit|free time
das Hobby|hobby
der Sport|sport
Fußball spielen|to play football
schwimmen|to swim
wandern|to hike
Rad fahren|to cycle
tanzen|to dance
lesen|to read
das Buch|book
die Musik|music
hören|to listen, hear
fernsehen|to watch TV
der Film|film
das Spiel|game, match
die Party|party
feiern|to celebrate
einladen|to invite
die Einladung|invitation
treffen|to meet
besuchen|to visit
der Ausflug|day trip
das Wetter|weather
die Sonne|sun
der Regen|rain
es regnet|it's raining
der Schnee|snow
kalt|cold
warm|warm
heiß|hot`},
 {id:'koerper', name:'Körper & Gesundheit', w:`der Kopf|head
das Auge|eye
das Ohr|ear
die Nase|nose
der Mund|mouth
der Zahn|tooth
der Hals|neck, throat
der Bauch|stomach, belly
der Rücken|back
der Arm|arm
die Hand|hand
das Bein|leg
der Fuß|foot
krank|ill
gesund|healthy
das Fieber|fever
die Kopfschmerzen|headache
wehtun|to hurt
das Medikament|medicine
die Tablette|tablet, pill
die Krankenkasse|health insurance
müde|tired`},
 {id:'dienst', name:'Post, Bank & Ämter', w:`der Brief|letter
die Briefmarke|stamp
das Paket|parcel
die Postkarte|postcard
der Absender|sender
der Empfänger|recipient
das Konto|bank account
überweisen|to transfer (money)
das Formular|form
ausfüllen|to fill in
ankreuzen|to tick, mark with a cross
unterschreiben|to sign
anmelden|to register
der Schalter|counter
die Öffnungszeiten|opening hours
das Amt|public office
anrufen|to phone
die Nachricht|message
die Ansage|recorded message
die Durchsage|loudspeaker announcement
der Anrufbeantworter|answering machine`},
 {id:'verben', name:'Wichtige Verben', w:`sein|to be
haben|to have
machen|to do, make
gehen|to go (on foot)
fahren|to go (by vehicle), drive
kommen|to come
essen|to eat
trinken|to drink
schlafen|to sleep
aufstehen|to get up
sprechen|to speak
sagen|to say
fragen|to ask
antworten|to answer
verstehen|to understand
wissen|to know (a fact)
kennen|to know (a person, place)
suchen|to look for
finden|to find
nehmen|to take
geben|to give
bringen|to bring
mitbringen|to bring along
abholen|to pick up, collect
helfen|to help
warten|to wait
bleiben|to stay
schreiben|to write
öffnen|to open
schließen|to close
anfangen|to begin
aufhören|to stop
mögen|to like
möchten|would like
können|can, be able to
müssen|must, have to
dürfen|may, be allowed to
wollen|to want
gefallen|to please (es gefällt mir = I like it)`},
 {id:'redemittel', name:'Fragen & Redemittel', w:`Wer?|Who?
Was?|What?
Wo?|Where?
Woher?|Where from?
Wohin?|Where to?
Wann?|When?
Wie?|How?
Wie viel?|How much?
Wie viele?|How many?
Warum?|Why?
Welcher? Welche? Welches?|Which?
Wie bitte?|Pardon?
Entschuldigung!|Excuse me! / Sorry!
Noch einmal, bitte.|Once more, please.
Langsamer, bitte.|More slowly, please.
Wie schreibt man das?|How do you spell that?
Das verstehe ich nicht.|I don't understand that.
Danke schön!|Thank you very much!
Bitte schön!|You're welcome. / Here you are.
Tut mir leid.|I'm sorry.
Natürlich!|Of course!
Gern!|Gladly! / With pleasure!
Hier, bitte.|Here you are.
Viele Grüße|Best wishes (informal ending)
Mit freundlichen Grüßen|Yours sincerely (formal ending)
Sehr geehrte Damen und Herren,|Dear Sir or Madam,
Liebe Anna, / Lieber Tom,|Dear Anna, / Dear Tom, (informal)`}
];

/* GRAMMATIK — only the structures the A1 exam actually needs, each with a short quiz. */
D.grammar = [
 {id:'sein', title:'sein & haben', why:'You need these in every sentence of your self-introduction (Sprechen Teil 1).',
  table:[['ich','bin','habe'],['du','bist','hast'],['er / sie / es','ist','hat'],['wir','sind','haben'],['ihr','seid','habt'],['sie / Sie','sind','haben']], th:['','sein','haben'],
  ex:['Ich bin 30 Jahre alt.','Ich habe zwei Kinder.','Sind Sie verheiratet?'],
  quiz:[{q:'Ich ___ Student.', o:['bin','bist','ist'], a:0},{q:'___ du Geschwister?', o:['Habe','Hast','Hat'], a:1},{q:'Wir ___ aus Kenia.', o:['seid','sind','ist'], a:1},{q:'Herr Weber ___ ein Auto.', o:['hat','habt','haben'], a:0},{q:'Wie alt ___ Sie?', o:['bist','ist','sind'], a:2}]},
 {id:'verben', title:'Verbs in the present tense', why:'Regular endings, plus the few verbs that change their vowel (fahren, essen, sprechen, nehmen, lesen).',
  table:[['ich','wohne','fahre','spreche'],['du','wohnst','fährst','sprichst'],['er / sie / es','wohnt','fährt','spricht'],['wir','wohnen','fahren','sprechen'],['ihr','wohnt','fahrt','sprecht'],['sie / Sie','wohnen','fahren','sprechen']], th:['','wohnen','fahren','sprechen'],
  ex:['Ich wohne in Berlin.','Er spricht Englisch.','Sie fährt mit dem Bus.'],
  quiz:[{q:'Ich ___ aus Eritrea.', o:['komme','kommst','kommt'], a:0},{q:'Was ___ du gern?', o:['esst','isst','esse'], a:1},{q:'Maria ___ Deutsch und Spanisch.', o:['sprecht','sprechen','spricht'], a:2},{q:'___ ihr heute ins Kino?', o:['Geht','Gehen','Gehst'], a:0},{q:'Er ___ den Bus.', o:['nimmt','nehmt','nehme'], a:0}]},
 {id:'fragen', title:'Asking questions', why:'Sprechen Teil 2 gives you 2 points for each question you ask. Two patterns cover everything.',
  table:[['W-Frage','W-word + verb + subject','Wo wohnst du?'],['Ja/Nein-Frage','verb first','Wohnst du in Köln?'],['Höflich (Sie)','verb + Sie','Woher kommen Sie?']], th:['Type','Word order','Example'],
  ex:['Was machst du am Wochenende?','Hast du Kinder?','Wann beginnt der Kurs?'],
  quiz:[{q:'Which question is correct?', o:['Wo du wohnst?','Wo wohnst du?','Du wohnst wo?'], a:1},{q:'___ kommst du? – Aus Syrien.', o:['Wo','Woher','Wohin'], a:1},{q:'___ kostet das? – 5 Euro.', o:['Wie viel','Wie viele','Wann'], a:0},{q:'Which is a yes/no question?', o:['Was trinkst du?','Trinkst du Kaffee?','Warum trinkst du Kaffee?'], a:1},{q:'___ fährst du im Urlaub? – Nach Spanien.', o:['Woher','Wo','Wohin'], a:2}]},
 {id:'artikel', title:'der, die, das · ein, eine · kein', why:'Learn every noun with its article. Use kein/keine to say "no / not any".',
  table:[['der (masc.)','ein','kein','der Tisch'],['die (fem.)','eine','keine','die Lampe'],['das (neut.)','ein','kein','das Auto'],['die (plural)','–','keine','die Kinder']], th:['Definite','Indefinite','Negative','Example'],
  ex:['Das ist ein Stuhl. Der Stuhl ist neu.','Ich habe keine Zeit.','Wir haben kein Auto.'],
  quiz:[{q:'___ Wohnung ist groß.', o:['Der','Die','Das'], a:1},{q:'Das ist ___ Handy.', o:['ein','eine','einen'], a:0},{q:'Ich habe ___ Kinder.', o:['kein','keine','keinen'], a:1},{q:'___ Zug kommt um 8 Uhr.', o:['Der','Die','Das'], a:0},{q:'___ Kind spielt im Garten.', o:['Der','Die','Das'], a:2}]},
 {id:'akk', title:'Accusative: den, einen, keinen', why:'Only the masculine changes. You need it for "Ich möchte einen Kaffee" and "Ich habe einen Bruder".',
  table:[['masc.','der → den','ein → einen','kein → keinen'],['fem.','die','eine','keine'],['neut.','das','ein','kein'],['plural','die','–','keine']], th:['','Definite','Indefinite','Negative'],
  ex:['Ich möchte einen Kaffee.','Ich suche den Bahnhof.','Er hat keinen Bruder.'],
  quiz:[{q:'Ich möchte ___ Tee, bitte.', o:['ein','einen','eine'], a:1},{q:'Hast du ___ Bruder?', o:['einen','ein','eine'], a:0},{q:'Ich kaufe ___ Jacke.', o:['einen','eine','ein'], a:1},{q:'Wir suchen ___ Bahnhof.', o:['der','den','dem'], a:1},{q:'Ich habe ___ Hunger.', o:['kein','keine','keinen'], a:2}]},
 {id:'modal', title:'möchten, können, müssen', why:'The modal verb goes in position 2, the main verb goes to the END. This is how you make polite requests in Sprechen Teil 3.',
  table:[['ich','möchte','kann','muss'],['du','möchtest','kannst','musst'],['er / sie','möchte','kann','muss'],['wir / sie / Sie','möchten','können','müssen']], th:['','möchten','können','müssen'],
  ex:['Ich möchte einen Termin machen.','Können Sie mir bitte helfen?','Ich muss heute arbeiten.'],
  quiz:[{q:'___ Sie bitte das Fenster öffnen?', o:['Können','Kann','Kannst'], a:0},{q:'Ich möchte ein Zimmer ___.', o:['reservieren','reserviere','reserviert'], a:0},{q:'Correct word order:', o:['Ich muss morgen arbeiten.','Ich muss arbeiten morgen.','Ich arbeiten muss morgen.'], a:0},{q:'Er ___ gut schwimmen.', o:['kann','können','kannst'], a:0},{q:'___ du einen Kaffee?', o:['Möchtest','Möchte','Möchten'], a:0}]},
 {id:'trenn', title:'Separable verbs', why:'Very common in announcements and phone messages: aufstehen, anrufen, einkaufen, abholen, aussteigen.',
  table:[['aufstehen','Ich stehe um 7 Uhr auf.'],['anrufen','Ruf mich bitte an!'],['einkaufen','Wir kaufen am Samstag ein.'],['abholen','Kannst du mich abholen?'],['aussteigen','Steigen Sie hier aus.']], th:['Verb','Sentence'],
  ex:['Der Zug fährt um 9 Uhr ab.','Wann kommst du an?','Mit Modalverb: Ich muss früh aufstehen.'],
  quiz:[{q:'Ich ___ um 6 Uhr ___.', o:['stehe … auf','aufstehe … –','stehe … an'], a:0},{q:'Kannst du mich morgen ___?', o:['holen ab','abholen','ab holen'], a:1},{q:'Der Bus ___ um 8 Uhr ___.', o:['fährt … ab','abfährt … –','fahrt … ab'], a:0},{q:'___ Sie mich bitte ___!', o:['Rufen … an','Anrufen … –','Ruft … an'], a:0},{q:'Wir ___ am Samstag ___.', o:['kaufen … ein','einkaufen … –','kauft … ein'], a:0}]},
 {id:'zeit', title:'Time: um, am, im · Uhrzeit', why:'Times, days and dates are the most common correct answers in Hören.',
  table:[['um','clock time','um 8 Uhr, um halb neun'],['am','day, date, part of day','am Montag, am 3. Mai, am Abend'],['im','month, season','im Juli, im Sommer'],['von … bis','from … to','von 9 bis 17 Uhr']], th:['Word','Use','Example'],
  ex:['halb neun = 8:30 (half to nine!)','Viertel nach drei = 3:15','Viertel vor vier = 3:45'],
  quiz:[{q:'Der Kurs beginnt ___ 9 Uhr.', o:['am','um','im'], a:1},{q:'Ich habe ___ Freitag Zeit.', o:['am','um','im'], a:0},{q:'Wir fahren ___ August nach Italien.', o:['am','um','im'], a:2},{q:'"halb sieben" is …', o:['7:30','6:30','6:50'], a:1},{q:'"Viertel vor zehn" is …', o:['10:15','9:45','9:15'], a:1}]},
 {id:'imp', title:'Requests and the imperative', why:'Sprechen Teil 3 wants a request (Bitte), not an information question.',
  table:[['Sie','Öffnen Sie bitte das Fenster!'],['du','Öffne bitte das Fenster!'],['Polite question','Können Sie bitte das Fenster öffnen?'],['Order','Einen Kaffee, bitte!']], th:['Form','Example'],
  ex:['Gib mir bitte das Salz!','Kannst du mir bitte helfen?','Darf ich bitte telefonieren?'],
  quiz:[{q:'Request with Sie:', o:['Sie öffnen das Fenster?','Öffnen Sie bitte das Fenster!','Öffnen du das Fenster!'], a:1},{q:'Request with du (geben):', o:['Gib mir bitte das Buch!','Gibst mir bitte das Buch!','Geben mir das Buch!'], a:0},{q:'Which one is a request (Bitte)?', o:['Wo ist das Salz?','Haben Sie Salz?','Geben Sie mir bitte das Salz!'], a:2},{q:'___ ich bitte mal telefonieren?', o:['Darf','Muss','Darfst'], a:0},{q:'Request with du (machen):', o:['Mach bitte die Tür zu!','Machst bitte die Tür zu!','Machen bitte die Tür zu!'], a:0}]},
 {id:'poss', title:'mein, dein, Ihr · nicht or kein', why:'For talking about your family, and for saying no correctly.',
  table:[['ich','mein / meine'],['du','dein / deine'],['Sie','Ihr / Ihre'],['er','sein / seine'],['sie','ihr / ihre']], th:['Person','Possessive'],
  ex:['Mein Bruder wohnt in Hamburg. Meine Schwester auch.','Ich habe keinen Garten. (noun → kein)','Ich wohne nicht in Berlin. (everything else → nicht)'],
  quiz:[{q:'Das ist ___ Mutter. (ich)', o:['mein','meine','meinen'], a:1},{q:'Wie ist ___ Name? (Sie)', o:['Ihr','Ihre','dein'], a:0},{q:'Ich trinke ___ Kaffee.', o:['nicht','kein','keinen'], a:2},{q:'Er kommt heute ___.', o:['nicht','kein','keine'], a:0},{q:'Ist das ___ Handy? (du)', o:['dein','deine','deinen'], a:0}]},
 {id:'praep', title:'Useful fixed phrases with prepositions', why:'Learn these as chunks. They appear in nearly every listening and reading text.',
  table:[['mit dem Bus / Zug / Auto','by bus / train / car'],['zu Fuß','on foot'],['zum Arzt / zum Bahnhof','to the doctor / station'],['zur Post / zur Arbeit','to the post office / to work'],['beim Arzt','at the doctor\'s'],['im Supermarkt / im Büro','in the supermarket / office'],['nach Hause / zu Hause','(going) home / at home'],['nach Berlin / aus Berlin','to Berlin / from Berlin']], th:['Phrase','Meaning'],
  ex:['Ich fahre mit dem Bus zur Arbeit.','Ich bin beim Arzt.','Ich gehe jetzt nach Hause.'],
  quiz:[{q:'Ich fahre ___ Zug.', o:['mit dem','mit der','mit den'], a:0},{q:'Ich gehe ___ Post.', o:['zum','zur','zu'], a:1},{q:'Am Abend bin ich ___.', o:['nach Hause','zu Hause','zum Haus'], a:1},{q:'Sie fliegt ___ Wien.', o:['zu','nach','in'], a:1},{q:'Er ist ___ Arzt.', o:['beim','bei','zum'], a:0}]}
];

/* 25-day plan: Fri 30 Oct → Mon 23 Nov 2026. Exam: Tue 24 Nov 2026. */
D.plan = {
 start:'2026-10-30', exam:'2026-11-24',
 weeks:[
  {n:1, title:'Foundations for the exam', note:'Your self-introduction, numbers, times and the core words — the building blocks every exam part tests.'},
  {n:2, title:'Every task type, then Mock A', note:'One or two exam tasks a day so you know exactly what each Teil looks like. Mock A on Thursday shows where you stand.'},
  {n:3, title:'Speaking week + the official Modellsatz', note:'Daily speaking with exam cards and short messages, the official Goethe model test, and Mock B.'},
  {n:4, title:'Final mocks and the last day', note:'Two more full exams, then a light last day. Exam on Tuesday.'}
 ],
 days:[
  ['tour','s1','v:person','g:sein','num'],
  ['v:zeit','g:verben','s1b','num','h1:1'],
  ['v:essen','g:fragen','l3:1','h2:1','rev'],
  ['v:einkaufen','g:artikel','h3:1','l1:1','rev'],
  ['v:wohnen','g:akk','l2:1','w1:0','rev'],
  ['v:stadt','g:modal','s2:essen','s3','rev'],
  ['v:reisen','g:zeit','w2:0','num','rev'],
  ['v:arbeit','h1:2','h2:2','g:trenn','rev'],
  ['v:freizeit','h3:2','l1:2','s2:einkaufen','rev'],
  ['v:koerper','l2:2','l3:2','g:imp','rev'],
  ['v:dienst','w1:1','w2:1','s2:wochenende','rev'],
  ['v:verben','g:poss','s1','s3','w2:2','rev'],
  ['v:redemittel','g:praep','w1:2','s2:freizeit','rev'],
  ['mock:A'],
  ['weak','s2:wohnen','s3','w2:3','rev'],
  ['s2:reisen','s1b','w2:4','h3:1','rev'],
  ['s2:arbeit','s3','w1:3','l2:2','rev'],
  ['s2:familie','w2:5','h2:2','weak','rev'],
  ['off:modell','rev'],
  ['mock:B'],
  ['weak','w2:6','s3','s1','rev'],
  ['off:ue1','rev'],
  ['mock:C'],
  ['off:ue2','rev'],
  ['s1','w2:7','eve','rev']
 ]
};

D.mocks = {
 A:{name:'Mock exam A', set:3, w1:4, w2:8},
 B:{name:'Mock exam B', set:4, w1:5, w2:9},
 C:{name:'Mock exam C (mixed)', set:0, w1:-1, w2:10}
};
D.official = {
 url:'https://www.goethe.de/ins/cz/en/spr/prf/gzsd1/ueb.html',
 modell:{name:'Official Goethe Modellsatz', note:'The model test from Goethe, with its own listening audio (about 17 min) and a video of a real speaking exam (about 14 min).'},
 ue1:{name:'Official Goethe Übungssatz 01', note:'Practice set 01 from Goethe, with its own listening audio (about 19 min).'},
 ue2:{name:'Official Goethe Übungssatz 02', note:'Practice set 02 from Goethe, with its own listening audio (about 19 min).'}
};

'use strict';
/* ================= utilities ================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function el(html) { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = a => a[Math.floor(Math.random() * a.length)];
const pad = n => String(n).padStart(2, '0');
const normA = s => String(s || '').toLowerCase().trim().replace(/[\s.,\-\/:;]+/g, '');
const fmtPts = n => (Math.round(n * 10) / 10).toString().replace('.', ',');

const IC = {
  x: '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 5l14 14M19 5L5 19"/></svg>',
  check: '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6"/></svg>',
  gear: '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  play: '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.4-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5z"/></svg>',
  back: '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
  arrow: '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  spark: '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9z"/></svg>',
  today: '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
  plan: '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/></svg>',
  practice: '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 7l3 3"/></svg>',
  words: '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="13" height="14" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v12"/></svg>',
  exam: '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l4 4v14H6z"/><path d="M9 12l2 2 4-4M9 17h6"/></svg>',
  ext: '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>'
};

/* ================= German numbers & letters ================= */
const UNITS = ['null','eins','zwei','drei','vier','fünf','sechs','sieben','acht','neun','zehn','elf','zwölf','dreizehn','vierzehn','fünfzehn','sechzehn','siebzehn','achtzehn','neunzehn'];
const TENS = ['','','zwanzig','dreißig','vierzig','fünfzig','sechzig','siebzig','achtzig','neunzig'];
function numWords(n) {
  if (n < 20) return UNITS[n];
  if (n < 100) { const u = n % 10, t = Math.floor(n / 10); return (u ? (u === 1 ? 'ein' : UNITS[u]) + 'und' : '') + TENS[t]; }
  const h = Math.floor(n / 100), r = n % 100; return (h === 1 ? 'hundert' : UNITS[h] + 'hundert') + (r ? numWords(r) : '');
}
function ordDat(n) { // "am dritten"
  const special = {1:'erst',3:'dritt',7:'siebt',8:'acht'};
  const stem = special[n] || (n < 20 ? numWords(n) + 't' : numWords(n) + 'st');
  return stem + 'en';
}
const MONTHS = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
const LETTER = {a:'A',b:'Be',c:'Ze',d:'De',e:'E',f:'Eff',g:'Ge',h:'Ha',i:'I',j:'Jott',k:'Ka',l:'Ell',m:'Emm',n:'Enn',o:'O',p:'Pe',q:'Ku',r:'Err',s:'Ess',t:'Te',u:'U',v:'Vau',w:'We',x:'Iks',y:'Ypsilon',z:'Zett','ä':'Ä','ö':'Ö','ü':'Ü','ß':'Eszett'};
const spellParts = w => [...String(w)].filter(c => LETTER[c.toLowerCase()]).map(c => [c.toUpperCase(), LETTER[c.toLowerCase()]]);
const spellSay = w => spellParts(w).map(p => p[1]).join(', ');
const spellHTML = w => `<div class="spell">${spellParts(w).map(([c, n]) => `<span><b>${esc(c)}</b><small>${esc(n)}</small></span>`).join('')}</div>`;

/* ================= state & storage ================= */
const LS_KEY = 'sd1-progress-v1';
const DEF = () => ({ v: 1, upd: 0, done: {}, log: [], best: {}, srs: {}, intro: {}, mocks: [], rate: 0.9, dir: 'de' });
let S = DEF();
const store = { mode: 'local', db: null, ref: null, pushing: false, again: false, timer: null };
const lsGet = () => { try { const r = localStorage.getItem(LS_KEY); return r ? JSON.parse(r) : null; } catch (e) { return null; } };
const lsSet = () => { try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) {} };
/* Everything loaded from storage, the cloud or a pasted backup code goes through
   clean(): unknown keys are dropped and every value is forced to the expected type,
   so a tampered backup cannot inject markup into the page. */
const num = (v, lo, hi, d = 0) => { v = Number(v); return Number.isFinite(v) ? Math.min(hi, Math.max(lo, v)) : d; };
const str = (v, max) => typeof v === 'string' ? v.slice(0, max) : '';
const KEY = /^[a-z0-9]{1,6}(:[a-z0-9-]{1,14})?$/;
function clean(o) {
  const d = DEF(); if (!o || typeof o !== 'object') return d;
  d.upd = num(o.upd, 0, 1e14); d.rate = [0.8, 0.9, 1].includes(o.rate) ? o.rate : 0.9; d.dir = o.dir === 'en' ? 'en' : 'de';
  if (o.done && typeof o.done === 'object') for (const [k, v] of Object.entries(o.done)) { const m = k.match(/^(\d{1,2})\|(.+)$/); if (m && KEY.test(m[2])) d.done[k] = num(v, 0, 1e14); }
  if (Array.isArray(o.log)) d.log = o.log.slice(-600).filter(x => x && 'HLWSG'.includes(x.s) && String(x.s).length === 1).map(x => ({ s: x.s, k: KEY.test(x.k) ? x.k : '', c: num(x.c, 0, 100), n: num(x.n, 1, 100, 1), t: num(x.t, 0, 1e14) }));
  if (o.best && typeof o.best === 'object') for (const [k, v] of Object.entries(o.best)) if (KEY.test(k) && v) d.best[k] = { c: num(v.c, 0, 100), n: num(v.n, 1, 100, 1) };
  if (o.srs && typeof o.srs === 'object') for (const [k, v] of Object.entries(o.srs)) if (/^[a-z]{2,12}:\d{1,3}$/.test(k) && v) d.srs[k] = { b: Math.round(num(v.b, 1, 5, 1)), d: Math.round(num(v.d, 0, 1e6)) };
  if (o.intro && typeof o.intro === 'object') for (const k of ['first', 'last', 'age', 'land', 'city', 'langs', 'job', 'hobby']) if (o.intro[k]) d.intro[k] = str(o.intro[k], 80);
  if (Array.isArray(o.mocks)) d.mocks = o.mocks.slice(-50).filter(r => r && /^(A|B|C|off:(modell|ue1|ue2))$/.test(r.id)).map(r => { const q = v => v == null ? null : num(v, 0, 15); return { id: r.id, t: num(r.t, 0, 1e14), h: q(r.h), l: q(r.l), w: q(r.w), s: q(r.s), total: num(r.total, 0, 100) }; });
  return d;
}
const adopt = o => { S = clean(o); };

function save() {
  S.upd = Date.now();
  if (S.log.length > 600) S.log = S.log.slice(-600);
  lsSet();
  clearTimeout(store.timer);
  store.timer = setTimeout(push, 1200);
}
async function push() {
  if (!store.ref) return;
  if (store.pushing) { store.again = true; return; }
  store.pushing = true;
  try { await store.ref.set(JSON.parse(JSON.stringify(S))); store.mode = 'cloud'; }
  catch (e) { if (e && e.code === 'invalid_argument') { store.ref = null; store.mode = 'local'; } }
  store.pushing = false; renderSync();
  if (store.again) { store.again = false; push(); }
}
async function pull(rerender) {
  if (!store.ref) return;
  try {
    const snap = await store.ref.get();
    if (snap.exists) {
      const remote = snap.data();
      if ((remote.upd || 0) > (S.upd || 0)) { adopt(remote); lsSet(); if (rerender && !session) route(); }
      else if ((S.upd || 0) > (remote.upd || 0)) push();
    } else if (S.upd) push();
    store.mode = 'cloud';
  } catch (e) { /* stay local */ }
  renderSync();
}
async function initStore() {
  adopt(lsGet());
  const C = window.claude;
  if (!C || !C.use) return;
  try {
    const [db, user, sample] = await Promise.all([C.use('db'), C.use('user'), C.use('sample')]);
    SAMPLE = sample || null;
    const uid = user ? await user.id() : null;
    if (db && uid) { store.ref = db.doc('data/users/' + uid + '/progress'); await pull(true); }
    if (!session) route();
  } catch (e) {}
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') pull(true); });
}
function renderSync() {
  const cloud = store.mode === 'cloud';
  ['#sync', '#sync-m'].forEach(id => { const n = $(id); if (!n) return;
    n.className = 'sync' + (cloud ? ' cloud' : '');
    n.innerHTML = `<i aria-hidden="true"></i><span>${cloud ? 'Synced with your Claude account' : 'Saved on this device'}</span>`;
    n.title = cloud ? 'Progress follows you between phone and computer' : 'Progress is saved in this browser. Use Settings to back it up or move it.'; });
}

/* ================= Claude checks (sample capability) ================= */
let SAMPLE = null;
const claudeErr = e => ({
  not_granted: 'Claude checks are switched off for this page. Compare with the model answer instead.',
  sampling_disabled: 'Claude checks are not available for this account.',
  rate_limited: 'Too many checks right now. Try again in a minute.',
  session_expired: 'Sign in to Claude again, then retry.',
  invalid_json: 'The feedback could not be read. Try once more.',
  refused: 'Claude could not check this text. Try rewording it.'
}[e && e.code] || 'The check did not work this time. Try again.');
async function claudeJSON(prompt, tier) {
  if (!SAMPLE) throw { code: 'not_granted' };
  return SAMPLE.json(prompt, { modelTier: tier || 'default' });
}

/* ================= speech (browser voices) ================= */
const TTS = {
  ok: false, has: 'speechSynthesis' in window, de: [], fem: null, male: null,
  pref: (() => { try { return localStorage.getItem('sd1-voice') || ''; } catch (e) { return ''; } })(),
  setPref(name) { this.pref = name; try { localStorage.setItem('sd1-voice', name); } catch (e) {} this.load && this.load(); },
  init() {
    if (!this.has) return;
    const load = () => {
      const v = speechSynthesis.getVoices();
      this.de = v.filter(x => /^de([-_]|$)/i.test(x.lang));
      const fRe = /anna|helena|katja|marlene|petra|vicki|hedda|female|elke|sabine|klara|seraphina|katharina|louisa|gisela|amala|frau/i;
      const mRe = /markus|yannick|hans|stefan|conrad|male|jonas|florian|killian|bernd|ralf|christoph|martin|viktor|mann/i;
      const deDE = this.de.filter(x => /de[-_]de/i.test(x.lang));
      const pool = deDE.length ? deDE : this.de;
      this.fem = pool.find(x => fRe.test(x.name) && !/male/i.test(x.name.replace(/female/i, ''))) || pool[0] || null;
      this.male = pool.find(x => mRe.test(x.name) && x !== this.fem) || pool.find(x => x !== this.fem) || this.fem;
      const chosen = this.pref && this.de.find(x => x.name === this.pref);
      if (chosen) { const other = this.de.find(x => x !== chosen && /de[-_]de/i.test(x.lang)) || this.de.find(x => x !== chosen) || chosen; if (mRe.test(chosen.name)) { this.male = chosen; this.fem = other; } else { this.fem = chosen; this.male = other; } }
      this.ok = this.de.length > 0;
      const b = $('#voice-banner'); if (b) b.hidden = this.ok;
    };
    this.load = load; load(); speechSynthesis.onvoiceschanged = load;
    setTimeout(load, 800);
  },
  speak(lines, opt = {}) {
    if (!this.has) { opt.onend && opt.onend(); return; }
    speechSynthesis.cancel();
    const queue = [];
    lines.forEach(([sp, txt]) => String(txt).replace(/([.!?])\s+/g, '$1|').split('|').forEach(t => t.trim() && queue.push([sp, t])));
    let i = 0;
    const next = () => {
      if (i >= queue.length) { opt.onend && opt.onend(); return; }
      const [sp, txt] = queue[i++];
      const u = new SpeechSynthesisUtterance(txt);
      u.lang = 'de-DE';
      const same = this.male === this.fem;
      const v = sp === 'm' ? this.male : this.fem;
      if (v) u.voice = v;
      u.rate = S.rate || 0.9;
      u.pitch = same ? (sp === 'm' ? 0.75 : sp === 'f' ? 1.2 : 1) : 1;
      let fired = false;
      const go = () => { if (fired) return; fired = true; setTimeout(next, i < queue.length && queue[i][0] !== sp ? 450 : 180); };
      u.onend = go; u.onerror = go;
      speechSynthesis.speak(u);
    };
    next();
  },
  say(text, sp = 'f', onend) { this.speak([[sp, text]], { onend }); },
  stop() { if (this.has) speechSynthesis.cancel(); }
};

/* ================= dates & plan ================= */
const START = new Date(2026, 9, 30);
const NDAYS = D.plan.days.length;
const EXAM_DAY = NDAYS + 1;
function dnum(d = new Date()) { const t = new Date(d.getFullYear(), d.getMonth(), d.getDate()); return Math.round((t - START) / 864e5) + 1; }
function dateOf(n) { const d = new Date(START); d.setDate(d.getDate() + n - 1); return d; }
const fmtDay = d => d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
const epochDay = () => { const d = new Date(); return Math.floor(new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime() / 864e5); };
const isDone = (day, k) => !!S.done[day + '|' + k];
function complete(k, day) {
  const today = Math.min(Math.max(dnum(), 1), NDAYS);
  if (day && D.plan.days[day - 1] && D.plan.days[day - 1].includes(k)) { S.done[day + '|' + k] = Date.now(); return; }
  for (let d = 1; d <= today; d++) if (D.plan.days[d - 1].includes(k) && !isDone(d, k)) { S.done[d + '|' + k] = Date.now(); return; }
  // unique tasks done ahead of schedule count for their planned day; repeating ones (review, numbers…) don't
  if (/^(rev|num|s1|s1b|s3|weak)$/.test(k)) return;
  for (let d = today + 1; d <= NDAYS; d++) if (D.plan.days[d - 1].includes(k) && !isDone(d, k)) { S.done[d + '|' + k] = Date.now(); return; }
}
function finishTask(ctx) { (ctx && ctx.keys || []).forEach(k => complete(k, ctx.day)); save(); }
function logAttempt(sec, k, c, n) {
  S.log.push({ s: sec, k, c, n, t: Date.now() });
  const b = S.best[k]; if (!b || c / n > b.c / b.n) S.best[k] = { c, n };
  save();
}

/* ================= words ================= */
const WORDS = [];
const TOPICS = D.topics.map(t => {
  const words = t.w.trim().split('\n').map((line, i) => {
    const [de, en] = line.split('|'); const m = de.match(/^(der|die|das) /);
    const w = { id: t.id + ':' + i, de: de.trim(), en: (en || '').trim(), topic: t.id, art: m ? m[1] : '' };
    WORDS.push(w); return w;
  });
  return { id: t.id, name: t.name, words };
});
const topicById = id => TOPICS.find(t => t.id === id);
const INTERVAL = { 1: 1, 2: 2, 3: 4, 4: 7, 5: 14 };
const deHTML = w => w.art ? `<span class="art-${w.art}">${esc(w.art)}</span> ${esc(w.de.slice(w.art.length + 1))}` : esc(w.de);
const dueWords = () => { const t = epochDay(); return WORDS.filter(w => S.srs[w.id] && S.srs[w.id].d <= t); };
const seenCount = t => t.words.filter(w => S.srs[w.id]).length;

/* fill placeholders in model answers with the learner's own details */
function fill(s) {
  const i = S.intro || {};
  return String(s).replace(/\{name\}/g, (i.first ? i.first + (i.last ? ' ' + i.last : '') : 'Alex')).replace(/\{land\}/g, i.land || 'Kenia');
}

/* ================= score estimate ================= */
const SECS = { H: 'Hören', L: 'Lesen', W: 'Schreiben', S: 'Sprechen' };
function sectionFrac(sec) {
  const rows = S.log.filter(x => x.s === sec).slice(-10);
  if (!rows.length) return null;
  const c = rows.reduce((a, x) => a + x.c, 0), n = rows.reduce((a, x) => a + x.n, 0);
  return n ? c / n : null;
}
function estimate() {
  const r = {}; let total = 0, have = 0;
  for (const k of Object.keys(SECS)) { const f = sectionFrac(k); r[k] = f; if (f != null) { total += f * 25; have++; } }
  r.total = total; r.have = have; return r;
}

/* ================= shell, routing, sessions ================= */
let session = null;
const main = () => $('#main');
const TABS = [
  ['heute', 'Today', IC.today], ['plan', 'Plan', IC.plan], ['ueben', 'Practice', IC.practice], ['woerter', 'Words', IC.words], ['pruefung', 'Exams', IC.exam], ['einstellungen', 'Settings', IC.gear]
];
function currentTab() { const h = (location.hash || '').replace('#', ''); return TABS.some(t => t[0] === h) ? h : 'heute'; }
const DE_DATE = new Intl.DateTimeFormat('de-DE', { weekday: 'long', day: 'numeric', month: 'long' });
const EN_SHORT = new Intl.DateTimeFormat('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
function predicate(total) { return total >= 90 ? 'sehr gut' : total >= 80 ? 'gut' : total >= 70 ? 'befriedigend' : total >= 60 ? 'ausreichend' : 'nicht bestanden'; }

function renderNav() {
  const cur = session ? null : currentTab();
  const side = TABS.map(([id, label, ic]) => `<li><a href="#${id}" ${cur === id ? 'aria-current="page"' : ''}>${ic}<span>${label}</span></a></li>`).join('');
  const bot = TABS.filter(t => t[0] !== 'einstellungen').map(([id, label, ic]) => `<a href="#${id}" ${cur === id ? 'aria-current="page"' : ''}>${ic}<span>${label}</span></a>`).join('');
  $('#nav-side').innerHTML = side; $('#nav-bot').innerHTML = bot;
  const left = Math.max(0, EXAM_DAY - dnum());
  $('#side-count').innerHTML = left > 0 ? `<span class="hand num">${left}</span><span>${left === 1 ? 'day' : 'days'} until your exam on Tuesday, 24 November</span>` : `<span>${left === 0 ? 'Today is the exam. Viel Erfolg!' : 'Exam done.'}</span>`;
  $('#mt-gear').innerHTML = IC.gear;
  $('#mt-count').innerHTML = left > 0 ? `<span class="hand num">${left}</span>${left === 1 ? 'day' : 'days'} left` : '';
}
async function guardedLeave() {
  if (session && session.guard && session.guard()) return confirmDialog('Leave the mock exam?', 'Your answers are not saved until you finish all four parts.', 'Leave the exam');
  return true;
}
document.addEventListener('click', async e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a || a.classList.contains('skip')) return;
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
  e.preventDefault();
  if (!(await guardedLeave())) return;
  const id = a.getAttribute('href').slice(1);
  if (session) closeSession(true);
  if (location.hash === '#' + id) route(); else location.hash = id;
});
window.addEventListener('hashchange', () => { if (session) closeSession(true); route(); window.scrollTo(0, 0); });
window.addEventListener('beforeunload', e => { if (session && session.guard && session.guard()) { e.preventDefault(); e.returnValue = ''; } });

function route() {
  if (session) return;
  document.body.classList.remove('in-session');
  renderNav();
  const m = main(); m.innerHTML = '';
  ({ heute: viewToday, plan: viewPlan, ueben: viewPractice, woerter: viewWords, pruefung: viewExam, einstellungen: viewSettings })[currentTab()](m);
}
function toast(msg) {
  const t = el(`<div class="toast">${esc(msg)}</div>`); $('#toasts').append(t);
  setTimeout(() => t.remove(), 2800);
}
function confirmDialog(title, text, yes) {
  const d = $('#confirm');
  if (!d || typeof d.showModal !== 'function') return Promise.resolve(true);
  $('#cf-t').textContent = title; $('#cf-p').textContent = text; $('#cf-yes').textContent = yes || 'Leave';
  return new Promise(res => {
    const done = v => { d.close(); $('#cf-yes').onclick = $('#cf-no').onclick = null; d.oncancel = null; res(v); };
    $('#cf-yes').onclick = () => done(true); $('#cf-no').onclick = () => done(false); d.oncancel = e => { e.preventDefault(); done(false); };
    d.showModal(); $('#cf-no').focus();
  });
}
function openSession({ title, guard }) {
  TTS.stop(); clearInterval(window.__timer);
  session = { title, guard };
  document.body.classList.add('in-session');
  renderNav();
  const m = main(); m.innerHTML = '';
  const head = el(`<div class="sess-head"><button class="btn quiet" type="button" id="sess-back">${IC.back}<span>Back</span></button><h2>${esc(title)}</h2><span class="timer" hidden></span></div>`);
  const prog = el(`<div class="sess-prog" hidden role="progressbar" aria-label="Progress" aria-valuemin="0" aria-valuemax="100"><span style="width:0"></span></div>`);
  const body = el('<div class="stack" style="gap:26px"></div>');
  m.append(head, prog, body);
  $('#sess-back', head).onclick = async () => { if (await guardedLeave()) closeSession(); };
  window.scrollTo(0, 0); m.focus({ preventScroll: true });
  const timerEl = $('.timer', head);
  return {
    body, head,
    progress(f) { prog.hidden = false; $('span', prog).style.width = (f * 100).toFixed(1) + '%'; prog.setAttribute('aria-valuenow', Math.round(f * 100)); },
    countdown(sec, onEnd) {
      clearInterval(window.__timer); timerEl.hidden = false; let left = sec;
      const draw = () => { timerEl.textContent = `${Math.floor(left / 60)}:${pad(left % 60)}`; timerEl.classList.toggle('low', left < 120); };
      draw();
      window.__timer = setInterval(() => { left--; draw(); if (left <= 0) { clearInterval(window.__timer); onEnd && onEnd(); } }, 1000);
    },
    stopwatch() {
      clearInterval(window.__timer); timerEl.hidden = false; let s = 0;
      const draw = () => { timerEl.textContent = `${Math.floor(s / 60)}:${pad(s % 60)}`; };
      draw(); window.__timer = setInterval(() => { s++; draw(); }, 1000);
    },
    stopTimer() { clearInterval(window.__timer); }
  };
}
function closeSession(silent) {
  TTS.stop(); clearInterval(window.__timer); session = null;
  if (!silent) route();
}
function instrNode(de, en) { return el(`<div class="instr"><p class="de" lang="de">${esc(de)}</p><p class="en">${esc(en)}</p></div>`); }
const X_MARK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>';

/* ================= task registry ================= */
function taskInfo(k) {
  const [t, a] = k.split(':');
  switch (t) {
    case 'tour': return { title: 'How the exam works', sub: 'The four parts, the timing and the pass mark', min: 10, run: c => showTour(c) };
    case 'v': { const tp = topicById(a); return { title: `New words: ${tp.name}`, sub: `${tp.words.length} flashcards`, min: 15, run: c => learnTopic(a, c) }; }
    case 'rev': return { title: 'Flashcard review', sub: 'The words that are due today', min: 10, run: c => reviewCards(c) };
    case 'g': { const g = D.grammar.find(x => x.id === a); return { title: `Grammar: ${g.title}`, sub: 'Short lesson, then 5 questions', min: 10, run: c => grammarLesson(a, c) }; }
    case 'h1': return { title: `Hören Teil 1, set ${a}`, sub: '6 short conversations, heard twice', min: 10, run: c => hoerenDrill(1, +a, c) };
    case 'h2': return { title: `Hören Teil 2, set ${a}`, sub: '4 announcements, heard only once', min: 6, run: c => hoerenDrill(2, +a, c) };
    case 'h3': return { title: `Hören Teil 3, set ${a}`, sub: '5 phone messages, heard twice', min: 8, run: c => hoerenDrill(3, +a, c) };
    case 'l1': return { title: `Lesen Teil 1, set ${a}`, sub: '2 short e-mails, richtig or falsch', min: 8, run: c => lesenDrill(1, +a, c) };
    case 'l2': return { title: `Lesen Teil 2, set ${a}`, sub: '5 situations, choose ad a or b', min: 8, run: c => lesenDrill(2, +a, c) };
    case 'l3': return { title: `Lesen Teil 3, set ${a}`, sub: '5 signs and notices, richtig or falsch', min: 6, run: c => lesenDrill(3, +a, c) };
    case 'w1': { const f = D.schreiben.t1[+a]; return { title: `Schreiben Teil 1: ${f.title}`, sub: 'Fill in a form, 5 points', min: 8, run: c => formDrill(+a, c) }; }
    case 'w2': { const w = D.schreiben.t2[+a]; return { title: 'Schreiben Teil 2: a short message', sub: w.s.length > 74 ? w.s.slice(0, 72) + '…' : w.s, min: 12, run: c => writeDrill(+a, c) }; }
    case 's1': return { title: 'Sprechen Teil 1: introduce yourself', sub: 'Build, hear and rehearse your introduction', min: 10, run: c => introDrill(c) };
    case 's1b': return { title: 'Spelling (Buchstabieren)', sub: 'Hear German letters, write the word', min: 8, run: c => spellDrill(c) };
    case 's2': return { title: `Sprechen Teil 2: „${D.sprechen.t2[a].name}“`, sub: 'Ask and answer with word cards', min: 10, run: c => t2Drill(a, c) };
    case 's3': return { title: 'Sprechen Teil 3: requests', sub: 'Make a polite request from a picture card', min: 10, run: c => t3Drill(c) };
    case 'num': return { title: 'Numbers, prices and times', sub: 'Hear it, type it. These are most Hören answers', min: 8, run: c => numDrill(c) };
    case 'mock': return { title: D.mocks[a].name, sub: 'The full exam under real timing', min: 80, big: true, run: c => mockExam(a, c) };
    case 'off': return { title: D.official[a].name, sub: 'Goethe PDF and audio, then log your score here', min: 80, big: true, run: c => officialPaper(a, c) };
    case 'weak': return { title: 'Fix your weakest part', sub: weakLabel(), min: 15, run: c => weakDrill(c) };
    case 'eve': return { title: 'Exam-day checklist', sub: 'What to bring and how tomorrow works', min: 5, run: c => eveChecklist(c) };
  }
  return { title: k, sub: '', min: 5, run: () => {} };
}
function weakest() {
  const e = estimate(); let best = null, val = 2;
  for (const k of ['H', 'L', 'W', 'S']) { const f = e[k] == null ? -1 : e[k]; if (f < val) { val = f; best = k; } }
  return best;
}
const weakLabel = () => `Right now that is ${SECS[weakest()]}`;
const startTask = (k, day) => taskInfo(k).run({ day, keys: [k] });


/* ================= install as an app (GitHub Pages build) ================= */
let INSTALL_EVT = null;
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); INSTALL_EVT = e; if (!session) route(); });
window.addEventListener('appinstalled', () => { INSTALL_EVT = null; toast('Installed. Open it from your home screen.'); if (!session) route(); });
const isStandalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
function installCard(where) {
  if (window.claude || isStandalone() || location.protocol !== 'https:') return null;
  if (where === 'today') { try { if (localStorage.getItem('sd1-install-later') === '1') return null; } catch (e) {} }
  const SHARE = '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px"><path d="M12 3v12M7 8l5-5 5 5"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/></svg>';
  let body;
  if (INSTALL_EVT) body = `<p class="muted">Put the app on your home screen. It opens full screen and works without internet.</p><div class="row"><button class="btn primary" type="button" data-a="install">Install app</button>${where === 'today' ? '<button class="btn quiet" type="button" data-a="later">Not now</button>' : ''}</div>`;
  else if (isIOS()) body = `<ol class="small" style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:4px"><li>Open this page in <b>Safari</b>.</li><li>Tap the Share button ${SHARE} at the bottom of the screen.</li><li>Scroll down and tap <b>Add to Home Screen</b>, then <b>Add</b>.</li></ol>${where === 'today' ? '<div class="row"><button class="btn quiet" type="button" data-a="later">Got it</button></div>' : ''}`;
  else if (where === 'today') return null;
  else body = `<p class="small muted">Open your browser’s menu and choose <b>Install app</b> or <b>Add to Home screen</b>. On Android, use Chrome.</p>`;
  const n = el(`<section class="next" style="grid-template-columns:1fr" aria-label="Install the app"><div class="stack" style="gap:8px"><h2>Install it on your phone</h2>${body}</div></section>`);
  const ib = $('[data-a=install]', n); if (ib) ib.onclick = async () => { const ev = INSTALL_EVT; if (!ev) return; ev.prompt(); try { await ev.userChoice; } catch (e) {} INSTALL_EVT = null; route(); };
  const lb = $('[data-a=later]', n); if (lb) lb.onclick = () => { try { localStorage.setItem('sd1-install-later', '1'); } catch (e) {} n.remove(); };
  return n;
}

/* ================= TODAY ================= */
function scaleHTML(e) {
  const seg = (f, cls) => f == null ? '' : `<span class="${cls}" style="width:${(f * 25).toFixed(1)}%"></span>`;
  return `<div class="scale" role="img" aria-label="Estimated ${Math.round(e.total)} of 100 points, ${predicate(e.total)}"><i></i><i></i><i></i><i></i><i></i>
    <div class="fill" style="width:100%">${seg(e.H, 'c-h')}${seg(e.L, 'c-l')}${seg(e.W, 'c-w')}${seg(e.S, 'c-s')}</div></div>
  <div class="scale-labels" aria-hidden="true"><span>below 60: nicht bestanden</span><span>ausr.</span><span>befr.</span><span>gut</span><span>sehr gut</span></div>
  <div class="parts">${['H', 'L', 'W', 'S'].map(k => `<div class="part"><i class="c-${k.toLowerCase()}"></i>${SECS[k]}<b>${e[k] == null ? '–' : fmtPts(e[k] * 25)} / 25</b></div>`).join('')}</div>`;
}
function taskRow(k, day) {
  const info = taskInfo(k); const done = day ? isDone(day, k) : false;
  const row = el(`<div class="task ${done ? 'done' : ''}">
    <span class="tick"><span class="xbox" role="img" aria-label="${done ? 'Done' : 'Not done yet'}">${done ? X_MARK : ''}</span></span>
    <div style="min-width:0"><p class="t-title">${esc(info.title)}</p><p class="t-sub">${esc(info.sub)}</p></div>
    <div class="row" style="flex-wrap:nowrap"><span class="mins">${info.min} min</span><button class="btn ${done ? '' : 'primary'}" type="button">${done ? 'Redo' : 'Start'}</button></div></div>`);
  $('button', row).onclick = () => info.run({ day, keys: [k] });
  return row;
}
function viewToday(m) {
  const n = dnum(); const left = EXAM_DAY - n;
  const day = Math.min(Math.max(n, 1), NDAYS);
  const wk = Math.ceil(day / 7);
  m.append(el(`<section class="today-head">
    <div class="stack" style="gap:6px"><p class="kicker">${n < 1 ? 'Your plan starts Friday, 30 October' : n <= NDAYS ? `Day ${n} of ${NDAYS}, week ${wk}` : 'Your study plan is complete'}</p>
      <h1 lang="de">${esc(DE_DATE.format(new Date()))}</h1>
      <p class="lede">${n <= NDAYS ? esc(D.plan.weeks[wk - 1].title) + '.' : left === 0 ? 'Prüfungstag. Eat breakfast, bring your ID, arrive 30 minutes early.' : 'You can keep practising any part.'}</p></div>
    ${left > 0 ? `<div class="countdown" aria-label="${left} days until the exam"><span class="hand num" aria-hidden="true">${left}</span><small aria-hidden="true">${left === 1 ? 'Tag noch!' : 'Tage noch'}</small></div>` : ''}
  </section>`));
  const cal = el(`<div class="cal" role="img" aria-label="${D.plan.days.filter((ks, i) => ks.every(k => isDone(i + 1, k))).length} of ${NDAYS} plan days complete"></div>`);
  D.plan.days.forEach((ks, i) => { const d = i + 1; const c = ks.filter(k => isDone(d, k)).length; cal.append(el(`<span class="${c === ks.length ? 'done' : c ? 'part' : ''} ${d === n ? 'today' : ''}" title="Day ${d}, ${EN_SHORT.format(dateOf(d))}">${dateOf(d).getDate()}</span>`)); });
  cal.append(el(`<span class="exam" title="Exam, Tuesday 24 November">24</span>`));
  m.append(cal);
  const inst = installCard('today'); if (inst) m.append(inst);
  if (!TTS.ok) m.append(el(`<div class="banner warn" id="voice-banner"><span aria-hidden="true">⚠︎</span><div>No German voice was found in this browser, so listening tasks show the text instead of reading it aloud. On a phone, install a German voice in your speech settings. Chrome, Edge and Safari usually have one.</div></div>`));

  if (n <= NDAYS) {
    const ks = D.plan.days[day - 1];
    const next = ks.find(k => !isDone(day, k));
    if (next) {
      const info = taskInfo(next);
      const card = el(`<section class="next" aria-label="Next task"><div class="stack" style="gap:4px;min-width:0"><p class="kicker">${ks.indexOf(next) === 0 && !ks.some(k => isDone(day, k)) ? 'Start here' : 'Up next'}</p><h2>${esc(info.title)}</h2><p class="muted">${esc(info.sub)}, about ${info.min} minutes</p></div><button class="btn primary big" type="button">${IC.play}<span>Start</span></button></section>`);
      $('button', card).onclick = () => info.run({ day, keys: [next] });
      m.append(card);
    } else m.append(el(`<section class="next"><div><h2>Today’s plan is done. Gut gemacht!</h2><p class="muted">Review a few flashcards or redo a drill if you have time.</p></div><span class="hand" style="font-size:44px" aria-hidden="true">sehr gut</span></section>`));
    const doneCount = ks.filter(k => isDone(day, k)).length;
    const mins = ks.reduce((a, k) => a + taskInfo(k).min, 0);
    const sec = el(`<section class="sheet"><div class="split"><h2>${n < 1 ? 'Day 1 preview' : 'Today’s tasks'}</h2><span class="mins">${doneCount} of ${ks.length} done, about ${mins} min</span></div><div class="tasks"></div></section>`);
    ks.forEach(k => $('.tasks', sec).append(taskRow(k, day)));
    m.append(sec);
    const missed = [];
    for (let d = 1; d < day; d++) D.plan.days[d - 1].forEach(k => { if (!isDone(d, k) && k !== 'rev') missed.push([d, k]); });
    if (missed.length) {
      const c = el(`<section class="sheet"><details><summary>Catch up on ${missed.length} unfinished ${missed.length === 1 ? 'task' : 'tasks'} from earlier days</summary><div class="stack" style="margin-top:12px"><p class="small muted">Do the exam-format tasks first (Hören, Lesen, Schreiben, Sprechen). A grammar lesson can be skipped if time is short.</p><div class="tasks"></div></div></details></section>`);
      missed.slice(0, 12).forEach(([d, k]) => { const r = taskRow(k, d); $('.t-sub', r).textContent = `From day ${d}. ` + $('.t-sub', r).textContent; $('.tasks', c).append(r); });
      m.append(c);
    }
  }
  const e = estimate();
  m.append(el(`<section class="sheet"><div class="split"><h2>Where you stand</h2><span class="chip ${e.have < 4 ? 'plain' : e.total >= 60 ? 'ok' : 'warn'}">${e.have < 4 ? `${e.have} of 4 parts measured` : `About ${Math.round(e.total)} points, ${predicate(e.total)}`}</span></div>
    <p class="small muted" style="max-width:62ch">Your recent practice in each part, scaled to exam points. You need 60 of 100 in total, so a strong part can carry a weak one.</p>${scaleHTML(e)}</section>`));
  const due = dueWords().length;
  const w = el(`<section class="split"><div><h2>Flashcards</h2><p class="small muted">${due ? `${due} words are due for review.` : 'Nothing is due right now.'} You have started ${Object.keys(S.srs).length} of ${WORDS.length} words.</p></div><a class="btn" href="#woerter">Open words</a></section>`);
  m.append(w);
}

/* ================= PLAN ================= */
function viewPlan(m) {
  const n = dnum();
  m.append(el(`<section class="stack"><h1>Your ${NDAYS}-day plan</h1><p class="lede">Friday 30 October to Monday 23 November, then the exam on Tuesday. Every task copies a real part of the exam. Tap any task to start it; missed tasks appear on the Today page.</p></section>`));
  D.plan.weeks.forEach(wk => {
    const s = el(`<section class="sheet"><div class="week-head"><p class="kicker">Week ${wk.n}</p><h2>${esc(wk.title)}</h2><p class="small muted" style="max-width:62ch">${esc(wk.note)}</p></div><div class="days"></div></section>`);
    for (let d = (wk.n - 1) * 7 + 1; d <= Math.min(wk.n * 7, NDAYS); d++) {
      const ks = D.plan.days[d - 1];
      const row = el(`<div class="day ${d === n ? 'is-today' : ''}"><span class="dn">${d}<small>day</small></span><span class="dd">${esc(EN_SHORT.format(dateOf(d)))}${d === n ? ', today' : ''}</span><div class="pills"></div></div>`);
      ks.forEach(k => {
        const info = taskInfo(k); const done = isDone(d, k);
        const p = el(`<button type="button" class="pill ${done ? 'done' : ''} ${info.big ? 'big' : ''}">${done ? IC.check.replace('<svg', '<svg width="14" height="14" aria-hidden="true"') + '<span class="sr">Done: </span>' : ''}${esc(info.title)}</button>`);
        p.onclick = () => info.run({ day: d, keys: [k] });
        $('.pills', row).append(p);
      });
      $('.days', s).append(row);
    }
    m.append(s);
  });
  m.append(el(`<section class="day" style="border:0"><span class="dn" style="color:var(--red)">!</span><h2>Tuesday, 24 November: exam day</h2><p class="muted">Hören, then Lesen, then Schreiben (65 minutes in total), then Sprechen in a small group.</p></section>`));
}

/* ================= PRACTICE ================= */
function setButtons(prefix, sets) {
  const taken = id => S.mocks.some(x => x.id === id);
  return sets.map(s => {
    const k = `${prefix}:${s}`; const b = S.best[k];
    const mockSet = (s === 3 && !taken('A')) || (s === 4 && !taken('B'));
    return `<button type="button" class="setbtn ${b ? 'done' : ''} ${mockSet && !b ? 'mock' : ''}" data-k="${k}" aria-label="Set ${s}${b ? `, best ${b.c} of ${b.n}` : ''}${mockSet ? ', used in a mock exam' : ''}">${b ? `${b.c}/${b.n}` : 'Set ' + s}</button>`;
  }).join('');
}
function viewPractice(m) {
  m.append(el(`<section class="stack"><h1>Practice</h1><p class="lede">Each drill uses the exact task type from the exam. Sets 3 and 4 appear in Mock A and Mock B, so their buttons have a dashed border until you have taken those mocks.</p></section>`));
  const part = (color, title, sub, rows) => {
    const s = el(`<section class="sheet"><div class="part-head"><span class="sw" style="background:${color}" aria-hidden="true"></span><div><h2>${title}</h2><p class="small muted">${sub}</p></div></div><div class="links"></div></section>`);
    rows.forEach(r => $('.links', s).append(r)); return s;
  };
  const linkRow = (title, sub, inner) => el(`<div class="linkrow"><div class="lr-main"><b>${esc(title)}</b><p class="small muted">${esc(sub)}</p></div><div class="setbtns">${inner}</div></div>`);
  const btn = (k, label) => `<button type="button" class="setbtn ${S.best[k] ? 'done' : ''}" data-k="${k}">${S.best[k] ? `${fmtPts(S.best[k].c)}/${S.best[k].n}` : esc(label)}</button>`;
  m.append(part('var(--ink)', 'Hören', 'Listening, 15 questions worth 25 points', [
    linkRow('Teil 1: short conversations', '6 dialogues, a, b or c, heard twice', setButtons('h1', [1, 2, 3, 4])),
    linkRow('Teil 2: announcements', '4 loudspeaker texts, richtig or falsch, heard once', setButtons('h2', [1, 2, 3, 4])),
    linkRow('Teil 3: phone messages', '5 messages, a, b or c, heard twice', setButtons('h3', [1, 2, 3, 4])),
    linkRow('Numbers, prices and times', 'New random items every time', btn('num', 'Start'))
  ]));
  m.append(part('var(--green)', 'Lesen', 'Reading, 15 questions worth 25 points', [
    linkRow('Teil 1: notes and e-mails', '2 short texts, 5 sentences richtig or falsch', setButtons('l1', [1, 2, 3, 4])),
    linkRow('Teil 2: ads and websites', '5 situations, choose a or b', setButtons('l2', [1, 2, 3, 4])),
    linkRow('Teil 3: signs and notices', '5 signs, richtig or falsch', setButtons('l3', [1, 2, 3, 4]))
  ]));
  m.append(part('var(--amber)', 'Schreiben', 'Writing, 15 raw points worth 25', [
    linkRow('Teil 1: fill in a form', '5 gaps, 1 point each', D.schreiben.t1.map((f, i) => btn('w1:' + i, String(i + 1))).join('')),
    linkRow('Teil 2: a short message', 'About 30 words on 3 points, with greeting and closing', D.schreiben.t2.map((f, i) => btn('w2:' + i, String(i + 1))).join(''))
  ]));
  m.append(part('var(--violet)', 'Sprechen', 'Speaking, 15 raw points worth 25', [
    linkRow('Teil 1: introduce yourself', 'Plus spelling and saying numbers', btn('s1', 'Intro') + btn('s1b', 'Spelling')),
    linkRow('Teil 2: ask and answer', 'A topic and word cards', Object.entries(D.sprechen.t2).map(([id, t]) => btn('s2:' + id, t.name.split(' ')[0])).join('')),
    linkRow('Teil 3: requests', 'Picture cards, polite requests', btn('s3', 'Start'))
  ]));
  m.append(part('var(--muted)', 'Grammatik', 'Only the grammar the exam needs', D.grammar.map(g => linkRow(g.title, g.why, btn('g:' + g.id, 'Open')))));
  $$('.setbtn', m).forEach(b => b.onclick = () => startTask(b.dataset.k));
}

/* ================= WORDS ================= */
function viewWords(m) {
  const due = dueWords().length; const started = Object.keys(S.srs).length;
  m.append(el(`<section class="stack"><h1>Words</h1><p class="lede">${WORDS.length} core words from the Goethe A1 word list. Learn a topic once; reviews then bring each word back after 1, 2, 4, 7 and 14 days.</p></section>`));
  const top = el(`<section class="sheet"><div class="split"><h2>Review</h2><span class="chip ${due ? 'warn' : 'ok'}">${due} due today</span></div>
    <div class="progress" role="progressbar" aria-label="Words started" aria-valuenow="${started}" aria-valuemin="0" aria-valuemax="${WORDS.length}"><span style="width:${(started / WORDS.length * 100).toFixed(1)}%"></span></div>
    <p class="small muted">${started} of ${WORDS.length} words started, ${WORDS.filter(w => S.srs[w.id] && S.srs[w.id].b >= 4).length} well known.</p>
    <div class="row"><button class="btn primary" type="button" id="rv">${due ? 'Review due words' : 'Practise 20 random words'}</button>
    <span class="row small"><span class="muted" id="dir-l">Card front</span><span class="seg" role="radiogroup" aria-labelledby="dir-l"><label><input type="radio" name="dir" value="de" ${S.dir === 'de' ? 'checked' : ''}>Deutsch</label><label><input type="radio" name="dir" value="en" ${S.dir === 'en' ? 'checked' : ''}>English</label></span></span></div></section>`);
  $('#rv', top).onclick = () => reviewCards({ keys: ['rev'] });
  $$('input[name=dir]', top).forEach(r => r.onchange = () => { S.dir = r.value; save(); });
  m.append(top);
  const list = el(`<section class="sheet"><h2>Topics</h2><div class="links"></div></section>`);
  TOPICS.forEach(t => {
    const seen = seenCount(t);
    const r = el(`<div class="linkrow"><div class="lr-main"><b>${esc(t.name)}</b><p class="small muted num">${seen} of ${t.words.length} started</p><div class="progress" style="margin-top:6px;max-width:260px" aria-hidden="true"><span style="width:${seen / t.words.length * 100}%"></span></div></div>
      <div class="setbtns"><button type="button" class="setbtn" data-a="learn">${seen < t.words.length ? 'Learn' : 'Again'}</button><button type="button" class="setbtn" data-a="list">Word list</button></div></div>`);
    $('[data-a=learn]', r).onclick = () => learnTopic(t.id, { keys: ['v:' + t.id] });
    $('[data-a=list]', r).onclick = () => wordList(t.id);
    $('.links', list).append(r);
  });
  m.append(list);
}
function wordList(id) {
  const t = topicById(id); const { body } = openSession({ title: t.name });
  const s = el(`<section class="sheet"><p class="small muted">Tap a word to hear it. Article colours: <b class="art-der">der</b>, <b class="art-die">die</b>, <b class="art-das">das</b>.</p><div class="wlist"></div></section>`);
  t.words.forEach(w => { const r = el(`<button type="button"><span lang="de">${deHTML(w)}</span><span>${esc(w.en)}</span></button>`); r.onclick = () => TTS.say(w.de); $('.wlist', s).append(r); });
  body.append(s);
}

/* ================= EXAMS ================= */
function viewExam(m) {
  m.append(el(`<section class="stack"><h1>Exams</h1><p class="lede">Full mock exams under real timing, plus the three official Goethe practice papers. You pass with 60 of 100 points.</p></section>`));
  const hist = S.mocks.slice(-8);
  const chart = el(`<section class="sheet"><div class="split"><h2>Your results</h2>${hist.length ? `<span class="chip ${hist[hist.length - 1].total >= 60 ? 'ok' : 'warn'}">Last: ${Math.round(hist[hist.length - 1].total)} of 100, ${predicate(hist[hist.length - 1].total)}</span>` : ''}</div></section>`);
  if (hist.length) {
    chart.append(el(`<div><div class="bars" role="img" aria-label="Mock results: ${hist.map(r => Math.round(r.total)).join(', ')}"><div class="line60"><small>60, pass</small></div>${hist.map(r => `<div class="bar ${r.total < 60 ? 'fail' : ''}"><em>${Math.round(r.total)}</em><span style="height:${r.total}%"></span></div>`).join('')}</div>
      <div class="barlabels" style="margin-top:6px" aria-hidden="true">${hist.map(r => `<span>${esc(r.id.startsWith('off:') ? (r.id === 'off:modell' ? 'Modell' : 'Übung ' + r.id.slice(-1)) : 'Mock ' + r.id)}</span>`).join('')}</div></div>`));
    const last = hist[hist.length - 1];
    chart.append(el(`<table class="grade-table"><caption class="sr">Last result by part</caption><tbody>${['h', 'l', 'w', 's'].map(k => `<tr><td>${SECS[k.toUpperCase()]}</td><td>${last[k] == null ? '–' : fmtPts(last[k] / 15 * 25) + ' / 25'}</td></tr>`).join('')}</tbody></table>`));
  } else chart.append(el(`<p class="empty">No exams taken yet. Mock A is planned for day 14, Thursday 12 November.</p>`));
  m.append(chart);
  const mk = el(`<section class="sheet"><h2>Mock exams</h2><div class="links"></div></section>`);
  Object.entries(D.mocks).forEach(([id, mo]) => {
    const runs = S.mocks.filter(x => x.id === id); const best = runs.reduce((a, x) => Math.max(a, x.total), -1);
    const day = D.plan.days.findIndex(ks => ks.includes('mock:' + id)) + 1;
    const r = el(`<div class="linkrow"><div class="lr-main"><b>${esc(mo.name)}</b><p class="small muted">Planned for ${EN_SHORT.format(dateOf(day))}${best >= 0 ? `. Best so far: ${Math.round(best)} points` : ''}</p></div><button class="btn ${runs.length ? '' : 'primary'}" type="button">${runs.length ? 'Take again' : 'Start'}</button></div>`);
    $('button', r).onclick = () => startTask('mock:' + id, day);
    $('.links', mk).append(r);
  });
  m.append(mk);
  const off = el(`<section class="sheet"><h2>Official Goethe papers</h2><p class="small muted" style="max-width:62ch">The real practice tests from Goethe, with recorded audio. Do them on the planned days, then log your score here.</p><div class="links"></div></section>`);
  ['modell', 'ue1', 'ue2'].forEach(id => {
    const o = D.official[id]; const day = D.plan.days.findIndex(ks => ks.includes('off:' + id)) + 1;
    const runs = S.mocks.filter(x => x.id === 'off:' + id);
    const r = el(`<div class="linkrow"><div class="lr-main"><b>${esc(o.name)}</b><p class="small muted">Planned for ${EN_SHORT.format(dateOf(day))}${runs.length ? `. Logged: ${Math.round(runs[runs.length - 1].total)} points` : ''}</p></div><button class="btn" type="button">Open</button></div>`);
    $('button', r).onclick = () => startTask('off:' + id, day);
    $('.links', off).append(r);
  });
  m.append(off);
  m.append(el(`<section class="sheet"><h2>Estimate from practice</h2>${scaleHTML(estimate())}</section>`));
}

/* ================= SETTINGS ================= */
function viewSettings(m) {
  m.append(el(`<section class="stack"><h1>Settings</h1><p class="lede">Audio, appearance, and a backup of your progress.</p></section>`));
  const inst = installCard('settings'); if (inst) m.append(inst);
  const theme = (() => { try { return localStorage.getItem('sd1-theme') || 'system'; } catch (e) { return 'system'; } })();
  const a = el(`<section class="sheet"><h2>Audio</h2>
    <div class="rubric-row"><span id="spd-l">Speed</span><span class="seg" role="radiogroup" aria-labelledby="spd-l">${[[0.8, 'Slow'], [0.9, 'A bit slow'], [1, 'Exam speed']].map(([r, l]) => `<label><input type="radio" name="rate" value="${r}" ${S.rate === r ? 'checked' : ''}>${l}</label>`).join('')}</span></div>
    <div class="field" style="max-width:420px"><label for="voice-sel">German voice</label><select id="voice-sel"></select><p class="small muted">Only voices installed on this device are listed. The second voice is used for the other person in dialogues.</p></div>
    <div class="row"><button type="button" class="btn" id="tts-test">${IC.play}<span>Test the voices</span></button></div></section>`);
  const vs = $('#voice-sel', a);
  vs.innerHTML = '<option value="">Automatic</option>' + TTS.de.map(v => `<option value="${esc(v.name)}" ${TTS.pref === v.name ? 'selected' : ''}>${esc(v.name)} (${esc(v.lang)})</option>`).join('');
  if (!TTS.de.length) vs.innerHTML = '<option>No German voice found on this device</option>';
  vs.onchange = () => { TTS.setPref(vs.value); toast('Voice saved'); };
  $$('input[name=rate]', a).forEach(r => r.onchange = () => { S.rate = +r.value; save(); });
  $('#tts-test', a).onclick = () => TTS.speak([['f', 'Guten Tag! So klingen die Hörübungen.'], ['m', 'Und das ist die zweite Stimme.']]);
  m.append(a);
  const t = el(`<section class="sheet"><h2>Appearance</h2><div class="rubric-row"><span id="th-l">Theme</span><span class="seg" role="radiogroup" aria-labelledby="th-l">${[['system', 'Match device'], ['light', 'Exercise book'], ['dark', 'Chalkboard']].map(([v, l]) => `<label><input type="radio" name="theme" value="${v}" ${theme === v ? 'checked' : ''}>${l}</label>`).join('')}</span></div></section>`);
  $$('input[name=theme]', t).forEach(r => r.onchange = () => { applyTheme(r.value, true); });
  m.append(t);
  const b = el(`<section class="sheet"><h2>Backup and moving devices</h2>
    <p class="small muted" style="max-width:62ch">${store.mode === 'cloud' ? 'Your progress already syncs through your Claude account. A backup code is still useful before clearing browser data.' : 'Progress is saved in this browser only. To continue on another device, copy the backup code here and paste it there.'}</p>
    <div class="row"><button type="button" class="btn primary" id="bk-make">Create backup code</button></div>
    <textarea id="bk-out" class="code-out" readonly hidden aria-label="Backup code"></textarea>
    <div class="field" style="max-width:640px"><label for="bk-in">Restore from a backup code</label><textarea id="bk-in" class="code-out" spellcheck="false" autocomplete="off" placeholder="Paste a backup code here…"></textarea></div>
    <div class="row"><button type="button" class="btn" id="bk-load">Restore progress</button><span class="small" id="bk-msg" role="status"></span></div></section>`);
  $('#bk-make', b).onclick = async () => {
    const code = await exportCode(); const o = $('#bk-out', b); o.hidden = false; o.value = code;
    try { await navigator.clipboard.writeText(code); toast('Backup code copied'); } catch (e) { o.focus(); o.select(); toast('Select the code and copy it'); }
  };
  $('#bk-load', b).onclick = async () => {
    const msg = $('#bk-msg', b); const v = $('#bk-in', b).value.trim();
    if (!v) { msg.textContent = 'Paste a backup code first.'; return; }
    let data; try { data = await importCode(v); } catch (e) { msg.style.color = 'var(--red)'; msg.textContent = 'That code could not be read. Copy the whole code and try again.'; return; }
    if (!(await confirmDialog('Replace your progress?', 'The progress on this device will be replaced with the backup.', 'Replace'))) return;
    adopt(data); save(); push(); msg.style.color = 'var(--green)'; msg.textContent = 'Progress restored.'; renderNav();
  };
  m.append(b);
}
function applyTheme(v, persist) {
  const r = document.documentElement;
  if (v === 'light' || v === 'dark') r.setAttribute('data-theme', v); else if (persist) r.removeAttribute('data-theme');
  if (persist) { try { localStorage.setItem('sd1-theme', v); } catch (e) {} }
}
async function exportCode() {
  const json = JSON.stringify(S);
  try {
    const cs = new CompressionStream('gzip');
    const buf = await new Response(new Blob([json]).stream().pipeThrough(cs)).arrayBuffer();
    let bin = ''; new Uint8Array(buf).forEach(b => bin += String.fromCharCode(b));
    return 'SD1Z:' + btoa(bin);
  } catch (e) { return 'SD1J:' + btoa(unescape(encodeURIComponent(json))); }
}
async function importCode(code) {
  code = code.replace(/\s+/g, '');
  let json;
  if (code.startsWith('SD1Z:')) {
    const bin = atob(code.slice(5)); const bytes = Uint8Array.from(bin, c => c.charCodeAt(0));
    json = await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'))).text();
  } else if (code.startsWith('SD1J:')) json = decodeURIComponent(escape(atob(code.slice(5))));
  else throw new Error('bad');
  const o = JSON.parse(json); if (!o || typeof o !== 'object' || !o.done) throw new Error('bad');
  const c = clean(o); c.upd = Date.now(); return c;
}

/* ================= exam items (shared by drills and mocks) ================= */
const INSTR = {
  H1: ['Teil 1: Was ist richtig? Kreuzen Sie an: a, b oder c. Sie hören jeden Text zweimal.', 'Short everyday conversations. Read the question first, then press play. You hear each text twice.'],
  H2: ['Teil 2: Kreuzen Sie an: Richtig oder Falsch? Sie hören jeden Text einmal.', 'Loudspeaker announcements. You hear each text only once, so read the sentence before you press play.'],
  H3: ['Teil 3: Was ist richtig? Kreuzen Sie an: a, b oder c. Sie hören jeden Text zweimal.', 'Messages on an answering machine. Listen for times, days, places and numbers.'],
  L1: ['Teil 1: Lesen Sie die zwei Texte. Sind die Aussagen richtig oder falsch? Kreuzen Sie an.', 'Two short notes or e-mails. Decide whether each sentence is right or wrong.'],
  L2: ['Teil 2: Lesen Sie die Texte und die Aufgaben. Wo finden Sie Informationen? Kreuzen Sie an: a oder b.', 'For each situation, choose the ad or website that helps you. You don’t need to understand every word.'],
  L3: ['Teil 3: Lesen Sie die Texte und die Aufgaben. Kreuzen Sie an: Richtig oder Falsch.', 'Signs and notices in public places.'],
  W1: ['Teil 1: Füllen Sie das Formular aus. Schreiben Sie die fünf fehlenden Informationen.', 'Copy the information from the text into the form. 5 gaps, 1 point each.'],
  W2: ['Teil 2: Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter). Schreiben Sie auch eine Anrede und einen Gruß.', 'Answer all 3 points. Start with Liebe …, Lieber … or Sehr geehrte …, and end with Viele Grüße or Mit freundlichen Grüßen and your name.']
};
const SPK = { m: 'Mann', f: 'Frau', a: 'Ansage' };
let RADIO_N = 0;
const optHTML = (opts, letters, name) => opts.map((o, i) => `<label class="opt"><input type="radio" name="${name}" value="${i}"><span class="xb" aria-hidden="true">${IC.x}</span>${letters ? `<span class="lt" aria-hidden="true">${'abc'[i]}</span>` : ''}<span class="lbl" lang="de">${esc(o)}</span></label>`).join('');
const optsBlock = (opts, letters, legend, inline) => { const name = 'q' + (++RADIO_N); return `<fieldset class="opts ${inline ? 'inline' : ''}"><legend class="sr">${esc(legend)}</legend>${optHTML(opts, letters, name)}</fieldset>`; };

/* choice core over radio inputs inside .opt or .ad labels */
function choiceCore(root, sel, correct, mode, onPick) {
  let chosen = null, locked = false;
  const labels = $$(sel, root);
  labels.forEach((lb, i) => { const inp = $('input', lb); inp.onchange = () => { if (locked) return; chosen = i; onPick && onPick(); }; });
  return {
    get answered() { return chosen !== null; },
    get correct() { return chosen === correct; },
    get chosen() { return chosen; },
    lock() {
      locked = true;
      labels.forEach((x, i) => { const inp = $('input', x); inp.disabled = true; x.classList.add('locked'); x.classList.toggle('right', i === correct); x.classList.toggle('wrong', i === chosen && chosen !== correct); });
    }
  };
}
function feedbackNode(ok, rightText) {
  return el(`<p class="fb ${ok ? 'ok' : 'bad'}" role="status">${ok ? '<span class="hand" aria-hidden="true">✓ richtig</span><span class="sr">Correct.</span>' : `<span class="hand" aria-hidden="true">f</span><span>Not quite. The answer is <b lang="de">${esc(rightText)}</b>.</span>`}</p>`);
}

/* item factory → {node, ctrl:{answered, correct, reveal()}} */
function makeItem(kind, it, num, mode, onChange) {
  let node, core, rightText, extra = () => {};
  const done = () => { if (mode === 'drill') ctrl.reveal(); onChange && onChange(); };
  if (kind === 'H1' || kind === 'H2' || kind === 'H3') {
    const teil = +kind[1]; const rf = teil === 2;
    const lines = teil === 1 ? it.s : [['a', it.t]];
    const max = rf ? 1 : 2;
    const opts = rf ? ['Richtig', 'Falsch'] : it.o; const correct = rf ? (it.a ? 0 : 1) : it.a;
    rightText = opts[correct];
    const q = rf ? it.st : it.q;
    node = el(`<section class="item"><span class="inum" aria-hidden="true">${num}</span><p class="q" lang="de"><span class="sr">Question ${num}. </span>${esc(q)}</p>
      <div class="player"><button class="playbtn" type="button" aria-label="Play audio for question ${num}">${IC.play}</button><div class="plays"><span class="pl-t"></span><span class="dots" aria-hidden="true">${'<i></i>'.repeat(max)}</span></div>${TTS.ok ? '' : '<button class="btn quiet rd" type="button">Show the text instead</button>'}</div>
      ${optsBlock(opts, !rf, q, rf)}<div class="fbw"></div><div class="transcript" lang="de" hidden>${lines.map(([sp, t]) => `<p><b>${SPK[sp]}:</b>${esc(t)}</p>`).join('')}</div></section>`);
    let plays = 0, playing = false;
    const pb = $('.playbtn', node), dots = $$('.dots i', node), pt = $('.pl-t', node);
    const upd = () => {
      dots.forEach((d, i) => d.classList.toggle('used', i < plays));
      const free = ctrl && ctrl.revealed;
      pb.disabled = playing || (!free && plays >= max);
      pb.classList.toggle('playing', playing);
      pt.textContent = playing ? 'Playing…' : free ? 'Play as often as you like' : plays >= max ? 'No plays left' : max === 1 ? 'You hear this only once' : plays === 0 ? 'You hear this twice' : '1 play left';
    };
    pb.onclick = () => { if (playing) return; if (!(ctrl && ctrl.revealed)) plays++; playing = true; upd(); TTS.speak(lines, { onend: () => { playing = false; upd(); } }); };
    const rd = $('.rd', node); if (rd) rd.onclick = () => { $('.transcript', node).hidden = false; rd.remove(); };
    core = choiceCore(node, '.opt', correct, mode, done);
    extra = () => { $('.transcript', node).hidden = false; upd(); };
    setTimeout(upd);
  } else if (kind === 'L2') {
    rightText = 'Anzeige ' + 'ab'[it.a];
    const name = 'q' + (++RADIO_N);
    node = el(`<section class="item"><span class="inum" aria-hidden="true">${num}</span><p class="q" lang="de"><span class="sr">Question ${num}. </span>${esc(it.s)}</p>
      <fieldset class="opts" style="display:block"><legend class="sr">${esc(it.s)}</legend><div class="ad-pair">${it.o.map((o, i) => `<label class="ad"><input type="radio" name="${name}" value="${i}"><span class="ad-h" lang="de"><span>${esc(o.h)}</span><span class="lt" aria-hidden="true">${'ab'[i]}</span></span><span class="ad-b" lang="de">${esc(o.b)}</span></label>`).join('')}</div></fieldset><div class="fbw"></div></section>`);
    core = choiceCore(node, '.ad', it.a, mode, done);
  } else if (kind === 'L3') {
    const correct = it.a ? 0 : 1; rightText = ['Richtig', 'Falsch'][correct];
    node = el(`<section class="item"><span class="inum" aria-hidden="true">${num}</span>
      <div class="sign-wrap"><span class="where">${esc(it.w)}</span><div class="sign" lang="de">${esc(it.sign)}</div></div>
      <p class="q" lang="de"><span class="sr">Question ${num}. </span>${esc(it.st)}</p>
      ${optsBlock(['Richtig', 'Falsch'], false, it.st, true)}<div class="fbw"></div></section>`);
    core = choiceCore(node, '.opt', correct, mode, done);
  } else if (kind === 'RF') {
    const correct = it.a ? 0 : 1; rightText = ['Richtig', 'Falsch'][correct];
    node = el(`<section class="item"><span class="inum" aria-hidden="true">${num}</span><p class="q" lang="de"><span class="sr">Question ${num}. </span>${esc(it.st)}</p>${optsBlock(['Richtig', 'Falsch'], false, it.st, true)}<div class="fbw"></div></section>`);
    core = choiceCore(node, '.opt', correct, mode, done);
  }
  const ctrl = {
    revealed: false,
    get answered() { return core.answered; },
    get correct() { return core.correct; },
    reveal() { if (this.revealed) return; this.revealed = true; core.lock(); $('.fbw', node).append(feedbackNode(core.correct, rightText)); extra(); }
  };
  return { node, ctrl };
}

/* build a whole Teil → {nodes:[...], ctrls:[...]} */
function buildTeil(sec, teil, items, mode, onChange, startNum = 1) {
  const nodes = [], ctrls = []; let n = startNum;
  const kind = sec + teil;
  if (kind === 'L1') {
    items.forEach((tx, ti) => {
      nodes.push(el(`<div class="stack"><p class="kicker">Text ${'AB'[ti]}</p><div class="note-text" lang="de">${esc(tx.text)}</div></div>`));
      tx.items.forEach(st => { const { node, ctrl } = makeItem('RF', st, n++, mode, onChange); nodes.push(node); ctrls.push(ctrl); });
    });
  } else items.forEach(it => { const { node, ctrl } = makeItem(kind, it, n++, mode, onChange); nodes.push(node); ctrls.push(ctrl); });
  return { nodes, ctrls };
}
const teilItems = (sec, teil, set) => (sec === 'H' ? D.hoeren : D.lesen)['t' + teil][set - 1];
function mixedItems(sec, teil) {
  const src = (sec === 'H' ? D.hoeren : D.lesen)['t' + teil];
  if (sec === 'L' && teil === 1) return pick(src);
  const n = sec === 'H' ? { 1: 6, 2: 4, 3: 5 }[teil] : 5;
  return shuffle(src.flat()).slice(0, n);
}
const ptsLine = (c, n) => `${fmtPts(c)} of ${n} correct, about ${fmtPts(c / n * 25)} of 25 exam points`;

/* sticky footer with progress + primary action */
function actionBar(label) {
  return el(`<div class="split" style="padding-top:6px"><span class="small muted num prog" aria-live="polite"></span><button class="btn primary big" type="button" disabled>${esc(label)}</button></div>`);
}

/* generic drill page for Hören / Lesen */
function hoerenDrill(teil, set, ctx) { teilDrill('H', teil, set, ctx); }
function lesenDrill(teil, set, ctx) { teilDrill('L', teil, set, ctx); }
function teilDrill(sec, teil, set, ctx) {
  const key = `${sec.toLowerCase()}${teil}:${set}`;
  const sess = openSession({ title: `${sec === 'H' ? 'Hören' : 'Lesen'} Teil ${teil}, set ${set}` });
  const { body } = sess;
  body.append(instrNode(...INSTR[sec + teil]));
  const foot = actionBar('See my result');
  const { nodes, ctrls } = buildTeil(sec, teil, teilItems(sec, teil, set), 'drill', () => upd());
  const upd = () => { const a = ctrls.filter(c => c.answered).length; $('.prog', foot).textContent = `${a} of ${ctrls.length} answered`; $('button', foot).disabled = a < ctrls.length; sess.progress(a / ctrls.length); };
  body.append(...nodes, foot); upd();
  $('button', foot).onclick = () => {
    const c = ctrls.filter(x => x.correct).length, n = ctrls.length;
    logAttempt(sec, key, c, n); finishTask(ctx);
    const nx = set % 4 + 1;
    const r = resultCard(c, n, key, () => teilDrill(sec, teil, nx, { keys: [`${sec.toLowerCase()}${teil}:${nx}`] }), `Try set ${nx}`);
    foot.replaceWith(r); r.scrollIntoView({ block: 'center' });
  };
}
function resultCard(c, n, key, next, nextLabel) {
  const pct = c / n;
  const r = el(`<section class="result" aria-label="Result"><div class="result-big"><span class="hand num">${fmtPts(c)}/${n}</span><span class="pred">${pct >= .9 ? 'sehr gut!' : pct >= .8 ? 'gut!' : pct >= .6 ? 'bestanden' : 'noch üben'}</span></div>
   <p class="muted">${ptsLine(c, n)}.${pct < .6 ? ' Look at the red answers and read the text again.' : ''}</p>
   <div class="row"><button class="btn" type="button" data-a="back">Done</button>${next ? `<button class="btn primary" type="button" data-a="next">${esc(nextLabel)}</button>` : ''}</div></section>`);
  $('[data-a=back]', r).onclick = () => closeSession();
  if (next) $('[data-a=next]', r).onclick = next;
  return r;
}

/* ================= Schreiben Teil 1 (form) ================= */
function formBlock(i, mode, onChange) {
  const f = D.schreiben.t1[i];
  const node = el(`<div class="stack" style="gap:18px"><div class="note-text" lang="de">${esc(f.text)}</div><div class="formsheet" lang="de"><div class="fh">${esc(f.head)}</div></div></div>`);
  const sheet = $('.formsheet', node);
  const ctrls = [];
  f.fields.forEach((fd, fi) => {
    const id = `f${i}-${fi}-${++RADIO_N}`;
    let row;
    if (fd.given) row = el(`<div class="frow"><span class="fl">${esc(fd.l)}</span><div class="fv"><span class="given">${esc(fd.given)}</span><span class="small muted">(Beispiel)</span></div></div>`);
    else if (fd.ch) {
      row = el(`<div class="frow"><span class="fl" id="${id}-l">${esc(fd.l)}</span><div class="fv" role="radiogroup" aria-labelledby="${id}-l">${fd.ch.map((c, ci) => `<label class="ch"><input type="radio" name="${id}" value="${ci}"><span class="xb" aria-hidden="true">${IC.x}</span>${esc(c)}</label>`).join('')}</div></div>`);
      let sel = null;
      $$('input', row).forEach(inp => inp.onchange = () => { sel = +inp.value; onChange && onChange(); });
      ctrls.push({ row, fd, get answered() { return sel !== null; }, get correct() { return fd.ans.includes(sel); }, right: fd.ch[fd.ans[0]], lock() { $$('input', row).forEach(x => x.disabled = true); } });
    } else {
      row = el(`<div class="frow"><label class="fl" for="${id}">${esc(fd.l)}</label><div class="fv"><input type="text" id="${id}" name="${id}" autocomplete="off" autocapitalize="off" spellcheck="false"></div></div>`);
      const inp = $('input', row); inp.oninput = () => onChange && onChange();
      ctrls.push({ row, fd, get answered() { return inp.value.trim() !== ''; }, get correct() { const v = normA(inp.value); return fd.ans.some(a => { const n = normA(a); return v === n || (n.length >= 4 && v.includes(n)); }); }, right: fd.show || fd.ans[0], lock() { inp.readOnly = true; } });
    }
    sheet.append(row);
  });
  const reveal = () => ctrls.forEach(c => {
    c.lock(); c.row.classList.add(c.correct ? 'right' : 'wrong');
    if (!c.correct) $('.fv', c.row).append(el(`<span class="fix">${esc(c.right)}</span>`));
  });
  return { node, ctrls, reveal };
}
function formDrill(i, ctx) {
  const sess = openSession({ title: `Schreiben Teil 1: ${D.schreiben.t1[i].title}` });
  const { body } = sess;
  body.append(instrNode(...INSTR.W1));
  const fb = formBlock(i, 'drill', () => upd());
  const foot = actionBar('Check the form');
  const upd = () => { const a = fb.ctrls.filter(c => c.answered).length; $('.prog', foot).textContent = `${a} of 5 filled in`; $('button', foot).disabled = a === 0; sess.progress(a / 5); };
  body.append(fb.node, foot); upd();
  $('button', foot).onclick = () => {
    fb.reveal(); const c = fb.ctrls.filter(x => x.correct).length;
    logAttempt('W', 'w1:' + i, c, 5); finishTask(ctx);
    const nx = (i + 1) % D.schreiben.t1.length;
    const r = resultCard(c, 5, 'w1:' + i, () => formDrill(nx, { keys: ['w1:' + nx] }), 'Next form');
    foot.replaceWith(r);
    if (c < 5) r.insertBefore(el(`<p class="small">Spelling counts in this part. Copy names, numbers and dates exactly as they appear in the text.</p>`), r.lastElementChild);
  };
}

/* ================= Schreiben Teil 2 (message) ================= */
function writeTaskNode(i) {
  const w = D.schreiben.t2[i];
  return el(`<div class="stack"><p style="font-size:18px;max-width:60ch" lang="de"><b>${esc(w.s)}</b></p><ul class="points" lang="de">${w.p.map((p, j) => `<li><span class="pn" aria-hidden="true">${j + 1}</span><span>${esc(p)}</span></li>`).join('')}</ul></div>`);
}
const wordCount = s => (s.trim().match(/\S+/g) || []).length;
function writingPrompt(i, text) {
  const w = D.schreiben.t2[i];
  return `You are a trained examiner for the Goethe-Zertifikat A1: Start Deutsch 1, Schreiben Teil 2.
Task given to the candidate (German): ${w.s}
Content points:
1) ${w.p[0]}
2) ${w.p[1]}
3) ${w.p[2]}
Official scoring: each content point gets 3 (fully done and understandable), 1.5 (only partly done because of language or content problems) or 0 (missing or not understandable). Communicative form gets 1 (fits the text type: greeting/Anrede and closing/Gruß with name), 0.5 (untypical or missing parts, e.g. no greeting) or 0. Spelling mistakes only cost points when they make the text hard to understand. Target length is about 30 words; do not punish a slightly longer text. This is level A1: simple sentences are fine.
Candidate's text:
"""${text}"""
Reply with only JSON in this shape:
{"points":[{"score":3,"note":"..."},{"score":1.5,"note":"..."},{"score":0,"note":"..."}],"form":{"score":1,"note":"..."},"corrected":"the candidate's text with mistakes corrected, keeping their ideas and simple style","tips":["...","..."]}
Write every note and tip in very simple English, max 14 words each, at most 3 tips.`;
}
function gradeTable(g) {
  const w = g.points.reduce((a, p) => a + (+p.score || 0), 0) + (+g.form.score || 0);
  return { total: w, html: `<table class="grade-table"><caption class="sr">Score by point</caption><tbody>${g.points.map((p, j) => `<tr><td><b>Point ${j + 1}.</b> ${esc(p.note || '')}</td><td>${fmtPts(+p.score || 0)} / 3</td></tr>`).join('')}<tr><td><b>Greeting and closing.</b> ${esc(g.form.note || '')}</td><td>${fmtPts(+g.form.score || 0)} / 1</td></tr><tr><td><b>Total</b></td><td>${fmtPts(w)} / 10</td></tr></tbody></table>` };
}
function selfRubric(onDone) {
  const nm = 'rb' + (++RADIO_N);
  const rowH = (j, label, vals) => `<div class="rubric-row" data-p="${j}"><span id="${nm}-${j}">${label}</span><span class="seg" role="radiogroup" aria-labelledby="${nm}-${j}">${vals.map(v => `<label><input type="radio" name="${nm}-${j}" value="${v}">${fmtPts(v)}</label>`).join('')}</span></div>`;
  const n = el(`<div class="claude-box"><p class="small"><b>Score it yourself</b> with the official rubric. For each point: 3 if it is done and clear, 1,5 if partly, 0 if missing. Greeting and closing: 1, 0,5 or 0.</p>
    ${[1, 2, 3].map(j => rowH(j, `Point ${j}`, [3, 1.5, 0])).join('')}${rowH(4, 'Form', [1, .5, 0])}
    <div class="row"><button type="button" class="btn primary" data-a="save" disabled>Save my score</button><span class="small muted tot num"></span></div></div>`);
  const vals = {};
  $$('input', n).forEach(inp => inp.onchange = () => { vals[inp.name] = +inp.value; const ok = Object.keys(vals).length === 4; $('[data-a=save]', n).disabled = !ok; $('.tot', n).textContent = `${fmtPts(Object.values(vals).reduce((a, v) => a + v, 0))} of 10 points`; });
  $('[data-a=save]', n).onclick = () => { onDone(Object.values(vals).reduce((a, v) => a + v, 0)); n.innerHTML = '<p class="small">Score saved.</p>'; };
  return n;
}
function claudeGrader(i, getText, onScore) {
  const box = el(`<div class="claude-box"><div class="row"><button type="button" class="btn primary">${IC.spark}<span>Grade it like the examiner</span></button><span class="small muted">Claude scores your text with the official rubric.</span></div><div class="out stack" aria-live="polite"></div></div>`);
  const btn = $('button', box), out = $('.out', box);
  btn.onclick = async () => {
    const text = getText();
    if (wordCount(text) < 8) { out.innerHTML = '<p class="small" style="color:var(--red)">Write at least two sentences first. Aim for about 30 words.</p>'; return; }
    btn.disabled = true; out.innerHTML = '<p class="small muted">Checking your text…</p>';
    try {
      const g = await claudeJSON(writingPrompt(i, text));
      if (!g || !Array.isArray(g.points) || g.points.length < 3 || !g.form) throw { code: 'invalid_json' };
      const t = gradeTable(g);
      out.innerHTML = t.html + (g.corrected ? `<p class="kicker">Corrected version</p><p class="model" style="border-color:var(--ink)" lang="de">${esc(g.corrected)}</p><button type="button" class="btn quiet hc">${IC.play}<span>Listen</span></button>` : '') + (g.tips && g.tips.length ? `<p class="kicker">Tips</p><ul class="small" style="margin:0;padding-left:20px">${g.tips.slice(0, 3).map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : '');
      const hc = $('.hc', out); if (hc) hc.onclick = () => TTS.say(g.corrected);
      onScore(t.total, 'claude');
    } catch (e) { out.innerHTML = `<p class="small" style="color:var(--red)">${esc(claudeErr(e))}</p>`; }
    btn.disabled = false;
  };
  return box;
}
function writeDrill(i, ctx) {
  const w = D.schreiben.t2[i];
  const { body } = openSession({ title: 'Schreiben Teil 2: a short message' });
  body.append(instrNode(...INSTR.W2));
  const sheet = el(`<section class="sheet"></section>`); sheet.append(writeTaskNode(i));
  const draftKey = 'sd1-draft-' + i; let draft = ''; try { draft = localStorage.getItem(draftKey) || ''; } catch (e) {}
  const id = `w2-${i}`;
  const ta = el(`<textarea id="${id}" name="${id}" lang="de" aria-label="Your message" placeholder="${w.inf ? 'Liebe …, / Lieber …,' : 'Sehr geehrte Damen und Herren, …'}" spellcheck="false" autocapitalize="sentences" autocomplete="off"></textarea>`);
  ta.value = draft;
  const wc = el(`<p class="small muted num" aria-live="polite"></p>`);
  const upd = () => { const n = wordCount(ta.value); wc.textContent = `${n} ${n === 1 ? 'word' : 'words'}. Aim for about 30. Your draft saves as you type.`; try { localStorage.setItem(draftKey, ta.value); } catch (e) {} };
  ta.oninput = upd; upd();
  sheet.append(ta, wc); body.append(sheet);
  let saved = false;
  const onScore = (pts) => { if (!saved) { saved = true; logAttempt('W', 'w2:' + i, pts, 10); finishTask(ctx); toast(`Saved: ${fmtPts(pts)} of 10 points`); } };
  const tools = el(`<section class="sheet"><h2>Check your text</h2></section>`);
  if (SAMPLE) tools.append(claudeGrader(i, () => ta.value, onScore));
  tools.append(selfRubric(p => onScore(p)));
  tools.append(el(`<details><summary>Show a model answer</summary><div class="stack" style="margin-top:10px"><p class="model" lang="de">${esc(fill(w.m))}</p><p class="small muted">${wordCount(fill(w.m))} words: one or two short sentences for each point, plus a greeting and a closing.</p></div></details>`));
  body.append(tools);
  const nx = (i + 1) % D.schreiben.t2.length;
  const next = el(`<div class="row"><button class="btn" type="button">Next task</button></div>`);
  $('button', next).onclick = () => writeDrill(nx, { keys: ['w2:' + nx] });
  body.append(next);
}

/* ================= Grammar ================= */
function grammarLesson(id, ctx) {
  const g = D.grammar.find(x => x.id === id);
  const { body } = openSession({ title: `Grammar: ${g.title}` });
  body.append(el(`<section class="sheet"><h1>${esc(g.title)}</h1><p class="lede">${esc(g.why)}</p>
    <div class="tbl-wrap"><table class="gtable"><thead><tr>${g.th.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${g.table.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
    <div class="stack" style="gap:6px">${g.ex.map(x => `<button type="button" class="btn quiet ex" style="justify-content:flex-start;text-align:left" lang="de">${IC.play}<span>${esc(x)}</span></button>`).join('')}</div></section>`));
  $$('.ex', body).forEach((b, j) => b.onclick = () => TTS.say(g.ex[j].replace(/\(.*?\)/g, '').replace(/=.*$/, '')));
  const quiz = el(`<section class="stack" style="gap:26px"><h2>Check yourself</h2></section>`);
  const ctrls = [];
  const foot = actionBar('See my result');
  const upd = () => { const a = ctrls.filter(c => c.answered).length; $('.prog', foot).textContent = `${a} of ${ctrls.length} answered`; $('button', foot).disabled = a < ctrls.length; };
  g.quiz.forEach((q, j) => {
    const n = el(`<section class="item"><span class="inum" aria-hidden="true">${j + 1}</span><p class="q" lang="de">${esc(q.q)}</p>${optsBlock(q.o, true, q.q)}<div class="fbw"></div></section>`);
    const core = choiceCore(n, '.opt', q.a, 'drill', () => { core.lock(); $('.fbw', n).append(feedbackNode(core.correct, q.o[q.a])); upd(); });
    ctrls.push(core); quiz.append(n);
  });
  body.append(quiz, foot); upd();
  $('button', foot).onclick = () => { const c = ctrls.filter(x => x.correct).length; logAttempt('G', 'g:' + id, c, 5); finishTask(ctx); foot.replaceWith(resultCard(c, 5, 'g:' + id)); };
}

/* ================= Numbers drill ================= */
function genNum() {
  const kind = pick(['price', 'price', 'time', 'time', 'halb', 'phone', 'date', 'room']);
  const two = s => (String(s).match(/\d+/g) || []).map(Number);
  if (kind === 'price') {
    const e = 1 + Math.floor(Math.random() * 59), c = pick([0, 10, 20, 25, 40, 49, 50, 60, 75, 80, 90, 95, 99]); const v = e + c / 100;
    return { label: 'Price in euros', ph: 'z. B. 4,50', say: c ? `Das kostet ${e} Euro ${c}.` : `Das kostet ${e} Euro.`, show: `${e},${pad(c)} €`, check: s => { const x = parseFloat(String(s).replace(/[^\d,.]/g, '').replace(',', '.')); return Math.abs(x - v) < 0.001; } };
  }
  if (kind === 'time') {
    const h = 5 + Math.floor(Math.random() * 18), m = pick([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]);
    return { label: 'Time (24-hour)', ph: 'z. B. 14:35', say: `Der Zug fährt um ${h} Uhr${m ? ' ' + m : ''}.`, show: `${h}:${pad(m)} Uhr`, check: s => { let n = two(s); if (n.length === 1 && n[0] > 99) n = [Math.floor(n[0] / 100), n[0] % 100]; return n[0] === h && (n[1] || 0) === m; } };
  }
  if (kind === 'halb') {
    const h = 1 + Math.floor(Math.random() * 12); const t = pick(['halb', 'Viertel nach', 'Viertel vor']);
    const H = t === 'Viertel nach' ? h : h - 1 || 12; const M = t === 'halb' ? 30 : t === 'Viertel nach' ? 15 : 45;
    return { label: 'Clock time (e.g. 8:30)', ph: 'z. B. 8:30', say: `Wir treffen uns um ${t} ${numWords(h === 1 && t !== 'halb' ? 1 : h).replace(/^eins$/, 'eins')}.`, show: `${t} ${numWords(h)} = ${H}:${pad(M)}`, check: s => { let n = two(s); if (n.length === 1 && n[0] > 99) n = [Math.floor(n[0] / 100), n[0] % 100]; return n[0] % 12 === H % 12 && n[1] === M; } };
  }
  if (kind === 'phone') {
    const p = [0, 0, 0].map(() => 10 + Math.floor(Math.random() * 90));
    return { label: 'Phone number', ph: 'z. B. 34 56 21', say: `Meine Telefonnummer ist ${p.join(', ')}.`, show: p.join(' '), check: s => String(s).replace(/\D/g, '') === p.join('') };
  }
  if (kind === 'date') {
    const d = 1 + Math.floor(Math.random() * 28), mo = Math.floor(Math.random() * 12);
    return { label: 'Date (day.month)', ph: 'z. B. 3.5.', say: `Ich habe am ${ordDat(d)} ${MONTHS[mo]} Geburtstag.`, show: `${d}. ${MONTHS[mo]} (${d}.${mo + 1}.)`, check: s => { const n = two(s); return n[0] === d && n[1] === mo + 1; } };
  }
  const r = 100 + Math.floor(Math.random() * 400);
  return { label: 'Room number', ph: 'z. B. 241', say: `Sie haben Zimmer ${r}.`, show: String(r), check: s => String(s).replace(/\D/g, '') === String(r) };
}
function numDrill(ctx) {
  const { body } = openSession({ title: 'Numbers, prices and times' });
  body.append(instrNode('Hören Sie und schreiben Sie die Zahl.', 'Numbers, prices, times and dates are the answers to most Hören questions. Listen, then type what you hear. 10 items.'));
  const items = Array.from({ length: 10 }, genNum); let right = 0, doneN = 0;
  const list = el('<div class="stack" style="gap:26px"></div>'); body.append(list);
  items.forEach((it, j) => {
    const n = el(`<section class="item"><span class="inum" aria-hidden="true">${j + 1}</span><p class="q">${esc(it.label)}</p>
      <div class="row"><button class="btn primary" type="button" data-a="play">${IC.play}<span>Play</span></button><input class="answer-in" style="flex:1 1 140px;width:auto" id="num-${j}" name="num-${j}" aria-label="Your answer for item ${j + 1}" placeholder="${esc(it.ph)}" inputmode="text" autocomplete="off"><button class="btn" type="button" data-a="ok">Check</button></div><div class="fbw"></div></div>`);
    $('[data-a=play]', n).onclick = () => TTS.say(it.say, j % 2 ? 'm' : 'f');
    const inp = $('input', n);
    const check = () => {
      if (n.dataset.done || !inp.value.trim()) return; n.dataset.done = 1; doneN++;
      const ok = it.check(inp.value); if (ok) right++;
      inp.readOnly = true; $('[data-a=ok]', n).disabled = true;
      $('.fbw', n).append(el(`<p class="fb ${ok ? 'ok' : 'bad'}"><span class="hand" aria-hidden="true">${ok ? '✓' : 'f'}</span><span><b>${esc(it.show)}</b>. You heard: <i lang="de">${esc(it.say)}</i></span></p>`));
      if (doneN === items.length) { logAttempt('H', 'num', right, items.length); finishTask(ctx); body.append(resultCard(right, items.length, 'num', () => numDrill({ keys: ['num'] }), '10 more')); }
    };
    $('[data-a=ok]', n).onclick = check; inp.onkeydown = e => { if (e.key === 'Enter') check(); };
    list.append(n);
  });
}

/* ================= Spelling ================= */
function spellDrill(ctx) {
  const { body } = openSession({ title: 'Spelling (Buchstabieren)' });
  body.append(instrNode('Buchstabieren Sie, bitte!', 'In Sprechen Teil 1 you must spell your name or city. Here you hear German letters and write the word. Then practise spelling your own name aloud.'));
  const alpha = el(`<details class="sheet"><summary>The German alphabet</summary><div class="spell" style="margin-top:12px">${spellParts('abcdefghijklmnopqrstuvwxyzäöüß').map(([c, n]) => `<button type="button" aria-label="${esc(c)}: ${esc(n)}"><b>${esc(c)}</b><small>${esc(n)}</small></button>`).join('')}</div><p class="small muted" style="margin-top:8px">Watch out: E (e) and I (i) sound different from English, and so do J (jott), V (vau), W (we), Y (ypsilon) and Z (zett).</p></details>`);
  $$('.spell button', alpha).forEach(b => b.onclick = () => TTS.say($('small', b).textContent));
  body.append(alpha);
  const words = shuffle(D.sprechen.spellWords).slice(0, 8); let right = 0, doneN = 0;
  words.forEach((w, j) => {
    const n = el(`<section class="item"><span class="inum" aria-hidden="true">${j + 1}</span><p class="q">Write the word you hear.</p><div class="row"><button class="btn primary" type="button" data-a="play">${IC.play}<span>Play letters</span></button><input class="answer-in" style="flex:1 1 140px;width:auto" id="sp-${j}" name="sp-${j}" aria-label="The word for item ${j + 1}" autocomplete="off" autocapitalize="words" spellcheck="false"><button class="btn" type="button" data-a="ok">Check</button></div><div class="fbw"></div></div>`);
    $('[data-a=play]', n).onclick = () => TTS.say(spellSay(w), 'm');
    const inp = $('input', n);
    const check = () => {
      if (n.dataset.done || !inp.value.trim()) return; n.dataset.done = 1; doneN++;
      const ok = inp.value.trim().toLowerCase() === w.toLowerCase(); if (ok) right++;
      inp.readOnly = true;
      $('.fbw', n).append(el(`<div class="stack" style="gap:6px"><p class="fb ${ok ? 'ok' : 'bad'}">${ok ? '✓ Richtig' : '✗ It was'} <b>${esc(w)}</b></p>${spellHTML(w)}</div>`));
      if (doneN === words.length) { logAttempt('S', 's1b', right, words.length); finishTask(ctx); body.append(ownName()); body.append(resultCard(right, words.length, 's1b', () => spellDrill({ keys: ['s1b'] }), '8 more')); }
    };
    $('[data-a=ok]', n).onclick = check; inp.onkeydown = e => { if (e.key === 'Enter') check(); };
    body.append(n);
  });
}
function ownName() {
  const i = S.intro || {};
  const parts = [i.last, i.first, i.city].filter(Boolean);
  if (!parts.length) return el(`<p class="banner info">Fill in your introduction (Sprechen Teil 1) and your own name and city will appear here, spelled with German letter names.</p>`);
  const n = el(`<section class="sheet"><h2>Spell your own words aloud</h2>${parts.map(p => `<div class="stack" style="gap:6px"><div class="row"><b>${esc(p)}</b><button class="btn quiet" type="button" data-w="${esc(p)}">${IC.play}<span>Listen</span></button></div>${spellHTML(p)}</div>`).join('')}</section>`);
  $$('[data-w]', n).forEach(b => b.onclick = () => TTS.say(spellSay(b.dataset.w), 'm'));
  return n;
}

/* ================= Sprechen Teil 1: introduction ================= */
function introText(i) {
  const s = [];
  if (i.first || i.last) s.push(`Ich heiße ${[i.first, i.last].filter(Boolean).join(' ')}.`);
  if (i.age) s.push(`Ich bin ${i.age} Jahre alt.`);
  if (i.land && i.city) s.push(`Ich komme aus ${i.land} und wohne jetzt in ${i.city}.`);
  else if (i.land) s.push(`Ich komme aus ${i.land}.`); else if (i.city) s.push(`Ich wohne in ${i.city}.`);
  if (i.langs) s.push(`Ich spreche ${i.langs}.`);
  if (i.job) s.push(/^(student|studentin)$/i.test(i.job.trim()) ? `Ich bin ${i.job}.` : `Ich bin ${i.job} von Beruf.`);
  if (i.hobby) s.push(/,| und /.test(i.hobby) ? `Meine Hobbys sind ${i.hobby}.` : `Mein Hobby ist ${i.hobby}.`);
  return s.length ? 'Guten Tag! ' + s.join(' ') : '';
}
function introDrill(ctx) {
  const { body } = openSession({ title: 'Sprechen Teil 1: introduce yourself' });
  body.append(instrNode('Stellen Sie sich vor: Name? Alter? Land? Wohnort? Sprachen? Beruf? Hobby?', 'The examiner shows these 7 keywords. You talk for about a minute, then spell something and say a number. 3 points: introduction, spelling, number.'));
  const i = Object.assign({}, S.intro);
  const F = [['first', 'Vorname', 'First name'], ['last', 'Familienname', 'Family name'], ['age', 'Alter', 'e.g. 29'], ['land', 'Land', 'e.g. Eritrea / der Türkei'], ['city', 'Wohnort', 'e.g. Berlin'], ['langs', 'Sprachen', 'e.g. Tigrinya, Englisch und ein bisschen Deutsch'], ['job', 'Beruf', 'e.g. Krankenpfleger / Student'], ['hobby', 'Hobby', 'e.g. Fußball / Lesen und Kochen']];
  const form = el(`<section class="sheet"><h2>Your details</h2><div class="fields">${F.map(([k, l, ph]) => `<div class="field"><label for="in-${k}">${l}</label><input id="in-${k}" data-k="${k}" placeholder="${esc(ph)}" value="${esc(i[k] || '')}" autocomplete="off"></div>`).join('')}</div>
    <p class="small muted">Some countries take an article: aus <b>der</b> Türkei, aus <b>dem</b> Iran, aus <b>der</b> Schweiz, aus <b>den</b> USA. Most do not: aus Eritrea, aus Äthiopien, aus Syrien.</p></section>`);
  const out = el(`<section class="sheet"><h2>Your introduction</h2><p class="intro-out"></p><div class="row"><button class="btn primary" type="button" data-a="hear">${IC.play}<span>Listen</span></button></div><div class="sp"></div></section>`);
  const draw = () => { const t = introText(i); $('.intro-out', out).textContent = t || 'Fill in the fields above and your introduction appears here.'; $('.sp', out).innerHTML = ''; if (i.last || i.first) $('.sp', out).append(el(`<div class="stack" style="gap:6px"><p class="kicker">Your name, spelled the German way</p>${spellHTML((i.first || '') + (i.first && i.last ? ' ' : '') + (i.last || ''))}</div>`)); };
  $$('input', form).forEach(inp => inp.oninput = () => { i[inp.dataset.k] = inp.value.trim(); S.intro = Object.assign({}, i); draw(); clearTimeout(inp._t); inp._t = setTimeout(save, 600); });
  $('[data-a=hear]', out).onclick = () => TTS.say(introText(i) || 'Bitte füllen Sie das Formular aus.');
  draw();
  const reh = el(`<section class="sheet"><h2>Rehearse like the exam</h2><p class="muted">Cover the text. Look only at the keywords and speak for about 80 seconds. Then answer the examiner's questions.</p>
    <div class="kw">${D.sprechen.t1keys.map(k => `<span>${esc(k)}</span>`).join('')}</div>
    <div class="row"><button class="btn primary" type="button" data-a="go">Start 80-second rehearsal</button><span class="timer num" hidden></span></div><div class="follow stack"></div></section>`);
  $('[data-a=go]', reh).onclick = () => {
    const t = $('.timer', reh); t.hidden = false; let left = 80; t.textContent = '1:20';
    clearInterval(reh._iv); reh._iv = setInterval(() => { left--; t.textContent = `${Math.floor(left / 60)}:${pad(left % 60)}`; if (left <= 0) { clearInterval(reh._iv); t.textContent = 'Danke!'; showFollow(); } }, 1000);
    $('[data-a=go]', reh).textContent = 'Restart'; showFollow();
  };
  const showFollow = () => {
    const f = $('.follow', reh); if (f.childElementCount) return;
    const qs = [D.sprechen.t1follow[0], D.sprechen.t1follow[1], pick(D.sprechen.t1follow.slice(2))];
    qs.forEach((q, j) => {
      const ans = q.kind === 'spell-last' ? (i.last ? spellHTML(i.last) : '<p class="small">Spell your family name letter by letter.</p>') : q.kind === 'spell-city' ? (i.city ? spellHTML(i.city) : '<p class="small">Spell your city letter by letter.</p>') : '<p class="small">Say the digits in pairs, e.g. <b>Meine Nummer ist null-eins-sieben-sechs, fünfundfünfzig, zweiundvierzig …</b></p>';
      const n = el(`<div class="item"><span class="inum" aria-hidden="true">${j + 1}</span><div class="row"><button class="btn" type="button">${IC.play}<span>Examiner asks</span></button></div><details><summary>Show question and model</summary><p style="margin:8px 0"><i>${esc(q.q)}</i></p>${ans}</details></div>`);
      $('button', n).onclick = () => TTS.say(q.q, 'm');
      f.append(n);
    });
    const done = el(`<div class="row"><button class="btn primary" type="button">I practised it</button></div>`);
    $('button', done).onclick = () => { logAttempt('S', 's1', 3, 3); finishTask(ctx); toast('Saved. Rehearse it again tomorrow.'); closeSession(); };
    f.append(done);
  };
  body.append(form, out, reh);
}

/* ================= Speaking step engine (Teil 2, Teil 3, mock) ================= */
function rateBtns(pts) { return [['Got it', pts], ['Almost', pts / 2], ['Not yet', 0]].map(([l, v]) => `<button type="button" class="btn" data-v="${v}">${l}</button>`).join(''); }
function claudeSpeakCheck(step, text) {
  return `A learner is practising Goethe-Zertifikat A1 Start Deutsch 1, Sprechen Teil ${step.check.teil}.
Situation: ${step.check.task}
${step.check.teil === 2 ? 'Rule: the learner must ask a real question about the topic using the word on the card, or answer the question in a short sentence.' : 'Rule: when making a request, the learner must ask someone to DO or GIVE something (Bitte), e.g. "Geben Sie mir bitte …", "Können Sie bitte …?". A pure information question like "Wo ist …?" does not count. When reacting, any short fitting reaction counts.'}
The examiner rates understandability, not perfection: full = understandable and fits the task; half = understandable but with problems; none = not understandable or does not fit.
Learner wrote: """${text}"""
Reply with only JSON: {"result":"full"|"half"|"none","feedback":"one short sentence in simple English","better":"one natural, correct German version at A1 level"}`;
}
function speakingSteps(host, steps, onDone) {
  let i = 0, got = 0, max = 0;
  const box = el('<div class="stack"></div>'); host.append(box);
  const show = () => {
    box.innerHTML = '';
    if (i >= steps.length) { onDone(got, max); return; }
    const st = steps[i];
    const n = el(`<section class="sheet">
      <div class="split"><p class="kicker">${esc(st.label)}</p><span class="small muted num">Step ${i + 1} of ${steps.length}</span></div>
      <div class="card-stage">${st.card || ''}<p class="say">${esc(st.prompt)}</p>
       ${st.say ? `<button class="btn primary" type="button" data-a="say">${IC.play}<span>${esc(st.sayLabel || 'Hear your partner')}</span></button>` : ''}
       ${st.check && SAMPLE ? `<div class="claude-box" style="width:100%;text-align:left"><label class="small" for="sp-in-${i}">Optional: type what you said and Claude checks it like the examiner.</label><div class="row"><input id="sp-in-${i}" class="answer-in" style="flex:1 1 200px;width:auto" autocomplete="off"><button class="btn" type="button" data-a="chk">${IC.spark}<span>Check</span></button></div><div class="chk-out small"></div></div>` : ''}
       <button class="btn" type="button" data-a="show">Show model answer</button>
       <div class="reveal" hidden>${st.say && st.sayText ? `<p class="small muted">You heard: <i>${esc(st.sayText)}</i></p>` : ''}<p class="kicker">Model answer</p><div class="say mdl" lang="de">${st.modelHTML || esc(st.model)}</div>${st.model ? `<button class="btn quiet" type="button" data-a="mplay">${IC.play}<span>Listen</span></button>` : ''}<p class="small">How did you do?</p><div class="rate">${rateBtns(st.pts)}</div></div>
      </div></section>`);
    const sayB = $('[data-a=say]', n); if (sayB) sayB.onclick = () => TTS.speak(st.say);
    $('[data-a=show]', n).onclick = () => { $('.reveal', n).hidden = false; $('[data-a=show]', n).remove(); };
    const mp = $('[data-a=mplay]', n); if (mp) mp.onclick = () => TTS.say(st.model);
    const chk = $('[data-a=chk]', n);
    if (chk) chk.onclick = async () => {
      const v = $('input', n).value.trim(); const o = $('.chk-out', n); if (!v) return;
      chk.disabled = true; o.innerHTML = '<span class="muted dots">Checking</span>';
      try { const r = await claudeJSON(claudeSpeakCheck(st, v), 'quick'); o.innerHTML = `<span class="chip ${r.result === 'full' ? 'ok' : r.result === 'half' ? 'warn' : 'bad'}">${r.result === 'full' ? 'Full points' : r.result === 'half' ? 'Half points' : 'No points'}</span> ${esc(r.feedback || '')}${r.better ? `<br>Better: <b>${esc(r.better)}</b>` : ''}`; }
      catch (e) { o.innerHTML = `<span style="color:var(--red)">${esc(claudeErr(e))}</span>`; }
      chk.disabled = false;
    };
    $$('.rate button', n).forEach(b => b.onclick = () => { got += +b.dataset.v; max += st.pts; i++; TTS.stop(); show(); window.scrollTo({ top: 0 }); });
    box.append(n);
    if (st.autoSay) setTimeout(() => TTS.speak(st.say), 300);
  };
  show();
}
const topicCard = (topic, word) => `<div class="pcard" aria-label="Word card"><span class="pc-top">Sprechen Teil 2</span><div><p class="small muted">Thema: ${esc(topic)}</p><p class="pc-word">${esc(word)}</p></div><span class="pc-bot">Fragen Sie!</span></div>`;
const picCard = c => `<div class="pcard" aria-label="Picture card: ${esc(c.w)}"><span class="pc-top">Sprechen Teil 3</span><span class="pc-emoji" aria-hidden="true">${c.e}</span><span class="pc-bot">${esc(c.w)}</span></div>`;
function t2Steps(topicId, cards, partner) {
  const t = D.sprechen.t2[topicId]; const out = [];
  cards.forEach(c => {
    out.push({ label: `Teil 2, „${t.name}“: your question`, card: topicCard(t.name, c.w), prompt: 'Ask your partner a question with this word.', model: c.q, pts: 2, check: { teil: 2, task: `Topic "${t.name}". Word card: "${c.w}". The learner asks a partner a question.` } });
    out.push({ label: `Teil 2, „${t.name}“: your answer`, card: '', prompt: 'Your partner asks you a question. Answer in one short sentence.', say: [[partner, c.q]], sayText: c.q, sayLabel: 'Hear the question', model: fill(c.a), pts: 1, check: { teil: 2, task: `The learner answers the question "${c.q}".` } });
  });
  return out;
}
function t2Drill(topicId, ctx) {
  const t = D.sprechen.t2[topicId];
  const { body } = openSession({ title: `Sprechen Teil 2: „${t.name}“` });
  body.append(instrNode('Teil 2 – Fragen stellen und antworten. Thema: ' + t.name, 'In the exam you take a card with a word, ask another candidate a question with it (2 points), and answer their question (1 point). Speak aloud, then compare.'));
  speakingSteps(body, t2Steps(topicId, shuffle(t.cards), 'm'), (got, max) => { logAttempt('S', 's2:' + topicId, got, max); finishTask(ctx); body.append(resultCard(got, max, 's2:' + topicId, () => { const ids = Object.keys(D.sprechen.t2); const nx = ids[(ids.indexOf(topicId) + 1) % ids.length]; t2Drill(nx, { keys: ['s2:' + nx] }); }, 'Next topic')); });
}
function t3Steps(cards) {
  const out = [];
  for (let k = 0; k + 1 < cards.length; k += 2) {
    const a = cards[k], b = cards[k + 1];
    out.push({ label: 'Teil 3: your request', card: picCard(a), prompt: 'Make a polite request with this card (not a “Wo ist …?” question).', model: a.b, pts: 2, check: { teil: 3, task: `Picture card: ${a.w}. The learner makes a request.` } });
    out.push({ label: 'Teil 3: react to a request', card: picCard(b), prompt: 'Your partner asks you for something. React with a short sentence (yes, or a polite no).', say: [['f', b.b]], sayText: b.b, sayLabel: 'Hear the request', model: b.r, pts: 1, check: { teil: 3, task: `The partner said "${b.b}". The learner reacts.` } });
  }
  return out;
}
function t3Drill(ctx) {
  const { body } = openSession({ title: 'Sprechen Teil 3: requests' });
  body.append(instrNode('Teil 3 – Bitten formulieren und darauf reagieren.', 'Each card shows a thing. Ask someone to give or do something (2 points), and react when someone asks you (1 point). A gesture plus “Ja, gern. Hier, bitte.” is a fine reaction.'));
  speakingSteps(body, t3Steps(shuffle(D.sprechen.t3).slice(0, 8)), (got, max) => { logAttempt('S', 's3', got, max); finishTask(ctx); body.append(resultCard(got, max, 's3', () => t3Drill({ keys: ['s3'] }), '8 new cards')); });
}

/* ================= Flashcards ================= */
function cardSession(title, queue, mode, ctx) {
  const { body } = openSession({ title });
  if (!queue.length) {
    body.append(el(`<div class="empty">No cards here right now. Learn a new topic on the Words tab.</div>`));
    finishTask(ctx); return;
  }
  let i = 0, knew = 0; const total = queue.length; const again = new Set();
  const stage = el('<div class="stack"></div>'); body.append(stage);
  const draw = () => {
    stage.innerHTML = '';
    if (i >= queue.length) {
      save(); finishTask(ctx);
      stage.append(el(`<section class="result"><div class="result-big"><span class="hand num">${knew}/${total}</span><span class="pred">${mode === 'learn' ? 'gelernt!' : 'fertig!'}</span></div><p class="muted">${mode === 'learn' ? 'These words come back tomorrow for review.' : 'Words you knew come back later; the others come back tomorrow.'}</p><div class="row"><button class="btn primary" type="button">Done</button></div></section>`));
      $('button', stage).onclick = () => closeSession(); return;
    }
    const w = queue[i]; const deFirst = mode === 'learn' || S.dir === 'de';
    const n = el(`<div class="stack"><div class="progress"><span style="width:${i / queue.length * 100}%"></span></div>
      <div class="fc"><span class="fc-topic">${esc(topicById(w.topic).name)}</span>
        <p class="${deFirst ? 'fc-de' : 'fc-en'}">${deFirst ? deHTML(w) : esc(w.en)}</p>
        <p class="${deFirst ? 'fc-en' : 'fc-de'} back" hidden>${deFirst ? esc(w.en) : deHTML(w)}</p>
        <button class="btn quiet" type="button" data-a="hear">${IC.play}<span>Listen</span></button></div>
      <div class="row" style="justify-content:center"><button class="btn primary" type="button" data-a="flip">Show answer</button></div>
      <div class="row rate" hidden style="justify-content:center"><button class="btn" type="button" data-a="no">${mode === 'learn' ? 'New to me' : 'Didn’t know'}</button><button class="btn primary" type="button" data-a="yes">${mode === 'learn' ? 'I knew it' : 'Knew it'}</button></div>
      <p class="small muted" style="text-align:center">${i + 1} / ${queue.length}</p></div>`);
    $('[data-a=hear]', n).onclick = () => TTS.say(w.de);
    $('[data-a=flip]', n).onclick = () => { $('.back', n).hidden = false; $('[data-a=flip]', n).parentElement.hidden = true; $('.rate', n).hidden = false; if (!deFirst) TTS.say(w.de); };
    const t = epochDay();
    $('[data-a=yes]', n).onclick = () => { const cur = S.srs[w.id]; const b = mode === 'learn' ? 2 : Math.min(5, (cur ? cur.b : 1) + 1); if (!again.has(w.id)) { S.srs[w.id] = { b, d: t + INTERVAL[b] }; knew++; } i++; draw(); };
    $('[data-a=no]', n).onclick = () => { S.srs[w.id] = { b: 1, d: t + 1 }; if (!again.has(w.id)) { again.add(w.id); queue.push(w); } i++; draw(); };
    stage.append(n);
    if (deFirst) TTS.say(w.de);
  };
  draw();
}
function learnTopic(id, ctx) {
  const t = topicById(id); const fresh = t.words.filter(w => !S.srs[w.id]);
  cardSession(`New words: ${t.name}`, fresh.length ? fresh : shuffle(t.words), 'learn', ctx);
}
function reviewCards(ctx) {
  let q = shuffle(dueWords()).slice(0, 40);
  if (!q.length) q = shuffle(WORDS.filter(w => S.srs[w.id])).slice(0, 20);
  cardSession('Flashcard review', q, 'review', ctx);
}

/* ================= Tour, eve, weak, official ================= */
function showTour(ctx) {
  const { body } = openSession({ title: 'How the exam works' });
  body.append(el(`<section class="sheet"><h1>Goethe-Zertifikat A1: Start Deutsch 1</h1><p>Four parts. Each is worth 25 of 100 points. You pass with <b>60 points in total</b>, so a weak part can be balanced by a strong one. The written exam (Hören, Lesen, Schreiben) takes 65 minutes without a break. Speaking is a small group exam, usually on the same day.</p>
   <div class="tbl-wrap"><table class="gtable"><thead><tr><th>Part</th><th>Time</th><th>Tasks</th><th>Raw → points</th></tr></thead><tbody>
   <tr><td>Hören</td><td>~20 min</td><td>Teil 1: 6 conversations, heard twice<br>Teil 2: 4 announcements, heard once<br>Teil 3: 5 phone messages, heard twice</td><td>15 → 25</td></tr>
   <tr><td>Lesen</td><td>25 min</td><td>Teil 1: 2 short e-mails, 5 × richtig or falsch<br>Teil 2: 5 situations, ad a or b<br>Teil 3: 5 signs, richtig or falsch</td><td>15 → 25</td></tr>
   <tr><td>Schreiben</td><td>20 min</td><td>Teil 1: a form with 5 gaps (5 points)<br>Teil 2: a message of about 30 words on 3 points (10 points)</td><td>15 → 25</td></tr>
   <tr><td>Sprechen</td><td>~15 min</td><td>Teil 1: introduce yourself, spell, say a number (3 points)<br>Teil 2: ask and answer on a topic (6 points)<br>Teil 3: requests with picture cards (6 points)</td><td>15 → 25</td></tr></tbody></table></div></section>`));
  body.append(el(`<section class="sheet"><h2>What earns points</h2><ul class="stack" style="padding-left:20px;margin:0">
   <li><b>Hören:</b> read the question before you listen. Most answers are a time, day, price, number or place. In Teil 2 you hear each text only once.</li>
   <li><b>Lesen:</b> you don't need every word. Find the one fact the question asks about. Watch for <i>nicht</i>, <i>kein</i>, <i>nur</i>, <i>sondern</i>.</li>
   <li><b>Schreiben Teil 1:</b> copy the information exactly. Spelling counts.</li>
   <li><b>Schreiben Teil 2:</b> answer all three points (3 pts each) and write a greeting and closing with your name (1 pt). About 30 words is enough.</li>
   <li><b>Sprechen:</b> there is no preparation time. Being understood matters more than perfect grammar. In Teil 3, a request is “Können Sie mir bitte … geben?”, not “Wo ist …?”.</li></ul>
   <p class="small muted">Source: Goethe-Institut, Start Deutsch 1 – Prüfungsziele und Testbeschreibung.</p></section>`));
  const d = el(`<div class="row"><button class="btn primary" type="button">Got it</button></div>`);
  $('button', d).onclick = () => { finishTask(ctx); closeSession(); }; body.append(d);
}
function eveChecklist(ctx) {
  const { body } = openSession({ title: 'Exam-day checklist' });
  const items = ['Passport or ID card (the same one you registered with)', 'Your registration confirmation from the Goethe-Institut', 'Two pens (blue or black) — phones are switched off and put away', 'Know the address and how long the trip takes; arrive 30 minutes early', 'Say your introduction aloud twice tonight and once tomorrow morning', 'Review your flashcards one last time, then stop and sleep', 'In Hören, read every question before the audio starts', 'In Schreiben Teil 2: three points, greeting, closing, your name'];
  const s = el(`<section class="sheet"><h1>Tomorrow: Tuesday, 24 November</h1><div class="tasks">${items.map((x, j) => `<label class="task" style="cursor:pointer"><span class="tick"><input type="checkbox" id="eve-${j}" style="width:22px;height:22px;accent-color:var(--ink)"></span><span>${esc(x)}</span></label>`).join('')}</div></section>`);
  body.append(s);
  const d = el(`<div class="row"><button class="btn primary" type="button">I'm ready</button></div>`);
  $('button', d).onclick = () => { finishTask(ctx); toast('Viel Erfolg morgen!'); closeSession(); }; body.append(d);
}
function weakDrill(ctx) {
  const w = weakest(); const keys = ctx.keys.slice();
  const set = 1 + Math.floor(Math.random() * 4);
  const go = k => { keys.push(k); return { day: ctx.day, keys }; };
  if (w === 'H') { const t = 1 + Math.floor(Math.random() * 3); teilDrill('H', t, set, go(`h${t}:${set}`)); }
  else if (w === 'L') { const t = 1 + Math.floor(Math.random() * 3); teilDrill('L', t, set, go(`l${t}:${set}`)); }
  else if (w === 'W') { const undone = D.schreiben.t2.map((_, i) => i).filter(i => !S.best['w2:' + i]); const i = undone.length ? undone[0] : Math.floor(Math.random() * 12); writeDrill(i, go('w2:' + i)); }
  else { if (Math.random() < .5) t3Drill(go('s3')); else { const id = pick(Object.keys(D.sprechen.t2)); t2Drill(id, go('s2:' + id)); } }
  toast(`Focus: ${SECS[w]}`);
}
function officialPaper(id, ctx) {
  const o = D.official[id];
  const { body } = openSession({ title: o.name });
  body.append(el(`<section class="sheet"><p class="lede">${esc(o.note)}</p>
    <ol class="stack" style="padding-left:20px;margin:0"><li>Open the Goethe practice materials page and download the PDF for this set. Open the listening audio too.</li><li>Do it like the real exam: Hören (play the audio straight through), then Lesen with a 25-minute timer, then Schreiben with 20 minutes.</li><li>Check Hören and Lesen with the answer key at the end of the PDF. For Schreiben Teil 2, paste your text into the checker below.</li><li>Watch the speaking video from the Modellsatz once, to see what the group exam looks like.</li></ol>
    <a class="btn primary" href="${esc(D.official.url)}" target="_blank" rel="noopener" style="align-self:flex-start">${IC.ext}<span>Open Goethe practice materials</span></a></section>`));
  const sc = el(`<section class="sheet"><h2>Log your score</h2><div class="score-in">
    <div class="field"><label for="o-h">Hören (0–15)</label><input id="o-h" type="number" min="0" max="15" inputmode="numeric"></div>
    <div class="field"><label for="o-l">Lesen (0–15)</label><input id="o-l" type="number" min="0" max="15" inputmode="numeric"></div>
    <div class="field"><label for="o-w">Schreiben (0–15)</label><input id="o-w" type="number" min="0" max="15" step="0.5" inputmode="decimal"></div>
    <div class="field"><label for="o-s">Sprechen, your guess (0–15)</label><input id="o-s" type="number" min="0" max="15" step="0.5" inputmode="decimal"></div></div>
    <div class="row"><button class="btn primary" type="button">Save result</button><span class="small muted out"></span></div></section>`);
  $('button', sc).onclick = () => {
    const v = k => { const x = parseFloat($('#o-' + k, sc).value); return isNaN(x) ? null : Math.max(0, Math.min(15, x)); };
    const r = { id: 'off:' + id, t: Date.now(), h: v('h'), l: v('l'), w: v('w'), s: v('s') };
    if (r.h == null || r.l == null) { $('.out', sc).textContent = 'Enter at least Hören and Lesen.'; return; }
    r.total = ['h', 'l', 'w', 's'].reduce((a, k) => a + (r[k] == null ? 0 : r[k] / 15 * 25), 0);
    S.mocks.push(r); if (r.h != null) logAttempt('H', 'off-h', r.h, 15); if (r.l != null) logAttempt('L', 'off-l', r.l, 15);
    finishTask(ctx); $('.out', sc).textContent = `Saved: ${Math.round(r.total)} / 100`;
  };
  body.append(sc);
  if (SAMPLE) {
    const g = el(`<section class="sheet"><h2>Check your Schreiben Teil 2 from the paper</h2><div class="field"><label for="o-task">The task (copy it from the PDF)</label><textarea id="o-task" style="min-height:90px"></textarea></div><div class="field"><label for="o-text">Your text</label><textarea id="o-text" style="min-height:140px"></textarea></div><div class="row"><button class="btn" type="button">${IC.spark}<span>Grade it</span></button></div><div class="out"></div></section>`);
    $('button', g).onclick = async () => {
      const task = $('#o-task', g).value.trim(), text = $('#o-text', g).value.trim(); const out = $('.out', g);
      if (!task || wordCount(text) < 8) { out.innerHTML = '<p class="small" style="color:var(--red)">Add the task and your text first.</p>'; return; }
      out.innerHTML = '<p class="small muted dots">Checking</p>';
      try {
        const res = await claudeJSON(`You are a Goethe A1 Start Deutsch 1 examiner for Schreiben Teil 2. The task (with its three content points) is:\n"""${task}"""\nScore each of the three content points 3 / 1.5 / 0 and the text form (greeting and closing) 1 / 0.5 / 0, as in the official rubric. Spelling only matters when it hurts understanding.\nCandidate's text:\n"""${text}"""\nReply with only JSON: {"points":[{"score":3,"note":"..."},{"score":1.5,"note":"..."},{"score":3,"note":"..."}],"form":{"score":1,"note":"..."},"corrected":"corrected text","tips":["..."]}. Notes and tips in very simple English, max 14 words each.`);
        const t = gradeTable(res); out.innerHTML = t.html + (res.corrected ? `<p class="kicker">Corrected version</p><p class="model" lang="de">${esc(res.corrected)}</p>` : '');
      } catch (e) { out.innerHTML = `<p class="small" style="color:var(--red)">${esc(claudeErr(e))}</p>`; }
    };
    body.append(g);
  }
}

/* ================= Full mock exam ================= */
function mockExam(id, ctx) {
  const mo = D.mocks[id];
  let guarding = true;
  const sess = openSession({ title: mo.name, guard: () => guarding });
  const { body } = sess;
  const set = mo.set;
  const pickT = (sec, teil) => set ? teilItems(sec, teil, set) : mixedItems(sec, teil);
  const w1 = mo.w1 >= 0 ? mo.w1 : Math.floor(Math.random() * D.schreiben.t1.length);
  const w2 = set ? mo.w2 : pick([10, 11]);
  const R = { id, t: Date.now() };
  const review = {};

  // ---- intro
  const intro = el(`<section class="sheet"><h1>Before you start</h1>
    <p>This mock follows the real exam: <b>Hören</b> (about 20 min) → <b>Lesen</b> (25 min) → <b>Schreiben</b> (20 min) → <b>Sprechen</b> (about 15 min, practised alone with the app as your partner).</p>
    <ul class="stack small" style="padding-left:20px;margin:0"><li>You see your answers only at the end, like in the real exam.</li><li>Teil 2 of Hören plays only once. Read the sentence first.</li><li>Find a quiet place, use headphones, and don't pause.</li><li>Use “Back” only if you want to stop: your answers won't be kept.</li></ul>
    <div class="row"><button class="btn primary" type="button">Start with Hören</button></div></section>`);
  body.append(intro);
  $('button', intro).onclick = () => { intro.remove(); hoeren(); };

  const stageWrap = el('<div class="stack" style="gap:16px"></div>'); body.append(stageWrap);
  const nextBar = (label, fn, note) => { const b = el(`<div class="split"><span class="small muted">${esc(note || '')}</span><button class="btn primary big" type="button">${esc(label)}</button></div>`); $('button', b).onclick = fn; return b; };
  const head = (sec, en) => el(`<section class="stack" style="gap:6px"><p class="kicker">${esc(mo.name)}</p><h1>${esc(sec)}</h1><p class="lede">${esc(en)}</p></section>`);

  function hoeren() {
    stageWrap.innerHTML = ''; sess.stopwatch(); window.scrollTo(0, 0);
    stageWrap.append(head('Hören', '15 questions. Answer as you go; you can change an answer before you move on.'));
    const all = []; let n = 1; const nodes = [];
    [1, 2, 3].forEach(t => { const part = buildTeil('H', t, pickT('H', t), 'exam', null, n); n += part.ctrls.length; all.push(...part.ctrls); nodes.push(instrNode(...INSTR['H' + t]), ...part.nodes); });
    stageWrap.append(...nodes);
    review.H = { nodes, ctrls: all };
    stageWrap.append(nextBar('Continue to Lesen', () => { R.h = all.filter(c => c.correct).length; TTS.stop(); lesen(); }, 'Unanswered questions count as wrong.'));
  }
  function lesen() {
    stageWrap.innerHTML = ''; window.scrollTo(0, 0);
    stageWrap.append(head('Lesen', '25 minutes, 15 questions.'));
    const all = []; let n = 1; const nodes = [];
    [1, 2, 3].forEach(t => { const part = buildTeil('L', t, pickT('L', t), 'exam', null, n); n += part.ctrls.length; all.push(...part.ctrls); nodes.push(instrNode(...INSTR['L' + t]), ...part.nodes); });
    stageWrap.append(...nodes);
    review.L = { nodes, ctrls: all };
    const go = () => { R.l = all.filter(c => c.correct).length; schreiben(); };
    sess.countdown(25 * 60, () => toast('Time is up for Lesen. Finish your last answer and continue.'));
    stageWrap.append(nextBar('Continue to Schreiben', go));
  }
  function schreiben() {
    stageWrap.innerHTML = ''; window.scrollTo(0, 0);
    stageWrap.append(head('Schreiben', '20 minutes: the Teil 1 form (5 points) and the Teil 2 message (10 points).'));
    const fb = formBlock(w1, 'exam');
    const s1 = el('<div class="sheet"></div>'); s1.append(fb.node);
    const s2 = el('<section class="sheet"></section>'); s2.append(writeTaskNode(w2));
    const ta = el(`<textarea id="mock-w2" spellcheck="false" placeholder="${D.schreiben.t2[w2].inf ? 'Liebe … / Lieber …' : 'Sehr geehrte …'}"></textarea>`); const wc = el('<p class="small muted num">0 words</p>');
    ta.oninput = () => { wc.textContent = `${wordCount(ta.value)} words. Aim for about 30.`; };
    s2.append(ta, wc);
    stageWrap.append(instrNode(...INSTR.W1), s1, instrNode(...INSTR.W2), s2);
    review.W = { nodes: [s1, s2], reveal: fb.reveal };
    sess.countdown(20 * 60, () => toast('Time is up for Schreiben. Finish your sentence and continue.'));
    stageWrap.append(nextBar('Continue to Sprechen', () => { sess.stopTimer(); R.w1 = fb.ctrls.filter(c => c.correct).length; R.text = ta.value; ta.readOnly = true; sprechen(); }));
  }
  function sprechen() {
    stageWrap.innerHTML = ''; window.scrollTo(0, 0);
    stageWrap.append(head('Sprechen', 'Speak every answer aloud. After each step, look at the model and rate yourself honestly — the examiners give full points when you are understood.'));
    const i = S.intro || {};
    const topics = shuffle(Object.keys(D.sprechen.t2)).slice(0, 2);
    const steps = [
      { label: 'Teil 1: sich vorstellen', card: `<div class="kw">${D.sprechen.t1keys.map(k => `<span>${esc(k)}</span>`).join('')}</div>`, prompt: 'Introduce yourself using the keywords (about one minute).', model: introText(i) || 'Guten Tag! Ich heiße … Ich bin … Jahre alt. Ich komme aus … und wohne in … Ich spreche … Ich bin … von Beruf. Mein Hobby ist …', pts: 1 },
      { label: 'Teil 1: buchstabieren', prompt: 'The examiner asks you to spell something.', say: [['m', 'Wie ist Ihr Familienname? Können Sie das bitte buchstabieren?']], sayText: 'Wie ist Ihr Familienname? Können Sie das bitte buchstabieren?', sayLabel: 'Examiner asks', autoSay: true, modelHTML: i.last ? spellHTML(i.last) : '<p class="small">Each letter of your family name, with German letter names.</p>', model: i.last ? spellSay(i.last) : '', pts: 1 },
      { label: 'Teil 1: eine Nummer', prompt: 'The examiner asks for a number.', say: [['m', 'Wie ist Ihre Telefonnummer?']], sayText: 'Wie ist Ihre Telefonnummer?', sayLabel: 'Examiner asks', autoSay: true, model: 'Meine Telefonnummer ist null eins sieben sechs, zweiundfünfzig, achtunddreißig, siebzehn.', pts: 1 },
      ...t2Steps(topics[0], shuffle(D.sprechen.t2[topics[0]].cards).slice(0, 1), 'm'),
      ...t2Steps(topics[1], shuffle(D.sprechen.t2[topics[1]].cards).slice(0, 1), 'f'),
      ...t3Steps(shuffle(D.sprechen.t3).slice(0, 4))
    ];
    speakingSteps(stageWrap, steps, (got, max) => { R.s = got / max * 15; grade(); });
  }
  function grade() {
    stageWrap.innerHTML = ''; window.scrollTo(0, 0);
    stageWrap.append(head('Score your message', 'One last step: your message needs a score.'));
    const show = el(`<section class="sheet"></section>`); show.append(writeTaskNode(w2)); show.append(el(`<p class="model" style="border-color:var(--ink)">${esc(R.text || '(no text)')}</p>`));
    stageWrap.append(show);
    let doneG = false;
    const fin = pts => { if (doneG) return; doneG = true; R.w2 = pts; finish(); };
    if (!wordCount(R.text || '')) { fin(0); return; }
    const tools = el(`<section class="sheet"></section>`);
    if (SAMPLE) tools.append(claudeGrader(w2, () => R.text, pts => { const b = el(`<div class="row"><button class="btn primary" type="button">See my result</button></div>`); $('button', b).onclick = () => fin(pts); tools.append(b); }));
    tools.append(selfRubric(p => fin(p)));
    tools.append(el(`<details><summary>Model answer</summary><p class="model" style="margin-top:8px">${esc(fill(D.schreiben.t2[w2].m))}</p></details>`));
    stageWrap.append(tools);
  }
  function finish() {
    R.w = (R.w1 || 0) + (R.w2 || 0);
    R.total = (R.h + R.l + R.w + R.s) / 15 * 25;
    S.mocks.push({ id: R.id, t: R.t, h: R.h, l: R.l, w: R.w, s: Math.round(R.s * 10) / 10, total: R.total });
    logAttempt('H', 'mock-h', R.h, 15); logAttempt('L', 'mock-l', R.l, 15); logAttempt('W', 'mock-w', R.w, 15); logAttempt('S', 'mock-s', R.s, 15);
    finishTask(ctx);
    guarding = false;
    stageWrap.innerHTML = ''; window.scrollTo(0, 0);
    const pass = R.total >= 60;
    const row = (name, raw) => `<tr><td>${name}</td><td>${fmtPts(raw)} / 15</td><td>${fmtPts(raw / 15 * 25)} / 25</td></tr>`;
    const res = el(`<section class="result"><p class="kicker">${esc(mo.name)}, your result</p>
      <div class="result-big"><span class="hand num">${Math.round(R.total)}</span><span class="muted">of 100</span><span class="pred">${predicate(R.total)}</span></div><p><b>${pass ? 'You passed this mock.' : 'Not yet. You need 60 points.'}</b></p>
      <table class="grade-table"><tbody>${row('Hören', R.h)}${row('Lesen', R.l)}${row('Schreiben', R.w)}${row('Sprechen (self-rated)', R.s)}</tbody></table>
      <p class="muted small">${pass ? 'Keep this level. Use the review below to see every mistake.' : `Your weakest part is ${SECS[weakest()]}. The “Fix your weakest part” task in the plan will target it.`}</p>
      <div class="row"><button class="btn primary" type="button">Done</button></div></section>`);
    $('button', res).onclick = () => closeSession();
    stageWrap.append(res);
    // review
    review.H.ctrls.forEach(c => c.reveal()); review.L.ctrls.forEach(c => c.reveal()); review.W.reveal();
    [['Hören', review.H.nodes], ['Lesen', review.L.nodes], ['Schreiben', review.W.nodes]].forEach(([nm, nodes]) => {
      const d = el(`<details class="sheet"><summary>Review ${nm}</summary><div class="stack" style="margin-top:12px"></div></details>`);
      $('.stack', d).append(...nodes); stageWrap.append(d);
    });
  }
}

/* ================= boot ================= */
try { const th = localStorage.getItem('sd1-theme'); if (th === 'light' || th === 'dark') document.documentElement.setAttribute('data-theme', th); } catch (e) {}
TTS.init();
renderSync();
route();
initStore();
if ('serviceWorker' in navigator && location.protocol === 'https:' && !window.claude && /github\.io$/.test(location.hostname)) navigator.serviceWorker.register('sw.js').catch(() => {});
