<template>
    <div>
        <h3 class="heading">Tags</h3>
        <span class="divider-line mb-3"></span>
        <ul class="tags">
            <li><a href="#">Travel</a></li>
            <li><a href="#">Adventure</a></li>
            <li><a href="#">Food</a></li>
            <li><a href="#">Lifestyle</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Freelancing</a></li>
            <li><a href="#">Travel</a></li>
            <li><a href="#">Adventure</a></li>
            <li><a href="#">Food</a></li>
            <li><a href="#">Lifestyle</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Freelancing</a></li>
        </ul>
    </div>
</template>

<script>
    export default {

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