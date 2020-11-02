var app = new Vue({
  el:"#Expired",
  data:{
    lists:[{
      First_Name:"",
      Last_Name:"",
      Member_ID:"",
      Certification:"",
      Certificate_ID:"",
      Expire_Date:""
    }]
  },
  methods:{
    fetchExpiredlist(){
      fetch("api/report1/expiredlist.php")
      .then(response => response.json())
      .then(json => {
        this.lists=json;
        console.log(this.lists);
      })
    },

  },
  created(){
    this.fetchExpiredlist();
  }
});
