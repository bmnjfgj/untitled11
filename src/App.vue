<script setup lang="ts">
import { ref, computed, type CSSProperties } from 'vue';
import ThemeManager from './components/ThemeManager.vue';
import Preview from './components/Preview.vue';
import { type Theme, defaultTheme } from './types/Theme';

const theme = ref<Theme>({ ...defaultTheme });

const handleThemeUpdate = (newTheme: Theme) => {
  theme.value = newTheme;
};

const cssVariables = computed<CSSProperties>(() => ({
  '--primary-color': theme.value.primaryColor,
  '--secondary-color': theme.value.secondaryColor,
  '--background-color': theme.value.backgroundColor,
  '--text-color': theme.value.textColor,
  '--font-size': `${theme.value.fontSize}px`,
  '--border-radius': `${theme.value.borderRadius}px`,
  '--border-style': theme.value.borderStyle,
  '--border-width': `${theme.value.borderWidth}px`,
  '--border-color': theme.value.borderColor,
}));
</script>

<template>
  <div class="app" :style="cssVariables">
    <header class="app-header">
      <h1>Theme and Styles Manager</h1>
      <p>Customize the theme and see the result in real time</p>
    </header>

    <div class="app-content">
      <aside class="sidebar">
        <ThemeManager :theme="theme" @update:theme="handleThemeUpdate" />
      </aside>

      <main class="main-content">
        <Preview :theme="theme" />
      </main>
    </div>
  </div>
</template>

<style scoped>
.app {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  background: var(--background-color);
  color: var(--text-color);
  font-size: var(--font-size);
}

.app-header {
  text-align: center;
  margin-bottom: 30px;
}

.app-header h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.app-header p {
  font-size: 18px;
  opacity: 0.95;
}

.app-content {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 20px;
}

.sidebar {
  position: sticky;
  top: 20px;
}

.main-content {
  min-height: 600px;
}

@media (max-width: 1024px) {
  .app-content {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: static;
  }
}
</style>