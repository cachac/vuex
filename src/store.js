import Vue from 'vue';
import Vuex from 'vuex';
import eventService from '@/services/EventService.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Car Ch' },
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false }
    ],
    events: [
      { id: 1, title: 'uno', organizer: 'nadie' },
      { id: 2, title: 'dos', organizer: 'nadie' },
      { id: 3, title: 'tres', organizer: 'nadie' },
      { id: 4, title: 'cuatro4', organizer: 'nadie' }
    ],
    count: 0
  },
  mutations: {
    INCREMENT_COUNT(state, value) {
      state.count += value
    },
    ADD_EVENT(state, event){
      state.events.push(event)
    }
  },
  actions: {
    createEvent({commit}, event){
      eventService.postEvent(event);
      commit('ADD_EVENT', event);
    }
  },
  getters:{
    catLength: state => {
      return state.categories.length
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    activeTodosCount: state => {
      return state.todos.filter(todo => !todo.done).length
      // return state.categories.length - getters.doneTodos.length
    },
    getEventById: (state) => (id) => {
      return state.events.find(event => event.id === id)
    }
  }
});
