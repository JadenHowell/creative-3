<template>
<div id="app">
  <div class="header">
    <div id="left">
      <router-link to="/profile">Profile</router-link>
    </div>
    <div id="brand">
      <router-link to="/">
        <img id ="icon" src="https://live.staticflickr.com/2403/5709844542_6313c2834a.jpg">
      </router-link>
    </div>
    <div id="right">
      <router-link to="/dates">Your dates</router-link>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer">
    To view my GitHub repo, click <a href="https://github.com/JadenHowell/creative-3">here</a> 
  </div>
</div>
</template>

<style>
html {}

body {
  margin: 50px 100px;
  font-family: 'Bellota Text', cursive;
}

#app {}

a{
  text-decoration: none;
}

h1 {
  font-family: 'Mystery Quest', cursive;
}

.header{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "left brand right";
  margin-bottom: 50px;
}

#left {
  grid-area: left;
  display: flex;
  justify-content: flex-start;
}
#brand {
  grid-area: brand;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#brand img {
  height: 200px;  
}
#right {
  grid-area: right;
  display: flex;
  justify-content: flex-end;
}

#icon{
  height: 12vw;
}

.content {
  min-height: 500px;
}

.footer {
  padding: 30px;
  background-color: #efefef;
  text-align: center;
}
</style>
