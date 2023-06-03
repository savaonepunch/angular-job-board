<template>
    <div class="container">
        <div class="content">
            <h3>Trusted by industry leaders</h3>
            <h2 style="margin-top: 0;">Who is hiring through AngularJobs?</h2>
            <p>AngularJobs was founded back in 2016. Since then we have helped more than 1200 companies (and counting) to hire Angular developers, from small startups to world's leading organizations.</p>
            <div class="brands">
                <img src="../../assets/marquee-logos/apple-logo.svg?url" alt="">
                <img src="../../assets/marquee-logos/about-you-logo.svg?url" alt="">
                <img src="../../assets/marquee-logos/backmarket-logo.svg?url" alt="">
                <img src="../../assets/marquee-logos/Coca-Cola_logo.svg?url" alt="">
                <img src="../../assets/marquee-logos/gitlab-logo.svg?url" alt="">
                <img src="../../assets/marquee-logos/roku-logo.svg?url" alt="">
                <img src="../../assets/marquee-logos/telefonica-logo.svg?url" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
div.container {
    padding: 50px 0;
    background-color: var(--background-color-secondary);
    & div.content {
        text-align: center;

        & h3 {
            margin-top: 0;
        }

        & p {
            font-size: 1.1rem;
        }

        & div.brands {
            display: flex;
            margin-top: 2rem;
            gap: 2rem;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;

            & img {
                width: min(100px, 100%)
            }
        }
    }
}
</style>
