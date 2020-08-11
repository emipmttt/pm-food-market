<template>
  <label class="switch" id="toggle">
    <input type="checkbox" />
    <span class="slider round">
      <p class="category">Chicken</p>
    </span>
  </label>
</template>

<script>
export default {
  name: "ToggleFilter",
};
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 110px;
  margin: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 50px;
  width: 50px;
  left: 5px;
  top: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #f4a261;
}

input:focus + .slider {
  box-shadow: 0 0 1px #f4a261;
}

input:checked + .slider:before {
  -webkit-transform: translateY(26px);
  -ms-transform: translateY(26px);
  transform: translateY(50px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.category {
  margin: 0;
  padding-top: 70px;
  text-align: center;
  font-size: 15px;
}
</style>