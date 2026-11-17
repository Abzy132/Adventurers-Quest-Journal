// Adventurer's Quest Journal — Scriptable iPhone widget
// Optional manual progress sync: export a dashboard backup and save it as
// quest-backup.json in iCloud Drive / Scriptable, then refresh the widget.
const fm=FileManager.iCloud();const path=fm.joinPath(fm.documentsDirectory(),"quest-backup.json");
let data={checks:{}};try{if(fm.fileExists(path)){await fm.downloadFileFromiCloud(path);data=JSON.parse(fm.readString(path));}}catch(e){}
const d=new Date(), day=d.getDay(), days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const plan={
0:[["9:00 AM","Rest & recharge"],["11:00 AM","Weekly reset"],["4:00 PM","Plan meals & week"]],
1:[["6:30 AM","Morning routine"],["7:15 AM","Japanese writing"],["12:30 PM","Full-body strength"],["5:30 PM","Kitchen & dining"],["7:00 PM","SQL practice"]],
2:[["6:30 AM","Morning routine"],["7:15 AM","Japanese vocabulary"],["12:30 PM","Walk / mobility"],["5:30 PM","Bathrooms"],["7:00 PM","Power BI"]],
3:[["6:30 AM","Morning routine"],["7:15 AM","Japanese grammar"],["12:30 PM","Lower-body strength"],["5:30 PM","Bedrooms & office"]],
4:[["6:30 AM","Morning routine"],["7:15 AM","Japanese listening"],["12:30 PM","Walk / mobility"],["5:30 PM","Gaming / laundry"],["7:00 PM","SQL + Power BI"]],
5:[["6:30 AM","Morning routine"],["7:15 AM","Japanese review"],["12:30 PM","Upper-body strength"],["5:30 PM","Living room & stairs"]],
6:[["9:00 AM","Flexible start"],["11:00 AM","Laundry & errands"],["2:00 PM","Optional adventure"]]
};
const key=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
const checked=Object.entries(data.checks||{}).filter(([k,v])=>v),today=checked.filter(([k])=>k.startsWith(key+"|"));
const w=new ListWidget();w.backgroundColor=new Color("#211d38");w.setPadding(14,15,13,15);
let heading=w.addText("✦  TODAY'S QUESTS");heading.font=Font.boldSystemFont(11);heading.textColor=new Color("#e8c77c");w.addSpacer(5);
let title=w.addText(days[day]+" · "+d.toLocaleDateString("en-US",{month:"short",day:"numeric"}));title.font=Font.boldSystemFont(17);title.textColor=Color.white();w.addSpacer(7);
const items=plan[day];for(const [time,task] of items.slice(0,config.widgetFamily==="small"?2:4)){let t=w.addText(time+"  ·  "+task);t.font=Font.systemFont(11);t.textColor=new Color("#e0d6eb");t.lineLimit=1;w.addSpacer(4)}
w.addSpacer();let footer=w.addText(fm.fileExists(path)?"⭐ "+today.length+" quests checked · "+checked.length*10+" XP (backup)":"🐈‍⬛ Bandit says: One quest at a time!");footer.font=Font.mediumSystemFont(10);footer.textColor=new Color("#e8c77c");footer.lineLimit=2;
// Set this to your hosted journal URL after deployment, if desired:
const APP_URL="";if(APP_URL)w.url=APP_URL;
Script.setWidget(w);if(!config.runsInWidget)await w.presentMedium();Script.complete();
