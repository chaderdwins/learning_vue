<template>
    <li class="list-group-item">
        <img v-bind:src="thumbnailUrl"/>
        {{ video.snippet.title }}
    </li>
</template>
<script>
export default {
    name: 'VideoListItem',
    props: {
        video: Array
    },
    computed: {
        thumbnailUrl () { 
            return this.video.snippet.thumbnails.default.url;
        }
    }
}
</script>