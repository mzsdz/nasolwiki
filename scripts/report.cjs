// Accept exported Vercel JSONL log messages on stdin. Counts only the export window.
let input='';process.stdin.on('data',c=>input+=c);process.stdin.on('end',()=>{
 const counts={},articles={};let interests=0,cancels=0;
 for(const line of input.split('\n')){try{let event=JSON.parse(line);if(event.message){const match=event.message.match(/\{.*"type":"nasol_event".*\}/);if(!match)continue;event=JSON.parse(match[0])}if(event.type!=='nasol_event')continue;counts[event.name]=(counts[event.name]||0)+1;if(event.name==='page_view')articles[event.path]=(articles[event.path]||0)+1;if(event.name==='ebook_interest'){event.selected?interests++:cancels++}}catch{}}
 console.log(JSON.stringify({eventCounts:counts,pageViews:articles,ebook:{interestClicks:interests,cancellations:cancels},note:'Export-window event totals; not unique people or permanent cumulative interest.'},null,2));
});
