<template>
    <div class="container">
        <div class="content">
            <h2>Find developers from any web stack</h2>
            <p>From GraphQL to AWS or Laravel. Our job seekers are not limited to just Vue.js knowledge nor a frontend only stack.</p>
            <div class="cards">
                <div style="background-color: #00DC81;" class="card">
                    <img src="../../assets/white-logos/nuxt-icon-white.svg?url" alt="">
                </div>
                <div style="background-color: #1497F6;" class="card">
                    <img src="../../assets/white-logos/vuetify-icon-white.svg?url" alt="">
                </div>
                <div style="background-color: #FF2C1F;" class="card">
                    <img src="../../assets/white-logos/laravel-icon-white.svg?url" alt="">
                </div>
                <div style="background-color: #1C2024;" class="card">
                    <img src="../../assets/white-logos/wordpress-icon-white.svg?url" alt="">
                </div>
                <div style="background-color: #007ACB;" class="card">
                    <img src="../../assets/white-logos/typescript-icon.svg?url" alt="">
                </div>
                <div style="background-color: #8CC74A;" class="card">
                    <img src="../../assets/white-logos/nodejs-icon-white.svg?url" alt="">
                </div>
                <div style="background-color: #61D9FB;" class="card">
                    <img src="../../assets/white-logos/react-icon-white.svg?url" alt="">
                </div>
                <div style="background-color: #FF3E00;" class="card">
                    <img src="../../assets/white-logos/svelte-icon.svg?url" alt="">
                </div>
                <div style="background-color: #37BCF8;" class="card">
                    <img src="../../assets/white-logos/tailwind-icon-white.svg?url" alt="">
                </div>
                <div style="background-color: #E0234D;" class="card">
                    <img src="../../assets/white-logos/nestjs-icon-white.svg?url" alt="">
                </div>
                <div style="background-color: #4DAAD5;" class="card">
                    <img src="../../assets/white-logos/go-logo-white.svg?url" alt="">
                </div>
                <div style="background-color: #000000;" class="card">
                    <img src="../../assets/white-logos/rust-logo-white.svg?url" alt="">
                </div>
                <div style="background-color: #FF9900;" class="card">
                    <img src="../../assets/white-logos/aws-logo-white.svg?url" alt="">
                </div>
                <div style="background-color: #EFDB4F;" class="card">
                    <img src="../../assets/white-logos/javascript-logo.svg?url" alt="">
                </div>
                <div style="background-color: #E535AB;" class="card">
                    <img src="../../assets/white-logos/graphql-icon-white.svg?url" alt="">
                </div>
                <div style="background-color: #8993BE;" class="card">
                    <img src="../../assets/white-logos/php-logo-white.svg?url" alt="">
                </div>
                <div style="background-color: #DD4B36;" class="card">
                    <img src="../../assets/white-logos/git-icon-white.svg?url" alt="">
                </div>
                <div style="background-color: #CC0100;" class="card">
                    <img src="../../assets/white-logos/rails-logo-white.svg?url" alt="">
                </div>
                
            </div>
            <button @click="router.push(`/login`)" class="post-job">Post a job from $199 <i class="fa-solid fa-arrow-right"></i></button>

        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style lang="scss" scoped>
div.container {
    background-color: var(--background-color-secondary);
    padding: 50px 0px;

    & div.content {
        text-align: center;
    

        & p {
            margin-top: 0;
            margin-bottom: 2rem;
            font-size: 1.1rem;
        }

        & div.cards {
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
            justify-content: center;
            max-width: 992px;
            margin: auto;
            
            & div.card {
                padding: 8px;
                display: grid;
                place-items: center;
                border-radius: 5px;
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

                & img {
                    height: 48px;
                    width: 48px;
                }
            }

            @media only screen and (max-width: 1200px) {
                    max-width: 600px;;
            }
        }

        & button.post-job {
            background-color: #FACC14;
            font-weight: 500;
            font-size: 1.25rem;
            padding: 15px 20px;
            border-radius: 10px;
            width: fit-content;
            margin-top: 2rem;

            & i {
                margin-left: .5rem;
                transition: translate .2s ease-in-out;
            }

            &:hover {                
                & i {
                    translate: 3px 0;
                }
            }
        }
    }
}
</style>
