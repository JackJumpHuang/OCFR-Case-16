var app = new Vue({
  el: "#certificateId",
  data: {
    certifications: [{
      Certificate_ID: "",
      Title: "",
      Agent: "",
      Expire_Date: "",
    }]
  },
  methods: {
    fetchUser(){
      fetch("api/Certification/")
      .then(response => response.json())
      .then(json => {
        this.certifications=json;
        console.log(this.certifications);
      })
    }

  },
  created(){

    this.fetchUser();
  }
});
