import con from "./connection.js";

export async function inserirMusica(musica) {
    let comando = `
    insert into tb_musicas (nm_musica, ds_artista, dt_lancamento, qtd_visualizacoes, hr_duracao, bt_destaque, ds_idioma)
	value (?, ?, ?, ?, ?, ?, ?);
    `

    let resposta = await con.query (comando, [musica.nome, musica.artista, musica.lancamento, musica.visualizacoes, musica.duracao, musica.destaque, musica.idioma]);
    let info = resposta[0]

    return info.insertId
}

export async function consultarMusica() {
    let comando = `
    select id_musica    id,
            nm_musica   nome,
            ds_artista  artista,
            dt_lancamento   lancamento,
            qtd_visualizacoes   visualizacoes,
            hr_duracao  duracao,
            bt_destaque destaque,
            ds_idioma   idioma
        from tb_musicas
    `
    let resposta = await con.query (comando)
    let info = resposta[0]

    return info
}

export async function alterarMusica (musica, id) {
    let comando = `
    update tb_musicas
        set nm_musica = ?,
            ds_artista = ?,
            dt_lancamento = ?,
            qtd_visualizacoes = ?,
            hr_duracao = ?,
            bt_destaque = ?,
            ds_idioma = ?
        where id_musica = ?
        `
    let resposta = await con.query (comando, [musica.nome, musica.artista, musica.lancamento, musica.visualizacoes, musica.duracao, musica.destaque, musica.idioma, id])
    let info = resposta[0]
    let registros = info.affectedRows

    return registros
}

export async function removerMusica (id) {
    let comando = `
        delete from tb_musicas 
            where id_musica = ?
    `

    let resposta = await con.query (comando, [id])
    let info = resposta [0]
    return info.affectedRows
}