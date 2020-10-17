var app = new Vue({
  el: "#certificationId",
  data: {
    certifications: [{
      Certificate_ID: "",
      Title:"",
      Agency:"",
      Expire_Date:""
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
