<template>
  <svg
    :class="svgClass"
  >
    <rect
      v-for="(_, index) in totalSquares"
      :key="index"
      :x="getX(index)"
      :y="getY(index)"
      :width="width"
      :height="height"
      :class="getRectClass(index)"
      @mouseenter="handleMouseEnter(index)"
      @mouseleave="handleMouseLeave"
    />
  </svg>
</template>

<script lang="ts" setup>
import { clsx } from "clsx";
import { ref, computed  } from "vue";
import type {HTMLAttributes} from "vue";
const isMobile = ref(false);
onMounted(() => {
  isMobile.value = window.innerWidth <= 768;

  if (isMobile.value) {
    startAutoHover();
  }
});
let intervalId: NodeJS.Timeout;

function startAutoHover() {
  intervalId = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * totalSquares.value);
    hoveredSquare.value = randomIndex;

    setTimeout(() => {
      if (isMobile.value) hoveredSquare.value = null;
    }, 1000); // 
  }, 1100); // 
}
onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId);
});

interface InteractiveGridPatternProps {
  className?: HTMLAttributes["class"];
  squaresClassName?: HTMLAttributes["class"];
  width?: number;
  height?: number;
  squares?: [number, number];
}

const props = withDefaults(defineProps<InteractiveGridPatternProps>(), {
  width: 40,
  height: 40,
});
const numColumns = computed(() => (isMobile.value ? 10 : 60));
const numRows = computed(() => (isMobile.value ? 20 : 60));

const horizontal = computed(() => numColumns.value);
const vertical = computed(() => numRows.value);

const totalSquares = computed(() => horizontal.value * vertical.value);

const hoveredSquare = ref<number | null>(null);

const gridWidth = computed(() => props.width * horizontal.value);
const gridHeight = computed(() => props.height * vertical.value);

function getX(index: number) {
  return (index % horizontal.value) * props.width;
}

function getY(index: number) {
  return Math.floor(index / horizontal.value) * props.height;
}

const svgClass = computed(() =>
  clsx(   
     "absolute inset-0 h-full w-full border border-gray-400/30 overflow-visible",
    props.className,),
);

function getRectClass(index: number) {
  return clsx(
    "transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000",
    hoveredSquare.value === index
      ? "fill-[color:var(--accent-light-active)]/10"
      : "fill-transparent",
    "stroke-[color:var(--accent-dark)]/20",
    props.squaresClassName,
  );
}

function handleMouseEnter(index: number) {
  if (!isMobile.value) {
    hoveredSquare.value = index;
  }
}

function handleMouseLeave() {
  if (!isMobile.value) {
    hoveredSquare.value = null;
  }
}
</script>