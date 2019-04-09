<template>
    <ul class="list-group">
        <VideoListItem 
        v-for="video in videos"
        v-bind:video="video"
        v-bind:key="video.etag"
        >
        </VideoListItem>
    </ul>
</template>


<script>
import VideoListItem from './VideoListItem';

export default {
  name: 'VideoList',
  components: {
    VideoListItem
  },
  // props will tell the child what to expect to receive from the parent
  props: {
    videos: Array
  }
};
</script>

<style>

</style>


