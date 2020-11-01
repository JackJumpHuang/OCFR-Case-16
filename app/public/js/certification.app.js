var app = new Vue({
  el: "#certificateId",
  data: {
    certifications: [{
      Certificate_ID: "",
      Title: "",
      Agency: "",
      Expire_Date: ""
    }],
    certMembers: [{
      First_Name: "",
      Last_Name: "",
      Member_ID: "",
      Certificate_ID: ""
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
    },
    activeID: []
    },
  methods: {
    updateCert( evt ){
      fetch('api/certification/updateCert.php', {
        method: 'POST',
        body: JSON.stringify(this.activeCert),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
      });

    },
    fetchUser(){
      fetch("api/certification/")
      .then(response => response.json())
      .then(json => {
        this.certifications=json;
        console.log(this.certifications);
      })

    },
    fetchCertMembers(){
      fetch("api/certification/getMembers.php")
      .then(response => response.json())
      .then(json => {
        this.certMembers=json;
        console.log(this.certMembers);
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
    },
    deleteCert(){
      console.log(this.activeID)
      fetch("api/certification/deleteCert.php", {
        method: 'POST',
        body: JSON.stringify(this.ActiveID),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      });

      console.log("Creating Posting...");
      console.log(this.activeID);

    }

  },
  created(){

    this.fetchUser();
    this.fetchCertMembers();
  }
});
