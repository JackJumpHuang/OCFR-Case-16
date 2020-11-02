var app = new Vue({
  el:"#Expired",
  data:{
    lists:[{
      Association_ID:"",
      First_Name:"",
      Last_Name:"",
      Member_ID:"",
      Certification:"",
      Certificate_ID:"",
      Expire_Date:""
    }]
  },
  methods:{
    fetchUser(){
      fetch("api/report1/")
      .then(response => response.json())
      .then(json => {
        this.lists=json;
        console.log(this.lists);
      })
    },

  },
  created(){
    this.fetchUser();
  }
});
