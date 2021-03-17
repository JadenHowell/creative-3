<template>
  <div class="home">
    <div class="about">
      <h1>Welcome to Blind Matchmaker!</h1>
      <h2>
        Here, looks are the furthest from our mind. 
          See bottom of page for instructions about how to participate!
      </h2>
    </div>
    <PersonList :people="this.$root.$data.people"/>

    <div class="how">
      <h2>How to participate:</h2>
      <p>
        Above, you will see plenty of wonderful people. However, most dating apps are 
        shallow, focused on looks. Here at Blind Matchmaker, we believe the most important thing is
        how you <i>feel</i> about someone upon seeing their name or profession.
      </p>
      <p>
        So, set up your profile, mark when and where you would like your date to be, and go out and
        request dates with everyone who leaves an impression!
      </p>
      <p>
        Upon requesting a date, the other person will be notified. Once both parties have agreed to
        a date, you will be able to see where the other person would like their date. If that's out
        of your way, feel free to cancel! Break some hearts! Be free!
      </p>
    </div>
  </div>
</template>

<script>
import PersonList from "../components/PersonList.vue"

export default {
  name: 'Home',
  components: {
    PersonList
  }
}
</script>

<style scoped>
.about{
  text-align: center;
}

.about h2{
  width: 80%;
  margin: 0 auto;
}

.how{
  text-align: center;
}

.how p{
  width: 70%;
  margin: 5px auto;
}
p:last-of-type{
  margin-bottom: 25px;
}
</style>