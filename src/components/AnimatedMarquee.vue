<template>
    <div>
        <div class="marquee-container">
            <div class="marquee">
                <ul class="marquee-content">
                    <li class="small">
                        <AboutYouLogo />
                    </li>
                    <li>
                        <AppleLogo />
                    </li>
                    <li class="small">
                        <BackMarketLogo />
                    </li>
                    <li>
                        <GitLabLogo />
                    </li>
                    <li>
                        <NasaLogo />
                    </li>
                    <li>
                        <RokuLogo />
                    </li>
                    <li class="small">
                        <TelefonicaLogo />
                    </li>
                    <li class="small">
                        <GoogleLogo />
                    </li>
                    <li>
                        <ColaLogo />
                    </li>
                </ul>
                <ul class="marquee-content"
                    aria-hidden="true">
                    <li class="small">
                        <AboutYouLogo />
                    </li>
                    <li>
                        <AppleLogo />
                    </li>
                    <li class="small">
                        <BackMarketLogo />
                    </li>
                    <li>
                        <GitLabLogo />
                    </li>
                    <li>
                        <NasaLogo />
                    </li>
                    <li>
                        <RokuLogo />
                    </li>
                    <li class="small">
                        <TelefonicaLogo />
                    </li>
                    <li class="small">
                        <GoogleLogo />
                    </li>
                    <li>
                        <ColaLogo />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import AboutYouLogo from '../assets/marquee-logos/about-you-logo.svg';
import AppleLogo from '../assets/marquee-logos/apple-logo.svg';
import BackMarketLogo from '../assets/marquee-logos/backmarket-logo.svg';
import GitLabLogo from '../assets/marquee-logos/gitlab-logo.svg';
import NasaLogo from '../assets/marquee-logos/nasa-logo.svg';
import RokuLogo from '../assets/marquee-logos/roku-logo.svg';
import TelefonicaLogo from '../assets/marquee-logos/telefonica-logo.svg';
import GoogleLogo from '../assets/marquee-logos/Google_2015_logo.svg';
import ColaLogo from '../assets/marquee-logos/Coca-Cola_logo.svg';
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
                width: 80px;
                height: 50px;

                & svg {
                    height: 100%;
                    width: 100%;
                }

                &.small {
                    & svg {
                        scale: 1.2;
                    }
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
}</style>