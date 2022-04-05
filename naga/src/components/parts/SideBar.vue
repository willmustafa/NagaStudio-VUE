<template>
  <div class="sidebar-wrap">
      <AuthorDetails />
      <CategoriesList />
      <TagList />
  </div>
</template>

<script>
import AuthorDetails from '../parts/sidebar/AuthorDetails.vue'
import CategoriesList from '../parts/sidebar/CategoriesList.vue'
import TagList from '../parts/sidebar/TagList.vue'

export default {
    components: {
        AuthorDetails,
        CategoriesList,
        TagList
    }
}
</script>

<style>
.sidebar-wrap{
    padding-left: 3em;
}

.sidebar-wrap > * {
    margin-bottom: 3em;
}
</style>