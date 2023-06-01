<template>
    <footer>
        <div class="container">
            <div class="content">
                <div class="socials-column">
                    <div class="logo">
                        <img src="../assets/angular.png"
                             alt="">
                        <h2>AngularJobs</h2>
                    </div>
                    <div class="socials">
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-discord"></i>
                        <i class="fa-solid fa-rss"></i>
                    </div>
                    <div class="email">
                        <i class="fa-regular fa-envelope"></i>
                        <span>hello@angularjobs.com</span>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <h4>Find a Job</h4>
                        <span>Subscribe to job alerts</span>
                        <span>Latest Angular jobs</span>
                    </div>
                    <div class="column">
                        <h4>Discover</h4>
                        <span>Learning Angular resources</span>
                    </div>
                    <div class="column">
                        <h4>Hire</h4>
                        <span>Hire Angular developers</span>
                        <span>Post a job</span>
                    </div>
                    <div class="column">
                        <h4>AngularJobs</h4>
                        <span>Contact</span>
                        <span>Referral program</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <span>Copyright © 2023 - All rights reserved</span>
            <span>Terms of use - Privacy policy</span>
        </div>
    </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
div.container {
    padding: 50px 0px;
    background-color: var(--background-color-mobile);

    & div.content {
        display: flex;
        justify-content: space-between;
        gap: 3rem;

        & div.socials-column {
            display: flex;
            flex-direction: column;
            justify-content: center;


            & div.logo {
                display: flex;
                align-items: center;
                gap: .5rem;

                & img {
                    max-width: 40px;
                }

                & h2 {
                    color: white;
                }

                @media only screen and (max-width: 1200px) {
                    margin-bottom: 1rem;
                }
            }

            & div.socials {
                display: flex;
                gap: .5rem;
                color: white;

                & i {
                    min-width: 40px;
                    min-height: 40px;
                    display: grid;
                    place-items: center;
                    background-color: var(--text-primary-color);
                    font-size: 1.3rem;
                    border-radius: 5px;

                    &:hover {
                        cursor: pointer;
                        background-color: var(--text-secondary-color);
                    }
                }
            }

            & div.email {
                margin: 25px 0;
                font-weight: 500;
                color: white;
                display: flex;
                gap: .5rem;
                align-items: center;

                & i {
                    font-size: 1.1rem;
                }

                &:hover {
                    cursor: pointer;
                    color: var(--accent-color);
                }
            }
        }

        & div.columns {
            display: flex;
            width: 100%;
            gap: 1rem;
            color: white;
            flex-wrap: wrap;

            & div.column {
                display: flex;
                flex-direction: column;
                width: calc(100% / 4 - 1rem);
                gap: .5rem;

                & h4 {
                    margin-bottom: 10px;
                }

                & span {
                    cursor: pointer;
                }

                @media only screen and (max-width: 1200px) {
                    width: 45%;
                }
            }

            @media only screen and (max-width: 1200px) {
                gap: 1rem;
            }
        }

        @media only screen and (max-width: 1200px) {
            flex-direction: column;
            gap: 1rem;
        }
    }

}
div.copyright {
    display: flex;
    background-color: var(--text-primary-color);
    color: var(--text-secondary-color);
    justify-content: space-between;
    padding: 16px 16px;
}
</style>