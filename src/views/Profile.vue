<template>
    <div class='profile'>
      <h1>Tell Us About Yourself:</h1>

      <div class="top-section">
        <div class='name subsection'>
            <h3>Name:</h3>
            <p class='first-last-name'>{{username}}</p>
            <form class="pure-form name-inputs">
            <i class="fas fa-search mysearch"></i><input v-model="firstnameText"/>
            <i class="fas fa-search mysearch"></i><input v-model="lastnameText"/>
            <button @click="submitNames"> Update name </button>
            </form>
        </div>
      </div>

      <div class='about'>
    
        <div class='profession subsection'>
          <h3>Profession:</h3>
          <p class='user-profession'>{{profession}}</p>
          <form class="pure-form name-inputs">
            <i class="fas fa-search mysearch"></i><input v-model="jobText"/>
            <button @click="submitJob">Update profession</button>
          </form>
        </div>

        <div class='location subsection'>
          <h3>Dream date location:</h3>
          <p class='user-profession'>{{location}}</p>
          <form class="pure-form name-inputs">
            <i class="fas fa-search mysearch"></i><input v-model="locationText"/>
            <button @click="submitLocation">Update location</button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    data() {
        return{
          firstnameText: "First Name",
          lastnameText: "Last Name",
          jobText: "Profession",
          locationText: "Location",
        }
    },
    computed: {
        username(){
            let first = this.$root.$data.user.first_name;
            let last = this.$root.$data.user.last_name; 
            if(last == "UNKNOWN"){
                last = "";
            }
            return first + " " + last;
        },
        profession(){
            return this.$root.$data.user.profession;
        },
        location(){
            return this.$root.$data.user.location;
        }
    },
    methods: {
        submitNames(event){
            event.preventDefault();
            if(this.firstnameText == "First Name") return;
            this.$root.$data.user.first_name = this.firstnameText;
            if(this.lastnameText == "Last Name") return;
            this.$root.$data.user.last_name = this.lastnameText;
        },
        submitJob(event){
            event.preventDefault();
            if(this.jobText == "Profession") return;

            this.$root.$data.user.profession = this.jobText;
        },
        submitLocation(event){
            event.preventDefault();
            if(this.locationText == "Location") return;
            this.$root.$data.user.location = this.locationText;
        }
    }
}
</script>

<style scoped>

.profile h1{
    text-align:center;
}

.name-inputs{
    display:flex;
    flex-direction: column;
    width: 70%;
    margin: 0 auto;
}

input{
    margin-bottom: 10px;
}

.top-section{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.about{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.subsection{
    margin-bottom: 20px;
    width: 500px;
    text-align: center;
}
</style>