// XLSX = require('xlsx');
// result =[{"EEL2010":"B20CS001,B20CS006","EEL7480":"B20CS007","EEL7260":"B20CS004","EEL7650":"B20CS004,B20CS008","EEL7130":"B20CS003","SHL7430":"B20CS004","EEL3070":"B20CS008,B20CS009","csl1015":"B20CS001","csl1016":"B20CS001","csl1017":"B20CS019","EEL7150":"B20CS003,B20CS008","EEL7520":"B20CS007","csl1012":"B20EE099","EEL2040":"B20CS007","EEL3100":"B20CS003","EEL3090":"B20CS002","csl1018":"B20EE099","EEL2050":"B20CS009","EEL2030":"B20EE099","csl1013":"B20CS002","EEL3060":"B20CS009","EEL3080":"B20CS006","csl1019":"B20CS002","csl1014":"B20CS019","EEL2020":"B20CS019","csl1011":"B20CS006","B20CS001":"EEL2010,csl1015,csl1016","B20EE099":"csl1012,csl1018,EEL2030","B20CS002":"EEL3090,csl1013,csl1019","B20CS019":"csl1017,csl1014,EEL2020","B20CS007":"EEL7480,EEL7520,EEL2040","B20CS003":"EEL7130,EEL7150,EEL3100","B20CS006":"EEL3080,csl1011,EEL2010","B20CS004":"EEL7260,EEL7650,SHL7430","B20CS008":"EEL7650,EEL3070,EEL7150","B20CS009":"EEL3070,EEL2050,EEL3060"}]
// // result = [{"EEL2010":["B20CS001","B20CS006"],"EEL7480":["B20CS007"],"EEL7260":["B20CS004"],"EEL7650":["B20CS004","B20CS008"],"EEL7130":["B20CS003"],"SHL7430":["B20CS004"],"EEL3070":["B20CS008","B20CS009"],"csl1016":["B20CS001"],"csl1015":["B20CS001"],"csl1017":["B20CS019"],"EEL7150":["B20CS003","B20CS008"],"EEL7520":["B20CS007"],"csl1012":["B20EE099"],"EEL2040":["B20CS007"],"EEL3100":["B20CS003"],"EEL3090":["B20CS002"],"EEL2050":["B20CS009"],"csl1018":["B20EE099"],"EEL2030":["B20EE099"],"csl1013":["B20CS002"],"EEL3060":["B20CS009"],"EEL3080":["B20CS006"],"csl1019":["B20CS002"],"csl1014":["B20CS019"],"EEL2020":["B20CS019"],"csl1011":["B20CS006"],"B20CS001":["EEL2010","csl1016","csl1015"],"B20EE099":["csl1012","csl1018","EEL2030"],"B20CS002":["EEL3090","csl1013","csl1019"],"B20CS019":["csl1017","csl1014","EEL2020"],"B20CS007":["EEL7480","EEL7520","EEL2040"],"B20CS003":["EEL7130","EEL7150","EEL3100"],"B20CS006":["EEL3080","csl1011","EEL2010"],"B20CS004":["EEL7260","EEL7650","SHL7430"],"B20CS008":["EEL7650","EEL3070","EEL7150"],"B20CS009":["EEL3070","EEL2050","EEL3060"]}]
// const sheet = XLSX.utils.json_to_sheet(result);
// const workbook = XLSX.utils.book_new();
// XLSX.utils.book_append_sheet(workbook, sheet, "Allotment");
// const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

// // Set response headers to trigger download
// // res.setHeader('Content-Disposition', 'attachment; filename="allotment.xlsx"');
// // res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
// // res.setHeader('Content-Length', buffer.length);
// XLSX.write(workbook, { type: "binary", bookType: "xlsx" })
// XLSX.writeFile(workbook, 'allotment.xlsx')
// // Send the XLSX file as the response

