<template>
    <TheHeader/>
    <div>
        <JobAlertsSection/>
    </div>
    <FooterSection/>
</template>

<script setup>
import FooterSection from '../components/FooterSection.vue';
import JobAlertsSection from '../components/JobAlertsSection.vue';
import TheHeader from '../components/TheHeader.vue';


</script>

<style lang="scss" scoped>
div {
    padding-top: 40px;
}
</style>