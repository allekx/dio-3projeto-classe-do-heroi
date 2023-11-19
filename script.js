const btn = document.querySelector("#send");
    const infoHeroiDiv = document.querySelector("#infoHeroi");

    btn.addEventListener("click", function (e) {
        e.preventDefault();

        const nome = document.querySelector("#nome");
        const idade = document.querySelector("#idade");
        const classe = document.querySelector("#classe");

        const hero = {
            tipo: classe.value,
            user: nome.value,
            idade: idade.value
        };

       //mensagem do ataque
        const mensagemAtaque = atacar(hero);
        infoHeroiDiv.innerHTML = mensagemAtaque;
    });

    function atacar(hero) {
        let ataque;

        //o tipo de ataque com base no tipo do herói
        switch (hero.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'Camponês não causou dano';
        }

        // Retornando a mensagem do ataque
        return `O ${hero.tipo} ${ataque}`;
    }