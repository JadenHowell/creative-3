<template>
<div class="wrapper">
  <h1>Mutual requests:</h1>
  <div v-if="anyAccepted" class="accepted">
    <div class="person" v-for="person in accepted" :key="person.id">
      <div class="info-accepted">
        <h2>{{person.first_name}} {{person.last_name}}</h2>
        <h3>Date location requested: {{person.city}}</h3>
      </div>
    </div>
  </div>
  <div v-else>
    <h3>No mutual requests yet, keep requesting dates!</h3>
  </div>

  <hr/>

  <h1>Pending:</h1>
  <div v-if="anyPending" class="pending">
    <div class="person" v-for="person in pending" :key="person.id">
      <div class="info-pending">
        <h2>{{person.first_name}} {{person.last_name}}</h2>
        <button class="auto" @click="cancel(person)">Cancel Request</button>
      </div>
    </div>
  </div>
  <div v-else>
    <h3>No pending dates right now!</h3>
  </div>
</div>
</template>

<script>
export default {
  name: 'DatesList',
  props: {
    people: Array
  },
  computed: {
      accepted(){
          return this.people.filter((person) => person.pending==false);
      },
      pending(){
          return this.people.filter((person) => person.pending==true);
      },
      anyAccepted(){
        return this.accepted.length > 0;
      },
      anyPending(){
        return this.pending.length > 0;
      }
  },
  methods: {
      cancel(person){
        for( var i = 0; i < this.$root.$data.dates.length; i++){
            if ( this.$root.$data.dates[i] === person) {
              this.$root.$data.dates[i].scheduled = false;
              this.$root.$data.dates.splice(i, 1); 
            }
        }
      }
  }
}
</script>

<style scoped>

.accepted{
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.pending{
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

.info-accepted{
  background: #fac8cf;
  color: #000;
  padding: 10px 30px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info-pending{
  background: #fab4bd;
  color: #000;
  padding: 10px 30px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

button {
  height: 30px;
  background: #e0677a;
  color: white;
  border: none;
  margin: 1px;
}

</style>