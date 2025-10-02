<script setup lang="ts">
import { type Theme } from '../types/Theme';

interface Props {
  theme: Theme;
}
defineProps<Props>();
</script>

<template>
  <div class="preview">
    <div class="preview-content">
      <h1 class="preview-title">Theme Preview</h1>

      <p class="preview-text">
        This is demo text showing how your theme looks.
        You can change colors, font size, and other settings
        using the panel on the left.
      </p>

      <div class="preview-cards">
        <div class="card card-primary">
          <h3>Primary Card</h3>
          <p>Uses primary theme color</p>
          <button class="btn btn-primary">Primary Button</button>
        </div>

        <div class="card card-secondary">
          <h3>Secondary Card</h3>
          <p>Uses secondary theme color</p>
          <button class="btn btn-secondary">Secondary Button</button>
        </div>
      </div>

      <div class="preview-section">
        <h2>Border Example</h2>
        <div class="bordered-content">
          <p>
            This block shows border settings: style, width, and color.
            Try changing border params to see the difference.
          </p>
        </div>
      </div>

      <div class="preview-list">
        <h2>List of Items</h2>
        <ul>
          <li>First list item</li>
          <li>Second list item</li>
          <li>Third list item</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.preview {
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-height: 600px;
}

.preview-content {
  max-width: 800px;
  margin: 0 auto;
}

.preview-title {
  font-size: calc(var(--font-size) * 2);
  margin-bottom: 20px;
  color: var(--primary-color);
}

.preview-text {
  line-height: 1.6;
  margin-bottom: 30px;
}

.preview-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.card {
  padding: 20px;
  border-radius: var(--border-radius);
  border: var(--border-width) var(--border-style) var(--border-color);
}

.card h3 {
  margin-bottom: 10px;
  font-size: calc(var(--font-size) * 1.25);
}

.card p {
  margin-bottom: 15px;
  opacity: 0.9;
}

.card-primary {
  background-color: var(--primary-color);
  color: var(--text-color);
}

.card-secondary {
  background-color: var(--secondary-color);
  color: var(--text-color);
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: var(--border-radius);
  font-size: calc(var(--font-size) * 0.9);
  cursor: pointer;
  font-weight: 600;
}

.btn-primary {
  background-color: var(--secondary-color);
  color: white;
}

.btn-secondary {
  background-color: var(--primary-color);
  color: white;
}

.preview-section {
  margin-bottom: 30px;
}

.preview-section h2 {
  font-size: calc(var(--font-size) * 1.5);
  margin-bottom: 15px;
  color: var(--secondary-color);
}

.bordered-content {
  padding: 20px;
  border: var(--border-width) var(--border-style) var(--border-color);
  border-radius: var(--border-radius);
  background-color: rgba(0, 0, 0, 0.02);
}

.preview-list h2 {
  font-size: calc(var(--font-size) * 1.5);
  margin-bottom: 15px;
  color: var(--secondary-color);
}

.preview-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.preview-list li {
  padding: 12px;
  margin-bottom: 8px;
  border-left: 4px solid var(--primary-color);
  background-color: rgba(0, 0, 0, 0.02);
  border-radius: var(--border-radius);
}
</style>