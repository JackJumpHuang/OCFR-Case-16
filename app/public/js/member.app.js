var app = new Vue({
  el: "#membersId",
  data: {
    members: [{
      Member_ID: "",
      First_Name: "",
      Last_Name: "hmmmm",
      Gender: "",
      Date_of_Birth: "",
      Email: "",
      Address: "",
      Position_Name: "",
      Start_Date: "",
      Member_Status: "",
      Radio_Number: ""
    }]
  },
  methods: {
    fetchUser(){
      fetch("api/Members/")
      .then(response => response.json())
      .then(json => {
        this.members=json;
        console.log(this.members);
      })
    }

  },
  created(){
  
    this.fetchUser();
  }
});
