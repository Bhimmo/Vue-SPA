<template>
    <nav class="barraNav fixed">
        <router-link to="/"><i class='bx bx-calendar-check logo' ></i></router-link>
        <div class="componentsNav">
            <router-link to="/tarefa"><h2>Atividade</h2></router-link>
        </div>
        <section v-if="logado" class="divBtn">
            <button v-if="!logado" class="btn">Sign in</button>
            <button v-if="!logado" class="btn">Sign up</button>
        </section>
    </nav>
</template>

<script>
export default {
    props: {
        logado: Boolean
    }
}
</script>

<style scoped>
.barraNav {
    --color-text: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px 0 25px;
    height: 4em;
    width: 100%;

    background-color: #064635;
    color: var(--color-text);
}
/* STYLE LOGO */
.logo {
    font-size: 2em;
}
/* STYLE ITEMS */
.componentsNav {
    display: flex;
}
/* STYLE BTNS */
.divBtn {
    width: 12em;
    text-align: center;
}
.btn {
    border: 2px solid var(--color-text);
    border-radius: 10px;
    padding: 6px;
    margin: 0 8px 0 8px;

    transition: all ease-in-out;
    transition-duration: .5s;
}
.btn:hover {
    transform: translateY(-1px);
    background-color: #048a81;
}

</style>