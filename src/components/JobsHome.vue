<template>
    <div>
        <div class="container">
            <div class="content">
                <div class="heading">
                    <h3>Get an Angular job</h3>
                    <button @click="router.push(`/jobs`)"
                            class="view-jobs">
                        View all jobs
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                <h2>Browse the latest Angular job opportunities</h2>
                <div class="jobs-container">
                    <div @click="router.push(`/jobs/${job.job_title}`)"
                         v-for="job in jobs.slice(0, 6)"
                         class="job-card">
                        <div class="heading">
                            <img src="../assets/job-logos/5d255a9f-9391-4a9f-b0ba-9f96c1608103.png"
                                 alt="">
                            <div class="heading-content">
                                <span class="company">
                                    {{ job.company }}
                                </span>
                                <span class="job-level">
                                    {{ job.job_level }}
                                </span>
                            </div>

                        </div>
                        <div class="countries">
                            <span class="country"
                                  v-if="job.job_location.remote">
                                <i class="fa-solid fa-house-signal"></i>
                                Remote
                            </span>
                            <span v-for="country in job.job_location.countries"
                                  class="country">
                                {{ country }}
                            </span>
                        </div>
                        <span class="job-title">
                            {{ job.job_title }}
                        </span>
                        <span class="job-description">
                            {{ job.job_description }}
                        </span>
                        <button>
                            Know More
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                        <span class="job-type">{{ job.job_type }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useJobsStore } from '../stores/jobs';
import { useRouter } from 'vue-router';

const router = useRouter();
const jobsStore = useJobsStore();

const jobs = jobsStore.jobs;
</script>

<style lang="scss" scoped>
div.container {
    padding-top: 50px;
    padding-bottom: 50px;

    & div.content {

        & div.heading {
            display: flex;
            align-items: center;

            & h3 {
                display: inline;
                margin: 0;
            }

            & button.view-jobs {
                background-color: var(--accent-color);
                padding: 10px 15px;
                display: flex;
                align-items: center;
                gap: 10px;
                color: white;
                font-size: 14px;
                border-radius: 8px;
                margin-left: auto;
            }
        }

        & h2 {
            margin-top: 15px;
        }

        & div.jobs-container {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;

            & div.job-card {
                box-sizing: border-box;
                border-radius: 10px;
                border: 1px solid rgba(0, 0, 0, 0.145);
                padding: 20px;
                width: min(100%, calc(100% / 3 - 20px));
                background-color: white;
                display: flex;
                flex-direction: column;
                gap: 20px;
                overflow: hidden;

                & div.heading {
                    display: flex;
                    gap: 20px;

                    & img {
                        border-radius: 10px;
                        max-width: 50px;
                    }

                    & div.heading-content {
                        display: flex;
                        flex-direction: column;
                        gap: 5px;

                        & span.company {
                            font-size: 1.05rem;
                            font-weight: 500;
                        }

                        & span.job-level {
                            color: var(--text-secondary-color);
                            font-size: .95rem;
                        }
                    }
                }

                & div.countries {
                    display: flex;
                    gap: 5px;

                    & span {
                        font-size: .9rem;
                        color: var(--text-secondary-color);
                        border: 1px solid rgba(0, 0, 0, 0.145);
                        border-radius: 100px;
                        padding: 2px 10px;

                        & i {
                            margin-right: 3px;
                            color: var(--accent-color);
                        }

                    }
                }

                & span.job-title {
                    font-weight: 500;
                    font-size: 1.2rem;
                }

                & span.job-description {
                    color: var(--text-secondary-color);
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    overflow: hidden;
                }

                & button {
                    background-color: var(--background-color-secondary);
                    width: fit-content;
                    padding: 5px 15px;
                    font-size: .9rem;
                    border-radius: 5px;

                    & i {
                        font-size: .8rem;
                        margin-left: 8px;
                    }
                }

                & span.job-type {
                    position: absolute;
                    bottom: 20px;
                    right: 20px;
                    color: var(--text-secondary-color);
                    font-size: .95rem;
                }

                transition: all .2s ease-in-out;
                position: relative;

                // &::after {
                //     position: absolute;
                //     inset: 0px;
                //     transition: border-width .2s ease-in-out;
                //     content: "";
                // }

                &::before {
                    position: absolute;
                    inset: 0px;
                    content: "";
                    top: 0px;
                    bottom: 0px;
                    left: 0px;
                    width: 0px;
                    background-color: var(--accent-color);
                    transition: width .2s ease-in-out;
                }

                &:hover {
                    padding-left: 30px;
                    cursor: pointer;

                    // &::after {
                    //     border-radius: 10px;
                    //     border: 1px solid var(--accent-color);
                    // }

                    &::before {
                        width: 10px;
                    }
                }

                @media only screen and (max-width: 1200px) {
                    width: 100%;
                }
            }
        }
    }
}
</style>