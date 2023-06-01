<template>
    <div class="container">
        <div v-if="job" class="content">
            <img src="../../assets/job-logos/5d255a9f-9391-4a9f-b0ba-9f96c1608103.png"
                 alt="">
            <div class="title-desc">
                <h2>{{ job.job_title }}</h2>
                <div class="description">
                    <span class="name">{{ job.company }}</span>
                    <div class="link">
                        <i class="fa-solid fa-link"></i>
                        <span>Website</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="content">
            <h2>Couldn't find resource.</h2>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useJobsStore } from '../../stores/jobs';
import { useRoute } from 'vue-router';

const route = useRoute();

const jobsStore = useJobsStore();
const job = computed(() => jobsStore.jobs.find(job => job.job_title === route.params.job_title));

onMounted(() => {
    console.log(route.params);
    console.log(job.value);
})

</script>

<style lang="scss" scoped>
div.container {
    padding-top: 150px;
    padding-bottom: 50px;
    background-color: var(--background-color-secondary);

    & div.content {
        display: flex;
        gap: 2rem;
        align-items: center;

        & img {
            max-width: 110px;
            max-height: 110px;
            border-radius: 10px;

            @media only screen and (max-width: 1200px) {
                max-width: 80px;
                max-height: 80px;
            }
        }

        & div.title-desc {
            display: flex;
            flex-direction: column;
            gap: .5rem;
            width: 100%;

            & h2 {
                max-width: 80%;
                margin: 0px;
                font-size: 2.25rem;

                @media only screen and (max-width: 1200px) {
                    max-width: initial;
                    font-size: 1.5rem;
                }
            }

            & div.description {
                display: flex;
                gap: 1rem;
                align-items: center;

                & span.name {
                    font-size: 1.1rem;
                    font-weight: 500;
                }

                & div.link {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: .3rem;
                    padding: 5px 10px;
                    border-radius: 8px;

                    &:hover {
                        cursor: pointer;
                        background-color: rgba(0, 0, 0, 0.081)
                    }
                }
            }
        }

        @media only screen and (max-width: 1200px) {
            flex-direction: column;
            align-items: flex-start;
        }
    }
}

div.error {
    padding-top: 100px;
}
</style>