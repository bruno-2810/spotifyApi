import 'dotenv/config'
import cors from 'cors'
import express from 'express'

import adicionarRotas from './rotas.js'

const servidor = express();
servidor.use(cors());
servidor.use(express.json())

adicionarRotas(servidor);

servidor.listen(process.env.PORTA, () => console.log(`--> API subiu na porta ${process.env.PORTA} <--`))