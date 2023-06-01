<template>
    <div>
        <div class="container">
            <div class="header">
                <RouterLink to="/"
                            class="logo">

                    <img src="../assets/angular.png"
                         alt="Logo">
                    <span>
                        AngularJobs
                    </span>

                </RouterLink>
                <ul class="list-items">
                    <li class="list-item">
                        <RouterLink to="/jobs">Jobs</RouterLink>
                    </li>
                    <li class="list-item">
                        <RouterLink to="/hire-angular-developers">Hire Angular developers</RouterLink>
                    </li>
                    <li class="list-item new">
                        <RouterLink to="/agencies">Consultants</RouterLink>
                    </li>
                    <li @click="router.push(`/job-alerts`)" class="list-item">Job Alerts</li>
                    <!-- <li class="list-item">Learn</li> -->
                </ul>
                <ul class="cta-items">
                    <li class="cta-item"><button @click="router.push('/agencies')">Hire a Consultant</button></li>
                    <li @click="router.push(`/login`)" class="cta-item"><button>Post a Job</button></li>
                    <li @click="router.push(`/login`)" class="cta-item"><button>Login</button></li>
                </ul>
            </div>

        </div>
        <div class="container mobile">
            <div class="header">
                <RouterLink to="/"
                            class="logo">
                    <img src="../assets/angular.png"
                         alt="Logo">
                    <span>AngularJobs</span>
                </RouterLink>
                <div @click="menuOpen = !menuOpen"
                     class="hamburger">
                    <img v-if="!menuOpen"
                         src="../assets/bars-solid.svg"
                         alt="">
                    <img v-else
                         src="../assets/xmark-solid.svg"
                         alt="">
                </div>
            </div>
        </div>
        <div :class="{ menu: true, open: menuOpen }">
            <ul class="menu-items">
                <li @click="router.push('/jobs')" class="menu-item">Jobs</li>
                <li @click="router.push('/hire-angular-developers')" class="menu-item"><RouterLink to="/hire-angular-developers">Hire Angular developers</RouterLink></li>
                <li @click="router.push('/agencies')" class="menu-item new">Consultants</li>
                <li @click="router.push(`/job-alerts`)" class="menu-item">Job Alerts</li>
                <!-- <li class="menu-item">Learn</li> -->
                <li @click="router.push(`/login`)" class="menu-item">Post a Job</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import { useRouter } from 'vue-router';

const router = useRouter();
const menuOpen = ref(false);
</script>

<style lang="scss" scoped>
div.container {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    background-color: white;
    z-index: 99;

    & div.header {
        height: 100px;
        box-sizing: border-box;
        padding: 0 30px;
        max-width: 1280px;
        margin: auto;
        display: flex;
        align-items: center;
        z-index: 99;
    }

    & a.logo {
        display: flex;
        align-items: center;
        margin-right: 60px;
        translate: 0 -1px;

        & img {
            max-width: 45px;
            margin-right: 10px;
        }

        & span {
            font-weight: 600;
            font-size: 25px;


        }

        &:hover {
            cursor: pointer;
        }
    }

    & ul {
        all: unset;
        display: flex;
        gap: 30px;

        & li {
            all: unset;
        }

        &.list-items {
            & li.list-item {
                font-weight: 500;
                font-size: 16px;
                transition: color .2s ease-in-out;
                position: relative;

                &:hover {
                    color: var(--accent-color);
                    cursor: pointer;
                }

                &.new {
                    &::after {
                        font-weight: 600;
                        font-size: 9px;
                        position: absolute;
                        content: 'NEW!';
                        padding: 4px;
                        background-color: var(--secondary-accent-color);
                        right: 0px;
                        top: -18px;
                        z-index: -1;
                        color: white;
                        border-radius: 5px;
                    }
                }
            }
        }

        &.cta-items {
            margin-left: auto;
            gap: 20px;

            & li.cta-item {
                & button {
                    all: unset;
                    font-weight: 500;
                    font-size: 16px;
                    text-align: center;
                    padding: 10px 16px;
                    background-color: var(--background-color-secondary);
                    border-radius: 8px;

                    &:hover {
                        cursor: pointer;
                        filter: brightness(95%);
                    }
                }

                &:nth-of-type(2) {
                    & button {
                        background-color: #FACC14;
                    }
                }

                &:last-of-type {
                    & button {
                        padding: 10px 0px;
                        background-color: transparent;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 1200px) {
        display: none;
    }

    &.mobile {
        display: none;

        @media only screen and (max-width: 1200px) {
            display: initial;
            position: relative;

            position: fixed;

            top: 0px;
            left: 0px;
            right: 0px;

            background-color: white;
            z-index: 99;

            & div.header {
                z-index: 99;
                box-sizing: border-box;

                margin: auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 20px;
                width: 100%;
                height: 80px;
                max-width: 736px;

                & a.logo {
                    margin: 0px;
                    display: flex;
                    align-items: center;

                    & img {
                        max-width: 40px;
                    }

                    & span {
                        font-weight: 600;
                        font-size: 22px;
                    }
                }

                & div.hamburger {
                    & img {
                        width: 25px;

                        &:hover {
                            cursor: pointer;
                        }

                    }
                }
            }
        }
    }
}

div.menu {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    background-color: white;
    height: 100vh;
    z-index: 98;
    padding-top: 80px;
    translate: 100vw 0;
    transition: translate .2s ease-in-out;

    & ul.menu-items {
        all: unset;
        box-sizing: border-box;
        padding: 0 20px;
        width: 100%;
        max-width: 736px;
        display: flex;
        flex-direction: column;
        margin: auto;
        gap: 10px;

        & li.menu-item {
            all: unset;
            font-weight: 500;
            font-size: 20px;
            text-align: end;
            padding: 10px 20px;
            border-radius: 8px;

            &:last-of-type {
                background-color: #FACC14;
                padding: 10px 0;
                width: 100%;
                text-align: center;
            }

            &:hover {
                cursor: pointer;
                background-color: var(--background-color-secondary);
            }
        }
    }

    &.open {
        translate: 0 0;
    }

    @media only screen and (min-width: 1200px) {
        display: none;
    }
}
</style>