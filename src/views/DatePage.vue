<template>
  <div class="date-page">
    <h1>Your date requests:</h1>

    <div v-if="unknown">
      <h2>Sorry! Gotta set up your profile before you can get any dates going.</h2>
    </div>

    <div v-else>
      <DatesList :people="this.$root.$data.dates"/>

      <hr/>
      <div class='nowWhat'>
        <h2>What now?</h2>
        <p>Because you are new to our service, you can sit back and watch the dates roll in!</p>
        <p>When people mutually requets dates with each other, one of the two people is randomly selected
          to have the option to reach out and schedule the date in either location prefered by the parties. 
          For your first week, the other person will always have the responsibility of reaching out!</p>
        <p>If you don't feel like following through with someone you requested a date with,
          you can cancel the date before they have the chance to request a date with you too.</p>
      </div>
    </div>
  </div>
</template>

<script>
import DatesList from "../components/DatesList.vue"

export default {
  name: 'Dates',
  components: {
    DatesList
  },
  computed: {
    unknown(){
      return this.$root.$data.user.first_name=="UNKNOWN";
    }
  }
}
</script>

<style scoped>
.date-page{
  text-align: center;
}
</style>