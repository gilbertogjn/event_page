AOS.init()

const dataEvento = new Date('Mar 06, 2024 20:00:00')
const timeStampEvento = dataEvento.getTime()

const contaHoras = setInterval(function() {
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const distanciaEvento = timeStampEvento - timeStampAtual

    const diaEmMs = 1000 * 60 * 60 * 24
    const horaEmMs = 1000 * 60 * 60
    const minutoEmMs = 1000 * 60

    const diasAteEvento = Math.floor(distanciaEvento / diaEmMs)
    const horasAteEvento = Math.floor(distanciaEvento % diaEmMs / horaEmMs)
    const minutosAteEvento = Math.floor(distanciaEvento % horaEmMs / minutoEmMs)
    const segundoAteEvento = Math.floor((distanciaEvento % minutoEmMs) / 1000) 

    document.getElementById('contador').innerHTML = 
        `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundoAteEvento}s`

    if(distanciaEvento < 0) {
        clearInterval(contaHoras)
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000)