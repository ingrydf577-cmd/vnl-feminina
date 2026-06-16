// ===========================
// JOGOS DA VNL
// ===========================

const jogos = [

    {
        time1: "🇧🇷 Brasil",
        placar1: 3,
        placar2: 0,
        time2: "🇳🇱 Holanda"
    },

    {
        time1: "🇯🇵 Japão",
        placar1: 3,
        placar2: 1,
        time2: "🇫🇷 França"
    },

    {
        time1: "🇮🇹 Itália",
        placar1: 3,
        placar2: 0,
        time2: "🇧🇬 Bulgária"
    }

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