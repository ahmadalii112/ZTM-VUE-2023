// Composition Functions
import {computed, ref} from "vue";

export const useNumber = () => {
    let num = ref(0); // ref function returns an object
    console.log(num);
    function increment(){
        num.value++
    }

    const double = computed(() => {
        return num.value * 2;
    })

    return {
        num, increment, double
    };

}