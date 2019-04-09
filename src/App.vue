<template>
    <div>
        <SearchBar v-on:termChange="onTermChange"></SearchBar>
        <VideoList></VideoList>
        {{ videos.length }}
    </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList'
const API_KEY = 'AIzaSyCCiM9V1KH6WdAhyGWZEMUXOPxlJf7ocsY'

export default {
    name: 'App', //define properties within default
    components: {
        SearchBar: SearchBar,
        VideoList: VideoList

    },
    data(){
        return { videos: [] };
    },
    methods: {
        onTermChange(searchTerm){
            //executes youtube query w/ promise
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: API_KEY,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm
                }
            }).then(response => {
                this.videos = response.data.items
            });
        }
    }

}
</script>

<style>

</style>




