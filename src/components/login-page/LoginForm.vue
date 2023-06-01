<template>
    <div class="container">
        <div class="content">
            <div @click="router.push(`/login`)" class="logo">
                <img src="../../assets/angular.png"
                     alt="">
                <span>AngularJobs</span>
            </div>
            <h2>Login to your account</h2>
            <p>Enter your credentials or use your favourite social provider to access</p>
            <div class="social-buttons">
                <button>
                    <i style="color: #0177B5;"
                       class="fa-brands fa-linkedin"></i>
                    <span>with Linkedin</span>
                </button>
                <button>
                    <i class="fa-brands fa-github"></i>
                    <span>with GitHub</span>
                </button>
            </div>
            <form @submit.prevent>
                <label for="Email">Email</label>
                <input placeholder="Your e-mail"
                       type="text">

                <div class="input-label">
                    <label for="Email">Password</label>
                    <input placeholder="Your e-mail"
                           type="text">
                           <span>Forgot your password?</span>
                </div>


                <button>
                    <span>Log in</span>
                    <i class="fa-solid fa-arrow-right"></i>
                </button>

                <p>Don't have an account? 
                    
                    <span>Register now <i class="fa-solid fa-arrow-right"></i></span>
                </p>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style lang="scss" scoped>
div.container {
    padding: 100px 0;

    & div.content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 450px;
        text-align: center;

        & div.logo {
            display: flex;
            align-items: center;
            gap: .5rem;

            & img {
                max-width: 45px;
            }

            & span {
                font-size: 1.8rem;
                font-weight: 600;
            }

            &:hover {
                cursor: pointer;
            }
        }

        & h2 {
            font-size: 2.3rem;
            font-weight: 500;
        }

        & p {
            margin-top: 0;
            font-size: 1.2rem;
        }

        & div.social-buttons {
            display: flex;
            gap: 1rem;
            width: 100%;
            margin: 1rem 0;

            & button {
                flex-grow: 1;
                border: 1px solid rgba(103, 116, 138, 0.445);
                border-radius: 7px;

                display: flex;
                gap: .5rem;
                align-items: center;
                justify-content: center;
                padding: .6rem 0;
                font-size: 1.1rem;

                & i {
                    font-size: 1.2rem;
                }

                @media only screen and (max-width: 350px) {
                    font-size: .95rem;
                    gap: .25rem;
                }
            }
        }

        & form {
            display: flex;
            flex-direction: column;
            width: 100%;

            & label {
                text-align: start;
                margin-right: auto;
                margin-bottom: .5rem;
            }

            & div.input-label {
                width: 100%;
                position: relative;

                & label {
                    display: inline-block;
                    width: 100%;
                    text-align: start;
                    margin-bottom: .5rem;
                }

                & span {
                    font-size: .95rem;
                    position: absolute;
                    top: calc(100% - 20px);
                    right: 0;

                    &:hover {
                        cursor: pointer;
                        text-decoration: underline;
                    }
                }
            }

            & input {
                box-sizing: border-box;
                width: 100%;
                margin-bottom: 1.5rem;
                padding: 1rem;
                border-radius: 8px;
                font-size: 1.1rem;
                border: 1px solid rgba(103, 116, 138, 0.445);
            }

            & button {
                position: relative;
                background-color: var(--secondary-accent-color);
                color: white;
                padding: 1rem;
                font-size: 1.1rem;
                margin-top: 1.5rem;
                border-radius: 8px;
                display: flex;

                & span {
                    margin-left: auto;
                    margin-right: auto;
                    font-size: 1.1rem;
                }

                & i {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: 2rem;
                }

                &:hover {
                    background-color: var(--accent-color);
                }
            }

            p {
                margin-top: 1rem;
                font-size: 1.1rem;
                & span {
                    white-space: nowrap;
                    color: var(--text-primary-color);
                    font-weight: 600;

                    &:hover {
                        text-decoration: underline;
                    }
                }

                & i {
                    margin-left: .3rem;
                    translate: 0 2px;
                }
            }
        }
    }
}
</style>