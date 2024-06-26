const options: any[] = [
  {id: 1, name:'Tiger Nixon', position:'System Architect', office:'Edinburgh', extension:'5421', startdate:'2011-04-25', salary: 320800},
  {id: 2, name:'Garrett Winters', position:'Accountant', office:'Tokyo', extension:'8422', startdate:'2011-07-25', salary: 170750},
  {id: 3, name:'Ashton Cox', position:'Junior Technical Author', office:'San Francisco', extension:'1562', startdate:'2009-01-12', salary: 86000},
  {id: 4, name:'Cedric Kelly', position:'Senior Javascript Developer', office:'Edinburgh', extension:'6224', startdate:'2012-03-29', salary: 433060},
  {id: 5, name:'Airi Satou', position:'Accountant', office:'Tokyo', extension:'5407', startdate:'2008-11-28', salary: 162700},
  {id: 6, name:'Brielle Williamson', position:'Integration Specialist', office:'New York', extension:'4804', startdate:'2012-12-02', salary: 372000},
  {id: 7, name:'Herrod Chandler', position:'Sales Assistant', office:'San Francisco', extension:'9608', startdate:'2012-08-06', salary: 137500},
  {id: 8, name:'Rhona Davidson', position:'Integration Specialist', office:'Tokyo', extension:'6200', startdate:'2010-10-14', salary: 327900},
  {id: 9, name:'Colleen Hurst', position:'Javascript Developer', office:'San Francisco', extension:'2360', startdate:'2009-09-15', salary: 205500},
  {id: 10, name:'Sonya Frost', position:'Software Engineer', office:'Edinburgh', extension:'1667', startdate:'2008-12-13', salary: 103600},
  {id: 11, name:'Jena Gaines', position:'Office Manager', office:'London', extension:'3814', startdate:'2008-12-19', salary: 90560},
  {id: 12, name:'Quinn Flynn', position:'Support Lead', office:'Edinburgh', extension:'9497', startdate:'2013-03-03', salary: 342000},
  {id: 13, name:'Charde Marshall', position:'Regional Director', office:'San Francisco', extension:'6741', startdate:'2008-10-16', salary: 470600},
  {id: 14, name:'Haley Kennedy', position:'Senior Marketing Designer', office:'London', extension:'3597', startdate:'2012-12-18', salary: 313500},
  {id: 15, name:'Tatyana Fitzpatrick', position:'Regional Director', office:'London', extension:'1965', startdate:'2010-03-17', salary: 385750},
  {id: 16, name:'Michael Silva', position:'Marketing Designer', office:'London', extension:'1581', startdate:'2012-11-27', salary: 198500},
  {id: 17, name:'Paul Byrd', position:'Chief Financial Officer (CFO)', office:'New York', extension:'3059', startdate:'2010-06-09', salary: 725000},
  {id: 18, name:'Gloria Little', position:'Systems Administrator', office:'New York', extension:'1721', startdate:'2009-04-10', salary: 237500},
  {id: 19, name:'Bradley Greer', position:'Software Engineer', office:'London', extension:'2558', startdate:'2012-10-13', salary: 132000},
  {id: 20, name:'Dai Rios', position:'Personnel Lead', office:'Edinburgh', extension:'2290', startdate:'2012-09-26', salary: 217500},
  {id: 21, name:'Jenette Caldwell', position:'Development Lead', office:'New York', extension:'1937', startdate:'2011-09-03', salary: 345000},
  {id: 22, name:'Yuri Berry', position:'Chief Marketing Officer (CMO)', office:'New York', extension:'6154', startdate:'2009-06-25', salary: 675000},
  {id: 23, name:'Caesar Vance', position:'Pre-Sales Support', office:'New York', extension:'8330', startdate:'2011-12-12', salary: 106450},
  {id: 24, name:'Doris Wilder', position:'Sales Assistant', office:'Sydney', extension:'3023', startdate:'2010-09-20', salary: 85600},
  {id: 25, name:'Angelica Ramos', position:'Chief Executive Officer (CEO)', office:'London', extension:'5797', startdate:'2009-10-09', salary: 1200000},
  {id: 26, name:'Gavin Joyce', position:'Developer', office:'Edinburgh', extension:'8822', startdate:'2010-12-22', salary: 92575},
  {id: 27, name:'Jennifer Chang', position:'Regional Director', office:'Singapore', extension:'9239', startdate:'2010-11-14', salary: 357650},
  {id: 28, name:'Brenden Wagner', position:'Software Engineer', office:'San Francisco', extension:'1314', startdate:'2011-06-07', salary: 206850},
  {id: 29, name:'Fiona Green', position:'Chief Operating Officer (COO)', office:'San Francisco', extension:'2947', startdate:'2010-03-11', salary: 850000},
  {id: 30, name:'Shou Itou', position:'Regional Marketing', office:'Tokyo', extension:'8899', startdate:'2011-08-14', salary: 163000},
  {id: 31, name:'Michelle House', position:'Integration Specialist', office:'Sydney', extension:'2769', startdate:'2011-06-02', salary: 95400},
  {id: 32, name:'Suki Burks', position:'Developer', office:'London', extension:'6832', startdate:'2009-10-22', salary: 114500},
  {id: 33, name:'Prescott Bartlett', position:'Technical Author', office:'London', extension:'3606', startdate:'2011-05-07', salary: 145000},
  {id: 34, name:'Gavin Cortez', position:'Team Leader', office:'San Francisco', extension:'2860', startdate:'2008-10-26', salary: 235500},
  {id: 35, name:'Martena Mccray', position:'Post-Sales support', office:'Edinburgh', extension:'8240', startdate:'2011-03-09', salary: 324050},
  {id: 36, name:'Unity Butler', position:'Marketing Designer', office:'San Francisco', extension:'5384', startdate:'2009-12-09', salary: 85675},
  {id: 37, name:'Unity Yang', position:'Marketing Designer', office:'San Francisco', extension:'47', startdate:'2009-12-09', salary: 85675},
  {id: 38, name:'Howard Hatfield', position:'Office Manager', office:'San Francisco', extension:'51', startdate:'2008-12-16', salary: 164500},
  {id: 39, name:'Hope Fuentes', position:'Secretary', office:'San Francisco', extension:'41', startdate:'2010-02-12', salary: 109850},
  {id: 40, name:'Vivian Harrell', position:'Financial Controller', office:'San Francisco', extension:'62', startdate:'2009-02-14', salary: 452500},
  {id: 41, name:'Timothy Mooney', position:'Office Manager', office:'London', extension:'37', startdate:'2008-12-11', salary: 136200},
  {id: 42, name:'Jackson Bradshaw', position:'Director', office:'New York', extension:'65', startdate:'2008-09-26', salary: 645750},
  {id: 43, name:'Olivia Liang', position:'Support Engineer', office:'Singapore', extension:'64', startdate:'2011-02-03', salary: 234500},
  {id: 44, name:'Bruno Nash', position:'Software Engineer', office:'London', extension:'38', startdate:'2011-05-03', salary: 163500},
  {id: 45, name:'Sakura Yamamoto', position:'Support Engineer', office:'Tokyo', extension:'37', startdate:'2009-08-19', salary: 139575},
  {id: 46, name:'Thor Walton', position:'Developer', office:'New York', extension:'61', startdate:'2013-08-11', salary: 98540},
  {id: 47, name:'Finn Camacho', position:'Support Engineer', office:'San Francisco', extension:'47', startdate:'2009-07-07', salary: 87500},
  {id: 48, name:'Serge Baldwin', position:'Data Coordinator', office:'Singapore', extension:'64', startdate:'2012-04-09', salary: 138575},
  {id: 49, name:'Zenaida Frank', position:'Software Engineer', office:'New York', extension:'63', startdate:'2010-01-04', salary: 125250},
  {id: 50, name:'Zorita Serrano', position:'Software Engineer', office:'San Francisco', extension:'56', startdate:'2012-06-01', salary: 115000},
  {id: 51, name:'Jennifer Acosta', position:'Junior Javascript Developer', office:'Edinburgh', extension:'43', startdate:'2013-02-01', salary: 75650},
  {id: 52, name:'Cara Stevens', position:'Sales Assistant', office:'New York', extension:'46', startdate:'2011-12-06', salary: 145600},
  {id: 53, name:'Hermione Butler', position:'Regional Director', office:'London', extension:'47', startdate:'2011-03-21', salary: 356250},
  {id: 54, name:'Lael Greer', position:'Systems Administrator', office:'London', extension:'21', startdate:'2009-02-27', salary: 103500},
  {id: 55, name:'Jonas Alexander', position:'Developer', office:'San Francisco', extension:'30', startdate:'2010-07-14', salary: 86500},
  {id: 56, name:'Shad Decker', position:'Regional Director', office:'Edinburgh', extension:'51', startdate:'2008-11-13', salary: 183000},
  {id: 57, name:'Michael Bruce', position:'Javascript Developer', office:'Singapore', extension:'29', startdate:'2011-06-27', salary: 183000},
  {id: 58, name:'Donna Snider', position:'Customer Support', office:'New York', extension:'27', startdate:'2011-01-25', salary: 112000},
  {id: 59, name:'Unity Pugh', position:'Vue Developer', office:'Curicó', extension:'9958', startdate:'2005-11-02', salary: 37000},
  {id: 60, name:'Theodore Duran', position:'Vue Developer', office:'Dhanbad', extension:'8971', startdate:'1999-07-04', salary: 97000},
  {id: 61, name:'Kylie Bishop', position:'Vue Developer', office:'Norman', extension:'3147', startdate:'2005-08-09', salary: 63000},
  {id: 62, name:'Willow Gilliam', position:'Vue Developer', office:'Amqui', extension:'3497', startdate:'2009-11-29', salary: 30000},
  {id: 63, name:'Blossom Dickerson', position:'Vue Developer', office:'Kempten', extension:'5018', startdate:'2006-09-11', salary: 17000},
  {id: 64, name:'Elliott Snyder', position:'Vue Developer', office:'Enines', extension:'3925', startdate:'2006-08-03', salary: 57000},
  {id: 65, name:'Castor Pugh', position:'Vue Developer', office:'Neath', extension:'9488', startdate:'2014-12-23', salary: 93000},
  {id: 66, name:'Pearl Carlson', position:'Vue Developer', office:'Cobourg', extension:'6231', startdate:'2014-08-31', salary: 100000},
  {id: 67, name:'Deirdre Bridges', position:'Vue Developer', office:'Eberswalde-Finow', extension:'1579', startdate:'2014-08-26', salary: 44000},
  {id: 68, name:'Daniel Baldwin', position:'Vue Developer', office:'Moircy', extension:'6095', startdate:'2000-01-11', salary: 33000},
  {id: 69, name:'Phelan Kane', position:'Vue Developer', office:'Germersheim', extension:'9519', startdate:'1999-04-16', salary: 77000},
  {id: 70, name:'Quentin Salas', position:'Vue Developer', office:'Los Andes', extension:'1339', startdate:'2011-01-26', salary: 49000},
  {id: 71, name:'Armand Suarez', position:'Vue Developer', office:'Funtua', extension:'6583', startdate:'1999-11-06', salary: 9000},
  {id: 72, name:'Gretchen Rogers', position:'Vue Developer', office:'Moxhe', extension:'5393', startdate:'1998-10-26', salary: 24000},
  {id: 73, name:'Harding Thompson', position:'Vue Developer', office:'Abeokuta', extension:'2824', startdate:'2008-06-08', salary: 10000},
  {id: 74, name:'Mira Rocha', position:'Vue Developer', office:'Port Harcourt', extension:'4393', startdate:'2002-04-10', salary: 14000},
  {id: 75, name:'Drew Phillips', position:'Vue Developer', office:'Goes', extension:'2931', startdate:'2011-10-18', salary: 58000},
  {id: 76, name:'Emerald Warner', position:'Vue Developer', office:'Chiavari', extension:'6205', startdate:'2002-08-04', salary: 58000},
  {id: 77, name:'Colin Burch', position:'Vue Developer', office:'Anamur', extension:'7457', startdate:'2004-02-01', salary: 34000},
  {id: 78, name:'Russell Haynes', position:'Vue Developer', office:'Frascati', extension:'8916', startdate:'2015-04-28', salary: 18000},
  {id: 79, name:'Brennan Brooks', position:'Vue Developer', office:'Olmué', extension:'9011', startdate:'2000-04-18', salary: 2000},
  {id: 80, name:'Kane Anthony', position:'Vue Developer', office:'LaSalle', extension:'8075', startdate:'2006-05-21', salary: 93000},
  {id: 81, name:'Scarlett Hurst', position:'Vue Developer', office:'Brampton', extension:'1019', startdate:'2015-07-01', salary: 94000},
  {id: 82, name:'James Scott', position:'Vue Developer', office:'Meux', extension:'3008', startdate:'2007-05-30', salary: 55000},
  {id: 83, name:'Desiree Ferguson', position:'Vue Developer', office:'Gojra', extension:'9054', startdate:'2009-02-15', salary: 81000},
  {id: 84, name:'Elaine Bishop', position:'Vue Developer', office:'Petrópolis', extension:'9160', startdate:'2008-12-23', salary: 48000},
  {id: 85, name:'Hilda Nelson', position:'Vue Developer', office:'Posina', extension:'6307', startdate:'2004-05-23', salary: 76000},
  {id: 86, name:'Evangeline Beasley', position:'Vue Developer', office:'Caplan', extension:'3820', startdate:'2009-12-03', salary: 62000},
  {id: 87, name:'Wyatt Riley', position:'Vue Developer', office:'Cavaion Veronese', extension:'5694', startdate:'2012-02-19', salary: 67000},
  {id: 88, name:'Wyatt Mccarthy', position:'Vue Developer', office:'Patan', extension:'3547', startdate:'2014-06-23', salary: 9000},
  {id: 89, name:'Cairo Rice', position:'Vue Developer', office:'Ostra Vetere', extension:'6273', startdate:'2016-02-27', salary: 13000},
  {id: 90, name:'Sylvia Peters', position:'Vue Developer', office:'Arrah', extension:'6829', startdate:'2015-03-02', salary: 13000},
  {id: 91, name:'Kasper Craig', position:'Vue Developer', office:'Firenze', extension:'5515', startdate:'2015-04-26', salary: 56000},
  {id: 92, name:'Leigh Ruiz', position:'Vue Developer', office:'Lac Ste. Anne', extension:'5112', startdate:'2001-09-02', salary: 28000},
  {id: 93, name:'Athena Aguirre', position:'Vue Developer', office:'Romeral', extension:'5741', startdate:'2010-03-24', salary: 15000},
  {id: 94, name:'Riley Nunez', position:'Vue Developer', office:'Sart-Eustache', extension:'5533', startdate:'2003-02-26', salary: 30000},
  {id: 95, name:'Lois Talley', position:'Vue Developer', office:'Dorchester', extension:'9393', startdate:'2014-05-01', salary: 51000},
  {id: 96, name:'Hop Bass', position:'Vue Developer', office:'Westerlo', extension:'1024', startdate:'2012-09-25', salary: 85000},
  {id: 97, name:'Kalia Diaz', position:'Vue Developer', office:'Ichalkaranji', extension:'9184', startdate:'2013-06-26', salary: 92000},
  {id: 98, name:'Maia Pate', position:'Vue Developer', office:'Louvain-la-Neuve', extension:'6682', startdate:'2011-04-23', salary: 50000},
  {id: 99, name:'Macaulay Pruitt', position:'Vue Developer', office:'Fraser-Fort George', extension:'4457', startdate:'2015-03-08', salary: 92000},
  {id: 100, name:'Danielle Oconnor', position:'Vue Developer', office:'Neuwied', extension:'9464', startdate:'2001-05-10', salary: 17000},
  {id: 101, name:'Kato Carr', position:'Vue Developer', office:'Faridabad', extension:'4842', startdate:'2012-11-05', salary: 96000},
  {id: 102, name:'Malachi Mejia', position:'Vue Developer', office:'Vorst', extension:'7133', startdate:'2007-04-25', salary: 26000},
  {id: 103, name:'Dominic Carver', position:'Vue Developer', office:'Pointe-aux-Trembles', extension:'3476', startdate:'2014-03-14', salary: 71000},
  {id: 104, name:'Paki Santos', position:'Vue Developer', office:'Cache Creek', extension:'4424', startdate:'2001-11-18', salary: 82000},
  {id: 105, name:'Ross Hodges', position:'Vue Developer', office:'Trazegnies', extension:'1862', startdate:'2010-09-19', salary: 87000},
  {id: 106, name:'Hilda Whitley', position:'Vue Developer', office:'New Sarepta', extension:'3514', startdate:'2011-05-07', salary: 94000},
  {id: 107, name:'Roth Cherry', position:'Vue Developer', office:'Flin Flon', extension:'4006', startdate:'2008-02-09', salary: 8000},
  {id: 108, name:'Lareina Jones', position:'Vue Developer', office:'East Linton', extension:'8642', startdate:'2009-07-08', salary: 21000},
  {id: 109, name:'Joshua Weiss', position:'Vue Developer', office:'Saint-Leonard', extension:'2289', startdate:'2010-01-15', salary: 52000},
  {id: 110, name:'Kiona Lowery', position:'Vue Developer', office:'Inuvik', extension:'5952', startdate:'2002-12-17', salary: 72000},
  {id: 111, name:'Nina Rush', position:'Vue Developer', office:'Bo lhe', extension:'7567', startdate:'2008-01-27', salary: 6000},
  {id: 112, name:'Palmer Parker', position:'Vue Developer', office:'Stade', extension:'2000', startdate:'2012-07-24', salary: 58000},
  {id: 113, name:'Vielka Olsen', position:'Vue Developer', office:'Vrasene', extension:'3745', startdate:'2016-08-01', salary: 70000},
  {id: 114, name:'Meghan Cunningham', position:'Vue Developer', office:'Söke', extension:'8604', startdate:'2007-02-16', salary: 59000},
  {id: 115, name:'Iola Shaw', position:'Vue Developer', office:'Albany', extension:'6447', startdate:'2014-05-03', salary: 88000},
  {id: 116, name:'Imelda Cole', position:'Vue Developer', office:'Haasdonk', extension:'4564', startdate:'2007-11-16', salary: 79000},
  {id: 117, name:'Jerry Beach', position:'Vue Developer', office:'Gattatico', extension:'6801', startdate:'1999-07-07', salary: 36000},
  {id: 118, name:'Garrett Rocha', position:'Vue Developer', office:'Gavorrano', extension:'3938', startdate:'2000-06-08', salary: 71000},
  {id: 119, name:'Derek Kerr', position:'Vue Developer', office:'Gualdo Cattaneo', extension:'1724', startdate:'2014-01-21', salary: 89000},
  {id: 120, name:'Shad Hudson', position:'Vue Developer', office:'Salamanca', extension:'5944', startdate:'2014-10-12', salary: 98000},
  {id: 121, name:'Daryl Ayers', position:'Vue Developer', office:'Barchi', extension:'8276', startdate:'2012-12-11', salary: 88000},
  {id: 122, name:'Caleb Livingston', position:'Vue Developer', office:'Fatehpur', extension:'3094', startdate:'2014-02-13', salary: 8000},
  {id: 123, name:'Sydney Meyer', position:'Vue Developer', office:'Neubrandenburg', extension:'4576', startdate:'2015-06-02', salary: 22000},
  {id: 124, name:'Lani Lawrence', position:'Vue Developer', office:'Turnhout', extension:'8501', startdate:'2008-07-05', salary: 16000},
  {id: 125, name:'Allegra Shepherd', position:'Vue Developer', office:'Meeuwen-Gruitrode', extension:'2576', startdate:'2004-04-19', salary: 41000},
  {id: 126, name:'Fallon Reyes', position:'Vue Developer', office:'Monceau-sur-Sambre', extension:'3178', startdate:'2005-02-15', salary: 16000},
  {id: 127, name:'Karen Whitley', position:'Vue Developer', office:'Sluis', extension:'4357', startdate:'2003-02-05', salary: 23000},
  {id: 128, name:'Stewart Stephenson', position:'Vue Developer', office:'Villa Faraldi', extension:'5350', startdate:'2003-05-07', salary: 65000},
  {id: 129, name:'Ursula Reynolds', position:'Vue Developer', office:'Southampton', extension:'7544', startdate:'1999-12-16', salary: 61000},
  {id: 130, name:'Adrienne Winters', position:'Vue Developer', office:'Laguna Blanca', extension:'4425', startdate:'2014-09-15', salary: 24000},
  {id: 131, name:'Francesca Brock', position:'Vue Developer', office:'Oban', extension:'1337', startdate:'2000-12-06', salary: 90000},
  {id: 132, name:'Ursa Davenport', position:'Vue Developer', office:'New Plymouth', extension:'7629', startdate:'2013-06-27', salary: 37000},
  {id: 133, name:'Mark Brock', position:'Vue Developer', office:'Veenendaal', extension:'3310', startdate:'2006-08-09', salary: 41000},
  {id: 134, name:'Dale Rush', position:'Vue Developer', office:'Chicoutimi', extension:'5050', startdate:'2000-03-27', salary: 2000},
  {id: 135, name:'Shellie Murphy', position:'Vue Developer', office:'Marlborough', extension:'3845', startdate:'2013-11-13', salary: 72000},
  {id: 136, name:'Porter Nicholson', position:'Vue Developer', office:'Bismil', extension:'4539', startdate:'2012-10-22', salary: 23000},
  {id: 137, name:'Oliver Huber', position:'Vue Developer', office:'Hann che', extension:'1265', startdate:'2002-11-01', salary: 94000},
  {id: 138, name:'Calista Maynard', position:'Vue Developer', office:'Pozzuolo del Friuli', extension:'3315', startdate:'2006-03-23', salary: 5000},
  {id: 139, name:'Lois Vargas', position:'Vue Developer', office:'Cumberland', extension:'6825', startdate:'1999-04-25', salary: 50000},
  {id: 140, name:'Hermione Dickson', position:'Vue Developer', office:'Woodstock', extension:'2785', startdate:'2001-03-22', salary: 2000},
  {id: 141, name:'Dalton Jennings', position:'Vue Developer', office:'Dudzele', extension:'5416', startdate:'2015-09-02', salary: 74000},
  {id: 142, name:'Cathleen Kramer', position:'Vue Developer', office:'Crowsnest Pass', extension:'3380', startdate:'2012-07-27', salary: 53000},
  {id: 143, name:'Zachery Morgan', position:'Vue Developer', office:'Collines-de-lOutaouais', extension:'6730', startdate:'2006-04-09', salary: 51000},
  {id: 144, name:'Yoko Freeman', position:'Vue Developer', office:'Lidköping', extension:'4077', startdate:'2002-12-27', salary: 48000},
  {id: 145, name:'Chaim Waller', position:'Vue Developer', office:'North Shore', extension:'4240', startdate:'2010-07-25', salary: 25000},
  {id: 146, name:'Berk Johnston', position:'Vue Developer', office:'Vergnies', extension:'4532', startdate:'2016-02-23', salary: 93000},
  {id: 147, name:'Tad Munoz', position:'Vue Developer', office:'Saint-Nazaire', extension:'2902', startdate:'2010-09-05', salary: 65000},
  {id: 148, name:'Vivien Dominguez', position:'Vue Developer', office:'Bargagli', extension:'5653', startdate:'2001-09-01', salary: 86000},
  {id: 149, name:'Carissa Lara', position:'Vue Developer', office:'Sherborne', extension:'3241', startdate:'2015-07-12', salary: 72000},
  {id: 150, name:'Hammett Gordon', position:'Vue Developer', office:'Wah', extension:'8101', startdate:'1998-06-09', salary: 20000},
  {id: 151, name:'Walker Nixon', position:'Vue Developer', office:'Metz', extension:'6901', startdate:'2011-12-11', salary: 41000},
  {id: 152, name:'Nathan Espinoza', position:'Vue Developer', office:'Strathcona County', extension:'5956', startdate:'2002-01-25', salary: 47000},
  {id: 153, name:'Kelly Cameron', position:'Vue Developer', office:'Fontaine-Valmont', extension:'4836', startdate:'1999-02-07', salary: 24000},
  {id: 154, name:'Kyra Moses', position:'Vue Developer', office:'Quenast', extension:'3796', startdate:'1998-07-07', salary: 68000},
  {id: 155, name:'Grace Bishop', position:'Vue Developer', office:'Rodez', extension:'8340', startdate:'2012-02-10', salary: 4000},
  {id: 156, name:'Haviva Hernandez', position:'Vue Developer', office:'Suwałki', extension:'8136', startdate:'2000-01-30', salary: 16000},
  {id: 157, name:'Alisa Horn', position:'Vue Developer', office:'Ucluelet', extension:'9853', startdate:'2007-01-11', salary: 39000},
  {id: 158, name:'Zelenia Roman', position:'Vue Developer', office:'Redwater', extension:'7516', startdate:'2012-03-03', salary: 31000},
  { id: 159, name: 'Hanbal Tedir', position: 'Alga.js Developer', office: 'Jakarta', extension: 2456, startdate: '2011-10-11', salary: 160000 },
  { id: 160, name: 'Dawoud Tedir', position: 'Alga.js Developer', office: 'Medan', extension: 2456, startdate: '2011-10-11', salary: 270000 },
  { id: 161, name: 'Harist Tedir', position: 'Alga.js Developer', office: 'Sigli', extension: 2456, startdate: '2011-10-11', salary: 150000 },
  { id: 162, name: 'Annisa Tedir', position: 'Alga.js Developer', office: 'Banda Aceh', extension: 2456, startdate: '2011-10-11', salary: 290000 },
  { id: 163, name: 'Hanbal Usman', position: 'Alga.js Developer', office: 'Langsa', extension: 2456, startdate: '2011-10-11', salary: 270000 },
  { id: 164, name: 'Dawoud Usman', position: 'Alga.js Developer', office: 'Pidie', extension: 2456, startdate: '2011-10-11', salary: 250000 },
  { id: 165, name: 'Harist Usman', position: 'Alga.js Developer', office: 'Samarinda', extension: 2456, startdate: '2011-10-11', salary: 180000 },
  { id: 166, name: 'Rizal Usman', position: 'Alga.js Developer', office: 'Balikpapan', extension: 2456, startdate: '2011-10-11', salary: 450000 },
  { id: 167, name: 'Bukhari Usman', position: 'Alga.js Developer', office: 'Makassar', extension: 2456, startdate: '2011-10-11', salary: 440000 },
  { id: 168, name: 'Boyhaki Usman', position: 'Alga.js Developer', office: 'Jaya Pura', extension: 2456, startdate: '2011-10-11', salary: 35000 },
  { id: 169, name: 'Zulkifli Usman', position: 'Alga.js Developer', office: 'Manado', extension: 2456, startdate: '2011-10-11', salary: 560000 },
  { id: 170, name: 'Teuku Usman', position: 'Alga.js Developer', office: 'Ternate', extension: 2456, startdate: '2011-10-11', salary: 580000 }
]

export const defOptions: any[] = options

export const strOptions = (prop: string = 'office') => {
  const newOptions: string[] = []
  for(const option of options) {
    if(!newOptions.includes(option[prop])) {
      newOptions.push(option[prop])
    }
  }
  return newOptions
}

export const objOptions = (prop: string = 'office') => {
  const newOptions: string[] = []
  return Array.from(options).map((option: any) => {
    if(!newOptions.includes(option[prop])) {
      newOptions.push(option[prop])
      const newOption: any = {
        id: option['id'],
        value: option[prop]
      }
      return newOption
    }
    return null
  }).filter((item: any) => item !== null)
}
