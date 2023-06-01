<template>
    <div>
        <div class="marquee-container">
            <div class="marquee">
                <ul class="marquee-content">
                    <li><img src="../assets/marquee-logos/about-you-logo.svg" alt=""></li>
                    <li><img class="small" src="../assets/marquee-logos/apple-logo.svg" alt=""></li>
                    <li><img src="../assets/marquee-logos/backmarket-logo.svg" alt=""></li>
                    <li><img src="../assets/marquee-logos/gitlab-logo.svg" alt=""></li>
                    <li><img src="../assets/marquee-logos/nasa-logo.svg" alt=""></li>
                    <li><img src="../assets/marquee-logos/roku-logo.svg" alt=""></li>
                    <li><img class="small" src="../assets/marquee-logos/telefonica-logo.svg" alt=""></li>
                    <li><img class="small" src="../assets/marquee-logos/Google_2015_logo.svg" alt=""></li>
                    <li><img class="small" src="../assets/marquee-logos/Coca-Cola_logo.svg" alt=""></li>
                </ul>
                <ul class="marquee-content" aria-hidden="true">
                    <li><img src="../assets/marquee-logos/about-you-logo.svg" alt=""></li>
                    <li><img class="small" src="../assets/marquee-logos/apple-logo.svg" alt=""></li>
                    <li><img src="../assets/marquee-logos/backmarket-logo.svg" alt=""></li>
                    <li><img src="../assets/marquee-logos/gitlab-logo.svg" alt=""></li>
                    <li><img src="../assets/marquee-logos/nasa-logo.svg" alt=""></li>
                    <li><img src="../assets/marquee-logos/roku-logo.svg" alt=""></li>
                    <li><img class="small" src="../assets/marquee-logos/telefonica-logo.svg" alt=""></li>
                    <li><img class="small" src="../assets/marquee-logos/Google_2015_logo.svg" alt=""></li>
                    <li><img class="small" src="../assets/marquee-logos/Coca-Cola_logo.svg" alt=""></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
div.marquee-container {
    margin-top: 50px;
    background-color: var(--background-color-secondary);
    padding: 24px 0px;

    & div.marquee {
        box-sizing: border-box;
        margin: auto;
        --gap: 2rem;
        display: flex;
        overflow: hidden;
        user-select: none;
        gap: var(--gap);
        // background-color: red;
        padding: 0 30px;

        & ul.marquee-content {
            flex-shrink: 0;
            display: flex;
            justify-content: space-around;
            min-width: 100%;
            gap: var(--gap);
            animation: scroll 50s linear infinite;

            & li {
                display: flex;
                align-items: center;
            }

            & img {
                height: 20px;

                &.small {
                    height: 25px;
                }
            }
        }
    }

    &:hover {
        // cursor: pointer;
        & ul.marquee-content {
            animation-play-state: paused !important;
            -moz-animation-play-state: paused !important;
            -webkit-animation-play-state: paused !important;
            -o-animation-play-state: paused !important;
        }
    }

    @media only screen and (max-width: 1200px) {
        // display: none;
    }
}


@keyframes scroll {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(calc(-100% - var(--gap)));
    }
}
</style>