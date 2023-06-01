import { defineStore } from "pinia";
import { ref } from "vue";

export const useAgenciesStore = defineStore('agencies', () => {
    const agencies = ref([
        {
            name: "OTO DEV",
            freelance: false,
            price: 5000,
            countries: ["Italy", "Spain", "Portugal"],
            description: `We are OTO Dev. A Digital Agency and software house based in Athens Greece, working with major brands and agencies around the globe. Our team consists of experienced professionals and field experts, passionate about modern technologies and the digital industry. With 20+ years of experience we specialize in development, design and marketing for web, mobile and e-commerce. When it comes to growing your idea, product or company, no job is too small -nor too big- for us to handle. We offer tailor made solutions that aid companies to go from idea to product launch.`,
        },
        {
            name: "OTO DEV",
            freelance: false,
            price: 5000,
            countries: ["Italy", "Spain", "Portugal"],
            description: `We are OTO Dev. A Digital Agency and software house based in Athens Greece, working with major brands and agencies around the globe. Our team consists of experienced professionals and field experts, passionate about modern technologies and the digital industry. With 20+ years of experience we specialize in development, design and marketing for web, mobile and e-commerce. When it comes to growing your idea, product or company, no job is too small -nor too big- for us to handle. We offer tailor made solutions that aid companies to go from idea to product launch.`,
        },
        {
            name: "OTO DEV",
            freelance: false,
            price: 5000,
            countries: ["Italy", "Spain", "Portugal"],
            description: `We are OTO Dev. A Digital Agency and software house based in Athens Greece, working with major brands and agencies around the globe. Our team consists of experienced professionals and field experts, passionate about modern technologies and the digital industry. With 20+ years of experience we specialize in development, design and marketing for web, mobile and e-commerce. When it comes to growing your idea, product or company, no job is too small -nor too big- for us to handle. We offer tailor made solutions that aid companies to go from idea to product launch.`,
        },
        {
            name: "OTO DEV",
            freelance: false,
            price: 5000,
            countries: ["Italy", "Spain", "Portugal"],
            description: `We are OTO Dev. A Digital Agency and software house based in Athens Greece, working with major brands and agencies around the globe. Our team consists of experienced professionals and field experts, passionate about modern technologies and the digital industry. With 20+ years of experience we specialize in development, design and marketing for web, mobile and e-commerce. When it comes to growing your idea, product or company, no job is too small -nor too big- for us to handle. We offer tailor made solutions that aid companies to go from idea to product launch.`,
        },
        {
            name: "OTO DEV",
            freelance: true,
            price: 5000,
            countries: ["Italy", "Spain", "Portugal"],
            description: `We are OTO Dev. A Digital Agency and software house based in Athens Greece, working with major brands and agencies around the globe. Our team consists of experienced professionals and field experts, passionate about modern technologies and the digital industry. With 20+ years of experience we specialize in development, design and marketing for web, mobile and e-commerce. When it comes to growing your idea, product or company, no job is too small -nor too big- for us to handle. We offer tailor made solutions that aid companies to go from idea to product launch.`,
        },
        {
            name: "OTO DEV",
            freelance: false,
            price: 5000,
            countries: ["Italy", "Spain", "Portugal"],
            description: `We are OTO Dev. A Digital Agency and software house based in Athens Greece, working with major brands and agencies around the globe. Our team consists of experienced professionals and field experts, passionate about modern technologies and the digital industry. With 20+ years of experience we specialize in development, design and marketing for web, mobile and e-commerce. When it comes to growing your idea, product or company, no job is too small -nor too big- for us to handle. We offer tailor made solutions that aid companies to go from idea to product launch.`,
        },
        
    ]);

    return { agencies };
})