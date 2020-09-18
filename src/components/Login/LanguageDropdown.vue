<template>
  <div class="dropdown">
    <form action>
      <label for="language" class="sr-only">Choose a Language:</label>
      <select id="language" name="language">
        <option value="繁體中文">繁體中文</option>
        <option value="English">English</option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LanguageDropdown',
};
</script>

<style scoped>
.dropdown {
  margin-top: 30px;
}
form select {
  color: #6d6d6d;
  height: 30px;
  width: 100px;
  padding: 5px;
  opacity: 0.7;
}
form select option {
}
</style>