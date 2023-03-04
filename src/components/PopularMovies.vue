<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import { GET_POPULAR_QUERY } from "../graphql/getPopular";
import MoviesSection from "./MoviesSection.vue";

const { result, loading, error } = useQuery(GET_POPULAR_QUERY);

</script>

<template>
  <MoviesSection v-if="result && !loading && !error" title="Popular" :items="result.popularMovies.results" />
</template>
