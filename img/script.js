// script.js - EcoFazenda Inteligente

// ----------------------------
// Simulação de sensores
// ----------------------------
function lerSensor(sensor) {
    switch(sensor) {
        case "temperatura":
            return (20 + Math.random() * 15).toFixed(1); // 20°C a 35°C
        case "umidade":
            return (30 + Math.random() * 70).toFixed(1); // 30% a 100%
        case "luminosidade":
            return (0 + Math.random() * 1000).toFixed(0); // 0 a 1000 lux
        default:
            console.warn(`Sensor ${sensor} não reconhecido!`);
            return null;
    }
}

// ----------------------------
// Controle de irrigação
// ----------------------------
function controleIrrigacao(umidade) {
    if(umidade < 50) {
        console.log("🌱 Irrigação ativada: solo seco!");
        return true;
    } else {
        console.log("💧 Solo úmido, irrigação desligada.");
        return false;
    }
}

// ----------------------------
// Controle de iluminação
// ----------------------------
function controleIluminacao(luminosidade) {
    if(luminosidade < 300) {
        console.log("💡 Luz artificial ligada: pouca luminosidade!");
        return true;
    } else {
        console.log("☀️ Luz natural suficiente, iluminação desligada.");
        return false;
    }
}

// ----------------------------
// Monitoramento diário
// ----------------------------
function monitorarFazenda() {
    const temperatura = lerSensor("temperatura");
    const umidade = lerSensor("umidade");
    const luminosidade = lerSensor("luminosidade");

    console.log("📊 Leitura dos sensores:");
    console.log(`Temperatura: ${temperatura} °C`);
    console.log(`Umidade: ${umidade} %`);
    console.log(`Luminosidade: ${luminosidade} lux`);

    controleIrrigacao(umidade);
    controleIluminacao(luminosidade);

    console.log("------");
}

// ----------------------------
// Loop de monitoramento (a cada 5 segundos)
// ----------------------------
setInterval(monitorarFazenda, 5000);
