<template>
    <TheHeader/>
    <HeadingSection/>
    <JobSection :job="job"/>
    <JobAlertsSection/>
    <FooterSection/>
</template>

<script setup>
import JobAlertsSection from '../components/JobAlertsSection.vue';
import TheHeader from '../components/TheHeader.vue';
import HeadingSection from '../components/job-info-page/HeadingSection.vue';
import JobSection from '../components/job-info-page/JobSection.vue';

import { computed } from 'vue';
import { useJobsStore } from '../stores/jobs';
import { useRoute } from 'vue-router';
import FooterSection from '../components/FooterSection.vue';

const route = useRoute();

const jobsStore = useJobsStore();
const job = computed(() => jobsStore.jobs.find(job => job.job_title === route.params.job_title));

</script>

<style lang="scss" scoped>

</style>