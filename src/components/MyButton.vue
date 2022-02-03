<template>
    <button class="btn">
        {{title}}
    </button>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style scoped>
.btn {
    width: 100%;
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 6px;
    margin: 0 8px 0 8px;

    transition: all ease-in-out;
    transition-duration: .5s;
}
.btn:hover {
    transform: translateY(1px);
    background-color: #048a81;
}
</style>