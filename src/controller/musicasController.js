import * as bd from '../repository/musicasRepository.js'

import { Router } from 'express'
const endpoints = Router();

endpoints.post('/musica', async (req, resp) => {
    try {
        let musica = req.body
        let id = await bd.inserirMusica(musica)
        resp.send({
            novoId: id
        })
    } 
    catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

endpoints.get('/musicas', async (req, resp) => {
    try {
        let registros = await bd.consultarMusica()
        resp.send(registros)
    } 
    catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

endpoints.put('/musica/:id', async (req, resp) => {
    try {
        let id = req.params.id
        let musica = req.body
        

        let linhasafetadas = await bd.alterarMusica(musica, id)
        if (linhasafetadas >= 1) {
            resp.status(204).send()
        }
        else {
            resp.status(404).send({erro: "nenhum registro alterado"})
        }

    } 
    catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

endpoints.delete('/musica/:id', async (req, resp) => {
    try {
        let id = req.params.id
        let linhasAfetadas = bd.removerMusica(id)
        resp.send(linhasAfetadas)
    } 
    catch (err) {
        resp.status(404).send(
            {erro: err.message})
    }
})

export default endpoints