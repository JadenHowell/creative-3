<template>
<div class="wrapper">
  <div class="allPeople">
    <div class="person" v-for="person in people" :key="person.id">
      <div class="info">
        <h1>{{person.first_name}} {{person.last_name}}</h1>
        <h2>{{person.job}}</h2>
      
        <button class="auto" @click="date(person)">Request Date</button>

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PersonList',
  props: {
    people: Array
  },
  methods: {
    date(person){
      console.log(person);
      this.$root.$data.dates.push(person)
    }
  }
}
</script>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.allPeople {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.person {
  margin: 5px;
  margin-top: 30px;
  width: 200px;
}

.info {
  background: #fab4bd;
  color: #000;
  padding: 10px 30px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info h1 {
  font-size: 14px;
}

.info h2 {
  font-size: 12px;
}

button {
  height: 30px;
  background: #e0677a;
  color: white;
  border: none;
  margin: 1px;
}

</style>