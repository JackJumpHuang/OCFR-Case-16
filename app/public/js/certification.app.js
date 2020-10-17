var app = new Vue({
  el: "#certificationsId",
  data: {
    certifications: [{
      Certificate_ID: "",
      Title: "",
      Agency: "",
      Expire_Date: ""
    }],
    newCert:{

      Title:"",
      Agency:"",
      Expire_Date:""
    }
  },
  methods: {
    fetchCert(){
      fetch("api/certification/")
      .then(response => response.json())
      .then(json => {
        this.certifications=json;
        console.log(this.certifications);
      })
    },
    addCert( evt ){
      console.log("cert submitted");

      fetch("api/users/insertCert.php",{
        method:"POST",
        body: JSON.stringify(this.newCert),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("returned from post, ", json)

      });
    }

  },
  created(){

    this.fetchCert();
  }
});
