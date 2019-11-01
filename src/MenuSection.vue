<template>
<section class="hero is-primary is-medium">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar is-dark is-fixed-top">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item is-active">
              Om oss
            </a>
            <a class="navbar-item">
              Meny
            </a>
            <a class="navbar-item">
              Boka bord
            </a>
            <a class="navbar-item">
              Hitta hit
            </a>
          </div>
          <div class="navbar-end">
            <i class="fas fa-facebook-f"></i>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-centered">
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'menu',
  components: {
  }
}
</script>

<style>
.hero {
  background-image: url('./assets/header.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.navbar.is-dark {
  background-color: #363636!important;
}
</style>