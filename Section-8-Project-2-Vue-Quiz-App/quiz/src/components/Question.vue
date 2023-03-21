<template>
  <div class="questions-ctr">
    <div class="progress">
      <div 
        class="bar"
        :style="{width: `${(questionsAnswerd/questions.length)*100}%`}"
      ></div>
      <div class="status">{{questionsAnswerd}} out of {{ questions.length}} questions answered

      </div>
    </div>
  <transition-group name="fade">
    <div
      class="single-question"
      v-for="(question, qi) in questions"
      :key="question.q"
      v-show="questionsAnswerd === qi"
    >
      <div class="question">{{ question.q }}</div>
      <div class="answers">
        <div
          class="answer"
          v-for="answer in question.answers"
          :key="answer.text"
          @click.prevent="selectAnswer(answer.is_correct)"
        >
          {{ answer.text }}
        </div>
      </div>
    </div>
  </transition-group>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: ["questions", "questionsAnswerd"],
  emits: ["question-answerd"],
  methods: {
    selectAnswer(is_correct) {
        this.$emit("question-answerd", is_correct)
    },
  },
};
</script>

<style></style>
