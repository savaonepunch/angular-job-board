<template>
    <div>
        <div class="container">
            <div class="content">
                <div class="heading">
                    <h3>Angular Consultants</h3>
                    <button class="view-jobs"
                        @click="router.push(`/jobs`)">
                        View all consultants
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                <h2>Outsource your development workforce</h2>
                <p>Have you considered outsourcing your project? Check our list of experienced Angular Agencies and
                    Freelancers.</p>
                <div class="jobs-container">
                    <div v-for="agency in agencies"
                         class="job-card">
                        <div class="heading">
                            <img src="../assets/job-logos/5d255a9f-9391-4a9f-b0ba-9f96c1608103.png"
                                 alt="">
                            <div class="heading-content">
                                <span :class="{ agency: true, freelance: agency.freelance }">
                                    {{ agency.freelance ? "Freelance" : "Agency" }}
                                </span>
                                <span class="job-level">
                                    {{ agency.name }}
                                </span>
                            </div>

                        </div>

                        <span class="agency-description">
                           {{agency.description}}
                        </span>

                        <div class="countries">
                            <span v-for="country in agency.countries"
                                  class="country">
                                {{ country }}
                            </span>
                        </div>

                        
                        <span class="agency-price">Projects from ${{ agency.price }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useAgenciesStore } from '../stores/agencies';

const agenciesStore = useAgenciesStore();

const agencies = ref(agenciesStore.agencies);
</script>

<style lang="scss" scoped>
div.container {
    background-color: var(--background-color-secondary);
    padding: 50px 0;

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
            margin-bottom: 5px;
        }

        & p {
            font-size: 1.2rem;
            margin-top: 0;
            margin-bottom: 35px;
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

                        & span.agency {
                            color: #3b82f6;
                            background-color: #DBE9FE;
                            font-size: .7rem;
                            font-weight: 600;
                            padding: 5px 7px;
                            padding-bottom: 6px;
                            border-radius: 100px;
                            width: fit-content;

                            &.freelance {
                                color: #16A349;
                                background-color: #DCFCE6;
                            }
                        }

                        & span.job-level {
                            font-size: 1.05rem;
                            font-weight: 500;
                        }
                    }
                }

                & div.countries {
                    display: flex;
                    gap: 5px;

                    & span {
                        font-size: .7rem;
                        font-weight: 700;
                        color: var(--text-secondary-color);
                        background-color: var(--background-color-secondary);
                        border-radius: 100px;
                        padding: 3px 10px;
                        padding-bottom: 4px;
                    }
                }

                & span.job-title {
                    font-weight: 500;
                    font-size: 1.2rem;
                }

                & span.agency-description {
                    color: var(--text-secondary-color);
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
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

                & span.agency-price {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    color: var(--text-secondary-color);
                    font-size: .95rem;

                    @media only screen and (max-width: 350px) {
                        display: none;
                    }
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
}</style>