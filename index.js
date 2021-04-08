const app = new Vue({
  el: "#app",
  data: {
    title: "GYM CON VUE",
    itemExcercise: "",
    excerciseAbs: [
      {
        name: "Elevación de rodillas (10 repiticiones)",
        state: false,
      },
      {
        name: "Abdominales normales (10 repiticiones)",
        state: false,
      },
      {
        name: "Plancha (30 segundos)",
        state: false,
      },
      {
        name: "Elevaciones de piernas (10 repiticiones)",
        state: false,
      },
      {
        name: "Russian twists, con o sin peso (10 repiticiones)",
        state: false,
      },
      {
        name: "Crunches (10 repiticiones)",
        state: false,
      },
    ],
    excerciseBra: [
      {
        name: "Flexiones de pecho (10 repiticiones)",
        state: false,
      },
      {
        name:
          "Aperturas isométricas: colócate de pie al lado de una pared, echa el brazo hacia atrás y flexiónalo un poco mientras apoyas la palma de la mano en la pared. Haz resistencia empujando la pared hacia delante durante 15 segundos. Después gírate y haz lo mismo con el otro brazo.",
        state: false,
      },
      {
        name: "Flexiones de triceps (10 repeticiones)",
        state: false,
      },
      {
        name: "Curl (10 repiticiones)",
        state: false,
      },
      {
        name: "Curl isométrico (10 repiticiones)",
        state: false,
      },
    ],
    excercisePier: [
      {
        name: "Sentadillas (10 repiticiones)",
        state: false,
      },
      {
        name: "Zancadas alternas (10 repeticiones)",
        state: false,
      },
      {
        name: "Burpees (10 repeticiones)",
        state: false,
      },
      {
        name: "Puente (10 repiticiones)",
        state: false,
      },
      {
        name: "Gemelos (10 repiticiones)",
        state: false,
      },
    ],
    excercices: [],
    showComplete: true,
  },
  created: function () {
    let datosDb = JSON.parse(localStorage.getItem("gym-vue"));
    if (datosDb !== null) {
      this.excercices = JSON.parse(localStorage.getItem("gym-vue"));
      // console.log(datosDb);
    }
  },
  methods: {
    showExcercises() {
      this.showComplete = !this.showComplete;
    },
    addExcercise() {
      if (this.itemExcercise !== null) {
        this.excercices.push({
          name: this.itemExcercise,
          state: false,
        });
        this.itemExcercise = "";
        // localStorage.setItem("gym-vue", JSON.stringify(this.excercices));
      }
    },
    remove(excercise) {
      console.log(excercise);
      this.excercices.splice(this.excercices.indexOf(excercise), 1);
      //   localStorage.setItem("gym-vue", JSON.stringify(this.excercices));
      //   console.log("eliminar", index);
    },
    clearBoard() {
      this.excercices = [];
    },
  },
  watch: {
    excercices: {
      handler: (updated) => {
        localStorage.setItem("gym-vue", JSON.stringify(updated));
      },
      deep: true,
    },
  },
  computed: {
    pending: function () {
      return this.excercices.filter(function (item) {
        return !item.state;
      });
    },
    completed: function () {
      return this.excercices.filter(function (item) {
        return item.state;
      });
    },
    percentCompleted: function () {
      return (
        Math.floor((this.completed.length / this.excercices.length) * 100) + "%"
      );
    },
  },
});
