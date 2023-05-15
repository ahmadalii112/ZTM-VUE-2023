import {defineStore} from "pinia";

export const useTaskStore = defineStore("taskStore", {
    state: () => ({
        tasks: [
            {id: 1, title: "Learn React", isFavorite: true},
            {id: 2, title: "Learn Vue", isFavorite: true},
            {id: 3, title: "Learn Angular", isFavorite: false},
        ],
        // we can add multiple property down here as well 👇🏻
        name: "Ahmad Ali"
        // When you have different type of data then you can use different stores for them
    }),
    getters: {
        favs() {
            // this refers to state
            return this.tasks.filter(t => t.isFavorite);
        },
        totalCount: (state) => {
            return state.tasks.length
        },
        favoriteCount() {
            return this.tasks.reduce((previousValue, currentValue) => {
                return currentValue.isFavorite
                    ? previousValue + 1
                    : previousValue
            }, 0);
        }
    },
    actions: {
        addTask(task) {
            this.tasks.push(task);
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter( t => {
                return t.id !== id
            })
        },
        toggleFav(id) {
            const task = this.tasks.find(t => t.id === id);
            task.isFavorite = !task.isFavorite
        }
    }
})