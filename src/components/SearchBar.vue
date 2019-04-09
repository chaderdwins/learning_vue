<template>
    <div>
        <!-- this is a directive than wires up the input bar to the fxn onInput -->
        <input v-on:input="onInput" />
        <!-- v-on: == @ -->
    </div>

</template>

<script>
export default {
  //parameters
  name: "SearchBar",
  methods: {
      onInput: function(event){
          this.$emit('termChange', event.target.value);//passing data from child to the parent
      }
  }
};
</script>
<style>

</style>
