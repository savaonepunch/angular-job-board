<template>
    <div class="container">
        <div class="content">
            <aside class="filters">
                <div class="filters-content">
                    <div class="title-container">
                        <span class="title">Filters</span>
                        <span class="new">NEW!</span>
                    </div>
                    <!-- <div @click.self="toggleWorkTypeModal"
                         :class="{ 'work-type': true, filter: true, open: workTypeFilterOpen }">
                        <span style="pointer-events: none;">Filter by work type</span>
                        <i style="pointer-events: none;"
                           class="fa-solid fa-chevron-down"></i>
                        <div :class="{ modal: true, open: workTypeFilterOpen }">
                            <div v-for="option in workTypeFilters"
                                 :key="option"
                                 @click="toggleWorkTypeFilter(option)"
                                 :class="{ selected: selectedWorkTypeFilters.includes(option) }">
                                <span>{{ option }}</span>
                                <i class="fa-solid fa-check"></i>

                            </div>
                        </div>
                    </div> -->

                    <!-- <div @click.self="workLevelFilterOpen = !workLevelFilterOpen"
                         :class="{ 'work-level': true, filter: true, open: workLevelFilterOpen }">
                        <span style="pointer-events: none;">Filter by level</span>
                        <i style="pointer-events: none;" class="fa-solid fa-chevron-down"></i>
                        <div :class="{ modal: true, open: workLevelFilterOpen }">
                            <div v-for="option in workLevelFilters"
                                 :key="option"
                                 @click="toggleWorkLevelFilter(option)"
                                 :class="{ selected: selectedWorkLevelFilters.includes(option) }">
                                <span>{{ option }}</span>
                                <i class="fa-solid fa-check"></i>
                                
                            </div>
                        </div>
                    </div> -->

                    <div class="toggle-filter">
                        <div @click="remoteToggle = !remoteToggle"
                             :class="{ 'toggle-container': true, on: remoteToggle }">
                            <div class="toggle"></div>
                        </div>
                        <span>Agency</span>
                    </div>

                    <div class="toggle-filter">
                        <div @click="remoteAllowedToggle = !remoteAllowedToggle"
                             :class="{ 'toggle-container': true, on: remoteAllowedToggle }">
                            <div class="toggle"></div>
                        </div>
                        <span>Freelance</span>
                    </div>

                    <span class="soon">More filters coming soon</span>

                </div>
            </aside>
            <div class="jobs">
                <div v-for="agency in agencies"
                     class="job">
                    <div class="heading">
                        <img src="../../assets/job-logos/5d255a9f-9391-4a9f-b0ba-9f96c1608103.png"
                             alt="">
                        <div class="heading-content">
                            <span class="title">{{ agency.name }}</span>
                            <span class="description">
                                <div class="tags">
                                    <div class="tag remote"
                                         v-if="agency.freelance">
                                        <i class="fa-regular fa-circle-check"></i>
                                        Freelance
                                    </div>
                                    <div class="tag agency"
                                         v-else>
                                        <i class="fa-regular fa-circle-check"></i>
                                        Agency
                                    </div>
                                    <div class="tag"
                                         v-for="country in agency.countries">
                                        {{ country }}
                                    </div>
                                </div>
                            </span>
                        </div>
                        
                    </div>
                    <span class="agency-description">
                            {{ agency.description }}
                        </span>
                    <div class="tags">
                        <!-- <div class="tag remote"
                             v-if="job.job_location.remote">
                            <i class="fa-regular fa-circle-check"></i>
                            Remote
                        </div> -->
                        <!-- <div class="tag"
                             v-for="country in job.job_location.countries">
                            {{ country }}
                        </div> -->
                    </div>
                </div>
            </div>
            <!-- <aside class="socials"></aside> -->
        </div>
    </div>
</template>

<script setup>
import { useAgenciesStore } from '../../stores/agencies';
import { ref } from 'vue';

const agenciesStore = useAgenciesStore();
const agencies = agenciesStore.agencies;

const workTypeFilterOpen = ref(false);
const workTypeFilters = ref([
    'full-time', 'part-time', 'contract', 'freelance', 'internship'
]);
const selectedWorkTypeFilters = ref([]);

const workLevelFilterOpen = ref(false);
const workLevelFilters = ref([
    'lead', 'senior', 'medium', 'junior'
]);
const selectedWorkLevelFilters = ref([]);

const remoteToggle = ref(false);
const remoteAllowedToggle = ref(false);
const hybridToggle = ref(false);

const toggleWorkTypeModal = () => {
    if (workLevelFilterOpen.value) {
        workLevelFilterOpen.value = false;
        workTypeFilterOpen.value = !workTypeFilterOpen.value;
    }
    else workTypeFilterOpen.value = !workTypeFilterOpen.value;
}

const toggleWorkTypeFilter = (option) => {
    if (selectedWorkTypeFilters.value.includes(option)) {
        selectedWorkTypeFilters.value = selectedWorkTypeFilters.value.filter(filter => filter != option);
    }
    else selectedWorkTypeFilters.value.push(option);
    console.log(selectedWorkTypeFilters.value);
}

const toggleWorkLevelFilter = (option) => {
    if (selectedWorkLevelFilters.value.includes(option)) {
        selectedWorkLevelFilters.value = selectedWorkLevelFilters.value.filter(filter => filter != option);
    }
    else selectedWorkLevelFilters.value.push(option);
    console.log(selectedWorkLevelFilters.value);
}

</script>

<style lang="scss" scoped>
div.container {
    padding: 50px 0;

    & div.content {
        position: relative;
        display: flex;
        justify-content: center;

        & div.jobs {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 75%;
            margin-left: auto;

            & div.job {
                overflow: hidden;
                position: relative;
                padding: 1rem;
                border: 1px solid rgba(128, 128, 128, 0.428);
                border-radius: 15px;
                display: flex;
                flex-direction: column;
                gap: 1rem;

                & div.heading {
                    display: flex;
                    align-items: center;
                    gap: 1rem;

                    & img {
                        border-radius: 10px;
                        max-width: 50px;
                    }

                    & div.heading-content {
                        display: flex;
                        flex-direction: column;
                        gap: .5rem;

                        & span.title {
                            font-weight: 600;
                            font-size: 1.1rem;
                            color: var(--text-primary-color);
                        }

                        & span.description {
                            font-weight: 500;
                            color: var(--text-secondary-color);
                            font-size: .9rem;
                        }
                    }
                }

                & div.tags {
                    display: flex;
                    gap: 10px;

                    & div.tag {
                        width: fit-content;
                        padding: .25rem .5rem;
                        background-color: var(--background-color-secondary);
                        font-size: .8rem;
                        border-radius: 100px;

                        &.remote {
                            background-color: rgb(204, 255, 204);

                            & i {
                                color: green;
                            }
                        }

                        &.agency {
                            background-color: rgb(204, 248, 255);
                            color: #3B81F6;

                            & i {
                                color: #3B81F6;
                            }
                        }
                    }
                }

                box-sizing: border-box;
                transition: .2s ease-in-out;

                & button {
                    position: absolute;
                    bottom: 1rem;
                    right: 1rem;
                    display: flex;
                    gap: .5rem;
                    align-items: center;
                    font-size: .95rem;
                    font-weight: 500;
                    opacity: 0;
                    transition: opacity .2s ease-in-out;

                    & i {
                        font-size: .85rem;
                    }
                }

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

                    &::before {
                        width: 10px;
                        transition: width .2s ease-in-out;
                    }

                    & button {
                        opacity: 1;
                    }
                }
            }

            @media only screen and (max-width: 1200px) {
                width: 100%;
            }

            & span.agency-description {
                display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                    color: var(--text-secondary-color);
            }
        }

        & aside.filters {
            position: absolute;
            top: 0px;
            left: 0px;
            padding: inherit;
            height: 100%;
            width: 253px;
            padding-right: 0;

            & div.filters-content {
                position: sticky;
                top: 100px;
                display: flex;
                flex-direction: column;
                gap: 1rem;

                & div.title-container {
                    display: flex;
                    gap: .5rem;

                    & span.title {
                        font-weight: 600;
                        font-size: 1.1rem;
                        color: var(--text-secondary-color);
                    }

                    & span.new {
                        font-weight: 500;
                        font-size: .7rem;
                        color: #CA8A03;
                        background-color: #FEEF89;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 5px;
                        padding: 1px 5px;
                    }
                }

                & div.search-input {
                    display: flex;
                    padding: .6rem 1rem;
                    gap: .5rem;
                    outline: 1px solid rgba(128, 128, 128, 0.428);
                    border-radius: 8px;
                    transition: outline-width .1s ease-in-out;

                    & input {
                        width: 100%;
                        outline: none;
                        border: none;
                        font-size: .9rem;

                        &::placeholder {
                            color: var(--text-secondary-color);
                            font-size: .9rem;
                        }
                    }

                    &:focus-within {
                        border: none;
                        outline: 2px solid black
                    }
                }

                & div.filter {
                    position: relative;
                    display: flex;
                    justify-content: space-between;
                    padding: .6rem 1rem;
                    gap: .5rem;
                    outline: 1px solid rgba(128, 128, 128, 0.428);
                    border-radius: 8px;
                    color: var(--text-secondary-color);
                    font-size: .9rem;
                    transition: outline .1s ease-in-out;

                    & i {
                        translate: 0px 2px;
                    }

                    &:hover {
                        cursor: pointer;
                        outline-color: var(--accent-color);
                    }

                    &.open {
                        outline-color: var(--accent-color);
                        outline-width: 2px;
                    }

                    & div.modal {
                        border-radius: 10px;
                        box-sizing: border-box;
                        display: flex;
                        flex-direction: column;
                        position: absolute;
                        background-color: white;
                        top: calc(100% + .5rem);
                        left: 0;
                        width: 100%;
                        z-index: 99;
                        padding: .5rem;
                        gap: .3rem;
                        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                        opacity: 0;
                        scale: 0;
                        transition: opacity .2s ease-in-out, scale .25s ease-in-out;
                        transform-origin: 0 0;

                        & div {
                            border-radius: 8px;
                            padding: .5rem;
                            display: flex;
                            justify-content: space-between;
                            transition: color .2s ease-in-out;

                            &:hover {
                                background-color: var(--background-color-secondary);
                            }

                            & i {
                                opacity: 0;
                                transition: opacity .2s ease-in-out;
                            }

                            &.selected {
                                color: var(--accent-color);

                                & i {
                                    opacity: 1;
                                }
                            }
                        }

                        &.open {
                            scale: 1;
                            opacity: 1;
                        }
                    }
                }

                & div.toggle-filter {
                    display: flex;
                    gap: .5rem;
                    align-items: center;
                    color: var(--text-secondary-color);
                    font-size: .9rem;

                    & div.toggle-container {
                        box-sizing: border-box;
                        width: 40px;
                        background-color: rgba(128, 128, 128, 0.428);
                        border-radius: 100px;
                        padding: .25rem;
                        transition: background-color .2s ease-in-out;

                        & div.toggle {
                            width: 15px;
                            height: 15px;
                            background-color: white;
                            border-radius: 100px;
                            margin-left: 0;
                            transition: margin .2s ease-in-out;
                        }

                        &.on {
                            background-color: var(--accent-color);

                            & div.toggle {
                                margin-left: calc(100% - 15px);
                            }
                        }

                        &:hover {
                            cursor: pointer;
                        }
                    }
                }

                & span.soon {
                    background-color: var(--background-color-secondary);
                    width: fit-content;
                    border-radius: 8px;
                    font-size: .8rem;
                    font-weight: 400;
                    color: var(--text-secondary-color);
                    padding: .3rem .5rem;
                }
            }

            @media only screen and (max-width: 1200px) {
                position: initial;
                padding: 0;
                width: 100%;
            }
        }

        @media only screen and (max-width: 1200px) {
            flex-direction: column;
            gap: 2rem;
        }
    }
}
</style>