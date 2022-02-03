<template>
    <div v-for="item in tarefasProx" :key="item.tarefa" class="princ">
        <p>{{item.tarefa}} / {{item.data}}</p>
    </div>
</template>

<script>
export default {
    props: {
        tarefasProx: Array
    }
}
</script>

<style>
.princ {
    --color-back: #064635;
    --color-text: #fff;

    background-color: var(--color-back);
    color: var(--color-text);
    text-align: center;

    margin-top: 5px;
    padding: 10px 25px;
}
</style>