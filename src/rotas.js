import musicasController from './controller/musicasController.js'


export default function adicionarRotas (servidor) {
    servidor.use(musicasController)
}