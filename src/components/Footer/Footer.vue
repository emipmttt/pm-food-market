<template>
  <div class="footer">
    <span>Platzi Master Project</span>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  height: 50px;
  width: 100%;
  margin-top: 40px;
  display: flex;
  background-color: #f4a261;
  & span {
    color: white;
    padding-left: 10px;
    justify-content: start;
    align-self: center;
  }
}
</style>