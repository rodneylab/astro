<script lang="ts">
  import { onMount } from "svelte";
  import { button } from "~components/Button.css";
  import theme from "~shared/stores/theme";
  import { screenReaderText } from "~styles/global.css";
  import { darkThemeClass, lightThemeClass } from "../styles/themes.css";
  import MoonIcon from "./MoonIcon.svelte";
  import SunIcon from "./SunIcon.svelte";

  $: darkMode = $theme === "dark";

  onMount(async () => {
    /* sync theme to user setting - this may cause a flash of the wrong theme and can be fixed with
     * Edge functions: see https://www.learnwithjason.dev/blog/css-color-theme-switcher-no-flash
     */
    if (darkMode && document.body.classList.contains(lightThemeClass)) {
      document.body.classList.replace(lightThemeClass, darkThemeClass);
    }
  });

  function handleClick() {
    theme.set(darkMode ? "light" : "dark");
    if (typeof window !== "undefined") {
      if (darkMode) {
        document.body.classList.replace(darkThemeClass, lightThemeClass);
      } else {
        document.body.classList.replace(lightThemeClass, darkThemeClass);
      }
    }
  }
</script>

<button aria-pressed={darkMode} class={button} on:click={handleClick}
  ><span class={screenReaderText}
    >{darkMode ? "Disable dark mode" : "Enable dark mode"}</span
  >{#if darkMode}<SunIcon />{:else}<MoonIcon />{/if}</button
>
