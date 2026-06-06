<script setup>
import jobData from "@/jobs.json";
import { ref } from "vue";
const jobs = ref(jobData);
</script>

<template>
  <div v-for="job in jobs" :key="job.id">
    {{ job.title }}
  </div>
</template>
