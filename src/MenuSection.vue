<template>
  <section class="hero is-primary is-medium">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar is-dark is-fixed-top">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img
                src="https://bulma.io/images/bulma-type-white.png"
                alt="Logo"
              >
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroA" v-on:click="burgerIsOpen = !burgerIsOpen" :class="{'is-active': burgerIsOpen}">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu" :class="{'is-active': burgerIsOpen}">
            <div class="navbar-start">
              <a v-for="item in items"
                :key="item.id"
                class="navbar-item"
                v-on:click="selectItem(item.id)"
                :href=item.link
                :class="{'is-active': isSelected(item.id) }">
                <h5 class="title is-5">{{ item.name }}</h5>
              </a>
            </div>
            <div class="navbar-end">
              <a class="navbar-item brand-icon" href="#">
                <span class="icon is-large brand-icon__span">
                  <font-awesome-icon :icon="['fab', 'twitter']" size="lg"/>
                </span>
              </a>

              <a class="navbar-item brand-icon" href="#">
                <span class="icon is-large brand-icon__span">
                  <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
                </span>
              </a>
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
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Om oss',
          link:'#about'
        },
        {
          id: 2,
          name: 'Meny',
          link:'#menu'
        },
        {
          id: 3,
          name: 'Boka kock',
          link:'#chefs'
        },
        {
          id: 4,
          name: 'Kontakta oss',
          link:'#contact'
        },
      ],
      selected: 1,
      burgerIsOpen: false
    }
  },
  methods: {
    navItem(event) {
      event.target.classList.toggle('is-active');
    },
    isSelected(id) {
      return this.selected === id;
    },
    selectItem(id) {
      this.selected = id;
      this.burgerIsOpen = false;
    }
  }
}
</script>

<style lang="scss">
@import './style.scss';

.hero {
  background-image: url('./assets/header.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.navbar.is-dark {
  background-color: #212121!important;
}

.navbar-menu {
  &.is-active {
    background-color: #424242!important;
  }
}

.navbar-item {
  &.is-active {
    background-color: #616161!important;
  }

  &:hover {
    color: white!important;
    background-color: #616161!important;
  }
}

.brand-icon {
  background-color: inherit!important;

  &__span {
    border: 2px solid white;
    border-radius: 100px;
    cursor: pointer;
    -webkit-transition: all 1s ease; /* Safari prior 6.1 */
    transition: all 1s ease;

    &:hover {
      background-color: white;
      
      svg {
        color:black;
      }
    }
  }
}

</style>