<template>
  <div class="header">
    <div class="container">
        <div class="header-logo">
          <router-link to="/">
              <img src="https://wgl-demo.net/pawscare/wp-content/uploads/2021/05/logo-header.png" alt="Logo" />
          </router-link>
        </div>
        <div class="header-center">
          <div class="header-center-item">
            <router-link to="/service">
              <span>Service</span>
            </router-link>
          </div>
          <div class="header-center-item">
            <router-link to="/contact">
              <span>
                Contact
              </span>
            </router-link>
          </div>
          <div class="header-center-item">
            <router-link to="/shop">
              <span>
                Shop
              </span>
            </router-link>
          </div>
        </div>
      <div class="header-right" >
        <div class="header-right-items">
          <font-awesome-icon icon="basket-shopping" />
          <font-awesome-icon icon="magnifying-glass" />
        </div>
        <button class="header-right-button">
          <div class="button-icon"><font-awesome-icon icon="phone" /></div>
          <div class="button-content">0899488142</div>
        </button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "HeaderView"
}
</script>
