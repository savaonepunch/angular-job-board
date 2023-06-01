<template>
    <div class="container">
        <div class="content">
            <h3>Filtering</h3>
            <h4>Popular Filters</h4>
            <div class="columns">
                <div class="column">
                    <p>By Work Type</p>
                    <div class="filter">
                        <img src="../assets/angular.png" alt="">
                        <span>Freelance Angular Jobs</span>
                    </div>
                    <div class="filter">
                        <img src="../assets/angular.png" alt="">
                        <span>Full-time Angular Jobs</span>
                    </div>
                    <div class="filter">
                        <img src="../assets/angular.png" alt="">
                        <span>Hybrid Angular Jobs</span>
                    </div>
                    <div class="filter">
                        <img src="../assets/angular.png" alt="">
                        <span>Internship Angular Jobs</span>
                    </div>
                    <div class="filter">
                        <img src="../assets/angular.png" alt="">
                        <span>On-site Angular Jobs</span>
                    </div>
                    <div class="filter">
                        <img src="../assets/angular.png" alt="">
                        <span>Part-time Angular Jobs</span>
                    </div>
                    <div class="filter">
                        <img src="../assets/angular.png" alt="">
                        <span>Remote Angular Jobs</span>
                    </div>
                </div>
                <div class="column">
                    <p>By Level</p>
                    <div class="filter">
                        <img src="../assets/angular.png" alt="">
                        <span>Junior Angular Jobs</span>
                    </div>
                    <div class="filter">
                        <img src="../assets/angular.png" alt="">
                        <span>Lead Angular Jobs</span>
                    </div>
                    <div class="filter">
                        <img src="../assets/angular.png" alt="">
                        <span>Mid-level Angular Jobs</span>
                    </div>
                    <div class="filter">
                        <img src="../assets/angular.png" alt="">
                        <span>Senior Angular Jobs</span>
                    </div>
                </div>
                <div class="column">
                    <p>Popular Countries</p>
                    <div class="filter">
                        <span class="flag">🇨🇦</span>
                        <span class="text">Angular Jobs in Canada</span>
                    </div>
                    <div class="filter">
                        <span class="flag">🇫🇷</span>
                        <span class="text">Angular Jobs in France</span>
                    </div>
                    <div class="filter">
                        <span class="flag">🇩🇪</span>
                        <span class="text">Angular Jobs in Germany</span>
                    </div>
                    <div class="filter">
                        <span class="flag">🇮🇳</span>
                        <span class="text">Angular Jobs in India</span>
                    </div>
                    <div class="filter">
                        <span class="flag">🇪🇸</span>
                        <span class="text">Angular Jobs in Spain</span>
                    </div>
                    <div class="filter">
                        <span class="flag">🇳🇱</span>
                        <span class="text">Angular Jobs in The Netherlands</span>
                    </div>
                    <div class="filter">
                        <span class="flag">🇬🇧</span>
                        <span class="text">Angular Jobs in The United Kingdom</span>
                    </div>
                </div>
                <div class="column">
                    <p>Popular Cities</p>
                    <div class="filter">
                        <span class="flag">🇳🇱</span>
                        <span class="text">Angular Jobs in Amsterdam</span>
                    </div>
                    <div class="filter">
                        <span class="flag">🇺🇸</span>
                        <span class="text">Angular Jobs in Atlanta</span>
                    </div>
                    <div class="filter">
                        <span class="flag">🇺🇸</span>
                        <span class="text">Angular Jobs in Austin</span>
                    </div>
                    <div class="filter">
                        <span class="flag">🇪🇸</span>
                        <span class="text">Angular Jobs in Barcelona</span>
                    </div>
                    <div class="filter">
                        <span class="flag">🇮🇳</span>
                        <span class="text">Angular Jobs in Bengaluru</span>
                    </div>
                    <div class="filter">
                        <span class="flag">🇩🇪</span>
                        <span class="text">Angular Jobs in Berlin</span>
                    </div>
                    <div class="filter">
                        <span class="flag">🇺🇸</span>
                        <span class="text">Angular Jobs in Boston</span>
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
    padding: 50px 0;
    background-color: var(--background-color-secondary);

    & h4 {
        margin: 0;
        margin-bottom: 8px;
        font-size: 1.5rem;
    }

    & div.content {
        & div.columns {
            display: flex;
            justify-content: space-between;
            gap: 5px;
            flex-wrap: wrap;

            & div.column {
                display: flex;
                flex-direction: column;
                gap: 15px;
                width: calc(100% / 4 - 3 * 5px);

                & p {
                    font-weight: 500;
                    margin-bottom: 0;
                }

                & div.filter {
                    font-size: 1.05em;
                    display: flex;
                    align-items: center;

                    & img {
                        width: 20px;
                        margin-right: .5rem;
                    }

                    & span.flag {
                        font-size: 1.33em;
                        margin-right: .5rem;
                        translate: 0 -2px;
                        max-height: 21.38px;
                    }

                    &:hover {
                        cursor: pointer;
                        & span {
                            text-decoration: underline;
                        }

                        & span.flag {
                            text-decoration: none;
                        }
                    }
                }

                @media only screen and (max-width: 1200px) {
                    width: calc(100% / 2 - 20px);
                }

                @media only screen and (max-width: 412px) {
                    width: 100%;
                }
            }
        }
    }
}
</style>