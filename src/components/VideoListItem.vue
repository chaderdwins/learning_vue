<template>
    <li class="media" @click="onVideoSelect">
        <img class="mr-3" v-bind:src="thumbnailUrl"/>
        <div class="media-body">
            {{ video.snippet.title }}
        </div>
    </li>
</template>
<script>
export default {
    name: 'VideoListItem',
    props: ['video'],
    computed: {
        thumbnailUrl () { 
            return this.video.snippet.thumbnails.default.url;
        }
    },
    methods: {
        onVideoSelect() {
            this.$emit('videoSelect', this.video);
        }
    }
}
</script>

<style scoped>
    li {
        cursor: pointer;
    }

    li:hover {
        background-color: #eee;
    }
</style>
