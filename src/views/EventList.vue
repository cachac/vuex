<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard 
      v-for="event in events" 
      :key="event.id" 
      :event="event" />
    <template v-if="page != 1">
      <router-link 
        :to="{ name: 'event-list', query: { page: page - 1 } }" 
        rel="prev">Prev Page</router-link> |
    </template>
    <router-link :to="{ name: 'event-list', query: { page: page + 1 } }">Next Page</router-link>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
// import EventService from '@/services/EventService.js';
import { mapState } from 'vuex';

export default {
  components: {
    EventCard
  },
  computed: {
    page() {
      // What page we're currently on
      return parseInt(this.$route.query.page) || 1;
    },
    ...mapState(['events'])
  },
  created() {
    this.$store.dispatch('fetchEvents', {
      perPage: 3,
      page: this.page
    });
  }
};
</script>
