// ===========================
// JOGOS DA VNL
// ===========================

const jogos = [
  // SEMANA 1 - 03/06
  { data: "03/06", time1: "🇧🇪 Bélgica", placar1: 2, placar2: 3, time2: "🇵🇱 Polônia" },
  { data: "03/06", time1: "🇨🇳 China", placar1: 0, placar2: 3, time2: "🇨🇿 República Checa" },
  { data: "03/06", time1: "🇩🇴 Rep. Dominicana", placar1: 2, placar2: 3, time2: "🇹🇷 Turquia" },
  { data: "03/06", time1: "🇹🇭 Tailândia", placar1: 0, placar2: 3, time2: "🇷🇸 Sérvia" },
  { data: "03/06", time1: "🇺🇦 Ucrânia", placar1: 0, placar2: 3, time2: "🇺🇸 EUA" },
  { data: "03/06", time1: "🇮🇹 Itália", placar1: 3, placar2: 0, time2: "🇧🇬 Bulgária" },

  // 04/06
  { data: "04/06", time1: "🇨🇿 Rep. Checa", placar1: 0, placar2: 3, time2: "🇵🇱 Polônia" },
  { data: "04/06", time1: "🇹🇷 Turquia", placar1: 0, placar2: 3, time2: "🇳🇱 Países Baixos" },
  { data: "04/06", time1: "🇧🇷 Brasil", placar1: 3, placar2: 1, time2: "🇩🇴 Rep. Dominicana" },
  { data: "04/06", time1: "🇨🇳 China", placar1: 3, placar2: 2, time2: "🇹🇭 Tailândia" },
  { data: "04/06", time1: "🇺🇦 Ucrânia", placar1: 3, placar2: 2, time2: "🇩🇪 Alemanha" },
  { data: "04/06", time1: "🇨🇦 Canadá", placar1: 3, placar2: 0, time2: "🇺🇸 EUA" },

  // 05/06
  { data: "05/06", time1: "🇧🇪 Bélgica", placar1: 0, placar2: 3, time2: "🇨🇿 Rep. Checa" },
  { data: "05/06", time1: "🇩🇴 Rep. Dominicana", placar1: 0, placar2: 3, time2: "🇧🇬 Bulgária" },
  { data: "05/06", time1: "🇳🇱 Países Baixos", placar1: 0, placar2: 3, time2: "🇮🇹 Itália" },
  { data: "05/06", time1: "🇷🇸 Sérvia", placar1: 2, placar2: 3, time2: "🇵🇱 Polônia" },
  { data: "05/06", time1: "🇺🇦 Ucrânia", placar1: 1, placar2: 3, time2: "🇯🇵 Japão" },
  { data: "05/06", time1: "🇫🇷 França", placar1: 2, placar2: 3, time2: "🇺🇸 EUA" },

  // 06/06
  { data: "06/06", time1: "🇹🇭 Tailândia", placar1: 2, placar2: 3, time2: "🇧🇪 Bélgica" },
  { data: "06/06", time1: "🇧🇷 Brasil", placar1: 3, placar2: 0, time2: "🇧🇬 Bulgária" },
  { data: "06/06", time1: "🇨🇦 Canadá", placar1: 3, placar2: 1, time2: "🇫🇷 França" },
  { data: "06/06", time1: "🇨🇳 China", placar1: 3, placar2: 0, time2: "🇷🇸 Sérvia" },
  { data: "06/06", time1: "🇮🇹 Itália", placar1: 3, placar2: 1, time2: "🇹🇷 Turquia" },
  { data: "06/06", time1: "🇩🇪 Alemanha", placar1: 0, placar2: 3, time2: "🇯🇵 Japão" },

  // 07/06
  { data: "07/06", time1: "🇹🇭 Tailândia", placar1: 0, placar2: 3, time2: "🇨🇿 Rep. Checa" },
  { data: "07/06", time1: "🇨🇳 China", placar1: 3, placar2: 1, time2: "🇵🇱 Polônia" },
  { data: "07/06", time1: "🇺🇦 Ucrânia", placar1: 2, placar2: 3, time2: "🇫🇷 França" },
  { data: "07/06", time1: "🇧🇪 Bélgica", placar1: 3, placar2: 2, time2: "🇷🇸 Sérvia" },
  { data: "07/06", time1: "🇩🇴 Rep. Dominicana", placar1: 0, placar2: 3, time2: "🇳🇱 Países Baixos" },
  { data: "07/06", time1: "🇧🇷 Brasil", placar1: 3, placar2: 2, time2: "🇮🇹 Itália" },

  // SEMANA 2 - 17/06
  { data: "17/06", time1: "🇩🇴 Rep. Dominicana", placar1: 0, placar2: 3, time2: "🇺🇸 EUA" },
  { data: "17/06", time1: "🇨🇿 Rep. Checa", placar1: 0, placar2: 3, time2: "🇮🇹 Itália" },
  { data: "17/06", time1: "🇧🇬 Bulgária", placar1: 0, placar2: 3, time2: "🇵🇱 Polônia" },
  { data: "17/06", time1: "🇨🇦 Canadá", placar1: 3, placar2: 1, time2: "🇳🇱 Países Baixos" },
  { data: "17/06", time1: "🇩🇪 Alemanha", placar1: 2, placar2: 3, time2: "🇨🇳 China" },
  { data: "17/06", time1: "🇯🇵 Japão", placar1: 3, placar2: 2, time2: "🇷🇸 Sérvia" },

  // 18/06
  { data: "18/06", time1: "🇨🇿 Rep. Checa", placar1: 0, placar2: 3, time2: "🇺🇸 EUA" },
  { data: "18/06", time1: "🇺🇦 Ucrânia", placar1: 1, placar2: 3, time2: "🇵🇱 Polônia" },
  { data: "18/06", time1: "🇷🇸 Sérvia", placar1: 2, placar2: 3, time2: "🇮🇹 Itália" },
  { data: "18/06", time1: "🇧🇪 Bélgica", placar1: 2, placar2: 3, time2: "🇧🇷 Brasil" },
  { data: "18/06", time1: "🇹🇭 Tailândia", placar1: 3, placar2: 0, time2: "🇧🇬 Bulgária" },
  { data: "18/06", time1: "🇹🇷 Turquia", placar1: 3, placar2: 0, time2: "🇫🇷 França" },

  // 19/06
  { data: "19/06", time1: "🇩🇴 Rep. Dominicana", placar1: 0, placar2: 3, time2: "🇷🇸 Sérvia" },
  { data: "19/06", time1: "🇺🇦 Ucrânia", placar1: 0, placar2: 3, time2: "🇳🇱 Países Baixos" },
  { data: "19/06", time1: "🇯🇵 Japão", placar1: 3, placar2: 0, time2: "🇨🇿 Rep. Checa" },
  { data: "19/06", time1: "🇫🇷 França", placar1: 0, placar2: 3, time2: "🇨🇳 China" },
  { data: "19/06", time1: "🇧🇬 Bulgária", placar1: 1, placar2: 3, time2: "🇨🇦 Canadá" },
  { data: "19/06", time1: "🇧🇪 Bélgica", placar1: 0, placar2: 3, time2: "🇩🇪 Alemanha" },

  // 21/06
  { data: "20/06", time1: "🇺🇸 EUA", placar1: 3, placar2: 0, time2: "🇮🇹 Itália" },
  { data: "20/06", time1: "🇳🇱 Países Baixos", placar1: 1, placar2: 3, time2: "🇵🇱 Polônia" },
  { data: "20/06", time1: "🇯🇵 Japão", placar1: 1, placar2: 3, time2: "🇩🇴 Rep. Dominicana" },
  { data: "20/06", time1: "🇨🇳 China", placar1: 1, placar2: 3, time2: "🇧🇷 Brasil" },
  { data: "20/06", time1: "🇹🇭 Tailândia", placar1: 3, placar2: 1, time2: "🇨🇦 Canadá" },
  { data: "20/06", time1: "🇹🇷 Turquia", placar1: 3, placar2: 2, time2: "🇩🇪 Alemanha" },

  // 21/06 - continuação
  { data: "21/06", time1: "🇷🇸 Sérvia", placar1: 1, placar2: 3, time2: "🇺🇸 EUA" },
  { data: "21/06", time1: "🇧🇬 Bulgária", placar1: 3, placar2: 2, time2: "🇺🇦 Ucrânia" },
  { data: "21/06", time1: "🇨🇿 Rep. Checa", placar1: 3, placar2: 2, time2: "🇩🇴 Rep. Dominicana" },
  { data: "21/06", time1: "🇧🇪 Bélgica", placar1: 3, placar2: 2, time2: "🇫🇷 França" },
  { data: "21/06", time1: "🇨🇦 Canadá", placar1: 3, placar2: 2, time2: "🇵🇱 Polônia" },
  { data: "21/06", time1: "🇯🇵 Japão", placar1: 0, placar2: 3, time2: "🇮🇹 Itália" },
  { data: "21/06", time1: "🇩🇪 Alemanha", placar1: 3, placar2: 2, time2: "🇧🇷 Brasil" },
  { data: "21/06", time1: "🇹🇭 Tailândia", placar1: 0, placar2: 3, time2: "🇳🇱 Países Baixos" }
];
// ===========================
// GERAR RESULTADOS
// ===========================

const areaResultados = document.getElementById("ultimos-resultados");

if(areaResultados){

    jogos.forEach(jogo => {

        let cor1 = jogo.placar1 > jogo.placar2 ? "verde" : "vermelho";
        let cor2 = jogo.placar2 > jogo.placar1 ? "verde" : "vermelho";

        areaResultados.innerHTML += `

        <div class="resultado">

            <span>${jogo.time1}</span>

            <strong>

                <span class="${cor1}">${jogo.placar1}</span>

                x

                <span class="${cor2}">${jogo.placar2}</span>

            </strong>

            <span>${jogo.time2}</span>

        </div>

        `;

    });

}

// ===========================
// CADASTRO
// ===========================

function cadastrarUsuario(){

    alert("Cadastro realizado com sucesso!");

}
const listaJogos = document.getElementById("lista-jogos");

if (listaJogos) {
  jogos.forEach(jogo => {
    let cor1 = jogo.placar1 > jogo.placar2 ? "verde" : "vermelho";
    let cor2 = jogo.placar2 > jogo.placar1 ? "verde" : "vermelho";

    listaJogos.innerHTML += `
      <div class="jogo">
        <span>${jogo.data} • ${jogo.time1}</span>

        <strong>
          <span class="${cor1}">${jogo.placar1}</span>
          x
          <span class="${cor2}">${jogo.placar2}</span>
        </strong>

        <span>${jogo.time2}</span>
      </div>
    `;
  });
}
const tabelaClassificacao = document.getElementById("tabela-classificacao");

const classificacaoManual = [
  { nome: "🇺🇸 Estados Unidos", pj: 8, v: 7, d: 1, sets: "21:6", pts: 20 },
  { nome: "🇧🇷 Brasil", pj: 8, v: 7, d: 1, sets: "23:10", pts: 20 },
  { nome: "🇮🇹 Itália", pj: 8, v: 6, d: 2, sets: "20:9", pts: 18 },
  { nome: "🇵🇱 Polônia", pj: 8, v: 6, d: 2, sets: "21:12", pts: 17 },
  { nome: "🇯🇵 Japão", pj: 8, v: 6, d: 2, sets: "19:12", pts: 16 },
  { nome: "🇨🇦 Canadá", pj: 8, v: 5, d: 3, sets: "19:14", pts: 15 },
  { nome: "🇹🇷 Turquia", pj: 7, v: 5, d: 2, sets: "16:11", pts: 13 },
  { nome: "🇨🇳 China", pj: 7, v: 5, d: 2, sets: "16:11", pts: 13 },
  { nome: "🇳🇱 Países Baixos", pj: 8, v: 4, d: 4, sets: "15:12", pts: 12 },
  { nome: "🇨🇿 República Checa", pj: 8, v: 4, d: 4, sets: "12:14", pts: 11 },
  { nome: "🇩🇪 Alemanha", pj: 8, v: 3, d: 5, sets: "15:18", pts: 11 },
  { nome: "🇧🇪 Bélgica", pj: 8, v: 3, d: 5, sets: "13:21", pts: 8 },
  { nome: "🇷🇸 Sérvia", pj: 8, v: 2, d: 6, sets: "15:18", pts: 10 },
  { nome: "🇹🇭 Tailândia", pj: 8, v: 2, d: 6, sets: "12:19", pts: 9 },
  { nome: "🇺🇦 Ucrânia", pj: 8, v: 2, d: 6, sets: "12:22", pts: 6 },
  { nome: "🇧🇬 Bulgária", pj: 8, v: 2, d: 6, sets: "8:20", pts: 5 },
  { nome: "🇩🇴 República Dominicana", pj: 8, v: 1, d: 7, sets: "8:22", pts: 5 },
  { nome: "🇫🇷 França", pj: 8, v: 1, d: 7, sets: "9:23", pts: 4 }
];

if (tabelaClassificacao) {
  classificacaoManual.forEach((time, index) => {
    tabelaClassificacao.innerHTML += `
      <tr>
        <td>${index + 1}º</td>
        <td>${time.nome}</td>
        <td>${time.v}</td>
        <td>${time.d}</td>
        <td>${time.pts}</td>
        <td>${time.sets}</td>
      </tr>
    `;
  });
}
const totalJogos = document.getElementById("total-jogos");
const vitoriasBrasil = document.getElementById("vitorias-brasil");
const melhorCampanha = document.getElementById("melhor-campanha");
const maiorSaldo = document.getElementById("maior-saldo");

if (totalJogos) {
  totalJogos.textContent = jogos.length;

  let brasilVitorias = 0;
  const timesEstatisticas = {};

  jogos.forEach(jogo => {
    if (!timesEstatisticas[jogo.time1]) {
      timesEstatisticas[jogo.time1] = { v: 0, setsPro: 0, setsContra: 0 };
    }

    if (!timesEstatisticas[jogo.time2]) {
      timesEstatisticas[jogo.time2] = { v: 0, setsPro: 0, setsContra: 0 };
    }

    timesEstatisticas[jogo.time1].setsPro += jogo.placar1;
    timesEstatisticas[jogo.time1].setsContra += jogo.placar2;

    timesEstatisticas[jogo.time2].setsPro += jogo.placar2;
    timesEstatisticas[jogo.time2].setsContra += jogo.placar1;

    if (jogo.placar1 > jogo.placar2) {
      timesEstatisticas[jogo.time1].v++;
      if (jogo.time1.includes("Brasil")) brasilVitorias++;
    } else {
      timesEstatisticas[jogo.time2].v++;
      if (jogo.time2.includes("Brasil")) brasilVitorias++;
    }
  });

  let melhorTime = "";
  let maisVitorias = -1;
  let maiorSaldoSets = -999;

  Object.keys(timesEstatisticas).forEach(time => {
    const dados = timesEstatisticas[time];
    const saldo = dados.setsPro - dados.setsContra;

    if (dados.v > maisVitorias) {
      maisVitorias = dados.v;
      melhorTime = time;
    }

    if (saldo > maiorSaldoSets) {
      maiorSaldoSets = saldo;
    }
  });

  vitoriasBrasil.textContent = 7;
  melhorCampanha.textContent = "🇺🇸 EUA / 🇧🇷 Brasil";
  maiorSaldo.textContent = "+15";
}