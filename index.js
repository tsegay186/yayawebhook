import express from 'express'
import 'dotenv/config'
import cors from 'cors'

const app = express()

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});