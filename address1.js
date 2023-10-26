class addressBook{
    constructor(form,name,email,mobile,landline,website,address) {
        this.form=form;
        this.name=name;
        this.email=email;
        this.mobile=mobile;
        this.landline=landline;
        this.website=website;
        this.address=address;
    }
}
class information{
   detailsBox(name,email,mobile,landline,website,address){
        
            return displayStudentDetails(name,email,mobile,landline,website,address);
 }
    update(name,email,mobile,landline,website,address,id1){
       
        return editForm(id1,name,email,mobile,landline,website,address);
    }
    delete(id){
      return deleteForm(id);
    }
    getid(){
        var userinputId;
        return getidelement(userinputId);
    }
    get(myarr){
       return getitems(myarr);
    }
  
}
var myarr = [];
const detailInformation = new information();

