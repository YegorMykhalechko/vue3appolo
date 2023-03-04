<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import MoviesSection from "./MoviesSection.vue";
import { GET_ORIGINAL_QUERY } from "../graphql/getOriginal";

const { result, loading, error } = useQuery(GET_ORIGINAL_QUERY, {
  mediaType: "all",
});
</script>

<template>
  <MoviesSection v-if="result && !loading && !error" title="Originals" :items="result.originalMovies.results" />
</template>
