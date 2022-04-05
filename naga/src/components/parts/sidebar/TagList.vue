<template>
    <div>
        <h3 class="heading">Tags</h3>
        <span class="divider-line mb-3"></span>
        <ul class="tags">
            <li v-for="(tag, i) in tags" :key="i">
              <a :href="tag.href">{{ tag.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          tags: [
            {
              name: 'Microphone',
              href: '#'
            },
            {
              name: 'Technology',
              href: '#'
            },
            {
              name: 'Recording',
              href: '#'
            },
            {
              name: 'Studio',
              href: '#'
            },
            {
              name: 'How to',
              href: '#'
            }
          ]
        }
      }

    }
</script>

<style>
.tags {
  padding: 0;
  margin: 0;
  font-weight: 400;
}

.tags li {
  padding: 0;
  margin: 0 4px 4px 0;
  display: inline-block;
}

.tags li a {
  float: left;
  display: block;
  border-radius: 4px;
  padding: 2px 6px;
  color: gray;
  background: #f2f2f2;
}

.tags li a:hover {
  color: white;
  background: var(--bs-primary) !important;
}
</style>