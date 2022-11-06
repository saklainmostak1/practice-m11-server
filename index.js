const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


async function run(){
    try{


    }
    finally{

    }
}
run().catch(error => console.log(error))

app.get('/', (req, res)=> {
    res.send('api is running')
})

app.listen(port , (req, res) =>{
    console.log('api is running on port', port)
})