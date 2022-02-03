<template>
    <div>
        <Header />

        <div class="conteudo">
            <section>
                <form @submit.prevent="enviar" class="formulario">
                    <h1>Tarefas</h1>
                    <label for="tarefa">Atividade</label>
                    <input v-model="atividade.tarefa" id="tarefa" type="text" required/>
                    <label for="data">Data</label>
                    <input v-model="atividade.data" id="data" type="datetime-local" required/>

                    <section class="divBtn">
                        <Button type="submit" title="Adicionar"/>
                    </section>
                </form>

                <router-link to="/" class="divBtnVoltar">
                    <Button class="btnVoltar" title="Voltar"/>
                </router-link>
            </section>

            <section class="list">
                <h1>Tarefas adicionadas</h1>
                <ul>
                    <li v-for="item in listTarefas" :key="item.tarefa" class="itens">
                        {{item.tarefa}}
                        {{item.data}}
                        <i v-on:click="deletar(item)" class="bx bx-trash trashIcon"></i>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Button from '../components/MyButton.vue';
import localStorage from '../mixins/saveLocal';

export default {
    components: {
        Header,
        Button
    },
    data() {
        return {
            title: 'Adicionar',
            atividade: {
                tarefa: '',
                data: ''
            },
            listTarefas: [],
        }
    },
    methods: {
        enviar() {
            let objeto = {tarefa: this.atividade.tarefa, data: this.atividade.data};

            localStorage.salvar('Tarefa', objeto);
            this.listTarefas.push(objeto);

            this.atividade.tarefa = '';
            this.atividade.data = '';
        },
        deletar(item) {
            localStorage.deletar('Tarefa', item);

            let index = this.listTarefas.indexOf(item);
            this.listTarefas.splice(index,1);
        }
    },
}
</script>

<style scoped>
.conteudo {
    padding-top: 100px;
    display: flex;
    justify-content: space-evenly;

    --color-back: #064635;
    --color-text: #fff;
}
.formulario {
    width: 30em;
    display: flex;
    flex-direction: column;
    background-color: var(--color-back);
    border-radius: 10px;
}
.formulario > h1 {
    text-align: center;
    margin: 15px 0;
    font-size: 25px;
    color: var(--color-text);
}
.formulario > label {
    padding: 5px 25px;
    color: var(--color-text);
}
.formulario > input {
    margin: 2px 25px;
}
.divBtn {
    display: flex;
    justify-content: center;
    margin: 20px 85px;
}

.list {
    width: 350px;
    height: auto;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 10px;
}
.list > h1 {
    text-align: center;
}
.itens {
    padding: 3px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.itens:first-child {
    margin-top: 15px;
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
.divBtnVoltar {
    display: flex;
    margin: 15px 15px;
}
.btnVoltar {
    background-color: #2fbf71;
}
</style>