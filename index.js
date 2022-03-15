/*troca de card*/
const listaSelecaoPokemons = document.querySelectorAll('.pokemon') /*variavel listagem, busca todos os seletores pokemon (li)*/
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

/*troca por clique*/
listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto') 
        cartaoPokemonAberto.classList.remove('aberto') //tira a classe aberto do card em exibição

        const idPokemonSelecionado = pokemon.attributes.id.value
        const idCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const idPokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        idPokemonSelecionadoNaListagem.classList.add('ativo')

    })
})