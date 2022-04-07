let show = true
async function showMyPokemon() {
    if (show) {
        (await fetch('https://pokeapi.co/api/v2/pokemon/charizard')).json()
            .then(data => {
                const list = document.querySelector('#fill-list')

                data.moves.forEach(element => {
                    let li = document.createElement('li')
                    li.innerHTML = element.move.name
                    list.appendChild(li)
                });
                show= !show
            })
    }else{
        document.querySelector('#fill-list').innerHTML= ''
        show= !show
    }
}




