<template>
    <div class="login">
        <div class="left">
            <h1 class="textCentral">Faça seu Login</h1>
            <img class="imgLogin" src="../assets/animate-login.svg"/>
        </div>
        <div class="right">
            <div class="divForm">
                <h1 class="">Login</h1>
                <form class="myForm">

                    <label for="email">Email</label>
                    <input id="email" class="input" type="email" placeholder="Your email"/>

                    <label for="pass">Password</label>
                    <input id="pass" class="input" type="password" placeholder="Your password"/>

                    <button class="btn">
                        <p>Entrar</p>
                    </button>

                </form >
                <section class="cadastro">
                    <router-link to="/cadastro" class="btnCadastro">Cadastre-se</router-link>
                </section>
                
                <hr class="separacao"/>

                <section class="icons">
                    <a>
                        <i class="bx bxl-google icon1"/>
                        <legend>Google</legend>
                    </a>
                    <a>
                        <i class="bx bxl-twitter icon2"/>
                        <legend>Twitter</legend>
                    </a>
                </section>

            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
/* STYLE ALL */
.login {
    background-color: #000000;
    height: 100vh;

    display: flex;
    justify-content: space-around;
    align-items: center;

    --color-text: #fff;
    --color-goo: #ea4335;
    --color-tt: #1d9bf0;
}
/* STYLE LEFT */
.left {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.imgLogin {
    height: 30em;
}

.textCentral {
    text-align: center;
    font-size: 35px;
    color: var(--color-text);
}

/* STYLE RIGHT */
.right {
    width: 50vh;
}
.divForm {
    padding: 2em;
    background-color: #064635;
    border-radius: 10px;
    height: auto;
    width: 100%;
}
.divForm > h1 {
    text-align: center;
    font-size: 2em;
    color: var(--color-text);
}
.myForm {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.myForm > label {
    color: var(--color-text);
    padding: 5px;
    margin-top: 20px;
    font-size: 1em;
}
.myForm .input {
    border-radius: 8px;
    width: 100%;
    height: 2em;
    padding: 5px 5px 5px 15px;
}
.btn {
    margin-top: 2em;
    background-color: #4AA96C;
    border-radius: 15px;
    height: 35px;

    transition: all ease;
    transition-duration: 1s;
}
.btn > p{
    font-size: 20px;
}
.btn:hover {
    transform: translateY(-8px);
}

.cadastro {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

.btnCadastro {
    font-size: 1em;
    color: var(--color-text);
    text-decoration: underline;

    transition: all;
    transition-duration: 1s;
}
.btnCadastro:hover {
    color: #29BB89;
}

.separacao {
    margin-top: 20px;
}

.icons {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}
.icons > a {
    margin-top: 25px;
    width: 7em;
    height: 3em;
    border-radius: 20px;
    display: flex;
    align-items: center;
}
.icons > a {
    border: 2px solid #fff;
    display: flex;
    cursor: pointer;

    transition: all ease;
    transition-duration: .5s;
}
.icons > a:hover:first-child {
    background-color: brown;
    transform: translateY(5px);
}
.icons > a:hover:last-child {
    background-color: turquoise;
    transform: translateY(5px);
}
.icon1 {
    color: var(--color-goo);
    font-size: 20px;
    padding: 0 0 0 1em;
}
.icon2 {
    color: var(--color-tt);
    font-size: 20px;
    padding: 0 0 0 1em;
}
.icons > a > legend {
    color: var(--color-text);
    font-size: 12px;
    margin-left: 5px;
}

@media screen and (max-width: 1100px) {
    .imgLogin {
        height: 0em;
    }

}
@media screen and (max-width: 700px) {
    .textCentral {
        font-size: 0;
    }
    .login {
        justify-content: center;
    }

}


</style>