<script >
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['juegos']),
  },
  methods: {
    ...mapActions(['changeStock' ])
  },
  methods: {
    ...mapActions(['changeStock'])

  },
}
</script>

<template>
  
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <div class=" juegos wrapper">
      <h1 class="juegos__title">Tienda de Juegos</h1>

      <h3 class="juegos__description"> Lista de juegos</h3>
      <table class="juegos__table">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="juego in juegos" :key="juego.codigo">
            <td>{{ juego.codigo }}</td>
            <td>{{ juego.nombre }}</td>
            <td>{{ juego.stock }}</td>
            <td>{{ juego.precio }}</td>
            <td>
              <button @click="changeStock({ codigo: juego.codigo, action: 'sumar'})">+</button>
              <button @click="changeStock({ codigo: juego.codigo, action: 'restar'})">-</button>
            </td>
            
          </tr>
        </tbody>
      </table>
    </div>


  
</template>

<style >
.juegos {
   text-align: center;
}

table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
td,
th {
  padding: 10px;
}

.juegos__table {
  margin: 0 auto;
}

</style>
