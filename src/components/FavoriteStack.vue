<template>
    <div class="container">
        <div class="content">
            <div class="left">
                <h2>What if you could play with your favourite stack at work?</h2>
                <p>Angular is a joy to work with but we all have some other libraries and frameworks we enjoy using and will make the next step in your career more fun.</p>
            </div>
            <div class="right">
                <div class="heading">
                    <img src="../assets/angular.png" alt="">
                    <h4>Angular plus...</h4>
                </div>
                <div class="cards">
                    <div class="card">
                        <img src="../assets/brand-logos/react-1-logo-png-transparent.png" alt="">
                        <h4>React Jobs</h4>
                    </div>
                    <div class="card">
                        <img src="../assets/brand-logos/vuejs-icon.svg" alt="">
                        <h4>Vue Jobs</h4>
                    </div>
                    <div class="card">
                        <img src="../assets/brand-logos/z8hzeszc9eb3sp3vp3qc.jpg" alt="">
                        <h4>Tailwind Jobs</h4>
                    </div>
                    <div class="card">
                        <img src="../assets/brand-logos/typescript-icon.svg" alt="">
                        <h4>TypeScript Jobs</h4>
                    </div>
                    <div class="card">
                        <img src="../assets/brand-logos/free-node-js-1174925.webp" alt="">
                        <h4>NodeJS Jobs</h4>
                    </div>
                    <div class="card">
                        <img src="../assets/brand-logos/communityIcon_fmttas2xiy351.png" alt="">
                        <h4>Laravel Jobs</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
div.container {
    padding-bottom: 50px;
    & div.content {
        display: flex;
        align-items: center;
        gap: 20px;

        & div.left {
            flex-basis: 50%;

            & h2 {
                font-size: 2.5rem;
                margin-bottom: 10px;
            }
            & p {
                font-size: 1.4rem;
            }

            @media only screen and (max-width: 1200px) {
                width: 100%;
             }
        }

        & div.right {
            flex-basis: 50%;
            display: flex;
            flex-direction: column;

            & div.heading {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                font-size: 1.7rem;

                & img {
                    width: 50px;
                }
            }

            & div.cards {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                gap: 20px;
                
                & div.card {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: var(--background-color-secondary);
                    gap: 10px;
                    padding: 20px 0px;
                    border-radius: 8px;
                    transition: outline-width .2s;
                    width: calc(100% / 3 - 15px);

                    &:hover {
                        outline: 4px solid var(--text-primary-color);
                        cursor: pointer;
                    }

                    & img {
                        width: 40px;
                        border-radius: 8px;
                    }

                    & h4 {
                        margin: 0px;
                    }

                    box-sizing: border-box;

                    @media only screen and (max-width: 1200px) {
                        width: calc(50% - 40px);
                        flex-direction: row;
                        justify-content: start;
                        padding: 10px;
                    }

                    @media only screen and (max-width: 411px) {
                      width: 100%;
                    }
                }
            }

            @media only screen and (max-width: 1200px) {
                width: 100%;
            }
        }

        @media only screen and (max-width: 1200px) {
            flex-direction: column;
        }
    }
    
}
</style>