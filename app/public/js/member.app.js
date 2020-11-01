var app = new Vue({
  el: "#membersId",
  data: {
    members: [{
      Member_ID: "",
      First_Name: "",
      Last_Name: "",
      Gender: "",
      Date_of_Birth: "",
      Email: "",
      Address: "",
      Position_Name: "",
      Start_Date: "",
      Member_Status: "",
      Phone:"",
      Station_Number:"",
      Radio_Number: "",
      Certification:""
    }],
    newmembers:{
      //Member_ID:"",
      First_Name: "",
      Last_Name: "",
      Gender: "",
      Date_of_Birth: "",
      Email: "",
      Address: "",
      Position_Name: "",
      Start_Date: "",
      Member_Status: "",
      Phone:"",
      Station_Number:"",
      Radio_Number: "",
      Certification:""
    },
    activemembers:{
      Member_ID:"",
      First_Name: "",
      Last_Name: "",
      Gender: "",
      Date_of_Birth: "",
      Email: "",
      Address: "",
      Position_Name: "",
      Start_Date: "",
      Member_Status: "",
      Phone:"",
      Station_Number:"",
      Radio_Number: "",
      Certification:""
    },
    activeID: {
      Member_ID:""
    }
  },
  methods: {
    updateMember( evt ){
      fetch('api/Members/updateMember.php', {
        method: 'POST',
        body: JSON.stringify(this.activemembers),
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
      fetch("api/Members/")
      .then(response => response.json())
      .then(json => {
        this.members=json;
        console.log(this.members);
      })
    },
    addUser( evt ){
      fetch("api/Members/insertMember.php",{
        method:"POST",
        body: JSON.stringify(this.newmembers),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
        })
        .then( response => response.json() )
        .then( json => {
        console.log("Returned from post:", json);
        this.members.push(json[0]);

        });
        console.log("Creating posting...");
        console.log(this.newmembers);
        this.newmembers = this.newmembersData();
    },

    deleteMember(){
        console.log(this.activeID)
        fetch("api/Members/deleteMember.php", {
          method: 'POST',
          body: JSON.stringify(this.activeID),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        });

        console.log("Creating Posting...");
        console.log(this.activeID);

    },

    newmembersData() {
      return{
        //Member_ID:'',
        First_Name: "",
        Last_Name: "",
        Gender: "",
        Date_of_Birth: "",
        Email: "",
        Address: "",
        Position_Name: "",
        Start_Date: "",
        Member_Status: "",
        Phone:"",
        Station_Number:"",
        Radio_Number: "",
        Certification:""
      }
    }


  },
  created(){

    this.fetchUser();
  }
});
