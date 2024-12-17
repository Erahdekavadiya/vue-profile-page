# Vue Profile Page

This is a dynamic and visually engaging profile page created using Vue.js and Vuetify, designed to showcase skills, personal information, and projects in a visually appealing way. The page includes smooth animations, an interactive custom cursor, and modern UI elements to impress visitors and showcase your talents.

## Features

- **Interactive Skill Slider**: Display your skills with a slider to indicate the proficiency level.
- **Animated Background**: The skill cards have a dynamic, shifting gradient background.
- **Custom Cursor**: A unique and interactive mouse cursor effect that follows the user's movements.
- **Responsive Design**: Optimized for all screen sizes using Vuetify’s grid system.
- **Modern UI Elements**: Built with Vuetify components for a professional and polished look.

## Requirements

- Node.js (version 12 or later)
- Vue.js (version 3.x)
- Vuetify (version 3.x)

## Installation

### Step 1: Clone the Repository

Clone the repository to your local machine.

```bash
git clone https://github.com/Erahdekavadiya/vue-profile-page.git
```

### Step 2: Install Dependencies

Navigate to the project folder and install the required dependencies.

```bash
cd vue-profile-page
npm install
```

### Step 3: Run the Application

Once the dependencies are installed, run the development server to preview your profile page.

```bash
npm run serve
```

Open your browser and visit `http://localhost:8080` to view your profile page.

## Features Overview

- **Skill Slider**: Uses Vuetify's `v-slider` component to visually represent your skill levels with interactive sliders.
- **Animated Background for Skills**: A smooth animated gradient background that adds a dynamic touch to each skill card.
- **Custom Cursor**: Adds a custom interactive cursor that reacts to mouse movements, enhancing the user experience.
- **Vue.js & Vuetify**: The app uses Vue 3 with Vuetify to provide a modern and responsive UI.
  
## Technologies Used

- **Vue.js**: The JavaScript framework used to build the app’s frontend.
- **Vuetify**: A material design component framework for Vue.js that helps create visually attractive UI elements.
- **CSS Animations**: Used for adding subtle animations to the skill cards, sliders, and background.
- **Custom Cursor**: A unique cursor effect implemented with CSS for an interactive user experience.

## File Structure

The project follows a typical Vue.js structure:

```
vue-profile-page/
├── node_modules/           # Installed dependencies
├── public/                 # Public assets like index.html
├── src/                    # Main source files for the app
│   ├── assets/             # Images, icons, etc.
│   ├── components/         # Vue components like SkillCard, etc.
│   ├── App.vue             # Main Vue component
│   ├── main.js             # Main entry point of the Vue app
├── package.json            # Project configuration and dependencies
├── README.md               # This file
└── vue.config.js            # Vue CLI configuration
```

## Customization

You can easily customize the profile page by updating the following:

- **Skills Section**: Modify the `skills` array in the `data` section to add, remove, or change skills and their proficiency levels.
- **Skill Cards**: You can modify the style of the skill cards or add additional animations in the `style` section.
- **Personal Information**: Update the personal details, such as name, description, and any other relevant information in the `App.vue` file.

## License

This project is open-source.

### Notes:
- Replace the placeholder in the `git clone` command with your own repository link if you plan to share it publicly.
- Customize any other sections based on your project details and requirements.