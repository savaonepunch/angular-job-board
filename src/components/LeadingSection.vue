<template>
    <div>
        <div class="container">
            <div class="content">
                <h3 class="chip">
                    The #1 Angular Job Board
                </h3>
                <h1 class="heading">
                    The leading job board <br>
                    for the <span>Angular</span> ecosystem
                </h1>
                <h2 class="discover">Discover companies looking to hire Angular developers and connect with them.
                </h2>
            </div>
            <AnimatedMarquee/>
        </div>
    </div>
</template>

<script setup>
import AnimatedMarquee from './AnimatedMarquee.vue';
</script>

<style lang="scss" scoped>
div.container {
    padding-top: 100px;

    & div.content {
        & h1.heading {
            margin-top: 15px;
            margin-bottom: 20px;

            & span {
                color: var(--accent-color);
            }
        }

        & h3.chip {
            margin-top: 35px;
            font-size: 18px;
            font-weight: 500;
            width: fit-content;
            margin-bottom: 0px;
            border: 2px solid var(--accent-color);
            padding: 10px 12px;
            border-radius: 8px;
        }

        & h2.discover {
            color: var(--text-secondary-color);
            font-weight: 400;
            margin-top: 20px;
        }

        @media only screen and (max-width: 1200px) {
            & h3.chip {
                margin-top: 35px;
                padding: 5px 10px;
                border-radius: 25px;
                font-size: 14px;
            }

            & h2.discover {
                color: white;

                @media only screen and (max-width: 1200px) {
                    font-size: 18px;
                }
            }

            & h1.heading {
                color: white;
                & br {
                    display: none;
                }
            }
        }
    }

    @media only screen and (max-width: 1200px) {
        padding-top: 80px;
        background-color: var(--background-color-mobile);
        padding-bottom: 0px;
    }
}
</style>