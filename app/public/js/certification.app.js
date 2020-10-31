var app = new Vue({
  el: "#certificateId",
  data: {
    certifications: [{
      Certificate_ID: "",
      Title: "",
      Agency: "",
      Expire_Date: ""
    }],
    newCert:{

      Title: "",
      Agency: "",
      Expire_Date: ""
    },
    activeCert: {
      Certificate_ID: "",
      Title: "",
      Agency: "",
      Expire_Date: ""
    }
  },
  methods: {
    fetchUser(){
      fetch("api/certification/")
      .then(response => response.json())
      .then(json => {
        this.certifications=json;
        console.log(this.certifications);
      })
    },
    addCert ( evt ){
      fetch("api/certification/insertCert.php",{
        method:"POST",
        body: JSON.stringify(this.newCert),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        this.certifications.push(json[0]);
        this.newCert = this.newCertData();
      });
      console.log("Creating posting...");
      console.log(this.newCert);
    },
    newCertData() {
      return{
        Title: "",
        Agency: "",
        Expire_Date: ""
      }
    }

  },
  created(){

    this.fetchUser();
  }
});
