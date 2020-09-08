<template>
  <div class="admin-layout">
    <aside class="admin-layout__nav">
    
        <router-view to="/administrar/">

        </router-view>
        <router-view></router-view>
       
    </aside>
    <aside class="admin-layout__contain">



    </aside>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.admin-layout {
  display: flex;

  &__nav {
    flex: 2;
  }

  &__contain {
    flex: 4;
  }
}
</style>