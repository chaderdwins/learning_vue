<template>
    <div class="container">
        <SearchBar v-on:termChange="onTermChange"></SearchBar>
        <div class="row">
            <VideoDetail v-bind:video="selectedVideo"/>
            <VideoList @videoSelect="onVideoSelect" v-bind:videos="videos"></VideoList> 
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyCCiM9V1KH6WdAhyGWZEMUXOPxlJf7ocsY'

export default {
    name: 'App', //define properties within default
    components: {
        SearchBar: SearchBar,
        VideoList: VideoList,
        VideoDetail

    },
    data(){
        return { videos: [], selectedVideo: null }; //initializes data, array of objects
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
        },
        onVideoSelect(video) {
            this.selectedVideo = video;
        }
    }

}
</script>

<style>

</style>




