<template>
    <div class="container">
        <div class="content">
            <h1>The #1 resource for hiring Angular developers</h1>
            <h2 class="discover">AngularJobs has become the most trusted resource for companies looking to hire Angular
                developers. Finding your next Angular developer has never been easier.
            </h2>
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
    padding-top: 100px;
    padding-bottom: 50px;

    & div.content {
        text-align: center;

        & h1 {
            margin-bottom: 1rem;
        }

        & h2 {
            color: var(--text-secondary-color);
            font-weight: 400;
            margin-top: 0px;
            margin-bottom: 1rem;
        }

        & button.post-job {
            background-color: #FACC14;
            font-weight: 500;
            font-size: 1.25rem;
            padding: 15px 20px;
            border-radius: 10px;
            width: fit-content;
            margin-top: 1rem;

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