<template>
    <div>
        <SearchBar v-on:termChange="onTermChange"></SearchBar>
        <!-- adding a directive to this tag to communicate from parent to child, v-bind -->
        <VideoList v-bind:videos="videos"></VideoList> 
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
        return { videos: [] }; //initializes data, array of objects
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
                this.videos = response.data.items //response from youtube api
            });
        }
    }

}
</script>

<style>

</style>




