

const mul = new Vue({
  el: '#multiplier',
  data: {
    
    input1: 5,
    input2: 3,
  },
  computed: {
    tasks: function () {
      const i = this.input1
      const j = this.input2
      const z=i*j
      return "your input is "+this.input1+" and "+this.input2+"\nyour Total tasks is."+z
    }
  }
})