/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        mesh: "hsla(240,68%,8%,1)",
      },
      backgroundImage: {
        mesh: "radial-gradient(at 81% 71%, hsla(94,8%,8%,1) 0px, transparent 50%), radial-gradient(at 51% 27%, hsla(184,66%,9%,1) 0px, transparent 50%), radial-gradient(at 21% 31%, hsla(195,53%,14%,1) 0px, transparent 50%), radial-gradient(at 4% 60%, hsla(316,27%,9%,1) 0px, transparent 50%)",
      },
      scrollbarWidth: {
        none: "none",
      },
      scrollbarColor: {
        auto: "auto",
      },
      scrollbar: {
        none: "scrollbar-none",
      },
    },
    variants: {
      scrollbarWidth: ["responsive"],
      scrollbarColor: ["responsive", "hover", "focus"],
      scrollbar: ["responsive"],
    },
  },
  plugins: [],
};
