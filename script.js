document.addEventListener('DOMContentLoaded', () => {
    const dniInput = document.getElementById('dniInput');
    const searchButton = document.getElementById('searchButton');
    const displayDNI = document.getElementById('displayDNI');
    const displayLocalidad = document.getElementById('displayLocalidad');
    const displayURNA = document.getElementById('displayURNA');
    const errorMessage = document.getElementById('errorMessage');

    // Aquí pegarás tu padrón como una cadena de texto
    // Cada línea es un registro, y los campos están separados por comas
    const padronData = `
2309511,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
3237874,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
4568597,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
4640967,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
4761087,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
4761248,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
4996785,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
5018070,ZAPALA,Etcheluz 650
5079139,JUNIN DLANDES,Lamadrid 130
5288209,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
5413355,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
5468764,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
5497214,ZAPALA,Etcheluz 650
5620871,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
5620891,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
5624188,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
5669306,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
5929503,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
5948513,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
6130028,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
6148168,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
6226022,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
6226126,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
6226190,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
6251329,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
6372082,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
6493037,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
6498325,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
6522136,ZAPALA,Etcheluz 650
6522163,ZAPALA,Etcheluz 650
6525532,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
7305717,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
7560035,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
7565235,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
7568516,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
7571720,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
7571878,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
7574027,ZAPALA,Etcheluz 650
7574060,ZAPALA,Etcheluz 650
7574548,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
7579602,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
7687860,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
7688852,ZAPALA,Etcheluz 650
7688996,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
8850400,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
9731500,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
9970021,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
9971606,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
10041881,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
10041953,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
10042659,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
10104372,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
10270147,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
10276265,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
10287404,JUNIN DLANDES,Lamadrid 130
10393708,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
10437471,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
10437533,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
10437545,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
10437644,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
10531260,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
10537728,ZAPALA,Etcheluz 650
10545649,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
10560413,CHOS MALAL,9 de Julio y Sarmiento
10564191,ZAPALA,Etcheluz 650
10660248,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
10721058,CHOS MALAL,9 de Julio y Sarmiento
10721220,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
10731186,JUNIN DLANDES,Lamadrid 130
10820070,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
10868757,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
10951299,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
10954126,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
10961696,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
10972714,JUNIN DLANDES,Lamadrid 130
10989885,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
11138988,CHOS MALAL,9 de Julio y Sarmiento
11174251,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
11208792,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
11223599,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
11265542,NEUQUEN,Alberdi 52
11267394,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
11310935,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
11339733,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
11375040,ZAPALA,Etcheluz 650
11531475,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
11531654,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
11580712,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
11701130,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
11810864,ZAPALA,Etcheluz 650
11904238,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
11967317,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
12002507,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
12051552,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
12066157,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
12285602,JUNIN DLANDES,Lamadrid 130
12321758,ZAPALA,Etcheluz 650
12353221,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
12627908,CHOS MALAL,9 de Julio y Sarmiento
12629645,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
12681896,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
12820121,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
13047002,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
13047129,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
13047665,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
13047865,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
13205399,CHOS MALAL,9 de Julio y Sarmiento
13254587,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
13302840,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
13311969,NEUQUEN,VOLANTE
13382147,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
13462677,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
13477213,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
13487322,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
13574054,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
13574249,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
13591387,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
13705398,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
13707751,ZAPALA,Etcheluz 650
13754288,ZAPALA,Etcheluz 650
13837819,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
13849587,JUNIN DLANDES,Lamadrid 130
13913686,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
13934314,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
13934482,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
13934483,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
13968062,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
13968201,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
13968284,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
13968445,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14024614,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14072059,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
14088413,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14171233,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14230343,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
14230360,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
14230415,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
14254978,NEUQUEN,CORREO
14279662,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14299952,JUNIN DLANDES,Lamadrid 130
14299982,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14315053,CORREO,CORREO
14324012,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14346734,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14346948,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14349601,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14349742,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14349976,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14362979,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14420524,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14420862,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14436096,JUNIN DLANDES,Lamadrid 130
14436295,ZAPALA,Etcheluz 650
14530752,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14538711,JUNIN DLANDES,Lamadrid 130
14620794,SMLANDES,Elordi 485
14632409,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14643381,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14674419,NEUQUEN,Leloir 881
14674502,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
14674568,JUNIN DLANDES,Lamadrid 130
14706902,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14742721,ZAPALA,Etcheluz 650
14761220,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14761324,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14766808,ZAPALA,Etcheluz 650
14856921,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14870557,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14870671,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
14916399,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
16003420,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
16019782,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
16046552,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
16154178,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
16174022,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
16284675,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
16298000,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
16393072,ZAPALA,Etcheluz 650
16393303,ZAPALA,Etcheluz 650
16393625,ZAPALA,Etcheluz 650
16407252,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
16432739,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
16503477,NEUQUEN,Alberdi 52
16520275,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
16528196,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
16566813,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
16644557,JUNIN DLANDES,Lamadrid 130
16651072,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
16651105,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
16696287,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
16696354,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
16702237,CHOS MALAL,9 de Julio y Sarmiento
16717171,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
16816166,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
16819591,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
16819874,NEUQUEN,Alberdi 52
16840276,NEUQUEN,Leloir 881
16842753,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
16968341,NEUQUEN,Alberdi 52
16976972,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
16980897,CHOS MALAL,9 de Julio y Sarmiento
16986743,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
17046290,NEUQUEN,Basavilbaso 297
17046362,JUNIN DLANDES,Lamadrid 130
17091824,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
17140550,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
17140856,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
17140872,NEUQUEN,VOLANTE
17151754,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
17188277,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
17214565,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
17238795,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
17238938,JUNIN DLANDES,Lamadrid 130
17250173,ZAPALA,Etcheluz 650
17250265,ZAPALA,Etcheluz 650
17416689,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
17441874,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
17442794,CHOS MALAL,9 de Julio y Sarmiento
17467164,JUNIN DLANDES,Lamadrid 130
17472880,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
17473336,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
17489052,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
17489202,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
17506544,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
17520755,NEUQUEN,Brown 155
17520867,NEUQUEN,Brown 155
17538178,SMLANDES,Elordi 485
17560847,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
17563772,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
17618127,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
17618321,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
17626111,ZAPALA,Etcheluz 650
17641097,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
17641135,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
17641147,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
17641215,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
17642585,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
17643677,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
17757015,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
17757123,NEUQUEN,VOLANTE
17760831,ZAPALA,Etcheluz 650
17868588,SMLANDES,Elordi 485
17868856,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
17919890,NEUQUEN,Leloir 881
17952569,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
17952598,SMLANDES,Elordi 485
17986382,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
17988443,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
18009381,JUNIN DLANDES,Lamadrid 130
18009739,NEUQUEN,VOLANTE
18010491,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
18012881,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
18029217,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
18083897,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
18100886,ZAPALA,Etcheluz 650
18100987,ZAPALA,Etcheluz 650
18179884,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
18180084,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
18192911,NEUQUEN,Alberdi 52
18218227,NEUQUEN,Basavilbaso 297
18224673,CHOS MALAL,9 de Julio y Sarmiento
18305523,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
18356513,NEUQUEN,Alberdi 52
18384470,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
18410902,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
18428473,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
18430047,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
18431775,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
18437161,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
18449356,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
18496954,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
18501763,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
18518035,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
18565518,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
18568930,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
18578767,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
18591290,NEUQUEN,Leloir 881
18606104,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
18606415,NEUQUEN,Brown 155
18650579,NEUQUEN,Leloir 881
18667589,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
18752854,NEUQUEN,Leloir 881
18754620,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
18766831,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
18788501,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
18801511,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
18830860,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
18856508,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
18862403,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
18872426,NEUQUEN,Basavilbaso 297
18888544,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
20002257,NEUQUEN,VOLANTE
20013602,ZAPALA,Etcheluz 650
20042823,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
20056024,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
20080427,NEUQUEN,Alberdi 52
20117593,NEUQUEN,VOLANTE
20120935,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
20121216,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
20122725,NEUQUEN,Brown 155
20203478,SMLANDES,Elordi 485
20234746,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
20236051,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
20294719,JUNIN DLANDES,Lamadrid 130
20337739,ZAPALA,Etcheluz 650
20368633,NEUQUEN,Alberdi 52
20388433,NEUQUEN,Leloir 881
20398048,NEUQUEN,Leloir 881
20406308,JUNIN DLANDES,Lamadrid 130
20414511,JUNIN DLANDES,Lamadrid 130
20436382,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
20436429,NEUQUEN,Brown 155
20436602,NEUQUEN,Brown 155
20436713,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
20436799,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
20450779,NEUQUEN,Leloir 881
20450857,NEUQUEN,Alberdi 52
20516845,CHOS MALAL,9 de Julio y Sarmiento
20558754,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
20558845,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
20558958,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
20664085,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
20670122,NEUQUEN,Alberdi 52
20734408,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
20793055,NEUQUEN,Alberdi 52
20793098,NEUQUEN,Alberdi 52
20793206,NEUQUEN,Alberdi 52
20793272,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
20794256,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
20795538,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
20912903,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
20960208,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
21136523,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
21377804,NEUQUEN,Alberdi 52
21380208,NEUQUEN,Brown 155
21380299,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
21380344,SMDLANDES,Elordi 485
21380875,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
21381374,NEUQUEN,VOLANTE
21381433,CHOS MALAL,9 de Julio y Sarmiento
21385868,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
21387717,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
21497439,NEUQUEN,Alberdi 52
21518461,NEUQUEN,Alberdi 52
21518636,NEUQUEN,Alberdi 52
21520074,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
21559508,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
21560088,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
21569403,CHOS MALAL,9 de Julio y Sarmiento
21581491,NEUQUEN,Leloir 881
21581703,NEUQUEN,Brown 155
21686756,ZAPALA,Etcheluz 650
21699653,CHOS MALAL,9 de Julio y Sarmiento
21722352,NEUQUEN,Basavilbaso 297
21727278,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
21785116,NEUQUEN,Alberdi 52
21785248,NEUQUEN,Alberdi 52
21785339,NEUQUEN,Alberdi 52
21812331,ZAPALA,Etcheluz 650
21847819,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
21862673,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
21916028,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
21916201,ZAPALA,Etcheluz 650
21916210,NEUQUEN,Leloir 881
21932099,ZAPALA,Etcheluz 650
21952991,NEUQUEN,Leloir 881
21954209,NEUQUEN,Alberdi 52
21998431,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
22012594,NEUQUEN,Basavilbaso 297
22053921,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
22086173,NEUQUEN,Brown 155
22105036,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
22115004,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
22116284,NEUQUEN,Alberdi 52
22116390,NEUQUEN,Leloir 881
22236735,NEUQUEN,Alberdi 52
22287306,NEUQUEN,Brown 155
22287548,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
22287716,NEUQUEN,Alberdi 52
22307222,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
22307305,JUNIN DLANDES,Lamadrid 130
22307478,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
22307486,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
22307568,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
22307611,ZAPALA,Etcheluz 650
22323525,NEUQUEN,Basavilbaso 297
22377559,ZAPALA,Etcheluz 650
22377597,ZAPALA,Etcheluz 650
22377612,NEUQUEN,Leloir 881
22377800,ZAPALA,Etcheluz 650
22473224,NEUQUEN,Alberdi 52
22473660,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
22473763,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
22473832,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
22474699,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
22474708,ZAPALA,Etcheluz 650
22483836,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
22538540,CHOS MALAL,9 de Julio y Sarmiento
22593869,NEUQUEN,Alberdi 52
22601699,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
22601769,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
22608503,NEUQUEN,Brown 155
22614012,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
22619111,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
22619384,NEUQUEN,Leloir 881
22630521,ZAPALA,Etcheluz 650
22664553,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
22684819,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
22752820,NEUQUEN,Brown 155
22783651,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
22808806,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
22858667,ZAPALA,Etcheluz 650
22898478,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
22898495,JUNIN DLANDES,Lamadrid 130
22898584,NEUQUEN,VOLANTE
22898757,JUNIN DLANDES,Lamadrid 130
22898915,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
22909602,CHOS MALAL,9 de Julio y Sarmiento
22909683,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
22980525,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
22996593,NEUQUEN,Alberdi 52
23052087,CHOS MALAL,9 de Julio y Sarmiento
23058755,ZAPALA,Etcheluz 650
23058912,JUNIN DLANDES,Lamadrid 130
23131217,NEUQUEN,Brown 155
23161007,JUNIN DLANDES,Lamadrid 130
23172853,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
23188531,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
23201089,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
23201224,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
23201262,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
23214814,NEUQUEN,Basavilbaso 297
23219591,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
23289710,NEUQUEN,Alberdi 52
23327241,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
23346426,JUNIN DLANDES,Lamadrid 130
23346551,SMLANDES,Elordi 485
23349751,JUNIN DLANDES,Lamadrid 130
23359652,NEUQUEN,VOLANTE
23381974,CIPOLLETTI,Alberdi 52
23384109,NEUQUEN,Alberdi 52
23384152,NEUQUEN,Brown 155
23384232,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
23384669,NEUQUEN,Basavilbaso 297
23384723,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
23384849,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
23394788,NEUQUEN,Alberdi 52
23419007,NEUQUEN,Leloir 881
23422127,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
23423523,ZAPALA,Etcheluz 650
23427379,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
23483165,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
23494762,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
23494824,NEUQUEN,Alberdi 52
23494829,NEUQUEN,Brown 155
23494858,SMLANDES,Elordi 485
23507513,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
23588691,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
23606117,SMLANDES,Elordi 485
23612496,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
23612587,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
23612617,NEUQUEN,Alberdi 52
23612703,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
23612871,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
23648441,NEUQUEN,Leloir 881
23648572,JUNIN DLANDES,Lamadrid 130
23680691,NEUQUEN,Alberdi 52
23680851,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
23680974,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
23693103,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
23718124,NEUQUEN,Alberdi 52
23726227,NEUQUEN,Leloir 881
23727728,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
23727789,LAS LAJAS,CORREO
23734206,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
23747814,CHOS MALAL,9 de Julio y Sarmiento
23768072,NEUQUEN,Alberdi 52
23776251,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
23781635,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
23789198,NEUQUEN,Alberdi 52
23801872,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
23829458,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
23831089,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
23856040,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
23856542,NEUQUEN,Alberdi 52
23856815,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
23918096,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
23918112,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
23918471,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
23918485,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
23918772,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
23918824,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
23918965,NEUQUEN,Alberdi 52
23918991,NEUQUEN,Alberdi 52
23963560,NEUQUEN,Leloir 881
24019812,ZAPALA,Etcheluz 650
24054848,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
24071806,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
24082610,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
24109550,ZAPALA,Etcheluz 650
24109652,ZAPALA,Etcheluz 650
24109882,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
24121969,CHOS MALAL,9 de Julio y Sarmiento
24127085,JUNIN DLANDES,Lamadrid 130
24131697,CHOS MALAL,9 de Julio y Sarmiento
24140382,SMLANDES,Elordi 485
24157540,NEUQUEN,VOLANTE
24160337,ZAPALA,Etcheluz 650
24218619,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
24223687,JUNIN DLANDES,Lamadrid 130
24224180,CHOS MALAL,9 de Julio y Sarmiento
24314695,JUNIN DLANDES,Lamadrid 130
24324253,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
24331579,NEUQUEN,Alberdi 52
24332427,SMLANDES,Elordi 485
24348519,NEUQUEN,Leloir 881
24371996,SMLANDES,Elordi 485
24398115,ZAPALA,Etcheluz 650
24398152,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
24398152,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
24403212,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
24413365,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
24432473,JUNIN DLANDES,Lamadrid 130
24542017,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
24563450,SMLANDES,Elordi 485
24581060,NEUQUEN,Brown 155
24581349,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
24582091,SMLANDES,Elordi 485
24615561,CHOS MALAL,9 de Julio y Sarmiento
24650127,ZAPALA,Etcheluz 650
24659541,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
24659594,NEUQUEN,Leloir 881
24659654,NEUQUEN,Brown 155
24659700,NEUQUEN,Brown 155
24659835,SMLANDES,Elordi 485
24659837,NEUQUEN,Alberdi 52
24663686,NEUQUEN,Basavilbaso 297
24694185,SMLANDES,Elordi 485
24709360,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
24743352,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
24751436,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
24774310,ZAPALA,Etcheluz 650
24774401,ZAPALA,Etcheluz 650
24777490,NEUQUEN,VOLANTE
24777510,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
24794521,JUNIN DLANDES,Lamadrid 130
24810426,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
24817447,ZAPALA,Etcheluz 650
24817536,NEUQUEN,Leloir 881
24817577,NEUQUEN,Alberdi 52
24820441,NEUQUEN,Alberdi 52
24822642,NEUQUEN,Basavilbaso 297
24825526,NEUQUEN,Alberdi 52
24825564,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
24829888,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
24863976,NEUQUEN,Alberdi 52
24870885,JUNIN DLANDES,Lamadrid 130
24877424,NEUQUEN,VOLANTE
24915526,ANDACOLLO,CORREO
24944298,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
24954157,ZAPALA,Etcheluz 650
24975903,JUNIN DLANDES,Lamadrid 130
24998891,NEUQUEN,VOLANTE
25043661,ZAPALA,Etcheluz 650
25082875,ZAPALA,Etcheluz 650
25109250,SMLANDES,Elordi 485
25113767,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
25137144,CHOS MALAL,9 de Julio y Sarmiento
25138585,NEUQUEN,Brown 155
25139533,NEUQUEN,Brown 155
25139715,NEUQUEN,Alberdi 52
25139716,NEUQUEN,Brown 155
25139945,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
25139991,NEUQUEN,Leloir 881
25169106,CHOS MALAL,9 de Julio y Sarmiento
25200258,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
25216485,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
25228380,CHOS MALAL,9 de Julio y Sarmiento
25263362,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
25277741,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
25298969,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
25308897,NEUQUEN,Alberdi 52
25334439,RINCONDLS,Mendoza 273
25334576,ZAPALA,Etcheluz 650
25351966,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
25369692,RINCONDLS,Mendoza 273
25374003,NEUQUEN,Brown 155
25374225,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
25374404,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
25374432,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
25405056,NEUQUEN,Alberdi 52
25406145,JUNIN DLANDES,Lamadrid 130
25408888,NEUQUEN,Basavilbaso 297
25451753,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
25489849,ANDACOLLO,CORREO
25489873,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
25489875,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
25489914,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
25512660,NEUQUEN,Alberdi 52
25543677,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
25544143,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
25544199,SMLANDES,Elordi 485
25582928,SMLANDES,Elordi 485
25599362,NEUQUEN,Leloir 881
25611561,CHOS MALAL,9 de Julio y Sarmiento
25611586,SMLANDES,Elordi 485
25611614,CHOS MALAL,9 de Julio y Sarmiento
25618427,NEUQUEN,Leloir 881
25618580,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
25624297,NEUQUEN,Alberdi 52
25656470,NEUQUEN,Leloir 881
25656547,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
25675797,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
25694865,ZAPALA,Etcheluz 650
25694959,CHOS MALAL,9 de Julio y Sarmiento
25694961,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
25695029,ZAPALA,Etcheluz 650
25709179,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
25725164,NEUQUEN,Brown 155
25725634,NEUQUEN,Alberdi 52
25725840,NEUQUEN,Leloir 881
25725861,NEUQUEN,Leloir 881
25766871,CHOS MALAL,9 de Julio y Sarmiento
25776923,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
25810679,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
25850325,NEUQUEN,Brown 155
25892781,AJADA DEL AGRI,CORREO
25911455,NEUQUEN,Leloir 881
25911499,NEUQUEN,Leloir 881
25911568,NEUQUEN,Leloir 881
25911586,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
25948375,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
25963059,NEUQUEN,Alberdi 52
25965269,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
25990402,SMLANDES,Elordi 485
25996131,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
26040275,NEUQUEN,Brown 155
26080848,CHOS MALAL,9 de Julio y Sarmiento
26081134,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
26112249,NEUQUEN,Brown 155
26112319,ZAPALA,Etcheluz 650
26132279,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
26132367,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
26134838,NEUQUEN,Brown 155
26141780,EL CHOCON,CORREO
26144370,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
26144739,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
26148824,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
26148870,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
26148911,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
26149112,NEUQUEN,Brown 155
26149144,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
26149158,JUNIN DLANDES,Lamadrid 130
26173888,NEUQUEN,Leloir 881
26188286,NEUQUEN,Leloir 881
26196849,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
26245752,ZAPALA,Etcheluz 650
26264512,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
26279178,NEUQUEN,VOLANTE
26318645,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
26318646,NEUQUEN,Brown 155
26324643,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
26324730,NEUQUEN,Alberdi 52
26324834,NEUQUEN,Brown 155
26324873,NEUQUEN,Brown 155
26324928,RINCONDLS,Mendoza 273
26347415,ZAPALA,Etcheluz 650
26347813,NEUQUEN,Alberdi 52
26357184,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
26357283,NEUQUEN,Leloir 881
26357307,NEUQUEN,Basavilbaso 297
26357421,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
26357443,NEUQUEN,Alberdi 52
26378583,NEUQUEN,Leloir 881
26389396,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
26421846,ZAPALA,Etcheluz 650
26458901,CHOS MALAL,9 de Julio y Sarmiento
26497521,ZAPALA,Etcheluz 650
26503885,CHOS MALAL,9 de Julio y Sarmiento
26511246,NEUQUEN,Leloir 881
26530874,NEUQUEN,Leloir 881
26541189,NEUQUEN,Brown 155
26541397,NEUQUEN,Leloir 881
26541407,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
26542104,NEUQUEN,Alberdi 52
26543486,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
26543506,NEUQUEN,Alberdi 52
26543516,JUNIN DLANDES,Lamadrid 130
26543578,SMLANDES,Elordi 485
26544560,JUNIN DLANDES,Lamadrid 130
26612273,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
26632401,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
26634059,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
26704264,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
26708118,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
26741820,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
26741829,NEUQUEN,Alberdi 52
26746681,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
26767112,ZAPALA,Etcheluz 650
26767282,ZAPALA,Etcheluz 650
26767289,ZAPALA,Etcheluz 650
26779119,NEUQUEN,Brown 155
26810130,NEUQUEN,Leloir 881
26810331,NEUQUEN,Leloir 881
26810386,NEUQUEN,Leloir 881
26810469,NEUQUEN,Leloir 881
26810561,NEUQUEN,Alberdi 52
26851030,JUNIN DLANDES,Lamadrid 130
26866552,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
26985128,ZAPALA,Etcheluz 650
26999106,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
26999552,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
27046573,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
27046589,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
27046993,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
27053723,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
27071167,ZAPALA,Etcheluz 650
27089768,CHOS MALAL,9 de Julio y Sarmiento
27094219,NEUQUEN,VOLANTE
27096993,NEUQUEN,Leloir 881
27107057,NEUQUEN,Basavilbaso 297
27107346,NEUQUEN,Brown 155
27107353,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
27107384,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
27167277,ZAPALA,Etcheluz 650
27193614,NEUQUEN,Leloir 881
27211835,ZAPALA,Etcheluz 650
27238023,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
27238120,SMLANDES,Elordi 485
27238168,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
27238202,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
27238208,RINCONDLS,Mendoza 273
27240016,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
27309222,NEUQUEN,Alberdi 52
27322662,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
27322799,JUNIN DLANDES,Lamadrid 130
27322800,ZAPALA,Etcheluz 650
27322879,ZAPALA,Etcheluz 650
27322976,ZAPALA,Etcheluz 650
27323061,NEUQUEN,Alberdi 52
27323167,NEUQUEN,Alberdi 52
27323691,NEUQUEN,Alberdi 52
27327079,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
27327114,JUNIN DLANDES,Lamadrid 130
27327269,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
27352250,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
27382408,NEUQUEN,Brown 155
27473209,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
27488906,CHOS MALAL,9 de Julio y Sarmiento
27493223,NEUQUEN,Alberdi 52
27493317,NEUQUEN,Leloir 881
27493371,NEUQUEN,Brown 155
27525844,NEUQUEN,Brown 155
27526554,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
27559586,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
27579142,NEUQUEN,Brown 155
27632537,ZAPALA,Etcheluz 650
27640412,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
27661598,ZAPALA,Etcheluz 650
27666497,NEUQUEN,Alberdi 52
27666543,NEUQUEN,Basavilbaso 297
27666586,NEUQUEN,Alberdi 52
27669405,NEUQUEN,Alberdi 52
27674844,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
27682906,NEUQUEN,Leloir 881
27687948,NEUQUEN,Alberdi 52
27708502,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
27711598,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
27722556,NEUQUEN,Leloir 881
27728085,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
27739887,NEUQUEN,Alberdi 52
27766166,ZAPALA,Etcheluz 650
27773017,NEUQUEN,Alberdi 52
27773095,NEUQUEN,Basavilbaso 297
27789802,SMLANDES,Elordi 485
27797123,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
27797199,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
27797227,NEUQUEN,Brown 155
27839235,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
27864224,NEUQUEN,Alberdi 52
27884191,NEUQUEN,Basavilbaso 297
27884302,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
27979855,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
27987084,JUNIN DLANDES,Lamadrid 130
27987134,ZAPALA,Etcheluz 650
27987169,ZAPALA,Etcheluz 650
27987194,ZAPALA,Etcheluz 650
27987204,ZAPALA,Etcheluz 650
27987242,ZAPALA,Etcheluz 650
27987490,RINCONDLS,Mendoza 273
27993125,ZAPALA,Etcheluz 650
27994036,CHOS MALAL,9 de Julio y Sarmiento
27994040,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
27994041,CHOS MALAL,9 de Julio y Sarmiento
27994050,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
27994104,NEUQUEN,9 de Julio y Sarmiento
27994115,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
27994186,NEUQUEN,Leloir 881
27994316,JUNIN DLANDES,Lamadrid 130
27994477,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
28002835,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
28005029,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
28008951,NEUQUEN,Alberdi 52
28037902,CHOS MALAL,9 de Julio y Sarmiento
28063216,CHOS MALAL,9 de Julio y Sarmiento
28063934,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
28111954,JUNIN DLANDES,Lamadrid 130
28123971,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
28124656,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
28125796,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
28132919,NEUQUEN,Leloir 881
28155482,AÑELO,CORREO
28156201,NEUQUEN,Basavilbaso 297
28160348,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
28160445,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
28180350,NEUQUEN,Leloir 881
28180527,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
28180590,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
28180606,JUNIN DLANDES,Lamadrid 130
28207857,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
28219388,JUNIN DLANDES,Lamadrid 130
28234492,NEUQUEN,Basavilbaso 297
28234638,ZAPALA,Etcheluz 650
28234989,ZAPALA,Etcheluz 650
28275275,SMLANDES,Elordi 485
28275797,NEUQUEN,Basavilbaso 297
28275798,JUNIN DLANDES,Lamadrid 130
28356742,ZAPALA,Etcheluz 650
28361515,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
28361781,NEUQUEN,Alberdi 52
28361809,NEUQUEN,Alberdi 52
28381730,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
28383528,ZAPALA,Etcheluz 650
28384080,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
28387871,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
28395920,NEUQUEN,Alberdi 52
28399810,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
28399934,RINCONDLS,Mendoza 273
28400095,NEUQUEN,Basavilbaso 297
28400150,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
28452365,ZAPALA,Etcheluz 650
28468784,JUNIN DLANDES,Lamadrid 130
28470969,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
28484993,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
28485100,NEUQUEN,Alberdi 52
28485214,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
28485411,NEUQUEN,Leloir 881
28485455,NEUQUEN,Alberdi 52
28485698,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
28557872,CHOS MALAL,9 de Julio y Sarmiento
28558806,JUNIN DLANDES,Lamadrid 130
28589425,RINCONDLS,Mendoza 273
28614567,NEUQUEN,Leloir 881
28621241,NEUQUEN,Leloir 881
28621479,NEUQUEN,Leloir 881
28623313,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
28623392,NEUQUEN,Brown 155
28672402,NEUQUEN,Brown 155
28683141,JUNIN DLANDES,Lamadrid 130
28704893,ZAPALA,Etcheluz 650
28705005,ZAPALA,Etcheluz 650
28710577,NEUQUEN,Leloir 881
28718797,NEUQUEN,Alberdi 52
28718815,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
28740225,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
28752112,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
28768474,JUNIN DLANDES,Lamadrid 130
28771181,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
28781195,NEUQUEN,Leloir 881
28781892,NEUQUEN,VOLANTE
28792564,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
28792828,NEUQUEN,Alberdi 52
28792902,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
28820869,NEUQUEN,Alberdi 52
28851148,SMLANDES,Elordi 485
28859387,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
28897639,RINCONDLS,Mendoza 273
28945887,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
28946808,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
28947887,NEUQUEN,Leloir 881
28981350,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
28982225,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
28989208,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
28989371,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
28989482,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
29027308,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
29027607,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
29027784,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
29057516,ZAPALA,Etcheluz 650
29057654,ZAPALA,Etcheluz 650
29057779,ZAPALA,Etcheluz 650
29058849,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
29092554,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
29144576,RINCONDLS,Mendoza 273
29145295,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
29154111,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
29154342,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
29154383,NEUQUEN,Basavilbaso 297
29159040,NEUQUEN,Leloir 881
29159138,CHOS MALAL,9 de Julio y Sarmiento
29159139,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
29176709,NEUQUEN,Alberdi 52
29190777,NEUQUEN,Leloir 881
29235385,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
29235469,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
29267639,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
29283064,JUNIN DLANDES,Lamadrid 130
29293657,NEUQUEN,Brown 155
29329858,NEUQUEN,Leloir 881
29338371,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
29339682,JUNIN DLANDES,Lamadrid 130
29347299,NEUQUEN,Basavilbaso 297
29356137,ZAPALA,Etcheluz 650
29356445,CHOS MALAL,CORREO
29356457,SMLANDES,Elordi 485
29376618,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
29396672,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
29418455,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
29429961,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
29449321,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
29497791,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
29508805,NEUQUEN,Brown 155
29515636,NEUQUEN,Leloir 881
29515987,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
29542781,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
29547283,NEUQUEN,Leloir 881
29547459,JUNIN DLANDES,Lamadrid 130
29547641,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
29547772,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
29547780,NEUQUEN,Basavilbaso 297
29547986,NEUQUEN,Leloir 881
29554119,NEUQUEN,Leloir 881
29554308,NEUQUEN,Alberdi 52
29659274,ZAPALA,Etcheluz 650
29668383,SMLANDES,Elordi 485
29736069,CHOS MALAL,9 de Julio y Sarmiento
29736358,ZAPALA,Etcheluz 650
29736384,NEUQUEN,Brown 155
29759249,RINCONDLS,Mendoza 273
29776817,ZAPALA,Etcheluz 650
29795514,NEUQUEN,Alberdi 52
29795801,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
29795911,NEUQUEN,Alberdi 52
29830856,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
29849561,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
29861744,CHOS MALAL,9 de Julio y Sarmiento
29861978,NEUQUEN,Leloir 881
29861990,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
29873525,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
29881851,CHOS MALAL,9 de Julio y Sarmiento
29881930,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
29921018,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
29942246,ZAPALA,Etcheluz 650
29950808,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
29973028,NEUQUEN,Alberdi 52
29973095,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
29973155,NEUQUEN,Alberdi 52
30009586,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
30017104,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
30055658,NEUQUEN,Alberdi 52
30055671,NEUQUEN,VOLANTE
30055676,SMLANDES,Elordi 485
30070862,NEUQUEN,Alberdi 52
30074723,PLOTTIER,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
30080113,CHOS MALAL,9 de Julio y Sarmiento
30080174,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
30088801,NEUQUEN,Leloir 881
30091008,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
30120566,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
30132645,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
30144802,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
30144858,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
30226492,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
30231834,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
30231947,NEUQUEN,Brown 155
30231977,NEUQUEN,Leloir 881
30258412,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
30264887,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
30272775,NEUQUEN,Leloir 881
30298005,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
30325055,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
30339012,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
30342775,ZAPALA,Etcheluz 650
30383798,ZAPALA,Etcheluz 650
30387953,CHOS MALAL,9 de Julio y Sarmiento
30387961,NEUQUEN,VOLANTE
30388207,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
30388270,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
30412610,NEUQUEN,Alberdi 52
30412817,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
30414453,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
30500170,NEUQUEN,Leloir 881
30500258,NEUQUEN,Brown 155
30500608,NEUQUEN,Alberdi 52
30500720,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
30500839,NEUQUEN,Basavilbaso 297
30500879,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
30501815,NEUQUEN,Leloir 881
30518990,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
30519040,RINCONDLS,Mendoza 273
30550176,NEUQUEN,Alberdi 52
30557762,JUNIN DLANDES,Lamadrid 130
30558576,NEUQUEN,Brown 155
30584395,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
30587920,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
30587941,ZAPALA,Etcheluz 650
30587956,ZAPALA,Etcheluz 650
30588116,PLOTTIER,Alberdi 52
30588186,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
30589428,SMLANDES,Elordi 485
30589457,NEUQUEN,Alberdi 52
30620232,JUNIN DLANDES,Lamadrid 130
30688429,NEUQUEN,Basavilbaso 297
30698805,CHOS MALAL,9 de Julio y Sarmiento
30701153,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
30725664,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
30740220,NEUQUEN,Brown 155
30740229,SMLANDES,Elordi 485
30755734,CHOS MALAL,9 de Julio y Sarmiento
30788592,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
30808343,CHOS MALAL,9 de Julio y Sarmiento
30855397,RINCONDLS,Mendoza 273
30856163,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
30913108,NEUQUEN,Brown 155
30917242,NEUQUEN,Alberdi 52
30941947,NEUQUEN,Alberdi 52
30944517,NEUQUEN,Alberdi 52
30964176,SMLANDES,Elordi 485
31000210,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
31000373,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
31018143,NEUQUEN,Alberdi 52
31028965,NEUQUEN,Alberdi 52
31048788,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
31076022,NEUQUEN,Alberdi 52
31076044,NEUQUEN,Alberdi 52
31086078,ZAPALA,Etcheluz 650
31086221,ZAPALA,Etcheluz 650
31086298,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
31086348,ZAPALA,Etcheluz 650
31098375,NEUQUEN,Leloir 881
31114291,NEUQUEN,Brown 155
31125256,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
31143010,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
31166149,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
31166240,NEUQUEN,Alberdi 52
31166270,NEUQUEN,Leloir 881
31166330,JUNIN DLANDES,Lamadrid 130
31234743,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
31236840,ZAPALA,Etcheluz 650
31272412,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
31299181,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
31314150,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
31314230,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
31314282,JUNIN DLANDES,Lamadrid 130
31327713,NEUQUEN,Alberdi 52
31331026,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
31334017,NEUQUEN,VOLANTE
31335487,ZAPALA,Etcheluz 650
31341757,JUNIN DLANDES,Lamadrid 130
31359082,NEUQUEN,Leloir 881
31362857,CHOS MALAL,9 de Julio y Sarmiento
31456443,NEUQUEN,Brown 155
31456623,NEUQUEN,Brown 155
31456629,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
31456698,NEUQUEN,Leloir 881
31456733,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
31456843,NEUQUEN,Basavilbaso 297
31456891,NEUQUEN,Alberdi 52
31465533,NEUQUEN,Brown 155
31465540,ZAPALA,Etcheluz 650
31465572,ZAPALA,Etcheluz 650
31465696,ZAPALA,Etcheluz 650
31478074,ZAPALA,Etcheluz 650
31483526,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
31483978,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
31499672,JUNIN DLANDES,Lamadrid 130
31528400,NEUQUEN,Leloir 881
31607669,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
31613661,NEUQUEN,Basavilbaso 297
31613749,NEUQUEN,Basavilbaso 297
31625923,SMLANDES,Elordi 485
31651861,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
31665184,ZAPALA,Etcheluz 650
31687897,CHOS MALAL,9 de Julio y Sarmiento
31687988,CHOS MALAL,9 de Julio y Sarmiento
31704880,CHOS MALAL,9 de Julio y Sarmiento
31796558,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
31832053,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
31873736,LAS LAJAS,CORREO
31930050,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
31931931,JUNIN DLANDES,Lamadrid 130
31950221,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
31965033,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
32020371,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
32020427,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
32020497,ZAPALA,Etcheluz 650
32020817,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
32021154,ZAPALA,Etcheluz 650
32021383,SMLANDES,Lelor
32021505,CHOS MALAL,9 de Julio y Sarmiento
32021655,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
32021671,ZAPALA,Etcheluz 650
32056946,NEUQUEN,Alberdi 52
32120196,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
32142927,ZAPALA,Etcheluz 650
32160830,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
32212664,NEUQUEN,Alberdi 52
32222339,CHOS MALAL,9 de Julio y Sarmiento
32234563,NEUQUEN,Brown 155
32247457,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
32292984,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
32293027,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
32293065,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
32293195,NEUQUEN,Brown 155
32293259,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
32334327,NEUQUEN,Brown 155
32344318,NEUQUEN,Leloir 881
32346355,ZAPALA,Etcheluz 650
32389884,NEUQUEN,Brown 155
32402086,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
32427467,RINCONDLS,Mendoza 273
32428035,NEUQUEN,Leloir 881
32428268,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
32428459,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
32518609,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
32537618,NEUQUEN,Alberdi 52
32544628,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
32568548,ZAPALA,Etcheluz 650
32568713,NEUQUEN,Leloir 881
32570494,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
32577117,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
32577124,ZAPALA,Etcheluz 650
32577307,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
32578932,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
32604793,NEUQUEN,Leloir 881
32613215,SMLANDES,Elordi 485
32665445,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
32694429,NEUQUEN,Leloir 881
32694986,CHOS MALAL,9 de Julio y Sarmiento
32695043,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
32695073,CHOS MALAL,9 de Julio y Sarmiento
32710112,NEUQUEN,Alberdi 52
32744597,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
32770431,CHOS MALAL,9 de Julio y Sarmiento
32775733,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
32778932,NEUQUEN,Alberdi 52
32779111,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
32807173,JUNIN DLANDES,Lamadrid 130
32813300,ZAPALA,Etcheluz 650
32813322,ZAPALA,Etcheluz 650
32829309,CHOS MALAL,9 de Julio y Sarmiento
32838007,NEUQUEN,Brown 155
32839603,JUNIN DLANDES,Lamadrid 130
32841945,JUNIN DLANDES,Lamadrid 130
32887359,NEUQUEN,Basavilbaso 297
32893932,NEUQUEN,Leloir 881
32909077,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
32951472,CHOS MALAL,9 de Julio y Sarmiento
32963801,CHOS MALAL,9 de Julio y Sarmiento
32974583,NEUQUEN,Leloir 881
32974735,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
32986685,NEUQUEN,Alberdi 52
32986933,JUNIN DLANDES,Lamadrid 130
33043296,ZAPALA,Etcheluz 650
33059174,NEUQUEN,Leloir 881
33113590,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
33178711,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
33178974,NEUQUEN,VOLANTE
33197066,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
33197272,NEUQUEN,Brown 155
33198573,NEUQUEN,Leloir 881
33205604,JUNIN DLANDES,Lamadrid 130
33291521,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
33291882,NEUQUEN,Leloir 881
33292108,ZAPALA,Etcheluz 650
33292117,ZAPALA,Etcheluz 650
33292445,CHOS MALAL,9 de Julio y Sarmiento
33293557,ZAPALA,Etcheluz 650
33331042,NEUQUEN,Brown 155
33384440,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
33384629,NEUQUEN,Leloir 881
33396695,ZAPALA,Etcheluz 650
33426332,CHOS MALAL,9 de Julio y Sarmiento
33426398,CHOS MALAL,9 de Julio y Sarmiento
33447935,JUNIN DLANDES,Lamadid 130
33464630,NEUQUEN,Leloir 881
33474933,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
33476556,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
33476774,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
33507848,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
33566613,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
33566744,NEUQUEN,Alberdi 52
33566983,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
33566991,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
33576036,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
33615564,ZAPALA,Etcheluz 650
33615685,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
33618586,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
33621796,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
33637056,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
33645209,NEUQUEN,Basavilbaso 297
33653974,CHOS MALAL,9 de Julio y Sarmiento
33673373,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
33673376,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
33673379,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
33713981,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
33721672,PLOTTIER,Leloir 881
33743915,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
33838396,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
33917450,NEUQUEN,Alberdi 52
33917566,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
33942755,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
33942870,EL HUECU,CORREO
33952017,NEUQUEN,Alberdi 52
33952122,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
33952251,NEUQUEN,Leloir 881
33952556,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
33952963,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
33952965,NEUQUEN,Brown 155
34032611,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
34088197,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
34122119,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
34122138,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
34122281,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
34125039,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
34125184,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
34139383,SMLANDES,Elordi 485
34141010,NEUQUEN,Alberdi 52
34220641,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
34223045,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
34292044,NEUQUEN,Brown 155
34292231,NEUQUEN,Alberdi 52
34292476,NEUQUEN,Alberdi 52
34293491,NEUQUEN,Leloir 881
34298859,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
34310832,NEUQUEN,La Rioja 486 Salon "J.Izquierdo" SEJuN
34332921,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
34388871,JUNIN DLANDES,Lamadrid 130
34439024,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
34482463,NEUQUEN,Leloir 881
34545812,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
34608517,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
34654511,NEUQUEN,Basavilbaso 297
34657726,CHOS MALAL,9 de Julio y Sarmiento
34657880,CHOS MALAL,9 de Julio y Sarmiento
34658850,ZAPALA,Etcheluz 650
34661534,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
34661993,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
34717897,NEUQUEN,Leloir 881
34771734,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
34803674,RINCONDLS,Mendoza 273
34803781,NEUQUEN,Leloir 881
34812788,NEUQUEN,Alberdi 52
34812821,NEUQUEN,Basavilbaso 297
34866135,NEUQUEN,Alberdi 52
34866177,RINCONDLS,Mendoza 273
34866439,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
34866905,NEUQUEN,Leloir 881
34870308,RINCONDLS,Mendoza 273
34882527,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
34882533,NEUQUEN,Leloir 881
34944997,PLOTTIER,Leloir 881
34980788,NEUQUEN,Leloir 881
35037572,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
35037827,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
35058748,NEUQUEN,Alberdi 52
35079124,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
35088635,ZAPALA,Etcheluz 650
35165380,NEUQUEN,Brown 155
35178391,ZAPALA,Etcheluz 650
35178464,ZAPALA,Etcheluz 650
35187665,NEUQUEN,Basavilbaso 297
35187685,NEUQUEN,Brown 155
35240371,SMLANDES,Elordi 485
35310295,NEUQUEN,VOLANTE
35310353,CHOS MALAL,9 de Julio y Sarmiento
35310431,JUNIN DLANDES,Lamadrid 130
35310844,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
35310850,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
35312483,RINCONDLS,Mendoza 273
35354813,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
35354826,NEUQUEN,Basavilbaso 297
35355782,ZAPALA,Etcheluz 650
35386960,RINCONDLS,Mendoza 273
35492046,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
35492179,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
35492378,ANDACOLLO,CORREO
35493227,ZAPALA,Etcheluz 650
35493324,NEUQUEN,Leloir 881
35493515,NEUQUEN,Alberdi 52
35493552,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
35493614,NEUQUEN,Leloir 881
35557147,JUNIN DLANDES,Lamadrid 130
35557237,JUNIN DLANDES,Lamadrid 130
35571540,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
35596492,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
35601390,NEUQUEN,Alberdi 52
35655528,NEUQUEN,Leloir 881
35655932,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
35656146,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
35656161,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
35804613,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
35834761,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
35834859,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
35835322,RINCONDLS,Mendoza 273
35864503,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
35885842,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
35889838,ZAPALA,Etcheluz 650
35931560,ZAPALA,Etcheluz 650
35968889,ZAPALA,Etcheluz 650
35968922,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
35968937,ZAPALA,Etcheluz 650
36112779,NEUQUEN,Alberdi 52
36151266,ZAPALA,Etcheluz 650
36151715,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
36152066,NEUQUEN,Brown 155
36152232,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
36191974,CHOS MALAL,9 de Julio y Sarmiento
36256808,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
36257129,NEUQUEN,Alberdi 52
36257276,CHOS MALAL,9 de Julio y Sarmiento
36257923,NEUQUEN,Basavilbaso 297
36257983,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
36362788,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
36376280,ZAPALA,Etcheluz 650
36376542,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
36434318,ZAPALA,Etcheluz 650
36527455,ZAPALA,Etcheluz 650
36652762,RINCONDLS,Mendoza 273
36679625,CHOS MALAL,9 de Julio y Sarmiento
36692647,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
36692665,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
36692752,JUNIN DLANDES,Lamadrid 130
36732621,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
36766951,ZAPALA,Etcheluz 650
36800189,JUNIN DLANDES,Lamadrid 130
36800272,NEUQUEN,Alberdi 52
36800394,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
36800404,NEUQUEN,Alberdi 52
36800405,NEUQUEN,Alberdi 52
36800925,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
36840578,ZAPALA,Etcheluz 650
36841102,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
36841407,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
36841664,ZAPALA,Etcheluz 650
37101496,ALUMINÉ,CORREO
37175636,NEUQUEN,Alberdi 52
37348383,NEUQUEN,Alberdi 52
37364552,JUNIN DLANDES,Lamadrid 130
37413700,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
37555293,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
37603480,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
37757541,NEUQUEN,Alberdi 52
37757542,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
37757903,PLOTTIER,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
37757934,CHOS MALAL,9 de Julio y Sarmiento
37763589,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
37856460,NEUQUEN,Leloir 881
37857396,ZAPALA,Etcheluz 650
37943808,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
37946086,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
37946203,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
38063755,NEUQUEN,Leloir 881
38082039,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
38204315,JUNIN DLANDES,Lamadrid 130
38225961,JUNIN DLANDES,Lamadrid 130
38432137,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
38492531,NEUQUEN,Alberdi 52
38494329,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
38547807,NEUQUEN,Basavilbaso 297
38584233,NEUQUEN,Alberdi 52
38710759,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
38809233,VLANGOSTURA,Boulevard Pascotto esquina Sahiueque
38812639,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
38813212,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
38813392,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
39130818,ZAPALA,Etcheluz 650
39130897,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
39131798,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
39157360,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
39162884,NEUQUEN,Leloir 686 Ciudad Judicial  Ala DERECHA paralela Leloir
39523870,ZAPALA,Etcheluz 650
39696785,RINCONDLS,Mendoza 273
39881923,NEUQUEN,Basavilbaso 297
40067149,ZAPALA,Etcheluz 650
40183161,JUNIN DLANDES,Lamadrid 130
40294308,CUTRAL CO,J.J.Valle 510 entre Freyre y Misiones
40295045,CHOS MALAL,9 de Julio y Sarmiento
40443031,RINCONDLS,Mendoza 273
41045849,NEUQUEN,Leloir 686 Ciudad Judicial  Mrios.Publicos Ala IZQUIERDA
41242363,ZAPALA,Etcheluz 650
43215531,RINCONDLS,Mendoza 273
45180446,RINCONDLS,Mendoza 273
92909581,NEUQUEN,Brown 155

    `;

    // Procesar los datos del padrón en un formato fácil de buscar
    const padron = padronData.trim().split('\n').map(line => {
        const parts = line.split(',');
        return {
            dni: parts[0].trim(),
            localidad: parts[1].trim(),
            urna: parts[2].trim()
        };
    });

    const searchDNI = () => {
        const dniToSearch = dniInput.value.trim();

        // Limpiar resultados anteriores y mensajes de error
        displayDNI.textContent = '';
        displayLocalidad.textContent = '';
        displayURNA.textContent = '';
        errorMessage.textContent = '';

        if (!dniToSearch) {
            errorMessage.textContent = 'Por favor, ingresa un DNI.';
            return;
        }

        const foundEntry = padron.find(entry => entry.dni === dniToSearch);

        if (foundEntry) {
            displayDNI.textContent = foundEntry.dni;
            displayLocalidad.textContent = foundEntry.localidad;
            displayURNA.textContent = foundEntry.urna;
        } else {
            errorMessage.textContent = 'DNI no encontrado en el padrón.';
        }
    };

    searchButton.addEventListener('click', searchDNI);

    dniInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchDNI();
        }
    });
});