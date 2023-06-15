// Composition Functions
import {computed, ref, isRef, isReactive, reactive} from "vue";

export const useNumber = () => {
    let num = ref(0); // ref function returns an object
    const accounts = reactive({
        checking: 3242,
        saving: 242,
    })
    console.log(isRef(num));
    console.log(isReactive(accounts));
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