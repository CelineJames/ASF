type Institution = {
  value: string;
  label: string;
};

type InstitutionGroup = {
  group: string;
  options: Institution[];
};

export const nigerianInstitutions: InstitutionGroup[] = [
  {
    group: "Federal Universities",
    options: [
      {
        value: "abubakar-tafawa-balewa",
        label: "Abubakar Tafawa Balewa University, Bauchi",
      },
      { value: "ahmadu-bello", label: "Ahmadu Bello University, Zaria" },
      { value: "bayero", label: "Bayero University, Kano" },
      {
        value: "federal-university-birnin-kebbi",
        label: "Federal University, Birnin Kebbi",
      },
      { value: "federal-university-dutse", label: "Federal University, Dutse" },
      {
        value: "federal-university-dutsin-ma",
        label: "Federal University, Dutsin-Ma",
      },
      {
        value: "federal-university-gashua",
        label: "Federal University, Gashua",
      },
      { value: "federal-university-gusau", label: "Federal University, Gusau" },
      {
        value: "federal-university-kashere",
        label: "Federal University, Kashere",
      },
      { value: "federal-university-lafia", label: "Federal University, Lafia" },
      {
        value: "federal-university-lokoja",
        label: "Federal University, Lokoja",
      },
      {
        value: "federal-university-ndufu-alike",
        label: "Federal University, Ndufu-Alike",
      },
      {
        value: "federal-university-otuoke",
        label: "Federal University, Otuoke",
      },
      {
        value: "federal-university-oye-ekiti",
        label: "Federal University, Oye-Ekiti",
      },
      {
        value: "federal-university-wukari",
        label: "Federal University, Wukari",
      },
      {
        value: "federal-university-technology-akure",
        label: "Federal University of Technology, Akure",
      },
      {
        value: "federal-university-technology-minna",
        label: "Federal University of Technology, Minna",
      },
      {
        value: "federal-university-technology-owerri",
        label: "Federal University of Technology, Owerri",
      },
      {
        value: "michael-okpara",
        label: "Michael Okpara University of Agriculture, Umudike",
      },
      { value: "modibbo-adama", label: "Modibbo Adama University, Yola" },
      { value: "nnamdi-azikiwe", label: "Nnamdi Azikiwe University, Awka" },
      {
        value: "obafemi-awolowo",
        label: "Obafemi Awolowo University, Ile-Ife",
      },
      { value: "university-abuja", label: "University of Abuja" },
      {
        value: "university-agriculture-abeokuta",
        label: "University of Agriculture, Abeokuta",
      },
      {
        value: "university-agriculture-makurdi",
        label: "University of Agriculture, Makurdi",
      },
      { value: "university-benin", label: "University of Benin" },
      { value: "university-calabar", label: "University of Calabar" },
      { value: "university-ibadan", label: "University of Ibadan" },
      { value: "university-ilorin", label: "University of Ilorin" },
      { value: "university-jos", label: "University of Jos" },
      { value: "university-lagos", label: "University of Lagos" },
      { value: "university-maiduguri", label: "University of Maiduguri" },
      {
        value: "university-nigeria-nsukka",
        label: "University of Nigeria, Nsukka",
      },
      {
        value: "university-port-harcourt",
        label: "University of Port Harcourt",
      },
      { value: "university-uyo", label: "University of Uyo" },
      {
        value: "usumanu-danfodiyo",
        label: "Usmanu Danfodiyo University, Sokoto",
      },
    ],
  },
  {
    group: "State Universities",
    options: [
      {
        value: "adekunle-ajasin",
        label: "Adekunle Ajasin University, Akungba",
      },
      { value: "ambrose-alli", label: "Ambrose Alli University, Ekpoma" },
      { value: "anambra-state", label: "Anambra State University, Uli" },
      { value: "benue-state", label: "Benue State University, Makurdi" },
      {
        value: "cross-river-state",
        label: "Cross River State University of Technology",
      },
      { value: "delta-state", label: "Delta State University, Abraka" },
      { value: "ebonyi-state", label: "Ebonyi State University, Abakaliki" },
      { value: "ekiti-state", label: "Ekiti State University, Ado-Ekiti" },
      {
        value: "enugu-state",
        label: "Enugu State University of Science and Technology",
      },
      { value: "gombe-state", label: "Gombe State University" },
      {
        value: "ibrahim-badamasi-babangida",
        label: "Ibrahim Badamasi Babangida University, Lapai",
      },
      {
        value: "ignatius-ajuru",
        label: "Ignatius Ajuru University of Education, Port Harcourt",
      },
      { value: "imo-state", label: "Imo State University, Owerri" },
      { value: "kaduna-state", label: "Kaduna State University" },
      {
        value: "kano-state",
        label: "Kano State University of Science and Technology",
      },
      {
        value: "kebbi-state",
        label: "Kebbi State University of Science and Technology",
      },
      { value: "kogi-state", label: "Kogi State University, Anyigba" },
      { value: "kwara-state", label: "Kwara State University, Malete" },
      {
        value: "ladoke-akintola",
        label: "Ladoke Akintola University of Technology, Ogbomoso",
      },
      { value: "lagos-state", label: "Lagos State University, Ojo" },
      { value: "nasarawa-state", label: "Nasarawa State University, Keffi" },
      {
        value: "niger-delta",
        label: "Niger Delta University, Wilberforce Island",
      },
      { value: "northwest-university", label: "Northwest University, Kano" },
      {
        value: "olabisi-onabanjo",
        label: "Olabisi Onabanjo University, Ago-Iwoye",
      },
      {
        value: "ondo-state",
        label: "Ondo State University of Science and Technology",
      },
      { value: "osun-state", label: "Osun State University, Osogbo" },
      { value: "plateau-state", label: "Plateau State University, Bokkos" },
      {
        value: "rivers-state",
        label: "Rivers State University, Port Harcourt",
      },
      { value: "sokoto-state", label: "Sokoto State University" },
      {
        value: "tai-solarin",
        label: "Tai Solarin University of Education, Ijebu-Ode",
      },
      { value: "taraba-state", label: "Taraba State University, Jalingo" },
      {
        value: "umaru-musa-yaradua",
        label: "Umaru Musa Yar'adua University, Katsina",
      },
      { value: "yobe-state", label: "Yobe State University, Damaturu" },
      {
        value: "zamfara-state",
        label: "Zamfara State University, Talata Mafara",
      },
    ],
  },
  {
    group: "Private Universities",
    options: [
      { value: "achievers", label: "Achievers University, Owo" },
      { value: "adeleke", label: "Adeleke University, Ede" },
      { value: "afe-babalola", label: "Afe Babalola University, Ado-Ekiti" },
      {
        value: "african-university-science",
        label: "African University of Science and Technology, Abuja",
      },
      { value: "al-hikmah", label: "Al-Hikmah University, Ilorin" },
      { value: "al-qalam", label: "Al-Qalam University, Katsina" },
      {
        value: "american-university-nigeria",
        label: "American University of Nigeria, Yola",
      },
      { value: "anchor", label: "Anchor University, Lagos" },
      { value: "augustine", label: "Augustine University, Ilara" },
      { value: "babcock", label: "Babcock University, Ilishan-Remo" },
      { value: "baze", label: "Baze University, Abuja" },
      { value: "bells", label: "Bells University of Technology, Ota" },
      {
        value: "benson-idahosa",
        label: "Benson Idahosa University, Benin City",
      },
      { value: "bowen", label: "Bowen University, Iwo" },
      { value: "caleb", label: "Caleb University, Lagos" },
      { value: "caritas", label: "Caritas University, Enugu" },
      { value: "chrisland", label: "Chrisland University, Abeokuta" },
      { value: "christopher", label: "Christopher University, Mowe" },
      { value: "covenant", label: "Covenant University, Ota" },
      { value: "crawford", label: "Crawford University, Igbesa" },
      { value: "crescent", label: "Crescent University, Abeokuta" },
      { value: "dominican", label: "Dominican University, Ibadan" },
      { value: "edwin-clark", label: "Edwin Clark University, Kiagbodo" },
      { value: "elizade", label: "Elizade University, Ilara-Mokin" },
      { value: "emeka-alajoku", label: "Emeka Alajoku University, Nnewi" },
      { value: "evangel", label: "Evangel University, Akaeze" },
      { value: "fountain", label: "Fountain University, Osogbo" },
      { value: "godfrey-okoye", label: "Godfrey Okoye University, Enugu" },
      { value: "gregorian", label: "Gregorian University, Uturu" },
      { value: "hallmark", label: "Hallmark University, Ijebu-Itele" },
      { value: "hezekiah", label: "Hezekiah University, Umudi" },
      { value: "hills", label: "Hills University, Akure" },
      { value: "igbinedion", label: "Igbinedion University, Okada" },
      {
        value: "joseph-ayo-babalola",
        label: "Joseph Ayo Babalola University, Ikeji-Arakeji",
      },
      { value: "kings", label: "Kings University, Ode-Omu" },
      { value: "landmark", label: "Landmark University, Omu-Aran" },
      { value: "lead-city", label: "Lead City University, Ibadan" },
      { value: "madonna", label: "Madonna University, Okija" },
      { value: "mcpherson", label: "McPherson University, Seriki-Sotayo" },
      {
        value: "micheal-and-cecilia-ibru",
        label: "Michael and Cecilia Ibru University, Agbarha-Otor",
      },
      { value: "mountain-top", label: "Mountain Top University, Ibafo" },
      { value: "nexus", label: "Nexus University, Abuja" },
      { value: "nigerian-british", label: "Nigerian British University, Asa" },
      { value: "nile", label: "Nile University, Abuja" },
      { value: "novena", label: "Novena University, Ogume" },
      { value: "oduduwa", label: "Oduduwa University, Ipetumodu" },
      { value: "pan-atlantic", label: "Pan-Atlantic University, Lagos" },
      { value: "paul-university", label: "Paul University, Awka" },
      { value: "peter-university", label: "Peter University, Achina-Nnewi" },
      { value: "pita-okorie", label: "Pita Okorie University, Effurun" },
      {
        value: "precious-cornerstone",
        label: "Precious Cornerstone University, Ibadan",
      },
      { value: "redeemers", label: "Redeemer's University, Ede" },
      { value: "renaissance", label: "Renaissance University, Enugu" },
      { value: "rhema", label: "Rhema University, Obeama-Asa" },
      { value: "ritman", label: "Ritman University, Ikot Ekpene" },
      {
        value: "robert-bourassa",
        label: "Robert Bourassa University, Calabar",
      },
      { value: "salem", label: "Salem University, Lokoja" },
      {
        value: "samuel-adegboyega",
        label: "Samuel Adegboyega University, Ogwa",
      },
      { value: "southwestern", label: "Southwestern University, Oku-Owa" },
      { value: "spiritan", label: "Spiritan University, Nneochi" },
      { value: "summit", label: "Summit University, Offa" },
      { value: "tansian", label: "Tansian University, Umunya" },
      { value: "trinity", label: "Trinity University, Lagos" },
      { value: "university-mkar", label: "University of Mkar, Mkar" },
      { value: "veritas", label: "Veritas University, Abuja" },
      { value: "wellspring", label: "Wellspring University, Evbuobanosa" },
      { value: "wesley", label: "Wesley University, Ondo" },
      { value: "western-delta", label: "Western Delta University, Oghara" },
    ],
  },
  {
    group: "Federal Polytechnics",
    options: [
      { value: "auchi-poly", label: "Auchi Polytechnic, Auchi" },
      { value: "federal-poly-bauchi", label: "Federal Polytechnic, Bauchi" },
      { value: "federal-poly-bida", label: "Federal Polytechnic, Bida" },
      { value: "federal-poly-daura", label: "Federal Polytechnic, Daura" },
      { value: "federal-poly-ede", label: "Federal Polytechnic, Ede" },
      { value: "federal-poly-ekowe", label: "Federal Polytechnic, Ekowe" },
      { value: "federal-poly-idah", label: "Federal Polytechnic, Idah" },
      { value: "federal-poly-ilaro", label: "Federal Polytechnic, Ilaro" },
      {
        value: "federal-poly-kaura-namoda",
        label: "Federal Polytechnic, Kaura Namoda",
      },
      { value: "federal-poly-mubi", label: "Federal Polytechnic, Mubi" },
      {
        value: "federal-poly-nasarawa",
        label: "Federal Polytechnic, Nasarawa",
      },
      { value: "federal-poly-nekede", label: "Federal Polytechnic, Nekede" },
      { value: "federal-poly-offa", label: "Federal Polytechnic, Offa" },
      { value: "federal-poly-oko", label: "Federal Polytechnic, Oko" },
      { value: "federal-poly-ukana", label: "Federal Polytechnic, Ukana" },
      {
        value: "hussaini-adamu",
        label: "Hussaini Adamu Federal Polytechnic, Kazaure",
      },
      { value: "kaduna-poly", label: "Kaduna Polytechnic, Kaduna" },
      { value: "kano-poly", label: "Kano State Polytechnic, Kano" },
      {
        value: "national-institute-construction",
        label: "National Institute of Construction Technology, Uromi",
      },
      {
        value: "petroleum-training-institute",
        label: "Petroleum Training Institute, Effurun",
      },
      {
        value: "waziri-umaru",
        label: "Waziri Umaru Federal Polytechnic, Birnin Kebbi",
      },
      { value: "yaba-tech", label: "Yaba College of Technology, Lagos" },
    ],
  },
  {
    group: "State Polytechnics",
    options: [
      { value: "abia-state-poly", label: "Abia State Polytechnic, Aba" },
      {
        value: "abraham-adesanya-poly",
        label: "Abraham Adesanya Polytechnic, Ijebu-Igbo",
      },
      { value: "adamawa-state-poly", label: "Adamawa State Polytechnic, Yola" },
      {
        value: "akwa-ibom-state-poly",
        label: "Akwa Ibom State Polytechnic, Ikot Osurua",
      },
      {
        value: "delta-state-poly-ogwashi",
        label: "Delta State Polytechnic, Ogwashi-Uku",
      },
      {
        value: "delta-state-poly-otefe",
        label: "Delta State Polytechnic, Otefe-Oghara",
      },
      {
        value: "delta-state-poly-ozoro",
        label: "Delta State Polytechnic, Ozoro",
      },
      {
        value: "edo-state-poly",
        label: "Edo State Institute of Technology, Usen",
      },
      { value: "gateway-poly", label: "Gateway ICT Polytechnic, Saapade" },
      {
        value: "hassan-usman-poly",
        label: "Hassan Usman Katsina Polytechnic, Katsina",
      },
      {
        value: "institute-management-tech",
        label: "Institute of Management Technology, Enugu",
      },
      { value: "kwara-state-poly", label: "Kwara State Polytechnic, Ilorin" },
      { value: "lagos-state-poly", label: "Lagos State Polytechnic, Ikorodu" },
      { value: "mapoly", label: "Moshood Abiola Polytechnic, Ojere" },
      { value: "niger-state-poly", label: "Niger State Polytechnic, Zungeru" },
      { value: "nuhu-bamalli-poly", label: "Nuhu Bamalli Polytechnic, Zaria" },
      {
        value: "osun-state-poly",
        label: "Osun State College of Technology, Esa-Oke",
      },
      { value: "oyo-state-poly", label: "Oke-Ogun Polytechnic, Saki" },
      {
        value: "plateau-state-poly",
        label: "Plateau State Polytechnic, Barkin Ladi",
      },
      { value: "rivers-state-poly", label: "Ken Saro-Wiwa Polytechnic, Bori" },
    ],
  },
  
];
