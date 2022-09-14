<template>
    <div>
        <p>Status:</p>
        <li v-for="stats in status" :key="stats">
            {{stats.stat.name}} : {{stats.base_stat}}
            <b-progress :value= stats.base_stat :max="255" class="mb-3"></b-progress>
        </li>
    </div>
</template>

<script>

export default {

    name: "statusPokedex",
    data() {
        return {
        }
    },
    props: {
        status: null
    }
}

</script>