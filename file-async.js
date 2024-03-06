const fs=require('fs');

fs.readFile('./content/first.txt' ,'utf8', (err,data)=>{
    if(err){
        console.log(err);
        return
    }
    const first=data;
    fs.readFile('./content/second.txt','utf8',(err,data)=>{
        if(err){
            console.log(err)
            return
        }
        const second=data
        fs.writeFile('./content/third-async.txt',`content in first and second is: ${first} ${second}`,(err,data)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(data);
        })
    })
})