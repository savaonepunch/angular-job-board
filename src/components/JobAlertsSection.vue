<template>
    <div class="container">
        <div class="content">
            <div class="form-container">
                <div class="phone">
                    <div class="phone-screen">
                        <div class="notch">
                            <div class="speaker"></div>
                        </div>
                        <div class="logo">
                            <img src="../assets/angular.png"
                                 alt="">
                            <h1>AngularJobs</h1>
                        </div>
                        <p style="margin-top: 0;">Heya! Here you go with the latest Angular jobs</p>
                        <div class="jobs">
                            <div class="job">
                                <img src="../assets/job-logos/5d255a9f-9391-4a9f-b0ba-9f96c1608103.png"
                                     alt="">
                                <div class="job-content">
                                    <h4>Senior Angular Engineer</h4>
                                    <p>Kong</p>
                                    <p>🌎 Remote</p>
                                </div>
                            </div>
                            <div class="job">
                                <img src="../assets/agency-logos/0.2380624463440576.png"
                                     alt="">
                                <div class="job-content">
                                    <h4>Frontend Developer</h4>
                                    <p>Extreme</p>
                                    <p>🌎 Remote</p>
                                </div>
                            </div>
                            <div class="job">
                                <img src="../assets/agency-logos/gitlab-icon.png"
                                     alt="">
                                <div class="job-content">
                                    <h4>Full-Stack Software Engineer</h4>
                                    <p>GitLab</p>
                                    <p>🌎 Remote</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form>
                    <h3>Get Job Alerts</h3>
                    <h2>Subscribe to get the latest Angular jobs</h2>
                    <label for="name-input">Name</label> <br>
                    <input placeholder="Your name" type="text" name="" id="name-input"> <br>
                    <label for="email-input">Email</label> <br>
                    <input placeholder="Your email" type="email" name="" id="email-input">
                    <button>Subscribe!</button>
                </form>
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
        & div.form-container {
            background-color: var(--background-color-secondary);
            border-radius: 10px;
            padding: 0px 60px 0px 60px;
            display: flex;
            justify-content: space-between;

            & div.phone {
                margin-top: 100px;
                position: relative;
                width: 350px;
                height: 390px;
                background-color: var(--text-primary-color);
                border-radius: 50px 50px 0px 0px;

                & div.phone-screen {
                    position: absolute;
                    inset: 22px;
                    bottom: 0px;
                    background-color: white;
                    border-radius: 32px 32px 0px 0px;
                    padding: 0 20px;

                    & div.logo {
                        margin-top: 35px;
                        display: flex;
                        align-items: center;
                        gap: 5px;

                        & img {
                            width: 30px;
                        }

                        & h1 {
                            font-size: 1.4rem;
                        }
                    }

                    & div.jobs {
                        display: flex;
                        flex-direction: column;
                        font-size: .87rem;

                        & div.job {
                            padding: 10px 0;
                            display: flex;
                            align-items: flex-start;
                            gap: 10px;
                            border-bottom: 1px solid rgba(0, 0, 0, 0.131);

                            & img {
                                width: 35px;
                                border-radius: 5px;
                            }

                            & p, h4 {
                                margin: 0px;
                            }

                            &:last-of-type {
                                border: none;
                            }
                        }
                    }

                    & div.notch {
                        height: 30px;
                        width: 35%;
                        background-color: var(--text-primary-color);
                        position: absolute;
                        left: 0px;
                        right: 0px;
                        margin: auto;
                        border-radius: 0px 0px 15px 15px;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        & div.speaker {
                            width: 70%;
                            height: 5px;
                            background-color: white;
                            border-radius: 100px;
                            translate: 0 -3px;
                        }
                    }
                }

                @media only screen and (max-width: 1200px) {
                    display: none;
                }
            }

            & form {
                width: min(100%, 500px);
                margin-top: 30px;

                & label {
                    display: inline-block;
                    translate: 0 -5px;
                }
                
                & input {
                    color: var(--text-primary-color);
                    box-sizing: border-box;
                    width: 100%;
                    padding: 10px;
                    border-radius: 10px;
                    font-size: 1.3rem;
                    border: 1px solid var(--text-secondary-color);
                    outline-color: var(--accent-color);
                    margin-bottom: 30px;

                    &::placeholder {
                        opacity: .7;
                    }
                }

                & button {
                    box-sizing: border-box;
                    width: 100%;
                    text-align: center;
                    background-color: var(--accent-color);
                    padding: 10px;
                    font-size: 1.3rem;
                    color: white;
                    border-radius: 10px;
                }
            }

            @media only screen and (max-width: 1200px) {
                justify-content: center;
                align-items: center;

                & form {
                    margin: 0;

                    & h3 {
                        margin: 0;
                    }
                }
            }

            @media only screen and (max-width: 1200px) {
                padding: 30px;
            }
        }
    }
}
</style>
