exports.Step5 = {


verifyText: function(){

var abc = element(by.className('text-medium text-uc ng-binding'));
expect(abc.getText()).toEqual('THANK YOU FOR SIGNING UP');

}


}