function save(tipo, dados) {
    localStorage.setItem(tipo, dados);
}

function list(tipo) {
    let dados = localStorage.getItem(tipo);
    return dados;
}

function salvar(key, objeto) {
    let dados = JSON.parse(list(key));
    if(dados) {
        dados.push(objeto);

        save(key, JSON.stringify(dados));
    }else {
        let list = [];
        list.push(objeto);
        save(key, JSON.stringify(list));
    }
    
}
function deletar(key, item) {
    let lista = JSON.parse(list(key));
    lista.forEach(element => {
        if(element.tarefa === item.tarefa && element.data === item.data) {
            let indexLocal = lista.indexOf(element);
            lista.splice(indexLocal, 1);
            save(key, JSON.stringify(lista));
        }
    });

}



export default {salvar, deletar, list}