<template>
    <div>
        <p>Habilidades iniciais do pokemon: </p>
        <br>
        <ul v-for="habilidade in habilidades" :key="habilidade.id">
            <div class="text-center my-3">
                <b-button id="link-button" v-b-tooltip.hover.right :title="deschabilidade"
                    @mouseover="buscaHabilidade(habilidade.ability.url)">
                    {{habilidade.ability.name}}
                </b-button>
                <br>
                <br>
            </div>
        </ul>
    </div>
</template>

<script>
const { default: axios } = require("axios");

export default {
    name: "habilidadePokedex",
    data() {
        return {
            deschabilidade: null
        }
    },
    props: {
        habilidades: null
    },
    methods: {
        async buscaHabilidade(url) {
            await axios
                .get(url)
                .then(response => (this.deschabilidade = response.data.effect_entries[1].effect))
            console.log(this.deschabilidade)
        }
    },
    mounted() {
        this.buscaHabilidade()
    }
}
</script>
