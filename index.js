const express = require('express')
const app = express()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
// dbUser UDza22vJMrCc1OAl



const uri = "mongodb+srv://dbUser:UDza22vJMrCc1OAl@cluster0.ckrddue.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
    try{
        const userCollection = client.db('nodeMongoCrud').collection('users')
        app.get('/users', async(req, res)=>{
            const quary = {}
            const cursor =  userCollection.find(quary)
            const users = await cursor.toArray()
            res.send(users)

        })
        app.get('/users/:id', async(req, res) =>{
            const id = req.params.id
            const quary = {_id: ObjectId(id)}
            const user = await userCollection.findOne(quary)
            res.send(user)
        })

       app.post('/users', async (req,res) =>{
        const user = req.body
        const result = await userCollection.insertOne(user)
        res.send(result)
       })
       app.delete('/users/:id', async(req, res) =>{
           const id = req.params.id
           const quary = {_id: ObjectId(id)}
           const result = await userCollection.deleteOne(quary)
           console.log(result);
           res.send(result)
       })
       
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