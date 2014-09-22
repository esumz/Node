/**
 * Created by NgocSon on 9/10/14.
 */
 exports.install = function(framewrork){
     framewrork.route('/',view_homepage);
 }

function view_homepage(){
    var self = this;

    self.view('homepage');
}