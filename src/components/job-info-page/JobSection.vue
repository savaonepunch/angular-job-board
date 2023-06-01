<template>
    <div class="container">
        <div class="content">
            <aside>
                <div class="sticky-content">
                    <div class="info">
                        <span class="title">Location</span>
                        <span class="description">{{ job.job_location.remote ? "Remote" : "On-Site" }}</span>
                    </div>

                    <div class="info">
                        <span class="title">Job Type</span>
                        <span class="description">{{ job.job_type }}</span>
                    </div>

                    <div class="info">
                        <span class="title">Job Level</span>
                        <span class="description">{{ job.job_level }}</span>
                    </div>

                    <div class="info">
                        <span class="title">Date Posted</span>
                        <span class="description">{{ job.job_date_posted }}</span>
                    </div>
                    <button>
                        <span>Apply now</span>
                    </button>
                </div>
            </aside>
            <div class="job-description">
                <h2 style="margin-top: 0;">Job Description</h2>
                <p style="margin-bottom: 0;">{{ job.job_description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    job: Object,
})

onMounted(() => {
    console.log(props.job);
})

</script>

<style lang="scss" scoped>
div.container {
    padding: 50px 0;

    & div.content {
        position: relative;
        display: flex;
        justify-content: flex-end;

        & aside {
            box-sizing: border-box;
            position: absolute;
            top: 0;
            left: 0;
            width: 330px;
            padding: inherit;
            height: 100%;

            & div.sticky-content {
                position: sticky;
                top: 100px;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                box-shadow: inset 0 0 0 2px var(--accent-color);
                border-radius: 10px 10px 0 0;
                padding: 1.5rem;
                width: 100%;

                @media only screen and (max-width: 1200px) {
                    box-sizing: border-box;
                }


                & div.info {
                    display: flex;
                    flex-direction: column;
                    gap: .5rem;

                    & span.title {
                        font-weight: 500;
                    }

                    & span.description {
                        color: var(--text-secondary-color);
                    }
                }

                & button {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    text-align: center;
                    background-color: var(--accent-color);
                    box-shadow: inset 0 0 0 2px var(--accent-color);
                    border-radius: 0px 0px 10px 10px;
                    font-weight: 500;
                    font-size: 1.2rem;
                    color: white;
                    padding: .6rem 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    & span {
                        translate: 0 -2px;
                    }

                    &:hover {
                        background-color: var(--secondary-accent-color);
                        box-shadow: inset 0 0 0 2px var(--secondary-accent-color);
                    }
                }
            }

            @media only screen and (max-width: 1200px) {
                position: initial;
                width: 100%;
                padding: initial;
            }
        }

        & div.job-description {
            max-width: 70%;

            & p {
                font-size: 1.1rem;
                white-space: pre-line;
                color: var(--text-primary-color);
            }

            @media only screen and (max-width: 1200px) {
                max-width: 100%;
            }
        }

        @media only screen and (max-width: 1200px) {
            flex-direction: column;
        }
    }
}
</style>