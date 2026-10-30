// No contact details, search terms, IDs, IPs or query strings are written by this handler.
// Vercel runtime logs are an initial collection channel, not a permanent analytics database.
const EVENTS=new Set(['page_view','click','save','share','filter','search','ebook_interest']);
module.exports=async function handler(req,res){
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='POST'){res.setHeader('Allow','POST');return res.status(405).json({error:'method'})}
 const origin=req.headers.origin;
 if(!origin||!['https://nasol-wiki.vercel.app',`https://${process.env.VERCEL_URL}`,'http://localhost:3000'].includes(origin))return res.status(403).json({error:'origin'});
 if(Number(req.headers['content-length']||0)>1024)return res.status(413).json({error:'size'});
 let body;try{body=typeof req.body==='string'?JSON.parse(req.body):req.body}catch{return res.status(400).json({error:'json'})}
 if(!body||!EVENTS.has(body.name)||typeof body.path!=='string'||body.path.length>150||!/^\/(?:article\/[a-z0-9-]+|column|ebook|about|wiki|saved)?$/.test(body.path))return res.status(400).json({error:'event'});
 if(body.name==='ebook_interest'&&(body.path!=='/ebook'||typeof body.selected!=='boolean'))return res.status(400).json({error:'interest'});
 const event={name:body.name,path:body.path};
 for(const key of ['article','destination','tag','method'])if(typeof body[key]==='string'&&body[key].length<=150)event[key]=body[key].replace(/[\r\n]/g,'');
 if(typeof body.selected==='boolean')event.selected=body.selected;
 if(Number.isInteger(body.results)&&body.results>=0&&body.results<1000)event.results=body.results;
 console.log(JSON.stringify({type:'nasol_event',at:new Date().toISOString(),...event}));
 return res.status(202).json({accepted:true});
};
