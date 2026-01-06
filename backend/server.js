import http from 'node:http'
import 'dotenv/config'

const port = 8000

const server = http.createServer(async(req,res)=>{
    if(req.url.startsWith('/api')){
        try{
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR_API}`)
            const data = await response.json()

            res.writeHead(200, {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'})
            res.end(JSON.stringify(data))
        }catch(err){
            console.log(err)
        }
    }
    else{
        res.end('invalid url')
    }
})

server.listen(port,()=>console.log(`server is live at http://localhost${port}`))