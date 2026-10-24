var wn={case:{name:"\u041A\u043E\u0440\u043F\u0443\u0441\u0430",one:"\u041A\u043E\u0440\u043F\u0443\u0441",icon:"\u{1F5C4}\uFE0F"},mb:{name:"\u041C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u0438\u0435 \u043F\u043B\u0430\u0442\u044B",one:"\u041C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u0430\u044F \u043F\u043B\u0430\u0442\u0430",icon:"\u{1F7E9}"},cpu:{name:"\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u044B",one:"\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440",icon:"\u{1F532}"},cooler:{name:"\u041E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435 CPU",one:"\u041A\u0443\u043B\u0435\u0440",icon:"\u2744\uFE0F"},ram:{name:"\u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u043F\u0430\u043C\u044F\u0442\u044C",one:"\u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u043F\u0430\u043C\u044F\u0442\u044C",icon:"\u{1F4CF}"},gpu:{name:"\u0412\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u044B",one:"\u0412\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430",icon:"\u{1F3AE}"},storage:{name:"\u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438",one:"\u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C",icon:"\u{1F4BE}"},psu:{name:"\u0411\u043B\u043E\u043A\u0438 \u043F\u0438\u0442\u0430\u043D\u0438\u044F",one:"\u0411\u043B\u043E\u043A \u043F\u0438\u0442\u0430\u043D\u0438\u044F",icon:"\u{1F50C}"},fan:{name:"\u0412\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440\u044B",one:"\u0412\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440",icon:"\u{1F300}"}},Ds=["cpu","mb","ram","gpu","storage","psu","cooler","case","fan"],ta=[],An=(i,t)=>t.forEach(e=>ta.push({type:i,lvl:1,...e}));An("cpu",[{id:"r3-3200g",name:"AMD Ryzen 3 3200G",socket:"AM4",cores:4,ghz:3.6,tdp:65,perf:750,igpu:!0,price:85},{id:"i3-10100",name:"Intel Core i3-10100",socket:"LGA1200",cores:4,ghz:3.6,tdp:65,perf:900,igpu:!0,price:95},{id:"r5-3600",name:"AMD Ryzen 5 3600",socket:"AM4",cores:6,ghz:3.6,tdp:65,perf:1300,igpu:!1,price:100},{id:"i5-10400f",name:"Intel Core i5-10400F",socket:"LGA1200",cores:6,ghz:2.9,tdp:65,perf:1250,igpu:!1,price:120},{id:"i5-12400f",name:"Intel Core i5-12400F",socket:"LGA1700",cores:6,ghz:2.5,tdp:65,perf:1700,igpu:!1,price:150,lvl:2},{id:"r5-5600x",name:"AMD Ryzen 5 5600X",socket:"AM4",cores:6,ghz:3.7,tdp:65,perf:1800,igpu:!1,price:160,lvl:2},{id:"r5-7600x",name:"AMD Ryzen 5 7600X",socket:"AM5",cores:6,ghz:4.7,tdp:105,perf:2300,igpu:!0,price:230,lvl:3},{id:"i7-12700k",name:"Intel Core i7-12700K",socket:"LGA1700",cores:12,ghz:3.6,tdp:125,perf:2600,igpu:!0,price:300,lvl:3},{id:"r7-5800x3d",name:"AMD Ryzen 7 5800X3D",socket:"AM4",cores:8,ghz:3.4,tdp:105,perf:2400,igpu:!1,price:320,lvl:3},{id:"i9-13900k",name:"Intel Core i9-13900K",socket:"LGA1700",cores:24,ghz:3,tdp:170,perf:3800,igpu:!0,price:560,lvl:4},{id:"r9-7950x",name:"AMD Ryzen 9 7950X",socket:"AM5",cores:16,ghz:4.5,tdp:170,perf:4e3,igpu:!0,price:580,lvl:4}]);An("mb",[{id:"a320m",name:"ASRock A320M-HDV",socket:"AM4",form:"mATX",ram:"DDR4",ramSlots:2,m2:1,price:55,color:1911327},{id:"h410m",name:"ASUS PRIME H410M-E",socket:"LGA1200",form:"mATX",ram:"DDR4",ramSlots:2,m2:1,price:75,color:1980972},{id:"b450-tmh",name:"MSI B450 TOMAHAWK MAX",socket:"AM4",form:"ATX",ram:"DDR4",ramSlots:4,m2:1,price:110,color:1710618},{id:"b560-tmh",name:"MSI MAG B560 TOMAHAWK",socket:"LGA1200",form:"ATX",ram:"DDR4",ramSlots:4,m2:2,price:140,color:2105376},{id:"b660m",name:"Gigabyte B660M DS3H",socket:"LGA1700",form:"mATX",ram:"DDR4",ramSlots:4,m2:1,price:110,color:2237994,lvl:2},{id:"b550i",name:"ASUS ROG STRIX B550-I",socket:"AM4",form:"ITX",ram:"DDR4",ramSlots:2,m2:1,price:190,color:1315860,lvl:2},{id:"b650-elite",name:"Gigabyte B650 AORUS ELITE",socket:"AM5",form:"ATX",ram:"DDR5",ramSlots:4,m2:2,price:220,color:1448480,lvl:3},{id:"z690-a",name:"ASUS ROG STRIX Z690-A",socket:"LGA1700",form:"ATX",ram:"DDR5",ramSlots:4,m2:2,price:300,color:2764083,lvl:3},{id:"x670e-hero",name:"ASUS ROG CROSSHAIR X670E HERO",socket:"AM5",form:"ATX",ram:"DDR5",ramSlots:4,m2:2,price:450,color:986898,lvl:4}]);An("ram",[{id:"ram-4-d4",name:"Samsung 4 \u0413\u0411 DDR4-2400",ram:"DDR4",gb:4,mhz:2400,price:14,color:2055214,rgb:!1},{id:"ram-8-d4",name:"Kingston FURY Beast 8 \u0413\u0411 DDR4-3200",ram:"DDR4",gb:8,mhz:3200,price:25,color:1118481,rgb:!1},{id:"ram-16-d4",name:"Corsair Vengeance LPX 16 \u0413\u0411 DDR4-3200",ram:"DDR4",gb:16,mhz:3200,price:45,color:1710618,rgb:!1},{id:"ram-16-d4rgb",name:"G.Skill Trident Z RGB 16 \u0413\u0411 DDR4-3600",ram:"DDR4",gb:16,mhz:3600,price:60,color:10132122,rgb:!0,lvl:2},{id:"ram-16-d5",name:"Kingston FURY Beast 16 \u0413\u0411 DDR5-5600",ram:"DDR5",gb:16,mhz:5600,price:60,color:1381653,rgb:!1,lvl:3},{id:"ram-32-d5rgb",name:"Corsair Dominator RGB 32 \u0413\u0411 DDR5-6000",ram:"DDR5",gb:32,mhz:6e3,price:130,color:11579568,rgb:!0,lvl:3}]);An("gpu",[{id:"gt1030",name:"MSI GeForce GT 1030",len:.17,slots:1,tdp:30,perf:400,pins:0,fans:1,price:80,color:2236962},{id:"gtx1650",name:"ASUS GeForce GTX 1650",len:.2,slots:2,tdp:75,perf:900,pins:0,fans:2,price:150,color:2829099},{id:"gtx1660s",name:"Gigabyte GTX 1660 SUPER",len:.23,slots:2,tdp:125,perf:1400,pins:1,fans:2,price:220,color:3158064},{id:"rtx2060",name:"NVIDIA GeForce RTX 2060",len:.23,slots:2,tdp:160,perf:1900,pins:1,fans:2,price:280,color:1842204,lvl:2},{id:"rtx3060",name:"ASUS DUAL RTX 3060 12 \u0413\u0411",len:.24,slots:2,tdp:170,perf:2300,pins:1,fans:2,price:330,color:3816770,lvl:2},{id:"rx6700xt",name:"Sapphire Pulse RX 6700 XT",len:.27,slots:2,tdp:230,perf:3e3,pins:1,fans:2,price:380,color:1776411,accent:13639722,lvl:3},{id:"rtx4070",name:"MSI RTX 4070 VENTUS 3X",len:.27,slots:2,tdp:200,perf:4e3,pins:1,fans:3,price:600,color:2500134,lvl:3},{id:"rtx3080",name:"EVGA RTX 3080 FTW3",len:.3,slots:3,tdp:320,perf:4200,pins:1,fans:3,price:700,color:1315860,lvl:4},{id:"rtx4090",name:"ASUS ROG STRIX RTX 4090",len:.33,slots:3,tdp:450,perf:7e3,pins:1,fans:3,price:1600,color:1118481,accent:16722541,lvl:5}]);An("storage",[{id:"hdd-1t",name:"Seagate BarraCuda 1 \u0422\u0411 (HDD)",kind:"hdd",gb:1e3,speed:1,price:45},{id:"ssd-480",name:"Kingston A400 480 \u0413\u0411 (SATA SSD)",kind:"ssd",gb:480,speed:3,price:35},{id:"hdd-2t",name:"WD Blue 2 \u0422\u0411 (HDD)",kind:"hdd",gb:2e3,speed:1,price:60},{id:"m2-500",name:"Samsung 980 500 \u0413\u0411 (M.2 NVMe)",kind:"m2",gb:500,speed:6,price:55},{id:"ssd-1t",name:"Samsung 870 EVO 1 \u0422\u0411 (SATA SSD)",kind:"ssd",gb:1e3,speed:3,price:90,lvl:2},{id:"m2-2t",name:"Samsung 990 PRO 2 \u0422\u0411 (M.2 NVMe)",kind:"m2",gb:2e3,speed:9,price:170,lvl:3}]);An("psu",[{id:"psu-400",name:"AeroCool VX-400 400 \u0412\u0442",watt:400,price:30},{id:"psu-550",name:"be quiet! System Power 10 550 \u0412\u0442",watt:550,price:60},{id:"psu-750",name:"Corsair RM750e 750 \u0412\u0442",watt:750,price:100,lvl:2},{id:"psu-1000",name:"Seasonic FOCUS GX-1000 1000 \u0412\u0442",watt:1e3,price:190,lvl:4}]);An("cooler",[{id:"cool-box",name:"\u0411\u043E\u043A\u0441\u043E\u0432\u044B\u0439 \u043A\u0443\u043B\u0435\u0440 (\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439)",kind:"box",tdpMax:65,price:15},{id:"cool-ak400",name:"DeepCool AK400",kind:"tower",tdpMax:180,price:35,color:1710618},{id:"cool-af34",name:"ARCTIC Freezer 34 eSports",kind:"tower",tdpMax:150,price:30,color:14540253,lvl:1},{id:"cool-nhd15",name:"Noctua NH-D15",kind:"tower2",tdpMax:250,price:100,color:9136722,lvl:3}]);An("case",[{id:"case-q300l",name:"Cooler Master Q300L",form:"mATX",gpuMax:.36,price:45,color:1710618,frontMesh:!0},{id:"case-s2",name:"Zalman S2",form:"ATX",gpuMax:.31,price:45,color:1381653,frontMesh:!1},{id:"case-h510",name:"NZXT H510",form:"ATX",gpuMax:.36,price:80,color:15921906,frontMesh:!1},{id:"case-meshify",name:"Fractal Design Meshify C",form:"ATX",gpuMax:.31,price:95,color:1052688,frontMesh:!0,lvl:2},{id:"case-o11",name:"Lian Li O11 Dynamic",form:"ATX",gpuMax:.42,price:150,color:15395562,frontMesh:!1,lvl:3}]);An("fan",[{id:"fan-p12",name:"ARCTIC P12 120 \u043C\u043C",rgb:!1,price:8},{id:"fan-rgb",name:"Corsair iCUE SP120 RGB",rgb:!0,price:25}]);var Ls=ta,pe=Object.fromEntries(ta.map(i=>[i.id,i]));function Us(i){switch(i.type){case"cpu":return`${i.socket} \xB7 ${i.cores} \u044F\u0434\u0435\u0440 \xB7 ${i.ghz} \u0413\u0413\u0446 \xB7 ${i.tdp} \u0412\u0442${i.igpu?" \xB7 \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u0433\u0440\u0430\u0444\u0438\u043A\u0430":""}`;case"mb":return`${i.socket} \xB7 ${i.form} \xB7 ${i.ram} \xD7${i.ramSlots} \xB7 M.2 \xD7${i.m2}`;case"ram":return`${i.ram} \xB7 ${i.gb} \u0413\u0411 \xB7 ${i.mhz} \u041C\u0413\u0446${i.rgb?" \xB7 RGB":""}`;case"gpu":return`\u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C ${i.perf} \xB7 ${i.tdp} \u0412\u0442 \xB7 ${Math.round(i.len*1e3)} \u043C\u043C${i.pins?" \xB7 \u0434\u043E\u043F. \u043F\u0438\u0442\u0430\u043D\u0438\u0435":""}`;case"storage":return`${i.kind==="hdd"?'HDD 3.5"':i.kind==="ssd"?'SSD 2.5" SATA':"M.2 NVMe"} \xB7 ${i.gb>=1e3?i.gb/1e3+" \u0422\u0411":i.gb+" \u0413\u0411"}`;case"psu":return`${i.watt} \u0412\u0442 \xB7 ATX`;case"cooler":return`\u0434\u043E ${i.tdpMax} \u0412\u0442 \xB7 ${i.kind==="box"?"\u043D\u0438\u0437\u043A\u043E\u043F\u0440\u043E\u0444\u0438\u043B\u044C\u043D\u044B\u0439":"\u0431\u0430\u0448\u0435\u043D\u043D\u044B\u0439"}`;case"case":return`\u0434\u043E ${i.form} \xB7 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430 \u0434\u043E ${Math.round(i.gpuMax*1e3)} \u043C\u043C`;case"fan":return`120 \u043C\u043C${i.rgb?" \xB7 RGB":""}`}return""}var fd={ATX:["ATX","mATX","ITX"],mATX:["mATX","ITX"],ITX:["ITX"]},Qe={case:{type:"case",label:"\u041A\u043E\u0440\u043F\u0443\u0441"},mb:{type:"mb",label:"\u041C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u0430\u044F \u043F\u043B\u0430\u0442\u0430"},cpu:{type:"cpu",label:"\u0421\u043E\u043A\u0435\u0442 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u0430"},cooler:{type:"cooler",label:"\u041A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u043A\u0443\u043B\u0435\u0440\u0430"},ram0:{type:"ram",label:"\u0421\u043B\u043E\u0442 \u041E\u0417\u0423 1"},ram1:{type:"ram",label:"\u0421\u043B\u043E\u0442 \u041E\u0417\u0423 2"},ram2:{type:"ram",label:"\u0421\u043B\u043E\u0442 \u041E\u0417\u0423 3"},ram3:{type:"ram",label:"\u0421\u043B\u043E\u0442 \u041E\u0417\u0423 4"},gpu:{type:"gpu",label:"\u0421\u043B\u043E\u0442 PCIe x16"},m2_0:{type:"storage",kind:"m2",label:"\u0421\u043B\u043E\u0442 M.2 \u21161"},m2_1:{type:"storage",kind:"m2",label:"\u0421\u043B\u043E\u0442 M.2 \u21162"},sata0:{type:"storage",kind:"ssd",label:'\u041E\u0442\u0441\u0435\u043A 2.5" \u21161'},sata1:{type:"storage",kind:"ssd",label:'\u041E\u0442\u0441\u0435\u043A 2.5" \u21162'},hdd0:{type:"storage",kind:"hdd",label:'\u041E\u0442\u0441\u0435\u043A 3.5"'},psu:{type:"psu",label:"\u041E\u0442\u0441\u0435\u043A \u0431\u043B\u043E\u043A\u0430 \u043F\u0438\u0442\u0430\u043D\u0438\u044F"},fanF0:{type:"fan",label:"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440 1"},fanF1:{type:"fan",label:"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440 2"},fanR0:{type:"fan",label:"\u0417\u0430\u0434\u043D\u0438\u0439 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440"}},jl=Object.keys(Qe),Os=()=>({slots:{},cables:{}}),Me=i=>i?pe[i.pid]:null,Ae=(i,t)=>Me(i.slots[t]);function Ql(i){if(!i.slots.case)return["case"];let t=["case","mb","psu","sata0","sata1","hdd0","fanF0","fanF1","fanR0"],e=Ae(i,"mb");if(e){t.push("cpu","gpu");for(let n=0;n<e.ramSlots;n++)t.push("ram"+n);for(let n=0;n<e.m2;n++)t.push("m2_"+n);i.slots.cpu&&t.push("cooler")}return t}function Er(i,t,e){let n=Me(t),s=Qe[e];if(!n||!s)return{ok:!1,reason:"\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u0434\u0435\u0442\u0430\u043B\u044C"};if(s.type!==n.type)return{ok:!1,reason:"\u0421\u044E\u0434\u0430 \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044F \u0434\u0440\u0443\u0433\u0430\u044F \u0434\u0435\u0442\u0430\u043B\u044C"};if(s.kind&&s.kind!==n.kind)return{ok:!1,reason:s.kind==="m2"?"\u042D\u0442\u043E \u043D\u0435 M.2 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C":s.kind==="hdd"?'\u041E\u0442\u0441\u0435\u043A \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F 3.5" HDD':'\u041E\u0442\u0441\u0435\u043A \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F 2.5" SSD'};if(i.slots[e])return{ok:!1,reason:"\u0421\u043B\u043E\u0442 \u0437\u0430\u043D\u044F\u0442"};if(!Ql(i).includes(e))return e==="cooler"?{ok:!1,reason:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440"}:e!=="case"&&!i.slots.case?{ok:!1,reason:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u0440\u043F\u0443\u0441"}:{ok:!1,reason:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u0443\u044E \u043F\u043B\u0430\u0442\u0443"};let r=Ae(i,"case"),o=Ae(i,"mb"),a=Ae(i,"cpu");switch(n.type){case"mb":if(!fd[r.form].includes(n.form))return{ok:!1,reason:`\u041F\u043B\u0430\u0442\u0430 ${n.form} \u043D\u0435 \u0432\u043B\u0435\u0437\u0435\u0442 \u0432 \u043A\u043E\u0440\u043F\u0443\u0441 ${r.form}`};break;case"cpu":if(n.socket!==o.socket)return{ok:!1,reason:`\u0421\u043E\u043A\u0435\u0442 ${n.socket} \u2260 ${o.socket} \u0443 \u043F\u043B\u0430\u0442\u044B`};break;case"ram":if(n.ram!==o.ram)return{ok:!1,reason:`\u041F\u043B\u0430\u0442\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E ${o.ram}`};break;case"gpu":if(n.len>r.gpuMax)return{ok:!1,reason:`\u0412\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430 ${Math.round(n.len*1e3)} \u043C\u043C \u0434\u043B\u0438\u043D\u043D\u0435\u0435 \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E\u0439 ${Math.round(r.gpuMax*1e3)} \u043C\u043C`};break;case"cooler":if(!a)return{ok:!1,reason:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440"};break}return{ok:!0}}function th(i,t){let e=Me(t);return e?jl.filter(n=>Qe[n].type===e.type&&(!Qe[n].kind||Qe[n].kind===e.kind)).filter(n=>!i.slots[n]).filter(n=>Ql(i).includes(n)||n==="cooler"&&i.slots.mb).map(n=>({slot:n,...Er(i,t,n)})):[]}var pd={case:jl.filter(i=>i!=="case"),mb:["cpu","cooler","ram0","ram1","ram2","ram3","gpu","m2_0","m2_1"],cpu:["cooler"]};function ea(i,t){if(!i.slots[t])return{ok:!1,reason:"\u0421\u043B\u043E\u0442 \u043F\u0443\u0441\u0442"};let e=(pd[t]||[]).filter(n=>i.slots[n]);if(e.length){let n=Ae(i,e[e.length-1]);return{ok:!1,reason:`\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u043D\u0438\u043C\u0438\u0442\u0435: ${n?n.name:Qe[e[0]].label}`}}return{ok:!0}}function eh(i,t,e){let n=Er(i,t,e);return n.ok?(i.slots[e]=t,{ok:!0}):n}function nh(i,t){let e=ea(i,t);if(!e.ok)return e;let n=i.slots[t];delete i.slots[t];for(let s of Yn(i,!0))md(i,s)||delete i.cables[s];return t==="psu"&&(i.cables={}),{ok:!0,item:n}}var na={mb24:"24-pin \u043F\u0438\u0442\u0430\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u044B",cpu8:"8-pin \u043F\u0438\u0442\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u0430",gpu:"\u041F\u0438\u0442\u0430\u043D\u0438\u0435 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u044B",sata0:"SATA \u043A SSD \u21161",sata1:"SATA \u043A SSD \u21162",hdd0:"SATA \u043A HDD"};function md(i,t){return t==="mb24"||t==="cpu8"?!!i.slots.mb:t==="gpu"?!!Ae(i,"gpu")?.pins:!!i.slots[t]}function Yn(i,t=!1){let e=t?Object.keys(i.cables):[];if(!t){i.slots.mb&&e.push("mb24","cpu8"),Ae(i,"gpu")?.pins&&e.push("gpu");for(let n of["sata0","sata1","hdd0"])i.slots[n]&&e.push(n)}return e}function ih(i,t){return i.slots.psu?Yn(i).includes(t)?(i.cables[t]=!0,{ok:!0}):{ok:!1,reason:"\u041D\u0435\u043A\u0443\u0434\u0430 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0442\u044C"}:{ok:!1,reason:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0431\u043B\u043E\u043A \u043F\u0438\u0442\u0430\u043D\u0438\u044F"}}function sh(i,t){return delete i.cables[t],{ok:!0}}var Ns=i=>["ram0","ram1","ram2","ram3"].map(t=>i.slots[t]).filter(Boolean),ui=i=>Ns(i).reduce((t,e)=>t+Me(e).gb,0),Fs=i=>["m2_0","m2_1","sata0","sata1","hdd0"].filter(t=>i.slots[t]),rh=i=>["fanF0","fanF1","fanR0"].filter(t=>i.slots[t]).length,Rn=i=>Object.values(i.slots),ia=i=>Object.entries(i.slots).filter(([,t])=>t.dirty).map(([t])=>t);function Sr(i){let t=Ae(i,"cpu"),e=Ae(i,"gpu");return Math.round(40+(t?.tdp||0)*1.1+(e?.tdp||0)+Ns(i).length*5+rh(i)*3+Fs(i).length*7)}function sa(i){let t=Ae(i,"cpu"),e=Ae(i,"cooler"),n=Ae(i,"gpu"),s=rh(i),r=ia(i).length,o=(s===0?9:s===1?4:0)-(s>=3?3:0),a=32;t&&(a=e?30+45*(t.tdp/e.tdpMax)+o+r*6:110),i.slots.cooler?.dirty&&(a+=12);let c=n?38+n.tdp/9+o+(i.slots.gpu?.dirty?18:0):0;return{cpu:Math.round(Math.min(a,110)),gpu:Math.round(Math.min(c,105))}}function di(i){let t={power:!1,post:!1,boot:!1,error:"",beep:"",shutdown:!1},e=Ae(i,"psu"),n=Ae(i,"mb"),s=Ae(i,"cpu");if(!i.slots.case)return{...t,error:"\u041D\u0435\u0442 \u043A\u043E\u0440\u043F\u0443\u0441\u0430"};if(!e)return{...t,error:"\u041D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u0431\u043B\u043E\u043A \u043F\u0438\u0442\u0430\u043D\u0438\u044F"};if(i.slots.psu.broken)return{...t,error:"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u0435\u043D \u0431\u043B\u043E\u043A \u043F\u0438\u0442\u0430\u043D\u0438\u044F"};if(!n)return{...t,error:"\u041D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u0430\u044F \u043F\u043B\u0430\u0442\u0430"};if(!i.cables.mb24)return{...t,error:"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442: \u043D\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E 24-pin \u043F\u0438\u0442\u0430\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u044B"};if(i.slots.mb.broken)return{...t,error:"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u043D\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u0430\u044F \u043F\u043B\u0430\u0442\u0430"};if(t.power=!0,!i.cables.cpu8)return{...t,error:"\u0412\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440\u044B \u043A\u0440\u0443\u0442\u044F\u0442\u0441\u044F, \u043D\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043D\u0435\u0442: \u043D\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E \u043F\u0438\u0442\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u0430 (8-pin)"};if(!s)return{...t,error:"\u041D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F: \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440 \u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D",beep:"1 \u0434\u043B\u0438\u043D\u043D\u044B\u0439, 3 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445"};if(i.slots.cpu.broken)return{...t,error:"\u041D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u0435\u043D \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440",beep:"1 \u0434\u043B\u0438\u043D\u043D\u044B\u0439, 3 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445"};let r=Ns(i);if(!r.length)return{...t,error:"\u041D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F: \u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u043F\u0430\u043C\u044F\u0442\u044C",beep:"\u0434\u043B\u0438\u043D\u043D\u044B\u0435 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u044E\u0449\u0438\u0435\u0441\u044F"};if(r.some(l=>l.broken))return{...t,error:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0430\u043C\u044F\u0442\u0438! \u041E\u0434\u043D\u0430 \u0438\u0437 \u043F\u043B\u0430\u043D\u043E\u043A \u041E\u0417\u0423 \u043D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u043D\u0430",beep:"\u0434\u043B\u0438\u043D\u043D\u044B\u0435 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u044E\u0449\u0438\u0435\u0441\u044F"};let o=Ae(i,"gpu");if(!o&&!s.igpu)return{...t,error:"\u041D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F: \u0443 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u0430 \u043D\u0435\u0442 \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0439 \u0433\u0440\u0430\u0444\u0438\u043A\u0438, \u043D\u0443\u0436\u043D\u0430 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430",beep:"1 \u0434\u043B\u0438\u043D\u043D\u044B\u0439, 2 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445"};if(o&&o.pins&&!i.cables.gpu)return{...t,error:"\u041D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F: \u043D\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E \u043F\u0438\u0442\u0430\u043D\u0438\u0435 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u044B",beep:"1 \u0434\u043B\u0438\u043D\u043D\u044B\u0439, 2 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445"};if(o&&i.slots.gpu.broken)return{...t,error:"\u041D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u043D\u0430 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430",beep:"1 \u0434\u043B\u0438\u043D\u043D\u044B\u0439, 2 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445"};if(t.post=!0,!i.slots.cooler)return{...t,error:"CPU OVERHEAT! \u041A\u0443\u043B\u0435\u0440 \u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u2014 \u0430\u0432\u0430\u0440\u0438\u0439\u043D\u043E\u0435 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435",shutdown:!0};if(Sr(i)>e.watt)return{...t,error:`\u0411\u043B\u043E\u043A \u043F\u0438\u0442\u0430\u043D\u0438\u044F \u043F\u0435\u0440\u0435\u0433\u0440\u0443\u0436\u0435\u043D (${Sr(i)} \u0412\u0442 \u0438\u0437 ${e.watt}) \u2014 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u044B\u043A\u043B\u044E\u0447\u0438\u043B\u0441\u044F`,shutdown:!0};let a=Fs(i);if(!a.length)return{...t,error:"\u0417\u0430\u0433\u0440\u0443\u0437\u043E\u0447\u043D\u043E\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E. \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C"};let c=a.filter(l=>l.startsWith("m2")||i.cables[l]);return c.length?c.every(l=>i.slots[l].broken)?{...t,error:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0447\u0442\u0435\u043D\u0438\u044F \u0434\u0438\u0441\u043A\u0430. \u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u043D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u0435\u043D"}:(t.boot=!0,t):{...t,error:"\u0417\u0430\u0433\u0440\u0443\u0437\u043E\u0447\u043D\u043E\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E. \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0435 SATA-\u043A\u0430\u0431\u0435\u043B\u044C \u043A \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044E"}}function oh(i){let t=di(i);if(!t.boot)return{ok:!1,error:t.error||"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F"};let e=Ae(i,"cpu"),n=Ae(i,"gpu"),s=sa(i),r=n?n.perf:250,o=ui(i),a=Ns(i).length,c=o<8?.72:o<16?.88:o<32?1:1.04;a===1&&(c*=.93);let l=Ns(i).reduce((g,_)=>g+Me(_).mhz,0)/Math.max(1,a);c*=.94+Math.min(l,6e3)/1e5;let h=1;s.cpu>90?h-=.18:s.cpu>80&&(h-=.07),s.gpu>85&&(h-=.1);let u=Math.min(1,e.perf*2.2/r)*.25+.75,d=Math.round((r*.7+e.perf*.3)*c*h*u*4.2),p=Math.round(d/95);return{ok:!0,score:d,fps:p,cpuTemp:s.cpu,gpuTemp:s.gpu,throttle:h<1}}var Bs=i=>Rn(i).reduce((t,e)=>t+(Me(e)?.price||0),0);function gd(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var fi=(i,t)=>t[Math.floor(i()*t.length)],_d=["\u0410\u043B\u0435\u043A\u0441\u0435\u0439","\u041C\u0430\u0440\u0438\u044F","\u0414\u043C\u0438\u0442\u0440\u0438\u0439","\u0410\u043D\u043D\u0430","\u0418\u0432\u0430\u043D","\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0430","\u0421\u0435\u0440\u0433\u0435\u0439","\u041E\u043B\u044C\u0433\u0430","\u041D\u0438\u043A\u0438\u0442\u0430","\u0422\u0430\u0442\u044C\u044F\u043D\u0430","\u0410\u0440\u0442\u0451\u043C","\u042E\u043B\u0438\u044F","\u041C\u0430\u043A\u0441\u0438\u043C","\u041F\u043E\u043B\u0438\u043D\u0430","\u041A\u0438\u0440\u0438\u043B\u043B","\u0412\u0438\u043A\u0442\u043E\u0440\u0438\u044F","\u0415\u0433\u043E\u0440","\u0414\u0430\u0440\u044C\u044F","\u0414\u0435\u043D\u0438\u0441","\u041A\u0441\u0435\u043D\u0438\u044F","\u0413\u043E\u0448\u0430","\u041C\u0438\u0445\u0430\u0438\u043B"],xd=[{tier:1,parts:{case:"case-q300l",mb:"a320m",cpu:"r3-3200g",cooler:"cool-box",ram0:"ram-8-d4",hdd0:"hdd-1t",psu:"psu-400"}},{tier:1,parts:{case:"case-s2",mb:"h410m",cpu:"i3-10100",cooler:"cool-box",ram0:"ram-4-d4",ram1:"ram-4-d4",gpu:"gt1030",hdd0:"hdd-1t",psu:"psu-400",fanR0:"fan-p12"}},{tier:2,parts:{case:"case-s2",mb:"b450-tmh",cpu:"r5-3600",cooler:"cool-box",ram0:"ram-8-d4",ram2:"ram-8-d4",gpu:"gtx1660s",sata0:"ssd-480",hdd0:"hdd-1t",psu:"psu-550",fanF0:"fan-p12",fanR0:"fan-p12"}},{tier:2,parts:{case:"case-h510",mb:"b560-tmh",cpu:"i5-10400f",cooler:"cool-af34",ram0:"ram-8-d4",ram2:"ram-8-d4",gpu:"gtx1650",m2_0:"m2-500",psu:"psu-550",fanF0:"fan-p12",fanR0:"fan-p12"}},{tier:3,parts:{case:"case-meshify",mb:"b660m",cpu:"i5-12400f",cooler:"cool-ak400",ram0:"ram-16-d4",ram1:"ram-16-d4",gpu:"rtx3060",m2_0:"m2-500",hdd0:"hdd-2t",psu:"psu-750",fanF0:"fan-p12",fanF1:"fan-p12",fanR0:"fan-p12"}},{tier:3,parts:{case:"case-h510",mb:"b650-elite",cpu:"r5-7600x",cooler:"cool-ak400",ram0:"ram-16-d5",ram2:"ram-16-d5",gpu:"rx6700xt",m2_0:"m2-2t",psu:"psu-750",fanF0:"fan-rgb",fanF1:"fan-rgb",fanR0:"fan-rgb"}}];function vd(i,t){let e=Os();for(let[n,s]of Object.entries(i.parts))e.slots[n]=t(s,{client:!0});for(let n of Yn(e))e.cables[n]=!0;return e}var ah={ram:{slots:["ram0","ram1","ram2","ram3"],subject:"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u043F\u0438\u0449\u0438\u0442 \u0438 \u043D\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F",text:"\u0412\u043A\u043B\u044E\u0447\u0430\u044E \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u2014 \u043E\u043D \u0434\u043E\u043B\u0433\u043E \u043F\u0438\u0449\u0438\u0442, \u0430 \u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0435 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435\u0442. \u0412\u0447\u0435\u0440\u0430 \u0432\u0441\u0451 \u0440\u0430\u0431\u043E\u0442\u0430\u043B\u043E! \u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430."},gpu:{slots:["gpu"],subject:"\u041D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",text:"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u0440\u043E\u0434\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F, \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440\u044B \u0448\u0443\u043C\u044F\u0442, \u043D\u043E \u043C\u043E\u043D\u0438\u0442\u043E\u0440 \u043F\u0438\u0448\u0435\u0442 \xAB\u043D\u0435\u0442 \u0441\u0438\u0433\u043D\u0430\u043B\u0430\xBB. \u041A\u0430\u0431\u0435\u043B\u044C \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u043B."},psu:{slots:["psu"],subject:"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u043E\u043E\u0431\u0449\u0435 \u043D\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F",text:"\u041D\u0430\u0436\u0438\u043C\u0430\u044E \u043A\u043D\u043E\u043F\u043A\u0443 \u043F\u0438\u0442\u0430\u043D\u0438\u044F \u2014 \u043D\u043E\u043B\u044C \u0440\u0435\u0430\u043A\u0446\u0438\u0438. \u041D\u0438 \u043B\u0430\u043C\u043F\u043E\u0447\u0435\u043A, \u043D\u0438 \u0437\u0432\u0443\u043A\u0430. \u0420\u043E\u0437\u0435\u0442\u043A\u0430 \u0440\u0430\u0431\u043E\u0447\u0430\u044F. \u0421\u043F\u0430\u0441\u0438\u0442\u0435!"},storage:{slots:["m2_0","sata0","hdd0"],subject:"\u041D\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F Windows",text:"\u041F\u0438\u0448\u0435\u0442 \u0447\u0442\u043E-\u0442\u043E \u043F\u0440\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u043E\u0447\u043D\u043E\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0438 \u0434\u0430\u043B\u044C\u0448\u0435 \u043D\u0435 \u0438\u0434\u0451\u0442. \u041A\u0430\u0436\u0435\u0442\u0441\u044F, \u0434\u0438\u0441\u043A \u0443\u043C\u0435\u0440. \u0414\u0430\u043D\u043D\u044B\u0435 \u043D\u0435 \u0432\u0430\u0436\u043D\u044B, \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0443\u0436\u0435\u043D \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u041F\u041A."},cpu:{slots:["cpu"],subject:"\u0427\u0451\u0440\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D \u043F\u043E\u0441\u043B\u0435 \u0447\u0438\u0441\u0442\u043A\u0438",text:"\u0420\u0435\u0448\u0438\u043B \u0441\u0430\u043C \u043F\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440, \u0441\u043D\u044F\u043B \u043A\u0443\u043B\u0435\u0440, \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u043B \u043E\u0431\u0440\u0430\u0442\u043D\u043E \u2014 \u0438 \u0432\u0441\u0451, \u0447\u0451\u0440\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D. \u041A\u0430\u0436\u0435\u0442\u0441\u044F, \u0447\u0442\u043E-\u0442\u043E \u0441\u043B\u043E\u043C\u0430\u043B\u2026"}};function ch(i,t,e){let n=gd(i),s=fi(n,_d),r=xd.filter(u=>u.tier<=Math.min(3,1+Math.floor((t+1)/2))),o=["repair","repair","clean","upgrade_gpu","upgrade_ram","upgrade_ssd"];t>=2&&o.push("build","build"),t>=4&&o.push("build");let a=fi(n,o),c={id:"j"+i,seed:i,type:a,customer:s,xp:40,reward:0,req:{}};if(a==="build"){let u=fi(n,t>=3?[800,1e3,1200,1500,2e3]:[450,550,650,800]),d=fi(n,["case-s2","case-h510","case-meshify","case-q300l"]),p=Os();p.slots.case=e(d,{client:!0});let g=Math.round(yd(u*.85)*.85/100)*100;return Object.assign(c,{pc:p,reward:u,xp:90,req:{score:g,budget:u},subject:`\u0421\u043E\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0433\u0440\u043E\u0432\u043E\u0439 \u041F\u041A \u0434\u043E $${u}`,text:`\u041F\u0440\u0438\u0432\u0435\u0442! \u0425\u043E\u0447\u0443 \u043D\u043E\u0432\u044B\u0439 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0434\u043B\u044F \u0438\u0433\u0440. \u041A\u043E\u0440\u043F\u0443\u0441 ${pe[d].name} \u0443 \u043C\u0435\u043D\u044F \u0443\u0436\u0435 \u0435\u0441\u0442\u044C \u2014 \u043F\u0440\u0438\u0432\u0451\u0437 \u0435\u0433\u043E \u0432\u0430\u043C. \u0411\u044E\u0434\u0436\u0435\u0442 \u043D\u0430 \u0432\u0441\u0451 \u2014 $${u} (\u044D\u0442\u043E \u0438 \u0435\u0441\u0442\u044C \u043E\u043F\u043B\u0430\u0442\u0430, \u0432\u0441\u0451, \u0447\u0442\u043E \u0441\u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0442\u0435 \u043D\u0430 \u0434\u0435\u0442\u0430\u043B\u044F\u0445 \u2014 \u0432\u0430\u0448\u0435). \u0413\u043B\u0430\u0432\u043D\u043E\u0435, \u0447\u0442\u043E\u0431\u044B \u0432 \u0442\u0435\u0441\u0442\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0431\u044B\u043B\u043E \u043D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 ${g} \u043E\u0447\u043A\u043E\u0432.`}),c}let l=fi(n,r),h=vd(l,e);if(c.pc=h,a==="repair"){let u=fi(n,Object.keys(ah).filter(_=>_!=="cpu"||t>=2)),d=ah[u],p=fi(n,d.slots.filter(_=>h.slots[_]));h.slots[p].broken=!0;let g=Me(h.slots[p]);Object.assign(c,{subject:d.subject,text:d.text,xp:50,reward:Math.round((g.price*1.25+40+n()*30)/5)*5})}else if(a==="clean"){let u=Object.keys(h.slots).filter(d=>d!=="case");for(let d of u)(n()<.55||d==="cooler"||d==="gpu")&&(h.slots[d].dirty=!0);Object.assign(c,{subject:"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0433\u0440\u0435\u0435\u0442\u0441\u044F \u0438 \u0433\u0443\u0434\u0438\u0442 \u043A\u0430\u043A \u0441\u0430\u043C\u043E\u043B\u0451\u0442",text:"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0443 \u043B\u0435\u0442 \u043F\u044F\u0442\u044C, \u0432\u043D\u0443\u0442\u0440\u044C \u043D\u0438 \u0440\u0430\u0437\u0443 \u043D\u0435 \u0437\u0430\u0433\u043B\u044F\u0434\u044B\u0432\u0430\u043B. \u0421\u0442\u0430\u043B \u0436\u0443\u0442\u043A\u043E \u0448\u0443\u043C\u0435\u0442\u044C \u0438 \u0438\u043D\u043E\u0433\u0434\u0430 \u0432\u044B\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432 \u0438\u0433\u0440\u0430\u0445. \u041F\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u0435, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0442 \u043F\u044B\u043B\u0438.",reward:45+Math.round(n()*4)*5,xp:35})}else if(a==="upgrade_gpu"){let u=Me(h.slots.gpu)?.perf||250,d=Ls.filter(_=>_.type==="gpu"&&_.perf>u*1.3&&_.lvl<=t+1),p=d.length?d[Math.min(d.length-1,Math.floor(n()*2))]:pe.rtx3060,g=Ls.filter(_=>_.type==="gpu"&&_.perf>=p.perf).sort((_,m)=>_.price-m.price)[0];Object.assign(c,{subject:"\u041D\u0443\u0436\u043D\u0430 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430 \u043F\u043E\u043C\u043E\u0449\u043D\u0435\u0435",text:`\u0425\u043E\u0447\u0443 \u043F\u043E\u0438\u0433\u0440\u0430\u0442\u044C \u0432 \u043D\u043E\u0432\u044B\u0435 \u0438\u0433\u0440\u044B, \u0430 \u043C\u043E\u0439 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u043D\u0435 \u0442\u044F\u043D\u0435\u0442. \u041F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0443 \u0443\u0440\u043E\u0432\u043D\u044F ${p.name} \u0438\u043B\u0438 \u043C\u043E\u0449\u043D\u0435\u0435. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0431\u043B\u043E\u043A \u043F\u0438\u0442\u0430\u043D\u0438\u044F \u0441\u043F\u0440\u0430\u0432\u043B\u044F\u043B\u0441\u044F! \u0421\u0442\u0430\u0440\u0443\u044E \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0443 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0431\u0435.`,req:{gpuPerf:p.perf,gpuName:p.name},reward:Math.round((g.price*1.2+50)/5)*5,xp:55}),h.slots.gpu&&(h.slots.gpu.client=!1)}else if(a==="upgrade_ram"){let u=ui(h),d=u>=16?32:16;Object.assign(c,{subject:`\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439 \u043F\u0430\u043C\u044F\u0442\u0438 \u0434\u043E ${d} \u0413\u0411`,text:`\u0421\u0435\u0439\u0447\u0430\u0441 \u0443 \u043C\u0435\u043D\u044F ${u} \u0413\u0411, \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0438 \u0438\u0433\u0440\u044B \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0442\u043E\u0440\u043C\u043E\u0437\u044F\u0442. \u041D\u0443\u0436\u043D\u043E \u043C\u0438\u043D\u0438\u043C\u0443\u043C ${d} \u0413\u0411 \u041E\u0417\u0423. \u0421\u0442\u0430\u0440\u044B\u0435 \u043F\u043B\u0430\u043D\u043A\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0431\u0435.`,req:{ramGb:d},reward:Math.round((d*3.2+40)/5)*5,xp:40});for(let p of["ram0","ram1","ram2","ram3"])h.slots[p]&&(h.slots[p].client=!1)}else if(a==="upgrade_ssd"&&(Object.assign(c,{subject:"\u0425\u043E\u0447\u0443, \u0447\u0442\u043E\u0431\u044B \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u043B\u0441\u044F",text:"\u0413\u043E\u0432\u043E\u0440\u044F\u0442, \u0447\u0442\u043E SSD \u0441\u0438\u043B\u044C\u043D\u043E \u0443\u0441\u043A\u043E\u0440\u044F\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443. \u041F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043C\u043D\u0435, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, SSD (\u043E\u0431\u044B\u0447\u043D\u044B\u0439 SATA \u0438\u043B\u0438 M.2 \u2014 \u0431\u0435\u0437 \u0440\u0430\u0437\u043D\u0438\u0446\u044B).",req:{ssd:!0},reward:85,xp:35}),h.slots.sata0||h.slots.m2_0)){let u=h.slots.m2_0?"m2_0":"sata0";h.slots[u].broken=!0,c.text="SSD \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u043B \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C\u0441\u044F, \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0433\u0440\u0443\u0437\u0438\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u043E \u0441\u0442\u0430\u0440\u043E\u0433\u043E HDD, \u0438 \u0442\u043E \u043D\u0435 \u0432\u0441\u0435\u0433\u0434\u0430. \u041F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 SSD!"}return c}var ks=[[0,0],[300,1519],[400,2544],[450,3246],[550,5201],[650,7593],[800,10424],[1e3,12649],[1200,14945],[1500,15859],[2e3,16818]];function yd(i){for(let t=1;t<ks.length;t++){let[e,n]=ks[t-1],[s,r]=ks[t];if(i<=s)return n+(r-n)*(i-e)/(s-e)}return ks[ks.length-1][1]}function ra(i,t,e={}){let n=[],s=di(t);n.push({label:"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0438 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F",ok:s.boot});let r=Rn(t).filter(o=>o.broken);if((i.type==="repair"||i.type==="upgrade_ssd")&&n.push({label:"\u041D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u043D\u044B\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u044B",ok:r.length===0}),i.type==="clean"&&n.push({label:"\u0412\u0441\u044F \u043F\u044B\u043B\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u0430",ok:ia(t).length===0}),i.req.gpuPerf){let o=Me(t.slots.gpu);n.push({label:`\u0412\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430 \u043D\u0435 \u0445\u0443\u0436\u0435 ${i.req.gpuName}`,ok:!!o&&o.perf>=i.req.gpuPerf&&!t.slots.gpu.broken})}if(i.req.ramGb&&n.push({label:`\u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439 \u043F\u0430\u043C\u044F\u0442\u0438 \u2265 ${i.req.ramGb} \u0413\u0411 (\u0441\u0435\u0439\u0447\u0430\u0441 ${ui(t)})`,ok:ui(t)>=i.req.ramGb}),i.req.ssd){let o=["m2_0","m2_1","sata0","sata1"].some(a=>t.slots[a]&&!t.slots[a].broken&&(a.startsWith("m2")||t.cables[a]));n.push({label:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0451\u043D \u0440\u0430\u0431\u043E\u0447\u0438\u0439 SSD",ok:o})}if(i.req.score){n.push({label:`\u0422\u0435\u0441\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u2265 ${i.req.score} (\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439: ${e.bench??"\u2014"})`,ok:(e.bench||0)>=i.req.score});let o=Bs({slots:Object.fromEntries(Object.entries(t.slots).filter(([,a])=>!a.client))});n.push({label:`\u0414\u0435\u0442\u0430\u043B\u0438 \u0443\u043B\u043E\u0436\u0438\u043B\u0438\u0441\u044C \u0432 \u0431\u044E\u0434\u0436\u0435\u0442 $${i.req.budget} (\u043F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E $${o})`,ok:o<=i.req.budget})}return n}var lh=(i,t,e)=>ra(i,t,e).every(n=>n.ok);var hh="pc-build-sim-save-v1",zs=[0,120,320,650,1100,1800,2800],bd=600;function oa(i=!1){return{v:1,sandbox:i,money:i?1e9:bd,xp:0,day:1,uid:1,inventory:[],bench:Os(),job:null,inbox:[],seedBase:Math.floor(Math.random()*1e9),jobsDone:0,earned:0,bench_score:null,settings:{sound:!0},tutorial:!0}}var O=oa();function uh(){try{let i=localStorage.getItem(hh);if(i){let t=JSON.parse(i);t&&t.v===1&&(O=Object.assign(oa(),t))}}catch{}return O}function ye(){try{localStorage.setItem(hh,JSON.stringify(O))}catch{}}function dh(i=!1){return O=oa(i),ye(),O}var Fi=()=>{if(O.sandbox)return 99;let i=1;for(let t=1;t<zs.length;t++)O.xp>=zs[t]&&(i=t+1);return i};function aa(i,t={}){if(!pe[i])throw new Error("\u041D\u0435\u0442 \u0434\u0435\u0442\u0430\u043B\u0438 "+i);return{uid:O.uid++,pid:i,...t}}function Hs(i){return JSON.stringify([Object.entries(i.slots).map(([t,e])=>t+":"+e.uid+(e.dirty?"d":"")).sort(),Object.keys(i.cables).sort()])}var fl="170",Pi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Md=0,fh=1,Sd=2;var wu=1,pl=2,Un=3,si=0,Fe=1,Nn=2,ni=0,ts=1,ph=2,mh=3,gh=4,Ed=5,bi=100,Td=101,wd=102,Ad=103,Rd=104,Cd=200,Pd=201,Id=202,Dd=203,Ga=204,Wa=205,Ld=206,Ud=207,Nd=208,Od=209,Fd=210,Bd=211,kd=212,zd=213,Hd=214,Xa=0,qa=1,Ya=2,rs=3,$a=4,Za=5,Ja=6,Ka=7,Au=0,Vd=1,Gd=2,ii=0,Wd=1,Xd=2,qd=3,ml=4,Yd=5,$d=6,Zd=7;var Ru=300,os=301,as=302,ja=303,Qa=304,Bo=306,tr=1e3,Si=1001,tc=1002,un=1003,Jd=1004;var Tr=1005;var vn=1006,ca=1007;var Ei=1008;var kn=1009,Cu=1010,Pu=1011,er=1012,gl=1013,Ti=1014,On=1015,lr=1016,_l=1017,xl=1018,cs=1020,Iu=35902,Du=1021,Lu=1022,hn=1023,Uu=1024,Nu=1025,es=1026,ls=1027,Ou=1028,vl=1029,Fu=1030,yl=1031;var bl=1033,no=33776,io=33777,so=33778,ro=33779,ec=35840,nc=35841,ic=35842,sc=35843,rc=36196,oc=37492,ac=37496,cc=37808,lc=37809,hc=37810,uc=37811,dc=37812,fc=37813,pc=37814,mc=37815,gc=37816,_c=37817,xc=37818,vc=37819,yc=37820,bc=37821,oo=36492,Mc=36494,Sc=36495,Bu=36283,Ec=36284,Tc=36285,wc=36286;var ao=2300,Ac=2301,la=2302,_h=2400,xh=2401,vh=2402;var Kd=3200,jd=3201;var ku=0,Qd=1,ti="",Pe="srgb",vs="srgb-linear",ko="linear",ie="srgb";var Bi=7680;var yh=519,tf=512,ef=513,nf=514,zu=515,sf=516,rf=517,of=518,af=519,bh=35044;var Mh="300 es",Fn=2e3,co=2001,zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sh=1234567,ns=Math.PI/180,hs=180/Math.PI;function ys(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Ce(i,t,e){return Math.max(t,Math.min(e,i))}function Ml(i,t){return(i%t+t)%t}function cf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function lf(i,t,e){return i!==t?(e-i)/(t-i):0}function Js(i,t,e){return(1-e)*i+e*t}function hf(i,t,e,n){return Js(i,t,1-Math.exp(-e*n))}function uf(i,t=1){return t-Math.abs(Ml(i,t*2)-t)}function df(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ff(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function pf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function mf(i,t){return i+Math.random()*(t-i)}function gf(i){return i*(.5-Math.random())}function _f(i){i!==void 0&&(Sh=i);let t=Sh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xf(i){return i*ns}function vf(i){return i*hs}function yf(i){return(i&i-1)===0&&i!==0}function bf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ji(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var oi={DEG2RAD:ns,RAD2DEG:hs,generateUUID:ys,clamp:Ce,euclideanModulo:Ml,mapLinear:cf,inverseLerp:lf,lerp:Js,damp:hf,pingpong:uf,smoothstep:df,smootherstep:ff,randInt:pf,randFloat:mf,randFloatSpread:gf,seededRandom:_f,degToRad:xf,radToDeg:vf,isPowerOfTwo:yf,ceilPowerOfTwo:bf,floorPowerOfTwo:Mf,setQuaternionFromProperEuler:Sf,normalize:ze,denormalize:ji},xt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],E=s[1],S=s[4],b=s[7],I=s[2],A=s[5],R=s[8];return r[0]=o*_+a*E+c*I,r[3]=o*m+a*S+c*A,r[6]=o*f+a*b+c*R,r[1]=l*_+h*E+u*I,r[4]=l*m+h*S+u*A,r[7]=l*f+h*b+u*R,r[2]=d*_+p*E+g*I,r[5]=d*m+p*S+g*A,r[8]=d*f+p*b+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ha.makeScale(t,e)),this}rotate(t){return this.premultiply(ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ha=new kt;function Hu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function lo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ef(){let i=lo("canvas");return i.style.display="block",i}var Eh={};function $s(i){i in Eh||(Eh[i]=!0,console.warn(i))}function Tf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function wf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Af(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Jt={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(i.r=Bn(i.r),i.g=Bn(i.g),i.b=Bn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(i.r=is(i.r),i.g=is(i.g),i.b=is(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ti?ko:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Th=[.64,.33,.3,.6,.15,.06],wh=[.2126,.7152,.0722],Ah=[.3127,.329],Rh=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ch=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[vs]:{primaries:Th,whitePoint:Ah,transfer:ko,toXYZ:Rh,fromXYZ:Ch,luminanceCoefficients:wh,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:Th,whitePoint:Ah,transfer:ie,toXYZ:Rh,fromXYZ:Ch,luminanceCoefficients:wh,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});var ki,Rc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ki===void 0&&(ki=lo("canvas")),ki.width=t.width,ki.height=t.height;let n=ki.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=lo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bn(e[n]/255)*255):e[n]=Bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Rf=0,ho=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=ys(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ua(s[o].image)):r.push(ua(s[o]))}else r=ua(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ua(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Cf=0,$e=class i extends zn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Si,s=Si,r=vn,o=Ei,a=hn,c=kn,l=i.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=ys(),this.name="",this.source=new ho(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ru)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tr:t.x=t.x-Math.floor(t.x);break;case Si:t.x=t.x<0?0:1;break;case tc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tr:t.y=t.y-Math.floor(t.y);break;case Si:t.y=t.y<0?0:1;break;case tc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Ru;$e.DEFAULT_ANISOTROPY=1;var se=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(l+1)/2,b=(p+1)/2,I=(f+1)/2,A=(h+d)/4,R=(u+_)/4,P=(g+m)/4;return S>b&&S>I?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=A/n,r=R/n):b>I?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=A/s,r=P/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=R/r,s=P/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cc=class extends zn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new $e(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ho(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends Cc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},uo=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pc=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-a,f=c*d+l*p+h*g+u*_,E=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){let I=Math.sqrt(S),A=Math.atan2(I,f*E);m=Math.sin(m*A)/I,a=Math.sin(a*A)/I}let b=a*E;if(c=c*m+d*b,l=l*m+p*b,h=h*m+g*b,u=u*m+_*b,m===1-a){let I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-a*p,t[e+2]=l*g+h*p+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ph.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ph.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return da.copy(this).projectOnVector(t),this.sub(da)}reflect(t){return this.sub(da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},da=new w,Ph=new dn,yn=class{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,on):on.fromBufferAttribute(r,o),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(t.matrixWorld),this.union(wr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),Ar.subVectors(this.max,Vs),zi.subVectors(t.a,Vs),Hi.subVectors(t.b,Vs),Vi.subVectors(t.c,Vs),$n.subVectors(Hi,zi),Zn.subVectors(Vi,Hi),pi.subVectors(zi,Vi);let e=[0,-$n.z,$n.y,0,-Zn.z,Zn.y,0,-pi.z,pi.y,$n.z,0,-$n.x,Zn.z,0,-Zn.x,pi.z,0,-pi.x,-$n.y,$n.x,0,-Zn.y,Zn.x,0,-pi.y,pi.x,0];return!fa(e,zi,Hi,Vi,Ar)||(e=[1,0,0,0,1,0,0,0,1],!fa(e,zi,Hi,Vi,Ar))?!1:(Rr.crossVectors($n,Zn),e=[Rr.x,Rr.y,Rr.z],fa(e,zi,Hi,Vi,Ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Cn=[new w,new w,new w,new w,new w,new w,new w,new w],on=new w,wr=new yn,zi=new w,Hi=new w,Vi=new w,$n=new w,Zn=new w,pi=new w,Vs=new w,Ar=new w,Rr=new w,mi=new w;function fa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){mi.fromArray(i,r);let a=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),c=t.dot(mi),l=e.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Pf=new yn,Gs=new w,pa=new w,wi=class{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Pf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);let e=Gs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Gs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(pa)),this.expandByPoint(Gs.copy(t.center).sub(pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pn=new w,ma=new w,Cr=new w,Jn=new w,ga=new w,Pr=new w,_a=new w,ri=class{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ma.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),Jn.copy(this.origin).sub(ma);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Cr),a=Jn.dot(this.direction),c=-Jn.dot(Cr),l=Jn.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ma).addScaledVector(Cr,d),p}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);let n=Pn.dot(this.direction),s=Pn.dot(Pn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,s,r){ga.subVectors(e,t),Pr.subVectors(n,t),_a.crossVectors(ga,Pr);let o=this.direction.dot(_a),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jn.subVectors(this.origin,t);let c=a*this.direction.dot(Pr.crossVectors(Jn,Pr));if(c<0)return null;let l=a*this.direction.dot(ga.cross(Jn));if(l<0||c+l>o)return null;let h=-a*Jn.dot(_a);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,d,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,p,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,p,g,_,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Gi.setFromMatrixColumn(t,0).length(),r=1/Gi.setFromMatrixColumn(t,1).length(),o=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,p=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(If,t,Df)}lookAt(t,e,n){let s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Kn.crossVectors(n,qe),Kn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Kn.crossVectors(n,qe)),Kn.normalize(),Ir.crossVectors(qe,Kn),s[0]=Kn.x,s[4]=Ir.x,s[8]=qe.x,s[1]=Kn.y,s[5]=Ir.y,s[9]=qe.y,s[2]=Kn.z,s[6]=Ir.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],E=n[3],S=n[7],b=n[11],I=n[15],A=s[0],R=s[4],P=s[8],M=s[12],v=s[1],C=s[5],G=s[9],F=s[13],W=s[2],tt=s[6],q=s[10],nt=s[14],X=s[3],lt=s[7],pt=s[11],St=s[15];return r[0]=o*A+a*v+c*W+l*X,r[4]=o*R+a*C+c*tt+l*lt,r[8]=o*P+a*G+c*q+l*pt,r[12]=o*M+a*F+c*nt+l*St,r[1]=h*A+u*v+d*W+p*X,r[5]=h*R+u*C+d*tt+p*lt,r[9]=h*P+u*G+d*q+p*pt,r[13]=h*M+u*F+d*nt+p*St,r[2]=g*A+_*v+m*W+f*X,r[6]=g*R+_*C+m*tt+f*lt,r[10]=g*P+_*G+m*q+f*pt,r[14]=g*M+_*F+m*nt+f*St,r[3]=E*A+S*v+b*W+I*X,r[7]=E*R+S*C+b*tt+I*lt,r[11]=E*P+S*G+b*q+I*pt,r[15]=E*M+S*F+b*nt+I*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*p-n*c*p)+_*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],E=u*m*l-_*d*l+_*c*p-a*m*p-u*c*f+a*d*f,S=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,b=h*_*l-g*u*l+g*a*p-o*_*p-h*a*f+o*u*f,I=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,A=e*E+n*S+s*b+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return t[0]=E*R,t[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*R,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*f+n*c*f)*R,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*p-n*c*p)*R,t[4]=S*R,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*R,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*f-e*c*f)*R,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*p+e*c*p)*R,t[8]=b*R,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*R,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*f+e*a*f)*R,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*R,t[12]=I*R,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*R,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*R,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,E=c*l,S=c*h,b=c*u,I=n.x,A=n.y,R=n.z;return s[0]=(1-(_+f))*I,s[1]=(p+b)*I,s[2]=(g-S)*I,s[3]=0,s[4]=(p-b)*A,s[5]=(1-(d+f))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(g+S)*R,s[9]=(m-E)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Gi.set(s[0],s[1],s[2]).length(),o=Gi.set(s[4],s[5],s[6]).length(),a=Gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],an.copy(this);let l=1/r,h=1/o,u=1/a;return an.elements[0]*=l,an.elements[1]*=l,an.elements[2]*=l,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,e.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Fn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,g;if(a===Fn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===co)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Fn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,p=(n+s)*h,g,_;if(a===Fn)g=(o+r)*u,_=-2*u;else if(a===co)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Gi=new w,an=new le,If=new w(0,0,0),Df=new w(1,1,1),Kn=new w,Ir=new w,qe=new w,Ih=new le,Dh=new dn,bn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ih,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var nr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Lf=0,Lh=new w,Wi=new dn,In=new le,Dr=new w,Ws=new w,Uf=new w,Nf=new dn,Uh=new w(1,0,0),Nh=new w(0,1,0),Oh=new w(0,0,1),Fh={type:"added"},Of={type:"removed"},Xi={type:"childadded",child:null},xa={type:"childremoved",child:null},be=class i extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new w,e=new bn,n=new dn,s=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new kt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(Uh,t)}rotateY(t){return this.rotateOnAxis(Nh,t)}rotateZ(t){return this.rotateOnAxis(Oh,t)}translateOnAxis(t,e){return Lh.copy(t).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uh,t)}translateY(t){return this.translateOnAxis(Nh,t)}translateZ(t){return this.translateOnAxis(Oh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Dr.copy(t):Dr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Ws,Dr,this.up):In.lookAt(Dr,Ws,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(In),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fh),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Of),xa.child=t,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fh),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,Uf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,Nf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};be.DEFAULT_UP=new w(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cn=new w,Dn=new w,va=new w,Ln=new w,qi=new w,Yi=new w,Bh=new w,ya=new w,ba=new w,Ma=new w,Sa=new se,Ea=new se,Ta=new se,ei=class i{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),Dn.subVectors(n,e),va.subVectors(t,e);let o=cn.dot(cn),a=cn.dot(Dn),c=cn.dot(va),l=Dn.dot(Dn),h=Dn.dot(va),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ln.x),c.addScaledVector(o,Ln.y),c.addScaledVector(a,Ln.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Sa.setScalar(0),Ea.setScalar(0),Ta.setScalar(0),Sa.fromBufferAttribute(t,e),Ea.fromBufferAttribute(t,n),Ta.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Sa,r.x),o.addScaledVector(Ea,r.y),o.addScaledVector(Ta,r.z),o}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),Dn.subVectors(t,e),cn.cross(Dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),cn.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;qi.subVectors(s,n),Yi.subVectors(r,n),ya.subVectors(t,n);let c=qi.dot(ya),l=Yi.dot(ya);if(c<=0&&l<=0)return e.copy(n);ba.subVectors(t,s);let h=qi.dot(ba),u=Yi.dot(ba);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(qi,o);Ma.subVectors(t,r);let p=qi.dot(Ma),g=Yi.dot(Ma);if(g>=0&&p<=g)return e.copy(r);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Yi,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Bh.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Bh,a);let f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function wa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=Ml(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=wa(o,r,t+1/3),this.g=wa(o,r,t),this.b=wa(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let n=Vu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return Jt.fromWorkingColorSpace(Oe.copy(this),t),Math.round(Ce(Oe.r*255,0,255))*65536+Math.round(Ce(Oe.g*255,0,255))*256+Math.round(Ce(Oe.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Oe.copy(this),e);let n=Oe.r,s=Oe.g,r=Oe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Pe){Jt.fromWorkingColorSpace(Oe.copy(this),t);let e=Oe.r,n=Oe.g,s=Oe.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(Lr);let n=Js(jn.h,Lr.h,e),s=Js(jn.s,Lr.s,e),r=Js(jn.l,Lr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Oe=new Vt;Vt.NAMES=Vu;var Ff=0,Vn=class extends zn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=ys(),this.name="",this.blending=ts,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Wa,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ga&&(n.blendSrc=this.blendSrc),this.blendDst!==Wa&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ge=class extends Vn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Se=new w,Ur=new xt,Be=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bh,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ur.fromBufferAttribute(this,e),Ur.applyMatrix3(t),this.setXY(e,Ur.x,Ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bh&&(t.usage=this.usage),t}};var fo=class extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var po=class extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var _e=class extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}},Bf=0,tn=new le,Aa=new be,$i=new w,Ye=new yn,Xs=new yn,Re=new w,De=class i extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hu(t)?po:fo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return Aa.lookAt(t),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){let n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(Ye.min,Xs.min),Ye.expandByPoint(Re),Re.addVectors(Ye.max,Xs.max),Ye.expandByPoint(Re)):(Ye.expandByPoint(Xs.min),Ye.expandByPoint(Xs.max))}Ye.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Re.fromBufferAttribute(a,l),c&&($i.fromBufferAttribute(t,l),Re.add($i)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new w,c[P]=new w;let l=new w,h=new w,u=new w,d=new xt,p=new xt,g=new xt,_=new w,m=new w;function f(P,M,v){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,v),h.sub(l),u.sub(l),p.sub(d),g.sub(d);let C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),a[P].add(_),a[M].add(_),a[v].add(_),c[P].add(m),c[M].add(m),c[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,M=E.length;P<M;++P){let v=E[P],C=v.start,G=v.count;for(let F=C,W=C+G;F<W;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let S=new w,b=new w,I=new w,A=new w;function R(P){I.fromBufferAttribute(s,P),A.copy(I);let M=a[P];S.copy(M),S.sub(I.multiplyScalar(I.dot(M))).normalize(),b.crossVectors(A,M);let C=b.dot(c[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,C)}for(let P=0,M=E.length;P<M;++P){let v=E[P],C=v.start,G=v.count;for(let F=C,W=C+G;F<W;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new w,r=new w,o=new w,a=new w,c=new w,l=new w,h=new w,u=new w;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new Be(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},kh=new le,gi=new ri,Nr=new wi,zh=new w,Or=new w,Fr=new w,Br=new w,Ra=new w,kr=new w,Hh=new w,zr=new w,Yt=class extends be{constructor(t=new De,e=new Ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){kr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Ra.fromBufferAttribute(u,t),o?kr.addScaledVector(Ra,h):kr.addScaledVector(Ra.sub(e),h))}e.add(kr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(Nr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Nr,zh)===null||gi.origin.distanceToSquared(zh)>(t.far-t.near)**2))&&(kh.copy(r).invert(),gi.copy(t.ray).applyMatrix4(kh),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=E,I=S;b<I;b+=3){let A=a.getX(b),R=a.getX(b+1),P=a.getX(b+2);s=Hr(this,f,t,n,l,h,u,A,R,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let E=a.getX(m),S=a.getX(m+1),b=a.getX(m+2);s=Hr(this,o,t,n,l,h,u,E,S,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=E,I=S;b<I;b+=3){let A=b,R=b+1,P=b+2;s=Hr(this,f,t,n,l,h,u,A,R,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let E=m,S=m+1,b=m+2;s=Hr(this,o,t,n,l,h,u,E,S,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function kf(i,t,e,n,s,r,o,a){let c;if(t.side===Fe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===si,a),c===null)return null;zr.copy(a),zr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(zr);return l<e.near||l>e.far?null:{distance:l,point:zr.clone(),object:i}}function Hr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Or),i.getVertexPosition(c,Fr),i.getVertexPosition(l,Br);let h=kf(i,t,e,n,Or,Fr,Br,Hh);if(h){let u=new w;ei.getBarycoord(Hh,Or,Fr,Br,u),s&&(h.uv=ei.getInterpolatedAttribute(s,a,c,l,u,new xt)),r&&(h.uv1=ei.getInterpolatedAttribute(r,a,c,l,u,new xt)),o&&(h.normal=ei.getInterpolatedAttribute(o,a,c,l,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new w,materialIndex:0};ei.getNormal(Or,Fr,Br,d.normal),h.face=d,h.barycoord=u}return h}var en=class i extends De{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(u,2));function g(_,m,f,E,S,b,I,A,R,P,M){let v=b/R,C=I/P,G=b/2,F=I/2,W=A/2,tt=R+1,q=P+1,nt=0,X=0,lt=new w;for(let pt=0;pt<q;pt++){let St=pt*C-F;for(let Nt=0;Nt<tt;Nt++){let Zt=Nt*v-G;lt[_]=Zt*E,lt[m]=St*S,lt[f]=W,l.push(lt.x,lt.y,lt.z),lt[_]=0,lt[m]=0,lt[f]=A>0?1:-1,h.push(lt.x,lt.y,lt.z),u.push(Nt/R),u.push(1-pt/P),nt+=1}}for(let pt=0;pt<P;pt++)for(let St=0;St<R;St++){let Nt=d+St+tt*pt,Zt=d+St+tt*(pt+1),K=d+(St+1)+tt*(pt+1),st=d+(St+1)+tt*pt;c.push(Nt,Zt,st),c.push(Zt,K,st),X+=6}a.addGroup(p,X,M),p+=X,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function us(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function He(i){let t={};for(let e=0;e<i.length;e++){let n=us(i[e]);for(let s in n)t[s]=n[s]}return t}function zf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var Hf={clone:us,merge:He},Vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends Vn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vf,this.fragmentShader=Gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=zf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},mo=class extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qn=new w,Vh=new xt,Gh=new xt,Ie=class extends mo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,Vh,Gh),e.subVectors(Gh,Vh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ns*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Zi=-90,Ji=1,Ic=class extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ie(Zi,Ji,t,e);s.layers=this.layers,this.add(s);let r=new Ie(Zi,Ji,t,e);r.layers=this.layers,this.add(r);let o=new Ie(Zi,Ji,t,e);o.layers=this.layers,this.add(o);let a=new Ie(Zi,Ji,t,e);a.layers=this.layers,this.add(a);let c=new Ie(Zi,Ji,t,e);c.layers=this.layers,this.add(c);let l=new Ie(Zi,Ji,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===co)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},go=class extends $e{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:os,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Dc=class extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new go(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new en(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:ni});r.uniforms.tEquirect.value=e;let o=new Yt(s,r),a=e.minFilter;return e.minFilter===Ei&&(e.minFilter=vn),new Ic(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ca=new w,Wf=new w,Xf=new kt,ln=class{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ca.subVectors(n,e).cross(Wf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Xf.getNormalMatrix(t),s=this.coplanarPoint(Ca).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},_i=new wi,Vr=new w,ir=class{constructor(t=new ln,e=new ln,n=new ln,s=new ln,r=new ln,o=new ln){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],E=s[13],S=s[14],b=s[15];if(n[0].setComponents(c-r,d-l,m-p,b-f).normalize(),n[1].setComponents(c+r,d+l,m+p,b+f).normalize(),n[2].setComponents(c+o,d+h,m+g,b+E).normalize(),n[3].setComponents(c-o,d-h,m-g,b-E).normalize(),n[4].setComponents(c-a,d-u,m-_,b-S).normalize(),e===Fn)n[5].setComponents(c+a,d+u,m+_,b+S).normalize();else if(e===co)n[5].setComponents(a,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Vr.x=s.normal.x>0?t.max.x:t.min.x,Vr.y=s.normal.y>0?t.max.y:t.min.y,Vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function qf(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let _=u[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ai=class i extends De{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let E=f*d-o;for(let S=0;S<l;S++){let b=S*u-r;g.push(b,-E,0),_.push(0,0,1),m.push(S/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<a;E++){let S=E+l*f,b=E+l*(f+1),I=E+1+l*(f+1),A=E+1+l*f;p.push(S,b,A),p.push(b,I,A)}this.setIndex(p),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$f=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ep=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,op=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ap=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_p=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ep=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Up=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$p=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,um=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Im=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,km=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ym=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,t0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,e0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,a0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,u0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,f0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,p0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,b0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,E0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:Yf,alphahash_pars_fragment:$f,alphamap_fragment:Zf,alphamap_pars_fragment:Jf,alphatest_fragment:Kf,alphatest_pars_fragment:jf,aomap_fragment:Qf,aomap_pars_fragment:tp,batching_pars_vertex:ep,batching_vertex:np,begin_vertex:ip,beginnormal_vertex:sp,bsdfs:rp,iridescence_fragment:op,bumpmap_pars_fragment:ap,clipping_planes_fragment:cp,clipping_planes_pars_fragment:lp,clipping_planes_pars_vertex:hp,clipping_planes_vertex:up,color_fragment:dp,color_pars_fragment:fp,color_pars_vertex:pp,color_vertex:mp,common:gp,cube_uv_reflection_fragment:_p,defaultnormal_vertex:xp,displacementmap_pars_vertex:vp,displacementmap_vertex:yp,emissivemap_fragment:bp,emissivemap_pars_fragment:Mp,colorspace_fragment:Sp,colorspace_pars_fragment:Ep,envmap_fragment:Tp,envmap_common_pars_fragment:wp,envmap_pars_fragment:Ap,envmap_pars_vertex:Rp,envmap_physical_pars_fragment:kp,envmap_vertex:Cp,fog_vertex:Pp,fog_pars_vertex:Ip,fog_fragment:Dp,fog_pars_fragment:Lp,gradientmap_pars_fragment:Up,lightmap_pars_fragment:Np,lights_lambert_fragment:Op,lights_lambert_pars_fragment:Fp,lights_pars_begin:Bp,lights_toon_fragment:zp,lights_toon_pars_fragment:Hp,lights_phong_fragment:Vp,lights_phong_pars_fragment:Gp,lights_physical_fragment:Wp,lights_physical_pars_fragment:Xp,lights_fragment_begin:qp,lights_fragment_maps:Yp,lights_fragment_end:$p,logdepthbuf_fragment:Zp,logdepthbuf_pars_fragment:Jp,logdepthbuf_pars_vertex:Kp,logdepthbuf_vertex:jp,map_fragment:Qp,map_pars_fragment:tm,map_particle_fragment:em,map_particle_pars_fragment:nm,metalnessmap_fragment:im,metalnessmap_pars_fragment:sm,morphinstance_vertex:rm,morphcolor_vertex:om,morphnormal_vertex:am,morphtarget_pars_vertex:cm,morphtarget_vertex:lm,normal_fragment_begin:hm,normal_fragment_maps:um,normal_pars_fragment:dm,normal_pars_vertex:fm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:_m,clearcoat_pars_fragment:xm,iridescence_pars_fragment:vm,opaque_fragment:ym,packing:bm,premultiplied_alpha_fragment:Mm,project_vertex:Sm,dithering_fragment:Em,dithering_pars_fragment:Tm,roughnessmap_fragment:wm,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Cm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Im,skinbase_vertex:Dm,skinning_pars_vertex:Lm,skinning_vertex:Um,skinnormal_vertex:Nm,specularmap_fragment:Om,specularmap_pars_fragment:Fm,tonemapping_fragment:Bm,tonemapping_pars_fragment:km,transmission_fragment:zm,transmission_pars_fragment:Hm,uv_pars_fragment:Vm,uv_pars_vertex:Gm,uv_vertex:Wm,worldpos_vertex:Xm,background_vert:qm,background_frag:Ym,backgroundCube_vert:$m,backgroundCube_frag:Zm,cube_vert:Jm,cube_frag:Km,depth_vert:jm,depth_frag:Qm,distanceRGBA_vert:t0,distanceRGBA_frag:e0,equirect_vert:n0,equirect_frag:i0,linedashed_vert:s0,linedashed_frag:r0,meshbasic_vert:o0,meshbasic_frag:a0,meshlambert_vert:c0,meshlambert_frag:l0,meshmatcap_vert:h0,meshmatcap_frag:u0,meshnormal_vert:d0,meshnormal_frag:f0,meshphong_vert:p0,meshphong_frag:m0,meshphysical_vert:g0,meshphysical_frag:_0,meshtoon_vert:x0,meshtoon_frag:v0,points_vert:y0,points_frag:b0,shadow_vert:M0,shadow_frag:S0,sprite_vert:E0,sprite_frag:T0},ht={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},xn={basic:{uniforms:He([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:He([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:He([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:He([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:He([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:He([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:He([ht.points,ht.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:He([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:He([ht.common,ht.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:He([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:He([ht.sprite,ht.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:He([ht.common,ht.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:He([ht.lights,ht.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};xn.physical={uniforms:He([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Gr={r:0,b:0,g:0},xi=new bn,w0=new le;function A0(i,t,e,n,s,r,o){let a=new Vt(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function _(E){let S=!1,b=g(E);b===null?f(a,c):b&&b.isColor&&(f(b,1),S=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){let b=g(S);b&&(b.isCubeTexture||b.mapping===Bo)?(h===void 0&&(h=new Yt(new en(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:us(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),xi.copy(S.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(w0.makeRotationFromEuler(xi)),h.material.toneMapped=Jt.getTransfer(b.colorSpace)!==ie,(u!==b||d!==b.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Yt(new Ai(2,2),new Mn({name:"BackgroundMaterial",uniforms:us(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(b.colorSpace)!==ie,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,S){E.getRGB(Gr,Gu(i)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),c=S,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(a,c)},render:_,addToRenderList:m}}function R0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(v,C,G,F,W){let tt=!1,q=u(F,G,C);r!==q&&(r=q,l(r.object)),tt=p(v,F,G,W),tt&&g(v,F,G,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(tt||o)&&(o=!1,b(v,C,G,F),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,C,G){let F=G.wireframe===!0,W=n[v.id];W===void 0&&(W={},n[v.id]=W);let tt=W[C.id];tt===void 0&&(tt={},W[C.id]=tt);let q=tt[F];return q===void 0&&(q=d(c()),tt[F]=q),q}function d(v){let C=[],G=[],F=[];for(let W=0;W<e;W++)C[W]=0,G[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:G,attributeDivisors:F,object:v,attributes:{},index:null}}function p(v,C,G,F){let W=r.attributes,tt=C.attributes,q=0,nt=G.getAttributes();for(let X in nt)if(nt[X].location>=0){let pt=W[X],St=tt[X];if(St===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(St=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(St=v.instanceColor)),pt===void 0||pt.attribute!==St||St&&pt.data!==St.data)return!0;q++}return r.attributesNum!==q||r.index!==F}function g(v,C,G,F){let W={},tt=C.attributes,q=0,nt=G.getAttributes();for(let X in nt)if(nt[X].location>=0){let pt=tt[X];pt===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor));let St={};St.attribute=pt,pt&&pt.data&&(St.data=pt.data),W[X]=St,q++}r.attributes=W,r.attributesNum=q,r.index=F}function _(){let v=r.newAttributes;for(let C=0,G=v.length;C<G;C++)v[C]=0}function m(v){f(v,0)}function f(v,C){let G=r.newAttributes,F=r.enabledAttributes,W=r.attributeDivisors;G[v]=1,F[v]===0&&(i.enableVertexAttribArray(v),F[v]=1),W[v]!==C&&(i.vertexAttribDivisor(v,C),W[v]=C)}function E(){let v=r.newAttributes,C=r.enabledAttributes;for(let G=0,F=C.length;G<F;G++)C[G]!==v[G]&&(i.disableVertexAttribArray(G),C[G]=0)}function S(v,C,G,F,W,tt,q){q===!0?i.vertexAttribIPointer(v,C,G,W,tt):i.vertexAttribPointer(v,C,G,F,W,tt)}function b(v,C,G,F){_();let W=F.attributes,tt=G.getAttributes(),q=C.defaultAttributeValues;for(let nt in tt){let X=tt[nt];if(X.location>=0){let lt=W[nt];if(lt===void 0&&(nt==="instanceMatrix"&&v.instanceMatrix&&(lt=v.instanceMatrix),nt==="instanceColor"&&v.instanceColor&&(lt=v.instanceColor)),lt!==void 0){let pt=lt.normalized,St=lt.itemSize,Nt=t.get(lt);if(Nt===void 0)continue;let Zt=Nt.buffer,K=Nt.type,st=Nt.bytesPerElement,yt=K===i.INT||K===i.UNSIGNED_INT||lt.gpuType===gl;if(lt.isInterleavedBufferAttribute){let ut=lt.data,It=ut.stride,Lt=lt.offset;if(ut.isInstancedInterleavedBuffer){for(let Gt=0;Gt<X.locationSize;Gt++)f(X.location+Gt,ut.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Gt=0;Gt<X.locationSize;Gt++)m(X.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let Gt=0;Gt<X.locationSize;Gt++)S(X.location+Gt,St/X.locationSize,K,pt,It*st,(Lt+St/X.locationSize*Gt)*st,yt)}else{if(lt.isInstancedBufferAttribute){for(let ut=0;ut<X.locationSize;ut++)f(X.location+ut,lt.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ut=0;ut<X.locationSize;ut++)m(X.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let ut=0;ut<X.locationSize;ut++)S(X.location+ut,St/X.locationSize,K,pt,St*st,St/X.locationSize*ut*st,yt)}}else if(q!==void 0){let pt=q[nt];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(X.location,pt);break;case 3:i.vertexAttrib3fv(X.location,pt);break;case 4:i.vertexAttrib4fv(X.location,pt);break;default:i.vertexAttrib1fv(X.location,pt)}}}}E()}function I(){P();for(let v in n){let C=n[v];for(let G in C){let F=C[G];for(let W in F)h(F[W].object),delete F[W];delete C[G]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;let C=n[v.id];for(let G in C){let F=C[G];for(let W in F)h(F[W].object),delete F[W];delete C[G]}delete n[v.id]}function R(v){for(let C in n){let G=n[C];if(G[v.id]===void 0)continue;let F=G[v.id];for(let W in F)h(F[W].object),delete F[W];delete G[v.id]}}function P(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function C0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function P0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==hn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let P=R===lr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==kn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==On&&!P)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:b,vertexTextures:I,maxSamples:A}}function I0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ln,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let E=r?0:n,S=E*4,b=f.clippingState||null;c.value=b,b=h(g,d,S,p);for(let I=0;I!==S;++I)b[I]=e[I];f.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let f=p+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,b=p;S!==_;++S,b+=4)o.copy(u[S]).applyMatrix4(E,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function D0(i){let t=new WeakMap;function e(o,a){return a===ja?o.mapping=os:a===Qa&&(o.mapping=as),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ja||a===Qa)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Dc(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var _o=class extends mo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Qi=4,Wh=[.125,.215,.35,.446,.526,.582],Mi=20,Pa=new _o,Xh=new Vt,Ia=null,Da=0,La=0,Ua=!1,yi=(1+Math.sqrt(5))/2,Ki=1/yi,qh=[new w(-yi,Ki,0),new w(yi,Ki,0),new w(-Ki,0,yi),new w(Ki,0,yi),new w(0,yi,-Ki),new w(0,yi,Ki),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],ds=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ia=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ia,Da,La),this._renderer.xr.enabled=Ua,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ia=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:lr,format:hn,colorSpace:vs,depthBuffer:!1},s=Yh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L0(r)),this._blurMaterial=U0(r,t,e)}return s}_compileMaterial(t){let e=new Yt(this._lodPlanes[0],t);this._renderer.compile(e,Pa)}_sceneToCubeUV(t,e,n,s){let a=new Ie(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Xh),h.toneMapping=ii,h.autoClear=!1;let p=new Ge({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new Yt(new en,p),_=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Xh),_=!0);for(let f=0;f<6;f++){let E=f%3;E===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):E===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let S=this._cubeSize;Wr(s,E*S,f>2?S:0,S,S),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===os||t.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$h());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Wr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Pa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qh[(s-r-1)%qh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Yt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Mi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Mi;m>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);let f=[],E=0;for(let R=0;R<Mi;++R){let P=R/_,M=Math.exp(-P*P/2);f.push(M),R===0?E+=M:R<m&&(E+=2*M)}for(let R=0;R<f.length;R++)f[R]=f[R]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;let b=this._sizeLods[s],I=3*b*(s>S-Qi?s-S+Qi:0),A=4*(this._cubeSize-b);Wr(e,I,A,3*b,2*b),c.setRenderTarget(e),c.render(u,Pa)}};function L0(i){let t=[],e=[],n=[],s=i,r=i-Qi+1+Wh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Qi?c=Wh[o-i+Qi-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),S=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let A=0;A<p;A++){let R=A%3*2/3-1,P=A>2?0:-1,M=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];E.set(M,_*g*A),S.set(d,m*g*A);let v=[A,A,A,A,A,A];b.set(v,f*g*A)}let I=new De;I.setAttribute("position",new Be(E,_)),I.setAttribute("uv",new Be(S,m)),I.setAttribute("faceIndex",new Be(b,f)),t.push(I),s>Qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yh(i,t,e){let n=new Hn(i,t,e);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function U0(i,t,e){let n=new Float32Array(Mi),s=new w(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function $h(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Zh(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Sl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function N0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ja||c===Qa,h=c===os||c===as;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ds(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new ds(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function O0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&$s("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function F0(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let E=p.array;_=p.version;for(let S=0,b=E.length;S<b;S+=3){let I=E[S+0],A=E[S+1],R=E[S+2];d.push(I,A,A,R,R,I)}}else if(g!==void 0){let E=g.array;_=g.version;for(let S=0,b=E.length/3-1;S<b;S+=3){let I=S+0,A=S+1,R=S+2;d.push(I,A,A,R,R,I)}}else return;let m=new(Hu(d)?po:fo)(d,1);m.version=_;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function B0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*_[E];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function k0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function z0(i,t,e){let n=new WeakMap,s=new se;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let M=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let b=a.attributes.position.count*S,I=1;b>t.maxTextureSize&&(I=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let A=new Float32Array(b*I*4*u),R=new uo(A,b,I,u);R.type=On,R.needsUpdate=!0;let P=S*4;for(let v=0;v<u;v++){let C=m[v],G=f[v],F=E[v],W=b*I*4*v;for(let tt=0;tt<C.count;tt++){let q=tt*P;p===!0&&(s.fromBufferAttribute(C,tt),A[W+q+0]=s.x,A[W+q+1]=s.y,A[W+q+2]=s.z,A[W+q+3]=0),g===!0&&(s.fromBufferAttribute(G,tt),A[W+q+4]=s.x,A[W+q+5]=s.y,A[W+q+6]=s.z,A[W+q+7]=0),_===!0&&(s.fromBufferAttribute(F,tt),A[W+q+8]=s.x,A[W+q+9]=s.y,A[W+q+10]=s.z,A[W+q+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new xt(b,I)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function H0(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var xo=class extends $e{constructor(t,e,n,s,r,o,a,c,l,h=es){if(h!==es&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===es&&(n=Ti),n===void 0&&h===ls&&(n=cs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:un,this.minFilter=c!==void 0?c:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Xu=new $e,Jh=new xo(1,1),qu=new uo,Yu=new Pc,$u=new go,Kh=[],jh=[],Qh=new Float32Array(16),tu=new Float32Array(9),eu=new Float32Array(4);function bs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Kh[s];if(r===void 0&&(r=new Float32Array(s),Kh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zo(i,t){let e=jh[t];e===void 0&&(e=new Int32Array(t),jh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function V0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function G0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function W0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function X0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function q0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;eu.set(n),i.uniformMatrix2fv(this.addr,!1,eu),Te(e,n)}}function Y0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;tu.set(n),i.uniformMatrix3fv(this.addr,!1,tu),Te(e,n)}}function $0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Qh.set(n),i.uniformMatrix4fv(this.addr,!1,Qh),Te(e,n)}}function Z0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function K0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function Q0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Jh.compareFunction=zu,r=Jh):r=Xu,e.setTexture2D(t||r,s)}function sg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Yu,s)}function rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$u,s)}function og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qu,s)}function ag(i){switch(i){case 5126:return V0;case 35664:return G0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return $0;case 5124:case 35670:return Z0;case 35667:case 35671:return J0;case 35668:case 35672:return K0;case 35669:case 35673:return j0;case 5125:return Q0;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return og}}function cg(i,t){i.uniform1fv(this.addr,t)}function lg(i,t){let e=bs(t,this.size,2);i.uniform2fv(this.addr,e)}function hg(i,t){let e=bs(t,this.size,3);i.uniform3fv(this.addr,e)}function ug(i,t){let e=bs(t,this.size,4);i.uniform4fv(this.addr,e)}function dg(i,t){let e=bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fg(i,t){let e=bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function pg(i,t){let e=bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mg(i,t){i.uniform1iv(this.addr,t)}function gg(i,t){i.uniform2iv(this.addr,t)}function _g(i,t){i.uniform3iv(this.addr,t)}function xg(i,t){i.uniform4iv(this.addr,t)}function vg(i,t){i.uniform1uiv(this.addr,t)}function yg(i,t){i.uniform2uiv(this.addr,t)}function bg(i,t){i.uniform3uiv(this.addr,t)}function Mg(i,t){i.uniform4uiv(this.addr,t)}function Sg(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Xu,r[o])}function Eg(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Yu,r[o])}function Tg(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$u,r[o])}function wg(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||qu,r[o])}function Ag(i){switch(i){case 5126:return cg;case 35664:return lg;case 35665:return hg;case 35666:return ug;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return _g;case 35669:case 35673:return xg;case 5125:return vg;case 36294:return yg;case 36295:return bg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return wg}}var Lc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ag(e.type)}},Uc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ag(e.type)}},Nc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Na=/(\w+)(\])?(\[|\.)?/g;function nu(i,t){i.seq.push(t),i.map[t.id]=t}function Rg(i,t,e){let n=i.name,s=n.length;for(Na.lastIndex=0;;){let r=Na.exec(n),o=Na.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){nu(e,l===void 0?new Lc(a,i,t):new Uc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Nc(a),nu(e,u)),e=u}}}var ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Rg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function iu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Cg=37297,Pg=0;function Ig(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var su=new kt;function Dg(i){Jt._getMatrix(su,Jt.workingColorSpace,i);let t=`mat3( ${su.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case ko:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ru(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ig(i.getShaderSource(t),o)}else return s}function Lg(i,t){let e=Dg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ug(i,t){let e;switch(t){case Wd:e="Linear";break;case Xd:e="Reinhard";break;case qd:e="Cineon";break;case ml:e="ACESFilmic";break;case $d:e="AgX";break;case Zd:e="Neutral";break;case Yd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xr=new w;function Ng(){Jt.getLuminanceCoefficients(Xr);let i=Xr.x.toFixed(4),t=Xr.y.toFixed(4),e=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Og(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function Fg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Bg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Zs(i){return i!==""}function ou(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function au(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(i){return i.replace(kg,Hg)}var zg=new Map;function Hg(i,t){let e=Ht[t];if(e===void 0){let n=zg.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Oc(e)}var Vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cu(i){return i.replace(Vg,Gg)}function Gg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Wg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===pl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function Xg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case os:case as:t="ENVMAP_TYPE_CUBE";break;case Bo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case as:t="ENVMAP_MODE_REFRACTION";break}return t}function Yg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Au:t="ENVMAP_BLENDING_MULTIPLY";break;case Vd:t="ENVMAP_BLENDING_MIX";break;case Gd:t="ENVMAP_BLENDING_ADD";break}return t}function $g(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Zg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Wg(e),l=Xg(e),h=qg(e),u=Yg(e),d=$g(e),p=Og(e),g=Fg(r),_=s.createProgram(),m,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zs).join(`
`),f.length>0&&(f+=`
`)):(m=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),f=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Ht.tonemapping_pars_fragment:"",e.toneMapping!==ii?Ug("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Lg("linearToOutputTexel",e.outputColorSpace),Ng(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zs).join(`
`)),o=Oc(o),o=ou(o,e),o=au(o,e),a=Oc(a),a=ou(a,e),a=au(a,e),o=cu(o),a=cu(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=E+m+o,b=E+f+a,I=iu(s,s.VERTEX_SHADER,S),A=iu(s,s.FRAGMENT_SHADER,b);s.attachShader(_,I),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(C){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(I).trim(),W=s.getShaderInfoLog(A).trim(),tt=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,A);else{let nt=ru(s,I,"vertex"),X=ru(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+nt+`
`+X)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(F===""||W==="")&&(q=!1);q&&(C.diagnostics={runnable:tt,programLog:G,vertexShader:{log:F,prefix:m},fragmentShader:{log:W,prefix:f}})}s.deleteShader(I),s.deleteShader(A),P=new ss(s,_),M=Bg(s,_)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Cg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Pg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=A,this}var Jg=0,Fc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Bc(t),e.set(t,n)),n}},Bc=class{constructor(t){this.id=Jg++,this.code=t,this.usedTimes=0}};function Kg(i,t,e,n,s,r,o){let a=new nr,c=new Fc,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,v,C,G,F){let W=G.fog,tt=F.geometry,q=M.isMeshStandardMaterial?G.environment:null,nt=(M.isMeshStandardMaterial?e:t).get(M.envMap||q),X=nt&&nt.mapping===Bo?nt.image.height:null,lt=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let pt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,St=pt!==void 0?pt.length:0,Nt=0;tt.morphAttributes.position!==void 0&&(Nt=1),tt.morphAttributes.normal!==void 0&&(Nt=2),tt.morphAttributes.color!==void 0&&(Nt=3);let Zt,K,st,yt;if(lt){let ne=xn[lt];Zt=ne.vertexShader,K=ne.fragmentShader}else Zt=M.vertexShader,K=M.fragmentShader,c.update(M),st=c.getVertexShaderID(M),yt=c.getFragmentShaderID(M);let ut=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),Lt=F.isInstancedMesh===!0,Gt=F.isBatchedMesh===!0,ae=!!M.map,qt=!!M.matcap,fe=!!nt,D=!!M.aoMap,ve=!!M.lightMap,Wt=!!M.bumpMap,Xt=!!M.normalMap,Rt=!!M.displacementMap,ee=!!M.emissiveMap,Ct=!!M.metalnessMap,T=!!M.roughnessMap,x=M.anisotropy>0,k=M.clearcoat>0,j=M.dispersion>0,et=M.iridescence>0,J=M.sheen>0,bt=M.transmission>0,z=x&&!!M.anisotropyMap,$=k&&!!M.clearcoatMap,rt=k&&!!M.clearcoatNormalMap,B=k&&!!M.clearcoatRoughnessMap,Z=et&&!!M.iridescenceMap,ot=et&&!!M.iridescenceThicknessMap,ct=J&&!!M.sheenColorMap,it=J&&!!M.sheenRoughnessMap,Dt=!!M.specularMap,Pt=!!M.specularColorMap,Ot=!!M.specularIntensityMap,L=bt&&!!M.transmissionMap,ft=bt&&!!M.thicknessMap,Y=!!M.gradientMap,Q=!!M.alphaMap,_t=M.alphaTest>0,mt=!!M.alphaHash,Ft=!!M.extensions,xe=ii;M.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(xe=i.toneMapping);let Ue={shaderID:lt,shaderType:M.type,shaderName:M.name,vertexShader:Zt,fragmentShader:K,defines:M.defines,customVertexShaderID:st,customFragmentShaderID:yt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Gt,batchingColor:Gt&&F._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&F.instanceColor!==null,instancingMorph:Lt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:vs,alphaToCoverage:!!M.alphaToCoverage,map:ae,matcap:qt,envMap:fe,envMapMode:fe&&nt.mapping,envMapCubeUVHeight:X,aoMap:D,lightMap:ve,bumpMap:Wt,normalMap:Xt,displacementMap:d&&Rt,emissiveMap:ee,normalMapObjectSpace:Xt&&M.normalMapType===Qd,normalMapTangentSpace:Xt&&M.normalMapType===ku,metalnessMap:Ct,roughnessMap:T,anisotropy:x,anisotropyMap:z,clearcoat:k,clearcoatMap:$,clearcoatNormalMap:rt,clearcoatRoughnessMap:B,dispersion:j,iridescence:et,iridescenceMap:Z,iridescenceThicknessMap:ot,sheen:J,sheenColorMap:ct,sheenRoughnessMap:it,specularMap:Dt,specularColorMap:Pt,specularIntensityMap:Ot,transmission:bt,transmissionMap:L,thicknessMap:ft,gradientMap:Y,opaque:M.transparent===!1&&M.blending===ts&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:_t,alphaHash:mt,combine:M.combine,mapUv:ae&&_(M.map.channel),aoMapUv:D&&_(M.aoMap.channel),lightMapUv:ve&&_(M.lightMap.channel),bumpMapUv:Wt&&_(M.bumpMap.channel),normalMapUv:Xt&&_(M.normalMap.channel),displacementMapUv:Rt&&_(M.displacementMap.channel),emissiveMapUv:ee&&_(M.emissiveMap.channel),metalnessMapUv:Ct&&_(M.metalnessMap.channel),roughnessMapUv:T&&_(M.roughnessMap.channel),anisotropyMapUv:z&&_(M.anisotropyMap.channel),clearcoatMapUv:$&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:rt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:it&&_(M.sheenRoughnessMap.channel),specularMapUv:Dt&&_(M.specularMap.channel),specularColorMapUv:Pt&&_(M.specularColorMap.channel),specularIntensityMapUv:Ot&&_(M.specularIntensityMap.channel),transmissionMapUv:L&&_(M.transmissionMap.channel),thicknessMapUv:ft&&_(M.thicknessMap.channel),alphaMapUv:Q&&_(M.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(Xt||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!tt.attributes.uv&&(ae||Q),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:It,skinning:F.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Nt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:ae&&M.map.isVideoTexture===!0&&Jt.getTransfer(M.map.colorSpace)===ie,decodeVideoTextureEmissive:ee&&M.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(M.emissiveMap.colorSpace)===ie,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Nn,flipSided:M.side===Fe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ft&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&M.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function f(M){let v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)v.push(C),v.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(E(v,M),S(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function E(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function S(M,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),M.push(a.mask)}function b(M){let v=g[M.type],C;if(v){let G=xn[v];C=Hf.clone(G.uniforms)}else C=M.uniforms;return C}function I(M,v){let C;for(let G=0,F=h.length;G<F;G++){let W=h[G];if(W.cacheKey===v){C=W,++C.usedTimes;break}}return C===void 0&&(C=new Zg(i,v,M,r),h.push(C)),C}function A(M){if(--M.usedTimes===0){let v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function R(M){c.remove(M)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:I,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:P}}function jg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Qg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function hu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function uu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||Qg),n.length>1&&n.sort(d||hu),s.length>1&&s.sort(d||hu)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function t_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new uu,i.set(n,[o])):s>=r.length?(o=new uu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function e_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new Vt};break;case"SpotLight":e={position:new w,direction:new w,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new w,halfWidth:new w,halfHeight:new w};break}return i[t.id]=e,e}}}function n_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var i_=0;function s_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function r_(i){let t=new e_,e=n_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new w);let s=new w,r=new le,o=new le;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,E=0,S=0,b=0,I=0,A=0,R=0;l.sort(s_);for(let M=0,v=l.length;M<v;M++){let C=l[M],G=C.color,F=C.intensity,W=C.distance,tt=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=G.r*F,u+=G.g*F,d+=G.b*F;else if(C.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(C.sh.coefficients[q],F);R++}else if(C.isDirectionalLight){let q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let nt=C.shadow,X=e.get(C);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=tt,n.directionalShadowMatrix[p]=C.shadow.matrix,E++}n.directional[p]=q,p++}else if(C.isSpotLight){let q=t.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(G).multiplyScalar(F),q.distance=W,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,n.spot[_]=q;let nt=C.shadow;if(C.map&&(n.spotLightMap[I]=C.map,I++,nt.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=nt.matrix,C.castShadow){let X=e.get(C);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=tt,b++}_++}else if(C.isRectAreaLight){let q=t.get(C);q.color.copy(G).multiplyScalar(F),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=q,m++}else if(C.isPointLight){let q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){let nt=C.shadow,X=e.get(C);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,X.shadowCameraNear=nt.camera.near,X.shadowCameraFar=nt.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=tt,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=q,g++}else if(C.isHemisphereLight){let q=t.get(C);q.skyColor.copy(C.color).multiplyScalar(F),q.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[f]=q,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==E||P.numPointShadows!==S||P.numSpotShadows!==b||P.numSpotMaps!==I||P.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=E,P.numPointShadows=S,P.numSpotShadows=b,P.numSpotMaps=I,P.numLightProbes=R,n.version=i_++)}function c(l,h){let u=0,d=0,p=0,g=0,_=0,m=h.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){let S=l[f];if(S.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(S.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let b=n.hemi[_];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function du(i){let t=new r_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function o_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new du(i),t.set(s,[a])):r>=o.length?(a=new du(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var kc=class extends Vn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},zc=class extends Vn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},a_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function l_(i,t,e){let n=new ir,s=new xt,r=new xt,o=new se,a=new kc({depthPacking:jd}),c=new zc,l={},h=e.maxTextureSize,u={[si]:Fe,[Fe]:si,[Nn]:Nn},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:a_,fragmentShader:c_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new De;g.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Yt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wu;let f=this.type;this.render=function(A,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=i.getRenderTarget(),v=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),G=i.state;G.setBlending(ni),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let F=f!==Un&&this.type===Un,W=f===Un&&this.type!==Un;for(let tt=0,q=A.length;tt<q;tt++){let nt=A[tt],X=nt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let lt=X.getFrameExtents();if(s.multiply(lt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/lt.x),s.x=r.x*lt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/lt.y),s.y=r.y*lt.y,X.mapSize.y=r.y)),X.map===null||F===!0||W===!0){let St=this.type!==Un?{minFilter:un,magFilter:un}:{};X.map!==null&&X.map.dispose(),X.map=new Hn(s.x,s.y,St),X.map.texture.name=nt.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let pt=X.getViewportCount();for(let St=0;St<pt;St++){let Nt=X.getViewport(St);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),G.viewport(o),X.updateMatrices(nt,St),n=X.getFrustum(),b(R,P,X.camera,nt,this.type)}X.isPointLightShadow!==!0&&this.type===Un&&E(X,P),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,v,C)};function E(A,R){let P=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Hn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,P,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,P,p,_,null)}function S(A,R,P,M){let v=null,C=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)v=C;else if(v=P.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let G=v.uuid,F=R.uuid,W=l[G];W===void 0&&(W={},l[G]=W);let tt=W[F];tt===void 0&&(tt=v.clone(),W[F]=tt,R.addEventListener("dispose",I)),v=tt}if(v.visible=R.visible,v.wireframe=R.wireframe,M===Un?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:u[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let G=i.properties.get(v);G.light=P}return v}function b(A,R,P,M,v){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Un)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);let F=t.update(A),W=A.material;if(Array.isArray(W)){let tt=F.groups;for(let q=0,nt=tt.length;q<nt;q++){let X=tt[q],lt=W[X.materialIndex];if(lt&&lt.visible){let pt=S(A,lt,M,v);A.onBeforeShadow(i,A,R,P,F,pt,X),i.renderBufferDirect(P,null,F,pt,A,X),A.onAfterShadow(i,A,R,P,F,pt,X)}}}else if(W.visible){let tt=S(A,W,M,v);A.onBeforeShadow(i,A,R,P,F,tt,null),i.renderBufferDirect(P,null,F,tt,A,null),A.onAfterShadow(i,A,R,P,F,tt,null)}}let G=A.children;for(let F=0,W=G.length;F<W;F++)b(G[F],R,P,M,v)}function I(A){A.target.removeEventListener("dispose",I);for(let P in l){let M=l[P],v=A.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}var h_={[Xa]:qa,[Ya]:Ja,[$a]:Ka,[rs]:Za,[qa]:Xa,[Ja]:Ya,[Ka]:$a,[Za]:rs};function u_(i,t){function e(){let L=!1,ft=new se,Y=null,Q=new se(0,0,0,0);return{setMask:function(_t){Y!==_t&&!L&&(i.colorMask(_t,_t,_t,_t),Y=_t)},setLocked:function(_t){L=_t},setClear:function(_t,mt,Ft,xe,Ue){Ue===!0&&(_t*=xe,mt*=xe,Ft*=xe),ft.set(_t,mt,Ft,xe),Q.equals(ft)===!1&&(i.clearColor(_t,mt,Ft,xe),Q.copy(ft))},reset:function(){L=!1,Y=null,Q.set(-1,0,0,0)}}}function n(){let L=!1,ft=!1,Y=null,Q=null,_t=null;return{setReversed:function(mt){if(ft!==mt){let Ft=t.get("EXT_clip_control");ft?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);let xe=_t;_t=null,this.setClear(xe)}ft=mt},getReversed:function(){return ft},setTest:function(mt){mt?ut(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(mt){Y!==mt&&!L&&(i.depthMask(mt),Y=mt)},setFunc:function(mt){if(ft&&(mt=h_[mt]),Q!==mt){switch(mt){case Xa:i.depthFunc(i.NEVER);break;case qa:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case rs:i.depthFunc(i.LEQUAL);break;case $a:i.depthFunc(i.EQUAL);break;case Za:i.depthFunc(i.GEQUAL);break;case Ja:i.depthFunc(i.GREATER);break;case Ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=mt}},setLocked:function(mt){L=mt},setClear:function(mt){_t!==mt&&(ft&&(mt=1-mt),i.clearDepth(mt),_t=mt)},reset:function(){L=!1,Y=null,Q=null,_t=null,ft=!1}}}function s(){let L=!1,ft=null,Y=null,Q=null,_t=null,mt=null,Ft=null,xe=null,Ue=null;return{setTest:function(ne){L||(ne?ut(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(ne){ft!==ne&&!L&&(i.stencilMask(ne),ft=ne)},setFunc:function(ne,sn,En){(Y!==ne||Q!==sn||_t!==En)&&(i.stencilFunc(ne,sn,En),Y=ne,Q=sn,_t=En)},setOp:function(ne,sn,En){(mt!==ne||Ft!==sn||xe!==En)&&(i.stencilOp(ne,sn,En),mt=ne,Ft=sn,xe=En)},setLocked:function(ne){L=ne},setClear:function(ne){Ue!==ne&&(i.clearStencil(ne),Ue=ne)},reset:function(){L=!1,ft=null,Y=null,Q=null,_t=null,mt=null,Ft=null,xe=null,Ue=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,S=null,b=null,I=null,A=null,R=new Vt(0,0,0),P=0,M=!1,v=null,C=null,G=null,F=null,W=null,tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,nt=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=nt>=2);let lt=null,pt={},St=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Zt=new se().fromArray(St),K=new se().fromArray(Nt);function st(L,ft,Y,Q){let _t=new Uint8Array(4),mt=i.createTexture();i.bindTexture(L,mt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<Y;Ft++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(ft+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return mt}let yt={};yt[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(i.DEPTH_TEST),o.setFunc(rs),Wt(!1),Xt(fh),ut(i.CULL_FACE),D(ni);function ut(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function It(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Lt(L,ft){return u[L]!==ft?(i.bindFramebuffer(L,ft),u[L]=ft,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Gt(L,ft){let Y=p,Q=!1;if(L){Y=d.get(ft),Y===void 0&&(Y=[],d.set(ft,Y));let _t=L.textures;if(Y.length!==_t.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Ft=_t.length;mt<Ft;mt++)Y[mt]=i.COLOR_ATTACHMENT0+mt;Y.length=_t.length,Q=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,Q=!0);Q&&i.drawBuffers(Y)}function ae(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let qt={[bi]:i.FUNC_ADD,[Td]:i.FUNC_SUBTRACT,[wd]:i.FUNC_REVERSE_SUBTRACT};qt[Ad]=i.MIN,qt[Rd]=i.MAX;let fe={[Cd]:i.ZERO,[Pd]:i.ONE,[Id]:i.SRC_COLOR,[Ga]:i.SRC_ALPHA,[Fd]:i.SRC_ALPHA_SATURATE,[Nd]:i.DST_COLOR,[Ld]:i.DST_ALPHA,[Dd]:i.ONE_MINUS_SRC_COLOR,[Wa]:i.ONE_MINUS_SRC_ALPHA,[Od]:i.ONE_MINUS_DST_COLOR,[Ud]:i.ONE_MINUS_DST_ALPHA,[Bd]:i.CONSTANT_COLOR,[kd]:i.ONE_MINUS_CONSTANT_COLOR,[zd]:i.CONSTANT_ALPHA,[Hd]:i.ONE_MINUS_CONSTANT_ALPHA};function D(L,ft,Y,Q,_t,mt,Ft,xe,Ue,ne){if(L===ni){_===!0&&(It(i.BLEND),_=!1);return}if(_===!1&&(ut(i.BLEND),_=!0),L!==Ed){if(L!==m||ne!==M){if((f!==bi||b!==bi)&&(i.blendEquation(i.FUNC_ADD),f=bi,b=bi),ne)switch(L){case ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ph:i.blendFunc(i.ONE,i.ONE);break;case mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ph:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,S=null,I=null,A=null,R.set(0,0,0),P=0,m=L,M=ne}return}_t=_t||ft,mt=mt||Y,Ft=Ft||Q,(ft!==f||_t!==b)&&(i.blendEquationSeparate(qt[ft],qt[_t]),f=ft,b=_t),(Y!==E||Q!==S||mt!==I||Ft!==A)&&(i.blendFuncSeparate(fe[Y],fe[Q],fe[mt],fe[Ft]),E=Y,S=Q,I=mt,A=Ft),(xe.equals(R)===!1||Ue!==P)&&(i.blendColor(xe.r,xe.g,xe.b,Ue),R.copy(xe),P=Ue),m=L,M=!1}function ve(L,ft){L.side===Nn?It(i.CULL_FACE):ut(i.CULL_FACE);let Y=L.side===Fe;ft&&(Y=!Y),Wt(Y),L.blending===ts&&L.transparent===!1?D(ni):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let Q=L.stencilWrite;a.setTest(Q),Q&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ee(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(L){v!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),v=L)}function Xt(L){L!==Md?(ut(i.CULL_FACE),L!==C&&(L===fh?i.cullFace(i.BACK):L===Sd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),C=L}function Rt(L){L!==G&&(q&&i.lineWidth(L),G=L)}function ee(L,ft,Y){L?(ut(i.POLYGON_OFFSET_FILL),(F!==ft||W!==Y)&&(i.polygonOffset(ft,Y),F=ft,W=Y)):It(i.POLYGON_OFFSET_FILL)}function Ct(L){L?ut(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function T(L){L===void 0&&(L=i.TEXTURE0+tt-1),lt!==L&&(i.activeTexture(L),lt=L)}function x(L,ft,Y){Y===void 0&&(lt===null?Y=i.TEXTURE0+tt-1:Y=lt);let Q=pt[Y];Q===void 0&&(Q={type:void 0,texture:void 0},pt[Y]=Q),(Q.type!==L||Q.texture!==ft)&&(lt!==Y&&(i.activeTexture(Y),lt=Y),i.bindTexture(L,ft||yt[L]),Q.type=L,Q.texture=ft)}function k(){let L=pt[lt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(L){Zt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Zt.copy(L))}function it(L){K.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function Dt(L,ft){let Y=l.get(ft);Y===void 0&&(Y=new WeakMap,l.set(ft,Y));let Q=Y.get(L);Q===void 0&&(Q=i.getUniformBlockIndex(ft,L.name),Y.set(L,Q))}function Pt(L,ft){let Q=l.get(ft).get(L);c.get(ft)!==Q&&(i.uniformBlockBinding(ft,Q,L.__bindingPointIndex),c.set(ft,Q))}function Ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},lt=null,pt={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,S=null,b=null,I=null,A=null,R=new Vt(0,0,0),P=0,M=!1,v=null,C=null,G=null,F=null,W=null,Zt.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ut,disable:It,bindFramebuffer:Lt,drawBuffers:Gt,useProgram:ae,setBlending:D,setMaterial:ve,setFlipSided:Wt,setCullFace:Xt,setLineWidth:Rt,setPolygonOffset:ee,setScissorTest:Ct,activeTexture:T,bindTexture:x,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:et,texImage2D:Z,texImage3D:ot,updateUBOMapping:Dt,uniformBlockBinding:Pt,texStorage2D:rt,texStorage3D:B,texSubImage2D:J,texSubImage3D:bt,compressedTexSubImage2D:z,compressedTexSubImage3D:$,scissor:ct,viewport:it,reset:Ot}}function fu(i,t,e,n){let s=d_(n);switch(e){case Du:return i*t;case Uu:return i*t;case Nu:return i*t*2;case Ou:return i*t/s.components*s.byteLength;case vl:return i*t/s.components*s.byteLength;case Fu:return i*t*2/s.components*s.byteLength;case yl:return i*t*2/s.components*s.byteLength;case Lu:return i*t*3/s.components*s.byteLength;case hn:return i*t*4/s.components*s.byteLength;case bl:return i*t*4/s.components*s.byteLength;case no:case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case so:case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nc:case sc:return Math.max(i,16)*Math.max(t,8)/4;case ec:case ic:return Math.max(i,8)*Math.max(t,8)/2;case rc:case oc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ac:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case hc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case uc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case dc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case fc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case pc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case mc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case gc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case _c:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case xc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case vc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case yc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case bc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case oo:case Mc:case Sc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bu:case Ec:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Tc:case wc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function d_(i){switch(i){case kn:case Cu:return{byteLength:1,components:1};case er:case Pu:case lr:return{byteLength:2,components:1};case _l:case xl:return{byteLength:2,components:4};case Ti:case gl:case On:return{byteLength:4,components:1};case Iu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function f_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):lo("canvas")}function _(T,x,k){let j=1,et=Ct(T);if((et.width>k||et.height>k)&&(j=k/Math.max(et.width,et.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let J=Math.floor(j*et.width),bt=Math.floor(j*et.height);u===void 0&&(u=g(J,bt));let z=x?g(J,bt):u;return z.width=J,z.height=bt,z.getContext("2d").drawImage(T,0,0,J,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+J+"x"+bt+")."),z}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(T,x,k,j,et=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=x;if(x===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),x===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGB8UI),k===i.UNSIGNED_SHORT&&(J=i.RGB16UI),k===i.UNSIGNED_INT&&(J=i.RGB32UI),k===i.BYTE&&(J=i.RGB8I),k===i.SHORT&&(J=i.RGB16I),k===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),k===i.UNSIGNED_INT&&(J=i.RGBA32UI),k===i.BYTE&&(J=i.RGBA8I),k===i.SHORT&&(J=i.RGBA16I),k===i.INT&&(J=i.RGBA32I)),x===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),x===i.RGBA){let bt=et?ko:Jt.getTransfer(j);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=bt===ie?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function b(T,x){let k;return T?x===null||x===Ti||x===cs?k=i.DEPTH24_STENCIL8:x===On?k=i.DEPTH32F_STENCIL8:x===er&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ti||x===cs?k=i.DEPTH_COMPONENT24:x===On?k=i.DEPTH_COMPONENT32F:x===er&&(k=i.DEPTH_COMPONENT16),k}function I(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==un&&T.minFilter!==vn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){let x=T.target;x.removeEventListener("dispose",A),P(x),x.isVideoTexture&&h.delete(x)}function R(T){let x=T.target;x.removeEventListener("dispose",R),v(x)}function P(T){let x=n.get(T);if(x.__webglInit===void 0)return;let k=T.source,j=d.get(k);if(j){let et=j[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(T),Object.keys(j).length===0&&d.delete(k)}n.remove(T)}function M(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let k=T.source,j=d.get(k);delete j[x.__cacheKey],o.memory.textures--}function v(T){let x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let et=0;et<x.__webglFramebuffer[j].length;et++)i.deleteFramebuffer(x.__webglFramebuffer[j][et]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let k=T.textures;for(let j=0,et=k.length;j<et;j++){let J=n.get(k[j]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(k[j])}n.remove(T)}let C=0;function G(){C=0}function F(){let T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function W(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function tt(T,x){let k=n.get(T);if(T.isVideoTexture&&Rt(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){let j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,T,x);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function q(T,x){let k=n.get(T);if(T.version>0&&k.__version!==T.version){K(k,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function nt(T,x){let k=n.get(T);if(T.version>0&&k.__version!==T.version){K(k,T,x);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function X(T,x){let k=n.get(T);if(T.version>0&&k.__version!==T.version){st(k,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}let lt={[tr]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[tc]:i.MIRRORED_REPEAT},pt={[un]:i.NEAREST,[Jd]:i.NEAREST_MIPMAP_NEAREST,[Tr]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[ca]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},St={[tf]:i.NEVER,[af]:i.ALWAYS,[ef]:i.LESS,[zu]:i.LEQUAL,[nf]:i.EQUAL,[of]:i.GEQUAL,[sf]:i.GREATER,[rf]:i.NOTEQUAL};function Nt(T,x){if(x.type===On&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===vn||x.magFilter===ca||x.magFilter===Tr||x.magFilter===Ei||x.minFilter===vn||x.minFilter===ca||x.minFilter===Tr||x.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,lt[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,lt[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,lt[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,pt[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,pt[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,St[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===un||x.minFilter!==Tr&&x.minFilter!==Ei||x.type===On&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Zt(T,x){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));let j=x.source,et=d.get(j);et===void 0&&(et={},d.set(j,et));let J=W(x);if(J!==T.__cacheKey){et[J]===void 0&&(et[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),et[J].usedTimes++;let bt=et[T.__cacheKey];bt!==void 0&&(et[T.__cacheKey].usedTimes--,bt.usedTimes===0&&M(x)),T.__cacheKey=J,T.__webglTexture=et[J].texture}return k}function K(T,x,k){let j=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=i.TEXTURE_3D);let et=Zt(T,x),J=x.source;e.bindTexture(j,T.__webglTexture,i.TEXTURE0+k);let bt=n.get(J);if(J.version!==bt.__version||et===!0){e.activeTexture(i.TEXTURE0+k);let z=Jt.getPrimaries(Jt.workingColorSpace),$=x.colorSpace===ti?null:Jt.getPrimaries(x.colorSpace),rt=x.colorSpace===ti||z===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let B=_(x.image,!1,s.maxTextureSize);B=ee(x,B);let Z=r.convert(x.format,x.colorSpace),ot=r.convert(x.type),ct=S(x.internalFormat,Z,ot,x.colorSpace,x.isVideoTexture);Nt(j,x);let it,Dt=x.mipmaps,Pt=x.isVideoTexture!==!0,Ot=bt.__version===void 0||et===!0,L=J.dataReady,ft=I(x,B);if(x.isDepthTexture)ct=b(x.format===ls,x.type),Ot&&(Pt?e.texStorage2D(i.TEXTURE_2D,1,ct,B.width,B.height):e.texImage2D(i.TEXTURE_2D,0,ct,B.width,B.height,0,Z,ot,null));else if(x.isDataTexture)if(Dt.length>0){Pt&&Ot&&e.texStorage2D(i.TEXTURE_2D,ft,ct,Dt[0].width,Dt[0].height);for(let Y=0,Q=Dt.length;Y<Q;Y++)it=Dt[Y],Pt?L&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,it.width,it.height,Z,ot,it.data):e.texImage2D(i.TEXTURE_2D,Y,ct,it.width,it.height,0,Z,ot,it.data);x.generateMipmaps=!1}else Pt?(Ot&&e.texStorage2D(i.TEXTURE_2D,ft,ct,B.width,B.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,B.width,B.height,Z,ot,B.data)):e.texImage2D(i.TEXTURE_2D,0,ct,B.width,B.height,0,Z,ot,B.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Pt&&Ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,ct,Dt[0].width,Dt[0].height,B.depth);for(let Y=0,Q=Dt.length;Y<Q;Y++)if(it=Dt[Y],x.format!==hn)if(Z!==null)if(Pt){if(L)if(x.layerUpdates.size>0){let _t=fu(it.width,it.height,x.format,x.type);for(let mt of x.layerUpdates){let Ft=it.data.subarray(mt*_t/it.data.BYTES_PER_ELEMENT,(mt+1)*_t/it.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,mt,it.width,it.height,1,Z,Ft)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,it.width,it.height,B.depth,Z,it.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,ct,it.width,it.height,B.depth,0,it.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,it.width,it.height,B.depth,Z,ot,it.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,ct,it.width,it.height,B.depth,0,Z,ot,it.data)}else{Pt&&Ot&&e.texStorage2D(i.TEXTURE_2D,ft,ct,Dt[0].width,Dt[0].height);for(let Y=0,Q=Dt.length;Y<Q;Y++)it=Dt[Y],x.format!==hn?Z!==null?Pt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,it.width,it.height,Z,it.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,ct,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?L&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,it.width,it.height,Z,ot,it.data):e.texImage2D(i.TEXTURE_2D,Y,ct,it.width,it.height,0,Z,ot,it.data)}else if(x.isDataArrayTexture)if(Pt){if(Ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,ct,B.width,B.height,B.depth),L)if(x.layerUpdates.size>0){let Y=fu(B.width,B.height,x.format,x.type);for(let Q of x.layerUpdates){let _t=B.data.subarray(Q*Y/B.data.BYTES_PER_ELEMENT,(Q+1)*Y/B.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,B.width,B.height,1,Z,ot,_t)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,Z,ot,B.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,B.width,B.height,B.depth,0,Z,ot,B.data);else if(x.isData3DTexture)Pt?(Ot&&e.texStorage3D(i.TEXTURE_3D,ft,ct,B.width,B.height,B.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,Z,ot,B.data)):e.texImage3D(i.TEXTURE_3D,0,ct,B.width,B.height,B.depth,0,Z,ot,B.data);else if(x.isFramebufferTexture){if(Ot)if(Pt)e.texStorage2D(i.TEXTURE_2D,ft,ct,B.width,B.height);else{let Y=B.width,Q=B.height;for(let _t=0;_t<ft;_t++)e.texImage2D(i.TEXTURE_2D,_t,ct,Y,Q,0,Z,ot,null),Y>>=1,Q>>=1}}else if(Dt.length>0){if(Pt&&Ot){let Y=Ct(Dt[0]);e.texStorage2D(i.TEXTURE_2D,ft,ct,Y.width,Y.height)}for(let Y=0,Q=Dt.length;Y<Q;Y++)it=Dt[Y],Pt?L&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Z,ot,it):e.texImage2D(i.TEXTURE_2D,Y,ct,Z,ot,it);x.generateMipmaps=!1}else if(Pt){if(Ot){let Y=Ct(B);e.texStorage2D(i.TEXTURE_2D,ft,ct,Y.width,Y.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Z,ot,B)}else e.texImage2D(i.TEXTURE_2D,0,ct,Z,ot,B);m(x)&&f(j),bt.__version=J.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function st(T,x,k){if(x.image.length!==6)return;let j=Zt(T,x),et=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+k);let J=n.get(et);if(et.version!==J.__version||j===!0){e.activeTexture(i.TEXTURE0+k);let bt=Jt.getPrimaries(Jt.workingColorSpace),z=x.colorSpace===ti?null:Jt.getPrimaries(x.colorSpace),$=x.colorSpace===ti||bt===z?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let rt=x.isCompressedTexture||x.image[0].isCompressedTexture,B=x.image[0]&&x.image[0].isDataTexture,Z=[];for(let Q=0;Q<6;Q++)!rt&&!B?Z[Q]=_(x.image[Q],!0,s.maxCubemapSize):Z[Q]=B?x.image[Q].image:x.image[Q],Z[Q]=ee(x,Z[Q]);let ot=Z[0],ct=r.convert(x.format,x.colorSpace),it=r.convert(x.type),Dt=S(x.internalFormat,ct,it,x.colorSpace),Pt=x.isVideoTexture!==!0,Ot=J.__version===void 0||j===!0,L=et.dataReady,ft=I(x,ot);Nt(i.TEXTURE_CUBE_MAP,x);let Y;if(rt){Pt&&Ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Dt,ot.width,ot.height);for(let Q=0;Q<6;Q++){Y=Z[Q].mipmaps;for(let _t=0;_t<Y.length;_t++){let mt=Y[_t];x.format!==hn?ct!==null?Pt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,0,0,mt.width,mt.height,ct,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,Dt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,0,0,mt.width,mt.height,ct,it,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,Dt,mt.width,mt.height,0,ct,it,mt.data)}}}else{if(Y=x.mipmaps,Pt&&Ot){Y.length>0&&ft++;let Q=Ct(Z[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Dt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(B){Pt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Z[Q].width,Z[Q].height,ct,it,Z[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Dt,Z[Q].width,Z[Q].height,0,ct,it,Z[Q].data);for(let _t=0;_t<Y.length;_t++){let Ft=Y[_t].image[Q].image;Pt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,0,0,Ft.width,Ft.height,ct,it,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,Dt,Ft.width,Ft.height,0,ct,it,Ft.data)}}else{Pt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ct,it,Z[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Dt,ct,it,Z[Q]);for(let _t=0;_t<Y.length;_t++){let mt=Y[_t];Pt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,0,0,ct,it,mt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,Dt,ct,it,mt.image[Q])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),J.__version=et.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function yt(T,x,k,j,et,J){let bt=r.convert(k.format,k.colorSpace),z=r.convert(k.type),$=S(k.internalFormat,bt,z,k.colorSpace),rt=n.get(x),B=n.get(k);if(B.__renderTarget=x,!rt.__hasExternalTextures){let Z=Math.max(1,x.width>>J),ot=Math.max(1,x.height>>J);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,J,$,Z,ot,x.depth,0,bt,z,null):e.texImage2D(et,J,$,Z,ot,0,bt,z,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Xt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,et,B.__webglTexture,0,Wt(x)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,et,B.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(T,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let j=x.depthTexture,et=j&&j.isDepthTexture?j.type:null,J=b(x.stencilBuffer,et),bt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=Wt(x);Xt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,z,J,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,z,J,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,J,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,T)}else{let j=x.textures;for(let et=0;et<j.length;et++){let J=j[et],bt=r.convert(J.format,J.colorSpace),z=r.convert(J.type),$=S(J.internalFormat,bt,z,J.colorSpace),rt=Wt(x);k&&Xt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,$,x.width,x.height):Xt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),tt(x.depthTexture,0);let et=j.__webglTexture,J=Wt(x);if(x.depthTexture.format===es)Xt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(x.depthTexture.format===ls)Xt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Lt(T){let x=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let j=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){let et=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",et)};j.addEventListener("dispose",et),x.__depthDisposeCallback=et}x.__boundDepthTexture=j}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");It(x.__webglFramebuffer,T)}else if(k){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=i.createRenderbuffer(),ut(x.__webglDepthbuffer[j],T,!1);else{let et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ut(x.__webglDepthbuffer,T,!1);else{let j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(T,x,k){let j=n.get(T);x!==void 0&&yt(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Lt(T)}function ae(T){let x=T.texture,k=n.get(T),j=n.get(x);T.addEventListener("dispose",R);let et=T.textures,J=T.isWebGLCubeRenderTarget===!0,bt=et.length>1;if(bt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=x.version,o.memory.textures++),J){k.__webglFramebuffer=[];for(let z=0;z<6;z++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[z]=[];for(let $=0;$<x.mipmaps.length;$++)k.__webglFramebuffer[z][$]=i.createFramebuffer()}else k.__webglFramebuffer[z]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let z=0;z<x.mipmaps.length;z++)k.__webglFramebuffer[z]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(bt)for(let z=0,$=et.length;z<$;z++){let rt=n.get(et[z]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Xt(T)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let z=0;z<et.length;z++){let $=et[z];k.__webglColorRenderbuffer[z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[z]);let rt=r.convert($.format,$.colorSpace),B=r.convert($.type),Z=S($.internalFormat,rt,B,$.colorSpace,T.isXRRenderTarget===!0),ot=Wt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Z,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.RENDERBUFFER,k.__webglColorRenderbuffer[z])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,x);for(let z=0;z<6;z++)if(x.mipmaps&&x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)yt(k.__webglFramebuffer[z][$],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+z,$);else yt(k.__webglFramebuffer[z],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);m(x)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let z=0,$=et.length;z<$;z++){let rt=et[z],B=n.get(rt);e.bindTexture(i.TEXTURE_2D,B.__webglTexture),Nt(i.TEXTURE_2D,rt),yt(k.__webglFramebuffer,T,rt,i.COLOR_ATTACHMENT0+z,i.TEXTURE_2D,0),m(rt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let z=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(z=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(z,j.__webglTexture),Nt(z,x),x.mipmaps&&x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)yt(k.__webglFramebuffer[$],T,x,i.COLOR_ATTACHMENT0,z,$);else yt(k.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,z,0);m(x)&&f(z),e.unbindTexture()}T.depthBuffer&&Lt(T)}function qt(T){let x=T.textures;for(let k=0,j=x.length;k<j;k++){let et=x[k];if(m(et)){let J=E(T),bt=n.get(et).__webglTexture;e.bindTexture(J,bt),f(J),e.unbindTexture()}}}let fe=[],D=[];function ve(T){if(T.samples>0){if(Xt(T)===!1){let x=T.textures,k=T.width,j=T.height,et=i.COLOR_BUFFER_BIT,J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(T),z=x.length>1;if(z)for(let $=0;$<x.length;$++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let $=0;$<x.length;$++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[$]);let rt=n.get(x[$]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,k,j,0,0,k,j,et,i.NEAREST),c===!0&&(fe.length=0,D.length=0,fe.push(i.COLOR_ATTACHMENT0+$),T.depthBuffer&&T.resolveDepthBuffer===!1&&(fe.push(J),D.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),z)for(let $=0;$<x.length;$++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,bt.__webglColorRenderbuffer[$]);let rt=n.get(x[$]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Wt(T){return Math.min(s.maxSamples,T.samples)}function Xt(T){let x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Rt(T){let x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function ee(T,x){let k=T.colorSpace,j=T.format,et=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==vs&&k!==ti&&(Jt.getTransfer(k)===ie?(j!==hn||et!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function Ct(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=G,this.setTexture2D=tt,this.setTexture2DArray=q,this.setTexture3D=nt,this.setTextureCube=X,this.rebindTextures=Gt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Xt}function p_(i,t){function e(n,s=ti){let r,o=Jt.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Iu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cu)return i.BYTE;if(n===Pu)return i.SHORT;if(n===er)return i.UNSIGNED_SHORT;if(n===gl)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===lr)return i.HALF_FLOAT;if(n===Du)return i.ALPHA;if(n===Lu)return i.RGB;if(n===hn)return i.RGBA;if(n===Uu)return i.LUMINANCE;if(n===Nu)return i.LUMINANCE_ALPHA;if(n===es)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===Ou)return i.RED;if(n===vl)return i.RED_INTEGER;if(n===Fu)return i.RG;if(n===yl)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===no||n===io||n===so||n===ro)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===no)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===no)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ec||n===nc||n===ic||n===sc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rc||n===oc||n===ac)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rc||n===oc)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ac)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cc||n===lc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===xc||n===vc||n===yc||n===bc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_c)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bc)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oo||n===Mc||n===Sc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===oo)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bu||n===Ec||n===Tc||n===wc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Hc=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ge=class extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}},m_={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(m_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},g_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,__=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Vc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new $e,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Mn({vertexShader:g_,fragmentShader:__,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Yt(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gc=class extends zn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,_=new Vc,m=e.getContextAttributes(),f=null,E=null,S=[],b=[],I=new xt,A=null,R=new Ie;R.viewport=new se;let P=new Ie;P.viewport=new se;let M=[R,P],v=new Hc,C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let st=S[K];return st===void 0&&(st=new Ks,S[K]=st),st.getTargetRaySpace()},this.getControllerGrip=function(K){let st=S[K];return st===void 0&&(st=new Ks,S[K]=st),st.getGripSpace()},this.getHand=function(K){let st=S[K];return st===void 0&&(st=new Ks,S[K]=st),st.getHandSpace()};function F(K){let st=b.indexOf(K.inputSource);if(st===-1)return;let yt=S[st];yt!==void 0&&(yt.update(K.inputSource,K.frame,l||o),yt.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",tt);for(let K=0;K<S.length;K++){let st=b[K];st!==null&&(b[K]=null,S[K].disconnect(st))}C=null,G=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,E=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",W),s.addEventListener("inputsourceschange",tt),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){let st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Hn(p.framebufferWidth,p.framebufferHeight,{format:hn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,yt=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?ls:es,yt=m.stencil?cs:Ti);let It={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(It),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Hn(d.textureWidth,d.textureHeight,{format:hn,type:kn,depthTexture:new xo(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function tt(K){for(let st=0;st<K.removed.length;st++){let yt=K.removed[st],ut=b.indexOf(yt);ut>=0&&(b[ut]=null,S[ut].disconnect(yt))}for(let st=0;st<K.added.length;st++){let yt=K.added[st],ut=b.indexOf(yt);if(ut===-1){for(let Lt=0;Lt<S.length;Lt++)if(Lt>=b.length){b.push(yt),ut=Lt;break}else if(b[Lt]===null){b[Lt]=yt,ut=Lt;break}if(ut===-1)break}let It=S[ut];It&&It.connect(yt)}}let q=new w,nt=new w;function X(K,st,yt){q.setFromMatrixPosition(st.matrixWorld),nt.setFromMatrixPosition(yt.matrixWorld);let ut=q.distanceTo(nt),It=st.projectionMatrix.elements,Lt=yt.projectionMatrix.elements,Gt=It[14]/(It[10]-1),ae=It[14]/(It[10]+1),qt=(It[9]+1)/It[5],fe=(It[9]-1)/It[5],D=(It[8]-1)/It[0],ve=(Lt[8]+1)/Lt[0],Wt=Gt*D,Xt=Gt*ve,Rt=ut/(-D+ve),ee=Rt*-D;if(st.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ee),K.translateZ(Rt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),It[10]===-1)K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let Ct=Gt+Rt,T=ae+Rt,x=Wt-ee,k=Xt+(ut-ee),j=qt*ae/T*Ct,et=fe*ae/T*Ct;K.projectionMatrix.makePerspective(x,k,j,et,Ct,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function lt(K,st){st===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(st.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let st=K.near,yt=K.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),v.near=P.near=R.near=st,v.far=P.far=R.far=yt,(C!==v.near||G!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,G=v.far),R.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,v.layers.mask=R.layers.mask|P.layers.mask;let ut=K.parent,It=v.cameras;lt(v,ut);for(let Lt=0;Lt<It.length;Lt++)lt(It[Lt],ut);It.length===2?X(v,R,P):v.projectionMatrix.copy(R.projectionMatrix),pt(K,v,ut)};function pt(K,st,yt){yt===null?K.matrix.copy(st.matrixWorld):(K.matrix.copy(yt.matrixWorld),K.matrix.invert(),K.matrix.multiply(st.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=hs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let St=null;function Nt(K,st){if(h=st.getViewerPose(l||o),g=st,h!==null){let yt=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let ut=!1;yt.length!==v.cameras.length&&(v.cameras.length=0,ut=!0);for(let Lt=0;Lt<yt.length;Lt++){let Gt=yt[Lt],ae=null;if(p!==null)ae=p.getViewport(Gt);else{let fe=u.getViewSubImage(d,Gt);ae=fe.viewport,Lt===0&&(t.setRenderTargetTextures(E,fe.colorTexture,d.ignoreDepthValues?void 0:fe.depthStencilTexture),t.setRenderTarget(E))}let qt=M[Lt];qt===void 0&&(qt=new Ie,qt.layers.enable(Lt),qt.viewport=new se,M[Lt]=qt),qt.matrix.fromArray(Gt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(Gt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(ae.x,ae.y,ae.width,ae.height),Lt===0&&(v.matrix.copy(qt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ut===!0&&v.cameras.push(qt)}let It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){let Lt=u.getDepthInformation(yt[0]);Lt&&Lt.isValid&&Lt.texture&&_.init(t,Lt,s.renderState)}}for(let yt=0;yt<S.length;yt++){let ut=b[yt],It=S[yt];ut!==null&&It!==void 0&&It.update(ut,st,l||o)}St&&St(K,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}let Zt=new Wu;Zt.setAnimationLoop(Nt),this.setAnimationLoop=function(K){St=K},this.dispose=function(){}}},vi=new bn,x_=new le;function v_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Gu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,S,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,E,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Fe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Fe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let E=t.get(f),S=E.envMap,b=E.envMapRotation;S&&(m.envMap.value=S,vi.copy(b),vi.x*=-1,vi.y*=-1,vi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(x_.makeRotationFromEuler(vi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,E,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Fe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function y_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,S){let b=S.program;n.uniformBlockBinding(E,b)}function l(E,S){let b=s[E.id];b===void 0&&(g(E),b=h(E),s[E.id]=b,E.addEventListener("dispose",m));let I=S.program;n.updateUBOMapping(E,I);let A=t.render.frame;r[E.id]!==A&&(d(E),r[E.id]=A)}function h(E){let S=u();E.__bindingPointIndex=S;let b=i.createBuffer(),I=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,I,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let S=s[E.id],b=E.uniforms,I=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,R=b.length;A<R;A++){let P=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,v=P.length;M<v;M++){let C=P[M];if(p(C,A,M,I)===!0){let G=C.__offset,F=Array.isArray(C.value)?C.value:[C.value],W=0;for(let tt=0;tt<F.length;tt++){let q=F[tt],nt=_(q);typeof q=="number"||typeof q=="boolean"?(C.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,G+W,C.__data)):q.isMatrix3?(C.__data[0]=q.elements[0],C.__data[1]=q.elements[1],C.__data[2]=q.elements[2],C.__data[3]=0,C.__data[4]=q.elements[3],C.__data[5]=q.elements[4],C.__data[6]=q.elements[5],C.__data[7]=0,C.__data[8]=q.elements[6],C.__data[9]=q.elements[7],C.__data[10]=q.elements[8],C.__data[11]=0):(q.toArray(C.__data,W),W+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,S,b,I){let A=E.value,R=S+"_"+b;if(I[R]===void 0)return typeof A=="number"||typeof A=="boolean"?I[R]=A:I[R]=A.clone(),!0;{let P=I[R];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return I[R]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(E){let S=E.uniforms,b=0,I=16;for(let R=0,P=S.length;R<P;R++){let M=Array.isArray(S[R])?S[R]:[S[R]];for(let v=0,C=M.length;v<C;v++){let G=M[v],F=Array.isArray(G.value)?G.value:[G.value];for(let W=0,tt=F.length;W<tt;W++){let q=F[W],nt=_(q),X=b%I,lt=X%nt.boundary,pt=X+lt;b+=lt,pt!==0&&I-pt<nt.storage&&(b+=I-pt),G.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=nt.storage}}}let A=b%I;return A>0&&(b+=I-A),E.__size=b,E.__cache={},this}function _(E){let S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){let S=E.target;S.removeEventListener("dispose",m);let b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var vo=class{constructor(t={}){let{canvas:e=Ef(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,f=null,E=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=ii,this.toneMappingExposure=1;let b=this,I=!1,A=0,R=0,P=null,M=-1,v=null,C=new se,G=new se,F=null,W=new Vt(0),tt=0,q=e.width,nt=e.height,X=1,lt=null,pt=null,St=new se(0,0,q,nt),Nt=new se(0,0,q,nt),Zt=!1,K=new ir,st=!1,yt=!1,ut=new le,It=new le,Lt=new w,Gt=new se,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function fe(){return P===null?X:1}let D=n;function ve(y,U){return e.getContext(y,U)}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fl}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",mt,!1),D===null){let U="webgl2";if(D=ve(U,y),D===null)throw ve(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Wt,Xt,Rt,ee,Ct,T,x,k,j,et,J,bt,z,$,rt,B,Z,ot,ct,it,Dt,Pt,Ot,L;function ft(){Wt=new O0(D),Wt.init(),Pt=new p_(D,Wt),Xt=new P0(D,Wt,t,Pt),Rt=new u_(D,Wt),Xt.reverseDepthBuffer&&d&&Rt.buffers.depth.setReversed(!0),ee=new k0(D),Ct=new jg,T=new f_(D,Wt,Rt,Ct,Xt,Pt,ee),x=new D0(b),k=new N0(b),j=new qf(D),Ot=new R0(D,j),et=new F0(D,j,ee,Ot),J=new H0(D,et,j,ee),ct=new z0(D,Xt,T),B=new I0(Ct),bt=new Kg(b,x,k,Wt,Xt,Ot,B),z=new v_(b,Ct),$=new t_,rt=new o_(Wt),ot=new A0(b,x,k,Rt,J,p,c),Z=new l_(b,J,Xt),L=new y_(D,ee,Xt,Rt),it=new C0(D,Wt,ee),Dt=new B0(D,Wt,ee),ee.programs=bt.programs,b.capabilities=Xt,b.extensions=Wt,b.properties=Ct,b.renderLists=$,b.shadowMap=Z,b.state=Rt,b.info=ee}ft();let Y=new Gc(b,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=Wt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Wt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(q,nt,!1))},this.getSize=function(y){return y.set(q,nt)},this.setSize=function(y,U,H=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,nt=U,e.width=Math.floor(y*X),e.height=Math.floor(U*X),H===!0&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(q*X,nt*X).floor()},this.setDrawingBufferSize=function(y,U,H){q=y,nt=U,X=H,e.width=Math.floor(y*H),e.height=Math.floor(U*H),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(St)},this.setViewport=function(y,U,H,V){y.isVector4?St.set(y.x,y.y,y.z,y.w):St.set(y,U,H,V),Rt.viewport(C.copy(St).multiplyScalar(X).round())},this.getScissor=function(y){return y.copy(Nt)},this.setScissor=function(y,U,H,V){y.isVector4?Nt.set(y.x,y.y,y.z,y.w):Nt.set(y,U,H,V),Rt.scissor(G.copy(Nt).multiplyScalar(X).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(y){Rt.setScissorTest(Zt=y)},this.setOpaqueSort=function(y){lt=y},this.setTransparentSort=function(y){pt=y},this.getClearColor=function(y){return y.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(y=!0,U=!0,H=!0){let V=0;if(y){let N=!1;if(P!==null){let at=P.texture.format;N=at===bl||at===yl||at===vl}if(N){let at=P.texture.type,gt=at===kn||at===Ti||at===er||at===cs||at===_l||at===xl,Et=ot.getClearColor(),Tt=ot.getClearAlpha(),Ut=Et.r,Bt=Et.g,wt=Et.b;gt?(g[0]=Ut,g[1]=Bt,g[2]=wt,g[3]=Tt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Ut,_[1]=Bt,_[2]=wt,_[3]=Tt,D.clearBufferiv(D.COLOR,0,_))}else V|=D.COLOR_BUFFER_BIT}U&&(V|=D.DEPTH_BUFFER_BIT),H&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),$.dispose(),rt.dispose(),Ct.dispose(),x.dispose(),k.dispose(),J.dispose(),Ot.dispose(),L.dispose(),bt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Wl),Y.removeEventListener("sessionend",Xl),hi.stop()};function Q(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let y=ee.autoReset,U=Z.enabled,H=Z.autoUpdate,V=Z.needsUpdate,N=Z.type;ft(),ee.autoReset=y,Z.enabled=U,Z.autoUpdate=H,Z.needsUpdate=V,Z.type=N}function mt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ft(y){let U=y.target;U.removeEventListener("dispose",Ft),xe(U)}function xe(y){Ue(y),Ct.remove(y)}function Ue(y){let U=Ct.get(y).programs;U!==void 0&&(U.forEach(function(H){bt.releaseProgram(H)}),y.isShaderMaterial&&bt.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,H,V,N,at){U===null&&(U=ae);let gt=N.isMesh&&N.matrixWorld.determinant()<0,Et=hd(y,U,H,V,N);Rt.setMaterial(V,gt);let Tt=H.index,Ut=1;if(V.wireframe===!0){if(Tt=et.getWireframeAttribute(H),Tt===void 0)return;Ut=2}let Bt=H.drawRange,wt=H.attributes.position,Kt=Bt.start*Ut,ce=(Bt.start+Bt.count)*Ut;at!==null&&(Kt=Math.max(Kt,at.start*Ut),ce=Math.min(ce,(at.start+at.count)*Ut)),Tt!==null?(Kt=Math.max(Kt,0),ce=Math.min(ce,Tt.count)):wt!=null&&(Kt=Math.max(Kt,0),ce=Math.min(ce,wt.count));let he=ce-Kt;if(he<0||he===1/0)return;Ot.setup(N,V,Et,H,Tt);let Ve,Qt=it;if(Tt!==null&&(Ve=j.get(Tt),Qt=Dt,Qt.setIndex(Ve)),N.isMesh)V.wireframe===!0?(Rt.setLineWidth(V.wireframeLinewidth*fe()),Qt.setMode(D.LINES)):Qt.setMode(D.TRIANGLES);else if(N.isLine){let At=V.linewidth;At===void 0&&(At=1),Rt.setLineWidth(At*fe()),N.isLineSegments?Qt.setMode(D.LINES):N.isLineLoop?Qt.setMode(D.LINE_LOOP):Qt.setMode(D.LINE_STRIP)}else N.isPoints?Qt.setMode(D.POINTS):N.isSprite&&Qt.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Qt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let At=N._multiDrawStarts,Tn=N._multiDrawCounts,te=N._multiDrawCount,rn=Tt?j.get(Tt).bytesPerElement:1,Oi=Ct.get(V).currentProgram.getUniforms();for(let Xe=0;Xe<te;Xe++)Oi.setValue(D,"_gl_DrawID",Xe),Qt.render(At[Xe]/rn,Tn[Xe])}else if(N.isInstancedMesh)Qt.renderInstances(Kt,he,N.count);else if(H.isInstancedBufferGeometry){let At=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Tn=Math.min(H.instanceCount,At);Qt.renderInstances(Kt,he,Tn)}else Qt.render(Kt,he)};function ne(y,U,H){y.transparent===!0&&y.side===Nn&&y.forceSinglePass===!1?(y.side=Fe,y.needsUpdate=!0,Mr(y,U,H),y.side=si,y.needsUpdate=!0,Mr(y,U,H),y.side=Nn):Mr(y,U,H)}this.compile=function(y,U,H=null){H===null&&(H=y),f=rt.get(H),f.init(U),S.push(f),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),y!==H&&y.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let V=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let at=N.material;if(at)if(Array.isArray(at))for(let gt=0;gt<at.length;gt++){let Et=at[gt];ne(Et,H,N),V.add(Et)}else ne(at,H,N),V.add(at)}),S.pop(),f=null,V},this.compileAsync=function(y,U,H=null){let V=this.compile(y,U,H);return new Promise(N=>{function at(){if(V.forEach(function(gt){Ct.get(gt).currentProgram.isReady()&&V.delete(gt)}),V.size===0){N(y);return}setTimeout(at,10)}Wt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let sn=null;function En(y){sn&&sn(y)}function Wl(){hi.stop()}function Xl(){hi.start()}let hi=new Wu;hi.setAnimationLoop(En),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(y){sn=y,Y.setAnimationLoop(y),y===null?hi.stop():hi.start()},Y.addEventListener("sessionstart",Wl),Y.addEventListener("sessionend",Xl),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),y.isScene===!0&&y.onBeforeRender(b,y,U,P),f=rt.get(y,S.length),f.init(U),S.push(f),It.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(It),yt=this.localClippingEnabled,st=B.init(this.clippingPlanes,yt),m=$.get(y,E.length),m.init(),E.push(m),Y.enabled===!0&&Y.isPresenting===!0){let at=b.xr.getDepthSensingMesh();at!==null&&Qo(at,U,-1/0,b.sortObjects)}Qo(y,U,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(lt,pt),qt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,qt&&ot.addToRenderList(m,y),this.info.render.frame++,st===!0&&B.beginShadows();let H=f.state.shadowsArray;Z.render(H,y,U),st===!0&&B.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){let at=U.cameras;if(N.length>0)for(let gt=0,Et=at.length;gt<Et;gt++){let Tt=at[gt];Yl(V,N,y,Tt)}qt&&ot.render(y);for(let gt=0,Et=at.length;gt<Et;gt++){let Tt=at[gt];ql(m,y,Tt,Tt.viewport)}}else N.length>0&&Yl(V,N,y,U),qt&&ot.render(y),ql(m,y,U);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(b,y,U),Ot.resetDefaultState(),M=-1,v=null,S.pop(),S.length>0?(f=S[S.length-1],st===!0&&B.setGlobalState(b.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Qo(y,U,H,V){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||K.intersectsSprite(y)){V&&Gt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(It);let gt=J.update(y),Et=y.material;Et.visible&&m.push(y,gt,Et,H,Gt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||K.intersectsObject(y))){let gt=J.update(y),Et=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Gt.copy(y.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Gt.copy(gt.boundingSphere.center)),Gt.applyMatrix4(y.matrixWorld).applyMatrix4(It)),Array.isArray(Et)){let Tt=gt.groups;for(let Ut=0,Bt=Tt.length;Ut<Bt;Ut++){let wt=Tt[Ut],Kt=Et[wt.materialIndex];Kt&&Kt.visible&&m.push(y,gt,Kt,H,Gt.z,wt)}}else Et.visible&&m.push(y,gt,Et,H,Gt.z,null)}}let at=y.children;for(let gt=0,Et=at.length;gt<Et;gt++)Qo(at[gt],U,H,V)}function ql(y,U,H,V){let N=y.opaque,at=y.transmissive,gt=y.transparent;f.setupLightsView(H),st===!0&&B.setGlobalState(b.clippingPlanes,H),V&&Rt.viewport(C.copy(V)),N.length>0&&br(N,U,H),at.length>0&&br(at,U,H),gt.length>0&&br(gt,U,H),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Yl(y,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new Hn(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?lr:kn,minFilter:Ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));let at=f.state.transmissionRenderTarget[V.id],gt=V.viewport||C;at.setSize(gt.z,gt.w);let Et=b.getRenderTarget();b.setRenderTarget(at),b.getClearColor(W),tt=b.getClearAlpha(),tt<1&&b.setClearColor(16777215,.5),b.clear(),qt&&ot.render(H);let Tt=b.toneMapping;b.toneMapping=ii;let Ut=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),st===!0&&B.setGlobalState(b.clippingPlanes,V),br(y,H,V),T.updateMultisampleRenderTarget(at),T.updateRenderTargetMipmap(at),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let wt=0,Kt=U.length;wt<Kt;wt++){let ce=U[wt],he=ce.object,Ve=ce.geometry,Qt=ce.material,At=ce.group;if(Qt.side===Nn&&he.layers.test(V.layers)){let Tn=Qt.side;Qt.side=Fe,Qt.needsUpdate=!0,$l(he,H,V,Ve,Qt,At),Qt.side=Tn,Qt.needsUpdate=!0,Bt=!0}}Bt===!0&&(T.updateMultisampleRenderTarget(at),T.updateRenderTargetMipmap(at))}b.setRenderTarget(Et),b.setClearColor(W,tt),Ut!==void 0&&(V.viewport=Ut),b.toneMapping=Tt}function br(y,U,H){let V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,at=y.length;N<at;N++){let gt=y[N],Et=gt.object,Tt=gt.geometry,Ut=V===null?gt.material:V,Bt=gt.group;Et.layers.test(H.layers)&&$l(Et,U,H,Tt,Ut,Bt)}}function $l(y,U,H,V,N,at){y.onBeforeRender(b,U,H,V,N,at),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(b,U,H,V,y,at),N.transparent===!0&&N.side===Nn&&N.forceSinglePass===!1?(N.side=Fe,N.needsUpdate=!0,b.renderBufferDirect(H,U,V,N,y,at),N.side=si,N.needsUpdate=!0,b.renderBufferDirect(H,U,V,N,y,at),N.side=Nn):b.renderBufferDirect(H,U,V,N,y,at),y.onAfterRender(b,U,H,V,N,at)}function Mr(y,U,H){U.isScene!==!0&&(U=ae);let V=Ct.get(y),N=f.state.lights,at=f.state.shadowsArray,gt=N.state.version,Et=bt.getParameters(y,N.state,at,U,H),Tt=bt.getProgramCacheKey(Et),Ut=V.programs;V.environment=y.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(y.isMeshStandardMaterial?k:x).get(y.envMap||V.environment),V.envMapRotation=V.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Ut===void 0&&(y.addEventListener("dispose",Ft),Ut=new Map,V.programs=Ut);let Bt=Ut.get(Tt);if(Bt!==void 0){if(V.currentProgram===Bt&&V.lightsStateVersion===gt)return Jl(y,Et),Bt}else Et.uniforms=bt.getUniforms(y),y.onBeforeCompile(Et,b),Bt=bt.acquireProgram(Et,Tt),Ut.set(Tt,Bt),V.uniforms=Et.uniforms;let wt=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(wt.clippingPlanes=B.uniform),Jl(y,Et),V.needsLights=dd(y),V.lightsStateVersion=gt,V.needsLights&&(wt.ambientLightColor.value=N.state.ambient,wt.lightProbe.value=N.state.probe,wt.directionalLights.value=N.state.directional,wt.directionalLightShadows.value=N.state.directionalShadow,wt.spotLights.value=N.state.spot,wt.spotLightShadows.value=N.state.spotShadow,wt.rectAreaLights.value=N.state.rectArea,wt.ltc_1.value=N.state.rectAreaLTC1,wt.ltc_2.value=N.state.rectAreaLTC2,wt.pointLights.value=N.state.point,wt.pointLightShadows.value=N.state.pointShadow,wt.hemisphereLights.value=N.state.hemi,wt.directionalShadowMap.value=N.state.directionalShadowMap,wt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,wt.spotShadowMap.value=N.state.spotShadowMap,wt.spotLightMatrix.value=N.state.spotLightMatrix,wt.spotLightMap.value=N.state.spotLightMap,wt.pointShadowMap.value=N.state.pointShadowMap,wt.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Bt,V.uniformsList=null,Bt}function Zl(y){if(y.uniformsList===null){let U=y.currentProgram.getUniforms();y.uniformsList=ss.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Jl(y,U){let H=Ct.get(y);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function hd(y,U,H,V,N){U.isScene!==!0&&(U=ae),T.resetTextureUnits();let at=U.fog,gt=V.isMeshStandardMaterial?U.environment:null,Et=P===null?b.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:vs,Tt=(V.isMeshStandardMaterial?k:x).get(V.envMap||gt),Ut=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Bt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),wt=!!H.morphAttributes.position,Kt=!!H.morphAttributes.normal,ce=!!H.morphAttributes.color,he=ii;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(he=b.toneMapping);let Ve=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Qt=Ve!==void 0?Ve.length:0,At=Ct.get(V),Tn=f.state.lights;if(st===!0&&(yt===!0||y!==v)){let je=y===v&&V.id===M;B.setState(V,y,je)}let te=!1;V.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Tn.state.version||At.outputColorSpace!==Et||N.isBatchedMesh&&At.batching===!1||!N.isBatchedMesh&&At.batching===!0||N.isBatchedMesh&&At.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&At.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&At.instancing===!1||!N.isInstancedMesh&&At.instancing===!0||N.isSkinnedMesh&&At.skinning===!1||!N.isSkinnedMesh&&At.skinning===!0||N.isInstancedMesh&&At.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&At.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&At.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&At.instancingMorph===!1&&N.morphTexture!==null||At.envMap!==Tt||V.fog===!0&&At.fog!==at||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==B.numPlanes||At.numIntersection!==B.numIntersection)||At.vertexAlphas!==Ut||At.vertexTangents!==Bt||At.morphTargets!==wt||At.morphNormals!==Kt||At.morphColors!==ce||At.toneMapping!==he||At.morphTargetsCount!==Qt)&&(te=!0):(te=!0,At.__version=V.version);let rn=At.currentProgram;te===!0&&(rn=Mr(V,U,N));let Oi=!1,Xe=!1,Ps=!1,ue=rn.getUniforms(),_n=At.uniforms;if(Rt.useProgram(rn.program)&&(Oi=!0,Xe=!0,Ps=!0),V.id!==M&&(M=V.id,Xe=!0),Oi||v!==y){Rt.buffers.depth.getReversed()?(ut.copy(y.projectionMatrix),wf(ut),Af(ut),ue.setValue(D,"projectionMatrix",ut)):ue.setValue(D,"projectionMatrix",y.projectionMatrix),ue.setValue(D,"viewMatrix",y.matrixWorldInverse);let Xn=ue.map.cameraPosition;Xn!==void 0&&Xn.setValue(D,Lt.setFromMatrixPosition(y.matrixWorld)),Xt.logarithmicDepthBuffer&&ue.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ue.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,Xe=!0,Ps=!0)}if(N.isSkinnedMesh){ue.setOptional(D,N,"bindMatrix"),ue.setOptional(D,N,"bindMatrixInverse");let je=N.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),ue.setValue(D,"boneTexture",je.boneTexture,T))}N.isBatchedMesh&&(ue.setOptional(D,N,"batchingTexture"),ue.setValue(D,"batchingTexture",N._matricesTexture,T),ue.setOptional(D,N,"batchingIdTexture"),ue.setValue(D,"batchingIdTexture",N._indirectTexture,T),ue.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&ue.setValue(D,"batchingColorTexture",N._colorsTexture,T));let Is=H.morphAttributes;if((Is.position!==void 0||Is.normal!==void 0||Is.color!==void 0)&&ct.update(N,H,rn),(Xe||At.receiveShadow!==N.receiveShadow)&&(At.receiveShadow=N.receiveShadow,ue.setValue(D,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(_n.envMap.value=Tt,_n.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(_n.envMapIntensity.value=U.environmentIntensity),Xe&&(ue.setValue(D,"toneMappingExposure",b.toneMappingExposure),At.needsLights&&ud(_n,Ps),at&&V.fog===!0&&z.refreshFogUniforms(_n,at),z.refreshMaterialUniforms(_n,V,X,nt,f.state.transmissionRenderTarget[y.id]),ss.upload(D,Zl(At),_n,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ss.upload(D,Zl(At),_n,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ue.setValue(D,"center",N.center),ue.setValue(D,"modelViewMatrix",N.modelViewMatrix),ue.setValue(D,"normalMatrix",N.normalMatrix),ue.setValue(D,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let je=V.uniformsGroups;for(let Xn=0,qn=je.length;Xn<qn;Xn++){let Kl=je[Xn];L.update(Kl,rn),L.bind(Kl,rn)}}return rn}function ud(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function dd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,U,H){Ct.get(y.texture).__webglTexture=U,Ct.get(y.depthTexture).__webglTexture=H;let V=Ct.get(y);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){let H=Ct.get(y);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,H=0){P=y,A=U,R=H;let V=!0,N=null,at=!1,gt=!1;if(y){let Tt=Ct.get(y);if(Tt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(Tt.__webglFramebuffer===void 0)T.setupRenderTarget(y);else if(Tt.__hasExternalTextures)T.rebindTextures(y,Ct.get(y.texture).__webglTexture,Ct.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let wt=y.depthTexture;if(Tt.__boundDepthTexture!==wt){if(wt!==null&&Ct.has(wt)&&(y.width!==wt.image.width||y.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(y)}}let Ut=y.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(gt=!0);let Bt=Ct.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Bt[U])?N=Bt[U][H]:N=Bt[U],at=!0):y.samples>0&&T.useMultisampledRTT(y)===!1?N=Ct.get(y).__webglMultisampledFramebuffer:Array.isArray(Bt)?N=Bt[H]:N=Bt,C.copy(y.viewport),G.copy(y.scissor),F=y.scissorTest}else C.copy(St).multiplyScalar(X).floor(),G.copy(Nt).multiplyScalar(X).floor(),F=Zt;if(Rt.bindFramebuffer(D.FRAMEBUFFER,N)&&V&&Rt.drawBuffers(y,N),Rt.viewport(C),Rt.scissor(G),Rt.setScissorTest(F),at){let Tt=Ct.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Tt.__webglTexture,H)}else if(gt){let Tt=Ct.get(y.texture),Ut=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.__webglTexture,H||0,Ut)}M=-1},this.readRenderTargetPixels=function(y,U,H,V,N,at,gt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Ct.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&gt!==void 0&&(Et=Et[gt]),Et){Rt.bindFramebuffer(D.FRAMEBUFFER,Et);try{let Tt=y.texture,Ut=Tt.format,Bt=Tt.type;if(!Xt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-V&&H>=0&&H<=y.height-N&&D.readPixels(U,H,V,N,Pt.convert(Ut),Pt.convert(Bt),at)}finally{let Tt=P!==null?Ct.get(P).__webglFramebuffer:null;Rt.bindFramebuffer(D.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(y,U,H,V,N,at,gt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Ct.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&gt!==void 0&&(Et=Et[gt]),Et){let Tt=y.texture,Ut=Tt.format,Bt=Tt.type;if(!Xt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-V&&H>=0&&H<=y.height-N){Rt.bindFramebuffer(D.FRAMEBUFFER,Et);let wt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,wt),D.bufferData(D.PIXEL_PACK_BUFFER,at.byteLength,D.STREAM_READ),D.readPixels(U,H,V,N,Pt.convert(Ut),Pt.convert(Bt),0);let Kt=P!==null?Ct.get(P).__webglFramebuffer:null;Rt.bindFramebuffer(D.FRAMEBUFFER,Kt);let ce=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Tf(D,ce,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,wt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,at),D.deleteBuffer(wt),D.deleteSync(ce),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,U=null,H=0){y.isTexture!==!0&&($s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);let V=Math.pow(2,-H),N=Math.floor(y.image.width*V),at=Math.floor(y.image.height*V),gt=U!==null?U.x:0,Et=U!==null?U.y:0;T.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,gt,Et,N,at),Rt.unbindTexture()},this.copyTextureToTexture=function(y,U,H=null,V=null,N=0){y.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,y=arguments[1],U=arguments[2],N=arguments[3]||0,H=null);let at,gt,Et,Tt,Ut,Bt,wt,Kt,ce,he=y.isCompressedTexture?y.mipmaps[N]:y.image;H!==null?(at=H.max.x-H.min.x,gt=H.max.y-H.min.y,Et=H.isBox3?H.max.z-H.min.z:1,Tt=H.min.x,Ut=H.min.y,Bt=H.isBox3?H.min.z:0):(at=he.width,gt=he.height,Et=he.depth||1,Tt=0,Ut=0,Bt=0),V!==null?(wt=V.x,Kt=V.y,ce=V.z):(wt=0,Kt=0,ce=0);let Ve=Pt.convert(U.format),Qt=Pt.convert(U.type),At;U.isData3DTexture?(T.setTexture3D(U,0),At=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),At=D.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),At=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let Tn=D.getParameter(D.UNPACK_ROW_LENGTH),te=D.getParameter(D.UNPACK_IMAGE_HEIGHT),rn=D.getParameter(D.UNPACK_SKIP_PIXELS),Oi=D.getParameter(D.UNPACK_SKIP_ROWS),Xe=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,he.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,he.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Tt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ut),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Bt);let Ps=y.isDataArrayTexture||y.isData3DTexture,ue=U.isDataArrayTexture||U.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){let _n=Ct.get(y),Is=Ct.get(U),je=Ct.get(_n.__renderTarget),Xn=Ct.get(Is.__renderTarget);Rt.bindFramebuffer(D.READ_FRAMEBUFFER,je.__webglFramebuffer),Rt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let qn=0;qn<Et;qn++)Ps&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ct.get(y).__webglTexture,N,Bt+qn),y.isDepthTexture?(ue&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ct.get(U).__webglTexture,N,ce+qn),D.blitFramebuffer(Tt,Ut,at,gt,wt,Kt,at,gt,D.DEPTH_BUFFER_BIT,D.NEAREST)):ue?D.copyTexSubImage3D(At,N,wt,Kt,ce+qn,Tt,Ut,at,gt):D.copyTexSubImage2D(At,N,wt,Kt,ce+qn,Tt,Ut,at,gt);Rt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ue?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(At,N,wt,Kt,ce,at,gt,Et,Ve,Qt,he.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(At,N,wt,Kt,ce,at,gt,Et,Ve,he.data):D.texSubImage3D(At,N,wt,Kt,ce,at,gt,Et,Ve,Qt,he):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,wt,Kt,at,gt,Ve,Qt,he.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,wt,Kt,he.width,he.height,Ve,he.data):D.texSubImage2D(D.TEXTURE_2D,N,wt,Kt,at,gt,Ve,Qt,he);D.pixelStorei(D.UNPACK_ROW_LENGTH,Tn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,te),D.pixelStorei(D.UNPACK_SKIP_PIXELS,rn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Oi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xe),N===0&&U.generateMipmaps&&D.generateMipmap(At),Rt.unbindTexture()},this.copyTextureToTexture3D=function(y,U,H=null,V=null,N=0){return y.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,y=arguments[2],U=arguments[3],N=arguments[4]||0),$s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,U,H,V,N)},this.initRenderTarget=function(y){Ct.get(y).__webglFramebuffer===void 0&&T.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?T.setTextureCube(y,0):y.isData3DTexture?T.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?T.setTexture2DArray(y,0):T.setTexture2D(y,0),Rt.unbindTexture()},this.resetState=function(){A=0,R=0,P=null,Rt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}};var yo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fs=class extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ps=class extends Vn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},bo=new w,Mo=new w,pu=new le,qs=new ri,qr=new wi,Oa=new w,mu=new w,Wc=class extends be{constructor(t=new De,e=new ps){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)bo.fromBufferAttribute(e,s-1),Mo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=bo.distanceTo(Mo);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(s),qr.radius+=r,t.ray.intersectsSphere(qr)===!1)return;pu.copy(s).invert(),qs.copy(t.ray).applyMatrix4(pu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){let f=h.getX(_),E=h.getX(_+1),S=Yr(this,t,qs,c,f,E);S&&e.push(S)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(p),f=Yr(this,t,qs,c,_,m);f&&e.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){let f=Yr(this,t,qs,c,_,_+1);f&&e.push(f)}if(this.isLineLoop){let _=Yr(this,t,qs,c,g-1,p);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(bo.fromBufferAttribute(o,s),Mo.fromBufferAttribute(o,r),e.distanceSqToSegment(bo,Mo,Oa,mu)>n)return;Oa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Oa);if(!(c<t.near||c>t.far))return{distance:c,point:mu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var gu=new w,_u=new w,sr=class extends Wc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)gu.fromBufferAttribute(e,s),_u.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gu.distanceTo(_u);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var rr=class extends Vn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xu=new le,Xc=new ri,$r=new wi,Zr=new w,So=class extends be{constructor(t=new De,e=new rr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,t.ray.intersectsSphere($r)===!1)return;xu.copy(s).invert(),Xc.copy(t.ray).applyMatrix4(xu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,_=p;g<_;g++){let m=l.getX(g);Zr.fromBufferAttribute(u,m),vu(Zr,m,c,s,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)Zr.fromBufferAttribute(u,g),vu(Zr,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function vu(i,t,e,n,s,r,o){let a=Xc.distanceSqToPoint(i);if(a<e){let c=new w;Xc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ms=class extends $e{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new xt:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new w,s=[],r=[],o=[],a=new w,c=new le;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new w)}r[0]=new w,o[0]=new w;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ce(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Ce(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Eo=class extends fn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new xt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},qc=class extends Eo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function El(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Jr=new w,Fa=new El,Ba=new El,ka=new El,or=class extends fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new w){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Jr.subVectors(s[0],s[1]).add(s[0]),l=Jr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Jr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Jr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Fa.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),Ba.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),ka.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Fa.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ba.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ka.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Fa.calc(c),Ba.calc(c),ka.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new w().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function yu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function b_(i,t){let e=1-i;return e*e*t}function M_(i,t){return 2*(1-i)*i*t}function S_(i,t){return i*i*t}function js(i,t,e,n){return b_(i,t)+M_(i,e)+S_(i,n)}function E_(i,t){let e=1-i;return e*e*e*t}function T_(i,t){let e=1-i;return 3*e*e*i*t}function w_(i,t){return 3*(1-i)*i*i*t}function A_(i,t){return i*i*i*t}function Qs(i,t,e,n,s){return E_(i,t)+T_(i,e)+w_(i,n)+A_(i,s)}var Yc=class extends fn{constructor(t=new xt,e=new xt,n=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qs(t,s.x,r.x,o.x,a.x),Qs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$c=class extends fn{constructor(t=new w,e=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new w){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qs(t,s.x,r.x,o.x,a.x),Qs(t,s.y,r.y,o.y,a.y),Qs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zc=class extends fn{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jc=class extends fn{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kc=class extends fn{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(js(t,s.x,r.x,o.x),js(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},To=class extends fn{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(js(t,s.x,r.x,o.x),js(t,s.y,r.y,o.y),js(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jc=class extends fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(yu(a,c.x,l.x,h.x,u.x),yu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new xt().fromArray(s))}return this}},R_=Object.freeze({__proto__:null,ArcCurve:qc,CatmullRomCurve3:or,CubicBezierCurve:Yc,CubicBezierCurve3:$c,EllipseCurve:Eo,LineCurve:Zc,LineCurve3:Jc,QuadraticBezierCurve:Kc,QuadraticBezierCurve3:To,SplineCurve:jc});var wo=class i extends De{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,_=[],m=n/2,f=0;E(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new _e(u,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(p,2));function E(){let b=new w,I=new w,A=0,R=(e-t)/n;for(let P=0;P<=r;P++){let M=[],v=P/r,C=v*(e-t)+t;for(let G=0;G<=s;G++){let F=G/s,W=F*c+a,tt=Math.sin(W),q=Math.cos(W);I.x=C*tt,I.y=-v*n+m,I.z=C*q,u.push(I.x,I.y,I.z),b.set(tt,R,q).normalize(),d.push(b.x,b.y,b.z),p.push(F,1-v),M.push(g++)}_.push(M)}for(let P=0;P<s;P++)for(let M=0;M<r;M++){let v=_[M][P],C=_[M+1][P],G=_[M+1][P+1],F=_[M][P+1];(t>0||M!==0)&&(h.push(v,C,F),A+=3),(e>0||M!==r-1)&&(h.push(C,G,F),A+=3)}l.addGroup(f,A,0),f+=A}function S(b){let I=g,A=new xt,R=new w,P=0,M=b===!0?t:e,v=b===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*v,0),d.push(0,v,0),p.push(.5,.5),g++;let C=g;for(let G=0;G<=s;G++){let W=G/s*c+a,tt=Math.cos(W),q=Math.sin(W);R.x=M*q,R.y=m*v,R.z=M*tt,u.push(R.x,R.y,R.z),d.push(0,v,0),A.x=tt*.5+.5,A.y=q*.5*v+.5,p.push(A.x,A.y),g++}for(let G=0;G<s;G++){let F=I+G,W=C+G;b===!0?h.push(W,W+1,F):h.push(W+1,W,F),P+=3}l.addGroup(f,P,b===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Kr=new w,jr=new w,za=new w,Qr=new ei,Ao=class extends De{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(ns*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:_,b:m,c:f}=Qr;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),f.fromBufferAttribute(a,l[2]),Qr.getNormal(za),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let E=0;E<3;E++){let S=(E+1)%3,b=u[E],I=u[S],A=Qr[h[E]],R=Qr[h[S]],P=`${b}_${I}`,M=`${I}_${b}`;M in d&&d[M]?(za.dot(d[M].normal)<=r&&(p.push(A.x,A.y,A.z),p.push(R.x,R.y,R.z)),d[M]=null):P in d||(d[P]={index0:l[E],index1:l[S],normal:za.clone()})}}for(let g in d)if(d[g]){let{index0:_,index1:m}=d[g];Kr.fromBufferAttribute(a,_),jr.fromBufferAttribute(a,m),p.push(Kr.x,Kr.y,Kr.z),p.push(jr.x,jr.y,jr.z)}this.setAttribute("position",new _e(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Ro=class i extends De{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new w,d=new w,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){let E=[],S=f/n,b=0;f===0&&o===0?b=.5/e:f===n&&c===Math.PI&&(b=-.5/e);for(let I=0;I<=e;I++){let A=I/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+b,1-S),E.push(l++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){let S=h[f][E+1],b=h[f][E],I=h[f+1][E],A=h[f+1][E+1];(f!==0||o>0)&&p.push(S,b,A),(f!==n-1||c<Math.PI)&&p.push(b,I,A)}this.setIndex(p),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Co=class i extends De{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new w,u=new w,d=new w;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let _=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,E=(s+1)*p+g;o.push(_,m,E),o.push(m,f,E)}this.setIndex(o),this.setAttribute("position",new _e(a,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Po=class i extends De{constructor(t=new To(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new w,c=new w,l=new xt,h=new w,u=[],d=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new _e(u,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(p,2));function _(){for(let S=0;S<e;S++)m(S);m(r===!1?e:0),E(),f()}function m(S){h=t.getPointAt(S/e,h);let b=o.normals[S],I=o.binormals[S];for(let A=0;A<=s;A++){let R=A/s*Math.PI*2,P=Math.sin(R),M=-Math.cos(R);c.x=M*b.x+P*I.x,c.y=M*b.y+P*I.y,c.z=M*b.z+P*I.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function f(){for(let S=1;S<=e;S++)for(let b=1;b<=s;b++){let I=(s+1)*(S-1)+(b-1),A=(s+1)*S+(b-1),R=(s+1)*S+b,P=(s+1)*(S-1)+b;g.push(I,A,P),g.push(A,R,P)}}function E(){for(let S=0;S<=e;S++)for(let b=0;b<=s;b++)l.x=S/e,l.y=b/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new R_[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ze=class extends Vn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ku,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function to(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function C_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var gs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Qc=class extends gs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_h,endingEnd:_h}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case xh:r=t,a=2*e-n;break;case vh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case xh:o=t,c=2*n-e;break;case vh:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,E=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-p)*m+(1.5+p)*_+.5*g,b=p*m-p*_;for(let I=0;I!==a;++I)r[I]=f*o[h+I]+E*o[l+I]+S*o[c+I]+b*o[u+I];return r}},tl=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},el=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},pn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=to(e,this.TimeBufferType),this.values=to(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:to(t.times,Array),values:to(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ao:e=this.InterpolantFactoryMethodDiscrete;break;case Ac:e=this.InterpolantFactoryMethodLinear;break;case la:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ao;case this.InterpolantFactoryMethodLinear:return Ac;case this.InterpolantFactoryMethodSmooth:return la}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&C_(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===la,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=Ac;var Ri=class extends pn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=ao;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var nl=class extends pn{};nl.prototype.ValueTypeName="color";var il=class extends pn{};il.prototype.ValueTypeName="number";var sl=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)dn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Io=class extends pn{InterpolantFactoryMethodLinear(t){return new sl(this.times,this.values,this.getValueSize(),t)}};Io.prototype.ValueTypeName="quaternion";Io.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends pn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=ao;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends pn{};rl.prototype.ValueTypeName="vector";var ol=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},P_=new ol,al=class{constructor(t){this.manager=t!==void 0?t:P_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};al.DEFAULT_MATERIAL_NAME="__DEFAULT";var _s=class extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Do=class extends _s{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ha=new le,bu=new w,Mu=new w,ar=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;bu.setFromMatrixPosition(t.matrixWorld),e.position.copy(bu),Mu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mu),e.updateMatrixWorld(),Ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},cl=class extends ar{constructor(){super(new Ie(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=hs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Lo=class extends _s{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new cl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Su=new le,Ys=new w,Va=new w,ll=class extends ar{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ys.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ys),Va.copy(n.position),Va.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Va),n.updateMatrixWorld(),s.makeTranslation(-Ys.x,-Ys.y,-Ys.z),Su.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Su)}},xs=class extends _s{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ll}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},hl=class extends ar{constructor(){super(new _o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Uo=class extends _s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new hl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Tl="\\[\\]\\.:\\/",I_=new RegExp("["+Tl+"]","g"),wl="[^"+Tl+"]",D_="[^"+Tl.replace("\\.","")+"]",L_=/((?:WC+[\/:])*)/.source.replace("WC",wl),U_=/(WCOD+)?/.source.replace("WCOD",D_),N_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wl),O_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wl),F_=new RegExp("^"+L_+U_+N_+O_+"$"),B_=["material","materials","bones","map"],ul=class{constructor(t,e,n){let s=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(I_,"")}static parseTrackName(t){let e=F_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);B_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=ul;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dx=new Float32Array(1);var Eu=new le,No=class{constructor(t,e,n=0,s=1/0){this.ray=new ri(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new nr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Eu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eu),this}intersectObject(t,e=!0,n=[]){return dl(t,this,n,e),n.sort(Tu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)dl(t[s],this,n,e);return n.sort(Tu),n}};function Tu(i,t){return i.distance-t.distance}function dl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)dl(r[o],t,e,!0)}}var cr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var eo=new yn,Oo=class extends sr{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new De;r.setIndex(new Be(n,1)),r.setAttribute("position",new Be(s,3)),super(r,new ps({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&eo.setFromObject(this.object),eo.isEmpty())return;let e=eo.min,n=eo.max,s=this.geometry.attributes.position,r=s.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var Fo=class extends zn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);var Zu={type:"change"},Rl={type:"start"},Ku={type:"end"},Ho=new ri,Ju=new ln,z_=Math.cos(70*oi.DEG2RAD),we=new w,We=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Al=1e-6,Vo=class extends Fo{constructor(t,e=null){super(t,e),this.state=re.NONE,this.enabled=!0,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pi.ROTATE,MIDDLE:Pi.DOLLY,RIGHT:Pi.PAN},this.touches={ONE:Ii.ROTATE,TWO:Ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new dn,this._lastTargetPosition=new w,this._quat=new dn().setFromUnitVectors(t.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cr,this._sphericalDelta=new cr,this._scale=1,this._panOffset=new w,this._rotateStart=new xt,this._rotateEnd=new xt,this._rotateDelta=new xt,this._panStart=new xt,this._panEnd=new xt,this._panDelta=new xt,this._dollyStart=new xt,this._dollyEnd=new xt,this._dollyDelta=new xt,this._dollyDirection=new w,this._mouse=new xt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=V_.bind(this),this._onPointerDown=H_.bind(this),this._onPointerUp=G_.bind(this),this._onContextMenu=J_.bind(this),this._onMouseWheel=q_.bind(this),this._onKeyDown=Y_.bind(this),this._onTouchStart=$_.bind(this),this._onTouchMove=Z_.bind(this),this._onMouseDown=W_.bind(this),this._onMouseMove=X_.bind(this),this._interceptControlDown=K_.bind(this),this._interceptControlUp=j_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zu),this.update(),this.state=re.NONE}update(t=null){let e=this.object.position;we.copy(e).sub(this.target),we.applyQuaternion(this._quat),this._spherical.setFromVector3(we),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=We:n>Math.PI&&(n-=We),s<-Math.PI?s+=We:s>Math.PI&&(s-=We),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(we.setFromSpherical(this._spherical),we.applyQuaternion(this._quatInverse),e.copy(this.target).add(we),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=we.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new w(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new w(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=we.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ho.origin.copy(this.object.position),Ho.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ho.direction))<z_?this.object.lookAt(this.target):(Ju.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ho.intersectPlane(Ju,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Al||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Al||this._lastTargetPosition.distanceToSquared(this.target)>Al?(this.dispatchEvent(Zu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?We/60*this.autoRotateSpeed*t:We/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){we.setFromMatrixColumn(e,0),we.multiplyScalar(-t),this._panOffset.add(we)}_panUp(t,e){this.screenSpacePanning===!0?we.setFromMatrixColumn(e,1):(we.setFromMatrixColumn(e,0),we.crossVectors(this.object.up,we)),we.multiplyScalar(t),this._panOffset.add(we)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;we.copy(s).sub(this.target);let r=we.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(We*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-We*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(We*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-We*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new xt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function H_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function V_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function G_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ku),this.state=re.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function W_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Pi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=re.DOLLY;break;case Pi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}break;case Pi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Rl)}function X_(i){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function q_(i){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(i.preventDefault(),this.dispatchEvent(Rl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ku))}function Y_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function $_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ii.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=re.TOUCH_ROTATE;break;case Ii.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case Ii.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=re.TOUCH_DOLLY_PAN;break;case Ii.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Rl)}function Z_(i){switch(this._trackPointer(i),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=re.NONE}}function J_(i){this.enabled!==!1&&i.preventDefault()}function K_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function j_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Go=class extends fs{constructor(){super();let t=new en;t.deleteAttribute("uv");let e=new Ze({side:Fe}),n=new Ze,s=new xs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Yt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Yt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Yt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new Yt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new Yt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new Yt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Yt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new Yt(t,Ms(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let p=new Yt(t,Ms(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let g=new Yt(t,Ms(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let _=new Yt(t,Ms(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);let m=new Yt(t,Ms(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let f=new Yt(t,Ms(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ms(i){let t=new Ge;return t.color.setScalar(i),t}var Le={D:.46,H:.47,W:.21},Je=.76,Ss=new w(0,Je+Le.H/2+.012,0),Q_=-Le.W/2+.008,Ts=Q_+.009,Il=-Le.D/2+.03,ws=Le.H/2-.035,ju={ATX:[.244,.305],mATX:[.244,.244],ITX:[.17,.17]},Xo={ATX:{socket:[.105,.075],ram:[.168,.0105,.0965],pcie:.165,m2:[[.1,.135],[.1,.245]],m24:[.237,.12],cpu8:[.02,.012]},mATX:{socket:[.105,.075],ram:[.168,.0105,.0965],pcie:.165,m2:[[.1,.135]],m24:[.237,.12],cpu8:[.02,.012]},ITX:{socket:[.075,.065],ram:[.128,.011,.075],pcie:.15,m2:[[.06,.12]],m24:[.164,.035],cpu8:[.015,.01]}},Cl={fanF0:[Le.D/2-.03,.12,0],fanF1:[Le.D/2-.03,-.01,0],fanR0:[-Le.D/2+.022,.135,0]},Wo={hdd0:[.13,-.2,0],sata0:[.13,-.163,0],sata1:[.13,-.145,0]},hr=[-Le.D/2+.09,-Le.H/2+.056,-.01],Es=new Map;function mn(i,{w:t=256,h:e=64,bg:n="#111",fg:s="#fff",font:r="bold 30px Arial, sans-serif",border:o=null}={}){let a=[i,t,e,n,s,r,o].join("|");if(Es.has(a))return Es.get(a);let c=document.createElement("canvas");c.width=t,c.height=e;let l=c.getContext("2d");n&&(l.fillStyle=n,l.fillRect(0,0,t,e)),o&&(l.strokeStyle=o,l.lineWidth=4,l.strokeRect(2,2,t-4,e-4)),l.fillStyle=s,l.font=r,l.textAlign="center",l.textBaseline="middle";let h=String(i).split(`
`);h.forEach((d,p)=>l.fillText(d,t/2,e/2+(p-(h.length-1)/2)*(parseInt(r.match(/(\d+)px/)?.[1]||30)*1.15)));let u=new ms(c);return u.colorSpace=Pe,u.anisotropy=4,Es.set(a,u),u}function ur(i){if(Es.has(i))return Es.get(i);let t=document.createElement("canvas"),e=t.getContext("2d");if(i==="mesh"){t.width=t.height=64,e.fillStyle="#0c0c0c",e.fillRect(0,0,64,64),e.fillStyle="#2a2a2a";for(let s=0;s<8;s++)for(let r=0;r<8;r++)e.beginPath(),e.arc(s*8+4+r%2*4,r*8+4,2.4,0,7),e.fill()}else if(i==="wood"){t.width=512,t.height=512,e.fillStyle="#5b3d27",e.fillRect(0,0,512,512);for(let s=0;s<160;s++){e.strokeStyle=`rgba(${30+Math.random()*40},${18+Math.random()*20},10,${.15+Math.random()*.25})`,e.lineWidth=1+Math.random()*3,e.beginPath();let r=Math.random()*512;e.moveTo(0,r),e.bezierCurveTo(170,r+Math.random()*20-10,340,r+Math.random()*20-10,512,r+Math.random()*10-5),e.stroke()}}else if(i==="floor"){t.width=t.height=512,e.fillStyle="#3a3f46",e.fillRect(0,0,512,512);for(let s=0;s<4;s++)for(let r=0;r<4;r++)e.fillStyle=(s+r)%2?"#353a41":"#3d434b",e.fillRect(s*128+1,r*128+1,126,126)}else if(i==="pcb"){t.width=t.height=256,e.fillStyle="#000",e.fillRect(0,0,256,256),e.strokeStyle="rgba(255,255,255,0.10)",e.lineWidth=1;for(let s=0;s<70;s++){e.beginPath();let r=Math.random()*256,o=Math.random()*256;e.moveTo(r,o);for(let a=0;a<3;a++)Math.random()<.5?r+=Math.random()*60-30:o+=Math.random()*60-30,e.lineTo(r,o);e.stroke()}}else if(i==="peg"){t.width=t.height=128,e.fillStyle="#c9b48f",e.fillRect(0,0,128,128),e.fillStyle="#6d5f47";for(let s=0;s<8;s++)for(let r=0;r<8;r++)e.beginPath(),e.arc(s*16+8,r*16+8,2,0,7),e.fill()}let n=new ms(t);return n.colorSpace=Pe,n.wrapS=n.wrapT=tr,Es.set(i,n),n}var Mt=(i,t=.2,e=.6,n={})=>new Ze({color:i,metalness:t,roughness:e,...n});function vt(i,t,e,n,s=0,r=0,o=0){let a=new Yt(new en(i,t,e),n);return a.position.set(s,r,o),a.castShadow=!0,a.receiveShadow=!0,a}function ai(i,t,e,n=24){let s=new Yt(new wo(i,i,t,n),e);return s.castShadow=!0,s}function nn(i,t,e,n=0,s=0,r=0){let o=new Yt(new Ai(i,t),e);return o.position.set(n,s,r),o}var dr=i=>i.name.replace(/^(AMD|Intel|NVIDIA|ASUS|MSI|Gigabyte|Sapphire|EVGA|ASRock)\s+/i,""),Pl=[],fr=[],mr=[];function pr(i,t=1710618,e=2236962,n=!1,s=14){let r=new ge,o=.025,a=i*.07,c=Mt(t,.2,.6);for(let[_,m,f,E]of[[0,i/2-a/2,i,a],[0,-i/2+a/2,i,a],[i/2-a/2,0,a,i],[-i/2+a/2,0,a,i]])r.add(vt(f,E,o,c,_,m,0));let l=n?Mt(16777215,0,.4,{emissive:0}):c;n&&fr.push(l);let h=new Yt(new Co(i*.455,i*.022,6,40),l);r.add(h);let u=new ge,d=ai(i*.17,o*.8,Mt(e,.1,.5));d.rotation.x=Math.PI/2,u.add(d);let p=Mt(e,.05,.45,n?{transparent:!0,opacity:.85}:{}),g=7;for(let _=0;_<g;_++){let m=_/g*Math.PI*2,f=new Yt(new en(i*.3,i*.13,.0015),p);f.position.set(Math.cos(m)*i*.28,Math.sin(m)*i*.28,0),f.rotation.set(.45,0,m,"ZYX"),u.add(f)}return r.add(u),Pl.push({obj:u,speed:s}),r}function tx(i){let t=new ge,{D:e,H:n,W:s}=Le,r=i.color>8947848,o=Mt(i.color,.35,.5),a=Mt(r?15132390:1315860,.3,.6);t.add(vt(e,n,.004,a,0,0,-s/2)),t.add(vt(e,.006,s,o,0,n/2,0)),t.add(vt(e,.006,s,o,0,-n/2,0));let c=vt(.012,n,s+.006,i.frontMesh?Mt(16777215,.2,.8,{map:(()=>{let g=ur("mesh").clone();return g.needsUpdate=!0,g.repeat.set(6,13),g})()}):o,e/2+.006,0,0);t.add(c);let l=Mt(r?14211288:986895,.4,.55);t.add(vt(.004,n*.28,s,l,-e/2,-n*.36,0)),t.add(vt(.004,.05,s,l,-e/2,n/2-.025,0)),t.add(vt(.004,n*.34,.03,l,-e/2,.04,s/2-.015)),t.add(vt(.004,n*.34,.03,l,-e/2,.04,-s/2+.015));for(let[g,_,m,f]of[[e,.012,0,n/2-.006],[e,.012,0,-n/2+.006],[.012,n,e/2-.006,0],[.012,n,-e/2+.006,0]])t.add(vt(g,_,.01,o,m,f,s/2-.005));let h=Mt(r?13619151:2105376,.5,.5);t.add(vt(.15,.004,s-.02,h,.13,-.135,0)),t.add(vt(.004,.09,s-.02,h,.055,-.18,0)),t.add(vt(e*.42,.004,s-.01,Mt(r?14737632:1579032,.3,.6),-e/2+e*.21,-n/2+.105,0));for(let[g,_]of[[-e/2+.04,-s/2+.03],[e/2-.04,-s/2+.03],[-e/2+.04,s/2-.03],[e/2-.04,s/2-.03]]){let m=ai(.014,.012,Mt(1118481,0,.9));m.position.set(g,-n/2-.006,_),t.add(m)}let u=Mt(2236962,.6,.3,{emissive:0});mr.push({mat:u,color:2788607,intensity:2});let d=ai(.008,.004,u);d.position.set(e/2-.05,n/2+.004,.03),t.add(d);let p=nn(.06,.015,new Ge({map:mn(i.name.split(" ")[0].toUpperCase(),{bg:null,fg:r?"#333":"#bbb",w:256,h:64}),transparent:!0}));return p.position.set(e/2+.0125,-n/2+.04,0),p.rotation.y=Math.PI/2,t.add(p),t}function ex(i){let t=new ge,[e,n]=ju[i.form],s=Xo[i.form],r=Mt(i.color,.1,.55,{emissiveMap:ur("pcb"),emissive:3355443});t.add(vt(e,n,.002,r,e/2,-n/2,-.001));let o=Mt(3882821,.85,.35),a=Mt(1118481,.2,.6),[c,l]=s.socket;t.add(vt(.05,.05,.004,Mt(12105912,.6,.4),c,-l,.002)),t.add(vt(.042,.042,.0045,Mt(2763306,.2,.5),c,-l,.0025)),t.add(vt(Math.min(.11,e*.45),.02,.022,o,c,-.018,.011)),t.add(vt(.02,.09,.022,o,.03,-l-.005,.011)),t.add(vt(.022,Math.min(.15,n*.5),.035,Mt(2829875,.7,.4),.011,-Math.min(.15,n*.5)/2-.01,.0175));let[h,u,d]=s.ram;for(let _=0;_<i.ramSlots;_++)t.add(vt(.0055,.138,.007,_%2?Mt(5592405):a,h+_*u,-d,.0035));if(t.add(vt(.089,.0065,.009,a,.06,-s.pcie,.0045)),i.form==="ATX")for(let _ of[.205,.265])t.add(vt(.089,.0065,.008,a,.06,-_,.004));for(let[_,m]of s.m2)t.add(vt(.006,.024,.004,a,_-.042,-m,.002));t.add(vt(.04,.04,.008,o,e-.05,-n+.06,.004));let p=nn(.036,.012,new Ge({map:mn(i.name.split(" ").slice(-2).join(" "),{bg:"#2b2e33",fg:"#e6e6e6",font:"bold 26px Arial"})}));p.position.set(e-.05,-n+.06,.0085),t.add(p),t.add(vt(.009,.052,.012,a,s.m24[0],-s.m24[1],.006)),t.add(vt(.02,.009,.011,a,s.cpu8[0],-s.cpu8[1],.0055));let g=Mt(2236962,.6,.35);for(let _=0;_<6;_++){let m=ai(.003,.008,g,10);m.rotation.x=Math.PI/2,m.position.set(c-.035+_*.012,-l+.035,.004),t.add(m)}return t}function nx(i){let t=new ge;t.add(vt(.04,.04,.0015,Mt(2055214,.2,.6),0,0,.0055));let e=i.name.startsWith("AMD"),n=new Ze({map:mn(e?`AMD
RYZEN`:`intel
CORE`,{bg:"#c7c9cc",fg:"#3a3a3a",font:"bold 44px Arial",w:256,h:256}),metalness:.7,roughness:.35});return t.add(vt(.034,.034,.003,n,0,0,.0075)),t}function ix(i){let t=new ge;if(i.kind==="box"){let l=ai(.046,.03,Mt(10133670,.8,.4),32);l.rotation.x=Math.PI/2,l.position.z=.024,t.add(l);let h=pr(.08,1118481,1710618,!1,18);return h.position.z=.044,t.add(h),t}let e=i.kind==="tower2"?[-.035,.04]:[0],n=Mt(i.color===9136722?13158600:12172996,.85,.3),s=new en(.048,.125,9e-4),r=Mt(12946255,.9,.25);for(let l of e){for(let h=0;h<26;h++){let u=new Yt(s,n);u.position.set(l,0,.035+h*.0045),u.castShadow=!0,t.add(u)}t.add(vt(.05,.127,.006,Mt(i.color,.5,.4),l,0,.035+26*.0045+.002));for(let h=0;h<4;h++){let u=ai(.003,.13,r,8);u.rotation.x=Math.PI/2,u.position.set(l+(h%2?.01:-.01),-.03+h*.02,.07),t.add(u)}}t.add(vt(.04,.04,.01,Mt(12946255,.9,.3),0,0,.012));let o=i.color===9136722,a=e[e.length-1]+.038,c=pr(.12,o?7031350:i.color,o?13213822:2105376,!1,12);if(c.rotation.y=Math.PI/2,c.position.set(a,0,.095),t.add(c),e.length>1){let l=pr(.12,7031350,13213822,!1,12);l.rotation.y=Math.PI/2,l.position.set(.002,0,.095),t.add(l)}return t}function sx(i){let t=new ge;t.add(vt(.0013,.133,.03,Mt(2055214,.2,.6),0,0,.022));let e=Mt(i.color,.6,.35);if(t.add(vt(.0065,.132,i.rgb?.03:.032,e,0,0,.024)),i.rgb){let s=Mt(16777215,0,.3,{emissive:0,transparent:!0,opacity:.9});fr.push(s),t.add(vt(.006,.13,.006,s,0,0,.042))}let n=nn(.09,.016,new Ge({map:mn(dr(i).split(" ").slice(0,2).join(" ").toUpperCase(),{bg:null,fg:"#ddd",font:"bold 30px Arial"}),transparent:!0}));return n.rotation.y=Math.PI/2,n.rotation.z=Math.PI/2,n.position.set(.0034,0,.026),t.add(n),t}function rx(i){let t=new ge,e=i.len,n=i.slots*.02,s=.112;t.add(vt(e-.01,.0016,s,Mt(1323807,.2,.6),e/2-.012,-.001,s/2)),t.add(vt(e-.012,.002,s-.004,Mt(2763824,.7,.4),e/2-.012,.001,s/2));let r=Mt(i.color,.5,.45);t.add(vt(e-.008,n-.004,s+.004,r,e/2-.012,-n/2-.002,s/2+.002));let o=dr(i).replace(/^GeForce\s+/i,""),a=new Ze({map:mn(o.toUpperCase(),{bg:"#151515",fg:"#f2f2f2",font:"bold 34px Arial",w:512,h:64}),emissive:0,emissiveMap:mn(o.toUpperCase(),{bg:"#000",fg:"#fff",font:"bold 34px Arial",w:512,h:64})});mr.push({mat:a,color:16777215,intensity:1.2});let c=nn(Math.min(.2,e*.6),Math.max(.012,n*.4),a,e*.42,-n/2-.002,s+.0045);if(t.add(c),i.accent){let h=Mt(i.accent,.3,.4,{emissive:0});mr.push({mat:h,color:i.accent,intensity:1.5}),t.add(vt(e*.25,.004,.003,h,e*.82,-n/2,s+.004))}let l=Math.min(.092,(e-.03)/i.fans*.96);for(let h=0;h<i.fans;h++){let u=pr(l,i.color,1842204,!1,16);u.rotation.x=Math.PI/2,u.position.set(.012+(e-.03)*(h+.5)/i.fans,-n-.0015,s/2),u.scale.set(1,1,.5),t.add(u)}return t.add(vt(.0015,n+.006,.12,Mt(11579568,.9,.3),-.016,-n/2,.06)),i.pins&&t.add(vt(.02,.008,.006,Mt(1118481),e*.72,-.006,s+.004)),t}function ox(i){let t=new ge;if(i.kind==="m2")return t.add(vt(.08,.022,.0012,Mt(1785126,.2,.6),0,0,6e-4)),t.add(vt(.06,.018,.002,new Ze({map:mn(dr(i).split(" (")[0],{bg:"#0f0f0f",fg:"#ddd",font:"bold 26px Arial"})}),.005,0,.002)),t;if(i.kind==="hdd"){t.add(vt(.147,.026,.102,Mt(9212054,.8,.35)));let n=nn(.1,.07,new Ze({map:mn(dr(i).split(" (")[0].replace(" ",`
`),{bg:"#e8e8e8",fg:"#222",font:"bold 30px Arial",w:256,h:180})}));return n.rotation.x=-Math.PI/2,n.position.y=.0131,t.add(n),t}t.add(vt(.1,.007,.07,Mt(1907999,.5,.4)));let e=nn(.085,.055,new Ze({map:mn(dr(i).split(" (")[0].replace(" ",`
`),{bg:"#2b2f36",fg:"#fff",font:"bold 30px Arial",w:256,h:170})}));return e.rotation.x=-Math.PI/2,e.position.y=.0036,t.add(e),t}function ax(i){let t=new ge;t.add(vt(.15,.086,.14,Mt(1710618,.5,.45)));let e=nn(.11,.05,new Ze({map:mn(`${i.watt} W
${i.name.split(" ")[0]}`,{bg:"#262626",fg:"#f0f0f0",font:"bold 40px Arial",w:256,h:128,border:"#555"})}));return e.position.z=.0705,t.add(e),t.add(vt(.004,.05,.1,Mt(657930),.076,0,0)),t}function cx(i){let t=pr(.12,1381653,i.rgb?14540253:2763306,i.rgb,10);return t.rotation.y=Math.PI/2,t}function Dl(i){return pe[i.slots.mb?.pid]?.form||"ATX"}var Sn=(i,t,e)=>new w(Il+t,ws-e,Ts);function lx(i,t,e){let n=Dl(t),s=Xo[n],r=e?pe[e.pid]:null;if(i==="case")return{pos:new w(0,0,0),size:new w(Le.D,Le.H,Le.W)};if(i==="mb"){let o=r?.form||"ATX",[a,c]=ju[o];return{pos:new w(Il+a/2,ws-c/2,Ts+.003),size:new w(a,c,.008)}}if(i==="cpu")return{pos:Sn(n,...s.socket).add(new w(0,0,.006)),size:new w(.045,.045,.01)};if(i==="cooler")return{pos:Sn(n,...s.socket).add(new w(0,0,.06)),size:new w(.09,.12,.12)};if(i.startsWith("ram")){let o=Number(i[3]);return{pos:Sn(n,s.ram[0]+o*s.ram[1],s.ram[2]).add(new w(0,0,.02)),size:new w(.008,.135,.036)}}if(i==="gpu"){let o=r?.len||.24,a=(r?.slots||2)*.02;return{pos:new w(-Le.D/2+.03+o/2-.012,ws-s.pcie-a/2,Ts+.06),size:new w(o,a,.115)}}if(i.startsWith("m2")){let[o,a]=s.m2[Number(i[3])]||s.m2[0];return{pos:Sn(n,o,a).add(new w(0,0,.003)),size:new w(.08,.024,.006)}}if(Wo[i]){let o=i==="hdd0"?[.147,.026,.102]:[.1,.008,.07];return{pos:new w(...Wo[i]),size:new w(...o)}}return i==="psu"?{pos:new w(...hr),size:new w(.15,.086,.14)}:Cl[i]?{pos:new w(...Cl[i]),size:new w(.026,.12,.12)}:null}function hx(i,t,e){let n=pe[e.pid],s=Dl(t),r=Xo[s],o;switch(n.type){case"case":o=tx(n);break;case"mb":o=ex(n),o.position.set(Il,ws,Ts);break;case"cpu":o=nx(n),o.position.copy(Sn(s,...r.socket));break;case"cooler":o=ix(n),o.position.copy(Sn(s,...r.socket));break;case"ram":{o=sx(n);let a=Number(i[3]);o.position.copy(Sn(s,r.ram[0]+a*r.ram[1],r.ram[2]));break}case"gpu":o=rx(n),o.position.set(-Le.D/2+.03,ws-r.pcie+.004,Ts+.004);break;case"storage":if(o=ox(n),n.kind==="m2"){let[a,c]=r.m2[Number(i[3])]||r.m2[0];o.position.copy(Sn(s,a,c))}else o.position.set(...Wo[i]);break;case"psu":o=ax(n),o.position.set(...hr);break;case"fan":o=cx(n),o.position.set(...Cl[i]);break}return o}function Qu(i,t){let e=Dl(t),n=Xo[e];if(i==="mb24")return Sn(e,n.m24[0]+.006,n.m24[1]).add(new w(0,0,.008));if(i==="cpu8")return Sn(e,n.cpu8[0],n.cpu8[1]-.006).add(new w(0,0,.008));if(i==="gpu"){let r=pe[t.slots.gpu?.pid];return new w(-Le.D/2+.03+(r?.len||.24)*.72,ws-n.pcie-.002,Ts+.124)}let s=Wo[i];return s?new w(s[0]-(i==="hdd0"?.075:.052),s[1],s[2]+.02):new w}var ux=new w(hr[0]+.08,hr[1]+.01,hr[2]+.03);function dx(i,t){let e=Qu(i,t),n=ux.clone().add(new w(0,i.length%3*.01,0)),s;i==="mb24"?s=[n,new w(n.x+.12,n.y+.03,.04),new w(e.x+.05,e.y-.06,.02),new w(e.x+.03,e.y,e.z+.01),e]:i==="cpu8"?s=[n,new w(n.x-.02,n.y+.08,-.04),new w(-Le.D/2+.02,.1,-.06),new w(e.x-.01,e.y+.02,e.z+.02),e]:i==="gpu"?s=[n,new w(n.x+.06,n.y+.04,.08),new w(e.x,e.y-.02,e.z+.03),e]:s=[n,new w(0,n.y-.01,.06),new w(e.x-.03,e.y,e.z+.02),e];let r=new or(s),o=i==="mb24"?.0075:i==="cpu8"||i==="gpu"?.005:.003,a=i.startsWith("sata")||i==="hdd0"?2105376:1118481,c=new Yt(new Po(r,48,o,8,!1),Mt(a,.1,.8));c.castShadow=!0;let l=vt(i==="mb24"?.012:.01,i==="mb24"?.054:.012,.012,Mt(657930,.1,.7),e.x,e.y,e.z);i==="cpu8"&&l.scale.set(2,.8,1);let h=new ge;return h.add(c,l),h}function td(i){let t=new vo({antialias:!0,preserveDrawingBuffer:!0});t.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),t.setSize(i.clientWidth,i.clientHeight),t.shadowMap.enabled=!0,t.shadowMap.type=pl,t.toneMapping=ml,t.toneMappingExposure=1.05,t.outputColorSpace=Pe,i.appendChild(t.domElement);let e=new fs;e.background=new Vt(1909290),e.fog=new yo(1909290,3.5,7);let n=new ds(t);e.environment=n.fromScene(new Go,.04).texture,e.environmentIntensity=.45;let s=new Ie(42,i.clientWidth/i.clientHeight,.02,30),r={pos:new w(.42,1.34,1.18),target:Ss.clone().add(new w(.16,-.02,0))};s.position.copy(r.pos);let o=new Vo(s,t.domElement);o.target.copy(r.target),o.enableDamping=!0,o.dampingFactor=.09,o.minDistance=.28,o.maxDistance=2.2,o.maxPolarAngle=Math.PI*.62,o.screenSpacePanning=!0,o.update(),e.add(new Do(14674175,2761760,.55));let a=new Uo(16777215,1.6);a.position.set(1.4,3,2.2),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),Object.assign(a.shadow.camera,{left:-1.2,right:1.4,top:1.2,bottom:-.6,near:.5,far:7}),a.shadow.bias=-4e-4,e.add(a);let c=new Lo(16767400,6,3,.75,.6,1.4);c.position.set(-.55,1.55,.15),c.target.position.copy(Ss),e.add(c,c.target);let l=new xs(6728447,0,.6,2);l.position.copy(Ss).add(new w(.02,.05,0)),e.add(l);let h=new Yt(new Ai(10,10),Mt(16777215,0,.9,{map:(()=>{let z=ur("floor");return z.repeat.set(8,8),z})()}));h.rotation.x=-Math.PI/2,h.receiveShadow=!0,e.add(h);let u=Mt(3884630,0,.95),d=nn(10,4,u,0,2,-.75);d.receiveShadow=!0,e.add(d);let p=nn(10,4,u,-1.6,2,0);p.rotation.y=Math.PI/2,e.add(p);let g=nn(1.3,.62,Mt(16777215,0,.9,{map:(()=>{let z=ur("peg").clone();return z.needsUpdate=!0,z.repeat.set(10,5),z})()}),.05,1.42,-.745);e.add(g);let _=Mt(13777450,.3,.5),m=Mt(12106946,.9,.3);e.add(vt(.02,.16,.012,_,-.45,1.45,-.735),vt(.006,.12,.006,m,-.45,1.32,-.735)),e.add(vt(.02,.14,.012,Mt(15778841,.3,.5),-.38,1.47,-.735),vt(.005,.1,.005,m,-.38,1.35,-.735)),e.add(vt(.16,.05,.03,Mt(3046865,.3,.5),.45,1.5,-.73)),e.add(vt(.03,.18,.02,Mt(3355443,.4,.5),.28,1.42,-.735));let f=nn(.62,.12,new Ge({map:mn("PC BUILD SIM \xB7 \u041C\u0410\u0421\u0422\u0415\u0420\u0421\u041A\u0410\u042F",{bg:"#10151c",fg:"#ffcc33",font:"bold 44px Arial",w:1024,h:200,border:"#ffcc33"})}),.05,1.86,-.74);e.add(f);let E=Mt(16777215,.05,.7,{map:(()=>{let z=ur("wood");return z.repeat.set(2,1),z})()}),S=vt(1.9,.04,.85,E,.25,Je-.02,-.15);e.add(S);let b=Mt(2236962,.7,.4);for(let[z,$]of[[-.65,-.52],[1.15,-.52],[-.65,.22],[1.15,.22]])e.add(vt(.04,Je-.04,.04,b,z,(Je-.04)/2,$));e.add(vt(.62,.003,.42,Mt(1713459,0,.95),.02,Je+.0015,0)),e.add(vt(.2,.08,.14,Mt(10254927,0,.85),-.55,Je+.04,-.35)),e.add(vt(.16,.06,.12,Mt(11832667,0,.85),-.55,Je+.11,-.35));let I=ai(.008,.11,_);I.rotation.z=Math.PI/2,I.position.set(-.32,Je+.008,.2),e.add(I);let A=ai(.002,.08,m);A.rotation.z=Math.PI/2,A.position.set(-.225,Je+.008,.2),e.add(A);let R=new ge,P=Mt(1118742,.4,.45);R.add(vt(.56,.33,.02,P,0,.27,0));let M=document.createElement("canvas");M.width=1024,M.height=576;let v=new ms(M);v.colorSpace=Pe;let C=nn(.535,.301,new Ge({map:v,toneMapped:!1}),0,.27,.0105);R.add(C),R.add(vt(.04,.16,.03,P,0,.08,-.03)),R.add(vt(.22,.012,.16,P,0,.006,-.02)),R.position.set(.56,Je,-.22),R.rotation.y=-.3,e.add(R),e.add(vt(.36,.018,.12,Mt(1776415,.3,.6),.66,Je+.009,.16));let G=Mt(2894898,.2,.7);for(let z=0;z<4;z++)for(let $=0;$<15;$++)e.add(vt(.018,.006,.018,G,.66-.16+$*.0228,Je+.021,.16-.04+z*.025));e.add(vt(.06,.025,.1,Mt(1776415,.3,.5),.92,Je+.0125,.18));let F=new ge;F.position.copy(Ss),e.add(F);let W=new ge;F.add(W);let tt=new ge;F.add(tt);let q=new ge;F.add(q);let nt=new ge;e.add(nt);let X={},lt=null,pt=!1,St=!1,Nt=[];function Zt(z){z.traverse($=>{$.geometry&&$.geometry.dispose(),$.material&&(Array.isArray($.material)?$.material:[$.material]).forEach(rt=>rt.dispose())})}function K(z,{animateSlot:$=null}={}){for(let B of Object.keys(X))F.remove(X[B]),Zt(X[B]),delete X[B];tt.children.slice().forEach(B=>{tt.remove(B),Zt(B)}),nt.children.slice().forEach(B=>{nt.remove(B),Zt(B)}),Pl=[],fr=[],mr=[];let rt=["case","mb","cpu","cooler","ram0","ram1","ram2","ram3","gpu","m2_0","m2_1","sata0","sata1","hdd0","psu","fanF0","fanF1","fanR0"];St=!1;for(let B of rt){let Z=z.slots[B];if(!Z)continue;let ot=hx(B,z,Z);ot&&(ot.userData.pick={kind:"part",slot:B},ot.traverse(ct=>{ct.isMesh&&(ct.castShadow=!0,ct.receiveShadow=!0)}),F.add(ot),X[B]=ot,pe[Z.pid].rgb&&(St=!0),Z.broken&&st(ot),Z.dirty&&yt(B,ot))}for(let B of Object.keys(z.cables))z.slots.psu&&tt.add(dx(B,z));if($&&X[$]){let B=X[$],Z=B.position.clone(),ot=$==="case"?new w(0,.25,0):["psu","hdd0","sata0","sata1"].includes($)?new w(0,0,.22):new w(0,.02,.18);B.position.add(ot),lt={g:B,from:B.position.clone(),to:Z,t0:performance.now(),dur:380}}ae()}function st(z){z.userData.broken=!0}function yt(z,$){F.updateMatrixWorld(!0);let rt=new yn().setFromObject($);if(rt.isEmpty())return;let B=Math.min(900,Math.max(120,Math.round(rt.getSize(new w).length()*1600))),Z=new Float32Array(B*3);for(let it=0;it<B;it++)Z[it*3]=oi.lerp(rt.min.x,rt.max.x,Math.random()),Z[it*3+1]=oi.lerp(rt.min.y,rt.max.y,Math.random()),Z[it*3+2]=oi.lerp(rt.min.z,rt.max.z,Math.random());let ot=new De;ot.setAttribute("position",new Be(Z,3));let ct=new So(ot,new rr({color:10130570,size:.0045,transparent:!0,opacity:.9,depthWrite:!1}));ct.userData.slot=z,nt.add(ct),$.traverse(it=>{it.isMesh&&it.material&&it.material.color&&!it.material.map&&(it.material=it.material.clone(),it.material.color.lerp(new Vt(9275260),.28),it.material.roughness=1)})}function ut(z){let $=nt.children.find(Z=>Z.userData.slot===z);if(!$)return;nt.remove($),e.add($);let rt=$.geometry.attributes.position.count,B=new Float32Array(rt*3);for(let Z=0;Z<rt;Z++)B[Z*3]=(Math.random()-.3)*.6,B[Z*3+1]=Math.random()*.5,B[Z*3+2]=.3+Math.random()*.8;Nt.push({pts:$,vel:B,t:0})}function It(z,$,rt){W.children.slice().forEach(B=>{W.remove(B),Zt(B)});for(let B of z){let Z=lx(B.slot,$,rt);if(!Z)continue;let ot=B.ok?3997583:16731469,ct=new Yt(new en(Z.size.x+.004,Z.size.y+.004,Z.size.z+.004),new Ge({color:ot,transparent:!0,opacity:.22,depthWrite:!1}));ct.position.copy(Z.pos);let it=new sr(new Ao(ct.geometry),new ps({color:ot}));ct.add(it),ct.userData.pick={kind:"ghost",slot:B.slot,ok:B.ok,reason:B.reason},ct.renderOrder=10,W.add(ct)}}function Lt(z,$){q.children.slice().forEach(rt=>{q.remove(rt),Zt(rt)});for(let rt of z){let B=Qu(rt.id,$),Z=rt.connected?3997583:16762161,ot=new Yt(new Ro(rt.id==="mb24"?.014:.011,16,12),new Ge({color:Z,transparent:!0,opacity:.75,depthTest:!1}));ot.position.copy(B),ot.renderOrder=20,ot.userData.pick={kind:"cable",id:rt.id,connected:rt.connected},ot.userData.pulse=!rt.connected,q.add(ot)}}function Gt(z){pt=z,ae()}function ae(){for(let z of mr)z.mat.emissive.setHex(pt?z.color:0),z.mat.emissiveIntensity=z.intensity;l.intensity=pt&&St?.35:0,pt||fr.forEach(z=>z.emissive.setHex(0))}let qt=new No,fe=new xt,D=null,ve=new Oo(new be,16763955);ve.visible=!1,e.add(ve);let Wt={pick:()=>{},hover:()=>{}};function Xt(z,$){let rt=t.domElement.getBoundingClientRect();fe.set((z-rt.left)/rt.width*2-1,-(($-rt.top)/rt.height)*2+1),qt.setFromCamera(fe,s);let B=[...q.children,...W.children,...Object.values(X)],Z=qt.intersectObjects(B,!0),ot={cable:0,ghost:1,part:2},ct=null;for(let it of Z){let Dt=it.object;for(;Dt&&!Dt.userData.pick;)Dt=Dt.parent;if(!Dt)continue;let Pt=Dt.userData.pick;if((!ct||ot[Pt.kind]<ot[ct.pick.kind]||ot[Pt.kind]===ot[ct.pick.kind]&&it.distance<ct.dist-1e-6&&!1)&&(ct={pick:Pt,obj:Dt,dist:it.distance}),Pt.kind==="cable")break}if(ct&&ct.pick.kind==="part"&&ct.pick.slot==="case"){let it=Z.find(Pt=>{let Ot=Pt.object;for(;Ot&&!Ot.userData.pick;)Ot=Ot.parent;return Ot&&Ot.userData.pick.kind==="part"&&Ot.userData.pick.slot!=="case"}),Dt=Z.find(Pt=>{let Ot=Pt.object;for(;Ot&&!Ot.userData.pick;)Ot=Ot.parent;return Ot&&Ot.userData.pick.slot==="case"});if(it&&Dt&&it.distance<Dt.distance+.001){let Pt=it.object;for(;!Pt.userData.pick;)Pt=Pt.parent;ct={pick:Pt.userData.pick,obj:Pt}}}return ct}let Rt=null;t.domElement.addEventListener("pointerdown",z=>{Rt={x:z.clientX,y:z.clientY,t:performance.now()}}),t.domElement.addEventListener("pointerup",z=>{if(!Rt)return;let $=Math.hypot(z.clientX-Rt.x,z.clientY-Rt.y);if(Rt=null,$>6)return;let rt=Xt(z.clientX,z.clientY);Wt.pick(rt?rt.pick:null,z.clientX,z.clientY)}),t.domElement.addEventListener("pointermove",z=>{if(z.pointerType==="touch")return;let $=Xt(z.clientX,z.clientY),rt=$?JSON.stringify($.pick):null;rt!==(D&&D.key)&&(D=$?{...$,key:rt}:null,D&&D.pick.kind==="part"?(ve.setFromObject(D.obj),ve.visible=!0):ve.visible=!1,W.children.forEach(B=>{B.material.opacity=D&&D.obj===B?.45:.22}),t.domElement.style.cursor=D?"pointer":"grab"),Wt.hover(D?D.pick:null,z.clientX,z.clientY)}),t.domElement.addEventListener("pointerleave",()=>{ve.visible=!1,Wt.hover(null)});let ee={pos:r.pos.clone(),target:r.target.clone()},Ct=null;function T(){let z=i.clientWidth,$=i.clientHeight;t.setSize(z,$);let rt=z/$;s.aspect=rt;let B=Math.tan(oi.degToRad(21))*1.6;s.fov=rt>=1.6?42:Math.min(72,oi.radToDeg(2*Math.atan(B/rt))),s.updateProjectionMatrix();let Z=rt<1.1;if(r.target.copy(ee.target),r.pos.copy(ee.pos),Z){r.target.x=Ss.x+.01,r.target.y=Ss.y-.03;let ot=r.pos.clone().sub(ee.target),ct=rt<.7?.82:.95;r.pos.copy(r.target).add(ot.multiplyScalar(ct)),r.pos.x=r.target.x+.08}Ct!==null&&Ct!==Z&&k(),Ct===null&&(s.position.copy(r.pos),o.target.copy(r.target),o.update()),Ct=Z}window.addEventListener("resize",T),T();let x=null;function k(){x={fromP:s.position.clone(),toP:r.pos.clone(),fromT:o.target.clone(),toT:r.target.clone(),t0:performance.now()}}function j(){let z=R.localToWorld(new w(0,.27,0)),$=R.localToWorld(new w(0,.29,.75));x={fromP:s.position.clone(),toP:$,fromT:o.target.clone(),toT:z,t0:performance.now()}}let et=performance.now(),J=()=>{};function bt(z){let $=Math.min(.05,(z-et)/1e3);if(et=z,lt){let B=Math.min(1,(z-lt.t0)/lt.dur),Z=1-Math.pow(1-B,3);lt.g.position.lerpVectors(lt.from,lt.to,Z),B>=1&&(lt=null)}if(x){let B=Math.min(1,(z-x.t0)/600),Z=B<.5?2*B*B:1-Math.pow(-2*B+2,2)/2;s.position.lerpVectors(x.fromP,x.toP,Z),o.target.lerpVectors(x.fromT,x.toT,Z),B>=1&&(x=null)}if(pt){for(let Z of Pl)Z.obj.rotation.z+=Z.speed*$;let B=z/4e3%1;fr.forEach((Z,ot)=>{Z.emissive.setHSL((B+ot*.07)%1,1,.5),Z.emissiveIntensity=1.6}),St&&l.color.setHSL(B,1,.55)}let rt=.45+Math.sin(z/180)*.3;q.children.forEach(B=>{B.userData.pulse&&(B.material.opacity=rt)});for(let B=Nt.length-1;B>=0;B--){let Z=Nt[B];Z.t+=$;let ot=Z.pts.geometry.attributes.position;for(let ct=0;ct<ot.count;ct++)ot.array[ct*3]+=Z.vel[ct*3]*$,ot.array[ct*3+1]+=Z.vel[ct*3+1]*$,ot.array[ct*3+2]+=Z.vel[ct*3+2]*$;ot.needsUpdate=!0,Z.pts.material.opacity=Math.max(0,.9-Z.t*.9),Z.t>1.1&&(e.remove(Z.pts),Zt(Z.pts),Nt.splice(B,1))}ve.visible&&D?.obj&&ve.setFromObject(D.obj),o.update(),J(z,$),t.render(e,s),requestAnimationFrame(bt)}return requestAnimationFrame(bt),{setBuild:K,setGhosts:It,setCablePoints:Lt,setPower:Gt,blowDust:ut,resetCamera:k,lookAtScreen:j,screen:{canvas:M,texture:v},on(z,$){Wt[z]=$},set onFrame(z){J=z},renderer:t,camera:s,caseRoot:F,ghostRoot:W,pointRoot:q,project(z){let $=new w;z.getWorldPosition($),$.project(s);let rt=t.domElement.getBoundingClientRect();return{x:rt.left+($.x+1)/2*rt.width,y:rt.top+(1-$.y)/2*rt.height}}}}function ed(i,t){let e=i.getContext("2d"),n=i.width,s=i.height,r={mode:"off",t0:performance.now()},o=!0;function a(E,S={}){r={mode:E,t0:performance.now(),...S},o=!0}let c=(E,S="#d0d0d0")=>{e.font=`${E}px "Courier New", monospace`,e.fillStyle=S,e.textAlign="left",e.textBaseline="top"},l=(E,S="#fff",b="bold",I="left")=>{e.font=`${b} ${E}px Arial, sans-serif`,e.fillStyle=S,e.textAlign=I,e.textBaseline="middle"};function h(E,S){let b=E.split(" "),I=[],A="";for(let R of b){let P=A?A+" "+R:R;e.measureText(P).width>S&&A?(I.push(A),A=R):A=P}return A&&I.push(A),I}function u(E){e.fillStyle="#000",e.fillRect(0,0,n,s);let S=["American Megatrends BIOS v2.21",`\u041C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u0430\u044F \u043F\u043B\u0430\u0442\u0430: ${r.mb||"\u2014"}`,`\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440: ${r.cpu||"\u2014"}`,`\u041F\u0430\u043C\u044F\u0442\u044C: ${r.ram||0} \u041C\u0411 ... OK`,`\u0412\u0438\u0434\u0435\u043E: ${r.gpu||"\u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u0433\u0440\u0430\u0444\u0438\u043A\u0430"}`,`\u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438: ${r.drives||"\u043D\u0435\u0442"}`];c(24,"#cfcfcf");let b=Math.min(S.length,Math.floor(E/180)+1);for(let I=0;I<b;I++)e.fillText(S[I],40,40+I*34);r.error&&E>1300&&(c(26,"#ff5555"),h(r.error,n-80).forEach((I,A)=>e.fillText(I,40,300+A*34)),c(20,"#888"),e.fillText("\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C\xBB, \u0447\u0442\u043E\u0431\u044B \u0438\u0441\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443",40,s-50))}function d(E){e.fillStyle="#000",e.fillRect(0,0,n,s);let S=n/2,b=s/2-30,I=46;e.fillStyle="#2b8cff";for(let[A,R]of[[-1,-1],[1,-1],[-1,1],[1,1]])e.fillRect(S+(A<0?-I-3:3),b+(R<0?-I-3:3),I,I);for(let A=0;A<6;A++){let R=E/300+A*.5;e.fillStyle=`rgba(255,255,255,${1-A*.15})`,e.beginPath(),e.arc(S+Math.cos(R)*26,b+130+Math.sin(R)*26,4,0,7),e.fill()}l(22,"#aaa","normal","center"),e.fillText(r.install?"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B\u2026":"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026",S,s-60)}function p(E){let S=e.createLinearGradient(0,0,n,s);S.addColorStop(0,"#0b3d91"),S.addColorStop(1,"#1b8fd6"),e.fillStyle=S,e.fillRect(0,0,n,s),e.fillStyle="rgba(255,255,255,0.08)",e.beginPath(),e.ellipse(n*.7,s*.55,380,160,-.4,0,7),e.fill(),[["\u{1F4BB}","\u042D\u0442\u043E\u0442 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440"],["\u{1F4CA}","\u0411\u0435\u043D\u0447\u043C\u0430\u0440\u043A"],["\u{1F5D1}\uFE0F","\u041A\u043E\u0440\u0437\u0438\u043D\u0430"]].forEach(([R,P],M)=>{l(44,"#fff","normal","center"),e.fillText(R,70,70+M*110),l(16,"#fff","normal","center"),e.fillText(P,70,112+M*110)}),e.fillStyle="rgba(20,24,32,0.92)",e.fillRect(n-470,50,420,260),e.fillStyle="#2b8cff",e.fillRect(n-470,50,420,34),l(18,"#fff","bold"),e.fillText("\u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E \u0441\u0438\u0441\u0442\u0435\u043C\u0435",n-455,67),[["\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440",r.cpu],["\u0412\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430",r.gpu||"\u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F"],["\u041F\u0430\u043C\u044F\u0442\u044C",`${(r.ram||0)/1024} \u0413\u0411`],["\u041D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C",r.drives],["\u0422\u0435\u043C\u043F. CPU",r.cpuTemp?r.cpuTemp+" \xB0C":"\u2014"]].forEach(([R,P],M)=>{l(17,"#8fa3bf","normal"),e.fillText(R,n-450,112+M*38),l(17,"#fff","bold"),e.fillText(String(P||"\u2014").slice(0,30),n-320,112+M*38)}),e.fillStyle="rgba(10,12,18,0.9)",e.fillRect(0,s-44,n,44),e.fillStyle="#2b8cff",e.fillRect(12,s-36,28,28);let A=new Date;l(18,"#fff","normal","right"),e.fillText(A.toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"}),n-20,s-22)}function g(E){let S=r.dur||6e3,b=Math.min(1,E/S);e.fillStyle="#05070c",e.fillRect(0,0,n,s);let I=E/1e3;for(let P=0;P<160;P++){let M=P*97.13%1,v=(P*31.7+I*(.4+M))%1,C=P*2.39,G=n/2+Math.cos(C)*v*n*.7,F=s/2+Math.sin(C)*v*s*.7;e.fillStyle=`rgba(150,200,255,${v})`,e.fillRect(G,F,2+v*3,2+v*3)}e.save(),e.translate(n/2,s/2);let A=[];for(let P=0;P<8;P++){let[M,v,C]=[P&1?1:-1,P&2?1:-1,P&4?1:-1],G=I*1.1,F=I*.7;[M,C]=[M*Math.cos(G)-C*Math.sin(G),M*Math.sin(G)+C*Math.cos(G)],[v,C]=[v*Math.cos(F)-C*Math.sin(F),v*Math.sin(F)+C*Math.cos(F)];let W=260/(C+4);A.push([M*W,v*W])}e.strokeStyle="#ffcc33",e.lineWidth=3;for(let[P,M]of[[0,1],[1,3],[3,2],[2,0],[4,5],[5,7],[7,6],[6,4],[0,4],[1,5],[2,6],[3,7]])e.beginPath(),e.moveTo(...A[P]),e.lineTo(...A[M]),e.stroke();e.restore();let R=Math.max(1,Math.round((r.fps||60)*(.9+Math.sin(E/230)*.08+Math.random()*.04)));l(30,"#fff","bold"),e.fillText(`FPS: ${R}`,30,40),l(18,"#9fb3d1","normal"),e.fillText(`CPU ${Math.round(40+(r.cpuTemp-40)*b)} \xB0C   GPU ${Math.round(40+((r.gpuTemp||40)-40)*b)} \xB0C`,30,78),l(20,"#fff","bold","right"),e.fillText("3D BENCH SIM",n-30,40),e.fillStyle="#222",e.fillRect(30,s-40,n-60,12),e.fillStyle="#ffcc33",e.fillRect(30,s-40,(n-60)*b,12)}function _(){p(0),e.fillStyle="rgba(10,14,22,0.95)",e.fillRect(n/2-300,s/2-170,600,320),e.strokeStyle="#ffcc33",e.lineWidth=3,e.strokeRect(n/2-300,s/2-170,600,320),l(26,"#ffcc33","bold","center"),e.fillText("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0442\u0435\u0441\u0442\u0430",n/2,s/2-125),l(86,"#fff","bold","center"),e.fillText(String(r.score),n/2,s/2-30),l(22,"#9fb3d1","normal","center"),e.fillText(`\u2248 ${r.fps} FPS \u0432 \u0438\u0433\u0440\u0430\u0445 \xB7 CPU ${r.cpuTemp} \xB0C \xB7 GPU ${r.gpuTemp||"\u2014"} \xB0C`,n/2,s/2+50),r.throttle&&(l(20,"#ff7755","bold","center"),e.fillText("\u26A0 \u041F\u0435\u0440\u0435\u0433\u0440\u0435\u0432: \u0447\u0430\u0441\u0442\u043E\u0442\u044B \u0441\u043D\u0438\u0436\u0435\u043D\u044B!",n/2,s/2+95))}function m(E){let S=E-r.t0;switch(r.mode){case"off":e.fillStyle="#050505",e.fillRect(0,0,n,s);break;case"nosignal":e.fillStyle="#000",e.fillRect(0,0,n,s),e.fillStyle="#16213a",e.fillRect(n/2-170,s/2-40,340,80),l(26,"#cfd8ea","bold","center"),e.fillText("\u041D\u0435\u0442 \u0441\u0438\u0433\u043D\u0430\u043B\u0430",n/2,s/2);break;case"post":u(S);break;case"boot":d(S);break;case"desktop":p(S);break;case"bench":g(S);break;case"result":_();break}t.needsUpdate=!0}function f(E){let S=["post","boot","bench"].includes(r.mode)||r.mode==="nosignal"&&E-r.t0<100;(o||S||r.mode==="desktop"&&Math.floor(E/1e3)!==r.sec)&&(m(E),o=!1,r.sec=Math.floor(E/1e3))}return m(performance.now()),{set:a,tick:f,get mode(){return r.mode}}}var As=null,qo=!0,gr=null;function Ul(){if(!As){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;As=new i}return As.state==="suspended"&&As.resume(),As}function ke(i,t=.1,e="sine",n=.15,s=0,r=0){if(!qo)return;let o=Ul();if(!o)return;let a=o.currentTime+s,c=o.createOscillator(),l=o.createGain();c.type=e,c.frequency.setValueAtTime(i,a),r&&c.frequency.exponentialRampToValueAtTime(Math.max(30,i+r),a+t),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(n,a+.008),l.gain.exponentialRampToValueAtTime(1e-4,a+t),c.connect(l).connect(o.destination),c.start(a),c.stop(a+t+.02)}function Ll(i=.3,t=.2,e=1200,n=0){if(!qo)return;let s=Ul();if(!s)return;let r=Math.floor(s.sampleRate*i),o=s.createBuffer(1,r,s.sampleRate),a=o.getChannelData(0);for(let u=0;u<r;u++)a[u]=(Math.random()*2-1)*(1-u/r);let c=s.createBufferSource();c.buffer=o;let l=s.createBiquadFilter();l.type="bandpass",l.frequency.value=e,l.Q.value=.7;let h=s.createGain();h.gain.value=t,c.connect(l).connect(h).connect(s.destination),c.start(s.currentTime+n)}var jt={click:()=>ke(900,.04,"square",.04),select:()=>ke(660,.06,"triangle",.08),install:()=>{Ll(.06,.25,500),ke(180,.09,"square",.08,.02,-60),ke(1400,.03,"square",.05,.07)},remove:()=>{ke(300,.08,"triangle",.08,0,200),Ll(.05,.15,900)},error:()=>{ke(220,.12,"sawtooth",.07),ke(170,.18,"sawtooth",.07,.12)},cash:()=>{ke(1320,.08,"square",.06),ke(1760,.16,"square",.06,.08)},blow:()=>Ll(.5,.35,2600),cable:()=>{ke(500,.04,"square",.06),ke(800,.04,"square",.05,.05)},postBeep:()=>ke(1e3,.18,"square",.06),beepCode(i){let t=0,e=/длин/.test(i),n=Number((i.match(/(\d)\s*корот/)||[])[1]||0);if(/повтор/.test(i)){for(let s=0;s<3;s++)ke(880,.45,"square",.06,t),t+=.65;return}e&&(ke(880,.5,"square",.06,t),t+=.7);for(let s=0;s<n;s++)ke(880,.12,"square",.06,t),t+=.25},levelUp:()=>[523,659,784,1046].forEach((i,t)=>ke(i,.18,"triangle",.1,t*.1))};function _r(i){qo||(i=!1);let t=i?Ul():As;if(t){if(i&&!gr){let e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),s=n.getChannelData(0);for(let c=0;c<e;c++)s[c]=Math.random()*2-1;let r=t.createBufferSource();r.buffer=n,r.loop=!0;let o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=380;let a=t.createGain();a.gain.value=0,a.gain.linearRampToValueAtTime(.05,t.currentTime+.8),r.connect(o).connect(a).connect(t.destination),r.start(),gr={s:r,g:a}}else if(!i&&gr){let e=gr;gr=null,e.g.gain.linearRampToValueAtTime(0,t.currentTime+.5),setTimeout(()=>e.s.stop(),600)}}}function Nl(i){qo=i,i||_r(!1)}var dt=i=>document.querySelector(i),Bl=i=>[...document.querySelectorAll(i)],$t=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),kl=i=>O.sandbox&&i===O.money?"\u221E":"$"+Math.round(i).toLocaleString("ru-RU").replace(/\u00a0/g," ");uh();Nl(O.settings.sound);var oe=td(dt("#view")),gn=ed(oe.screen.canvas,oe.screen.texture);oe.onFrame=i=>gn.tick(i);var zt={selected:null,tool:null,powered:!1,busy:!1,timers:[]};function de(i,t=""){let e=document.createElement("div");e.className="toast "+t,e.innerHTML=i,dt("#toasts").appendChild(e),setTimeout(()=>e.classList.add("out"),3600),setTimeout(()=>e.remove(),4e3),t==="err"&&jt.error()}function li(i,t=""){dt("#modalBox").className="modal-box "+t,dt("#modalBox").innerHTML=`<button class="m-close" data-close>\xD7</button>${i}`,dt("#modal").classList.remove("hidden")}function Ni(){dt("#modal").classList.add("hidden")}dt("#modal").addEventListener("click",i=>{(i.target.id==="modal"||i.target.closest("[data-close]"))&&Ni()});function Ke(i){dt("#hint").innerHTML=i,dt("#hint").classList.toggle("hidden",!i)}function Cs(){dt("#money").textContent=kl(O.money),dt("#day").textContent=O.sandbox?"\u041F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u0430":`\u0414\u0435\u043D\u044C ${O.day}`;let i=Fi();dt("#lvl").textContent=O.sandbox?"\u221E":i;let t=zs[i-1]||0,e=zs[i]||t+1e3;dt("#xpFill").style.width=O.sandbox?"100%":Math.min(100,(O.xp-t)/(e-t)*100)+"%",dt("#xpText").textContent=O.sandbox?"\u0432\u0441\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u044B":`${O.xp-t} / ${e-t} XP`,dt("#mailCount").textContent=O.inbox.length,dt("#mailCount").classList.toggle("hidden",!O.inbox.length||O.sandbox),dt("#btnMail").classList.toggle("hidden",O.sandbox),dt("#btnSound").textContent=O.settings.sound?"\u{1F50A}":"\u{1F507}"}var Rs="all";function fx(i){let t=[];return i.client&&t.push('<span class="tag tag-client">\u043A\u043B\u0438\u0435\u043D\u0442\u0430</span>'),i.tested&&i.broken&&t.push('<span class="tag tag-bad">\u043D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u043D\u0430</span>'),i.tested&&!i.broken&&t.push('<span class="tag tag-ok">\u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u0430</span>'),i.dirty&&t.push('<span class="tag tag-dust">\u043F\u044B\u043B\u044C</span>'),t.join("")}function ci(){let i=["all",...Ds.filter(e=>O.inventory.some(n=>pe[n.pid].type===e))];i.includes(Rs)||(Rs="all"),dt("#invTabs").innerHTML=i.map(e=>`<button class="${e===Rs?"active":""}" data-f="${e}" title="${e==="all"?"\u0412\u0441\u0435":wn[e].name}">${e==="all"?"\u0412\u0441\u0435":wn[e].icon}</button>`).join("");let t=O.inventory.filter(e=>Rs==="all"||pe[e.pid].type===Rs).sort((e,n)=>Ds.indexOf(pe[e.pid].type)-Ds.indexOf(pe[n.pid].type));dt("#invCount").textContent=O.inventory.length,dt("#invList").innerHTML=t.length?t.map(e=>{let n=pe[e.pid];return`<div class="inv-item ${zt.selected===e.uid?"sel":""}" data-uid="${e.uid}">
      <div class="ii-icon">${wn[n.type].icon}</div>
      <div class="ii-body"><div class="ii-name">${$t(n.name)}</div><div class="ii-spec">${$t(Us(n))}</div><div>${fx(e)}</div></div>
    </div>`}).join(""):`<div class="empty">\u041F\u0443\u0441\u0442\u043E.<br>\u041A\u0443\u043F\u0438\u0442\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u0432 <a href="#" data-open="shop">\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435</a>${O.job?" \u0438\u043B\u0438 \u0441\u043D\u0438\u043C\u0438\u0442\u0435 \u0441\u043E \u0441\u0442\u0435\u043D\u0434\u0430":""}.</div>`,px()}function px(){let i=O.inventory.find(s=>s.uid===zt.selected),t=dt("#invDetail");if(!i){t.classList.add("hidden");return}let e=pe[i.pid],n=i.broken&&i.tested?0:Math.round(e.price*.5);t.classList.remove("hidden"),t.innerHTML=`<div class="d-title">${wn[e.type].icon} ${$t(e.name)}</div>
    <div class="d-spec">${$t(Us(e))}</div>
    <div class="d-state">\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435: ${i.tested?i.broken?'<b class="bad">\u043D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u043D\u0430</b>':'<b class="ok">\u0438\u0441\u043F\u0440\u0430\u0432\u043D\u0430</b>':"\u043D\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u0430"}${i.dirty?" \xB7 \u0432 \u043F\u044B\u043B\u0438":""}</div>
    <div class="d-hint">\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 <b class="ok">\u0437\u0435\u043B\u0451\u043D\u0443\u044E</b> \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0432 \u043A\u043E\u0440\u043F\u0443\u0441\u0435, \u0447\u0442\u043E\u0431\u044B \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C.</div>
    <div class="d-actions">
      ${i.tested?"":'<button class="btn btn-dark" id="dTest">\u{1F52C} \u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043D\u0430 \u0442\u0435\u0441\u0442\u0435\u0440\u0435 \xB7 $5</button>'}
      ${i.dirty?'<button class="btn btn-dark" id="dClean">\u{1F4A8} \u041F\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C</button>':""}
      ${i.client?'<span class="muted small">\u0414\u0435\u0442\u0430\u043B\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u2014 \u043F\u0440\u043E\u0434\u0430\u0442\u044C \u043D\u0435\u043B\u044C\u0437\u044F</span>':`<button class="btn btn-dark" id="dSell">${n?`\u041F\u0440\u043E\u0434\u0430\u0442\u044C \u0437\u0430 $${n}`:"\u0412\u044B\u0431\u0440\u043E\u0441\u0438\u0442\u044C"}</button>`}
      <button class="btn btn-ghost" id="dCancel">\u041E\u0442\u043C\u0435\u043D\u0430</button>
    </div>`,dt("#dTest")?.addEventListener("click",()=>{id(5)&&(i.tested=!0,ye(),jt.click(),de(i.broken?`\u274C ${$t(e.name)} \u2014 <b>\u043D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u043D\u0430</b>`:`\u2705 ${$t(e.name)} \u2014 \u0438\u0441\u043F\u0440\u0430\u0432\u043D\u0430`,i.broken?"err":"ok"),ci())}),dt("#dClean")?.addEventListener("click",()=>{i.dirty=!1,ye(),jt.blow(),ci()}),dt("#dSell")?.addEventListener("click",()=>{O.inventory=O.inventory.filter(s=>s!==i),O.sandbox||(O.money+=n),zt.selected=null,ye(),n?jt.cash():jt.remove(),de(n?`\u041F\u0440\u043E\u0434\u0430\u043D\u043E: ${$t(e.name)} +$${n}`:`\u0412\u044B\u0431\u0440\u043E\u0448\u0435\u043D\u043E: ${$t(e.name)}`),Jo(),Wn()}),dt("#dCancel").addEventListener("click",()=>Ko(null))}dt("#invTabs").addEventListener("click",i=>{let t=i.target.closest("button");t&&(Rs=t.dataset.f,ci())});dt("#invList").addEventListener("click",i=>{let t=i.target.closest(".inv-item");t&&Ko(Number(t.dataset.uid)===zt.selected?null:Number(t.dataset.uid))});document.addEventListener("click",i=>{let t=i.target.closest("[data-open]");t&&(i.preventDefault(),t.dataset.open==="shop"?cd():ad())});function id(i){return O.sandbox?!0:O.money<i?(de("\u041D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0434\u0435\u043D\u0435\u0433","err"),!1):(O.money-=i,Cs(),!0)}function Jo(){oe.setGhosts([],O.bench)}function Ko(i){xr(null),zt.selected=i,jo();let t=O.inventory.find(s=>s.uid===i);if(!t){Jo(),Ui(),ci();return}jt.select();let e=th(O.bench,t);oe.setGhosts(e,O.bench,t);let n=pe[t.pid];if(e.length)e.some(s=>s.ok)?Ke(`\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 <b class="ok">\u0437\u0435\u043B\u0451\u043D\u0443\u044E</b> \u043E\u0431\u043B\u0430\u0441\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C <b>${$t(n.name)}</b>. Esc \u2014 \u043E\u0442\u043C\u0435\u043D\u0430.`):Ke(`\u26A0 ${$t(e[0].reason)}`);else{let s=Object.keys(Qe).find(o=>Qe[o].type===n.type&&(!Qe[o].kind||Qe[o].kind===n.kind)),r=Er(O.bench,t,s);Ke(`\u26A0 \u041D\u0435\u043A\u0443\u0434\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C: ${$t(r.reason==="\u0421\u043B\u043E\u0442 \u0437\u0430\u043D\u044F\u0442"?"\u0432\u0441\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0441\u043B\u043E\u0442\u044B \u0437\u0430\u043D\u044F\u0442\u044B":r.reason)}`)}ci()}function Hl(){zt.powered&&(Gn(),de("\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D \u2014 \u0441 \u0434\u0435\u0442\u0430\u043B\u044F\u043C\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u043E\u043C \u041F\u041A"))}function mx(i){dt("#tooltip").classList.add("hidden");let t=O.inventory.find(s=>s.uid===zt.selected);if(!t)return;Hl();let e=eh(O.bench,t,i);if(!e.ok){de($t(e.reason),"err");return}O.inventory=O.inventory.filter(s=>s!==t),zt.selected=null,jt.install(),ye(),oe.setBuild(O.bench,{animateSlot:i}),Jo(),Wn(),Ui();let n=pe[t.pid];Yn(O.bench).some(s=>!O.bench.cables[s])&&O.bench.slots.psu&&["mb","gpu","storage","psu"].includes(n.type)&&de("\u041D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C\u0442\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043A\u0430\u0431\u0435\u043B\u0438: \u043A\u043D\u043E\u043F\u043A\u0430 <b>\u{1F50C} \u041A\u0430\u0431\u0435\u043B\u0438</b>")}function gx(i){Hl();let t=nh(O.bench,i);if(!t.ok){de($t(t.reason),"err");return}O.inventory.push(t.item),jt.remove(),ye(),oe.setBuild(O.bench),zt.tool==="cables"&&Vl(),Wn()}function _x(i,t,e){let n=O.bench.slots[i];if(!n)return;let s=pe[n.pid],r=ea(O.bench,i),o=dt("#ctx");o.innerHTML=`<div class="ctx-title">${wn[s.type].icon} ${$t(s.name)}</div>
    <div class="ctx-spec">${$t(Us(s))}</div>
    ${n.client?'<div class="ctx-spec">\u0414\u0435\u0442\u0430\u043B\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430</div>':""}
    ${n.dirty?'<button data-a="clean">\u{1F4A8} \u041F\u0440\u043E\u0434\u0443\u0442\u044C \u043E\u0442 \u043F\u044B\u043B\u0438</button>':""}
    <button data-a="remove" ${r.ok?"":"disabled"}>\u{1F527} \u0421\u043D\u044F\u0442\u044C${r.ok?"":` <small>(${$t(r.reason)})</small>`}</button>
    <button data-a="close">\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>`,o.classList.remove("hidden");let a=o.getBoundingClientRect();o.style.left=Math.min(t+8,innerWidth-a.width-8)+"px",o.style.top=Math.min(e+8,innerHeight-a.height-8)+"px",o.onclick=c=>{let l=c.target.closest("button");!l||l.disabled||(jo(),l.dataset.a==="remove"&&gx(i),l.dataset.a==="clean"&&sd(i))}}function jo(){dt("#ctx").classList.add("hidden")}function sd(i){let t=O.bench.slots[i];t?.dirty&&(t.dirty=!1,jt.blow(),oe.blowDust(i),ye(),setTimeout(()=>{oe.setBuild(O.bench),vr()},350),Gl())}function xr(i){zt.tool=zt.tool===i?null:i,dt("#btnCables").classList.toggle("on",zt.tool==="cables"),dt("#btnDust").classList.toggle("on",zt.tool==="dust"),document.body.classList.toggle("tool-dust",zt.tool==="dust"),zt.tool&&(zt.selected=null,Jo(),ci()),zt.tool==="cables"?(Vl(),Ke('\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 <b class="warn">\u0436\u0451\u043B\u0442\u0443\u044E</b> \u0442\u043E\u0447\u043A\u0443, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043A\u0430\u0431\u0435\u043B\u044C \u043E\u0442 \u0431\u043B\u043E\u043A\u0430 \u043F\u0438\u0442\u0430\u043D\u0438\u044F. <b class="ok">\u0417\u0435\u043B\u0451\u043D\u0443\u044E</b> \u2014 \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C.')):oe.setCablePoints([],O.bench),zt.tool==="dust"&&Ke("\u{1F4A8} \u0411\u0430\u043B\u043B\u043E\u043D \u0441\u043E \u0441\u0436\u0430\u0442\u044B\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u043C: \u043D\u0430\u0436\u0438\u043C\u0430\u0439\u0442\u0435 \u043D\u0430 \u0437\u0430\u043F\u044B\u043B\u0451\u043D\u043D\u044B\u0435 \u0434\u0435\u0442\u0430\u043B\u0438."),zt.tool||Ui()}function Vl(){let i=Yn(O.bench);oe.setCablePoints(i.map(t=>({id:t,connected:!!O.bench.cables[t]})),O.bench),i.length?O.bench.slots.psu||Ke("\u26A0 \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0431\u043B\u043E\u043A \u043F\u0438\u0442\u0430\u043D\u0438\u044F \u2014 \u043E\u0442 \u043D\u0435\u0433\u043E \u0438\u0434\u0443\u0442 \u0432\u0441\u0435 \u043A\u0430\u0431\u0435\u043B\u0438."):Ke("\u041F\u043E\u043A\u0430 \u043D\u0435\u0447\u0435\u0433\u043E \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0442\u044C: \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u0443\u044E \u043F\u043B\u0430\u0442\u0443, \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0443 \u0441 \u0434\u043E\u043F. \u043F\u0438\u0442\u0430\u043D\u0438\u0435\u043C \u0438\u043B\u0438 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438.")}dt("#btnCables").addEventListener("click",()=>{jt.click(),xr("cables")});dt("#btnDust").addEventListener("click",()=>{jt.click(),xr("dust")});dt("#btnCam").addEventListener("click",()=>{jt.click(),oe.resetCamera()});dt("#btnScreen").addEventListener("click",()=>{jt.click(),oe.lookAtScreen()});oe.on("pick",(i,t,e)=>{if(dt("#tooltip").classList.add("hidden"),jo(),!!i){if(i.kind==="ghost"){i.ok?mx(i.slot):de($t(i.reason),"err");return}if(i.kind==="cable"){Hl();let n=i.connected?sh(O.bench,i.id):ih(O.bench,i.id);if(!n.ok){de($t(n.reason),"err");return}jt.cable(),ye(),oe.setBuild(O.bench),Vl(),Gl(),vr();return}if(i.kind==="part"){if(zt.tool==="dust"){O.bench.slots[i.slot]?.dirty?sd(i.slot):de("\u042D\u0442\u0430 \u0434\u0435\u0442\u0430\u043B\u044C \u0443\u0436\u0435 \u0447\u0438\u0441\u0442\u0430\u044F");return}if(zt.selected)return;jt.click(),_x(i.slot,t,e)}}});oe.on("hover",(i,t,e)=>{let n=dt("#tooltip");if(!i||i.kind==="part"&&zt.tool!=="dust"&&!O.bench.slots[i.slot]){n.classList.add("hidden");return}let s="";if(i.kind==="part"){let r=Me(O.bench.slots[i.slot]);s=`<b>${$t(r.name)}</b>${O.bench.slots[i.slot].dirty?' \xB7 <span class="warn">\u0432 \u043F\u044B\u043B\u0438</span>':""}`}i.kind==="ghost"&&(s=i.ok?`<span class="ok">\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u044E\u0434\u0430:</span> ${Qe[i.slot].label}`:`<span class="bad">\u2715</span> ${$t(i.reason)}`),i.kind==="cable"&&(s=`${i.connected?"\u{1F7E2} \u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C":"\u{1F7E1} \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C"}: ${na[i.id]}`),n.innerHTML=s,n.classList.remove("hidden"),n.style.left=t+14+"px",n.style.top=e+14+"px"});document.addEventListener("keydown",i=>{i.key==="Escape"&&(Ni(),jo(),zt.selected?Ko(null):zt.tool&&xr(zt.tool))});function xx(){zt.timers.forEach(clearTimeout),zt.timers=[]}var Di=(i,t)=>zt.timers.push(setTimeout(i,t));function Zo(){let i=O.bench,t=Fs(i).map(e=>Me(i.slots[e]).name.split(" (")[0]).join(", ");return{mb:Me(i.slots.mb)?.name,cpu:Me(i.slots.cpu)?.name,gpu:Me(i.slots.gpu)?.name,ram:ui(i)*1024,drives:t,cpuTemp:sa(i).cpu}}function rd(){zt.powered=!1,oe.setPower(!1),_r(!1),gn.set("off"),dt("#btnPower").classList.remove("on"),dt("#btnPower").innerHTML="\u23FB \u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C",dt("#btnBench").disabled=!0,Ui()}function Gn(){xx(),zt.busy=!1,rd()}function vx(){if(zt.powered){Gn(),jt.click();return}xr(null),Ko(null);let i=di(O.bench);if(jt.click(),!i.power){de("\u23FB "+$t(i.error),"err");return}if(zt.powered=!0,oe.setPower(!0),_r(!0),dt("#btnPower").classList.add("on"),dt("#btnPower").innerHTML="\u23FB \u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C",Ui(),!i.post){gn.set("nosignal"),Di(()=>{i.beep&&jt.beepCode(i.beep),de(`\u{1F50A} ${i.beep?"\u041F\u0438\u0441\u043A: "+i.beep+". ":""}${$t(i.error)}`,"err")},900);return}if(gn.set("post",{...Zo(),error:i.boot?"":i.error}),Di(()=>jt.postBeep(),300),!i.boot){Di(()=>de("\u{1F5A5} "+$t(i.error),"err"),1400),i.shutdown&&Di(()=>{Gn(),de("\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0430\u0432\u0430\u0440\u0438\u0439\u043D\u043E \u0432\u044B\u043A\u043B\u044E\u0447\u0438\u043B\u0441\u044F")},3200);return}let t=Hs({slots:Object.fromEntries(Fs(O.bench).map(n=>[n,O.bench.slots[n]])),cables:{}}),e=O.osSig!==t;Di(()=>gn.set("boot",{install:e}),1500),Di(()=>{O.osSig=t,ye(),gn.set("desktop",Zo()),dt("#btnBench").disabled=!1,de("\u2705 \u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0441\u044F! \u041C\u043E\u0436\u043D\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0442\u044C <b>\u{1F4CA} \u0422\u0435\u0441\u0442</b>","ok"),Ui(),vr()},e?5200:3e3)}dt("#btnPower").addEventListener("click",vx);function Gl(){O.bench_score&&O.bench_score.sig!==Hs(O.bench)&&(O.bench_score=null,ye())}var Yo=()=>O.bench_score&&O.bench_score.sig===Hs(O.bench)?O.bench_score.score:null;dt("#btnBench").addEventListener("click",()=>{if(!zt.powered||zt.busy||!["desktop","result"].includes(gn.mode))return;let i=oh(O.bench);if(!i.ok){de($t(i.error),"err");return}zt.busy=!0,dt("#btnBench").disabled=!0,oe.lookAtScreen(),gn.set("bench",{...Zo(),...i,dur:6e3}),Di(()=>{zt.busy=!1,dt("#btnBench").disabled=!1,gn.set("result",{...Zo(),...i}),O.bench_score={sig:Hs(O.bench),score:i.score},ye(),jt.levelUp(),de(`\u{1F4CA} \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0442\u0435\u0441\u0442\u0430: <b>${i.score}</b> \u043E\u0447\u043A\u043E\u0432 (\u2248${i.fps} FPS)${i.throttle?' \u2014 <span class="warn">\u043F\u0435\u0440\u0435\u0433\u0440\u0435\u0432!</span>':""}`,"ok"),vr()},6e3)});function vr(){let i=dt("#jobBody"),t=O.job;if(!t){let s=O.bench,r=Rn(s).length>0,o=di(s),a=Math.round(Bs(s)*1.15+(Yo()||0)*.02);i.innerHTML=`<div class="job-empty">
      ${O.sandbox?"<p><b>\u041F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u0430.</b> \u0414\u0435\u043D\u044C\u0433\u0438 \u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u044B, \u0432\u0441\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u044B. \u041F\u043E\u043A\u0443\u043F\u0430\u0439\u0442\u0435 \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435 \u0438 \u0441\u043E\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u0447\u0442\u043E \u0443\u0433\u043E\u0434\u043D\u043E!</p>":`<p>\u041D\u0435\u0442 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u0430\u0437\u0430.</p><button class="btn btn-yellow btn-wide" data-open="mail">\u{1F4E7} \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u0447\u0442\u0443 ${O.inbox.length?`(${O.inbox.length})`:""}</button>`}
      <p class="muted small">\u041C\u043E\u0436\u043D\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0432\u043E\u0439 \u041F\u041A \u0438\u0437 \u043A\u0443\u043F\u043B\u0435\u043D\u043D\u044B\u0445 \u0434\u0435\u0442\u0430\u043B\u0435\u0439${O.sandbox?"":" \u0438 \u043F\u0440\u043E\u0434\u0430\u0442\u044C \u0435\u0433\u043E \u0441 \u043D\u0430\u0446\u0435\u043D\u043A\u043E\u0439 15%"}.</p>
      ${r?`<div class="own-stats">
        <div>\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0435\u0439: <b>$${Bs(s)}</b></div>
        <div>\u041F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435: <b>${Sr(s)} \u0412\u0442</b>${s.slots.psu?` \u0438\u0437 ${Me(s.slots.psu).watt}`:""}</div>
        <div>\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0442\u0435\u0441\u0442: <b>${Yo()??"\u2014"}</b></div>
      </div>
      ${O.sandbox?"":`<button class="btn btn-dark btn-wide" id="sellBuild" ${o.boot?"":"disabled"}>\u{1F4B0} \u041F\u0440\u043E\u0434\u0430\u0442\u044C \u0441\u0431\u043E\u0440\u043A\u0443 \u0437\u0430 $${a}</button>
      ${o.boot?"":'<div class="muted small">\u041F\u0440\u043E\u0434\u0430\u0442\u044C \u043C\u043E\u0436\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u041F\u041A</div>'}`}
      <button class="btn btn-ghost btn-wide" id="clearBench">\u0420\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0451 \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C</button>`:""}
    </div>`,dt("#sellBuild")?.addEventListener("click",()=>{di(O.bench).boot&&(Gn(),O.money+=a,O.earned+=a,O.bench={slots:{},cables:{}},O.bench_score=null,O.xp+=30,ye(),jt.cash(),oe.setBuild(O.bench),de(`\u0421\u0431\u043E\u0440\u043A\u0430 \u043F\u0440\u043E\u0434\u0430\u043D\u0430 \u0437\u0430 <b>$${a}</b> \xB7 +30 XP`,"ok"),Wn())}),dt("#clearBench")?.addEventListener("click",()=>{Gn(),yx(),de("\u0412\u0441\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u044B \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C")}),dt("#jobTitle").textContent="\u0417\u0430\u043A\u0430\u0437";return}let e=ra(t,O.bench,{bench:Yo()}),n=e.every(s=>s.ok);dt("#jobTitle").textContent="\u0417\u0430\u043A\u0430\u0437: "+t.customer,i.innerHTML=`<div class="job-subject">${$t(t.subject)}</div>
    <details class="job-text"><summary>\u041F\u0438\u0441\u044C\u043C\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0430</summary><p>${$t(t.text)}</p></details>
    <ul class="checks">${e.map(s=>`<li class="${s.ok?"ok":""}">${s.ok?"\u2705":"\u2B1C"} ${$t(s.label)}</li>`).join("")}</ul>
    <div class="job-reward">\u041E\u043F\u043B\u0430\u0442\u0430: <b>$${t.reward}</b> \xB7 +${t.xp} XP</div>
    <button class="btn btn-yellow btn-wide" id="jobDone" ${n?"":"disabled"}>\u2714 \u0421\u0434\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437</button>
    <button class="btn btn-ghost btn-wide" id="jobCancel">\u041E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F</button>`,dt("#jobDone").addEventListener("click",bx),dt("#jobCancel").addEventListener("click",()=>{li(`<h2>\u041E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u0437\u0430\u043A\u0430\u0437\u0430?</h2><p class="muted">\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0443, \u0432\u0430\u0448\u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u2014 \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C.</p>
      <div class="m-actions"><button class="btn btn-yellow" id="mYes">\u041E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F</button><button class="btn btn-dark" data-close>\u041D\u0435\u0442</button></div>`),dt("#mYes").addEventListener("click",()=>{Ni(),Gn(),od(!1),de("\u0417\u0430\u043A\u0430\u0437 \u043E\u0442\u043C\u0435\u043D\u0451\u043D")})})}function yx(){for(let i of Rn(O.bench))i.client||O.inventory.push(i);O.bench={slots:{},cables:{}},O.bench_score=null,ye(),oe.setBuild(O.bench),Wn()}function od(i){if(!i)for(let t of Rn(O.bench))t.client||O.inventory.push(t);O.inventory=O.inventory.filter(t=>!t.client),O.bench={slots:{},cables:{}},O.bench_score=null,O.job=null,ye(),oe.setBuild(O.bench),Wn()}function bx(){let i=O.job;if(!i||!lh(i,O.bench,{bench:Yo()}))return;Gn();let t=Fi();O.money+=i.reward,O.earned+=i.reward,O.xp+=i.xp,O.jobsDone++,od(!0),yr(1),jt.cash();let e=Fi();li(`<h2>\u0417\u0430\u043A\u0430\u0437 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D! \u{1F389}</h2>
    <p>${$t(i.customer)} \u0434\u043E\u0432\u043E\u043B\u0435\u043D(\u0430) \u0440\u0430\u0431\u043E\u0442\u043E\u0439.</p>
    <div class="big-money">+$${i.reward}</div>
    <p class="muted">+${i.xp} XP \xB7 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E \u0437\u0430\u043A\u0430\u0437\u043E\u0432: ${O.jobsDone}</p>
    ${e>t?`<div class="lvl-up">\u2B50 \u041D\u043E\u0432\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u043E\u0439: ${e}! \u0412 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435 \u043F\u043E\u044F\u0432\u0438\u043B\u0438\u0441\u044C \u043D\u043E\u0432\u044B\u0435 \u0434\u0435\u0442\u0430\u043B\u0438.</div>`:""}
    <div class="m-actions"><button class="btn btn-yellow" data-close>\u041E\u0442\u043B\u0438\u0447\u043D\u043E</button><button class="btn btn-dark" data-open="mail">\u{1F4E7} \u041F\u043E\u0447\u0442\u0430</button></div>`,"gold"),e>t&&setTimeout(jt.levelUp,300)}function yr(i){for(let t=0;t<i;t++){let e=O.seedBase+O.day*100+O.inbox.length*7+O.jobsDone*13+t*31+Math.floor(Math.random()*1e6);O.inbox.push({...ch(e,Fi(),(n,s)=>aa(n,s)),day:O.day,read:!1})}for(;O.inbox.length>8;)O.inbox.shift();ye(),Cs()}var Li=0;function ad(){Ni(),O.inbox.length||yr(2),Li=Math.min(Li,O.inbox.length-1),$o()}function $o(){let i=O.inbox[Li];i&&(i.read=!0),li(`<div class="mail">
    <div class="mail-list">
      <div class="mail-head">\u{1F4E7} \u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435 <span class="muted small">\xB7 \u0414\u0435\u043D\u044C ${O.day}</span></div>
      ${O.inbox.map((t,e)=>`<div class="mail-item ${e===Li?"sel":""} ${t.read?"":"unread"}" data-i="${e}">
        <div class="mi-from">${$t(t.customer)} <span class="mi-pay">$${t.reward}</span></div>
        <div class="mi-subj">${$t(t.subject)}</div></div>`).join("")}
      <button class="btn btn-dark btn-wide" id="nextDay">\u{1F319} \u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0434\u0435\u043D\u044C</button>
    </div>
    <div class="mail-read">${i?`
      <div class="mr-subj">${$t(i.subject)}</div>
      <div class="mr-from">\u041E\u0442: <b>${$t(i.customer)}</b></div>
      <p class="mr-text">${$t(i.text)}</p>
      <div class="mr-info">
        <div>\u041E\u043F\u043B\u0430\u0442\u0430: <b class="ok">$${i.reward}</b></div><div>\u041E\u043F\u044B\u0442: <b>+${i.xp} XP</b></div>
        <div>\u0422\u0438\u043F: ${{repair:"\u{1F527} \u0420\u0435\u043C\u043E\u043D\u0442",clean:"\u{1F4A8} \u0427\u0438\u0441\u0442\u043A\u0430",upgrade_gpu:"\u{1F3AE} \u0410\u043F\u0433\u0440\u0435\u0439\u0434 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u044B",upgrade_ram:"\u{1F4CF} \u0410\u043F\u0433\u0440\u0435\u0439\u0434 \u043F\u0430\u043C\u044F\u0442\u0438",upgrade_ssd:"\u{1F4BE} \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 SSD",build:"\u{1F5A5} \u0421\u0431\u043E\u0440\u043A\u0430 \u0441 \u043D\u0443\u043B\u044F"}[i.type]}</div>
      </div>
      <div class="m-actions"><button class="btn btn-yellow" id="accept">\u041F\u0440\u0438\u043D\u044F\u0442\u044C \u0437\u0430\u043A\u0430\u0437</button><button class="btn btn-ghost" id="decline">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E</button></div>`:'<div class="empty">\u041F\u0438\u0441\u0435\u043C \u043D\u0435\u0442. \u041F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043A \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C\u0443 \u0434\u043D\u044E.</div>'}
    </div></div>`,"wide"),Bl(".mail-item").forEach(t=>t.addEventListener("click",()=>{Li=Number(t.dataset.i),jt.click(),$o()})),dt("#nextDay").addEventListener("click",()=>{if(O.job){de("\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0435 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0437\u0430\u043A\u0430\u0437","err");return}O.day++,yr(2+(Math.random()<.5?1:0)),jt.select(),$o(),Cs()}),dt("#accept")?.addEventListener("click",()=>Mx(Li)),dt("#decline")?.addEventListener("click",()=>{O.inbox.splice(Li,1),ye(),Cs(),$o()})}function Mx(i){if(O.job){de("\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0435 \u0438\u043B\u0438 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u0435 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0437\u0430\u043A\u0430\u0437","err");return}let t=O.inbox[i];Gn();for(let e of Rn(O.bench))e.client||O.inventory.push(e);O.inbox.splice(i,1),O.job=t,O.bench=t.pc,delete t.pc,O.bench_score=null,ye(),Ni(),oe.setBuild(O.bench,{animateSlot:"case"}),oe.resetCamera(),jt.install(),de(`\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u043D\u0430 \u0441\u0442\u043E\u043B\u0435. ${t.type==="build"?"\u041A\u0443\u043F\u0438\u0442\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435 \u{1F6D2}":"\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0435\u0433\u043E \u23FB"}`,"ok"),Wn()}var Ol="cpu",Fl=!1;function cd(){Ni(),zl()}function zl(){let i=Fi(),t=O.bench,e=Me(t.slots.mb),n=Me(t.slots.case),s=Ls.filter(r=>r.type===Ol).filter(r=>Fl?r.type==="cpu"&&e?r.socket===e.socket:r.type==="ram"&&e?r.ram===e.ram:r.type==="mb"?(!n||["ATX","mATX","ITX"].slice(["ATX","mATX","ITX"].indexOf(n.form)).includes(r.form))&&(!t.slots.cpu||r.socket===Me(t.slots.cpu).socket):r.type==="gpu"&&n?r.len<=n.gpuMax:!0:!0).sort((r,o)=>r.price-o.price);li(`<div class="shop">
    <div class="shop-head"><h2>\u{1F6D2} \u041C\u0430\u0433\u0430\u0437\u0438\u043D \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0449\u0438\u0445</h2>
      <div class="shop-money">\u0411\u0430\u043B\u0430\u043D\u0441: <b>${kl(O.money)}</b></div></div>
    <div class="shop-tabs">${Ds.map(r=>`<button class="${r===Ol?"active":""}" data-cat="${r}">${wn[r].icon} ${wn[r].name}</button>`).join("")}</div>
    <label class="chk"><input type="checkbox" id="shopCompat" ${Fl?"checked":""}> \u0422\u043E\u043B\u044C\u043A\u043E \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u044B\u0435 \u0441 \u041F\u041A \u043D\u0430 \u0441\u0442\u043E\u043B\u0435</label>
    <div class="shop-grid">${s.map(r=>{let o=r.lvl>i;return`<div class="shop-card ${o?"locked":""}">
        <div class="sc-icon">${wn[r.type].icon}</div>
        <div class="sc-name">${$t(r.name)}</div>
        <div class="sc-spec">${$t(Us(r))}</div>
        <div class="sc-foot"><span class="sc-price">$${r.price}</span>
          ${o?`<span class="sc-lock">\u{1F512} \u0423\u0440\u043E\u0432\u0435\u043D\u044C ${r.lvl}</span>`:`<button class="btn btn-yellow" data-buy="${r.id}">\u041A\u0443\u043F\u0438\u0442\u044C</button>`}</div>
      </div>`}).join("")||'<div class="empty">\u041D\u0435\u0442 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u044B\u0445 \u0434\u0435\u0442\u0430\u043B\u0435\u0439</div>'}</div></div>`,"wide"),Bl(".shop-tabs button").forEach(r=>r.addEventListener("click",()=>{Ol=r.dataset.cat,jt.click(),zl()})),dt("#shopCompat").addEventListener("change",r=>{Fl=r.target.checked,zl()}),Bl("[data-buy]").forEach(r=>r.addEventListener("click",()=>{let o=pe[r.dataset.buy];if(!id(o.price))return;let a=aa(o.id);O.inventory.push(a),ye(),jt.cash(),de(`\u041A\u0443\u043F\u043B\u0435\u043D\u043E: <b>${$t(o.name)}</b>`,"ok"),ci(),dt(".shop-money b").textContent=kl(O.money)}))}dt("#btnShop").addEventListener("click",()=>{jt.click(),cd()});dt("#btnMail").addEventListener("click",()=>{jt.click(),ad()});dt("#btnSound").addEventListener("click",()=>{O.settings.sound=!O.settings.sound,Nl(O.settings.sound),zt.powered&&_r(!0),ye(),Cs()});dt("#btnMenu").addEventListener("click",()=>{jt.click(),li(`<h2>\u041C\u0435\u043D\u044E</h2>
    <div class="menu-btns">
      <button class="btn btn-dark btn-wide" id="mHelp">\u2753 \u041A\u0430\u043A \u0438\u0433\u0440\u0430\u0442\u044C</button>
      <button class="btn btn-dark btn-wide" id="mCareer">\u{1F9F0} \u041D\u043E\u0432\u0430\u044F \u043A\u0430\u0440\u044C\u0435\u0440\u0430</button>
      <button class="btn btn-dark btn-wide" id="mSandbox">\u{1F3D6} \u041F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u0430 (\u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0435 \u0434\u0435\u043D\u044C\u0433\u0438)</button>
      <a class="btn btn-dark btn-wide" href="https://github.com/S4rgeant1k/WebGames">\u2190 \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 GitHub</a>
    </div>
    <p class="muted small">\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E \u0437\u0430\u043A\u0430\u0437\u043E\u0432: ${O.jobsDone} \xB7 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E: $${O.earned}</p>`),dt("#mHelp").addEventListener("click",ld),dt("#mCareer").addEventListener("click",()=>nd(!1)),dt("#mSandbox").addEventListener("click",()=>nd(!0))});function nd(i){li(`<h2>${i?"\u041F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u0430":"\u041D\u043E\u0432\u0430\u044F \u043A\u0430\u0440\u044C\u0435\u0440\u0430"}</h2><p class="muted">\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0451\u043D.</p>
    <div class="m-actions"><button class="btn btn-yellow" id="mGo">\u041D\u0430\u0447\u0430\u0442\u044C</button><button class="btn btn-dark" data-close>\u041E\u0442\u043C\u0435\u043D\u0430</button></div>`),dt("#mGo").addEventListener("click",()=>{Gn(),dh(i),i||yr(3),zt.selected=null,oe.setBuild(O.bench),Ni(),Wn(),de(i?"\u041F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u0430: \u0432\u0441\u0451 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E!":"\u041D\u043E\u0432\u0430\u044F \u043A\u0430\u0440\u044C\u0435\u0440\u0430 \u043D\u0430\u0447\u0430\u043B\u0430\u0441\u044C. \u0417\u0430\u0433\u043B\u044F\u043D\u0438\u0442\u0435 \u0432 \u043F\u043E\u0447\u0442\u0443!","ok")})}function ld(){li(`<h2>\u041A\u0430\u043A \u0438\u0433\u0440\u0430\u0442\u044C</h2>
    <div class="help">
      <p>\u{1F5B1} <b>\u041A\u0430\u043C\u0435\u0440\u0430:</b> \u043B\u0435\u0432\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430 \u043C\u044B\u0448\u0438 \u2014 \u0432\u0440\u0430\u0449\u0430\u0442\u044C, \u043A\u043E\u043B\u0435\u0441\u043E \u2014 \u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u044C, \u043F\u0440\u0430\u0432\u0430\u044F \u2014 \u0441\u0434\u0432\u0438\u043D\u0443\u0442\u044C. \u041D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435 \u2014 \u043F\u0430\u043B\u044C\u0446\u0430\u043C\u0438.</p>
      <p>\u{1F4E7} <b>\u041F\u043E\u0447\u0442\u0430:</b> \u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u0430\u043A\u0430\u0437\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u2014 \u0440\u0435\u043C\u043E\u043D\u0442, \u0447\u0438\u0441\u0442\u043A\u0430, \u0430\u043F\u0433\u0440\u0435\u0439\u0434, \u0441\u0431\u043E\u0440\u043A\u0430 \u0441 \u043D\u0443\u043B\u044F.</p>
      <p>\u{1F6D2} <b>\u041C\u0430\u0433\u0430\u0437\u0438\u043D:</b> \u043F\u043E\u043A\u0443\u043F\u0430\u0439\u0442\u0435 \u0434\u0435\u0442\u0430\u043B\u0438. \u041D\u043E\u0432\u044B\u0435 \u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0441 \u0440\u043E\u0441\u0442\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u044F \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u043E\u0439.</p>
      <p>\u{1F4E6} <b>\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430:</b> \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u0442\u0430\u043B\u044C \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0435 \u0441\u043F\u0440\u0430\u0432\u0430 \u2192 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 <b class="ok">\u0437\u0435\u043B\u0451\u043D\u0443\u044E</b> \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0432 \u043A\u043E\u0440\u043F\u0443\u0441\u0435. \u041A\u0440\u0430\u0441\u043D\u0430\u044F \u2014 \u0437\u043D\u0430\u0447\u0438\u0442 \u043D\u0435\u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E (\u043D\u0430\u0432\u0435\u0434\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0447\u0435\u043C\u0443).</p>
      <p>\u{1F527} <b>\u0421\u043D\u044F\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u044C:</b> \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043D\u0435\u0451 \u0432 \u043A\u043E\u0440\u043F\u0443\u0441\u0435. \u041F\u043E\u0440\u044F\u0434\u043E\u043A \u043A\u0430\u043A \u0432 \u0436\u0438\u0437\u043D\u0438: \u043A\u0443\u043B\u0435\u0440 \u2192 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440 \u2192 \u043F\u043B\u0430\u0442\u0430.</p>
      <p>\u{1F50C} <b>\u041A\u0430\u0431\u0435\u043B\u0438:</b> \u043F\u043E\u0441\u043B\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0431\u043B\u043E\u043A\u0430 \u043F\u0438\u0442\u0430\u043D\u0438\u044F \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0435 24-pin, 8-pin CPU, \u043F\u0438\u0442\u0430\u043D\u0438\u0435 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u044B \u0438 SATA.</p>
      <p>\u23FB <b>\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435:</b> \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u043C\u043E\u043D\u0438\u0442\u043E\u0440 \u0438 \u0441\u043B\u0443\u0448\u0430\u0439\u0442\u0435 \u043F\u0438\u0441\u043A \u2014 \u043E\u043D \u043F\u043E\u0434\u0441\u043A\u0430\u0436\u0435\u0442, \u0447\u0442\u043E \u043D\u0435 \u0442\u0430\u043A. \u041F\u043E\u0434\u043E\u0437\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u0434\u0435\u0442\u0430\u043B\u044C \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043D\u0430 \u0442\u0435\u0441\u0442\u0435\u0440\u0435 \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0435.</p>
      <p>\u{1F4A8} <b>\u041F\u044B\u043B\u044C:</b> \u0432\u043E\u0437\u044C\u043C\u0438\u0442\u0435 \u0431\u0430\u043B\u043B\u043E\u043D \u0438 \u043D\u0430\u0436\u0438\u043C\u0430\u0439\u0442\u0435 \u043D\u0430 \u0433\u0440\u044F\u0437\u043D\u044B\u0435 \u0434\u0435\u0442\u0430\u043B\u0438.</p>
      <p>\u{1F4CA} <b>\u0422\u0435\u0441\u0442:</b> \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0431\u0435\u043D\u0447\u043C\u0430\u0440\u043A \u2014 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \xAB\u0421\u0431\u043E\u0440\u043A\u0430\xBB \u043D\u0443\u0436\u0435\u043D \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442.</p>
    </div>
    <div class="m-actions"><button class="btn btn-yellow" data-close>\u041F\u043E\u043D\u044F\u0442\u043D\u043E!</button></div>`)}function Ui(){let i=O.bench;if(zt.selected||zt.tool)return;if(zt.powered){Ke(gn.mode==="desktop"||gn.mode==="result"?"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442. \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u{1F4CA} \u0422\u0435\u0441\u0442 \u0438\u043B\u0438 \u0432\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u23FB, \u0447\u0442\u043E\u0431\u044B \u043C\u0435\u043D\u044F\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438.":"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0432\u043A\u043B\u044E\u0447\u0451\u043D\u2026");return}if(!O.job&&!Rn(i).length){Ke(O.sandbox?"\u041A\u0443\u043F\u0438\u0442\u0435 \u043A\u043E\u0440\u043F\u0443\u0441 \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435 \u{1F6D2} \u0438 \u043D\u0430\u0447\u043D\u0438\u0442\u0435 \u0441\u0431\u043E\u0440\u043A\u0443.":"\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u043F\u043E\u0447\u0442\u0443 \u{1F4E7} \u0438 \u0432\u043E\u0437\u044C\u043C\u0438\u0442\u0435 \u0437\u0430\u043A\u0430\u0437 \u2014 \u0438\u043B\u0438 \u043A\u0443\u043F\u0438\u0442\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u0438 \u0441\u043E\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u041F\u041A \u043D\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0443.");return}if(!i.slots.case){Ke("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u0440\u043F\u0443\u0441 \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0435 \u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0435\u0433\u043E \u043D\u0430 \u0441\u0442\u043E\u043B.");return}let t=["mb","cpu","cooler","psu"].filter(n=>!i.slots[n]);if(t.length){Ke(`\u041D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442: ${t.map(n=>({mb:"\u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u0430\u044F \u043F\u043B\u0430\u0442\u0430",cpu:"\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440",cooler:"\u043A\u0443\u043B\u0435\u0440",psu:"\u0431\u043B\u043E\u043A \u043F\u0438\u0442\u0430\u043D\u0438\u044F"})[n]).join(", ")}.`);return}let e=Yn(i).filter(n=>!i.cables[n]);if(e.length){Ke(`\u041D\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u044B \u043A\u0430\u0431\u0435\u043B\u0438: ${e.map(n=>na[n]).join(", ")} \u2192 \u043A\u043D\u043E\u043F\u043A\u0430 \u{1F50C}`);return}Ke("\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u23FB \u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0434\u0435\u0442\u0430\u043B\u044C, \u0447\u0442\u043E\u0431\u044B \u0435\u0451 \u0441\u043D\u044F\u0442\u044C.")}function Wn(){Cs(),ci(),vr(),Ui(),Gl()}dt("#tglJob").addEventListener("click",()=>{document.body.classList.toggle("show-job"),document.body.classList.remove("show-inv")});dt("#tglInv").addEventListener("click",()=>{document.body.classList.toggle("show-inv"),document.body.classList.remove("show-job")});oe.setBuild(O.bench);!O.sandbox&&!O.inbox.length&&!O.job&&yr(3);Wn();rd();O.tutorial&&(O.tutorial=!1,ye(),li(`<h2>\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 PC BUILD SIM!</h2>
    <p>\u0412\u044B \u043E\u0442\u043A\u0440\u044B\u043B\u0438 \u0441\u0432\u043E\u044E \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0443\u044E \u043F\u043E \u0440\u0435\u043C\u043E\u043D\u0442\u0443 \u0438 \u0441\u0431\u043E\u0440\u043A\u0435 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043E\u0432. \u0421\u0442\u0430\u0440\u0442\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u0438\u0442\u0430\u043B \u2014 <b>$${O.money}</b>.</p>
    <p>\u041A\u043B\u0438\u0435\u043D\u0442\u044B \u043F\u0438\u0448\u0443\u0442 \u043D\u0430 \u043F\u043E\u0447\u0442\u0443 \u{1F4E7}: \u043A\u043E\u043C\u0443-\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u043F\u043E\u0447\u0438\u043D\u0438\u0442\u044C \u041F\u041A, \u043A\u043E\u043C\u0443-\u0442\u043E \u2014 \u043F\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C, \u0430 \u043A\u0442\u043E-\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u043D\u043E\u0432\u044B\u0439 \u0438\u0433\u0440\u043E\u0432\u043E\u0439 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440.</p>
    <p class="muted">\u0421\u043E\u0432\u0435\u0442: \u043D\u0430\u0447\u043D\u0438\u0442\u0435 \u0441 \u043F\u0440\u043E\u0441\u0442\u043E\u0433\u043E \u0437\u0430\u043A\u0430\u0437\u0430 \u043D\u0430 \u0440\u0435\u043C\u043E\u043D\u0442 \u0438\u043B\u0438 \u0447\u0438\u0441\u0442\u043A\u0443.</p>
    <div class="m-actions"><button class="btn btn-yellow" data-open="mail">\u{1F4E7} \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u0447\u0442\u0443</button><button class="btn btn-dark" id="tHelp">\u2753 \u041A\u0430\u043A \u0438\u0433\u0440\u0430\u0442\u044C</button></div>`,"gold"),dt("#tHelp").addEventListener("click",ld));window.__game={S:O,view:oe};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
