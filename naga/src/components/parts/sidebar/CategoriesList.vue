<template>
    <div>
        <h3 class="heading">Categories</h3>
        <span class="divider-line mb-3"></span>
        <ul class="categories">
            <li><a href="#">Food <span>(12)</span></a></li>
            <li><a href="#">Travel <span>(22)</span></a></li>
            <li><a href="#">Lifestyle <span>(37)</span></a></li>
            <li><a href="#">Business <span>(42)</span></a></li>
            <li><a href="#">Adventure <span>(14)</span></a></li>
        </ul>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
.categories {
  padding: 0;
  margin: 0;
  font-weight: 400;
}

.categories li {
  padding: 0;
  margin: 0;
  position: relative;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px dotted #dee2e6;
  list-style: none;
}

.categories li a {
  display: block;
  font-size: 16px;
  color: black;
}

.categories li a span {
  position: absolute;
  right: 0;
  top: 0;
  color: #ccc;
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease;
}

.categories li a:hover {
  font-weight: bold;
}

.categories li a:hover span{
  font-weight: bold;
  color: black;
}
</style>