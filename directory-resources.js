/* Community resource directory entries shown inside the regional panels. */
(function () {
  const communityDirectoryEntries = {
    national: [
      { name: '211 Community Services', url: 'tel:211', category: 'Essential services', contact: 'Dial 211 · Available across Canada' },
      { name: '311 Municipal Government Non-emergency Services', url: 'tel:311', category: 'Essential services', contact: 'Dial 311 · Availability varies by province and territory' },
      { name: '511 Traffic Information', url: 'tel:511', category: 'Essential services', contact: 'Dial 511 · Availability varies by province and territory' },
      { name: '811 Provincial Health Access Line', url: 'tel:811', category: 'Essential services', contact: 'Dial 811 · Available across Canada except Nunavut' },
      { name: '988 National Suicide Prevention Hotline', url: 'tel:988', category: 'Crisis support', contact: 'Call or text 988 · Available across Canada' },
      { name: 'Service Canada dedicated VRS numbers', url: 'https://srvcanadavrs.ca/en/', category: 'Video relay access', contact: 'SIN 272-001 · Registration 272-002 · EI 272-003 · CPP 272-004 · Employer 272-005 · Dental Care 272-006' },
      { name: 'Air Canada dedicated VRS', url: 'tel:+18339842045', category: 'Dedicated business VRS', contact: '1-833-984-2045' },
      { name: 'Canada Revenue Agency dedicated VRS', url: 'tel:+18005616393', category: 'Dedicated business VRS', contact: '1-800-561-6393' },
      { name: 'Scotiabank dedicated VRS', url: 'tel:+18862674726', category: 'Dedicated business VRS', contact: '1-886-267-4726' },
      { name: 'TD Bank dedicated VRS', url: 'tel:+18442290787', category: 'Dedicated business VRS', contact: '1-844-229-0787' },
      { name: 'Canadian Association of the Deaf / Association des Sourds du Canada', url: 'https://cad-asc.ca/', category: 'National Deaf organization', contact: 'cad-asc.ca' },
      { name: 'Canadian Cultural Society of the Deaf', url: 'https://deafculturecentre.ca/ccsd/', category: 'National Deaf organization', contact: 'deafculturecentre.ca' },
      { name: 'Canadian Deafblind Association', url: 'https://www.cdbanational.com/', category: 'National Deaf organization', contact: 'cdbanational.com' },
      { name: 'Canadian Deaf Sports Association', url: 'https://assc-cdsa.com/en/', category: 'National Deaf organization', contact: 'assc-cdsa.com' },
      { name: 'Deaf Wireless Canada Consultative Committee / National Advocacy Committee', url: 'https://www.deafwireless.ca/', category: 'Accessibility and advocacy', contact: 'info@deafwireless.ca' },
      { name: 'Canadian Hard of Hearing Association', url: 'https://www.chha-ed.com/', category: 'Support organization', contact: 'Edmonton · 780-428-6622' },
      { name: 'Canadian National Institute for the Blind', url: 'https://www.cnib.ca/', category: 'Support organization', contact: 'Alberta office · 780-488-4871' },
      { name: 'Opportunities Fund for Persons with Disabilities', category: 'Employment and financial support', contact: '1-800-622-6232 · Employment and Social Development Canada' },
      { name: 'National Indigenous Deaf Cultural Gathering', url: 'https://nidgathering.wixsite.com/my-site', category: 'Indigenous resources', contact: 'nid.gathering@gmail.com' },
      { name: 'Canadian Association of Sign Language Interpreters', url: 'https://www.casli.ca/Home', category: 'Interpreting organization', contact: 'casli.ca' },
      { name: 'Canada Video Relay Service', url: 'https://srvcanadavrs.ca/en/', category: 'Video relay access', contact: '911 and 988 calls available 24/7 via VRS' },
      { name: 'Deaf Canada Travel', url: 'https://www.deafcanadacruiseresort.com/', category: 'Accessible travel', contact: 'oluehr@deafcanadatravel.ca · dunderschultz@deafcanadatravel.ca' },
      { name: 'Canada Deaf Travel', url: 'https://canadadeaftravel.com/', category: 'Accessible travel', contact: 'mjjanes24@canadadeaftravel.com · kelly@canadadeaftravel.com · suzy@canadadeaftravel.com' },
      { name: 'Deaf Youth Canada', url: 'https://dycjsc.wixsite.com/home', category: 'Youth resource', contact: 'dycjsc@gmail.com' },
      { name: 'Deaf Youth Hub', url: 'https://deafyouthhub.ca/', category: 'Youth resource', contact: 'deafyouthhub.ca' },
      { name: 'Jade’s Camp', url: 'https://www.jadescamp.com/', category: 'Youth resource', contact: 'jadescampdhh@gmail.com' }
    ],
    atlantic: [
      { name: 'Nova Scotia Community College', url: 'https://www.nscc.ca/programs-and-courses/programs/plandescr.aspx?prg=asla&pln=amsignlang', category: 'Deaf education and interpreting', contact: 'Nova Scotia · ASL/English Interpretation diploma' }
    ],
    quebec: [],
    ontario: [
      { name: 'Connect Mental Health Counselling Services', url: 'https://www.chs.ca/service/connect-mental-health-counselling-services', category: 'Emotional support and wellness', contact: 'Ontario-wide · 1-866-518-0000 · TTY 1-877-215-9530' },
      { name: 'Silent Voice Canada', url: 'https://silentvoice.ca/', category: 'Support organization', contact: 'Toronto · 416-463-1104 · TTY 416-463-3928' },
      { name: 'The Canadian Hearing Society', url: 'https://www.chs.ca/', category: 'Support organization', contact: 'Toronto · 1-866-518-0000 · TTY 1-877-215-9530' },
      { name: 'Ernest C. Drury School for the Deaf', url: 'https://ecd.pdsbnet.ca/', category: 'Deaf education', contact: 'Milton, Ontario · K–12 ASL-English programs' },
      { name: 'George Brown College – School of Deaf and Deafblind Studies', url: 'https://www.georgebrown.ca/community-services-early-childhood/deaf-deafblind-studies', category: 'Deaf education', contact: 'Toronto · deafstudies@georgebrown.ca' },
      { name: 'York University Deaf and Hard of Hearing Teacher Education Program', url: 'https://www.yorku.ca/edu/students/deaf-and-hard-of-hearing/', category: 'Deaf education', contact: 'Ontario-based · deafed@edu.yorku.ca' },
      { name: 'asign', url: 'https://www.asign.ca/', category: 'Video interpreting and accessibility', contact: 'Nepean, Ontario · 613-521-6720' },
      { name: 'VOICE for Deaf and Hard of Hearing Children', url: 'https://voicefordeafkids.com/', category: 'Youth and family support', contact: 'Oakville, Ontario · guita@voicefordeafkids.com' },
      { name: 'Tristan Kong', url: 'https://thetristankonggroup.com/', category: 'Real estate', contact: 'Mississauga · 647-409-5260' },
      { name: 'Carodoodles', url: 'https://www.carlisle-robinson.com/', category: 'Theatre and arts', contact: 'Ontario-based · carodoodles@gmail.com' }
    ],
    prairies: [
      { name: 'Police, Fire, and Ambulance Emergency Services', url: 'tel:911', category: 'Emergency support', contact: '911 · VRS, text, and voice' },
      { name: '24/7 Suicide Prevention', url: 'tel:988', category: 'Emergency support', contact: '988 · VRS, text, and voice' },
      { name: 'Edmonton Fire Rescue (Non-Emergency)', url: 'tel:+17804963900', category: 'Emergency support', contact: '780-496-3900 · VRS and voice' },
      { name: 'Non-Emergency Police', url: 'tel:+17804234567', category: 'Emergency support', contact: '780-423-4567 · TTY 780-425-1231' },
      { name: 'Crime Stoppers', url: 'tel:+18002228477', category: 'Emergency support', contact: '1-800-222-TIPS (8477)' },
      { name: 'Health Link', url: 'tel:811', category: 'Health and medical support', contact: '811 or 1-866-408-5465 · 24/7 nurse advice' },
      { name: 'Distress Line', url: 'tel:+17804824357', category: 'Health and medical support', contact: '780-482-4357' },
      { name: 'Mental Health Helpline', url: 'tel:+18773032642', category: 'Health and medical support', contact: '1-877-303-2642' },
      { name: 'Poison and Drug Information Service', url: 'tel:+18003321414', category: 'Health and medical support', contact: '1-800-332-1414' },
      { name: 'Stollery Children’s Hospital', url: 'tel:+17804078822', category: 'Health and medical support', contact: 'Edmonton · 780-407-8822' },
      { name: 'Alberta Supports Contact Centre', url: 'tel:+18776449992', category: 'Crisis and support services', contact: '1-877-644-9992' },
      { name: 'Child Abuse Hotline', url: 'tel:+18003875437', category: 'Crisis and support services', contact: '1-800-387-5437' },
      { name: 'Sexual Assault Centre of Edmonton', url: 'tel:+17804234121', category: 'Crisis and support services', contact: '780-423-4121 · 24/7 support' },
      { name: 'Seniors Abuse Helpline', url: 'tel:+17804548888', category: 'Crisis and support services', contact: '780-454-8880' },
      { name: 'Youth Empowerment & Support Services', url: 'tel:+17804687070', category: 'Crisis and support services', contact: '780-468-7070' },
      { name: 'ATCO Gas Emergency Line', url: 'tel:+18005113447', category: 'Utilities and public services', contact: '1-800-511-3447' },
      { name: 'Edmonton Bylaw Complaints', url: 'tel:311', category: 'Utilities and public services', contact: '311 or the 311 app' },
      { name: 'Edmonton Transit Service Information', url: 'tel:+17804961611', category: 'Utilities and public services', contact: '780-496-1611' },
      { name: 'Enmax Power Outage', url: 'tel:3102010', category: 'Utilities and public services', contact: '310-2010' },
      { name: '811 Health Link', url: 'https://www.albertahealthservices.ca/about/page12639.aspx', category: 'Emotional support and wellness', contact: '811 or 1-866-408-5465' },
      { name: 'Alberta Health Services (Addiction and Mental Health Services)', url: 'https://www.albertahealthservices.ca/', category: 'Emotional support and wellness', contact: 'Help Line 1-877-303-2642' },
      { name: 'Alberta Health Services – Youth Addiction and Mental Health Services', url: 'https://www.albertahealthservices.ca/', category: 'Emotional support and wellness', contact: 'Edmonton · Access 24/7 at 780-422-7383' },
      { name: 'Abner Brown, Psychologist', url: 'https://www.psychologytoday.com/ca/therapists/abner-brown-edmonton-ab/1263847', category: 'Emotional support and wellness', contact: 'Edmonton · 587-804-0253 · ASL available' },
      { name: 'Dee Dee Kay, Psychologist', url: 'https://www.psychologytoday.com/ca/therapists/dee-dee-kay-calgary-ab/218427', category: 'Emotional support and wellness', contact: 'Calgary · 403-605-9536 · English and ASL' },
      { name: 'Bethany Lenihan, Registered Provisional Psychologist', url: 'https://www.psychologytoday.com/ca/therapists/bethany-lenihan-edmonton-ab/1033427', category: 'Emotional support and wellness', contact: 'Edmonton · 780-757-9536 · ASL available' },
      { name: 'Hope for Wellness Help Line', url: 'https://hopeforwellness.ca/', category: 'Emotional support and wellness', contact: 'Indigenous support · 1-855-242-3310 · 24/7' },
      { name: 'Deena Martin, Psychologist', url: 'https://deenamartin.ca/', category: 'Emotional support and wellness', contact: 'Edmonton · 780-909-4939' },
      { name: 'Melody E. Morin, Psychologist / Level Up Wellness Group', url: 'https://www.psychologytoday.com/ca/therapists/level-up-wellness-group-beaumont-ab/482737', category: 'Emotional support and wellness', contact: 'Beaumont · 587-419-6715 · ASL support available' },
      { name: 'Calgary Association of the Deaf', url: 'https://deafcalgary.com/', category: 'Local Deaf organization', contact: 'Calgary · info@deafcalgary.com' },
      { name: 'Connect Society', url: 'https://www.connectsociety.org/', category: 'Local Deaf organization', contact: 'Edmonton and Calgary · 780-454-9581' },
      { name: 'Edmonton Association of the Deaf', url: 'https://edmontondeaf.com/', category: 'Local Deaf organization', contact: 'Edmonton · eadinfo51@gmail.com' },
      { name: 'Alberta Association of the Deaf', url: 'https://www.albertadeaf.ca/', category: 'Provincial Deaf organization', contact: 'Edmonton · aad.president1972@gmail.com' },
      { name: 'Alberta Cultural Society of the Deaf', url: 'https://www.acsd.ca/', category: 'Provincial Deaf organization and ASL courses', contact: 'Edmonton · infoacsdoffice@gmail.com' },
      { name: 'Alberta Deaf Sports Association', url: 'https://albertadeafsports.ca/', category: 'Provincial Deaf organization', contact: 'Edmonton · info@albertadeafsport.ca' },
      { name: 'Alberta Society of the DeafBlind', url: 'https://albertadeafblind.ca/', category: 'Provincial Deaf organization', contact: 'Edmonton · adsbpresident@gmail.com' },
      { name: 'Canadian Hard of Hearing Association (Edmonton)', url: 'https://www.chha-ed.com/', category: 'Support organization', contact: '780-428-6622' },
      { name: 'Canadian National Institute for the Blind (Alberta)', url: 'https://www.cnib.ca/', category: 'Support organization', contact: 'Edmonton · 780-488-4871' },
      { name: 'Deaf Hear Alberta', url: 'https://deafandhearalberta.ca/', category: 'Support organization and interpreting', contact: 'Calgary and Edmonton · 866-471-2805' },
      { name: 'Edmonton Public Schools', url: 'https://www.epsb.ca/', category: 'Deaf education', contact: 'Edmonton · epsb.ca/contact' },
      { name: 'Alberta School for the Deaf', url: 'https://asd.epsb.ca/', category: 'Deaf education', contact: 'Edmonton · 780-439-3323' },
      { name: 'Calgary Board of Education', url: 'https://www.cbe.ab.ca/', category: 'Deaf education', contact: 'Calgary · 403-817-4000' },
      { name: 'Jennie Elliott School', url: 'https://jennieelliott.cbe.ab.ca/', category: 'Deaf education', contact: 'Calgary · 403-777-8350' },
      { name: 'Queen Elizabeth High School (Grades 7–12)', url: 'https://queenelizabethhs.cbe.ab.ca/', category: 'Deaf education', contact: 'Calgary · 403-777-6380' },
      { name: 'Western Canadian Centre for Deaf Studies', url: 'https://sites.google.com/ualberta.ca/western-canadian-deaf-studies/home', category: 'Deaf education and research', contact: 'University of Alberta · wccds@ualberta.ca' },
      { name: 'Lakeland College ASL and Deaf Culture Studies', url: 'https://www.lakelandcollege.ca/programs-and-courses/human-services/american-sign-language-and-deaf-culture-studies.aspx', category: 'ASL classes and courses', contact: 'Edmonton · 780-853-0902' },
      { name: 'Metro Continuing Education', url: 'https://www.metrocontinuingeducation.ca/', category: 'ASL classes and courses', contact: 'Edmonton · 780-428-1111' },
      { name: 'University of Alberta American Sign Language', url: 'https://www.ualberta.ca/en/modern-languages-and-cultural-studies/undergraduate-program-information/current-undergraduate-students/american-sign-language.html', category: 'ASL classes and courses', contact: 'Edmonton · mlcs@ualberta.ca' },
      { name: 'Disability Related Employment Support', url: 'https://www.alberta.ca/disability-related-employment-supports', category: 'Employment and financial support', contact: 'Alberta Supports · 780-644-9992' },
      { name: 'EmployAbilities', url: 'https://employabilities.ab.ca/', category: 'Employment and financial support', contact: 'Edmonton · 780-423-4106' },
      { name: 'Audiology Clinic of Northern Alberta', url: 'https://acnahearing.com/', category: 'Hearing care and alerting devices', contact: 'Edmonton · 825-450-0286 · text 780-937-2262' },
      { name: 'Deaf Hear Alberta equipment store', url: 'https://estore.deafandhearalberta.ca/', category: 'Hearing care and alerting devices', contact: 'Calgary · 403-284-6200 ext. 3' },
      { name: 'HearingLife – Westmount Centre', url: 'https://www.hearinglife.ca/centers/alberta/edmonton-westmount', category: 'Hearing care and alerting devices', contact: 'Edmonton · 1-888-435-2651' },
      { name: 'Wildrose Audiology Clinic Ltd.', url: 'https://wildroseaudiology.com/', category: 'Hearing care and alerting devices', contact: 'Edmonton · 780-447-3881' },
      { name: 'Hear Right Canada – Landon Woodruff', url: 'https://www.hearrightcanada.ca/', category: 'Hearing care and alerting devices', contact: 'Edmonton West · 780-423-3737 · ASL user' },
      { name: 'Catholic Social Services – Immigration and Settlement', url: 'https://cssalberta.ca/', category: 'Immigrant and refugee support', contact: 'Edmonton · info@cssalberta.ca' },
      { name: 'Islamic Family and Social Services Association', url: 'https://ifssa.ca/', category: 'Immigrant and refugee support', contact: 'Edmonton · info@ifssa.ca' },
      { name: 'Ukrainian Canadian Social Services (Edmonton)', url: 'https://ucssedmonton.ca/', category: 'Immigrant and refugee support', contact: '780-471-4477' },
      { name: 'Aboriginal Counselling Services of Alberta', url: 'https://aboriginalcounseling.com/', category: 'Indigenous resources', contact: 'Edmonton · 780-242-4357' },
      { name: 'Edmonton Aboriginal Seniors Centre', url: 'https://www.easc.ca/', category: 'Indigenous resources', contact: 'Edmonton · 587-525-8969 · 1-833-502-2159' },
      { name: 'Association of Sign Language Interpreters of Alberta', url: 'https://www.aslia.ca/', category: 'Interpreting organization', contact: 'Edmonton · info@aslia.ca' },
      { name: 'Choices of Interpreters', url: 'https://choiceofinterpreters.com/', category: 'Interpreting booking service', contact: 'Alberta · 403-615-2245 · choice@choiceofinterpreters.com' },
      { name: 'Freelance Interpreters Consolidated Inc.', url: 'https://flicinterpreting.com/', category: 'Interpreting booking service', contact: 'Alberta and remote Canada · 403-830-3542' },
      { name: 'Accessibility Advisory Committee (Edmonton)', url: 'https://www.edmonton.ca/city_government/city_organization/accessibility-advisory-committee', category: 'Municipal government', contact: 'accessibility@edmonton.ca' },
      { name: 'Accommodations for Deaf or Hard-of-Hearing People', url: 'https://www.edmonton.ca/programs_services/for_people_with_disabilities/services-hard-of-hearing-or-deaf', category: 'Municipal government', contact: 'Edmonton · 311 or 780-442-5311' },
      { name: 'Assisted Waste Collection', category: 'Municipal government', contact: 'Edmonton · 311 or 780-442-5311 · wastesupport@edmonton.ca' },
      { name: 'Disabled Adult Transit Services (DATS)', url: 'https://www.edmonton.ca/ets/dedicated-accessible-transit-service', category: 'Municipal government', contact: 'Edmonton · 780-496-4567' },
      { name: 'Edmonton Public Library', url: 'https://www.epl.ca/', category: 'Municipal government', contact: 'Edmonton · 780-496-7000 · text 587-817-0337' },
      { name: 'Leisure Access Pass', url: 'https://www.edmonton.ca/programs_services/leisure-access-program', category: 'Municipal government', contact: 'Edmonton · 311' },
      { name: 'Transit Fare Assistance Programs', category: 'Municipal government', contact: 'Edmonton · 311 or 780-442-5311' },
      { name: 'Calgary Food Bank', url: 'https://www.calgaryfoodbank.ca/', category: 'Non-profit agency', contact: 'Calgary · 403-265-7100' },
      { name: 'Edmonton Food Bank', url: 'https://www.edmontonsfoodbank.com/', category: 'Non-profit agency', contact: 'Edmonton · 780-425-4190' },
      { name: 'FIND', url: 'https://findedmonton.com/', category: 'Non-profit agency', contact: 'Edmonton · 780-988-1717' },
      { name: 'St. Mark’s Catholic Community of the Deaf', url: 'https://www.deafcatholicedmonton.org/', category: 'Places of worship', contact: 'Edmonton · 780-436-7250' },
      { name: 'Cross of Christ Lutheran Church of the Deaf', url: 'https://crossofchristlutheranchurch.ca/', category: 'Places of worship', contact: 'Edmonton · 780-434-1671' },
      { name: 'Sturgeon Valley Baptist Church', url: 'https://svbc.ab.ca/', category: 'Places of worship', contact: 'St. Albert · 780-458-3777' },
      { name: '2SLGBTQI+ / Sexual and Gender Diversity', url: 'https://www.albertahealthservices.ca/dvi/Page15590.aspx', category: 'Provincial government', contact: 'Alberta Health Services' },
      { name: 'Alberta Aids to Daily Living', url: 'https://www.alberta.ca/alberta-aids-to-daily-living', category: 'Provincial government', contact: 'Edmonton · 780-427-0731' },
      { name: 'Alberta Human Rights Commission', url: 'https://albertahumanrights.ab.ca/', category: 'Provincial government', contact: 'Edmonton 780-427-7661 · Calgary 403-297-6571' },
      { name: 'Affordable Housing Programs', url: 'https://www.alberta.ca/affordable-housing-programs', category: 'Provincial government', contact: 'Alberta Supports · 1-877-644-9992' },
      { name: 'Ministry of Community and Social Services', url: 'https://www.alberta.ca/seniors-community-and-social-services', category: 'Provincial government', contact: '780-422-3004' },
      { name: 'Office of Advocate for Persons with Disabilities', url: 'https://www.alberta.ca/advocate-persons-disabilities', category: 'Provincial government', contact: 'Edmonton · 780-422-1095' },
      { name: 'Office of Health Advocate and Mental Health Advocate', url: 'https://www.alberta.ca/office-of-alberta-health-advocates', category: 'Provincial government', contact: 'Edmonton · 780-422-1812' },
      { name: 'Office of the Child and Youth Advocate', url: 'https://ocya.alberta.ca/', category: 'Provincial government', contact: 'Edmonton 780-422-6056 · Calgary 403-297-8435' },
      { name: 'Premier’s Council on the Status of Persons with Disabilities', url: 'https://www.alberta.ca/premiers-council-status-of-persons-with-disabilities', category: 'Provincial government', contact: 'Edmonton · 780-422-1095' },
      { name: 'Workers’ Compensation Board', url: 'https://www.wcb.ab.ca/', category: 'Provincial government', contact: 'Edmonton · 780-498-3999' },
      { name: 'Kira Harrington', url: 'https://www.kiraharrington.com/', category: 'Real estate', contact: 'Edmonton · 780-554-6192 · VRS, text, and voice' },
      { name: 'Jade Griswold', url: 'https://www.calgaryconcierge.ca/', category: 'Real estate', contact: 'Calgary · 403-870-5216 · VRS, text, and voice' },
      { name: 'AB Captioning & CART', url: 'https://abcaptioning.com/', category: 'Communication access', contact: 'Edmonton · 780-453-1519' },
      { name: 'Independent Reporters', url: 'https://indreporters.com/', category: 'Communication access', contact: 'Edmonton · 780-488-1464' },
      { name: 'WizCap Realtime Reporting Inc.', url: 'https://wizcap.ca/', category: 'Communication access', contact: 'Edmonton · 780-643-0555' },
      { name: 'Alberta Deaf 55+ Games Club', url: 'https://www.deafgames55jeuxdessourds.ca/', category: 'Senior outreach and support', contact: 'Alberta-wide' },
      { name: 'Alberta Caregivers Association', url: 'https://www.caregiversalberta.ca/', category: 'Senior outreach and support', contact: 'Edmonton · 780-453-5088' },
      { name: 'Home Care Assistance', url: 'https://homecareassistanceedmonton.ca/', category: 'Senior outreach and support', contact: 'Edmonton · 587-801-2751' },
      { name: 'Meals on Wheels (Edmonton)', url: 'https://mealsonwheelsedmonton.org/', category: 'Senior outreach and support', contact: 'Edmonton · 780-429-2020' },
      { name: 'Sage Seniors Association', url: 'https://mysage.ca/', category: 'Senior outreach and support', contact: 'Edmonton · 780-423-5510' },
      { name: 'Society of Seniors Caring About Seniors', url: 'https://sscas.webnode.page/', category: 'Senior outreach and support', contact: 'Edmonton · 780-465-0311' },
      { name: 'Andrew Stadnicki', url: 'https://www.andrewstadnicki.thetravelagentnextdoor.com/', category: 'Accessible travel', contact: 'Calgary · 403-407-0170 text' },
      { name: 'Deaf Antlers', url: 'https://www.facebook.com/DeafAntlers/', category: 'Theatre and arts', contact: 'Calgary · deafantlers@gmail.com' },
      { name: 'Deaf Crows Collective', url: 'https://www.deafcrowscollective.ca/', category: 'Theatre and arts', contact: 'Saskatchewan-based · deafcrowscollective@gmail.com' },
      { name: 'Ebony Gooden', url: 'https://ebonyrgooden.com/', category: 'Theatre and arts', contact: 'Calgary · ebony.r.gooden@gmail.com' },
      { name: 'Landon Krentz', url: 'https://www.landonkrentz.com/', category: 'Theatre and arts', contact: 'Calgary · landonkrentz@gmail.com' },
      { name: 'The Invisible Practice Society for Deaf-Centric Creativity', url: 'https://www.invisiblepractice.ca/', category: 'Theatre and arts', contact: 'Edmonton · general@invisiblepractice.ca' }
    ],
    bc: [
      { name: 'University of British Columbia – Education of the Deaf and Hard of Hearing Graduate', url: 'https://ecps.educ.ubc.ca/special-education/graduate-concentrations/med-concentrations/deaf-and-hard-of-hearing/', category: 'Deaf education', contact: 'Vancouver · 604-822-5242' },
      { name: 'Vancouver Community College – ASL and Deaf Studies Certificate Program', url: 'https://vcc.ca/programs/asl-and-deaf-studies/', category: 'Deaf education and ASL courses', contact: 'Vancouver · 604-871-7000' },
      { name: 'International Inclusive Network for Equal Opportunities', url: 'https://sites.google.com/iineo-org.com/iineo/home', category: 'Interpreting and inclusion', contact: 'Surrey · info@iineo-org.com' }
    ],
    international: [
      { name: 'World Federation of the Deaf', url: 'https://wfdeaf.org/', category: 'International Deaf organization', contact: 'wfdeaf.org' },
      { name: 'International Committee of Sports for the Deaf / Comité International des Sports des Sourds', url: 'https://www.deaflympics.com/', category: 'International Deaf organization', contact: 'ciss.org · deaflympics.com' },
      { name: 'International Federation of Hard of Hearing People', url: 'https://www.ifhoh.org/', category: 'International Deaf organization', contact: 'info@ifhoh.org' },
      { name: 'World Association of Sign Language Interpreters', url: 'https://wasli.org/', category: 'International interpreting organization', contact: 'secretary.wasli@gmail.com' },
      { name: 'Deaf Globetrotters', url: 'https://deafglobetrotters.com/', category: 'Accessible travel', contact: 'Houston, United States · (832) 413-6183' },
      { name: 'Hands On Travel', url: 'https://handson.travel/', category: 'Accessible travel', contact: 'Arizona, United States · (520) 385-5411' },
      { name: 'Heart Cruises', url: 'https://deafvacations.com/', category: 'Accessible travel', contact: 'Florida, United States · (855) 333-9425' },
      { name: 'Sorenson Communications', url: 'https://sorenson.com/', category: 'Video relay and interpreting', contact: 'United States · (866) 756-6729' }
    ]
  };

  function normalise(value) {
    return value.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
  }

  function addEntry(list, entry, existingNames) {
    const key = normalise(entry.name);
    if (existingNames.has(key)) return;

    const item = document.createElement('li');
    const isLinked = Boolean(entry.url);
    item.className = isLinked ? 'pdf-resource' : 'pdf-resource is-unlinked';
    const body = isLinked ? document.createElement('a') : item;

    if (isLinked) {
      body.href = entry.url;
      if (entry.url.startsWith('http')) {
        body.target = '_blank';
        body.rel = 'noopener noreferrer';
      }
    }

    const category = document.createElement('span');
    category.className = 'connection-category';
    category.textContent = entry.category;
    body.appendChild(category);

    const name = document.createElement('span');
    name.className = 'connection-name';
    name.textContent = entry.name;
    body.appendChild(name);

    if (entry.contact) {
      const contact = document.createElement('span');
      contact.className = 'connection-url';
      contact.textContent = entry.contact;
      body.appendChild(contact);
    }

    if (isLinked) item.appendChild(body);
    list.appendChild(item);
    existingNames.add(key);
  }

  function init() {
    Object.keys(communityDirectoryEntries).forEach(function (region) {
      const panel = document.querySelector('[data-resource-region="' + region + '"]');
      if (!panel) return;
      const list = panel.querySelector('.connection-list');
      if (!list) return;
      const existingNames = new Set(Array.from(list.querySelectorAll('.connection-name')).map(function (node) {
        return normalise(node.textContent);
      }));
      communityDirectoryEntries[region].forEach(function (entry) {
        addEntry(list, entry, existingNames);
      });
      const count = panel.querySelector('.resource-count');
      if (count) count.textContent = list.children.length;
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
