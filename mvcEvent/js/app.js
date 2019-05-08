/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//init


(function() {
    var model = new Model();
    var view = new View(model);
    var controller = new Controller(view, model);
})();