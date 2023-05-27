<template>
    <main>
        <!--  heading  -->
        <header>
            <img src="./assets/pinia-logo.svg" alt="pinia logo">
            <h1> Pinia Tasks</h1>
        </header>
        <!--   New Tasks Form -->
        <div class="new-task-form">
            <TaskForm />
        </div>
        <!--   filter nav     -->
        <nav class="filter">
            <button @click="filter = 'all'">All Tasks</button>
            <button @click="filter = 'favs'">Fav Tasks</button>
        </nav>
        <!--  task list -->
        <div class="task-list" v-if="filter === 'all'">
            <p>You have {{ taskStore.totalCount }} tasks left to do</p>
            <div v-for="task in taskStore.tasks">
                <TaskDetails :task="task"/>
            </div>
        </div>
        <!--  Favorite list -->
        <div class="task-list" v-if="filter === 'favs'">
            <p>You have {{ taskStore.favoriteCount}} favorite left to do</p>
            <div v-for="task in taskStore.favs">
                <TaskDetails :task="task"/>
            </div>
        </div>
    </main>
</template>

<script>
import {useTaskStore} from "@/stores/TaskStore";
import TaskDetails from "@/components/TaskDetails.vue";
import {ref} from "vue";
import TaskForm from "@/components/TaskForm.vue";

export default {
    components: {TaskForm, TaskDetails},
    // Composition API
    setup() {
        const taskStore = useTaskStore();
        const filter = ref('all');
        return {
            taskStore, filter
        }
    }
}
</script>