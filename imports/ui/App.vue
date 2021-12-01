<template>
<div>
  <!-- <div>
    <router-link to="/grevience"><grevience/></router-link>
    <router-link to="/admin"><admin/></router-link>
  </div> -->
  <router-view/>
</div>
</template>

<script>
import Grevience from "./components/Grevience.vue"
import Admin from "./components/Admin.vue"
import "./assets/styles.css"
export default {
  components: {
    Grevience,
    Admin
  },
}
</script>