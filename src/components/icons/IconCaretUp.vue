<template>
    <svg stroke="var(--c-accent-secondary)" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
        <rect fill="none" height="256" width="256" />
        <polyline fill="none" points="48 160 128 80 208 160" :stroke="color" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" />
    </svg>
</template>


<script>
export default {
    props: ['color']
}
</script>