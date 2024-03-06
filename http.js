const http=require('http');

http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Welcome to out website');
        res.end();
    }
    else if(req.url==='/about'){
        res.end('a breif history of us');
    }else{
        res.write(`<h1>oops!<h1/>
        we cannot find what you are looking for 
        <a href="/">go back<a/>
        `)
    }
}).listen(8088)