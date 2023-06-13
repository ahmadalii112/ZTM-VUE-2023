import {ref, watchEffect} from "vue";

export const usePhrase = () => {
    const phrase = ref("");
    const reveredPhrase = ref("");
    const num = ref("");

    // One Way of using Watcher
    watchEffect(() => {
        reveredPhrase.value = phrase.value.split("").reverse().join("");
    });

    return {
        phrase,
        reveredPhrase,
    }
}