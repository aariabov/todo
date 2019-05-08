/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//init


(function() {
    var model = new app.Model();
    var template = new app.Template();
    var view = new app.View(template);
    var controller = new app.Controller(view, model);

    function setView() {
		controller.setView(document.location.hash);
    }
    
    window.addEventListener('load', setView);
    window.addEventListener('hashchange', setView);
})();