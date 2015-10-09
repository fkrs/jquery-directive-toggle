(function($){

  var toggleHelper = {
    
    init: function(){
      this._bindEvents();
    },
      
    _bindEvents: function(){
      var self = this;
      $('[data-toggle]').click(function(){
        self._toggleTarget($(this));
      });
    },
      
    _toggleTarget: function($el){
        var $target = $($el.data('toggle')),
            className = $el.data('toggle-class') || 'hidden';
        $target.toggleClass(className);
    }
    
  };
  
  toggleHelper.init();
  
}(jQuery));
