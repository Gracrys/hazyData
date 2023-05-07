
const gameVersion = "4_3_0"

interface DataRates {
  champ: string
  code: string
  size: number
  position?: string
}

type Regions = 'DE' | 'SH' | 'IO' | 'SI' | 'NX' | 'MT' | 'PNZ' | 'BC' | 'BW' | 'RU'

interface Data {
  regions: Regions[]
  WR: DataRates
  PR: DataRates
}


const DDversion = [
  "",
  "1_0_0",
  "1_0_0",
  "1_8_0",
  "2_3_0",
  "2_14_0",
  "4_2_0",
  "4_3_0",
];

const data: Data[] = [{
  regions: ['SH', 'BW'],
  WR: {
    champ: "Nautilus",
    code: "02BW053T1",
    size: 52.43,
    position: ""
  },
  PR: {
    champ: "Maokai",
    code: "02SI008T2",
    size: 5.08,
    position: ""
  },
},
{
  regions: ['IO', 'PNZ'],
  WR: {
    champ: "Karma",
    code: "01IO041T1",
    size: 51.95,
    position: ""
  },
  PR: {
    champ: "Sett",
    code: "07IO011",
    size: 4.33,
    position: ""
  },
},
{
  regions: ['NX', 'BC'],
  WR: {
    champ: "Tristana",
    code: "05BC133T1",
    size: 55.28,
    position: ""
  },
  PR: {
    champ: "Teemo",
    code: "01PZ008T2",
    size: 4.20,
    position: ""
  },
},
{
  regions: ['BW', 'BC'],
  WR: {
    champ: "Tristana",
    code: "05BC133T1",
    size: 56.28,
    position: ""
  },
  PR: {
    champ: "Teemo",
    code: "01PZ008T2",
    size: 3.84,
    position: ""
  },
},
{
  regions: ['BW', 'SH'],
  WR: {
    champ: "Pyke",
    code: "04BW005",
    size: 53.83,
    position: ""
  },
  PR: {
    champ: "Rek'Sai",
    code: "04SH019",
    size: 2.87,
    position: ""
  },
},
{
  regions: ['SH'],
  WR: {
    champ: "Renekton",
    code: "04SH067",
    size: 43.36,
    position: ""
  },
  PR: {
    champ: "Azir",
    code: "04SH003T2",
    size: 2.74,
    position: ""
  },
},

]




const ChampPerCodes = [
  {
    "code": "01DE012",
    "name": "Garen"
  },
  {
    "code": "01DE012T1",
    "name": "Garen"
  },
  {
    "code": "01DE022",
    "name": "Lucian"
  },
  {
    "code": "01DE022T1",
    "name": "Lucian"
  },
  {
    "code": "01DE042",
    "name": "Lux"
  },
  {
    "code": "01DE042T2",
    "name": "Lux"
  },
  {
    "code": "01DE045",
    "name": "Fiora"
  },
  {
    "code": "01DE045T1",
    "name": "Fiora"
  },
  {
    "code": "01FR009",
    "name": "Braum"
  },
  {
    "code": "01FR009T1",
    "name": "Braum"
  },
  {
    "code": "01FR024",
    "name": "Anivia"
  },
  {
    "code": "01FR024T3",
    "name": "Anivia"
  },
  {
    "code": "01FR024T4",
    "name": "Eggnivia"
  },
  {
    "code": "01FR038",
    "name": "Ashe"
  },
  {
    "code": "01FR038T2",
    "name": "Ashe"
  },
  {
    "code": "01FR039",
    "name": "Tryndamere"
  },
  {
    "code": "01FR039T2",
    "name": "Tryndamere"
  },
  {
    "code": "01IO009",
    "name": "Zed"
  },
  {
    "code": "01IO009T2",
    "name": "Zed"
  },
  {
    "code": "01IO015",
    "name": "Yasuo"
  },
  {
    "code": "01IO015T1",
    "name": "Yasuo"
  },
  {
    "code": "01IO032",
    "name": "Shen"
  },
  {
    "code": "01IO032T1",
    "name": "Shen"
  },
  {
    "code": "01IO041",
    "name": "Karma"
  },
  {
    "code": "01IO041T1",
    "name": "Karma"
  },
  {
    "code": "01NX006",
    "name": "Vladimir"
  },
  {
    "code": "01NX006T1",
    "name": "Vladimir"
  },
  {
    "code": "01NX020",
    "name": "Draven"
  },
  {
    "code": "01NX020T3",
    "name": "Draven"
  },
  {
    "code": "01NX038",
    "name": "Darius"
  },
  {
    "code": "01NX038T2",
    "name": "Darius"
  },
  {
    "code": "01NX042",
    "name": "Katarina"
  },
  {
    "code": "01NX042T2",
    "name": "Katarina"
  },
  {
    "code": "01PZ008",
    "name": "Teemo"
  },
  {
    "code": "01PZ008T2",
    "name": "Teemo"
  },
  {
    "code": "01PZ036",
    "name": "Ezreal"
  },
  {
    "code": "01PZ036T1",
    "name": "Ezreal"
  },
  {
    "code": "01PZ040",
    "name": "Jinx"
  },
  {
    "code": "01PZ040T1",
    "name": "Jinx"
  },
  {
    "code": "01PZ056",
    "name": "Heimerdinger"
  },
  {
    "code": "01PZ056T10",
    "name": "Heimerdinger"
  },
  {
    "code": "01SI030",
    "name": "Kalista"
  },
  {
    "code": "01SI030T2",
    "name": "Kalista"
  },
  {
    "code": "01SI042",
    "name": "Hecarim"
  },
  {
    "code": "01SI042T1",
    "name": "Hecarim"
  },
  {
    "code": "01SI052",
    "name": "Thresh"
  },
  {
    "code": "01SI052T1",
    "name": "Thresh"
  },
  {
    "code": "01SI053",
    "name": "Elise"
  },
  {
    "code": "01SI053T2",
    "name": "Spider Queen Elise"
  },
  {
    "code": "02BW022",
    "name": "Miss Fortune"
  },
  {
    "code": "02BW022T2",
    "name": "Miss Fortune"
  },
  {
    "code": "02BW026",
    "name": "Twisted Fate"
  },
  {
    "code": "02BW026T3",
    "name": "Twisted Fate"
  },
  {
    "code": "02BW032",
    "name": "Gangplank"
  },
  {
    "code": "02BW032T3",
    "name": "Gangplank"
  },
  {
    "code": "02BW046",
    "name": "Fizz"
  },
  {
    "code": "02BW046T3",
    "name": "Fizz"
  },
  {
    "code": "02BW053",
    "name": "Nautilus"
  },
  {
    "code": "02BW053T1",
    "name": "Nautilus"
  },
  {
    "code": "02DE006",
    "name": "Quinn"
  },
  {
    "code": "02DE006T1",
    "name": "Quinn"
  },
  {
    "code": "02FR002",
    "name": "Sejuani"
  },
  {
    "code": "02FR002T3",
    "name": "Sejuani"
  },
  {
    "code": "02IO006",
    "name": "Lee Sin"
  },
  {
    "code": "02IO006T1",
    "name": "Lee Sin"
  },
  {
    "code": "02NX007",
    "name": "Swain"
  },
  {
    "code": "02NX007T2",
    "name": "Swain"
  },
  {
    "code": "02PZ008",
    "name": "Vi"
  },
  {
    "code": "02PZ008T2",
    "name": "Vi"
  },
  {
    "code": "02SI008",
    "name": "Maokai"
  },
  {
    "code": "02SI008T2",
    "name": "Maokai"
  },
  {
    "code": "03BW004",
    "name": "Tahm Kench"
  },
  {
    "code": "03BW004T3",
    "name": "Tahm Kench"
  },
  {
    "code": "03DE011",
    "name": "Shyvana"
  },
  {
    "code": "03DE011T1",
    "name": "Dragon Shyvana"
  },
  {
    "code": "03FR006",
    "name": "Trundle"
  },
  {
    "code": "03FR006T2",
    "name": "Trundle"
  },
  {
    "code": "03IO002",
    "name": "Lulu"
  },
  {
    "code": "03IO002T1",
    "name": "Lulu"
  },
  {
    "code": "03MT009",
    "name": "Zoe"
  },
  {
    "code": "03MT009T1",
    "name": "Zoe"
  },
  {
    "code": "03MT054",
    "name": "Leona"
  },
  {
    "code": "03MT054T1",
    "name": "Leona"
  },
  {
    "code": "03MT055",
    "name": "Soraka"
  },
  {
    "code": "03MT055T1",
    "name": "Soraka"
  },
  {
    "code": "03MT056",
    "name": "Diana"
  },
  {
    "code": "03MT056T1",
    "name": "Diana"
  },
  {
    "code": "03MT058",
    "name": "Taric"
  },
  {
    "code": "03MT058T1",
    "name": "Taric"
  },
  {
    "code": "03MT087",
    "name": "Aurelion Sol"
  },
  {
    "code": "03MT087T1",
    "name": "Aurelion Sol"
  },
  {
    "code": "03MT217",
    "name": "Aphelios"
  },
  {
    "code": "03MT217T13",
    "name": "Aphelios"
  },
  {
    "code": "03NX007",
    "name": "Riven"
  },
  {
    "code": "03NX007T1",
    "name": "Riven"
  },
  {
    "code": "03PZ003",
    "name": "Viktor"
  },
  {
    "code": "03PZ003T1",
    "name": "Viktor"
  },
  {
    "code": "03SI005",
    "name": "Nocturne"
  },
  {
    "code": "03SI005T1",
    "name": "Nocturne"
  },
  {
    "code": "04BW005",
    "name": "Pyke"
  },
  {
    "code": "04BW005T2",
    "name": "Pyke"
  },
  {
    "code": "04DE008",
    "name": "Jarvan IV"
  },
  {
    "code": "04DE008T1",
    "name": "Jarvan IV"
  },
  {
    "code": "04FR005",
    "name": "Lissandra"
  },
  {
    "code": "04FR005T1",
    "name": "Lissandra"
  },
  {
    "code": "04IO005",
    "name": "Irelia"
  },
  {
    "code": "04IO005T2",
    "name": "Irelia"
  },
  {
    "code": "04MT008",
    "name": "Malphite"
  },
  {
    "code": "04MT008T1",
    "name": "Malphite"
  },
  {
    "code": "04NX004",
    "name": "LeBlanc"
  },
  {
    "code": "04NX004T2",
    "name": "LeBlanc"
  },
  {
    "code": "04PZ001",
    "name": "Ekko"
  },
  {
    "code": "04PZ001T3",
    "name": "Ekko"
  },
  {
    "code": "04SH003",
    "name": "Azir"
  },
  {
    "code": "04SH003T2",
    "name": "Azir"
  },
  {
    "code": "04SH003T3",
    "name": "Azir"
  },
  {
    "code": "04SH019",
    "name": "Rek'Sai"
  },
  {
    "code": "04SH019T1",
    "name": "Rek'Sai"
  },
  {
    "code": "04SH020",
    "name": "Sivir"
  },
  {
    "code": "04SH020T1",
    "name": "Sivir"
  },
  {
    "code": "04SH039",
    "name": "Zilean"
  },
  {
    "code": "04SH039T1",
    "name": "Zilean"
  },
  {
    "code": "04SH047",
    "name": "Nasus"
  },
  {
    "code": "04SH047T2",
    "name": "Nasus"
  },
  {
    "code": "04SH047T3",
    "name": "Nasus"
  },
  {
    "code": "04SH067",
    "name": "Renekton"
  },
  {
    "code": "04SH067T1",
    "name": "Renekton"
  },
  {
    "code": "04SH067T4",
    "name": "Renekton"
  },
  {
    "code": "04SH073",
    "name": "Taliyah"
  },
  {
    "code": "04SH073T2",
    "name": "Taliyah"
  },
  {
    "code": "04SH130",
    "name": "Akshan"
  },
  {
    "code": "04SH130T2",
    "name": "Akshan"
  },
  {
    "code": "04SI005",
    "name": "Kindred"
  },
  {
    "code": "04SI005T1",
    "name": "Kindred"
  },
  {
    "code": "04SI055",
    "name": "Viego"
  },
  {
    "code": "04SI055T2",
    "name": "Viego"
  },
  {
    "code": "05BC029",
    "name": "Yuumi"
  },
  {
    "code": "05BC029T3",
    "name": "Yuumi"
  },
  {
    "code": "05BC029T4",
    "name": "Yuumi"
  },
  {
    "code": "05BC029T5",
    "name": "Yuumi"
  },
  {
    "code": "05BC029T7",
    "name": "Yuumi"
  },
  {
    "code": "05BC029T8",
    "name": "Yuumi"
  },
  {
    "code": "05BC041",
    "name": "Poppy"
  },
  {
    "code": "05BC041T1",
    "name": "Poppy"
  },
  {
    "code": "05BC058",
    "name": "Kennen"
  },
  {
    "code": "05BC058T2",
    "name": "Kennen"
  },
  {
    "code": "05BC088",
    "name": "Rumble"
  },
  {
    "code": "05BC088T2",
    "name": "Rumble"
  },
  {
    "code": "05BC093",
    "name": "Veigar"
  },
  {
    "code": "05BC093T2",
    "name": "Grand Overseer Veigar"
  },
  {
    "code": "05BC133",
    "name": "Tristana"
  },
  {
    "code": "05BC133T1",
    "name": "Tristana"
  },
  {
    "code": "05BC161",
    "name": "Gnar"
  },
  {
    "code": "05BC161T1",
    "name": "Mega Gnar"
  },
  {
    "code": "05BC163",
    "name": "Ziggs"
  },
  {
    "code": "05BC163T1",
    "name": "Ziggs"
  },
  {
    "code": "05BW005",
    "name": "Nami"
  },
  {
    "code": "05BW005T1",
    "name": "Nami"
  },
  {
    "code": "05DE009",
    "name": "Galio"
  },
  {
    "code": "05DE009T1",
    "name": "Galio"
  },
  {
    "code": "05FR013",
    "name": "Udyr"
  },
  {
    "code": "05FR013T4",
    "name": "Udyr"
  },
  {
    "code": "05IO004",
    "name": "Ahri"
  },
  {
    "code": "05IO004T2",
    "name": "Ahri"
  },
  {
    "code": "05MT003",
    "name": "Pantheon"
  },
  {
    "code": "05MT003T2",
    "name": "Pantheon"
  },
  {
    "code": "05NX001",
    "name": "Sion"
  },
  {
    "code": "05NX001T1",
    "name": "Sion Returned"
  },
  {
    "code": "05NX001T3",
    "name": "Sion"
  },
  {
    "code": "05PZ006",
    "name": "Caitlyn"
  },
  {
    "code": "05PZ006T2",
    "name": "Caitlyn"
  },
  {
    "code": "05PZ022",
    "name": "Jayce"
  },
  {
    "code": "05PZ022T1",
    "name": "Jayce"
  },
  {
    "code": "05SH014",
    "name": "Xerath"
  },
  {
    "code": "05SH014T1",
    "name": "Xerath"
  },
  {
    "code": "05SH014T2",
    "name": "Xerath"
  },
  {
    "code": "05SI009",
    "name": "Senna"
  },
  {
    "code": "05SI009T1",
    "name": "Senna"
  },
  {
    "code": "06BC015",
    "name": "Norra"
  },
  {
    "code": "06BC015T2",
    "name": "Norra"
  },
  {
    "code": "06BW006",
    "name": "Illaoi"
  },
  {
    "code": "06BW006T1",
    "name": "Illaoi"
  },
  {
    "code": "06DE021",
    "name": "Vayne"
  },
  {
    "code": "06DE021T1",
    "name": "Vayne"
  },
  {
    "code": "06FR011",
    "name": "Ornn"
  },
  {
    "code": "06FR011T1",
    "name": "Ornn"
  },
  {
    "code": "06IO008",
    "name": "Master Yi"
  },
  {
    "code": "06IO008T1",
    "name": "Master Yi"
  },
  {
    "code": "06MT008",
    "name": "Kayle"
  },
  {
    "code": "06MT008T2",
    "name": "Kayle"
  },
  {
    "code": "06NX012",
    "name": "Annie"
  },
  {
    "code": "06NX012T7",
    "name": "Annie"
  },
  {
    "code": "06PZ021",
    "name": "Seraphine"
  },
  {
    "code": "06PZ021T2",
    "name": "Seraphine"
  },
  {
    "code": "06RU001",
    "name": "Bard"
  },
  {
    "code": "06RU001T4",
    "name": "Bard"
  },
  {
    "code": "06RU002",
    "name": "Jhin"
  },
  {
    "code": "06RU002T1",
    "name": "Jhin"
  },
  {
    "code": "06RU005",
    "name": "Kayn"
  },
  {
    "code": "06RU005T1",
    "name": "The Shadow Assassin"
  },
  {
    "code": "06RU005T2",
    "name": "Rhaast"
  },
  {
    "code": "06RU005T8",
    "name": "Kayn"
  },
  {
    "code": "06RU006",
    "name": "Ryze"
  },
  {
    "code": "06RU006T5",
    "name": "Ryze"
  },
  {
    "code": "06RU008",
    "name": "Jax"
  },
  {
    "code": "06RU008T7",
    "name": "Jax"
  },
  {
    "code": "06RU009",
    "name": "Varus"
  },
  {
    "code": "06RU009T6",
    "name": "Varus"
  },
  {
    "code": "06RU025",
    "name": "Evelynn"
  },
  {
    "code": "06RU025T5",
    "name": "Evelynn"
  },
  {
    "code": "06RU026",
    "name": "Aatrox"
  },
  {
    "code": "06RU026T3",
    "name": "Aatrox"
  },
  {
    "code": "06SH009",
    "name": "Kai'Sa"
  },
  {
    "code": "06SH009T2",
    "name": "Kai'Sa"
  },
  {
    "code": "06SI012",
    "name": "Gwen"
  },
  {
    "code": "06SI012T1",
    "name": "Gwen"
  },
  {
    "code": "07BW002",
    "name": "Jack"
  },
  {
    "code": "07BW002T2",
    "name": "Jack"
  },
  {
    "code": "07IO011",
    "name": "Sett"
  },
  {
    "code": "07IO011T1",
    "name": "Sett"
  },
  {
    "code": "07NX007",
    "name": "Samira"
  },
  {
    "code": "07NX007T1",
    "name": "Samira"
  }
]

export { data, gameVersion }
export type { Data }

