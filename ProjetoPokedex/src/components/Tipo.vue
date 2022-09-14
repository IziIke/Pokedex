<template>
    <div>
        <p>O tipo do pokemon na Pokedex é: </p>
        <ul v-for="tipos in tipo" :key="tipos">
            {{tipos.type.name}}
        </ul>
    </div>
</template>

<script>

export default {

    name: "tipoPokedex",
    props: {
        tipo: null
    }
}
</script>