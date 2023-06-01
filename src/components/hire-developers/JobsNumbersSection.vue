<template>
    <div class="container">
        <div class="content">
            <h2 style="margin-bottom: 1rem;">AngularJobs in numbers</h2>
            <p>Get to know how AngularJobs has been growing over the years.</p>
            <div class="cards">
                <div class="card">
                    <h2 style="margin-bottom: 10px; margin-top: 0;">1M+</h2>
                    <span style="font-size: 1.5rem;">job impressions per week</span>
                </div>
                <div class="card">
                    <h2 style="margin-bottom: 10px; margin-top: 0;">350k+</h2>
                    <span style="font-size: 1.5rem;">network audience</span>
                </div>
                <div class="card">
                    <h2 style="margin-bottom: 10px; margin-top: 0;">100k+</h2>
                    <span style="font-size: 1.5rem;">active monthly visitors</span>
                </div>
                <div class="card">
                    <h2 style="margin-bottom: 10px; margin-top: 0;">30k+</h2>
                    <span style="font-size: 1.5rem;">subscribers</span>
                </div>
                <div class="card">
                    <h2 style="margin-bottom: 10px; margin-top: 0;">2300+</h2>
                    <span style="font-size: 1.5rem;">jobs published</span>
                </div>
                <div class="card">
                    <h2 style="margin-bottom: 10px; margin-top: 0;">1200+</h2>
                    <span style="font-size: 1.5rem;">companies registered</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
div.container {
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
            flex-wrap: wrap;
            gap: 20px;
            & div.card {
                box-sizing: border-box;
                border: 1px solid rgba(0, 0, 0, 0.078);
                width: calc(100% / 3 - 20px * 2);
                flex-grow: 1;
                padding: 1rem;
                border-radius: 10px;

                & h2 {
                    font-size: 2rem;
                }

                @media only screen and (max-width: 1200px) {
                    width: 100%;
                }
            }
        }
    }
}
</style>