const allSongs = [
    {
        name: "Boss Bitch",
        artist: "Doja Cat",
        min: 2,
        sec: "05",
        img: "BossBitch",
        src: "BossBitch",
        link: "https://youtu.be/RsW66teC0BQ?si=riPqzxJ5v-LhbBl3"
    },
    {
        name: "Break all the Rules",
        artist: "CRAVITY",
        min: 2,
        sec: 38,
        img: "BreakAllTheRules",
        src: "BreakAllTheRules",
        link: "https://youtu.be/NFlceOv8LMU?si=P_iSinpXYznq1hNl"
    },
    {
        name: "Burnout",
        artist: "EPEX",
        min: 3,
        sec: 21,
        img: "Burnout",
        src: "Burnout",
        link: "https://youtu.be/4cChsJoXeAs?si=y6E5JEdsmpxsZl9i"
    },
    {
        name: "Cake (sped up)",
        artist: "Melanie Martinez",
        min: 2,
        sec: 52,
        img: "cake",
        src: "cake",
        link: "https://youtu.be/IcZMNKGDvXw?si=G020SMBNMUF_jhUJ"
    },
    {
        name: "Candy",
        artist: "NCT Dream",
        min: 3,
        sec: 37,
        img: "Candy",
        src: "Candy",
        link: "https://youtu.be/zuoSn3ObMz4?si=IUnozUWw98FUF8H5"
    },
    {
        name: "Clover",
        artist: "THE BOYZ",
        min: 3,
        sec: "07",
        img: "clover",
        src: "Clover",
        link: "https://youtu.be/LNIfFytKhX0?si=A1Nd0aVvWawq37JL"
    },
    {
        name: "Demons Banquet",
        artist: "Sora Tomonari",
        min: 3,
        sec: "03",
        img: "DemonsBanquet",
        src: "DemonsBanquet",
        link: "https://youtu.be/NFzyrPK9rtM?si=rbNKRVFoBlIJu1m3"
    },
    {
        name: "Do 4 Me",
        artist: "EPEX",
        min: 3,
        sec: 19,
        img: "Do4Me",
        src: "Do4Me",
        link: "https://youtu.be/ZsRY_UmS7bs?si=IpZ7DplHM5a9igW-"
    },
    {
        name: "Drama",
        artist: "Aespa",
        min: 3,
        sec: 35,
        img: "Drama",
        src: "Drama",
        link: "https://youtu.be/D8VEhcPeSlc?si=pR9UQZN4ivR1RO5k"
    },
    {
        name: "Eenie Meenie",
        artist: "Chungha (ft. Hongjoong of ATEEZ)",
        min: 2,
        sec: 59,
        img: "EenieMeenie",
        src: "EenieMeenie",
        link: "https://youtu.be/d1XM3NITcyg?si=wrPcz-2_Gjcn9yCX"
    },
    {
        name: "Excel",
        artist: "8TURN",
        min: 2,
        sec: 50,
        img: "Excel",
        src: "EXCEL",
        link: "https://youtu.be/CTzISCJILd4?si=eVocOcDngoLrxkiB"
    },
    {
        name: "Forgive Me",
        artist: "Boa",
        min: 2,
        sec: 48,
        img: "ForgiveMe",
        src: "ForgiveMe",
        link: "https://youtu.be/WS5u-6LnyUU?si=tqyKa64Bw_zF8kUq"
    },
    {
        name: "Fuego",
        artist: "The New Six (TNX)",
        min: 3,
        sec: 17,
        img: "fuego",
        src: "FUEGO",
        link: "https://youtu.be/J-5Ei7oEA7w?si=vjKakPBd64nOuyng"
    },
    {
        name: "Full Metal Jacket",
        artist: "EPEX",
        min: 2,
        sec: 52,
        img: "Fmj",
        src: "FullMetalJacket",
        link: "https://youtu.be/8y2RbdslYwQ?si=uJCS9BkFaU8SAMYu"
    },
    {
        name: "Get a guitar",
        artist: "RIIZE",
        min: 2,
        sec: 52,
        img: "GetAGuitar",
        src: "GetAGuitar",
        link: "https://youtu.be/iUw3LPM7OBU?si=gQc7PX1xUM_yedzj"
    },
    {
        name: "Girls",
        artist: "Aespa",
        min: 4,
        sec: "00",
        img: "Girls",
        src: "Girls",
        link: "https://youtu.be/dYRITmpFbJ4?si=xoVxX9-vR3zX8RBv"
    },
    {
        name: "Graduation Day",
        artist: "EPEX",
        min: 3,
        sec: 14,
        img: "GraduationDay",
        src: "GraduationDay",
        link: "https://youtu.be/dgc5D2YS48g?si=zbUmwpkxmIIhOJaw"
    },
    {
        name: "Heartache",
        artist: "8TURN",
        min: 3,
        sec: 36,
        img: "Heartache",
        src: "Heartache",
        link: "https://youtu.be/j8FwIUT5sD8?si=veWwuVK8WUjl_GqU"
    },
    {
        name: "I AM",
        artist: "IVE",
        min: 3,
        sec: "04",
        img: "I-AM",
        src: "I-AM",
        link: "https://youtu.be/6ZUIwj3FgUY?si=y5imKgkdSuBjI7m_"
    },
    {
        name: "Baddie",
        artist: "IVE",
        min: 2,
        sec: 34,
        img: "Baddie",
        src: "IVEBaddie",
        link: "https://youtu.be/Da4P2uT4mVc?si=L52qSbrB4n5H1pUX"
    },
    {
        name: "Kitsch",
        artist: "IVE",
        min: 3,
        sec: 15,
        img: "Kitsch",
        src: "IVEKitsch",
        link: "https://youtu.be/pG6iaOMV46I?si=-KIpiRJ2lKh9HTKD"
    },
    {
        name: "Lonely St.",
        artist: "Stray Kids",
        min: 3,
        sec: "04",
        img: "LonelySt",
        src: "LonelySt",
        link: "https://youtu.be/jxwFUMvd-fY?si=Fese4NdWcpYFES3M"
    },
    {
        name: "Lone Wolf",
        artist: "EPEX",
        min: 2,
        sec: 51,
        img: "loneWolf",
        src: "LoneWolf",
        link: "https://youtu.be/QC-TBrEYh10?si=xjOGPgTgYYacyZLZ"
    },
    {
        name: "Love Or Die",
        artist: "CRAVITY",
        min: 2,
        sec: 46,
        img: "LoveOrDie",
        src: "LoveOrDie",
        link: "https://youtu.be/nnBiA1iq8r0?si=tBxH-1xli-RgozWE"
    },
    {
        name: "Mammoth",
        artist: "CRAVITY",
        min: 3,
        sec: "05",
        img: "Mamooth",
        src: "Mammoth",
        link: "https://youtu.be/HmwEpGsJE2M?si=7mw0HoAAgThzEWZa"
    },
    {
        name: "Mirror Mirror",
        artist: "P1HARMONY",
        min: 3,
        sec: "08",
        img: "MirrorMirror",
        src: "MirrorMirror",
        link: "https://youtu.be/lTGFVPUGtig?si=MIRw6RqSBSOq0j3j"
    },
    {
        name: "Mr.",
        artist: "CRAVITY",
        min: 3,
        sec: 25,
        img: "Mr",
        src: "Mr",
        link: "https://youtu.be/QFF8kp9OrUo?si=-P7_CwdBv3VPfNy9"
    },
    {
        name: "My Turn",
        artist: "CRAVITY",
        min: 3,
        sec: "05",
        img: "MyTurn",
        src: "MyTurn",
        link: "https://youtu.be/IrnhtBxHDBY?si=Oy_OFDqd7sd58I-c"
    },
    {
        name: "Obsessed (sped up)",
        artist: "Mariah Carey",
        min: 3,
        sec: "05",
        img: "Obsessed",
        src: "Obsessed",
        link: "https://youtu.be/vG5xyd5wufY?si=oaPQElKybIAodE8g"
    },
    {
        name: "Pretty Savage",
        artist: "BLACKPINK",
        min: 3,
        sec: 19,
        img: "PrettySavage",
        src: "PrettySavage",
        link: "https://youtu.be/F8c8f2nK82w?si=iHpH1g5d3L4RJTwa"
    },
    {
        name: "Renegade",
        artist: "Valorant",
        min: 2,
        sec: 42,
        img: "Renegade",
        src: "RENEGADE",
        link: "https://youtu.be/QAAap0ceNbo?si=ZcW2TR7XWtRznip5"
    },
    {
        name: "RU-PUM-PUM",
        artist: "8TURN",
        min: 3,
        sec: 22,
        img: "RU-PUM-PUM",
        src: "RU-PUM_PUM",
        link: "https://youtu.be/gN2SgTVZ2aU?si=uIO1wZtcNnw6l6K-"
    },
    {
        name: "Shout Out",
        artist: "Enhypen",
        min: 3,
        sec: 48,
        img: "ShoutOut",
        src: "ShoutOut",
        link: "https://youtu.be/U1VhxZYpZ0U?si=B_EV0U-XUlcq19uI"
    },
    {
        name: "Sunshower",
        artist: "EPEX",
        min: 3,
        sec: "13",
        img: "Sunshower",
        src: "Sunshower",
        link: "https://youtu.be/3KE-vyBaQJ4?si=v4oLKkGWgHwnlFF9"
    },
    {
        name: "Surrender",
        artist: "EPEX",
        min: 2,
        sec: 50,
        img: "surrender",
        src: "Surrender",
        link: "https://youtu.be/Oqi2pUzYDOc?si=xKyQaMJ5u8GoqpnS"
    },
    {
        name: "Syrup",
        artist: "EVNNE",
        min: 3,
        sec: 23,
        img: "syrup",
        src: "SYRUP",
        link: "https://youtu.be/kMcJhgTVFvc?si=vcrnPYtlLWPjXIJb"
    },
    {
        name: "That's My Girl",
        artist: "IVE (Cover)",
        min: 3,
        sec: 22,
        img: "ThatsMyGirl",
        src: "ThatsMyGirl",
        link: "https://youtu.be/-NRkHcyG7sQ?si=bPtV62fttlECvEF3"
    },
    {
        name: "The Game",
        artist: "8TURN",
        min: 3,
        sec: 14,
        img: "TheGame",
        src: "THE_GAME",
        link: "https://youtu.be/uHCAAo6Y0ac?si=GduQBonJNbNTv222"
    },
    {
        name: "TIC TAC",
        artist: "8TURN",
        min: 3,
        sec: 22,
        img: "TIC-TAC",
        src: "TIC_TAC",
        link: "https://youtu.be/x1U5koYxTYM?si=gYBxIxTLtKY6i3Xj"
    },
    {
        name: "Tomboy",
        artist: "Destiny Rogers",
        min: 3,
        sec: 24,
        img: "Tomboy",
        src: "Tomboy",
        link: "https://youtu.be/BaOScwq_lZs?si=Ah9zfcvIvQwvlpul"
    },
    {
        name: "Vengeance",
        artist: "BIBI",
        min: 4,
        sec: 55,
        img: "Vengeance",
        src: "Vengeance",
        link: "https://youtu.be/QfIY1r0_tRI?si=CS0w9iWD_DY-wNrG"
    },
    {
        name: "Walk it out",
        artist: "8TURN",
        min: 2,
        sec: 59,
        img: "WalkItOut",
        src: "WALK_IT_OUT",
        link: "https://youtu.be/bvUtz4zdGTk?si=s0lkeQ2_oIAAFZVk"
    },
    {
        name: "We Here",
        artist: "8TURN",
        min: 2,
        sec: 45,
        img: "WeHere",
        src: "WE_HERE",
        link: "https://youtu.be/99_a2o_SFBM?si=NhVbPCcIbz0h0AjW"
    },
    {
        name: "Welcome To The Show",
        artist: "DAY6",
        min: 3,
        sec: 37,
        img: "WelcomeToTheShow",
        src: "WelcomeToTheShow",
        link: "https://youtu.be/RowlrvmyFEk?si=K4yhvwoZ4gYM4-qk"
    },
    {
        name: "WORLD",
        artist: "8TURN",
        min: 2,
        sec: 16,
        img: "world",
        src: "WORLD",
        link: "https://youtu.be/GEoR4K1nvYI?si=7rO3ApakR_8xIXyl"
    },
    {
        name: "Yes Mom",
        artist: "Tessa Violet",
        min: 2,
        sec: 41,
        img: "YesMom",
        src: "YesMOM",
        link: "https://youtu.be/_rorWXqYCDQ?si=UAkLmf8palPswKcC"
    },
    {
        name: "You and Me",
        artist: "Jennie",
        min: 2,
        sec: 59,
        img: "YouAndMe",
        src: "YouAndMe",
        link: "https://youtu.be/CpbJO2Z6DA4?si=BEsVTtqUWeI3lAc1"
    },
    {
        name: "YURA YURA",
        artist: "ZEROBASEONE",
        min: 3,
        sec: "04",
        img: "YuraYura",
        src: "YURAYURA",
        link: "https://youtu.be/xx8qT6H8bkM?si=-oHaDTYo155_EOpv"
    },
    {
        name: "Spicy",
        artist: "Aepsa",
        min: 3,
        sec: 24,
        img: "spicy",
        src: "Spicy",
        link: "https://youtu.be/Os_heh8vPfs?si=r6QLjQSXQLTpBYrO"
    },
    {
        name: "No Roof",
        artist: "EPEX",
        min: 3,
        sec: "08",
        img: "noRoof",
        src: "NoRoof",
        link: "https://youtu.be/eIzYpEtHJPg?si=c9Me0wAF1GfEHdim"
    },
    {
        name: "Hit The Wall",
        artist: "EPEX",
        min: 2,
        sec: 57,
        img: "htw",
        src: "HitTheWall",
        link: "https://youtu.be/WYL6w-oXczg?si=BiN0bZt1IHfO2iGg"
    },
    {
        name: "Strike",
        artist: "EPEX",
        min: 3,
        sec: 10,
        img: "strike",
        src: "STRIKE",
        link: "https://youtu.be/onkxypxObCw?si=yXLuzEoKm-jtMUNe"
    },
];
// console.log(typeof(allSongs[2].link));