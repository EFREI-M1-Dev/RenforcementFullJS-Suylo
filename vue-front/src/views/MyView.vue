<script setup lang="ts">
import {Ref, ref} from "vue";
const amount = ref(0);

type Pizza = {
  name: string;
  price: number;
};

const pizzas: Ref<Pizza[]> = ref([
  {
    name: "Margherita",
    price: 5,
  },
  {
    name: "Pepperoni",
    price: 7,
  },
  {
    name: "Hawaïenne",
    price: 8,
  }
]);

const pizzaInput = ref("");
const pizzaPrice = ref("");
function addPizza(newPizza: string, pizzaPrice: number): void{
  pizzas.value.push({
    name: newPizza,
    price: pizzaPrice,
  })
  pizzaInput.value = "";
}
</script>

<template>
  <main>
    <ul>
      <li v-for="pizza in pizzas">
        {{ pizza.name }} - {{ pizza.price }}€
      </li>
    </ul>

    <form>
      <input type="text" name="pizza" id="pizza" v-model="pizzaInput" placeholder="Nom pizza">
      <input type="number" name="price" id="price" v-model="pizzaPrice" placeholder="Price">
      <input type="submit" value="Ajouter pizza" @click.prevent="addPizza(pizzaInput, Number(pizzaPrice))">
    </form>
  </main>
</template>

<style scoped lang="scss">
main {
  font-weight: bold;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > div{
    &:nth-child(1){
      background: #1e645a;
    }
  }
}

</style>