"use strict";(self.webpackChunk_internetarchive_bookreader=self.webpackChunk_internetarchive_bookreader||[]).push([[320],{2024:function(t,e,i){i(8077),i(228);var o,a=i(5311),n=i(5311);a.extend(BookReader.defaultOptions,{enableAutoPlayPlugin:!0}),BookReader.prototype.setup=(o=BookReader.prototype.setup,function(t){o.call(this,t),this.auto=!1,this.autoTimer=null,this.flipDelay=5e3}),BookReader.prototype.init=function(t){return function(e){var i=this;t.call(this,e),this.options.enableAutoPlayPlugin&&this.bind(BookReader.eventNames.stop,(function(){return i.autoStop()}))}}(BookReader.prototype.init),BookReader.prototype.bindNavigationHandlers=function(t){return function(){var e=this;if(t.call(this),this.options.enableAutoPlayPlugin){var i=this.$(".BRicon");i.filter(".play").click((function(){return e.autoToggle(),!1})),i.filter(".pause").click((function(){return e.autoToggle(),!1}))}}}(BookReader.prototype.bindNavigationHandlers),BookReader.prototype.autoToggle=function(t){var e=this;if(this.options.enableAutoPlayPlugin){var i=n.extend({flipSpeed:this.flipSpeed,flipDelay:this.flipDelay},t);this.flipSpeed="number"==typeof i.flipSpeed?i.flipSpeed:this.flipSpeed,this.flipDelay="number"==typeof i.flipDelay?i.flipDelay:this.flipDelay,this.trigger(BookReader.eventNames.stop);var o=!1;this.constMode2up!=this.mode&&(o=!0,this.switchMode(this.constMode2up)),null==this.autoTimer?("rl"==this.pageProgression&&o||this.next({triggerStop:!1}),this.$(".play").hide(),this.$(".pause").show(),this.autoTimer=setInterval((function(){e.animating||(Math.max(e.twoPage.currentIndexL,e.twoPage.currentIndexR)>=e.book.getNumLeafs()-1?e.prev({triggerStop:!1}):e.next({triggerStop:!1}))}),this.flipDelay)):this.autoStop()}},BookReader.prototype.autoStop=function(){this.options.enableAutoPlayPlugin&&null!=this.autoTimer&&(clearInterval(this.autoTimer),this.flipSpeed="fast",this.$(".pause").hide(),this.$(".play").show(),this.autoTimer=null)}}},function(t){t(t.s=2024)}]);
//# sourceMappingURL=plugin.autoplay.js.map