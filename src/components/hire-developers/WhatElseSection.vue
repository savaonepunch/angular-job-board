<template>
    <div class="container">
        <div class="content">
            <h3>What else do I get?</h3>
            <h2>The power of a very targetted audience</h2>
            <div class="cards">
                <div class="card">
                    <div class="icons">
                        <i style="color: var(--accent-color);" class="fa-regular fa-eye"></i>
                    </div>
                    <span class="subheading">Visibility</span>
                    <h4 style="margin: .5rem;">Active for 30 days</h4>
                    <p style="margin: .5rem;">Your opening will be live for an entire month and visible to thousands of daily visitors.</p>
                </div>
                <div class="card">
                    <div class="icons">
                        <i style="color: #1DA1F1;"
                           class="fa-brands fa-twitter"></i>
                        <i style="color: #0177B5;"
                           class="fa-brands fa-linkedin"></i>
                    </div>
                    <span class="subheading">40k+ followers</span>
                    <h4 style="margin: .5rem;">Shared from our social handlers</h4>
                    <p style="margin: .5rem;">Reach out to our audience from our own Twitter and LinkedIn accounts.</p>
                </div>
                <div class="card">
                    <div class="icons">
                        <i class="fa-regular fa-envelope"></i>
                    </div>
                    <span class="subheading">30k+ subscribers</span>
                    <h4 style="margin: .5rem;">Listed in our weekly newsletter</h4>
                    <p style="margin: .5rem;">Add your job to the biggest Angular only newsletter in the market with high opening rates.</p>
                </div>
                <div class="card">
                    <div class="icons">
                        <i style="color: #5765F2;" class="fa-brands fa-discord"></i>
                    </div>
                    <span class="subheading">113k+ users</span>
                    <h4 style="margin: .5rem;">Official Angular Discord</h4>
                    <p style="margin: .5rem;">Get your job listed in the #jobs channel from the official Angular discord.</p>
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

    & div.content {
        text-align: center;

        & h2 {
            margin-top: 0;
        }

        & h4 {
            font-size: 1.2rem;
        }

        & div.cards {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;

            & div.card {
                box-sizing: border-box;
                padding: 1.5rem;
                height: 236px;
                box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
                flex-basis: calc(25% - 20px);
                text-align: center;
                border-radius: 10px;
                flex-grow: 1;

                & div.icons {
                    font-size: 2rem;
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    margin-bottom: .5rem;
                }

                @media only screen and (max-width: 1200px) {
                    flex-basis: 100%;
                    height: fit-content;
                }
            }
        }
    }
}
</style>