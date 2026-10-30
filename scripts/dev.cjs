const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const handler=require('../api/events.js');
const port=process.env.PORT||process.argv[process.argv.indexOf('--port')+1]&&process.argv.includes('--port')&&process.argv[process.argv.indexOf('--port')+1]||3000;
http.createServer(async(req,res)=>{
 if(req.url==='/__qa'){res.setHeader('Content-Type','text/html; charset=utf-8');return res.end('<h1>Mobile QA · 390px / 320px</h1><iframe title="390px mobile" src="/" style="width:390px;height:844px;border:1px solid #ccc"></iframe><iframe title="320px mobile" src="/" style="width:320px;height:844px;border:1px solid #ccc"></iframe>')}
 if(req.url==='/api/events'){if(req.headers.origin&&new URL(req.headers.origin).host===req.headers.host)req.headers.origin='http://localhost:3000';let body='';for await(const chunk of req)body+=chunk;req.body=body;res.status=n=>(res.statusCode=n,res);res.json=x=>res.end(JSON.stringify(x));return handler(req,res)}
 const pathname=new URL(req.url,'http://localhost').pathname;
 const file=path.join(process.cwd(),'dist',pathname==='/'?'index.html':pathname.replace(/^\//,'')+(path.extname(pathname)?'':'.html'));
 if(!file.startsWith(path.join(process.cwd(),'dist')+path.sep)){res.writeHead(400);return res.end()}
 const found=fs.existsSync(file)&&fs.statSync(file).isFile();res.statusCode=found?200:404;
 res.setHeader('Content-Type',({'html':'text/html; charset=utf-8','js':'text/javascript; charset=utf-8','css':'text/css','png':'image/png','xml':'application/xml','txt':'text/plain'})[path.extname(file).slice(1)]||'text/plain');
 res.end(fs.readFileSync(found?file:'dist/404.html'));
}).listen(port,'0.0.0.0',()=>console.log('Local: http://localhost:'+port));
