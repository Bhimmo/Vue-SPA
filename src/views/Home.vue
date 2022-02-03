<template>
  <div class="home">
    <Header :logado="logado"/>
    <div class="conteudo">
      <h1>Hoje - {{dataAtual}}</h1>

      <section v-if="tarefasAtual.length > 0" class="table">
        <table class="table-auto">
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Horário</th>
              <th>Done</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody v-for="item in tarefasAtual" :key="item.tarefa">
            <tr>
              <td>{{item.tarefa}}</td>
              <td>{{item.horario}}</td>
              <td><input id="done" name="done" type="checkbox" v-on:click="doneItem"/></td>
              <td><i v-on:click="deletar(item)" class="bx bx-trash trashIcon"></i></td>
            </tr>
          </tbody>
        </table>
      </section>
      <section v-else>
        <div>
          <p class="textErro">
            Sem atividades para hoje! Adicione uma nova tarefa.
          </p>
        </div>
      </section>

      <section class="proxSection">
        <h1>Próximos dias</h1>
        <CardTarefas :tarefasProx="tarefasProx"/>
      </section>

    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import CardTarefas from '../components/cardTarefas.vue';
import localStorage from '../mixins/saveLocal';

export default {
  components: {
    Header,
    CardTarefas
  },
  data() {
    return {
      logado: false,
      dataAtual: '',
      tarefasAtual: [],
      tarefasProx: [],
    }
  },
  name: 'Home',
  created() {
    let date = new Date();
    this.dataAtual = date.toLocaleDateString();

    let dados = JSON.parse(localStorage.list('Tarefa'));
    if(dados) {
      dados.forEach(element => {
        let arrayData = element.data.split('T');
        element.data = arrayData[0];
        element.horario = arrayData[1];

        let arrayDataEl = element.data.split('-');
        let dataEl = arrayDataEl[2] + "/" + arrayDataEl[1] + "/" + arrayDataEl[0];

        if(dataEl == this.dataAtual) {
          this.tarefasAtual.push(element);
        }else {
          this.tarefasProx.push(element);
        }
      });
    }
  },
  methods: {
    doneItem(target) {
      let div = target.srcElement.parentNode.parentNode
      if(target.srcElement.checked){
        div.classList.add('statusDone');
      }else{
        div.classList.remove('statusDone');
      }
    },
    deletar(item) {
      item.data = item.data + 'T' + item.horario;
      localStorage.deletar('Tarefa', item);

      let index = this.tarefasAtual.indexOf(item);
      this.tarefasAtual.splice(index,1);
    }
  }
}
</script>

<style scoped>
/* STYLE ALL */
.home {
  --color-back: #064635;
  --color-text: #fff;
}

/* STYLE CONTEUDO */
.conteudo {
  padding-top: 80px;
  margin: 0 50px 0 50px;
}
.conteudo > h1 {
  padding-bottom: 15px;
  font-size: 35px;
  border: 1px solid;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom-color: black;
}
.table{
  width: 100%;
}
.table > table {
  width: 100%;
  margin-bottom: 35px;
}
.table > table > thead{
  background-color: var(--color-back);
  color: var(--color-text);
}
.table > table > tbody {
  text-align: center;
}
.statusDone {
  background-color: #80bca3;
  text-decoration: line-through 3px;
}
.trashIcon {
  color: red;
  padding: 5px;
  font-size: 18px;
}
.trashIcon:hover {
  cursor: pointer;
  background-color: gainsboro;
  border-radius: 8px;
}
.textErro {
  background-color: #ef2d56;
  padding: 15px;
  color: #000;
  font-size: 17px
}
.proxSection > h1 {
  margin-top: 15px;
  font-size: 27px;
}
</style>
