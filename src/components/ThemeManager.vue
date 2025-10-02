<script setup lang="ts">
import { type Theme } from '../types/Theme';

interface Props {
  theme: Theme;
}

interface Emits {
  (e: 'update:theme', theme: Theme): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const updateTheme = (key: keyof Theme, value: string | number) => {
  emit('update:theme', {
    ...props.theme,
    [key]: value
  });
};
</script>

<template>
  <div class="theme-manager">
    <h2>Theme Settings</h2>

    <div class="controls">
      <div class="control-group">
        <label for="primary-color">Primary Color:</label>
        <input
            id="primary-color"
            type="color"
            :value="theme.primaryColor"
            @input="updateTheme('primaryColor', ($event.target as HTMLInputElement).value)"
        />
        <span>{{ theme.primaryColor }}</span>
      </div>

      <div class="control-group">
        <label for="secondary-color">Secondary Color:</label>
        <input
            id="secondary-color"
            type="color"
            :value="theme.secondaryColor"
            @input="updateTheme('secondaryColor', ($event.target as HTMLInputElement).value)"
        />
        <span>{{ theme.secondaryColor }}</span>
      </div>

      <div class="control-group">
        <label for="bg-color">Background Color:</label>
        <input
            id="bg-color"
            type="color"
            :value="theme.backgroundColor"
            @input="updateTheme('backgroundColor', ($event.target as HTMLInputElement).value)"
        />
        <span>{{ theme.backgroundColor }}</span>
      </div>

      <div class="control-group">
        <label for="text-color">Text Color:</label>
        <input
            id="text-color"
            type="color"
            :value="theme.textColor"
            @input="updateTheme('textColor', ($event.target as HTMLInputElement).value)"
        />
        <span>{{ theme.textColor }}</span>
      </div>

      <div class="control-group">
        <label for="border-color">Border Color:</label>
        <input
            id="border-color"
            type="color"
            :value="theme.borderColor"
            @input="updateTheme('borderColor', ($event.target as HTMLInputElement).value)"
        />
        <span>{{ theme.borderColor }}</span>
      </div>

      <div class="control-group">
        <label for="font-size">Font Size (px):</label>
        <input
            id="font-size"
            type="number"
            :value="theme.fontSize"
            min="10"
            max="32"
            @input="updateTheme('fontSize', Number(($event.target as HTMLInputElement).value))"
        />
      </div>

      <div class="control-group">
        <label for="border-radius">Border Radius (px):</label>
        <input
            id="border-radius"
            type="number"
            :value="theme.borderRadius"
            min="0"
            max="50"
            @input="updateTheme('borderRadius', Number(($event.target as HTMLInputElement).value))"
        />
      </div>

      <div class="control-group">
        <label for="border-width">Border Width (px):</label>
        <input
            id="border-width"
            type="number"
            :value="theme.borderWidth"
            min="0"
            max="10"
            @input="updateTheme('borderWidth', Number(($event.target as HTMLInputElement).value))"
        />
      </div>

      <div class="control-group">
        <label for="border-style">Border Style:</label>
        <select
            id="border-style"
            :value="theme.borderStyle"
            @change="updateTheme('borderStyle', ($event.target as HTMLSelectElement).value)"
        >
          <option value="solid">Solid</option>
          <option value="dashed">Dashed</option>
          <option value="dotted">Dotted</option>
          <option value="double">Double</option>
          <option value="groove">Groove</option>
          <option value="ridge">Ridge</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>
.theme-manager {
  padding: 20px;
  background: var(--background-color);
  border-radius: var(--border-radius);
  border: var(--border-width) var(--border-style) var(--border-color);
}

h2 {
  margin-bottom: 20px;
  font-size: 24px;
}

.controls {
  display: grid;
  gap: 16px;
}

.control-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.control-group label {
  min-width: 140px;
  font-weight: 500;
}

.control-group input[type="color"] {
  width: 60px;
  height: 40px;
  border: var(--border-width) var(--border-style) var(--border-color);
  border-radius: var(--border-radius);
  cursor: pointer;
}

.control-group input[type="number"] {
  width: 80px;
  padding: 8px 12px;
  border: var(--border-width) var(--border-style) var(--border-color);
  border-radius: var(--border-radius);
  font-size: 14px;
}

.control-group select {
  padding: 8px 12px;
  border: var(--border-width) var(--border-style) var(--border-color);
  border-radius: var(--border-radius);
  font-size: 14px;
  cursor: pointer;
  min-width: 150px;
}

.control-group span {
  font-family: monospace;
  font-size: 14px;
}
</style>