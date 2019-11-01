<template>
  <section class="main has-navbar-fixed-top" id="app">
    <menu-section></menu-section>

    <section class="section section-padding-large">
      <div class="container is-fluid columns is-desktop">
        <div class="column is-three-fifths">
          <img src="./assets/img1234.jpg" />
        </div>
        <div class="column">
          <h3 class="title is-2">Den lilla restaurangen med stora ambitioner</h3>
          <p>Med respekt för naturen och den goda smaken vill vi förmedla vad årstiderna har att erbjuda. Genom hantverk och passion sätter vi vår definition på modern matlagning. Välkomna till Antibarbarus där er upplevelse är vårt fokus.</p>
        </div>
      </div>
    </section>

    <section class="section section-padding-large section-1">
      <div class="level column is-mobile">
        <div class="column level-item has-text-centered">
          <h3 class="title is-2">Meny</h3>
        </div>
        <div class="column level-item has-text-centered">
          <button class="button is-my-color">Meny</button>
        </div>
      </div>
    </section>


  </section>
</template>

<script>
import MenuSection from './MenuSection.vue';

export default {
  name: 'app',
  components: {
    MenuSection
  }
}
</script>

<style>
.section-1{
  background-image: url('./assets/antibarbarus-darker.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.button.is-my-color {
  background-color: tomato!important;
  border-color: transparent!important;
  color: #fff!important;
}
</style>
