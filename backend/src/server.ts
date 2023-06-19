import express, { Request, Response } from "express";
import mysql, { Connection } from 'mysql';
import { router } from "./routes";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
const db: Connection = mysql.createConnection({
    host: "3306",
    user: "root",
    password: "P@$$w0rd",
    database: "appetito"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.post('/signup', (req: Request, res: Response) => {
    const sql = "INSERT INTO cadastro (`name`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];

    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    });
});

app.post('/login', (req: Request, res: Response) => {
    const sql = "SELECT * FROM cadastro WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Fail");
        }
    });
});

app.listen(8081, () => {
    console.log("Server listening on port 8081");
});
