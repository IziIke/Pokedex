<template>
  <div>
    <div class="input-container">
      <input type="text" class="pokemon" name="pokemon" v-model="nomePokemon" placeholder="Digite o nome do Pokemon:">
    </div>
    <div class="input-container">
      <b-button variant="danger" class="submit-btn" @click="pesquisaPokemon" value="Pesquisar">Pesquisar</b-button>
    </div>
    <div class="principal">
      <idPokedex :id="id" />
      <PokemonNome :name="name" />
      <Tipo :tipo="tipo" />
    </div>
    <div class="card">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Status" active>
            <Status :status="status" />
          </b-tab>
          <b-tab title="Habilidades">
            <habilidades :habilidades="habilidades" />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import config from "./config.js"
import idPokedex from "./IdPokedex.vue";
import PokemonNome from "./PokemonNome.vue";
import Status from "./Status.vue";
import Tipo from "./Tipo.vue";
import habilidades from "./Habilidades.vue";

export default {
  name: "PesquisaPokemon",
  data() {
    return {
      nomePokemon: null,
      id: null,
      name: null,
      status: null,
      tipo: null,
      habilidades: null,
    };
  },
  methods: {
    pesquisaPokemon() {
      config(this.nomePokemon.toLowerCase())
        .then(res => {
          console.log(this.nomePokemon);
          this.id = res.id
          this.name = res.name
          this.status = res.stats
          this.tipo = res.types
          this.habilidades = res.abilities
          for (let i = 0; i < this.status.length; i++) {
            delete this.status[i].effort
          }
          this.$emit("pesquisar", res);
        });
    },
  },
  components: { idPokedex, PokemonNome, Status, Tipo, habilidades },
}

</script>

<style scoped>
input[type=text] {
  width: 30%;
  -webkit-transition: width 0.15s ease-in-out;
  transition: width 0.15s ease-in-out;
  margin: 0 auto;
  width: 50%;
  border-radius: 10px;
}


input[type=text]:focus {
  width: 70%;

}

#list {
  font-size: 1.5em;
  margin-left: 90px;
}

.pokemon {
  display: list-item;
  background-color: rgb(234, 234, 234);
}

.submit-btn {
  background-color: rgb(255, 255, 255);
  color: #000000df;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
  text-align: center;
}

.principal {
  background-color: rgb(40, 171, 0);
  color: #000000df;
  font-weight: bold;
  width: 50%;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  margin: 0 auto;
  border-radius: 10px;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;

}

.card {
  background-color: rgb(255, 255, 255);
  color: #000000df;
  font-weight: bold;
  width: 50%;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  margin: 0 auto;
  border: 2px solid #222;

}
</style>