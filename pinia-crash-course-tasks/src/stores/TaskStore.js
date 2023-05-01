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
})